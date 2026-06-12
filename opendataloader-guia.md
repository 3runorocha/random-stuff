# OpenDataLoader PDF - Guia Rápido

Parser de PDF que converte documentos em Markdown/JSON pra usar com LLMs.

---

## Instalacao (PowerShell)

### Pre-requisito: Python instalado?

```powershell
python --version
```

Se nao tiver, baixa em https://python.org (marcar "Add to PATH" na instalacao).

### Instalar o pacote

```powershell
pip install opendataloader-pdf
```

### Verificar se instalou

```powershell
python -c "import opendataloader_pdf; print('ok')"
```

---

## Uso basico

### Converter um PDF para Markdown

```python
import opendataloader_pdf

opendataloader_pdf.convert(
    input_path="documento.pdf",
    output_dir="output/",
    format="markdown"
)
```

O arquivo `.md` vai aparecer na pasta `output/`.

### Converter para JSON tambem

```python
opendataloader_pdf.convert(
    input_path="documento.pdf",
    output_dir="output/",
    format="markdown,json"
)
```

### Converter varios PDFs de uma vez

```python
opendataloader_pdf.convert(
    input_path=["artigo1.pdf", "artigo2.pdf", "lista3.pdf"],
    output_dir="output/",
    format="markdown"
)
```

### Converter uma pasta inteira de PDFs

```python
opendataloader_pdf.convert(
    input_path="pdfs/",
    output_dir="output/",
    format="markdown"
)
```

---

## Modo Hibrido (para PDFs escaneados ou com formulas complexas)

Ativa OCR, extracao de tabelas e conversao de formulas para LaTeX.

### Instalar dependencias extras

```powershell
pip install opendataloader-pdf[hybrid]
```

### Usar modo hibrido

```python
opendataloader_pdf.convert(
    input_path="lista_matematica.pdf",
    output_dir="output/",
    format="markdown",
    hybrid=True
)
```

> Modo hibrido e mais lento mas trata melhor tabelas bagunçadas, scans e formulas.

---

## Fluxo de uso no dia a dia

1. Salvar o PDF em alguma pasta
2. Rodar o script de conversao
3. Abrir o `.md` gerado na pasta `output/`
4. Copiar o conteudo e colar no chat

---

## Script pronto pra usar

Salva isso como `converter.py` e roda quando precisar:

```python
import opendataloader_pdf
import sys
import os

# Uso: python converter.py arquivo.pdf
# ou:  python converter.py pasta/

entrada = sys.argv[1] if len(sys.argv) > 1 else "."
saida = "output"

os.makedirs(saida, exist_ok=True)

opendataloader_pdf.convert(
    input_path=entrada,
    output_dir=saida,
    format="markdown"
)

print(f"Convertido! Veja a pasta '{saida}/'")
```

Rodar no PowerShell:

```powershell
python converter.py artigo.pdf
```

---

## Observacoes

- PDFs digitais (gerados por computador): funcionam bem no modo padrao
- PDFs escaneados (foto de lista impressa): usar modo hibrido
- Formulas matematicas simples: modo padrao converte razoavelmente
- Formulas muito densas: modo hibrido converte para LaTeX, mas pode ter imprecisoes
