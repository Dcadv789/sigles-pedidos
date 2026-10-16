# Entrega 7 — Planejamento técnico

**Complementos acadêmicos e consolidações**

**Data:** 16/10/2026. **Etapa:** Escopo inicial restante. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

A referência macro original desta entrega é **20%** do restante. Pontos antecipados para o fechamento das entregas 1 a 4 não serão executados outra vez aqui. Revalidar o esforço depois desses fechamentos e das definições abertas.

## Ordem de execução

1. [E7-01 — Turmas, edição por dia e preenchimento automático](#E7-01)
2. [E7-02 — Importação ampliada e erros por linha](#E7-02)
3. [E7-03 — Definir o relatório acadêmico adicional ainda genérico](#E7-03)
4. [E7-04 — Consolidação anual e departamental da carga docente](#E7-04)

<a id="E7-01"></a>

## E7-01 — Turmas, edição por dia e preenchimento automático

**Status:** Planejado — exige definição. **Dependências:** E4-99, E2-99.

### Evidência e diagnóstico

DisciplinaTurma grava carga na turma, mas crédito no vínculo DisciplinaSemestre. A criação pode gerar combinações por dia/docente; é necessário separar combinação legítima de duplicação. Exportação de cursos e filtros da PR são fechados em E4-03/E4-04.

### Arquivos verificados

- [src/Controller/DisciplinaTurmaController.php:35](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L35) — base dev, commit 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:314](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L314) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaSemestre.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L1) — base dev, commit 3ed9a38.
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) — base PR 9, commit 13f5075.
- [src/Controller/DisciplinaController.php:103](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L103) — base dev, commit 3ed9a38.

### Implementação prevista

1. Reproduzir a turma com dois dias e dois docentes, comparar o payload com os registros previstos e impedir inclusão duplicada por duplo envio.
2. Definir onde o crédito pertence. Não tornar o crédito individual por dia apenas para esconder o compartilhamento atual; isso exigiria mudança de modelo e regra de migração aprovada.
3. Garantir que alterar carga/horário de uma turma não muda outra. Preencher carga, tipo e créditos ao escolher a disciplina somente como valor inicial, sem sobrescrever uma edição consciente.
4. Conferir ordem temporal da grade e associar os filtros já concluídos na entrega 4.

### Banco e dados

Mudança de modelo só se for confirmado crédito por turma/dia. Preservar crédito histórico e não apagar turmas em lote sem separar duplicatas reais.

### Testes de aceite previstos

- [ ] Criar uma turma não gera cópias indevidas nem duplica após duplo clique.
- [ ] Alterar carga/horário de um dia não muda outro; crédito segue a regra acordada.
- [ ] Trocar a disciplina preenche os valores iniciais corretos e a grade ordena horários cronologicamente.

### Decisões necessárias

- Crédito por disciplina/semestre/turma/dia e identificação exata da duplicação.

### Referências dos pedidos

- [V1-09:1](https://dcadv789.github.io/sigles-pedidos/#V1-09) — Confirmar a ordenação por horário na tela de Cronogramas do vídeo, sem confundir com Quadro de aulas. (Validar).
- [V1-10:1](https://dcadv789.github.io/sigles-pedidos/#V1-10) — Preencher carga horária, tipo e créditos ao escolher a disciplina na criação da turma. (Pendente).
- [WI-02:1](https://dcadv789.github.io/sigles-pedidos/#WI-02) — Reproduzir a criação que triplicava turmas e a alteração de carga entre dias. (Validar).
- [WI-02:2](https://dcadv789.github.io/sigles-pedidos/#WI-02) — Definir se o crédito deve pertencer à disciplina, turma ou dia. (Definir).
- ER02 — Impedir que a criação de uma turma triplique indevidamente os cadastros e permita apagar somente um.
- ER03 — Alterar a carga horária de um dia sem modificar indevidamente o outro dia da turma.
- ER03.1 — Alterar créditos de um dia sem alterar o outro dia.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E7-02"></a>

## E7-02 — Importação ampliada e erros por linha

**Status:** Planejado — exige definição. **Dependências:** E4-05, E7-01.

### Evidência e diagnóstico

A PR cobre CSV de formato fixo e modelo; o aceite básico é E4-05. XLSX e seleção Ambas no mesmo arquivo ainda são complementos a definir.

### Arquivos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — base PR 9, commit 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — base PR 9, commit 13f5075.
- [src/Repository/DisciplinaTurmaRepository.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Repository/DisciplinaTurmaRepository.php#L1) — base PR 9, commit 13f5075.
- [composer.json:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/composer.json#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar os formatos e definir se Ambas pode preservar o tipo de cada disciplina no mesmo arquivo.
2. Separar validação da estrutura e de cada linha da gravação, coletando número da linha, coluna e motivo do erro.
3. Definir arquivo inteiro atômico ou aceite parcial explícito; evitar comunicar sucesso quando parte do arquivo falhou sem relatório.
4. Se XLSX for exigido, avaliar uma biblioteca compatível com PHP 8.2 a partir das dependências e documentação oficiais na implementação; não instalar nem prometer suporte inexistente agora.

### Banco e dados

Sem migration prevista. Importação deve ser transacional conforme a política escolhida e idempotente segundo a chave de negócio definida.

### Testes de aceite previstos

- [ ] Arquivo com linhas válidas e inválidas produz relatório previsível e contagem conciliada.
- [ ] Graduação/pós no mesmo arquivo conserva os tipos quando a opção for aprovada.
- [ ] Reimportar o mesmo arquivo não duplica dados; extensão indevida é recusada.

### Decisões necessárias

- CSV ou CSV+XLSX; política de importação parcial; regra de Ambas e chave de reimportação.

### Referências dos pedidos

- [VS-13:2](https://dcadv789.github.io/sigles-pedidos/#VS-13) — Testar o arquivo original do cliente e o tratamento dos erros por linha. (Validar).
- [VS-13:3](https://dcadv789.github.io/sigles-pedidos/#VS-13) — Confirmar necessidade de XLSX; o formato implementado é CSV. (Definir).
- CR05.1 — Na importação de um único CSV, escolher Ambas e preservar os tipos de cada disciplina.
- OR07.1 — Importar diretamente arquivos Excel, caso seja exigido XLSX além de CSV.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E7-03"></a>

## E7-03 — Definir o relatório acadêmico adicional ainda genérico

**Status:** Planejado — exige definição. **Dependências:** E2-99, E7-02.

### Evidência e diagnóstico

Responsável, Excel e Crédito já têm fechamento em E2-01/E2-02. A finalidade do pedido Relatório de disciplinas ainda não está definida.

### Arquivos verificados

- [src/Controller/RelatorioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/RelatorioController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) — base dev, commit 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Comparar o resultado pretendido com a listagem principal e Disciplinas docente após os fechamentos da entrega 2.
2. Se for a mesma informação, encerrar por equivalência validada. Se houver saída distinta, fechar colunas, filtros e granularidade antes de acrescentar consulta/Twig.
3. Manter a separação entre responsável e ministrante e o período explícito. Não incluir o editor de planos do documento Adicional.

### Banco e dados

Sem nova tabela presumida; campos novos exigem justificativa e definição anteriores à migration.

### Testes de aceite previstos

- [ ] A amostra esperada é reproduzida ou atendida por relatório existente com aceite.
- [ ] Sem responsável ou sem turma, o comportamento é definido e não derruba a consulta.

### Decisões necessárias

- Qual relatório, público, colunas, filtros e período.

### Referências dos pedidos

- DI05 — Criar “Relatório de disciplinas”, sem definição de campos e finalidade.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E7-04"></a>

## E7-04 — Consolidação anual e departamental da carga docente

**Status:** Planejado — exige definição. **Dependências:** E7-01, E7-03.

### Evidência e diagnóstico

cargaHorariaDocentes agrega turmas; o relatório de responsáveis tem outra finalidade. Somar joins de cursos/responsáveis sem definir a unidade de contagem pode duplicar carga.

### Arquivos verificados

- [src/Controller/DisciplinaTurmaController.php:454](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L454) — base dev, commit 3ed9a38.
- [templates/relatorios/carga_docentes.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/carga_docentes.html.twig#L1) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/Departamento.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Departamento.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Definir a unidade de carga: turma/ministrante, compartilhamento de aula e distribuição entre departamentos. Responsável da disciplina não é automaticamente o ministrante.
2. Agregar primeiro por chave única da carga e depois por docente, semestre e departamento, com filtros parametrizados de ano/tipo/departamento.
3. Apresentar primeiro semestre, segundo semestre, pós e total anual, explicando se pós é recorte ou parcela adicional para não somar duas vezes.
4. Exportar a mesma base consolidada e fornecer um detalhamento que permita conferir o total.

### Banco e dados

Não inventar carga docente ausente dividindo igualmente. Se rateio precisar de um dado novo, definir antes da migration e preservar os registros anteriores.

### Testes de aceite previstos

- [ ] Massa com dois docentes, três cursos e dois semestres mantém o total esperado.
- [ ] Soma anual confere com o detalhamento e não duplica pós-graduação.
- [ ] Filtro de departamento/ano e Excel produzem os mesmos valores; conjunto vazio é válido.

### Decisões necessárias

- Rateio em turmas compartilhadas, departamento de referência e pós como recorte ou parcela.

### Referências dos pedidos

- [VS-17:2](https://dcadv789.github.io/sigles-pedidos/#VS-17) — Consolidar a carga por departamento com filtros e exportação próprios. (Pendente).
- [WI-15:2](https://dcadv789.github.io/sigles-pedidos/#WI-15) — Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente. (Pendente).
- DD01 — Consolidar por docente primeiro semestre, segundo semestre, pós-graduação e carga horária total anual.
- OR12.1 — Consolidar a carga horária por departamento, com filtros e exportação próprios.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

## Verificações comuns antes da integração

- [ ] Confirmar o ambiente de teste antes de qualquer comando que carregue o banco; não publicar valores de conexão nos logs.
- [ ] Executar php -l nos arquivos PHP alterados e php bin/console lint:twig apenas nos templates afetados.
- [ ] Se houver alteração de entidade/migration, executar a validação de schema e o status/dry-run das migrations somente com a conexão de teste conferida; revisar o SQL e as versões já executadas.
- [ ] Conferir as rotas AJAX e /js/routing pelo mecanismo já usado no projeto, sem recriar o antigo dump removido pela dev.
- [ ] Executar os testes de aceite específicos do item: erro/validação, usuário autorizado, usuário sem permissão e regressão do fluxo modificado.
- [ ] Guardar evidência de homologação por item e só então atualizar o status funcional no quadro. Planejamento pronto não significa item implementado.
- [ ] Preparar commit e PR focados por lote; teste/homologação precede produção, e a etapa de produção continua sujeita à restrição atual de acesso ao banco.
