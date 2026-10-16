# Entrega 4 — Planejamento técnico

**Integração e conclusão dos cronogramas**

**Data:** 16/10/2026. **Etapa:** Integração da PR 9 e homologação. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

Este arquivo fecha lacunas e valida a entrega existente sobre a dev atual. Não instrui a voltar a uma tag antiga nem declara uma nova publicação em produção.

## Ordem de execução

1. [E4-01 — Reconstruir a integração da PR sobre a dev atual](#E4-01)
2. [E4-06 — Conferir a migration de sala_aula e sua reversão](#E4-06)
3. [E4-02 — Criação unificada, cópia e datas brasileiras](#E4-02)
4. [E4-03 — Fechar a exportação de todos os cursos](#E4-03)
5. [E4-04 — Aplicar filtros de salas e docentes de ponta a ponta](#E4-04)
6. [E4-05 — Aceite da importação CSV da PR](#E4-05)
7. [E4-99 — Revisão final e integração da entrega 4](#E4-99)

<a id="E4-01"></a>

## E4-01 — Reconstruir a integração da PR sobre a dev atual

**Status:** Planejado. **Dependências:** E3-99.

### Evidência e diagnóstico

PR 9 está aberta, base ordem-servico, com conflitos. Comparada à dev, sua árvore remove migrations e correções de compras, planos e relatórios. Os incrementos próprios do cronograma são principalmente 9dab4c5 e 13f5075.

### Arquivos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — base PR 9, commit 13f5075.
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) — base PR 9, commit 13f5075.
- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) — base dev, commit 3ed9a38.
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Usar um checkout limpo em branch codex/ baseada na dev atual, preservando as alterações locais de Cronograma do usuário. Nenhum reset ou sobrescrita do diretório atual.
2. Reaplicar o incremento específico de cronogramas dos commits 9dab4c5 e 13f5075, resolvendo conflito por intenção. Não levar o pacote inteiro de commits antigos de cadastros/disciplinas/OS.
3. Comparar a árvore final com dev e conferir explicitamente que migrations, visualizador de anexos, compras e hotfix v1.2.1 continuam presentes.
4. Atualizar a base/diff da PR quando a implementação for executada; recalcular a divergência nessa data.

### Banco e dados

Nenhuma migração será removida por faltar na branch antiga. Nenhum merge, cherry-pick ou push no SIGLES foi executado no planejamento.

### Testes de aceite previstos

- [ ] Diff final contém o incremento de cronogramas e ajustes deliberados, sem reversão dos hotfixes existentes.
- [ ] PR deixa de depender de branch antiga e pode ser integrada sem apagar correções de outras entregas.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

Item de integração, preservação ou aceite do conjunto; não representa uma funcionalidade adicional.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-06"></a>

## E4-06 — Conferir a migration de sala_aula e sua reversão

**Status:** Planejado — exige definição. **Dependências:** E4-01.

### Evidência e diagnóstico

Version20260911120000 marca salas usadas em turma OU reserva como sala de aula. Seu down limpa todos os flags 1, inclusive os que poderiam existir antes. Esse comportamento não deve ser aplicado ou revertido sem conferir a regra e o estado anterior.

### Arquivos verificados

- [migrations/Version20260911120000.php:17](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/migrations/Version20260911120000.php#L17) — base PR 9, commit 13f5075.
- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) — base dev, commit 3ed9a38.
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Conferir no teste a migration executada e as salas afetadas, especialmente salas com reserva de reunião que não são salas de aula.
2. Fechar o critério de marcação. Se a migration já foi executada, criar uma correção nova, restrita e auditável; não editar o histórico para fingir outra execução.
3. Registrar valores anteriores e planejar restauração somente dos IDs afetados. Não executar o down amplo como rollback de rotina.

### Banco e dados

Migração de dados potencialmente necessária após o diagnóstico; nenhuma escrita em produção. Valores prévios precisam de snapshot para reversão seletiva.

### Testes de aceite previstos

- [ ] Sala usada apenas para reunião não é classificada como sala de aula por acidente, conforme a regra aprovada.
- [ ] Uma segunda execução é idempotente.
- [ ] A reversão de teste não apaga flags legítimos preexistentes.

### Decisões necessárias

- Critério sala de aula versus sala reservável e estado real da migration no teste.

### Referências dos pedidos

Item de integração, preservação ou aceite do conjunto; não representa uma funcionalidade adicional.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-02"></a>

## E4-02 — Criação unificada, cópia e datas brasileiras

**Status:** Planejado. **Dependências:** E4-01.

### Evidência e diagnóstico

A PR reúne criação vazia, cópia e CSV em Novo cronograma e introduz parseDataCronograma. Há alterações locais no mesmo conjunto de arquivos que precisam ser conciliadas na implementação.

### Arquivos verificados

- [src/Controller/CronogramaController.php:656](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L656) — base PR 9, commit 13f5075.
- [src/Controller/CronogramaController.php:940](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L940) — base PR 9, commit 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — base PR 9, commit 13f5075.
- [templates/disciplina_turma/modal_editar.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/disciplina_turma/modal_editar.html.twig#L1) — base PR 9, commit 13f5075.

### Implementação prevista

1. Revisar o contrato de origem (vazio/cópia/CSV), ano, semestre, tipo e início/fim entre modal, JavaScript e controller.
2. Validar datas com formato e round-trip para rejeitar datas inexistentes, fim anterior ao início e campos ausentes.
3. Conferir a cópia por graduação, pós ou ambas e preservar edição de datas por turma depois da cópia.
4. Conciliar as alterações locais do usuário sem substituir silenciosamente a versão trabalhada.

### Banco e dados

Reutilizar entidades de disciplina_semestre e turma. Validar antes de persistir e usar transação no conjunto copiado quando houver risco de criação parcial.

### Testes de aceite previstos

- [ ] Criar vazio e copiar os três recortes gera somente o semestre alvo escolhido.
- [ ] 31/02 é rejeitado; datas válidas aparecem DD/MM/AAAA e persistem após reabrir.
- [ ] Erro de uma turma não deixa um cronograma parcial sem tratamento.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

Item de integração, preservação ou aceite do conjunto; não representa uma funcionalidade adicional.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-03"></a>

## E4-03 — Fechar a exportação de todos os cursos

**Status:** Planejado. **Dependências:** E4-01.

### Evidência e diagnóstico

O JavaScript da PR prepara cursos_disciplina, mas a consulta retorna o curso ligado à turma. A apresentação da exportação ainda não tem os dados prometidos.

### Arquivos verificados

- [src/Controller/CronogramaController.php:424](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L424) — base PR 9, commit 13f5075.
- [templates/cronograma/cronograma.js:671](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L671) — base PR 9, commit 13f5075.
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Obter todos os cursos ativos vinculados à disciplina numa consulta agregada ou num lote separado por IDs de disciplina, evitando uma consulta por linha.
2. Retornar cursos_disciplina com formato estável para a grade/exportação. Não usar apenas o vínculo de curso da turma como se fosse a lista completa da disciplina.
3. Manter filtros e linhas originais sem multiplicação por cursos; ordenar e eliminar nomes duplicados na apresentação.

### Banco e dados

Sem nova tabela. Consultas parametrizadas e tratamento de disciplina sem curso.

### Testes de aceite previstos

- [ ] Disciplina oferecida a três cursos exporta os três, mesmo que a turma tenha um vínculo específico.
- [ ] A quantidade de linhas e os totais de carga não triplicam por causa dos cursos.
- [ ] Sem curso, a exportação mantém uma célula vazia/indicador acordado.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [WI-13:2](https://dcadv789.github.io/sigles-pedidos/#WI-13) — Exportar todos os cursos da disciplina: o servidor ainda retorna só o curso da turma. (Pendente).
- CR01 — Mostrar todos os cursos vinculados à disciplina no arquivo exportado.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-04"></a>

## E4-04 — Aplicar filtros de salas e docentes de ponta a ponta

**Status:** Planejado — exige definição. **Dependências:** E4-01, E4-06.

### Evidência e diagnóstico

A PR envia sala_aula, mas SalaController::list continua filtrando apenas active. O filtro de docente precisa considerar o cadastro docente e o usuário associado.

### Arquivos verificados

- [src/Controller/SalaController.php:37](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/SalaController.php#L37) — base PR 9, commit 13f5075.
- [src/Controller/DisciplinaController.php:74](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L74) — base dev, commit 3ed9a38.
- [src/Controller/DocenteController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DocenteController.php#L1) — base dev, commit 3ed9a38.
- [templates/cronograma/cronograma.js:188](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L188) — base PR 9, commit 13f5075.

### Implementação prevista

1. Definir a elegibilidade acordada e aplicar sala_aula no endpoint quando solicitado, mantendo o comportamento das outras telas que não enviam esse filtro.
2. Ocultar docentes/usuários inativos nas seleções novas; permitir que registros antigos mantenham sua referência histórica legível durante a edição.
3. Confirmar a presença do perfil Docente Sênior sem ampliar permissões nem usar uma constante de perfil não conferida.

### Banco e dados

Campo sala_aula já existe; o saneamento de seus valores está em E4-06. Sem exclusão de referências históricas.

### Testes de aceite previstos

- [ ] Sala ativa inelegível não aparece no seletor filtrado, mas a listagem geral de Salas continua íntegra.
- [ ] Docente inativo não pode ser escolhido para uma nova turma; uma turma antiga continua consultável.
- [ ] O docente sênior do cenário relatado aparece quando está elegível.

### Decisões necessárias

- Confirmar se a condição solicitada é sala_aula, reserva permitida ou ambas; são regras potencialmente diferentes.

### Referências dos pedidos

- [WI-04:1](https://dcadv789.github.io/sigles-pedidos/#WI-04) — Conferir o cadastro e os filtros com o docente do caso original. (Validar).
- [WI-13:3](https://dcadv789.github.io/sigles-pedidos/#WI-13) — Aplicar no servidor o filtro das salas elegíveis. (Pendente).
- [WI-13:4](https://dcadv789.github.io/sigles-pedidos/#WI-13) — Confirmar a seleção de docentes inativos no caso relatado. (Validar).
- ER06 — Mostrar Docente Sênior na seleção de docentes do cronograma.
- CR02 — Ocultar docentes inativos ao incluir outro docente na turma.
- CR03 — Mostrar apenas salas elegíveis para reserva no cadastro e no filtro do cronograma.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-05"></a>

## E4-05 — Aceite da importação CSV da PR

**Status:** Planejado — exige definição. **Dependências:** E4-02.

### Evidência e diagnóstico

O importador usa colunas fixas, delimitador ponto e vírgula e valida getClientMimeType como text/csv. O arquivo original do cliente ainda precisa de aceite.

### Arquivos verificados

- [src/Controller/CronogramaController.php:44](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L44) — base PR 9, commit 13f5075.
- [src/Controller/CronogramaController.php:142](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L142) — base PR 9, commit 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — base PR 9, commit 13f5075.

### Implementação prevista

1. Usar o modelo baixado da própria tela e o arquivo original do cliente no teste, registrando cabeçalhos, codificação, colunas, datas e separador esperados.
2. Validar o arquivo no servidor sem confiar exclusivamente no MIME informado pelo navegador; retornar erro legível para arquivo inválido.
3. Testar arquivo vazio, coluna ausente, data inválida, docente/disciplina não encontrada e repetição do mesmo arquivo; conferir transação e prevenção da duplicação prevista no fluxo.
4. O tratamento ampliado por linha, XLSX e recorte Ambas em CSV que ainda não existem ficam em E7-02.

### Banco e dados

Escrita somente no semestre e na massa de teste. Arquivo real deve ser tratado no ambiente autorizado, sem publicá-lo no Pages.

### Testes de aceite previstos

- [ ] Modelo baixado importa; arquivo original tem resultado e erros identificados.
- [ ] Uma falha não derruba a página nem gera linhas órfãs.
- [ ] Reimportação não duplica silenciosamente as mesmas turmas.

### Decisões necessárias

- Disponibilidade do arquivo original e política de atomicidade/reimportação.

### Referências dos pedidos

- [VS-13:2](https://dcadv789.github.io/sigles-pedidos/#VS-13) — Testar o arquivo original do cliente e o tratamento dos erros por linha. (Validar).
- [WI-01:2](https://dcadv789.github.io/sigles-pedidos/#WI-01) — O arquivo que originou o erro ainda precisa de teste de aceite. (Validar).
- ER01.2 — Confirmar que o arquivo que originou o erro de importação do cliente é aceito e cria o cronograma corretamente.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E4-99"></a>

## E4-99 — Revisão final e integração da entrega 4

**Status:** Planejado. **Dependências:** E4-02, E4-03, E4-04, E4-05, E4-06.

### Evidência e diagnóstico

Implementação na PR não equivale a entrega homologada. A integração depende da preservação das entregas anteriores e do aceite dos fluxos de cronogramas.

### Arquivos verificados

- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) — base dev, commit 3ed9a38.
- [templates/cronograma/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/index.html.twig#L1) — base PR 9, commit 13f5075.
- [src/Controller/CronogramaController.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L1) — base PR 9, commit 13f5075.

### Implementação prevista

1. Executar verificações PHP/Twig/rotas e os cenários de E4-02 a E4-06 no teste.
2. Repetir os casos essenciais de compras, login, relatórios e anexos das entregas 1 a 3.
3. Atualizar notas da PR, arquivos e riscos de migrations; integrar na dev apenas durante a futura execução.
4. Registrar a versão de homologação e atualizar os status com evidências, sem declarar publicação em produção.

### Banco e dados

Sem execução de deploy do SIGLES nesta etapa. A limitação de escrita em produção permanece.

### Testes de aceite previstos

- [ ] PR revisável e sem regressões das entregas anteriores.
- [ ] Fluxos vazio/cópia/CSV, exportação e seleções têm aceite registrado.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [VS-01:4](https://dcadv789.github.io/sigles-pedidos/#VS-01) — Evolução de cronogramas. (Na PR).
- [VS-13:1](https://dcadv789.github.io/sigles-pedidos/#VS-13) — Fluxo unificado de Novo cronograma e arquivo modelo CSV. (Na PR).
- [VS-15:1](https://dcadv789.github.io/sigles-pedidos/#VS-15) — Implementado no PR 9; depende de integração e homologação. (Na PR).
- [WI-01:1](https://dcadv789.github.io/sigles-pedidos/#WI-01) — Criação com ano/semestre e modelo de importação. (Na PR).
- [WI-13:1](https://dcadv789.github.io/sigles-pedidos/#WI-13) — Copiar entre semestres, com início/fim e seleção Graduação, Pós-graduação ou Ambas. (Na PR).
- [WI-22:1](https://dcadv789.github.io/sigles-pedidos/#WI-22) — Criação e importação do cronograma implementadas no PR 9. (Na PR).

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
