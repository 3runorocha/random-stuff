# Estratégia de Busca Bibliográfica (versão enxuta)

**TCC: Algoritmo Genético para Alocação de Alunos em Escolas**

Roteiro mínimo pra rodar as buscas e alimentar o Parsif.al. Strings já no formato Advanced Search do Scopus, com filtros embutidos (ano, idioma, tipo, área) usando OU explícito pra não depender dos checkboxes.

Códigos de campo: DOCTYPE (ar=article, cp=conference paper, re=review), LANGUAGE, PUBYEAR, SUBJAREA (COMP=computer science, MATH, ENGI=engineering, DECI=decision sciences). Cole na caixa de Advanced Search, não na busca simples.

---

## Strings de busca

**S1, Núcleo: método + modelo teórico** (rodada: 823 resultados)
```
TITLE-ABS-KEY(("genetic algorithm" OR "evolutionary algorithm" OR "metaheuristic") AND ("p-median" OR "facility location" OR "location-allocation"))
AND PUBYEAR > 2014
AND (LANGUAGE(english) OR LANGUAGE(portuguese))
AND (DOCTYPE(ar) OR DOCTYPE(cp) OR DOCTYPE(re))
AND (SUBJAREA(COMP) OR SUBJAREA(MATH) OR SUBJAREA(ENGI) OR SUBJAREA(DECI))
```
Nota: `"assignment problem"` foi removido daqui porque arrastava QAP, weapon-target e task assignment, que são de outra família de problema.

**S2, Núcleo: método + domínio escolar** (final: 11, sem filtro de área)
```
TITLE-ABS-KEY(("genetic algorithm" OR "evolutionary algorithm" OR "metaheuristic") AND ("student assignment" OR "school assignment" OR "school allocation" OR "school districting" OR "school catchment" OR "students to schools"))
AND PUBYEAR > 2014
AND (LANGUAGE(english) OR LANGUAGE(portuguese))
AND (DOCTYPE(ar) OR DOCTYPE(cp) OR DOCTYPE(re))
```
Nota: filtro de área REMOVIDO aqui de propósito. Os termos de domínio (student, school) já são específicos, e SUBJAREA cortava artigo de escola classificado como Ciências Sociais/Educação. 9 resultados com o filtro é um achado (confirma a lacuna), não um erro.

**S3, Contribuição: análise de sensibilidade dos pesos**
```
TITLE-ABS-KEY(("sensitivity analysis" OR "penalty weight" OR "parameter tuning") AND ("genetic algorithm" OR "fitness function") AND ("constraint" OR "penalty" OR "soft constraint"))
AND PUBYEAR > 2014
AND (LANGUAGE(english) OR LANGUAGE(portuguese))
AND (DOCTYPE(ar) OR DOCTYPE(cp) OR DOCTYPE(re))
AND (SUBJAREA(COMP) OR SUBJAREA(MATH) OR SUBJAREA(ENGI) OR SUBJAREA(DECI))
```

**S4, Contribuição: equidade / fairness** (final: 143, sem resource allocation)
```
TITLE-ABS-KEY(("fairness" OR "equity" OR "equitable") AND ("facility location" OR "p-median" OR "location-allocation") AND ("optimization" OR "metaheuristic" OR "genetic algorithm"))
AND PUBYEAR > 2014
AND (LANGUAGE(english) OR LANGUAGE(portuguese))
AND (DOCTYPE(ar) OR DOCTYPE(cp) OR DOCTYPE(re))
AND (SUBJAREA(COMP) OR SUBJAREA(MATH) OR SUBJAREA(ENGI) OR SUBJAREA(DECI))
```
Nota: `"resource allocation"` removido porque arrastava fairness de redes/telecom e de ML (literaturas gigantes fora do escopo). Se ainda vier acima de ~500, trocar `"fairness"` por `"spatial equity"` ou `"equitable facility location"`.

---

## Onde buscar

**Buscar de verdade (exporta .bib por base, alimenta o Parsif.al)**
- **Scopus** — `scopus.com`. Burro de carga, cobre Elsevier/IEEE/ACM/Springer por dentro, .bib limpo. Acesso via CAFe/UFAL.
- **IEEE Xplore** — `ieeexplore.ieee.org`. Profundidade no tema (AG, metaheurística). Booleano completo no Command Search.

**Descoberta (achar artigos-semente, NÃO entra no Parsif.al)**
- **Connected Papers** — `connectedpapers.com`. Grafo de vizinhança a partir de um artigo-semente.

**Opcional, uma passada só**
- **SBC OpenLib** — `sol.sbc.org.br`. Trabalho brasileiro e padrão SBC.
- **Portal CAPES** — acesso institucional. Rede de segurança pra trabalho nacional. Atenção: exporta .bib pior que o Scopus.

---

## Regras pra não ter retrabalho

- Um arquivo **.bib por base** (ex.: `S1_scopus.bib`). É como o Parsif.al importa e rastreia origem.
- Registre a **contagem por string e por base**, e o número **após cada filtro** (ex.: "S1 bruto 3000, após área 847, final 823"). Vira o fluxograma da RSL.
- Registre a **data** de cada busca.
- Guarde a **string exata** rodada. É o protocolo reproduzível que a banca quer ver.
- String zerada ou estranha ao marcar dois filtros juntos: é a interface aplicando E em vez de OU. Resolve escrevendo o OU na query, como acima.

---

## Contagem de resultados (preencher enquanto roda)

| String | Scopus | IEEE | Data |
|--------|--------|------|------|
| S1     | 823    |      |      |
| S2     | 11     |      |      |
| S3     | 700    |      |      |
| S4     | 143    |      |      |
| **Total bruto Scopus** | **1677** | | |

Obs: total único será bem menor após deduplicação no Parsif.al (muito artigo de facility location cai em S1+S3+S4 ao mesmo tempo).

---

## A confirmar com o orientador

- RSL formal (Parsif.al) ou revisão narrativa.
- Número mínimo de referências.
- Formato de citação: ABNT, IEEE ou SBC.
