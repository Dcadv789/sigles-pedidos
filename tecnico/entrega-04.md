# Entrega 4 — Integração e conclusão dos cronogramas

**Atualizado em 21/10/2026 · Publicado em homologação — v1.4.0-beta2; aceite e produção pendentes.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-3.5: preservar v1.3.3.
- Situação: Publicado em homologação — v1.4.0-beta2; aceite e produção pendentes.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E4-01"></a>

## E4-01 — Integração cumulativa da Entrega 4 com a Entrega 3.5

**Situação:** Implementado e disponível em homologação — v1.4.0-beta2.

Conflitos em CronogramaController, DisciplinaTurmaController e DisciplinaTurmaRepository resolvidos. Recursos da 3.5 preservados; PR #9 aberta, base dev, sem merge.

- Entrada: Entrega 3.5/v1.3.3 publicada; preservar todo o seu contrato.
- Saída: Branch de integração sobre a base cumulativa aprovada, com preservações comprovadas.
- Limite: Reaplicar intenção dos incrementos; o diff direto de árvores não prova que um merge Git deletaria tudo.

### Funções, correções ou próximos passos

- Base cumulativa incorpora a aplicação v1.3.3.
- Agenda preserva sala_id e datas; cópia valida cada nova aula antes do primeiro flush e lote valida os valores finais.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Base FECHO-3 e incrementos cronograma | Revisar diff final | Somente mudanças intencionais, sem regressão das entregas 1 a 3. |
| Arquivos locais modificados | Comparar antes/depois da preparação | Nenhum arquivo do usuário perdido ou substituído. |

### Documentos originais (rastreio preservado)

**DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

**DI34 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 75**

> Retirar a página inicial, logo após clicar no semestre do cronograma e ir direto para os dados.

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) · 13f5075
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) · 13f5075
- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) · 3ed9a38
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) · 3ed9a38

**Dependências:** E2-03.

<a id="E4-06"></a>

## E4-06 — Classificação de salas e preparação do banco para produção

**Situação:** Homologação conferida; ensaio/classificação pendentes antes de produção.

Homologação tem 60 migrations; Version20260911120000 já estava registrada. Produção tem 59 e essa migration histórica continua pendente.

- Entrada: Inventário da migration e D08 de classificação das salas.
- Saída: Critério de sala de aula/reservável e estratégia de dados reversível no teste.
- Limite: Não confundir sala de aula com sala reservável; duplicidades são remapeadas em E8-03.

### Funções, correções ou próximos passos

- Nenhuma migration executada no deploy da Entrega 4.
- Antes de produção, ensaiar/revisar efeitos de Version20260911120000 e a classificação das salas.
- Não executar down amplo nem zerar marcações manuais; preparar reversão seletiva.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Sala só de reunião e sala letiva | Aplicar o critério D08 em massa de teste | Cada uma recebe somente a classificação aprovada. |
| Flag manual preexistente e sem snapshot | Ensaiar compensação | Flag não é apagado por regra ampla; incerteza fica registrada. |

### Documentos originais (rastreio preservado)

**DI31 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 72**

> No filtro de salas tanto no cadastro quanto na página inicial, só aparecer as salas possíveis de reserva e não todas como aparecem.

### Referências de código (snapshot da leitura)

- [migrations/Version20260911120000.php:17](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/migrations/Version20260911120000.php#L17) · 13f5075
- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) · 3ed9a38
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) · 3ed9a38

**Dependências:** E4-01.

<a id="E4-02"></a>

## E4-02 — Criação unificada, cópia e datas brasileiras

**Situação:** Implementado e disponível em homologação — v1.4.0-beta2.

Novo cronograma reúne criar do zero, copiar e importar .xlsx.

- Entrada: E4-01, D05 e D09 de identidade e gravação de turmas.
- Saída: Criar vazio/copiar com datas válidas e alvo correto, sem alterar origem ou copiar a mesma turma duas vezes.
- Limite: Ampliar formatos e corrigir edição por dia são tarefas de E7; preservar o contrato definido agora.

### Funções, correções ou próximos passos

