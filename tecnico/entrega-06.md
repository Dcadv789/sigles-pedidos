# Entrega 6 — Fornecedores e operação administrativa

**Atualizado em 21/10/2026 · Não executado.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-5: entrega anterior aceita em homologação.
- Situação: Não executado.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E6-01"></a>

## E6-01 — Cadastro e gravação de fornecedores

**Situação:** Planejado — execução não iniciada.

Fornecedor não tem campo de descrição dos serviços. update grava os campos existentes e trata tags apenas quando a lista não está vazia; a falha relatada precisa ser isolada por payload e resposta.

- Entrada: FECHO-5, lista de campos e D14 da integração com compras.
- Saída: Descrição de serviços e gravação de fornecedores consistentes, com vínculo de compras delimitado.
- Limite: Remoção total de tags usa semântica vazio/omitido; não criar um novo processo financeiro por inferência.

### Funções, correções ou próximos passos

- Reproduzir a edição que não grava e conferir payload, erros, resposta e consulta posterior.
- Definir descrição de serviços: tamanho, obrigatório para novos ou opcional, listagem e exportação. Propor migration aditiva nullable e backfill apenas se necessário.
- Revisar tags e campos omitidos em edição: lista vazia explícita limpa; campo ausente preserva.
- Comparar a integração pretendida com os vínculos existentes de orçamento/compra; implementar somente o ponto D14 documentado.
- Reexecutar a criação de fornecedor no modal da OS, que depende do mesmo cadastro e de E3-04.

### Banco e reversão

Proposta de coluna nova descricao_servicos, a confirmar antes de gerar migration. Nenhuma migration criada nesta etapa.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Fornecedor antigo e novo, com tags | Editar serviço e limpar tags | Texto persiste, tags vazias quando solicitado e antigos continuam abrindo. |
| Fornecedor criado dentro de OS | Salvar orçamento e reabrir cadastro | Um fornecedor válido e vínculo correto sem duplicação. |

### Rastreio dos pedidos

- V1-04:1 — Adicionar o campo ao cadastro, à edição e à listagem de fornecedores. · Pendente.
- V1-05:1 — Reproduzir com os campos e dados que não eram gravados. · Validar.
- VS-11:1 — Definir a integração pretendida e tratar os pedidos V1-04 e V1-05. · Definir.

### Pendências detalhadas

- OR05 — Aprimorar fornecedores e a integração com compras. **Definir** — delimitar a evolução desejada; o cadastro existente e os ajustes pontuais da OS não demonstram atendimento integral desse tema.

### Documentos originais (rastreio preservado)

**RV25 — Relatório de visita, página 2 — Detalhamento técnico: 4-) módulo de fornecedores**

> Foi informado que o atual Módulo de Fornecedores possui baixa utilização.

**RV26 — Relatório de visita, página 2 — Detalhamento técnico: 4-) módulo de fornecedores**

> Deverá ser realizada análise das funcionalidades existentes, buscando identificar oportunidades para aprimoramento do cadastro e da gestão das informações de fornecedores, inclusive considerando sua integração com os futuros fluxos do Módulo de Compras.

### Referências de código (snapshot da leitura)

