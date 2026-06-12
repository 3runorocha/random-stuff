# MacBook Headless Setup — Sem Tela com AirPlay

MacBook Air 7,2 (Intel) rodando macOS Monterey 12.7.6, operando sem tela via AirPlay para Samsung CU7700.

---

## 1. Verificar a TV

A Samsung CU7700 suporta AirPlay 2 nativamente. Antes de qualquer coisa, confirma que o AirPlay está ativado na TV:

**Settings → Connection → Apple AirPlay Settings → AirPlay: On**

---

## 2. Descobrir o nome da TV na rede

Com Mac e TV na mesma rede local (Mac via cabo, TV via Wi-Fi no mesmo roteador):

```bash
dns-sd -Z _airplay._tcp local
```

O nome do serviço e o modelo aparecem no campo `Instance Name` e na linha `TXT model=`.

---

## 3. Desativar o SIP (System Integrity Protection)

Necessário para acessar sensores SMC e editar arquivos do sistema.

1. Desliga o Mac
2. Liga segurando **Command + R** (modo Recovery)
3. Abre **Utilitários → Terminal**
4. Roda:

```bash
csrutil disable
```

5. Reinicia normalmente e confirma:

```bash
csrutil status
# System Integrity Protection status: disabled.
```

---

## 4. Instalar Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Adiciona ao PATH:

```bash
echo 'eval "$(/usr/local/bin/brew shellenv zsh)"' >> ~/.zprofile
eval "$(/usr/local/bin/brew shellenv zsh)"
```

---

## 5. Compilar o smc-command para leitura dos sensores SMC

```bash
cd ~
git clone https://github.com/hholtmann/smcFanControl.git
cd smcFanControl/smc-command
make
```

Listar todos os sensores de temperatura:

```bash
./smc -l | grep -E "^  T"
```

Salvar snapshot dos sensores (útil para comparar com/sem tela):

```bash
./smc -l | grep -E "^  T" > ~/sensores_sem_tela.txt
```

---

## 6. Corrigir sensores SMC com valor -127 (erro de leitura)

Sensores em `-127.000` indicam leitura ausente e podem causar throttling do CPU via `kernel_task`. Para fixar com valor normal (~39°C):

```bash
sudo ./smc -k TC0E -w 2700
sudo ./smc -k TC0F -w 2700
sudo ./smc -k Ts0S -w 2700
```

> Esses valores foram identificados comparando a leitura com e sem a tela conectada. Só fixar sensores que mudaram para -127 após remover a tela.

---

## 7. Desativar o Spotlight (evita mds_stores com alto CPU no boot)

```bash
sudo mdutil -a -i off
```

Para reativar no futuro:

```bash
sudo mdutil -a -i on
```

---

## 8. Script de conexão AirPlay automática

Cria o arquivo:

```bash
nano ~/airplay-tv.sh
```

Conteúdo:

```bash
#!/bin/bash

osascript << 'EOF'
tell application "System Events"
    tell process "ControlCenter"
        click menu bar item "Espelhamento de Tela" of menu bar 1
        delay 1
        click button "3" of window 1
    end tell
end tell
EOF
```

> O nome do item na menu bar é em português ("Espelhamento de Tela"). O nome do botão da TV ("3") foi descoberto via `dns-sd`. Ajusta conforme o nome que aparecer na sua rede.

Salva e dá permissão:

```bash
chmod +x ~/airplay-tv.sh
```

Testa:

```bash
~/airplay-tv.sh
```

---

## 9. Verificar saúde do CPU

Verificar se o `kernel_task` está com uso anormal:

```bash
ps aux | sort -k3 -rn | head -10
```

Verificar uso geral do CPU:

```bash
top -l 1 | grep "CPU usage"
```

---

## Observações

- O Mac precisa estar conectado ao **mesmo roteador** que a TV (cabo ou Wi-Fi).
- O AirPlay **não funciona via hotspot móvel**.
- Para operação estável sem tela, manter o **carregador conectado**.
- O Spotlight pode ser reativado depois se necessário, o impacto é só no primeiro boot.
- Os valores SMC escritos via `smc -w` são **voláteis** — resetam no reboot. Para torná-los permanentes seria necessário um Launch Daemon, o que pode ser configurado futuramente.