- Cópia por Graduação/Pós-graduação/Ambos, início/fim na mesma janela.
- Cópia repetida preserva aulas, ajustes de datas/crédito, cursos e responsáveis ativos conforme os vínculos do destino.
- DD/MM/AAAA e calendário em português; datas impossíveis ou final anterior ao início são recusados.
- Semestre existente abre em Dados; editar sem mudança mantém aceite, alterações efetivas geram aceite pendente.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Graduação e pós com datas diferentes | Copiar cada recorte e Ambos | Somente alvo alterado, recorte preservado e datas editáveis depois. |
| Cópia repetida e data 31/02 | Submeter | Sem duplicação silenciosa e nenhuma gravação com data inválida. |

### Documentos originais (rastreio preservado)

**DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

**DI32 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 73**

> Ao importar o cronograma de um semestre para o outro, colocarmos início e fim, na mesma tela e já aparecer no cronograma, deixando livre para alterarmos, pois as disciplinas da pós, nós alteramos todos os semestres e elas tem início e fim diferentes.

**DI33 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 74**

> Na página de importação do cronograma acrescentar as opções de baixar não só os dados das turmas da graduação, mas da pós-graduação ou ambos.

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:656](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L656) · 13f5075
- [src/Controller/CronogramaController.php:940](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L940) · 13f5075
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) · 13f5075
- [templates/disciplina_turma/modal_editar.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/disciplina_turma/modal_editar.html.twig#L1) · 13f5075
- [src/Repository/DisciplinaTurmaRepository.php:30](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Repository/DisciplinaTurmaRepository.php#L30) · 13f5075

**Dependências:** E4-01, E2-02.

<a id="E4-03"></a>

## E4-03 — Cursos e exportação Excel (.xlsx)

**Situação:** Implementado e disponível em homologação — v1.4.0-beta2.

Cursos ativos da disciplina reunidos sem multiplicar aulas na grade ou exportação.

- Entrada: Cursos ativos e formato de exportação por linha definidos.
- Saída: Todos os cursos da disciplina disponíveis no JSON e Excel, sem multiplicar linhas.
- Limite: Curso da turma e lista de cursos oferecidos pela disciplina são campos distintos.

### Funções, correções ou próximos passos

- Servidor apresenta todos os cursos ativos vinculados à disciplina.
- Exportação da grade somente Excel (.xlsx).

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina em três cursos e turma ligada a um | Exportar cronograma | Três cursos na célula, uma linha de turma e mesma carga. |

### Rastreio dos pedidos

- WI-13:2 — Exibir e exportar todos os cursos ativos da disciplina, sem multiplicar as aulas. · Homologação.

### Pendências detalhadas

- CR01 — Mostrar todos os cursos vinculados à disciplina no arquivo exportado. **Entrega 4 — homologação**: cursos ativos reunidos na grade e exportação XLSX, sem multiplicar aulas.

### Documentos originais (rastreio preservado)

**DI29 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 70**

> Ao baixar o arquivo do cronograma, termos a opção de aparecerem todos os cursos para os quais as disciplinas são oferecidas.

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:424](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L424) · 13f5075
- [templates/cronograma/cronograma.js:671](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L671) · 13f5075
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) · 3ed9a38

**Dependências:** E4-02.

<a id="E4-04"></a>

## E4-04 — Docentes ativos e salas elegíveis

**Situação:** Implementado e disponível em homologação — v1.4.0-beta2.

Filtros aplicados no servidor e nos seletores para novas atribuições.

- Entrada: D08, cadastro Docente/Usuario e caso original do docente sênior.
- Saída: Filtros aplicados no servidor e em todos os seletores, preservando vínculos históricos.
- Limite: Elegibilidade de sala não garante disponibilidade no horário; essa regra pertence a E8-01/E8-02.

### Funções, correções ou próximos passos

- Docente e usuário ativos; Docente Sênior elegível incluído.
- Salas ativas marcadas “É sala de aula?”; vínculo histórico continua disponível para conferência.
- Cadastro/edição da sala grava e reapresenta corretamente a marcação.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Docente sênior ativo, usuário inativo e docente inativo | Pesquisar nos três pontos | Só elegíveis para nova atribuição; sênior ativo disponível. |
| Turma antiga em sala inativa | Abrir e salvar outro campo | Vínculo antigo legível, sem remoção silenciosa. |

### Rastreio dos pedidos

