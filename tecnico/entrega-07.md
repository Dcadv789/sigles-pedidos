# Entrega 7 — Complementos acadêmicos e consolidações

**Atualizado em 21/10/2026 · Não executado.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-6: entrega anterior aceita em homologação.
- Situação: Não executado.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E7-01"></a>

## E7-01 — Turmas, edição por dia e preenchimento automático

**Situação:** Planejado — execução não iniciada.

O create atual grava uma DisciplinaTurma por requisição; a causa da triplicação relatada ainda precisa ser reproduzida no frontend/importação. A edição grava carga na turma, mas crédito em DisciplinaSemestre compartilhado. E4-05 também precisa corrigir a identidade insuficiente usada no importador. Não presumir que registros em dias/docentes distintos sejam duplicatas.

- Entrada: FECHO-6, D05 de crédito e D09 de identidade já fechadas.
- Saída: Turma/dia editável sem duplicação e valores iniciais da disciplina preenchidos corretamente.
- Limite: Mudança de nível de crédito só nesta tarefa, se D05 a exigir; relatórios anteriores terão regressão prevista.

### Funções, correções ou próximos passos

- Usar a chave D09 também no cadastro manual e distinguir aula em outro dia/docente de envio duplicado. Não remover duplicatas históricas por heurística.
- Rastrear o ID enviado ao alterar carga e horários; mudar somente a turma selecionada, mantendo o vínculo do semestre.
- Se D05 manteve crédito compartilhado, mostrar explicitamente esse alcance antes de gravar. Se aprovou crédito por turma/dia, desenhar migration/backfill conservador e adaptar os consumidores listados, inclusive E2-02 e E4-05.
- Ao escolher disciplina, carregar carga, tipo e crédito pela regra D05 como sugestão inicial; bloquear sobrescrita por resposta AJAX tardia após edição manual.
- Conferir exclusão individual com AceiteDocente, grade temporal, horários nulos e duplo clique.

### Banco e reversão

Mudança de modelo só se for confirmado crédito por turma/dia. Preservar crédito histórico e não apagar turmas em lote sem separar duplicatas reais.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Mesmo código em dois dias com docentes distintos | Criar, editar carga de um e apagar outro | Linhas legítimas preservadas e só ID escolhido alterado/excluído. |
| Disciplina escolhida e depois campo editado pelo usuário | Atrasar resposta de preenchimento | Não apaga a edição manual. |
| Regra de crédito aprovada | Editar e exportar nos relatórios anteriores | Mesmo significado em E2, E4 e E7; nenhuma mudança histórica não deliberada. |

### Rastreio dos pedidos

- V1-09:1 — Confirmar a ordenação por horário na tela de Cronogramas do vídeo, sem confundir com Quadro de aulas. · Validar.
- V1-10:1 — Preencher carga horária, tipo e créditos ao escolher a disciplina na criação da turma. · Pendente.
- WI-02:1 — Reproduzir a criação que triplicava turmas e a alteração de carga entre dias. · Validar.
- WI-02:2 — Definir se o crédito deve pertencer à disciplina, turma ou dia. · Definir.

### Pendências detalhadas

- ER02 — Impedir que a criação de uma turma triplique indevidamente os cadastros e permita apagar somente um. **Validar** — confirmar o cenário e distinguir duplicidade indevida dos registros previstos por combinação de docente e dia. Não foi identificada uma correção específica desse caso nas entregas.
- ER03 — Alterar a carga horária de um dia sem modificar indevidamente o outro dia da turma. **Validar** — a alteração individual existe, mas a resolução do caso relatado não foi demonstrada pelo histórico.
- ER03.1 — Alterar créditos de um dia sem alterar o outro dia. **Definir** — o crédito é compartilhado pelo vínculo de disciplina/semestre; falta definir se o cliente pretende crédito por turma, por dia ou por disciplina.

### Documentos originais (rastreio preservado)

**DI02 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 11**

> Erro ao criar “nova turma” - Está triplicando o cadastro. Ao apagar, permite apagar apenas um cadastro - FEITO

**DI03 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 12**

> Para turmas que foram criadas para dois dias da semana, ao alterar, por exemplo, a carga horária de um dia está alterando do outro dia também. 25/03/2026 - agora o problema está ocorrendo com os crédito - FEITO

### Referências de código (snapshot da leitura)

- [src/Controller/DisciplinaTurmaController.php:35](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L35) · 3ed9a38
- [src/Controller/DisciplinaTurmaController.php:314](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L314) · 3ed9a38
- [src/Entity/DisciplinaSemestre.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L1) · 3ed9a38
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) · 13f5075
- [src/Controller/DisciplinaController.php:103](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L103) · 3ed9a38
- [src/Controller/DisciplinaTurmaController.php:379](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L379) · 3ed9a38

