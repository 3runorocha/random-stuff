# Estratégia de Busca Bibliográfica

**TCC: Algoritmo Genético para Alocação de Alunos em Escolas**

Documento de apoio para o levantamento bibliográfico. Serve tanto como roteiro de execução quanto como registro do protocolo (útil se o orientador pedir uma revisão sistematizada com critérios documentados).

Foco da revisão: as versões **genéricas** dos problemas subjacentes (p-mediana, facility location, assignment). Busca direta por "alocação escolar" rende pouco, então ela entra como termo secundário, não como âncora.

---

## 1. Palavras-chave por bloco conceitual

Organizadas em blocos para montar as strings por combinação (estilo PICOC). Cada string combina um termo de um bloco com termos de outro.

**Bloco A, Domínio / problema aplicado**
`student assignment`, `school allocation`, `school districting`, `school redistricting`, `catchment area`, `school choice`, `students to schools`

**Bloco B, Modelo teórico**
`p-median problem`, `facility location problem`, `assignment problem`, `resource allocation`, `location-allocation`, `capacitated facility location`

**Bloco C, Método**
`genetic algorithm`, `evolutionary algorithm`, `evolutionary computation`, `metaheuristic`, `memetic algorithm`, `hybrid genetic algorithm`, `genetic algorithm local search`

**Bloco D, Aspectos específicos do seu trabalho**
`constraint handling`, `penalty function`, `soft constraint`, `sensitivity analysis`, `penalty weight`, `parameter tuning`, `fairness optimization`, `equity resource allocation`

**Bloco E, Multiobjetivo (para contexto e comparação, NÃO é o seu modelo)**
`multi-objective evolutionary algorithm`, `multiobjective optimization`, `NSGA-II`, `Pareto optimization`

**Bloco F, Dados sintéticos / urbano**
`synthetic population generation`, `population synthesis`, `microsimulation`, `census data`, `urban planning optimization`

**Bloco G, Survey / estado da arte**
`survey`, `systematic review`, `literature review`, `state of the art`

---

## 2. Strings de busca (booleanas)

Copie e cole. Ajuste a sintaxe conforme a base (ver seção 4). As aspas mantêm o termo composto; use-as sempre que a base suportar.

**S1, Núcleo: método + modelo teórico**
```
("genetic algorithm" OR "evolutionary algorithm" OR "metaheuristic" OR "memetic algorithm")
AND ("p-median" OR "facility location" OR "assignment problem" OR "location-allocation")
```

**S2, Núcleo: método + domínio escolar**
```
("genetic algorithm" OR "evolutionary algorithm" OR "metaheuristic")
AND ("student assignment" OR "school allocation" OR "school districting" OR "catchment area")
```

**S3, Hibridização (o eixo de eficiência)**
```
("genetic algorithm" OR "memetic algorithm" OR "hybrid")
AND ("local search" OR "greedy")
AND ("combinatorial optimization" OR "facility location" OR "p-median")
```

**S4, Tratamento de restrições (base da sua modelagem hard/soft)**
```
("constraint handling" OR "penalty function" OR "soft constraint")
AND ("genetic algorithm" OR "evolutionary algorithm")
AND ("combinatorial optimization" OR "assignment" OR "facility location")
```

**S5, Análise de sensibilidade dos pesos (sua contribuição central)**
```
("sensitivity analysis" OR "penalty weight" OR "parameter tuning" OR "weight calibration")
AND ("genetic algorithm" OR "fitness function" OR "multi-objective")
AND ("constraint" OR "penalty" OR "soft constraint")
```

**S6, Equidade / fairness (para justificar o fator de tolerância)**
```
("fairness" OR "equity" OR "equitable")
AND ("resource allocation" OR "facility location" OR "assignment")
AND ("optimization" OR "metaheuristic" OR "genetic algorithm")
```

**S7, Multiobjetivo (para a seção de comparação e para delimitar o que você NÃO fez)**
```
("multi-objective" OR "multiobjective" OR "NSGA-II" OR "Pareto")
AND ("facility location" OR "p-median" OR "assignment problem")
```

**S8, Geração de dados sintéticos (viabiliza o desenvolvimento sem dados reais)**
```
("synthetic population" OR "population synthesis" OR "microsimulation")
AND ("census" OR "spatial" OR "urban")
```

