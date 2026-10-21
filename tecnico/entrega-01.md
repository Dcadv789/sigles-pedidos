# Entrega 1 — Cadastros, usuários e compras

**Atualizado em 21/10/2026 · Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: BASE-0: diagnóstico e ambiente de teste identificados.
- Situação: Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E1-05"></a>

## E1-05 — Conciliar encerramento do período com os estágios combinados

**Situação:** Planejado — execução não iniciada.

O texto inicial prevê Em aberto→Expirada e Em andamento→Realizada no encerramento manual. O código atual do controller e do encerramento automático expira todos os estágios não encerrados. É uma divergência de regra a resolver antes de mudar dados.

- Entrada: Descritivo da entrega 1, estágios atuais e caminhos manual/automático identificados.
- Saída: Matriz única de transições e histórico, versionada como D01.
- Limite: Não reclassificar compras históricas; Arquivados é consulta de E6-02, não outro estágio.

### Funções, correções ou próximos passos

- Listar os valores reais de estágio e os pontos que os alteram: período, solicitação, painel e fechamento automático. Anotar origem, ação, destino e permissão.
- Comparar a promessa Em andamento → Realizada com o código que expira pendências. Registrar a decisão D01 antes de mudar o comportamento; não escolher silenciosamente.
- Validar todo o lote antes do primeiro flush. Fazer encerramento do período, transições e históricos no mesmo limite transacional; repetir a ação deve ser inofensivo.
- Tratar a fronteira de data e o fuso: a data final inclui o dia inteiro ou exige horário? Registrar a regra e aplicá-la igualmente à listagem de vigentes e ao encerramento.
- Documentar a matriz final para E1-03, E1-99 e E6-02. Só essa tarefa altera a regra de encerramento.

### Banco e reversão

Sem migração estrutural prevista. Não corrigir em lote registros existentes enquanto a regra e os registros afetados não forem aprovados para o teste.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período com solicitações em cada estágio, inclusive Cancelada/Realizada/Expirada | Encerrar manualmente e repetir | Saídas conforme D01, finais preservados e um histórico por transição. |
| Mesma massa em duas cópias de teste | Encerrar pela ação automática e pela manual | Diferenças só se estiverem explicitamente em D01. |
| Lote com uma solicitação inválida | Forçar falha antes do fechamento | Nenhuma alteração parcial no período, nas solicitações ou no histórico. |

### Rastreio dos pedidos

- V1-06:1 — Finalizar pelo painel e impedir alterações nos estágios encerrados. · Entregue.
- WI-20:1 — Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. · Entregue.

### Documentos originais (rastreio preservado)

**DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**RV22 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Revisar e aperfeiçoar o fluxo atual de Compras;

### Referências de código (snapshot da leitura)