**Dependências:** E2-02, E4-05.

<a id="E7-02"></a>

## E7-02 — Complementos da importação XLSX e diagnóstico ampliado

**Situação:** Planejado — execução não iniciada.

XLSX, modelo, repetição e rollback já pertencem à Entrega 4. Restam a escolha de tipos no mesmo arquivo e o diagnóstico ampliado a delimitar e validar.

- Entrada: D09 implementada em E4-05 e D18 de formatos/recortes.
- Saída: Validação ampliada por linha e formatos/recortes aprovados, preservando o importador seguro.
- Limite: Não reabrir atomicidade ou chave silenciosamente; eventual mudança exige regressão da E4.

### Funções, correções ou próximos passos

- Preservar o importador .xlsx da Entrega 4 e a proteção concorrente da 3.5.
- Definir importação de Graduação/Pós-graduação/Ambos no mesmo arquivo sem alterar o tipo de disciplina existente.
- Definir e implementar o diagnóstico ampliado por linha e os recortes realmente faltantes, usando o arquivo original aprovado.

### Banco e reversão

Sem migration prevista. Importação deve ser transacional conforme a política escolhida e idempotente segundo a chave de negócio definida.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| XLSX misto com uma linha inválida | Validar/importar | Erros por linha e nenhuma gravação se mantida atomicidade. |
| Arquivo válido em cada formato aprovado | Importar duas vezes | Mesmo resultado sem duplicação; formatos não aprovados recusados. |

### Rastreio dos pedidos

- VS-13:2 — Aceitar o arquivo original do cliente e definir os complementos de diagnóstico por linha além dos cenários já testados. · Validar.

### Pendências detalhadas

- CR05.1 — No mesmo arquivo XLSX, escolher Ambos e preservar os tipos existentes. **Pendente na 7** — cópia já tem Ambos; importação continua com tipo selecionado. XLSX básico já entregue na 4.

### Documentos originais (rastreio preservado)

**RV29 — Relatório de visita, página 2 — Detalhamento técnico: 6-) cronograma e importação de dados**

> O sistema possui Módulo de Cronograma, que atualmente permite a importação de dados por meio de arquivos Excel.

**RV30 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Aperfeiçoamento do processo de importação;

**RV32 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Validação dos dados importados;

**RV33 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Tratamento de inconsistências e erros durante as importações;

**RV34 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Avaliação da possibilidade de criação de modelos padronizados de planilha para alimentação do sistema.

**DI33 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 74**

> Na página de importação do cronograma acrescentar as opções de baixar não só os dados das turmas da graduação, mas da pós-graduação ou ambos.

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) · 13f5075
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) · 13f5075
- [src/Repository/DisciplinaTurmaRepository.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Repository/DisciplinaTurmaRepository.php#L1) · 13f5075
- [composer.json:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/composer.json#L1) · 3ed9a38

**Dependências:** E4-05, E7-01.

<a id="E7-03"></a>

## E7-03 — Relatórios de disciplinas e pós-graduação do pedido inicial

**Situação:** Planejado — execução não iniciada.

Responsável, Excel e Crédito já têm fechamento em E2-01/E2-02. A finalidade do pedido Relatório de disciplinas ainda não está definida.

- Entrada: D04/D05 e D19 dos relatórios acadêmicos, incluindo a pergunta sobre pós.
- Saída: Relatório de disciplinas/pós identificado, ou equivalência aceita por amostra.
- Limite: Não chamar este pedido inicial de Adicional nem incluir o editor de planos novo.

### Funções, correções ou próximos passos

- Separar o pedido Relatório de disciplinas da pergunta Relatório pós-graduação??. Definir colunas, granularidade, ano/semestre/tipo e público de cada saída.
- Comparar com Disciplinas, Disciplinas docente e Quadro de aulas já fechados; comprovar equivalência com uma amostra ou registrar a consulta distinta.
- Reutilizar responsável D04 e crédito D05, sem confundir ministrante e responsável nem somar repetições de crédito por linha de horário.
- Exibir e exportar o mesmo conjunto; registrar se pós é apenas filtro de tipo ou relatório com campos próprios.
- A consulta de pós por filtro de tipo já foi registrada como entregue (pendência DI07). Não criar um segundo relatório só para repetir esse filtro; usar esse caso como equivalência/regressão, salvo diferença concreta em D19.

### Banco e reversão

Sem nova tabela presumida; campos novos exigem justificativa e definição anteriores à migration.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina de pós com responsável e turma de outro docente | Consultar tela e Excel | Cada papel e carga aparecem na coluna aprovada; nenhum desaparece por filtro incorreto. |

### Pendências detalhadas

- DI05 — Criar “Relatório de disciplinas”, sem definição de campos e finalidade. **Definir** — confirmar se é a listagem principal, Disciplinas docente ou outro relatório.

### Documentos originais (rastreio preservado)

**DI39 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 86**

> Relatório de disciplinas

**DI41 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 88**

> Relatório pós-graduação??  - matérias, docentes, carga horária…

### Referências de código (snapshot da leitura)

- [src/Controller/RelatorioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/RelatorioController.php#L1) · 3ed9a38
- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) · 3ed9a38
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) · 3ed9a38
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) · 3ed9a38

