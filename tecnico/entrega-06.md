# Entrega 6 — Planejamento técnico

**Fornecedores e operação administrativa**

**Data:** 16/10/2026. **Etapa:** Escopo inicial restante. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

A referência macro original desta entrega é **15%** do restante. Pontos antecipados para o fechamento das entregas 1 a 4 não serão executados outra vez aqui. Revalidar o esforço depois desses fechamentos e das definições abertas.

## Ordem de execução

1. [E6-01 — Cadastro e gravação de fornecedores](#E6-01)
2. [E6-02 — Arquivamento e complementos do fluxo de compras](#E6-02)
3. [E6-03 — Relatórios e ajustes administrativos restantes de OS](#E6-03)
4. [E6-04 — Definir materiais e alcance do Almoxarifado](#E6-04)

<a id="E6-01"></a>

## E6-01 — Cadastro e gravação de fornecedores

**Status:** Planejado — exige definição. **Dependências:** E5-04.

### Evidência e diagnóstico

Fornecedor não tem campo de descrição dos serviços. update grava os campos existentes e trata tags apenas quando a lista não está vazia; a falha relatada precisa ser isolada por payload e resposta.

### Arquivos verificados

- [src/Entity/Fornecedor.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Fornecedor.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/FornecedorController.php:161](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/FornecedorController.php#L161) — base dev, commit 3ed9a38.
- [templates/fornecedor/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/modal.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/fornecedor/fornecedor.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/fornecedor.js#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Adicionar descrição de serviços em entidade, grupos, criação/alteração e DataTable, após definir tamanho e obrigatoriedade.
2. Usar migration aditiva nullable para preservar fornecedores antigos e incluir o campo nas exportações já existentes.
3. Reproduzir a edição que não grava, conferindo nomes de campo, validação e persistência; não assumir que todo o CRUD está quebrado.
4. Fechar a integração com compras: se for apenas selecionar fornecedor, reutilizar o vínculo aplicável; um processo novo deve ter regra definida antes de alterar o modelo.

### Banco e dados

Proposta de coluna nova descricao_servicos, a confirmar antes de gerar migration. Nenhuma migration criada nesta etapa.

### Testes de aceite previstos

- [ ] Fornecedor antigo continua abrindo; novo serviço salva, reabre e exporta.
- [ ] Campo alterado do cenário original persiste ou apresenta erro específico.
- [ ] Remoção de tags, se fizer parte do caso, distingue lista vazia de campo omitido.

### Decisões necessárias

- Texto livre/tamanho/obrigatoriedade e qual documento da compra será vinculado ao fornecedor.

### Referências dos pedidos

- [V1-04:1](https://dcadv789.github.io/sigles-pedidos/#V1-04) — Adicionar o campo ao cadastro, à edição e à listagem de fornecedores. (Pendente).
- [V1-05:1](https://dcadv789.github.io/sigles-pedidos/#V1-05) — Reproduzir com os campos e dados que não eram gravados. (Validar).
- [VS-11:1](https://dcadv789.github.io/sigles-pedidos/#VS-11) — Definir a integração pretendida e tratar os pedidos V1-04 e V1-05. (Definir).
- OR05 — Aprimorar fornecedores e a integração com compras.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E6-02"></a>

## E6-02 — Arquivamento e complementos do fluxo de compras

**Status:** Planejado — exige definição. **Dependências:** E1-99, E6-01.

### Evidência e diagnóstico

A consulta de períodos encerrados já existe. Datas, ativação e transições do período estão no fechamento da entrega 1 e não serão desenvolvidas de novo aqui.

### Arquivos verificados

- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) — base dev, commit 3ed9a38.
- [src/Repository/PeriodoSolicitacoesRepository.php:101](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L101) — base dev, commit 3ed9a38.
- [templates/painel_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Validar com o usuário se Mostrar períodos encerrados atende a Arquivados; se atender, registrar aceite sem criar outro estado de solicitação.
2. Se faltar uma aba de navegação, defini-la sobre a mesma consulta e aplicar os filtros de período/departamento existentes.
3. Fechar o conteúdo específico da aba Compras e da rotina administrativa antes de criar tela ou consulta nova.
4. Referenciar E1-02/E1-03/E1-05 para os pontos já fechados, mantendo histórico e bloqueios.

### Banco e dados

Nenhuma tabela de arquivo ou novo estágio será criado por mera mudança de nome de aba.

### Testes de aceite previstos

- [ ] Solicitações de período encerrado continuam consultáveis, sem permitir alterações indevidas.
- [ ] Período vigente permanece padrão e não se mistura ao anterior.
- [ ] Se a consulta atual atender, o pedido é encerrado por aceite, com evidência.

### Decisões necessárias

- Equivalência da consulta atual e conteúdo da nova aba.

### Referências dos pedidos

- [VS-09:2](https://dcadv789.github.io/sigles-pedidos/#VS-09) — Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa. (Pendente).
- [WI-20:2](https://dcadv789.github.io/sigles-pedidos/#WI-20) — Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras. (Definir).
- CO01.3 — Criar uma aba ou campo específico chamado Arquivados.
- CO06 — Criar a “aba Compras”, caso seja diferente do menu e do painel já existentes.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E6-03"></a>

## E6-03 — Relatórios e ajustes administrativos restantes de OS

**Status:** Planejado — exige definição. **Dependências:** E3-99, E6-02.

### Evidência e diagnóstico

Seguidores, responsáveis, ordem inicial e resumo em Configurações estão no fechamento da entrega 3. O que resta aqui é a lista ainda aberta de relatórios/ajustes com Milton.

### Arquivos verificados

- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/OrcamentoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L1) — base dev, commit 3ed9a38.
- [templates/ordem_servico/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Registrar campos, filtros, agrupamentos e quem consulta os relatórios solicitados, incluindo uma amostra de resultado esperado.
2. Reutilizar a listagem e DataTables quando a saída for o mesmo conjunto, sem duplicar contagem por seguidores, anexos ou orçamentos.
3. Aplicar a mesma restrição de departamentos e estágios da tela e parametrizar filtros no servidor.
4. Cruzar o aceite de E3-01 a E3-04 antes de remover qualquer pendência do quadro.

### Banco e dados

Nenhuma migração prevista até haver campo ausente identificado. Não criar um novo cadastro de OS.

### Testes de aceite previstos

- [ ] Relatório de amostra bate com as OS e com o histórico dos casos selecionados.
- [ ] Uma OS com vários anexos e seguidores é contada uma vez.
- [ ] Perfil sem acesso não obtém dados pela exportação direta.

### Decisões necessárias

- Lista fechada dos ajustes com Milton e desenho de cada relatório.

### Referências dos pedidos

- [VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — Validar persistência dos seguidores e definir os relatórios gerenciais restantes. (Validar).
- OS08 — Levantar com Milton outros ajustes necessários.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E6-04"></a>

## E6-04 — Definir materiais e alcance do Almoxarifado

**Status:** Planejado — exige definição. **Dependências:** E6-02.

### Evidência e diagnóstico

Tipo Compras/Almoxarifado foi entregue. Não há detalhamento suficiente para presumir um sistema completo de estoque ou uma nova hierarquia de categorias.

### Arquivos verificados

- [src/Entity/Material.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Material.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/CategoriaMaterial.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/CategoriaMaterial.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — base dev, commit 3ed9a38.
- [templates/material/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/material/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Conferir o exemplo do cliente para decidir se Tipo já atende ao termo subcategoria.
2. Documentar fluxos, responsáveis, unidades, entradas/saídas e o que realmente integra o contrato inicial.
3. Se a saída desta etapa for apenas o estudo, entregar o fluxo e o inventário de requisitos. Se houver construção incluída no pagamento, detalhar e reestimar sua implementação antes de prometer conclusão.
4. Preservar a separação e os filtros já entregues, sem criar tabela de estoque por dedução.

### Banco e dados

Sem migração nem movimento de estoque previstos antes da definição. Não preencher saldos a partir de pedidos de compra.

### Testes de aceite previstos

- [ ] Decisão registrada sobre Tipo versus subcategoria.
- [ ] O fluxo esperado e seu limite de implementação estão explícitos, sem confundir classificação de material com saldo de estoque.

### Decisões necessárias

- Tipo ou hierarquia nova; estudo ou controle de estoque completo incluído no pagamento.

### Referências dos pedidos

- [VS-08:2](https://dcadv789.github.io/sigles-pedidos/#VS-08) — Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque. (Definir).
- [WI-16:2](https://dcadv789.github.io/sigles-pedidos/#WI-16) — Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente. (Definir).
- CA02.1 — Criar uma hierarquia adicional de subcategorias, caso seja isso que o cliente pretende.
- OR04.1 — Criar controle próprio de Almoxarifado, com fluxos independentes, caso pretendido.

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