- [src/Entity/Fornecedor.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Fornecedor.php#L1) · 3ed9a38
- [src/Controller/FornecedorController.php:161](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/FornecedorController.php#L161) · 3ed9a38
- [templates/fornecedor/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/modal.html.twig#L1) · 3ed9a38
- [templates/fornecedor/fornecedor.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/fornecedor/fornecedor.js#L1) · 3ed9a38

**Dependências:** E3-04, E5-04.

<a id="E6-02"></a>

## E6-02 — Arquivamento e complementos do fluxo de compras

**Situação:** Planejado — execução não iniciada.

A consulta de períodos encerrados já existe. Datas, ativação e transições do período estão no fechamento da entrega 1 e não serão desenvolvidas de novo aqui.

- Entrada: D01, FECHO-5 e D15 sobre Arquivados/aba Compras.
- Saída: Navegação e complementos de compras sem segundo estado de arquivamento.
- Limite: Não reimplementar datas, ativação e encerramento já fechados na entrega 1.

### Funções, correções ou próximos passos

- Comparar a consulta Mostrar períodos encerrados com o pedido Arquivados usando uma amostra aprovada.
- Se a consulta atende, registrar equivalência e ajustar somente navegação/rótulo necessário. Se não atende, especificar a diferença em D15.
- Definir a aba Compras com campos e público antes de criar uma tela; verificar se é apenas acesso ao painel existente.
- Preservar vigência padrão, filtros de departamento, históricos e impedimentos de edição segundo D01.

### Banco e reversão

Nenhuma tabela de arquivo ou novo estágio será criado por mera mudança de nome de aba.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período vigente e encerrado | Consultar Atual/Arquivados | Separação correta e nenhuma nova edição liberada no encerrado. |

### Rastreio dos pedidos

- VS-09:2 — Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa. · Pendente.
- WI-20:2 — Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras. · Definir.

### Pendências detalhadas

- CO01.3 — Criar uma aba ou campo específico chamado Arquivados. **Definir** — a consulta implementada usa Mostrar períodos encerrados; confirmar se essa solução atende ao pedido.
- CO06 — Criar a “aba Compras”, caso seja diferente do menu e do painel já existentes. **Definir** — indicar o conteúdo e o fluxo esperado dessa aba.

### Documentos originais (rastreio preservado)

**DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**DI61 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 164**

> Será criada a aba “compras” ??

**RV22 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Revisar e aperfeiçoar o fluxo atual de Compras;

### Referências de código (snapshot da leitura)

- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) · 3ed9a38
- [src/Repository/PeriodoSolicitacoesRepository.php:101](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L101) · 3ed9a38
- [templates/painel_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L1) · 3ed9a38
- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) · 3ed9a38

**Dependências:** E1-05, E1-99.

<a id="E6-03"></a>

## E6-03 — Relatórios e ajustes administrativos restantes de OS

**Situação:** Planejado — execução não iniciada.

Seguidores, responsáveis, ordem inicial e resumo em Configurações estão no fechamento da entrega 3. O que resta aqui é a lista ainda aberta de relatórios/ajustes com Milton.

- Entrada: FECHO-3, D06/D07 e lista D16 validada com Milton.
- Saída: Relatórios administrativos especificados e implementados quando efetivamente distintos.
- Limite: Seguidores, responsáveis e ordenação permanecem de responsabilidade da entrega 3.

### Funções, correções ou próximos passos

- Para cada relatório, obter colunas, filtros, unidade da linha, totalizações, exemplo e perfil que consulta.
- Conferir se DataTables/listagem existente atende. Equivalência exige amostra e aceite, não apenas afirmação do implementador.
- Quando houver saída distinta, consultar por OS antes de juntar seguidores/anexos/orçamentos, evitando multiplicar contagens.
- Exportar o mesmo conjunto e recorte de acesso da tela; conferir datas, solicitante, responsável e estágios conforme as regras fechadas.

### Banco e reversão

Nenhuma migração prevista até haver campo ausente identificado. Não criar um novo cadastro de OS.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Uma OS com dois anexos e três seguidores | Gerar relatório/Excel | Uma OS nos totais e mesma seleção da tela. |

### Rastreio dos pedidos

- VS-10:2 — Persistência de seguidores corrigida na Entrega 3; ordenação/resumo e relatórios gerenciais restantes continuam individualizados para revisão. · Validar.

### Pendências detalhadas

- OS08 — Levantar com Milton outros ajustes necessários. **Definir** — registrar os itens e o aceite; não há lista fechada nesse pedido.

### Documentos originais (rastreio preservado)

**DI28 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 65**

> Verificar com o Milton demais ajustes necessários.

**RV23 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar e aprimorar as funcionalidades relacionadas às Ordens de Serviço;

**RV24 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Analisar regras, etapas, cadastros e relatórios necessários para tornar os processos mais estruturados e aderentes à rotina administrativa da Universidade.

### Referências de código (snapshot da leitura)

- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) · 3ed9a38
- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) · 3ed9a38
- [src/Controller/OrcamentoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L1) · 3ed9a38
- [templates/ordem_servico/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L1) · 3ed9a38

