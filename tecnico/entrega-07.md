# Entrega 7 — Planejamento técnico revisado

**Complementos acadêmicos e consolidações**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-7.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-6: entrega anterior aceita em homologação.
- **Saída:** FECHO-7, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Escopo inicial restante. Aditivos continuam fora.

**Alocação macro pretendida:** 20%. É a meta original de divisão de esforço, não medição em horas. Fechamentos antecipados para 1 a 4 não são outra implementação nesta entrega.

## Ordem interna obrigatória

31. [E7-01 — Turmas, edição por dia e preenchimento automático](#E7-01)
32. [E7-02 — Importação ampliada e erros por linha](#E7-02)
33. [E7-03 — Relatórios de disciplinas e pós-graduação do pedido inicial](#E7-03)
34. [E7-04 — Consolidação anual e departamental da carga docente](#E7-04)

Depois do último item, conferir **FECHO-7** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E7-01"></a>

## E7-01 — Turmas, edição por dia e preenchimento automático

**Ordem global:** 31/42. **Executar após:** FECHO-6. **Dependências técnicas:** [E2-02](entrega-02.md#E2-02), [E4-05](entrega-04.md#E4-05).

### Entrada, saída e limite

- **Entrada:** FECHO-6, D05 de crédito e D09 de identidade já fechadas.
- **Saída esperada:** Turma/dia editável sem duplicação e valores iniciais da disciplina preenchidos corretamente.
- **Limite do item:** Mudança de nível de crédito só nesta tarefa, se D05 a exigir; relatórios anteriores terão regressão prevista.

### Diagnóstico conferido no código

O create atual grava uma DisciplinaTurma por requisição; a causa da triplicação relatada ainda precisa ser reproduzida no frontend/importação. A edição grava carga na turma, mas crédito em DisciplinaSemestre compartilhado. E4-05 também precisa corrigir a identidade insuficiente usada no importador. Não presumir que registros em dias/docentes distintos sejam duplicatas.

### Referência literal dos documentos originais

**Referência original DI02 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 11**

> Erro ao criar “nova turma” - Está triplicando o cadastro. Ao apagar, permite apagar apenas um cadastro - FEITO

**Referência original DI03 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 12**

> Para turmas que foram criadas para dois dias da semana, ao alterar, por exemplo, a carga horária de um dia está alterando do outro dia também. 25/03/2026 - agora o problema está ocorrendo com os crédito - FEITO

### Arquivos e pontos verificados

- [src/Controller/DisciplinaTurmaController.php:35](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L35) — dev 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:314](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L314) — dev 3ed9a38.
- [src/Entity/DisciplinaSemestre.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L1) — dev 3ed9a38.
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) — PR 9 13f5075.
- [src/Controller/DisciplinaController.php:103](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L103) — dev 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:379](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L379) — dev 3ed9a38.

### Roteiro de implementação

1. Usar a chave D09 também no cadastro manual e distinguir aula em outro dia/docente de envio duplicado. Não remover duplicatas históricas por heurística.
2. Rastrear o ID enviado ao alterar carga e horários; mudar somente a turma selecionada, mantendo o vínculo do semestre.
3. Se D05 manteve crédito compartilhado, mostrar explicitamente esse alcance antes de gravar. Se aprovou crédito por turma/dia, desenhar migration/backfill conservador e adaptar os consumidores listados, inclusive E2-02 e E4-05.
4. Ao escolher disciplina, carregar carga, tipo e crédito pela regra D05 como sugestão inicial; bloquear sobrescrita por resposta AJAX tardia após edição manual.
5. Conferir exclusão individual com AceiteDocente, grade temporal, horários nulos e duplo clique.

### Banco, arquivos e reversão

Mudança de modelo só se for confirmado crédito por turma/dia. Preservar crédito histórico e não apagar turmas em lote sem separar duplicatas reais.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Mesmo código em dois dias com docentes distintos | Criar, editar carga de um e apagar outro | Linhas legítimas preservadas e só ID escolhido alterado/excluído. |
| Disciplina escolhida e depois campo editado pelo usuário | Atrasar resposta de preenchimento | Não apaga a edição manual. |
| Regra de crédito aprovada | Editar e exportar nos relatórios anteriores | Mesmo significado em E2, E4 e E7; nenhuma mudança histórica não deliberada. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-09:1](https://dcadv789.github.io/sigles-pedidos/#V1-09) — **execução: Turmas, edição por dia e preenchimento automático**. Confirmar a ordenação por horário na tela de Cronogramas do vídeo, sem confundir com Quadro de aulas. · status atual: Validar.
- [Quadro V1-10:1](https://dcadv789.github.io/sigles-pedidos/#V1-10) — **execução: Turmas, edição por dia e preenchimento automático**. Preencher carga horária, tipo e créditos ao escolher a disciplina na criação da turma. · status atual: Pendente.
- [Quadro WI-02:1](https://dcadv789.github.io/sigles-pedidos/#WI-02) — **execução: Turmas, edição por dia e preenchimento automático**. Reproduzir a criação que triplicava turmas e a alteração de carga entre dias. · status atual: Validar.
- [Quadro WI-02:2](https://dcadv789.github.io/sigles-pedidos/#WI-02) — **execução: Turmas, edição por dia e preenchimento automático**. Definir se o crédito deve pertencer à disciplina, turma ou dia. · status atual: Definir.
- Pendência detalhada ER02 — Impedir que a criação de uma turma triplique indevidamente os cadastros e permita apagar somente um.
- Pendência detalhada ER03 — Alterar a carga horária de um dia sem modificar indevidamente o outro dia da turma.
- Pendência detalhada ER03.1 — Alterar créditos de um dia sem alterar o outro dia.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E7-02"></a>

## E7-02 — Importação ampliada e erros por linha

**Ordem global:** 32/42. **Executar após:** E7-01. **Dependências técnicas:** [E4-05](entrega-04.md#E4-05), [E7-01](entrega-07.md#E7-01).

### Entrada, saída e limite

- **Entrada:** D09 implementada em E4-05 e D18 de formatos/recortes.
- **Saída esperada:** Validação ampliada por linha e formatos/recortes aprovados, preservando o importador seguro.
- **Limite do item:** Não reabrir atomicidade ou chave silenciosamente; eventual mudança exige regressão da E4.

### Diagnóstico conferido no código

A PR cobre CSV de formato fixo e modelo; o aceite básico é E4-05. XLSX e seleção Ambas no mesmo arquivo ainda são complementos a definir.

### Referência literal dos documentos originais

**Referência original RV29 — Relatório de visita, página 2 — Detalhamento técnico: 6-) cronograma e importação de dados**

> O sistema possui Módulo de Cronograma, que atualmente permite a importação de dados por meio de arquivos Excel.

**Referência original RV30 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Aperfeiçoamento do processo de importação;

**Referência original RV32 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Validação dos dados importados;

**Referência original RV33 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Tratamento de inconsistências e erros durante as importações;

**Referência original RV34 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Avaliação da possibilidade de criação de modelos padronizados de planilha para alimentação do sistema.

**Referência original DI33 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 74**

> Na página de importação do cronograma acrescentar as opções de baixar não só os dados das turmas da graduação, mas da pós-graduação ou ambos.

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — PR 9 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — PR 9 13f5075.
- [src/Repository/DisciplinaTurmaRepository.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Repository/DisciplinaTurmaRepository.php#L1) — PR 9 13f5075.
- [composer.json:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/composer.json#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Reutilizar o pipeline leitura→validação→prévia→gravação de E4-05, mantendo um resultado com linha/campo/motivo.
2. Proposta: arquivo inteiro atômico permanece; só admitir parcial se D18 aprovar contagens e tratamento explícito, com revisão de D09.
3. Para Ambas, preservar o tipo real de cada disciplina e rejeitar conflitos com cadastro global; não preencher todo o arquivo com uma única escolha.
4. XLSX só após definição e avaliação das dependências oficiais na execução; CSV nunca é renomeado para fingir outro formato.
5. Validar nulos, decimais, acentos, linha longa e fórmulas apenas como dados; relatório final concilia lidas, válidas, criadas, atualizadas e recusadas.
6. Reexecutar o arquivo original e a repetição com a mesma chave, sem recriar aceites docentes desnecessariamente.

### Banco, arquivos e reversão

Sem migration prevista. Importação deve ser transacional conforme a política escolhida e idempotente segundo a chave de negócio definida.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.
- [D18 — Importação ampliada](INTEGRACAO_E_DECISOES.md#D18) · dono E7-02. Definir neste item. CSV/XLSX, Ambas, limites e eventual aceite parcial. Qualquer alteração de D09 exige revisão dos consumidores anteriores.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| CSV misto com uma linha inválida | Validar/importar | Erros por linha e nenhuma gravação se mantida atomicidade. |
| Arquivo válido em cada formato aprovado | Importar duas vezes | Mesmo resultado sem duplicação; formatos não aprovados recusados. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-13:2](https://dcadv789.github.io/sigles-pedidos/#VS-13) — **parcela: Diagnóstico ampliado e formatos/recortes aprovados**. Testar o arquivo original do cliente e o tratamento dos erros por linha. · status atual: Validar.
- [Quadro VS-13:3](https://dcadv789.github.io/sigles-pedidos/#VS-13) — **execução: Importação ampliada e erros por linha**. Confirmar necessidade de XLSX; o formato implementado é CSV. · status atual: Definir.
- Pendência detalhada CR05.1 — Na importação de um único CSV, escolher Ambas e preservar os tipos de cada disciplina.
- Pendência detalhada OR07.1 — Importar diretamente arquivos Excel, caso seja exigido XLSX além de CSV.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E7-03"></a>

## E7-03 — Relatórios de disciplinas e pós-graduação do pedido inicial

**Ordem global:** 33/42. **Executar após:** E7-02. **Dependências técnicas:** [E2-99](entrega-02.md#E2-99), [E7-01](entrega-07.md#E7-01).

### Entrada, saída e limite

- **Entrada:** D04/D05 e D19 dos relatórios acadêmicos, incluindo a pergunta sobre pós.
- **Saída esperada:** Relatório de disciplinas/pós identificado, ou equivalência aceita por amostra.
- **Limite do item:** Não chamar este pedido inicial de Adicional nem incluir o editor de planos novo.

### Diagnóstico conferido no código

Responsável, Excel e Crédito já têm fechamento em E2-01/E2-02. A finalidade do pedido Relatório de disciplinas ainda não está definida.

### Referência literal dos documentos originais

**Referência original DI39 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 86**

> Relatório de disciplinas

**Referência original DI41 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 88**

> Relatório pós-graduação??  - matérias, docentes, carga horária…

### Arquivos e pontos verificados

- [src/Controller/RelatorioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/RelatorioController.php#L1) — dev 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) — dev 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — dev 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Separar o pedido Relatório de disciplinas da pergunta Relatório pós-graduação??. Definir colunas, granularidade, ano/semestre/tipo e público de cada saída.
2. Comparar com Disciplinas, Disciplinas docente e Quadro de aulas já fechados; comprovar equivalência com uma amostra ou registrar a consulta distinta.
3. Reutilizar responsável D04 e crédito D05, sem confundir ministrante e responsável nem somar repetições de crédito por linha de horário.
4. Exibir e exportar o mesmo conjunto; registrar se pós é apenas filtro de tipo ou relatório com campos próprios.
5. A consulta de pós por filtro de tipo já foi registrada como entregue (pendência DI07). Não criar um segundo relatório só para repetir esse filtro; usar esse caso como equivalência/regressão, salvo diferença concreta em D19.

### Banco, arquivos e reversão

Sem nova tabela presumida; campos novos exigem justificativa e definição anteriores à migration.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D04 — Responsável acadêmico e período](INTEGRACAO_E_DECISOES.md#D04) · dono E2-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Período padrão e leitura histórica de vínculos/docentes inativos.
- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D19 — Relatórios de disciplinas e pós-graduação](INTEGRACAO_E_DECISOES.md#D19) · dono E7-03. Definir neste item. Colunas, granularidade, público, período, filtros e sentido da pergunta sobre pós.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina de pós com responsável e turma de outro docente | Consultar tela e Excel | Cada papel e carga aparecem na coluna aprovada; nenhum desaparece por filtro incorreto. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- Pendência detalhada DI05 — Criar “Relatório de disciplinas”, sem definição de campos e finalidade.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E7-04"></a>

## E7-04 — Consolidação anual e departamental da carga docente

**Ordem global:** 34/42. **Executar após:** E7-03. **Dependências técnicas:** [E7-01](entrega-07.md#E7-01), [E7-03](entrega-07.md#E7-03).

### Entrada, saída e limite

- **Entrada:** D20 de carga/rateio/departamento, D04/D05 e turmas corrigidas.
- **Saída esperada:** Consolidação anual/departamental com detalhamento conciliável.
- **Limite do item:** Não somar a pós duas vezes nem atribuir carga ao responsável apenas por ele liderar a disciplina.

### Diagnóstico conferido no código

cargaHorariaDocentes agrega turmas; o relatório de responsáveis tem outra finalidade. Somar joins de cursos/responsáveis sem definir a unidade de contagem pode duplicar carga. O código soma carga_horaria da turma, enquanto a entidade também tem carga_horaria_docente; a definição da medida é requisito anterior à soma.

### Referência literal dos documentos originais

**Referência original DI43 — Documento inicial SINGLES — ALTERAÇÕES / 4. DISCIPLINAS DOCENTES — parágrafo 101**

> Somatória por docente: Total carga horária 1º semestre + somatória carga horária 2º semestre + carga horária pós-graduação (nessa listagem, atualmente não consta a carga horária referente às matérias de pós graduação) CARGA HORÁRIA TOTAL

**Referência original RV45 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> Foi apresentada a necessidade de evolução dos relatórios relacionados à carga horária dos docentes por departamento.

**Referência original RV46 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Revisão e ampliação dos filtros disponíveis;

**Referência original RV47 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Melhoria na forma de consulta e consolidação das informações;

**Referência original RV48 — Relatório de visita, página 3 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Aperfeiçoamento da visualização dos dados;

**Referência original RV49 — Relatório de visita, página 4 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Melhoria das funcionalidades de exportação de dados e relatórios;

**Referência original RV50 — Relatório de visita, página 4 — Detalhamento técnico: 9-) relatório de carga horária docente**

> - Avaliação de formatos adequados para utilização administrativa das informações extraídas do sistema.

### Arquivos e pontos verificados

- [src/Controller/DisciplinaTurmaController.php:454](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L454) — dev 3ed9a38.
- [templates/relatorios/carga_docentes.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/carga_docentes.html.twig#L1) — dev 3ed9a38.
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) — dev 3ed9a38.
- [src/Entity/Departamento.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Departamento.php#L1) — dev 3ed9a38.
- [src/Entity/DisciplinaTurma.php:66](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L66) — dev 3ed9a38.

### Roteiro de implementação

1. Distinguir carga_horaria da turma e carga_horaria_docente. O código atual soma a primeira; D20 deve dizer qual mede trabalho docente e como tratar valores ausentes/zero.
2. Definir departamento de referência e turma compartilhada. Não dividir igualmente sem dado ou regra aprovada.
3. Agregar primeiro por chave única de ocorrência/turma e docente; depois por semestre, tipo e departamento. Cursos e responsáveis entram como informação, não multiplicador.
4. Propor colunas 1º semestre graduação, 2º semestre graduação, pós anual e total, ou totais semestrais inclusivos com pós apenas como recorte. Escolher uma alternativa em D20.
5. Entregar detalhamento para conferir a soma e a mesma consulta base para exportação.

### Banco, arquivos e reversão

Não inventar carga docente ausente dividindo igualmente. Se rateio precisar de um dado novo, definir antes da migration e preservar os registros anteriores.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D04 — Responsável acadêmico e período](INTEGRACAO_E_DECISOES.md#D04) · dono E2-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Período padrão e leitura histórica de vínculos/docentes inativos.
- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D19 — Relatórios de disciplinas e pós-graduação](INTEGRACAO_E_DECISOES.md#D19) · dono E7-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Colunas, granularidade, público, período, filtros e sentido da pergunta sobre pós.
- [D20 — Carga anual e departamento](INTEGRACAO_E_DECISOES.md#D20) · dono E7-04. Definir neste item. carga_horaria ou carga_horaria_docente, rateio, departamento de referência e representação dos semestres/pós.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Turmas em dois semestres, graduação/pós e dois docentes | Somar manualmente e comparar tela/Excel | Somas idênticas à unidade de carga D20 sem dupla contagem de pós. |
| Uma turma vinculada a três cursos | Gerar total departamental | Total não triplica. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-17:2](https://dcadv789.github.io/sigles-pedidos/#VS-17) — **execução: Consolidação anual e departamental da carga docente**. Consolidar a carga por departamento com filtros e exportação próprios. · status atual: Pendente.
- [Quadro WI-15:2](https://dcadv789.github.io/sigles-pedidos/#WI-15) — **execução: Consolidação anual e departamental da carga docente**. Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente. · status atual: Pendente.
- Pendência detalhada DD01 — Consolidar por docente primeiro semestre, segundo semestre, pós-graduação e carga horária total anual.
- Pendência detalhada OR12.1 — Consolidar a carga horária por departamento, com filtros e exportação próprios.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-7"></a>

## FECHO-7 — Condição para seguir

**Estado atual: não executado.**

- [ ] Todos os itens desta entrega têm saída comprovada e testes de aceite registrados; correção dispensada por equivalência exige evidência e aceite.
- [ ] Decisões de negócio desta entrega resolvidas ou ramo não aplicável justificado; nenhuma lacuna paga foi encerrada só como estudo.
- [ ] Regressões dos contratos anteriores reexecutadas e diferenças registradas; nenhuma dependência técnica futura foi criada.
- [ ] Commit cumulativo, migrations aplicáveis, dados de teste, reversão e notas registrados; status do quadro só muda depois da evidência.
- [ ] Homologação antecede qualquer produção. A autorização atual continua permitindo escrita apenas em esalq_sistema_des.

## Verificações comuns de execução

- [ ] Confirmar o ambiente de teste antes de qualquer comando que carregue o banco; não publicar valores de conexão nos logs.
- [ ] Executar php -l nos arquivos PHP alterados e php bin/console lint:twig apenas nos templates afetados.
- [ ] Se houver alteração de entidade/migration, executar a validação de schema e o status/dry-run das migrations somente com a conexão de teste conferida; revisar o SQL e as versões já executadas.
- [ ] Conferir as rotas AJAX e /js/routing pelo mecanismo já usado no projeto, sem recriar o antigo dump removido pela dev.
- [ ] Executar os testes de aceite específicos do item: erro/validação, usuário autorizado, usuário sem permissão e regressão do fluxo modificado.
- [ ] Guardar evidência de homologação por item e só então atualizar o status funcional no quadro. Planejamento pronto não significa item implementado.
- [ ] Preparar commit e PR focados por lote; teste/homologação precede produção, e a etapa de produção continua sujeita à restrição atual de acesso ao banco.
