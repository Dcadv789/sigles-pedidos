# Entrega 1 — Planejamento técnico revisado

**Cadastros, usuários e compras**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-1.html)

## Entrada e resultado da entrega

- **Entrada:** BASE-0: diagnóstico e ambiente de teste identificados.
- **Saída:** FECHO-1, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Fechamento de entrega existente. Aditivos continuam fora.

## Ordem interna obrigatória

1. [E1-05 — Conciliar encerramento do período com os estágios combinados](#E1-05)
2. [E1-03 — Ativar e inativar períodos sem erro](#E1-03)
3. [E1-01 — Ordenação e persistência da tela de Usuários](#E1-01)
4. [E1-04 — Regra de antecedência de contratos por perfil](#E1-04)
5. [E1-02 — Data de criação em Minhas solicitações e Painel](#E1-02)
6. [E1-99 — Aceite integrado do fechamento da entrega 1](#E1-99)

Depois do último item, conferir **FECHO-1** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E1-05"></a>

## E1-05 — Conciliar encerramento do período com os estágios combinados

**Ordem global:** 1/42. **Executar após:** BASE-0. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** Descritivo da entrega 1, estágios atuais e caminhos manual/automático identificados.
- **Saída esperada:** Matriz única de transições e histórico, versionada como D01.
- **Limite do item:** Não reclassificar compras históricas; Arquivados é consulta de E6-02, não outro estágio.

### Diagnóstico conferido no código

O texto inicial prevê Em aberto→Expirada e Em andamento→Realizada no encerramento manual. O código atual do controller e do encerramento automático expira todos os estágios não encerrados. É uma divergência de regra a resolver antes de mudar dados.

### Referência literal dos documentos originais

**Referência original DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**Referência original RV22 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Revisar e aperfeiçoar o fluxo atual de Compras;

### Arquivos e pontos verificados

- [src/Controller/PeriodoSolicitacoesController.php:242](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L242) — dev 3ed9a38.
- [src/Repository/PeriodoSolicitacoesRepository.php:156](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L156) — dev 3ed9a38.
- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) — dev 3ed9a38.
- [src/Repository/HistoricoSolicitacaoRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/HistoricoSolicitacaoRepository.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Listar os valores reais de estágio e os pontos que os alteram: período, solicitação, painel e fechamento automático. Anotar origem, ação, destino e permissão.
2. Comparar a promessa Em andamento → Realizada com o código que expira pendências. Registrar a decisão D01 antes de mudar o comportamento; não escolher silenciosamente.
3. Validar todo o lote antes do primeiro flush. Fazer encerramento do período, transições e históricos no mesmo limite transacional; repetir a ação deve ser inofensivo.
4. Tratar a fronteira de data e o fuso: a data final inclui o dia inteiro ou exige horário? Registrar a regra e aplicá-la igualmente à listagem de vigentes e ao encerramento.
5. Documentar a matriz final para E1-03, E1-99 e E6-02. Só essa tarefa altera a regra de encerramento.

### Banco, arquivos e reversão

Sem migração estrutural prevista. Não corrigir em lote registros existentes enquanto a regra e os registros afetados não forem aprovados para o teste.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D01 — Estágios e encerramento dos períodos](INTEGRACAO_E_DECISOES.md#D01) · dono E1-05. Definir neste item. Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período com solicitações em cada estágio, inclusive Cancelada/Realizada/Expirada | Encerrar manualmente e repetir | Saídas conforme D01, finais preservados e um histórico por transição. |
| Mesma massa em duas cópias de teste | Encerrar pela ação automática e pela manual | Diferenças só se estiverem explicitamente em D01. |
| Lote com uma solicitação inválida | Forçar falha antes do fechamento | Nenhuma alteração parcial no período, nas solicitações ou no histórico. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-06:1](https://dcadv789.github.io/sigles-pedidos/#V1-06) — **execução: Matriz de encerramento a conciliar**. Finalizar pelo painel e impedir alterações nos estágios encerrados. · status atual: Entregue.
- [Quadro WI-20:1](https://dcadv789.github.io/sigles-pedidos/#WI-20) — **execução: Regra única de estágios no encerramento**. Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. · status atual: Entregue.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E1-03"></a>

## E1-03 — Ativar e inativar períodos sem erro

**Ordem global:** 2/42. **Executar após:** E1-05. **Dependências técnicas:** [E1-05](entrega-01.md#E1-05).

### Entrada, saída e limite

- **Entrada:** D01 definida e período futuro, vigente, vencido, encerrado e vinculado a compras.
- **Saída esperada:** Ativar/inativar reproduzido, corrigido quando necessário e separado de reabrir período.
- **Limite do item:** Não transformar active em mecanismo de reabertura nem alterar exclusão de vínculos.

### Diagnóstico conferido no código

handleStatus alterna active e faz flush; a falha do vídeo não foi comprovada. O formulário de períodos usa a estrutura já existente no projeto.

### Referência literal dos documentos originais

Este item decorre da conferência técnica, do vídeo ou do aceite de uma entrega. Os identificadores do quadro abaixo são sínteses; não são apresentados como citação literal de Word/PDF.

### Arquivos e pontos verificados

- [src/Controller/PeriodoSolicitacoesController.php:165](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L165) — dev 3ed9a38.
- [src/Entity/PeriodoSolicitacoes.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PeriodoSolicitacoes.php#L1) — dev 3ed9a38.
- [src/Form/PeriodoSolicitacoesType.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Form/PeriodoSolicitacoesType.php#L1) — dev 3ed9a38.
- [templates/periodo_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/periodo_solicitacoes/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Capturar requisição, resposta e log do caso relatado; conferir a permissão GS e a rota handleStatus antes de atribuir a falha à entidade.
2. Verificar o efeito de active em listarVigentes, criação de solicitação e painel, usando a matriz D01.
3. Corrigir a causa reproduzida no CRUD atual. Conferir toast e 406 nos caminhos tocados; não reescrever o formulário existente.
4. Validar a atualização da linha e dos filtros sem recarregar a tela inteira. Registrar evidência de não reprodução se o caso já estiver sanado.

### Banco, arquivos e reversão

Sem migração prevista. Qualquer ajuste de registros de teste deve preservar os vínculos e ser documentado.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D01 — Estágios e encerramento dos períodos](INTEGRACAO_E_DECISOES.md#D01) · dono E1-05. Consumir a decisão anterior, sem redefini-la silenciosamente. Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Período encerrado porém ativo | Alternar active e tentar nova compra | A ativação não reabre o prazo encerrado. |
| Período com solicitação vinculada | Tentar exclusão e depois ativação | Exclusão bloqueada; ativação segue a regra, sem HTTP 500. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-03:1](https://dcadv789.github.io/sigles-pedidos/#V1-03) — **execução: Ativar e inativar períodos sem erro**. Testar a ativação com as datas e condições do caso original. · status atual: Validar.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E1-01"></a>

## E1-01 — Ordenação e persistência da tela de Usuários

**Ordem global:** 3/42. **Executar após:** E1-03. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** Caso de ordenação do vídeo/Word e estado salvo da DataTable antes de limpar o navegador.
- **Saída esperada:** Ordenação estável e persistência de filtro/aba verificadas.
- **Limite do item:** Acesso de perfis é revisto em E5-04; manter GAU na correção localizada.

### Diagnóstico conferido no código

A consulta e a DataTable já existem; a desconfiguração relatada ainda precisa de reprodução. Não atribuir a falha à ordenação do servidor sem conferir o JSON e o estado salvo no navegador.

### Referência literal dos documentos originais

**Referência original DI16 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 44**

> Ordenar por ordem alfabética, está desconfigurando.

**Referência original DI18 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 47**

> Após salvar alguma informação na aba, não permitir que o sistema a feche automaticamente.

### Arquivos e pontos verificados

- [src/Controller/UsuarioController.php:63](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L63) — dev 3ed9a38.
- [templates/usuario/index.html.twig:336](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/index.html.twig#L336) — dev 3ed9a38.
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Montar nomes com acentos, iguais e diferentes caixas; registrar o JSON e a posição real de cada coluna e ação.
2. Comparar primeira abertura com estado salvo, paginação e filtros. Diferenciar ordenação do servidor, renderização HTML e estado restaurado.
3. Corrigir somente a origem demonstrada; se for estado antigo incompatível, versionar a chave de estado da tela, sem limpar o localStorage do sistema inteiro.
4. Após salvar dados de uma aba, manter a aba e os filtros; reabrir o registro e confirmar que o dado realmente persistiu.

### Banco, arquivos e reversão

Sem alteração prevista de esquema. Usar usuários sintéticos no banco de teste e manter ACL GAU.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

Nenhuma nova decisão de negócio específica; manter os contratos anteriores e reproduzir o caso antes de alterar código.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Usuários com Ana, Ângela, ana e nomes iguais | Ordenar nos dois sentidos, paginar e editar | Nome, ID e botões continuam correspondendo ao registro. |
| Aba de contato aberta com filtro ativo | Salvar e reabrir | Aba não fecha indevidamente e o valor persistido reaparece. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-08:2](https://dcadv789.github.io/sigles-pedidos/#WI-08) — **execução: Ordenação e persistência da tela de Usuários**. Reproduzir a desconfiguração relatada ao ordenar nomes. · status atual: Validar.
- Pendência detalhada US02 — Ordenação alfabética sem desconfigurar a tela.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E1-04"></a>

## E1-04 — Regra de antecedência de contratos por perfil

**Ordem global:** 4/42. **Executar após:** E1-01. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** Perfil real do estagiário e fonte da data contratual identificados no teste.
- **Saída esperada:** Uma regra de antecedência por perfil para o Dashboard, separada de CERT e férias.
- **Limite do item:** Automação de e-mail ao ADM e ao estagiário continua Aditivo.

### Diagnóstico conferido no código

Perfil possui getDiasAvisoContrato, mas contrato_ferias usa +30 days e restringe perfis a [4,9]. Portanto, mudar apenas o parâmetro para 45 dias não comprova o atendimento ao estagiário.

### Referência literal dos documentos originais

**Referência original DI19 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO / Para o perfil ESTAGIÁRIOS: — parágrafo 50**

> Para o perfil ESTAGIÁRIOS:
>
> aviso de vencimento de contrato com 45  dias de antecedência, para o ADM e estagiários, com uma mensagem do que precisa ser providenciado.

**Referência original DI11 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 34**

> Em contratos a vencer, está aparecendo o vencimento da CERT. Então, trocar por CERT a vencer. - ESTÁ COM ERRO- URGENTE

**Referência original DI12 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 36**

> Adicionar período de férias e início e fim de contratos  dos bolsistas/colaboradores na página inicial

### Arquivos e pontos verificados

- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) — dev 3ed9a38.
- [src/Entity/Perfil.php:78](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Perfil.php#L78) — dev 3ed9a38.
- [src/Controller/PerfilController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilController.php#L1) — dev 3ed9a38.
- [templates/dashboard/dashboard.js:380](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L380) — dev 3ed9a38.
- [src/Entity/Docente.php:183](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Docente.php#L183) — dev 3ed9a38.
- [src/Entity/ContratoDocente.php:12](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ContratoDocente.php#L12) — dev 3ed9a38.
- [src/Entity/ArquivoContrato.php:82](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ArquivoContrato.php#L82) — dev 3ed9a38.

### Roteiro de implementação

1. Inventariar contrato_ferias, avisos de contrato/CERT, campos de Usuario/ContratoDocente e getDiasAvisoContrato; registrar qual data abastece cada bloco.
2. Na consulta atual, um contrato antigo pode selecionar o usuário enquanto a apresentação busca outro arquivo por ID mais recente. Selecionar e apresentar o mesmo contrato elegível, distinguindo ArquivoContrato de datas contratuais do cadastro docente; não confiar em maior ID como data de vigência.
3. Substituir o limite fixo de +30 days e a suposição de IDs [4,9] pela seleção de perfis e parâmetro acordados em D02, sem expor contratos fora do recorte autorizado.
4. Aplicar a janela de contrato exclusivamente ao contrato; definir separadamente o que é férias futuras, em andamento e encerradas.
5. Definir tratamento de nulo, zero, contrato vencido e dia limite. Comparar os dois caminhos de consulta para o mesmo usuário.
6. Entregar a regra documentada a E5-01/E5-02, que só ajustarão apresentação e abrangência.

### Banco, arquivos e reversão

Reutilizar diasAvisoContrato existente. Eventual alteração de configuração só em esalq_sistema_des nesta operação; sem disparo de e-mails novo.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D02 — Contratos, CERT e férias](INTEGRACAO_E_DECISOES.md#D02) · dono E1-04. Definir neste item. Perfil de estagiário, fonte da data final, nulo/zero/vencido, inclusão do dia limite e quem consulta.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Perfil com janela 45 e contratos a 44, 45 e 46 dias | Consultar o Dashboard na data fixa da massa | 44 e 45 entram se D02 adotar limite inclusivo; 46 não. |
| CERT e contrato com datas distintas | Alterar uma data e consultar os blocos | Cada aviso usa sua própria fonte; férias não mudam com o prazo de contrato. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-09:1](https://dcadv789.github.io/sigles-pedidos/#WI-09) — **execução: Regra da antecedência por perfil**. Parâmetro de antecedência por perfil. · status atual: Entregue.
- [Quadro WI-09:2](https://dcadv789.github.io/sigles-pedidos/#WI-09) — **execução: Regra de antecedência de contratos por perfil**. Conferir a configuração de 45 dias para estagiários. · status atual: Validar.
- Pendência detalhada US05.1 — Aplicar especificamente 45 dias ao perfil de estagiários.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E1-02"></a>

## E1-02 — Data de criação em Minhas solicitações e Painel

**Ordem global:** 5/42. **Executar após:** E1-04. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** Campo dtCriado existente e D03 sobre a visão agregada.
- **Saída esperada:** Data individual na listagem e no detalhe de origem do painel, com ordenação e exportação coerentes.
- **Limite do item:** Não associar uma única data inventada à soma de vários pedidos.

### Diagnóstico conferido no código

As consultas de solicitações retornam nome, estágio e período, mas as listagens não apresentam a data de criação solicitada. O histórico de alterações não substitui essa coluna.

### Referência literal dos documentos originais

Este item decorre da conferência técnica, do vídeo ou do aceite de uma entrega. Os identificadores do quadro abaixo são sínteses; não são apresentados como citação literal de Word/PDF.

### Arquivos e pontos verificados

- [src/Repository/SolicitacaoRepository.php:29](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/SolicitacaoRepository.php#L29) — dev 3ed9a38.
- [src/Entity/Solicitacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Solicitacao.php#L1) — dev 3ed9a38.
- [templates/solicitacao/index.html.twig:175](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/solicitacao/index.html.twig#L175) — dev 3ed9a38.
- [templates/painel_solicitacoes/index.html.twig:374](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L374) — dev 3ed9a38.
- [src/Controller/PainelSolicitacoesController.php:22](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L22) — dev 3ed9a38.
- [src/Repository/SolicitacaoRepository.php:21](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/SolicitacaoRepository.php#L21) — dev 3ed9a38.

### Roteiro de implementação

1. Mapear os resultados de SolicitacaoRepository usados por Minhas solicitações e pelas três abas do Painel; registrar a unidade de cada linha.
2. Nas linhas de solicitação, acrescentar dt_criado à consulta existente. Nas linhas por material/departamento, preservar o total e mostrar as origens conforme D03.
3. Retornar representação temporal estável e renderizar DD/MM/AAAA HH:mm com ordenação ortogonal. Não ordenar pela string brasileira.
4. Atualizar cabeçalho, índices, colunas ocultas e exportação juntos; manter nulos históricos visíveis sem preenchê-los com a data atual.

### Banco, arquivos e reversão

Campo já existe; não criar uma nova data nem preencher o histórico com datas atuais. Consultas parametrizadas e sem multiplicar pedidos nos agrupamentos.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D03 — Data de origem das compras](INTEGRACAO_E_DECISOES.md#D03) · dono E1-02. Definir neste item. Forma de abrir o detalhamento e representação temporal/fuso de exibição.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Duas solicitações do mesmo material em datas diferentes | Abrir a lista agregada e as origens | Total permanece igual e cada origem mostra sua própria data. |
| 31/12/2025 e 01/01/2026 | Ordenar e exportar | Ordem temporal, não lexicográfica; filtros idênticos. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-07:2](https://dcadv789.github.io/sigles-pedidos/#V1-07) — **execução: Data de criação em Minhas solicitações e Painel**. Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período. · status atual: Pendente.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E1-99"></a>

## E1-99 — Aceite integrado do fechamento da entrega 1

**Ordem global:** 6/42. **Executar após:** E1-02. **Dependências técnicas:** [E1-05](entrega-01.md#E1-05), [E1-03](entrega-01.md#E1-03), [E1-01](entrega-01.md#E1-01), [E1-04](entrega-01.md#E1-04), [E1-02](entrega-01.md#E1-02).

### Entrada, saída e limite

- **Entrada:** E1-01 a E1-05 concluídos ou validados com evidência, D01 a D03 resolvidas.
- **Saída esperada:** Aceite FECHO-1 e commit cumulativo para iniciar a entrega 2.
- **Limite do item:** Não repetir a implementação nos itens macro de compras ou usuários.

### Diagnóstico conferido no código

Cadastros e compras já estão em produção. O fechamento é uma correção incremental sobre a dev atual, não o retorno à tag antiga.

### Referência literal dos documentos originais

**Referência original DI17 — Documento inicial SINGLES — ALTERAÇÕES / 2. USUÁRIO — parágrafo 45**

> Opção de apagar cadastro ao invés de somente inativar

**Referência original DI44 — Documento inicial SINGLES — CADASTRO / Materiais — parágrafo 108**

> Opção de apagar ao invés de inativar

**Referência original DI46 — Documento inicial SINGLES — CADASTRO / Recursos (ordem de serviço) — parágrafo 111**

> Inserir outra Descrição - FUSP

**Referência original DI56 — Documento inicial SINGLES — COMPRAS / Minhas solicitações — parágrafo 147**

> Manter ativo e visível somente período atual, encerrar o período automaticamente após a data cadastrada mantendo em “arquivados” (novo campo)

**Referência original DI57 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 152**

> Excluir aba pendente, aparecendo na página inicial os pedidos do período vigente.

**Referência original DI58 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 153**

> Hoje, toda vez que é necessário reabrir o pedido, seja para alterar ou acrescentar algo, o pedido volta para o status pendente.

**Referência original DI59 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 154**

> Erro ao tentar incluir, alterar ou apagar algum item.

**Referência original DI60 — Documento inicial SINGLES — COMPRAS / Painel de solicitações — parágrafo 155**

> AJUSTE: layout da página de pedidos expandido na tela contendo todas as informações como na descrição do item.

### Arquivos e pontos verificados

- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — dev 3ed9a38.
- [src/Controller/UsuarioController.php:707](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L707) — dev 3ed9a38.
- [src/Controller/PredioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PredioController.php#L1) — dev 3ed9a38.
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) — dev 3ed9a38.
- [src/Controller/PedidoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PedidoController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Executar a matriz de vínculos de exclusão em usuários, materiais, categorias, recursos, prédios e salas. Usar dados descartáveis de teste e conferir a restrição do próprio usuário.
2. Repetir criar/editar/enviar/reabrir/copiar solicitação, material de Compras versus Almoxarifado, vigência e consulta dos encerrados.
3. Conferir os cadastros já entregues, incluindo campos de recursos da OS e datas de usuários; uma regressão comprovada volta ao item responsável.
4. Registrar IDs sintéticos, resultados, commit, banco de teste e pendências. FECHO-1 só passa com todos os critérios aplicáveis atendidos.

### Banco, arquivos e reversão

Usar massa sintética de teste; não remover registros reais para provar a exclusão.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D01 — Estágios e encerramento dos períodos](INTEGRACAO_E_DECISOES.md#D01) · dono E1-05. Consumir a decisão anterior, sem redefini-la silenciosamente. Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.
- [D03 — Data de origem das compras](INTEGRACAO_E_DECISOES.md#D03) · dono E1-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Forma de abrir o detalhamento e representação temporal/fuso de exibição.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Um registro sem vínculo e outro com vínculo para cada cadastro | Tentar remover ambos | Só o permitido é removido; nenhuma relação fica órfã. |
| Solicitação recebida e outra finalizada | Tentar edição/reabertura | Comportamento da matriz aprovada; nenhuma regressão nos totais. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-01:1](https://dcadv789.github.io/sigles-pedidos/#V1-01) — **aceite: Aceite integrado do fechamento da entrega 1**. Excluir material inativo sem pedidos vinculados; ativar e inativar continuam disponíveis. · status atual: Entregue.
- [Quadro V1-02:1](https://dcadv789.github.io/sigles-pedidos/#V1-02) — **aceite: Aceite integrado do fechamento da entrega 1**. Exclusão definitiva com validação de vínculos e manutenção da ativação/inativação. · status atual: Entregue.
- [Quadro V1-06:1](https://dcadv789.github.io/sigles-pedidos/#V1-06) — **aceite: Regressão do fluxo já entregue**. Finalizar pelo painel e impedir alterações nos estágios encerrados. · status atual: Entregue.
- [Quadro V1-07:1](https://dcadv789.github.io/sigles-pedidos/#V1-07) — **aceite: Aceite integrado do fechamento da entrega 1**. Histórico de criação e alterações da solicitação. · status atual: Entregue.
- [Quadro V1-08:1](https://dcadv789.github.io/sigles-pedidos/#V1-08) — **aceite: Aceite integrado do fechamento da entrega 1**. Incluir, alterar e retirar pedidos quando permitido; preservar o recebimento da secretaria. · status atual: Entregue.
- [Quadro VS-01:1](https://dcadv789.github.io/sigles-pedidos/#VS-01) — **aceite: Aceite integrado do fechamento da entrega 1**. Cadastros, usuários e compras. · status atual: Entregue.
- [Quadro VS-04:1](https://dcadv789.github.io/sigles-pedidos/#VS-04) — **aceite: Aceite integrado do fechamento da entrega 1**. Exibição de férias e contratos com tratamento de datas ausentes. · status atual: Entregue.
- [Quadro VS-08:1](https://dcadv789.github.io/sigles-pedidos/#VS-08) — **aceite: Aceite integrado do fechamento da entrega 1**. Tipo Compras ou Almoxarifado e filtro dos materiais de compras. · status atual: Entregue.
- [Quadro VS-09:1](https://dcadv789.github.io/sigles-pedidos/#VS-09) — **aceite: Aceite integrado do fechamento da entrega 1**. Envio, reabertura, recebimento, realização/cancelamento, consulta dos períodos encerrados e lista para compras. · status atual: Entregue.
- [Quadro WI-05:2](https://dcadv789.github.io/sigles-pedidos/#WI-05) — **aceite: Aceite integrado do fechamento da entrega 1**. CERT, férias e contratos, com tratamento de datas ausentes. · status atual: Entregue.
- [Quadro WI-07:1](https://dcadv789.github.io/sigles-pedidos/#WI-07) — **aceite: Aceite integrado do fechamento da entrega 1**. Datas da CERT e separação das informações no Dashboard. · status atual: Entregue.
- [Quadro WI-08:1](https://dcadv789.github.io/sigles-pedidos/#WI-08) — **aceite: Aceite integrado do fechamento da entrega 1**. Excluir usuário inativo sem vínculos e manter o formulário/aba após salvar. · status atual: Entregue.
- [Quadro WI-09:1](https://dcadv789.github.io/sigles-pedidos/#WI-09) — **aceite: Aceite integrado do aviso no Dashboard**. Parâmetro de antecedência por perfil. · status atual: Entregue.
- [Quadro WI-16:1](https://dcadv789.github.io/sigles-pedidos/#WI-16) — **aceite: Aceite integrado do fechamento da entrega 1**. Separação por tipo de material e detalhe/observação no recurso da OS. · status atual: Entregue.
- [Quadro WI-20:1](https://dcadv789.github.io/sigles-pedidos/#WI-20) — **aceite: Validação do fluxo de compras existente**. Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. · status atual: Entregue.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-1"></a>

## FECHO-1 — Condição para seguir

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