**Dependências:** E3-99, E5-04.

<a id="E6-04"></a>

## E6-04 — Definir materiais e alcance do Almoxarifado

**Situação:** Planejado — execução não iniciada.

Tipo Compras/Almoxarifado foi entregue. Não há detalhamento suficiente para presumir um sistema completo de estoque ou uma nova hierarquia de categorias.

- Entrada: Tipo Compras/Almoxarifado existente e D17 sobre o alcance pago.
- Saída: Delimitação verificável e, se contratada, especificação do controle próprio antes do desenvolvimento.
- Limite: Não encerrar controle de estoque completo entregando só classificação de materiais.

### Funções, correções ou próximos passos

- Comparar literalmente subcategoria Compras/Almoxarifado com Tipo já entregue. Registrar equivalência ou hierarquia adicional com exemplo.
- Fechar se o compromisso é avaliação da separação ou construção de estoque: entradas, saídas, saldo, unidade, ajustes e perfis.
- Se avaliação atender ao contratado, entregar o fluxo e o aceite documental. Se houver construção paga, manter a demanda aberta e detalhar subetapas dentro de E6-04 antes de FECHO-6.
- Alternativa técnica se estoque estiver confirmado no escopo: reutilizar Material e propor registro aditivo de movimentos (material, quantidade, tipo, local se aplicável, data, usuário e referência). Saldo deriva de movimentos; saída valida disponibilidade dentro de transação com bloqueio do material/local e correção usa estorno rastreável. Esses nomes e campos são proposta, não entidades existentes.
- Qualquer estoque contratado deve ter livro de movimentos/controle de concorrência e reversão próprios definidos; compra solicitada não equivale a entrada física.

### Banco e reversão

Sem migração nem movimento de estoque previstos antes da definição. Não preencher saldos a partir de pedidos de compra.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Material de cada tipo e exemplo de subcategoria | Comparar a solução com o pedido | Decisão objetiva de equivalência ou gap. |
| Cliente confirma controle de estoque incluído | Revisar a definição de pronto | FECHO-6 não passa só com estudo; exige detalhamento e implementação do escopo confirmado. |
| Estoque confirmado: entrada 10 e saída 3 | Consultar saldo, tentar saída 8 e estornar 3 | Saldo 7, recusa de insuficiência se D17 proibir negativo, estorno rastreável e sem exclusão do movimento original. |

### Rastreio dos pedidos

- VS-08:2 — Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque. · Definir.
- WI-16:2 — Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente. · Definir.

### Pendências detalhadas

- CA02.1 — Criar uma hierarquia adicional de subcategorias, caso seja isso que o cliente pretende. **Definir** — a separação implementada é pelo campo Tipo de material.
- OR04.1 — Criar controle próprio de Almoxarifado, com fluxos independentes, caso pretendido. **Definir** — classificação de materiais não equivale a gestão de estoque.

### Documentos originais (rastreio preservado)

**DI45 — Documento inicial SINGLES — CADASTRO / Materiais — parágrafo 109**

> Criar subcategoria que será compras ou almoxarifado (que facilitará no filtro compras)

**RV21 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar a separação entre o Módulo de Compras e o Módulo de Almoxarifado, permitindo fluxos e controles específicos para cada atividade;

### Referências de código (snapshot da leitura)

- [src/Entity/Material.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Material.php#L1) · 3ed9a38
- [src/Entity/CategoriaMaterial.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/CategoriaMaterial.php#L1) · 3ed9a38
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) · 3ed9a38
- [templates/material/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/material/index.html.twig#L1) · 3ed9a38

**Dependências:** E1-99, E6-02.

## FECHO-6 — Fechamento

**Não executado.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