- WI-04:1 — Filtros de atividade do usuário e do docente aplicados às novas seleções; conferir também o caso real relatado. · Homologação.
- WI-13:3 — Novas atribuições usam somente salas ativas marcadas “É sala de aula?”; vínculos históricos continuam visíveis. · Homologação.
- WI-13:4 — Novas seleções exigem usuário e cadastro docente ativos; Docente Sênior elegível incluído. · Homologação.

### Pendências detalhadas

- ER06 — Mostrar Docente Sênior na seleção de docentes do cronograma. **Entrega 4 — homologação**: Docente Sênior elegível incluído nas listas, com filtros de atividade.
- CR02 — Ocultar docentes inativos ao incluir outro docente na turma. **Entrega 4 — homologação**: novas seleções exigem cadastro docente e usuário ativos.
- CR03 — Mostrar apenas salas elegíveis para reserva no cadastro e no filtro do cronograma. **Entrega 4 — homologação**: sala ativa marcada “É sala de aula?” para nova atribuição; histórico preservado.

### Documentos originais (rastreio preservado)

**DI07 — Documento inicial SINGLES — ERROS / USUÁRIOS — parágrafo 23**

> O perfil de docente sênior, não está aparecendo no cronograma, somente docente.

**DI30 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 71**

> Ao cadastrar outro docente na turma, na pesquisa aparecem os docentes inativos;

**DI31 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 72**

> No filtro de salas tanto no cadastro quanto na página inicial, só aparecer as salas possíveis de reserva e não todas como aparecem.

### Referências de código (snapshot da leitura)

