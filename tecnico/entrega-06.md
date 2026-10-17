# Entrega 6 — Planejamento técnico revisado

**Fornecedores e operação administrativa**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-6.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-5: entrega anterior aceita em homologação.
- **Saída:** FECHO-6, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Escopo inicial restante. Aditivos continuam fora.

**Alocação macro pretendida:** 15%. É a meta original de divisão de esforço, não medição em horas. Fechamentos antecipados para 1 a 4 não são outra implementação nesta entrega.

## Ordem interna obrigatória

27. [E6-01 — Cadastro e gravação de fornecedores](#E6-01)
28. [E6-02 — Arquivamento e complementos do fluxo de compras](#E6-02)
29. [E6-03 — Relatórios e ajustes administrativos restantes de OS](#E6-03)
30. [E6-04 — Definir materiais e alcance do Almoxarifado](#E6-04)

Depois do último item, conferir **FECHO-6** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E6-01"></a>

## E6-01 — Cadastro e gravação de fornecedores

**Ordem global:** 27/42. **Executar após:** FECHO-5. **Dependências técnicas:** [E3-04](entrega-03.md#E3-04), [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** FECHO-5, lista de campos e D14 da integração com compras.
- **Saída esperada:** Descrição de serviços e gravação de fornecedores consistentes, com vínculo de compras delimitado.
- **Limite do item:** Remoção total de tags usa semântica vazio/omitido; não criar um novo processo financeiro por inferência.

### Diagnóstico conferido no código

Fornecedor não tem campo de descrição dos serviços. update grava os campos existentes e trata tags apenas quando a lista não está vazia; a falha relatada precisa ser isolada por payload e resposta.

### Referência literal dos documentos originais

**Referência original RV25 — Relatório de visita, página 2 — Detalhamento técnico: 4-) módulo de fornecedores**

> Foi informado que o atual Módulo de Fornecedores possui baixa utilização.

**Referência original RV26 — Relatório de visita, página 2 — Detalhamento técnico: 4-) módulo de fornecedores**

> Deverá ser realizada análise das funcionalidades existentes, buscando identificar oportunidades para aprimoramento do cadastro e da gestão das informações de fornecedores, inclusive considerando sua integração com os futuros fluxos do Módulo de Compras.

### Arquivos e pontos verificados

- [src/Entity/Fornecedor.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Fornecedor.php#L1) — dev 3ed9a38.
- [src/Controller/FornecedorController.php:161](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/FornecedorController.php#L161) — dev 3ed9a38.
- [templates/fornecedor/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/modal.html.twig#L1) — dev 3ed9a38.
- [templates/fornecedor/fornecedor.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/fornecedor.js#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Reproduzir a edição que não grava e conferir payload, erros, resposta e consulta posterior.
2. Definir descrição de serviços: tamanho, obrigatório para novos ou opcional, listagem e exportação. Propor migration aditiva nullable e backfill apenas se necessário.
3. Revisar tags e campos omitidos em edição: lista vazia explícita limpa; campo ausente preserva.
4. Comparar a integração pretendida com os vínculos existentes de orçamento/compra; implementar somente o ponto D14 documentado.
5. Reexecutar a criação de fornecedor no modal da OS, que depende do mesmo cadastro e de E3-04.

### Banco, arquivos e reversão

Proposta de coluna nova descricao_servicos, a confirmar antes de gerar migration. Nenhuma migration criada nesta etapa.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D07 — Anexos e criação conjunta de OS/orçamento](INTEGRACAO_E_DECISOES.md#D07) · dono E3-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Extensões/tamanhos, anexos múltiplos e comportamento da OS se o orçamento falhar.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D14 — Fornecedores e vínculo com compras](INTEGRACAO_E_DECISOES.md#D14) · dono E6-01. Definir neste item. Tamanho/obrigatoriedade e qual registro de compra/orçamento recebe fornecedor; criar ou apenas selecionar.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Fornecedor antigo e novo, com tags | Editar serviço e limpar tags | Texto persiste, tags vazias quando solicitado e antigos continuam abrindo. |
| Fornecedor criado dentro de OS | Salvar orçamento e reabrir cadastro | Um fornecedor válido e vínculo correto sem duplicação. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-04:1](https://dcadv789.github.io/sigles-pedidos/#V1-04) — **execução: Cadastro e gravação de fornecedores**. Adicionar o campo ao cadastro, à edição e à listagem de fornecedores. · status atual: Pendente.
- [Quadro V1-05:1](https://dcadv789.github.io/sigles-pedidos/#V1-05) — **execução: Cadastro e gravação de fornecedores**. Reproduzir com os campos e dados que não eram gravados. · status atual: Validar.
- [Quadro VS-11:1](https://dcadv789.github.io/sigles-pedidos/#VS-11) — **execução: Cadastro e gravação de fornecedores**. Definir a integração pretendida e tratar os pedidos V1-04 e V1-05. · status atual: Definir.
- Pendência detalhada OR05 — Aprimorar fornecedores e a integração com compras.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E6-02"></a>

## E6-02 — Arquivamento e complementos do fluxo de compras

**Ordem global:** 28/42. **Executar após:** E6-01. **Dependências técnicas:** [E1-05](entrega-01.md#E1-05), [E1-99](entrega-01.md#E1-99).

### Entrada, saída e limite

- **Entrada:** D01, FECHO-5 e D15 sobre Arquivados/aba Compras.
- **Saída esperada:** Navegação e complementos de compras sem segundo estado de arquivamento.
- **Limite do item:** Não reimplementar datas, ativação e encerramento já fechados na entrega 1.

### Diagnóstico conferido no código

A consulta de períodos encerrados já existe. Datas, ativação e transições do período estão no fechamento da entrega 1 e não serão desenvolvidas de novo aqui.

### Referência literal dos documentos originais

**Referência original DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**Referência original DI61 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 164**

> Será criada a aba “compras” ??

**Referência original RV22 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Revisar e aperfeiçoar o fluxo atual de Compras;

### Arquivos e pontos verificados

- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) — dev 3ed9a38.
- [src/Repository/PeriodoSolicitacoesRepository.php:101](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L101) — dev 3ed9a38.
- [templates/painel_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L1) — dev 3ed9a38.
- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Comparar a consulta Mostrar períodos encerrados com o pedido Arquivados usando uma amostra aprovada.
2. Se a consulta atende, registrar equivalência e ajustar somente navegação/rótulo necessário. Se não atende, especificar a diferença em D15.
3. Definir a aba Compras com campos e público antes de criar uma tela; verificar se é apenas acesso ao painel existente.
4. Preservar vigência padrão, filtros de departamento, históricos e impedimentos de edição segundo D01.

### Banco, arquivos e reversão

Nenhuma tabela de arquivo ou novo estágio será criado por mera mudança de nome de aba.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D01 — Estágios e encerramento dos períodos](INTEGRACAO_E_DECISOES.md#D01) · dono E1-05. Consumir a decisão anterior, sem redefini-la silenciosamente. Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.
- [D03 — Data de origem das compras](INTEGRACAO_E_DECISOES.md#D03) · dono E1-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Forma de abrir o detalhamento e representação temporal/fuso de exibição.
- [D14 — Fornecedores e vínculo com compras](INTEGRACAO_E_DECISOES.md#D14) · dono E6-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Tamanho/obrigatoriedade e qual registro de compra/orçamento recebe fornecedor; criar ou apenas selecionar.
- [D15 — Arquivados e aba Compras](INTEGRACAO_E_DECISOES.md#D15) · dono E6-02. Definir neste item. Diferença real entre Arquivados e encerrados; público/campos da aba Compras caso seja outra função.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período vigente e encerrado | Consultar Atual/Arquivados | Separação correta e nenhuma nova edição liberada no encerrado. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-09:2](https://dcadv789.github.io/sigles-pedidos/#VS-09) — **execução: Arquivamento e complementos do fluxo de compras**. Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa. · status atual: Pendente.
- [Quadro WI-20:2](https://dcadv789.github.io/sigles-pedidos/#WI-20) — **execução: Arquivamento e complementos do fluxo de compras**. Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras. · status atual: Definir.
- Pendência detalhada CO01.3 — Criar uma aba ou campo específico chamado Arquivados.
- Pendência detalhada CO06 — Criar a “aba Compras”, caso seja diferente do menu e do painel já existentes.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E6-03"></a>

## E6-03 — Relatórios e ajustes administrativos restantes de OS

**Ordem global:** 29/42. **Executar após:** E6-02. **Dependências técnicas:** [E3-99](entrega-03.md#E3-99), [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** FECHO-3, D06/D07 e lista D16 validada com Milton.
- **Saída esperada:** Relatórios administrativos especificados e implementados quando efetivamente distintos.
- **Limite do item:** Seguidores, responsáveis e ordenação permanecem de responsabilidade da entrega 3.

### Diagnóstico conferido no código

Seguidores, responsáveis, ordem inicial e resumo em Configurações estão no fechamento da entrega 3. O que resta aqui é a lista ainda aberta de relatórios/ajustes com Milton.

### Referência literal dos documentos originais

**Referência original DI28 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 65**

> Verificar com o Milton demais ajustes necessários.

**Referência original RV23 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar e aprimorar as funcionalidades relacionadas às Ordens de Serviço;

**Referência original RV24 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Analisar regras, etapas, cadastros e relatórios necessários para tornar os processos mais estruturados e aderentes à rotina administrativa da Universidade.

### Arquivos e pontos verificados

- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) — dev 3ed9a38.
- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) — dev 3ed9a38.
- [src/Controller/OrcamentoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L1) — dev 3ed9a38.
- [templates/ordem_servico/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Para cada relatório, obter colunas, filtros, unidade da linha, totalizações, exemplo e perfil que consulta.
2. Conferir se DataTables/listagem existente atende. Equivalência exige amostra e aceite, não apenas afirmação do implementador.
3. Quando houver saída distinta, consultar por OS antes de juntar seguidores/anexos/orçamentos, evitando multiplicar contagens.
4. Exportar o mesmo conjunto e recorte de acesso da tela; conferir datas, solicitante, responsável e estágios conforme as regras fechadas.

### Banco, arquivos e reversão

Nenhuma migração prevista até haver campo ausente identificado. Não criar um novo cadastro de OS.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D06 — Responsável da OS e herança](INTEGRACAO_E_DECISOES.md#D06) · dono E3-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Solicitante versus categoria/subcategoria/configuração; independência e como distinguir herança de escolha específica.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D16 — Relatórios administrativos de OS](INTEGRACAO_E_DECISOES.md#D16) · dono E6-03. Definir neste item. Quais relatórios/ajustes restam depois de E3 e como medir seu aceite.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Uma OS com dois anexos e três seguidores | Gerar relatório/Excel | Uma OS nos totais e mesma seleção da tela. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — **parcela: Relatórios e ajustes administrativos definidos com Milton**. Validar persistência dos seguidores e definir os relatórios gerenciais restantes. · status atual: Validar.
- Pendência detalhada OS08 — Levantar com Milton outros ajustes necessários.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E6-04"></a>

## E6-04 — Definir materiais e alcance do Almoxarifado

**Ordem global:** 30/42. **Executar após:** E6-03. **Dependências técnicas:** [E1-99](entrega-01.md#E1-99), [E6-02](entrega-06.md#E6-02).

### Entrada, saída e limite

- **Entrada:** Tipo Compras/Almoxarifado existente e D17 sobre o alcance pago.
- **Saída esperada:** Delimitação verificável e, se contratada, especificação do controle próprio antes do desenvolvimento.
- **Limite do item:** Não encerrar controle de estoque completo entregando só classificação de materiais.

### Diagnóstico conferido no código

Tipo Compras/Almoxarifado foi entregue. Não há detalhamento suficiente para presumir um sistema completo de estoque ou uma nova hierarquia de categorias.

### Referência literal dos documentos originais

**Referência original DI45 — Documento inicial SINGLES — CADASTRO / Materiais — parágrafo 109**

> Criar subcategoria que será compras ou almoxarifado (que facilitará no filtro compras)

**Referência original RV21 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar a separação entre o Módulo de Compras e o Módulo de Almoxarifado, permitindo fluxos e controles específicos para cada atividade;

### Arquivos e pontos verificados

- [src/Entity/Material.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Material.php#L1) — dev 3ed9a38.
- [src/Entity/CategoriaMaterial.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/CategoriaMaterial.php#L1) — dev 3ed9a38.
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — dev 3ed9a38.
- [templates/material/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/material/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Comparar literalmente subcategoria Compras/Almoxarifado com Tipo já entregue. Registrar equivalência ou hierarquia adicional com exemplo.
2. Fechar se o compromisso é avaliação da separação ou construção de estoque: entradas, saídas, saldo, unidade, ajustes e perfis.
3. Se avaliação atender ao contratado, entregar o fluxo e o aceite documental. Se houver construção paga, manter a demanda aberta e detalhar subetapas dentro de E6-04 antes de FECHO-6.
4. Alternativa técnica se estoque estiver confirmado no escopo: reutilizar Material e propor registro aditivo de movimentos (material, quantidade, tipo, local se aplicável, data, usuário e referência). Saldo deriva de movimentos; saída valida disponibilidade dentro de transação com bloqueio do material/local e correção usa estorno rastreável. Esses nomes e campos são proposta, não entidades existentes.
5. Qualquer estoque contratado deve ter livro de movimentos/controle de concorrência e reversão próprios definidos; compra solicitada não equivale a entrada física.

### Banco, arquivos e reversão

Sem migração nem movimento de estoque previstos antes da definição. Não preencher saldos a partir de pedidos de compra.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D15 — Arquivados e aba Compras](INTEGRACAO_E_DECISOES.md#D15) · dono E6-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Diferença real entre Arquivados e encerrados; público/campos da aba Compras caso seja outra função.
- [D17 — Materiais, subcategorias e Almoxarifado](INTEGRACAO_E_DECISOES.md#D17) · dono E6-04. Definir neste item. Tipo atende subcategoria? O compromisso é avaliar ou construir? Se construir: unidades, locais, movimentos, saldo negativo e estorno.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Material de cada tipo e exemplo de subcategoria | Comparar a solução com o pedido | Decisão objetiva de equivalência ou gap. |
| Cliente confirma controle de estoque incluído | Revisar a definição de pronto | FECHO-6 não passa só com estudo; exige detalhamento e implementação do escopo confirmado. |
| Estoque confirmado: entrada 10 e saída 3 | Consultar saldo, tentar saída 8 e estornar 3 | Saldo 7, recusa de insuficiência se D17 proibir negativo, estorno rastreável e sem exclusão do movimento original. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-08:2](https://dcadv789.github.io/sigles-pedidos/#VS-08) — **execução: Definir materiais e alcance do Almoxarifado**. Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque. · status atual: Definir.
- [Quadro WI-16:2](https://dcadv789.github.io/sigles-pedidos/#WI-16) — **execução: Definir materiais e alcance do Almoxarifado**. Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente. · status atual: Definir.
- Pendência detalhada CA02.1 — Criar uma hierarquia adicional de subcategorias, caso seja isso que o cliente pretende.
- Pendência detalhada OR04.1 — Criar controle próprio de Almoxarifado, com fluxos independentes, caso pretendido.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-6"></a>

## FECHO-6 — Condição para seguir

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