**Dependências:** E2-99, E7-01.

<a id="E7-04"></a>

## E7-04 — Consolidação anual e departamental da carga docente

**Situação:** Planejado — execução não iniciada.

cargaHorariaDocentes agrega turmas; o relatório de responsáveis tem outra finalidade. Somar joins de cursos/responsáveis sem definir a unidade de contagem pode duplicar carga. O código soma carga_horaria da turma, enquanto a entidade também tem carga_horaria_docente; a definição da medida é requisito anterior à soma.

- Entrada: D20 de carga/rateio/departamento, D04/D05 e turmas corrigidas.
- Saída: Consolidação anual/departamental com detalhamento conciliável.
- Limite: Não somar a pós duas vezes nem atribuir carga ao responsável apenas por ele liderar a disciplina.

### Funções, correções ou próximos passos

- Distinguir carga_horaria da turma e carga_horaria_docente. O código atual soma a primeira; D20 deve dizer qual mede trabalho docente e como tratar valores ausentes/zero.
- Definir departamento de referência e turma compartilhada. Não dividir igualmente sem dado ou regra aprovada.
- Agregar primeiro por chave única de ocorrência/turma e docente; depois por semestre, tipo e departamento. Cursos e responsáveis entram como informação, não multiplicador.
- Propor colunas 1º semestre graduação, 2º semestre graduação, pós anual e total, ou totais semestrais inclusivos com pós apenas como recorte. Escolher uma alternativa em D20.
- Entregar detalhamento para conferir a soma e a mesma consulta base para exportação.

### Banco e reversão

Não inventar carga docente ausente dividindo igualmente. Se rateio precisar de um dado novo, definir antes da migration e preservar os registros anteriores.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Turmas em dois semestres, graduação/pós e dois docentes | Somar manualmente e comparar tela/Excel | Somas idênticas à unidade de carga D20 sem dupla contagem de pós. |
| Uma turma vinculada a três cursos | Gerar total departamental | Total não triplica. |

### Rastreio dos pedidos

- VS-17:2 — Consolidar a carga por departamento com filtros e exportação próprios. · Pendente.
- WI-15:2 — Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente. · Pendente.

### Pendências detalhadas

- DD01 — Consolidar por docente primeiro semestre, segundo semestre, pós-graduação e carga horária total anual. **Pendente** — há resultados por docente/semestre, mas não a consolidação completa solicitada.
- OR12.1 — Consolidar a carga horária por departamento, com filtros e exportação próprios. **Pendente** — os relatórios conferidos não completam esse recorte departamental.

### Documentos originais (rastreio preservado)

**DI43 — Documento inicial SINGLES — ALTERAÇÕES / 4. DISCIPLINAS DOCENTES — parágrafo 101**

> Somatória por docente: Total carga horária 1º semestre + somatória carga horária 2º semestre + carga horária pós-graduação (nessa listagem, atualmente não consta a carga horária referente às matérias de pós graduação) CARGA HORÁRIA TOTAL

**RV45 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> Foi apresentada a necessidade de evolução dos relatórios relacionados à carga horária dos docentes por departamento.

**RV46 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Revisão e ampliação dos filtros disponíveis;

**RV47 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Melhoria na forma de consulta e consolidação das informações;

**RV48 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Aperfeiçoamento da visualização dos dados;

**RV49 — Relatório de visita, página 4 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Melhoria das funcionalidades de exportação de dados e relatórios;

**RV50 — Relatório de visita, página 4 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Avaliação de formatos adequados para utilização administrativa das informações extraídas do sistema.

### Referências de código (snapshot da leitura)

- [src/Controller/DisciplinaTurmaController.php:454](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L454) · 3ed9a38
- [templates/relatorios/carga_docentes.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/carga_docentes.html.twig#L1) · 3ed9a38
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) · 3ed9a38
- [src/Entity/Departamento.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Departamento.php#L1) · 3ed9a38
- [src/Entity/DisciplinaTurma.php:66](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L66) · 3ed9a38

**Dependências:** E7-01, E7-03.

## FECHO-7 — Fechamento

**Não executado.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