- [src/Controller/SalaController.php:37](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/SalaController.php#L37) · 13f5075
- [src/Controller/DisciplinaController.php:74](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L74) · 3ed9a38
- [src/Controller/DocenteController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DocenteController.php#L1) · 3ed9a38
- [templates/cronograma/cronograma.js:188](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L188) · 13f5075

**Dependências:** E4-06.

<a id="E4-05"></a>

## E4-05 — Importação Excel (.xlsx), modelo e integridade

**Situação:** XLSX testado em homologação; arquivo original do cliente ainda sujeito a aceite.

Daniel definiu somente .xlsx, sem macros. Importação e exportação CSV substituídas.

- Entrada: Modelo XLSX aprovado, arquivo original quando disponível e contrato D09.
- Saída: Importação básica segura: estrutura validada, lote coerente e chave de turma definida.
- Limite: XLSX e relatório ampliado são E7-02; atomicidade e identidade não podem ser adiadas para lá.

### Funções, correções ou próximos passos

- Modelo de 15 colunas, exemplos, datas/horários formatados e aba de orientações.
- Repetição idêntica não duplica; dias/horários distintos são diferenciados e tipo de disciplina existente é preservado.
- Erro desfaz todo o arquivo; a atomicidade preserva a proteção anterior da 3.5.
- A planilha não escolhe sala automaticamente: conferir turmas e atribuir salas, com validação de disponibilidade.
- Arquivo original do cliente ainda deve ser aceito no modelo aprovado; diagnóstico ampliado permanece E7-02.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Planilha do modelo com aulas em dias/horários distintos | Importar e repetir | Nenhuma duplicação ou sobrescrita de outra aula. |
| Planilha com erro na última linha | Importar | Rollback de todo o arquivo. |
| Planilha com acentos, datas e horários formatados | Importar | Dados e vínculos preservados no formato aprovado. |

### Rastreio dos pedidos

- VS-13:2 — Aceitar o arquivo original do cliente e definir os complementos de diagnóstico por linha além dos cenários já testados. · Validar.
- VS-13:3 — Formato definido por Daniel: somente Excel (.xlsx), com modelo organizado e aba de orientações. · Homologação.
- WI-01:2 — Testar o caso original do cliente no modelo .xlsx aprovado; os cenários sintéticos de importação, repetição e rollback já passaram. · Validar.

### Pendências detalhadas

- ER01.2 — Confirmar que o arquivo que originou o erro de importação do cliente é aceito e cria o cronograma corretamente. **Validar com cliente**: XLSX/modelo e cenários sintéticos já testados; falta aceite do arquivo original no formato aprovado.
- OR07.1 — Importar planilhas Excel (.xlsx). **Entrega 4 — homologação**: somente .xlsx, com modelo; formato definido por Daniel.

### Documentos originais (rastreio preservado)

**DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

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

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:44](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L44) · 13f5075
- [src/Controller/CronogramaController.php:142](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L142) · 13f5075
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) · 13f5075
- [src/Controller/CronogramaController.php:160](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L160) · 13f5075
- [src/Controller/CronogramaController.php:320](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L320) · 13f5075
- [src/Entity/AceiteDocente.php:12](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/AceiteDocente.php#L12) · 3ed9a38

**Dependências:** E4-02, E4-04.

<a id="E4-99"></a>

## E4-99 — Publicação em homologação e aceite da Entrega 4

**Situação:** Publicado em homologação; aceite final e produção pendentes.

v1.4.0-beta2 publicada em homologação; PR #9 aberta e sem conflitos. Produção permanece v1.3.3.

- Entrada: E4-01 a E4-06, D08 e D09 resolvidos e preservações de E2-03.
- Saída: FECHO-4 com diff revisável, cronogramas homologados e base para a entrega 5.
- Limite: PR aberta e código existente não são prova de integração ou publicação.

### Funções, correções ou próximos passos

- Títulos com separador, botões compactos à esquerda, filtros e ajuda por ícone padronizados nas páginas revisadas de cadastros, compras, OS e cronogramas.
- Perfis e Departamentos padronizados; menu Configurações reposicionado abaixo de Gestão de acessos. O erro de publicação dessa página foi diagnosticado, sem correção funcional nesta rodada.
- 120 testes unitários/230 asserções, 203 verificações de integração e 147 HTTP em homologação registrados na integração beta1.
- Beta2: YAML/Twig válidos e cinco rotas HTTP autenticadas verificadas localmente e em homologação; rodapé com versão sem badge.
- 147 HTTP anteriores não foram reexecutados para a alteração isolada do rodapé; não somar rodadas como novos casos únicos.
- Aguardar aceite funcional de Daniel e preparação específica do banco antes de autorizar produção.

### Evidências registradas

- PR #9: https://github.com/Dcadv789/sigles/pull/9
- Deploy beta2: https://github.com/Dcadv789/sigles/actions/runs/39532075957
- Código publicado: 8efeeea56b7fd2dbb394f727c58e404c22c871a4. Registro técnico posterior: e39840c.

### Banco e reversão

Sem nova migration executada em homologação. Produção preservada na Entrega 3.5.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Branch de integração cumulativa | Homologar todos os cenários E4 e regressões | Nenhuma regressão conhecida aberta; FECHO-4 só então é liberado. |

### Rastreio dos pedidos

- VS-01:4 — Evolução de cronogramas. · Homologação.
- VS-13:1 — Novo cronograma reúne criação do zero, cópia e importação Excel (.xlsx), com modelo para download. · Homologação.
- VS-15:1 — PR #9 atualizada sobre a Entrega 3.5, integrada na candidata de homologação; aceite funcional e produção ainda pendentes. · Homologação.
- WI-01:1 — Criação com ano/semestre e modelo de importação. · Homologação.
- WI-13:1 — Copiar entre semestres, com início/fim e seleção Graduação, Pós-graduação ou Ambas. · Homologação.
- WI-22:1 — Criação, cópia e importação XLSX em homologação na v1.4.0-beta2; bloqueio manual continua separado. · Homologação.

### Documentos originais (rastreio preservado)

**RV35 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> Foi identificada a necessidade de aprimoramento da página destinada ao cronograma de aulas.

**RV36 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhoria da organização visual da página;

**RV37 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Revisão de filtros e mecanismos de pesquisa;

**RV38 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhor aproveitamento dos espaços disponíveis;

**RV39 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Padronização de fontes, tamanhos de letras e demais componentes da interface;

**RV40 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhoria da legibilidade e da experiência de utilização;

**RV41 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Avaliação das informações apresentadas e da forma de consulta pelos usuários.

### Referências de código (snapshot da leitura)

- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) · 3ed9a38
- [templates/cronograma/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/index.html.twig#L1) · 13f5075
- [src/Controller/CronogramaController.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L1) · 13f5075

**Dependências:** E4-01, E4-06, E4-02, E4-03, E4-04, E4-05.

## FECHO-4 — Fechamento

**Publicado em homologação — v1.4.0-beta2; aceite e produção pendentes.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