**S9, Surveys e estado da arte**
```
("survey" OR "systematic review" OR "state of the art")
AND ("facility location" OR "p-median" OR "metaheuristic" OR "evolutionary computation")
```

**S10, Strings em português (para bases nacionais: BDTD, SciELO, SBC)**
```
("algoritmo genético" OR "computação evolucionária" OR "meta-heurística")
AND ("alocação de alunos" OR "alocação escolar" OR "localização de facilidades" OR "p-mediana")
```

---

## 3. Critérios de inclusão e exclusão

**Inclusão**
- Publicado de 2015 em diante (surveys e artigos seminais anteriores entram como exceção justificada).
- Peer-reviewed, ou preprint de fonte reputável (arXiv com autores/grupos reconhecidos).
- Aborda ao menos um: assignment/allocation/facility location com metaheurística; tratamento de restrições em AG; análise de sensibilidade de pesos; equidade em alocação; geração de população sintética.
- Idioma: inglês ou português.
- Texto completo acessível (via institucional da UFAL, se necessário).

**Exclusão**
- Sem contribuição algorítmica ou metodológica clara (aplicação puramente descritiva).
- Fora de escopo de domínio, salvo se for survey do método.
- Duplicatas entre bases (manter a versão mais completa/citável).
- Resumos, pôsteres ou textos sem detalhamento suficiente para extração.

**Dado a extrair de cada artigo aceito** (montar uma planilha)
Referência, ano, problema abordado, método, representação/operadores, tratamento de restrições, se faz análise de sensibilidade, se trata equidade, dataset (real ou sintético), resultado principal, e a lacuna que ele deixa (útil pra posicionar o seu trabalho).

---

## 4. Bases de dados e sites

- **Google Scholar** — `scholar.google.com`. Cobertura máxima, bom pra começar e pra rastrear citações ("citado por"). Booleano limitado: quebre strings grandes em partes menores.
- **IEEE Xplore** — `ieeexplore.ieee.org`. Referência pra AG, metaheurística e otimização combinatória. Booleano completo, use "Command Search".
- **ACM Digital Library** — `dl.acm.org`. Forte em computação, GECCO e afins.
- **ScienceDirect (Elsevier)** — `sciencedirect.com`. Boa cobertura de facility location e operations research.
- **Scopus** — `scopus.com`. Melhor base pra revisão sistemática (booleano robusto, exporta metadados limpos). Acesso via CAFe/UFAL.
- **Web of Science** — `webofscience.com`. Similar ao Scopus pra rigor de indexação. Acesso institucional.
- **arXiv** — `arxiv.org`. Categorias `cs.NE` (neural/evolutionary), `cs.DS`, `math.OC` (optimization and control).
- **SBC OpenLib** — `sol.sbc.org.br`. Anais e periódicos da Sociedade Brasileira de Computação. Bom pra achar trabalhos brasileiros no tema e pra ver o padrão SBC.
- **Connected Papers** — `connectedpapers.com`. Dado um artigo-semente, monta o grafo de vizinhança. Excelente pra não perder trabalho relevante.

---

## 5. Fluxo sugerido de execução

1. Rode S1 e S2 no Google Scholar e Semantic Scholar. Identifique de 3 a 5 artigos-semente centrais.
2. Jogue os artigos-semente no Connected Papers pra mapear a vizinhança e capturar o que a busca por palavra-chave perdeu.
3. Rode S3 a S9 nas bases indexadas (IEEE, Scopus, ACM), aplicando o filtro de ano e os critérios de inclusão.
4. Rode S10 nas bases nacionais.
5. Consolide tudo numa planilha (a da seção 3), removendo duplicatas.
6. Faça a triagem em duas fases: primeiro por título/resumo, depois leitura do texto completo dos aprovados.
7. Preencha a coluna "lacuna" de cada artigo. É dela que sai a justificativa de originalidade do seu TCC.

---

## 6. A confirmar com o orientador antes de fechar

- Se ele espera revisão sistemática formal (com protocolo, PICOC e relato PRISMA) ou aceita uma revisão narrativa sistematizada como esta.
- Número mínimo de referências esperado.
- Formato de citação (ABNT, IEEE ou SBC), o que muda a formatação da seção de trabalhos relacionados.
- Recorte temporal: manter 2015+ ou ampliar para pegar trabalhos seminais de p-mediana e facility location dos anos 1990.