- [src/Controller/PeriodoSolicitacoesController.php:242](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L242) · 3ed9a38
- [src/Repository/PeriodoSolicitacoesRepository.php:156](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L156) · 3ed9a38
- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) · 3ed9a38
- [src/Repository/HistoricoSolicitacaoRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/HistoricoSolicitacaoRepository.php#L1) · 3ed9a38

<a id="E1-03"></a>

## E1-03 — Ativar e inativar períodos sem erro

**Situação:** Planejado — execução não iniciada.

handleStatus alterna active e faz flush; a falha do vídeo não foi comprovada. O formulário de períodos usa a estrutura já existente no projeto.

- Entrada: D01 definida e período futuro, vigente, vencido, encerrado e vinculado a compras.
- Saída: Ativar/inativar reproduzido, corrigido quando necessário e separado de reabrir período.
- Limite: Não transformar active em mecanismo de reabertura nem alterar exclusão de vínculos.

### Funções, correções ou próximos passos

- Capturar requisição, resposta e log do caso relatado; conferir a permissão GS e a rota handleStatus antes de atribuir a falha à entidade.
- Verificar o efeito de active em listarVigentes, criação de solicitação e painel, usando a matriz D01.
- Corrigir a causa reproduzida no CRUD atual. Conferir toast e 406 nos caminhos tocados; não reescrever o formulário existente.
- Validar a atualização da linha e dos filtros sem recarregar a tela inteira. Registrar evidência de não reprodução se o caso já estiver sanado.

### Banco e reversão

Sem migração prevista. Qualquer ajuste de registros de teste deve preservar os vínculos e ser documentado.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período encerrado porém ativo | Alternar active e tentar nova compra | A ativação não reabre o prazo encerrado. |
| Período com solicitação vinculada | Tentar exclusão e depois ativação | Exclusão bloqueada; ativação segue a regra, sem HTTP 500. |

### Rastreio dos pedidos

- V1-03:1 — Testar a ativação com as datas e condições do caso original. · Validar.

### Referências de código (snapshot da leitura)

- [src/Controller/PeriodoSolicitacoesController.php:165](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L165) · 3ed9a38
- [src/Entity/PeriodoSolicitacoes.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PeriodoSolicitacoes.php#L1) · 3ed9a38
- [src/Form/PeriodoSolicitacoesType.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Form/PeriodoSolicitacoesType.php#L1) · 3ed9a38
- [templates/periodo_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/periodo_solicitacoes/index.html.twig#L1) · 3ed9a38

**Dependências:** E1-05.

<a id="E1-01"></a>

## E1-01 — Ordenação e persistência da tela de Usuários

**Situação:** Planejado — execução não iniciada.

A consulta e a DataTable já existem; a desconfiguração relatada ainda precisa de reprodução. Não atribuir a falha à ordenação do servidor sem conferir o JSON e o estado salvo no navegador.

- Entrada: Caso de ordenação do vídeo/Word e estado salvo da DataTable antes de limpar o navegador.
- Saída: Ordenação estável e persistência de filtro/aba verificadas.
- Limite: Acesso de perfis é revisto em E5-04; manter GAU na correção localizada.

### Funções, correções ou próximos passos

- Montar nomes com acentos, iguais e diferentes caixas; registrar o JSON e a posição real de cada coluna e ação.
- Comparar primeira abertura com estado salvo, paginação e filtros. Diferenciar ordenação do servidor, renderização HTML e estado restaurado.
- Corrigir somente a origem demonstrada; se for estado antigo incompatível, versionar a chave de estado da tela, sem limpar o localStorage do sistema inteiro.
- Após salvar dados de uma aba, manter a aba e os filtros; reabrir o registro e confirmar que o dado realmente persistiu.

### Banco e reversão

Sem alteração prevista de esquema. Usar usuários sintéticos no banco de teste e manter ACL GAU.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Usuários com Ana, Ângela, ana e nomes iguais | Ordenar nos dois sentidos, paginar e editar | Nome, ID e botões continuam correspondendo ao registro. |
| Aba de contato aberta com filtro ativo | Salvar e reabrir | Aba não fecha indevidamente e o valor persistido reaparece. |

### Rastreio dos pedidos

- WI-08:2 — Reproduzir a desconfiguração relatada ao ordenar nomes. · Validar.

### Pendências detalhadas

- US02 — Ordenação alfabética sem desconfigurar a tela. **Validar** — existe ordenação pelo nome, mas ela já existia antes; falta reproduzir a desconfiguração informada.

### Documentos originais (rastreio preservado)

**DI16 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 44**

> Ordenar por ordem alfabética, está desconfigurando.

**DI18 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 47**

> Após salvar alguma informação na aba, não permitir que o sistema a feche automaticamente.

### Referências de código (snapshot da leitura)

- [src/Controller/UsuarioController.php:63](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L63) · 3ed9a38
- [templates/usuario/index.html.twig:336](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/index.html.twig#L336) · 3ed9a38
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) · 3ed9a38

<a id="E1-04"></a>

## E1-04 — Regra de antecedência de contratos por perfil

**Situação:** Planejado — execução não iniciada.

Perfil possui getDiasAvisoContrato, mas contrato_ferias usa +30 days e restringe perfis a [4,9]. Portanto, mudar apenas o parâmetro para 45 dias não comprova o atendimento ao estagiário.

- Entrada: Perfil real do estagiário e fonte da data contratual identificados no teste.
- Saída: Uma regra de antecedência por perfil para o Dashboard, separada de CERT e férias.
- Limite: Automação de e-mail ao ADM e ao estagiário continua Aditivo.

### Funções, correções ou próximos passos

- Inventariar contrato_ferias, avisos de contrato/CERT, campos de Usuario/ContratoDocente e getDiasAvisoContrato; registrar qual data abastece cada bloco.
- Na consulta atual, um contrato antigo pode selecionar o usuário enquanto a apresentação busca outro arquivo por ID mais recente. Selecionar e apresentar o mesmo contrato elegível, distinguindo ArquivoContrato de datas contratuais do cadastro docente; não confiar em maior ID como data de vigência.
- Substituir o limite fixo de +30 days e a suposição de IDs [4,9] pela seleção de perfis e parâmetro acordados em D02, sem expor contratos fora do recorte autorizado.
- Aplicar a janela de contrato exclusivamente ao contrato; definir separadamente o que é férias futuras, em andamento e encerradas.
- Definir tratamento de nulo, zero, contrato vencido e dia limite. Comparar os dois caminhos de consulta para o mesmo usuário.
- Entregar a regra documentada a E5-01/E5-02, que só ajustarão apresentação e abrangência.

### Banco e reversão

Reutilizar diasAvisoContrato existente. Eventual alteração de configuração só em esalq_sistema_des nesta operação; sem disparo de e-mails novo.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Perfil com janela 45 e contratos a 44, 45 e 46 dias | Consultar o Dashboard na data fixa da massa | 44 e 45 entram se D02 adotar limite inclusivo; 46 não. |
| CERT e contrato com datas distintas | Alterar uma data e consultar os blocos | Cada aviso usa sua própria fonte; férias não mudam com o prazo de contrato. |

### Rastreio dos pedidos

- WI-09:1 — Parâmetro de antecedência por perfil. · Entregue.
- WI-09:2 — Conferir a configuração de 45 dias para estagiários. · Validar.

### Pendências detalhadas

- US05.1 — Aplicar especificamente 45 dias ao perfil de estagiários. **Validar** — confirmar o perfil e a configuração em produção. A parametrização existe, mas a regra específica não foi comprovada.

### Documentos originais (rastreio preservado)

**DI19 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO / Para o perfil ESTAGIÁRIOS: — parágrafo 50**

> Para o perfil ESTAGIÁRIOS:
>
> aviso de vencimento de contrato com 45  dias de antecedência, para o ADM e estagiários, com uma mensagem do que precisa ser providenciado.

**DI11 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 34**

> Em contratos a vencer, está aparecendo o vencimento da CERT. Então, trocar por CERT a vencer. - ESTÁ COM ERRO- URGENTE

**DI12 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 36**

> Adicionar período de férias e início e fim de contratos  dos bolsistas/colaboradores na página inicial

### Referências de código (snapshot da leitura)

- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) · 3ed9a38
- [src/Entity/Perfil.php:78](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Perfil.php#L78) · 3ed9a38
- [src/Controller/PerfilController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilController.php#L1) · 3ed9a38
- [templates/dashboard/dashboard.js:380](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L380) · 3ed9a38
- [src/Entity/Docente.php:183](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Docente.php#L183) · 3ed9a38
- [src/Entity/ContratoDocente.php:12](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ContratoDocente.php#L12) · 3ed9a38
- [src/Entity/ArquivoContrato.php:82](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ArquivoContrato.php#L82) · 3ed9a38

<a id="E1-02"></a>

## E1-02 — Data de criação em Minhas solicitações e Painel

**Situação:** Planejado — execução não iniciada.

As consultas de solicitações retornam nome, estágio e período, mas as listagens não apresentam a data de criação solicitada. O histórico de alterações não substitui essa coluna.

- Entrada: Campo dtCriado existente e D03 sobre a visão agregada.
- Saída: Data individual na listagem e no detalhe de origem do painel, com ordenação e exportação coerentes.
- Limite: Não associar uma única data inventada à soma de vários pedidos.

### Funções, correções ou próximos passos

- Mapear os resultados de SolicitacaoRepository usados por Minhas solicitações e pelas três abas do Painel; registrar a unidade de cada linha.
- Nas linhas de solicitação, acrescentar dt_criado à consulta existente. Nas linhas por material/departamento, preservar o total e mostrar as origens conforme D03.
- Retornar representação temporal estável e renderizar DD/MM/AAAA HH:mm com ordenação ortogonal. Não ordenar pela string brasileira.
- Atualizar cabeçalho, índices, colunas ocultas e exportação juntos; manter nulos históricos visíveis sem preenchê-los com a data atual.

### Banco e reversão

Campo já existe; não criar uma nova data nem preencher o histórico com datas atuais. Consultas parametrizadas e sem multiplicar pedidos nos agrupamentos.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Duas solicitações do mesmo material em datas diferentes | Abrir a lista agregada e as origens | Total permanece igual e cada origem mostra sua própria data. |
| 31/12/2025 e 01/01/2026 | Ordenar e exportar | Ordem temporal, não lexicográfica; filtros idênticos. |

### Rastreio dos pedidos

- V1-07:2 — Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período. · Pendente.

### Referências de código (snapshot da leitura)

- [src/Repository/SolicitacaoRepository.php:29](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/SolicitacaoRepository.php#L29) · 3ed9a38
- [src/Entity/Solicitacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Solicitacao.php#L1) · 3ed9a38
- [templates/solicitacao/index.html.twig:175](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/solicitacao/index.html.twig#L175) · 3ed9a38
- [templates/painel_solicitacoes/index.html.twig:374](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L374) · 3ed9a38
- [src/Controller/PainelSolicitacoesController.php:22](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L22) · 3ed9a38
- [src/Repository/SolicitacaoRepository.php:21](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/SolicitacaoRepository.php#L21) · 3ed9a38

<a id="E1-99"></a>

## E1-99 — Aceite integrado do fechamento da entrega 1

**Situação:** Planejado — execução não iniciada.

Cadastros e compras já estão em produção. O fechamento é uma correção incremental sobre a dev atual, não o retorno à tag antiga.

- Entrada: E1-01 a E1-05 concluídos ou validados com evidência, D01 a D03 resolvidas.
- Saída: Aceite FECHO-1 e commit cumulativo para iniciar a entrega 2.
- Limite: Não repetir a implementação nos itens macro de compras ou usuários.

### Funções, correções ou próximos passos

- Executar a matriz de vínculos de exclusão em usuários, materiais, categorias, recursos, prédios e salas. Usar dados descartáveis de teste e conferir a restrição do próprio usuário.
- Repetir criar/editar/enviar/reabrir/copiar solicitação, material de Compras versus Almoxarifado, vigência e consulta dos encerrados.
- Conferir os cadastros já entregues, incluindo campos de recursos da OS e datas de usuários; uma regressão comprovada volta ao item responsável.
- Registrar IDs sintéticos, resultados, commit, banco de teste e pendências. FECHO-1 só passa com todos os critérios aplicáveis atendidos.

### Banco e reversão

Usar massa sintética de teste; não remover registros reais para provar a exclusão.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Um registro sem vínculo e outro com vínculo para cada cadastro | Tentar remover ambos | Só o permitido é removido; nenhuma relação fica órfã. |
| Solicitação recebida e outra finalizada | Tentar edição/reabertura | Comportamento da matriz aprovada; nenhuma regressão nos totais. |

### Rastreio dos pedidos

- V1-01:1 — Excluir material inativo sem pedidos vinculados; ativar e inativar continuam disponíveis. · Entregue.
- V1-02:1 — Exclusão definitiva com validação de vínculos e manutenção da ativação/inativação. · Entregue.
- V1-06:1 — Finalizar pelo painel e impedir alterações nos estágios encerrados. · Entregue.
- V1-07:1 — Histórico de criação e alterações da solicitação. · Entregue.
- V1-08:1 — Incluir, alterar e retirar pedidos quando permitido; preservar o recebimento da secretaria. · Entregue.
- VS-01:1 — Cadastros, usuários e compras. · Entregue.
- VS-04:1 — Exibição de férias e contratos com tratamento de datas ausentes. · Entregue.
- VS-08:1 — Tipo Compras ou Almoxarifado e filtro dos materiais de compras. · Entregue.
- VS-09:1 — Envio, reabertura, recebimento, realização/cancelamento, consulta dos períodos encerrados e lista para compras. · Entregue.
- WI-05:2 — CERT, férias e contratos, com tratamento de datas ausentes. · Entregue.
- WI-07:1 — Datas da CERT e separação das informações no Dashboard. · Entregue.
- WI-08:1 — Excluir usuário inativo sem vínculos e manter o formulário/aba após salvar. · Entregue.
- WI-09:1 — Parâmetro de antecedência por perfil. · Entregue.
- WI-16:1 — Separação por tipo de material e detalhe/observação no recurso da OS. · Entregue.
- WI-20:1 — Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. · Entregue.

### Documentos originais (rastreio preservado)

**DI17 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 45**

> Opção de apagar cadastro ao invés de somente inativar

**DI44 — Documento inicial SINGLES — CADASTRO / Materiais — parágrafo 108**

> Opção de apagar ao invés de inativar

**DI46 — Documento inicial SINGLES — CADASTRO / Recursos (ordem de serviço) — parágrafo 111**

> Inserir outra Descrição - FUSP

**DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**DI57 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 152**

> Excluir aba pendente, aparecendo na página inicial os pedidos do período vigente.

**DI58 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 153**

> Hoje, toda vez que é necessário reabrir o pedido, seja para alterar ou acrescentar algo, o pedido volta para o status pendente.

**DI59 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 154**

> Erro ao tentar incluir, alterar ou apagar algum item.

**DI60 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 155**

> AJUSTE: layout da página de pedidos expandido na tela contendo todas as informações como na descrição do item.

### Referências de código (snapshot da leitura)

- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) · 3ed9a38
- [src/Controller/UsuarioController.php:707](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L707) · 3ed9a38
- [src/Controller/PredioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PredioController.php#L1) · 3ed9a38
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) · 3ed9a38
- [src/Controller/PedidoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PedidoController.php#L1) · 3ed9a38

**Dependências:** E1-05, E1-03, E1-01, E1-04, E1-02.

## FECHO-1 — Fechamento

**Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
