# Entrega 1 — Planejamento técnico

**Cadastros, usuários e compras**

**Data:** 16/10/2026. **Etapa:** Fechamento de entrega existente. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

Este arquivo fecha lacunas e valida a entrega existente sobre a dev atual. Não instrui a voltar a uma tag antiga nem declara uma nova publicação em produção.

## Ordem de execução

1. [E1-05 — Conciliar encerramento do período com os estágios combinados](#E1-05)
2. [E1-03 — Ativar e inativar períodos sem erro](#E1-03)
3. [E1-01 — Ordenação e persistência da tela de Usuários](#E1-01)
4. [E1-04 — Regra de antecedência de contratos por perfil](#E1-04)
5. [E1-02 — Data de criação em Minhas solicitações e Painel](#E1-02)
6. [E1-99 — Aceite integrado do fechamento da entrega 1](#E1-99)

<a id="E1-05"></a>

## E1-05 — Conciliar encerramento do período com os estágios combinados

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

O texto inicial prevê Em aberto→Expirada e Em andamento→Realizada no encerramento manual. O código atual do controller e do encerramento automático expira todos os estágios não encerrados. É uma divergência de regra a resolver antes de mudar dados.

### Arquivos verificados

- [src/Controller/PeriodoSolicitacoesController.php:242](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L242) — base dev, commit 3ed9a38.
- [src/Repository/PeriodoSolicitacoesRepository.php:156](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/PeriodoSolicitacoesRepository.php#L156) — base dev, commit 3ed9a38.
- [src/Controller/PainelSolicitacoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PainelSolicitacoesController.php#L1) — base dev, commit 3ed9a38.
- [src/Repository/HistoricoSolicitacaoRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/HistoricoSolicitacaoRepository.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Montar uma matriz de transições para encerramento manual, automático, recebimento, realização e cancelamento. Usar o descritivo e as alterações posteriores como evidências, sem presumir qual prevalece.
2. Depois de fechar a matriz, alinhar controller, repository e histórico no mesmo comportamento; validar as entradas antes de alterar as entidades.
3. Preservar Realizada/Cancelada/Expirada já encerradas e não reclassificar solicitações históricas automaticamente.
4. Registrar a mudança de regra no histórico e no descritivo da entrega.

### Banco e dados

Sem migração estrutural prevista. Não corrigir em lote registros existentes enquanto a regra e os registros afetados não forem aprovados para o teste.

### Testes de aceite previstos

- [ ] Cada estágio de origem produz exatamente a saída da matriz nos dois tipos de encerramento.
- [ ] Uma entrada inválida não deixa alterações parciais no período ou nas solicitações.
- [ ] Repetir o encerramento não duplica histórico nem altera estágios finais.

### Decisões necessárias

- Qual regra é válida hoje para solicitações Em andamento e se manual e automático devem ser diferentes.

### Referências dos pedidos

- [V1-06:1](https://dcadv789.github.io/sigles-pedidos/#V1-06) — Finalizar pelo painel e impedir alterações nos estágios encerrados. (Entregue).
- [WI-20:1](https://dcadv789.github.io/sigles-pedidos/#WI-20) — Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. (Entregue).

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E1-03"></a>

## E1-03 — Ativar e inativar períodos sem erro

**Status:** Planejado. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

handleStatus alterna active e faz flush; a falha do vídeo não foi comprovada. O formulário de períodos usa a estrutura já existente no projeto.

### Arquivos verificados

- [src/Controller/PeriodoSolicitacoesController.php:165](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PeriodoSolicitacoesController.php#L165) — base dev, commit 3ed9a38.
- [src/Entity/PeriodoSolicitacoes.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PeriodoSolicitacoes.php#L1) — base dev, commit 3ed9a38.
- [src/Form/PeriodoSolicitacoesType.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Form/PeriodoSolicitacoesType.php#L1) — base dev, commit 3ed9a38.
- [templates/periodo_solicitacoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/periodo_solicitacoes/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Reproduzir a ativação com período futuro, vigente, vencido e já encerrado, separando falha de validação de resposta AJAX ou permissão.
2. Corrigir a causa encontrada, mantendo a rota e o toast padrão. Não criar Symfony Form novo nem alterar a definição de vigência para mascarar a falha.
3. Conferir novamente os bloqueios de exclusão de período com solicitações.

### Banco e dados

Sem migração prevista. Qualquer ajuste de registros de teste deve preservar os vínculos e ser documentado.

### Testes de aceite previstos

- [ ] Ativar/inativar responde com sucesso ou validação legível, sem HTTP 500.
- [ ] Período encerrado não volta a permitir compras apenas por ficar ativo.
- [ ] A exclusão de um período vinculado continua bloqueada.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [V1-03:1](https://dcadv789.github.io/sigles-pedidos/#V1-03) — Testar a ativação com as datas e condições do caso original. (Validar).

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E1-01"></a>

## E1-01 — Ordenação e persistência da tela de Usuários

**Status:** Planejado. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

A consulta e a DataTable já existem; a desconfiguração relatada ainda precisa de reprodução. Não atribuir a falha à ordenação do servidor sem conferir o JSON e o estado salvo no navegador.

### Arquivos verificados

- [src/Controller/UsuarioController.php:63](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L63) — base dev, commit 3ed9a38.
- [templates/usuario/index.html.twig:336](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/index.html.twig#L336) — base dev, commit 3ed9a38.
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Registrar o cenário com nomes acentuados, usuários ativos/inativos e filtros, incluindo o estado salvo da DataTable.
2. Conferir se a coluna Nome usa texto estável para sort e se os índices das colunas continuam corretos após filtros e mudanças visuais. Corrigir somente o caminho que reproduzir o defeito.
3. Reabrir a mesma aba e formulário após salvar; preservar a exclusão definitiva e os bloqueios de vínculos já implementados.

### Banco e dados

Sem alteração prevista de esquema. Usar usuários sintéticos no banco de teste e manter ACL GAU.

### Testes de aceite previstos

- [ ] Ordenar A→Z e Z→A com acentos não desloca ações nem valores de outras colunas.
- [ ] Filtrar e editar um usuário mantém a tabela e a aba coerentes; usuário sem permissão recebe o erro padrão.
- [ ] Se o defeito não se reproduzir, registrar evidência e encerrar como validado, sem inventar uma mudança.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [WI-08:2](https://dcadv789.github.io/sigles-pedidos/#WI-08) — Reproduzir a desconfiguração relatada ao ordenar nomes. (Validar).
- US02 — Ordenação alfabética sem desconfigurar a tela.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E1-04"></a>

## E1-04 — Regra de antecedência de contratos por perfil

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

Perfil possui getDiasAvisoContrato, mas contrato_ferias usa +30 days e restringe perfis a [4,9]. Portanto, mudar apenas o parâmetro para 45 dias não comprova o atendimento ao estagiário.

### Arquivos verificados

- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) — base dev, commit 3ed9a38.
- [src/Entity/Perfil.php:78](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Perfil.php#L78) — base dev, commit 3ed9a38.
- [src/Controller/PerfilController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilController.php#L1) — base dev, commit 3ed9a38.
- [templates/dashboard/dashboard.js:380](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L380) — base dev, commit 3ed9a38.

### Implementação prevista

1. Identificar no teste o perfil real de estagiário e a fonte correta da data final do contrato; não presumir ID fixo.
2. Aplicar a antecedência configurada por perfil à consulta e à apresentação dos contratos. Separar essa janela da regra de férias, se forem negócios distintos.
3. Conferir os outros caminhos de aviso de CERT/contrato que já usam getDiasAvisoContrato para evitar resultados contraditórios.
4. Validar a exibição para o administrador conforme as permissões acordadas.

### Banco e dados

Reutilizar diasAvisoContrato existente. Eventual alteração de configuração só em esalq_sistema_des nesta operação; sem disparo de e-mails novo.

### Testes de aceite previstos

- [ ] Contrato com término a 45 dias aparece no limite acordado; a 46 dias não aparece para o perfil configurado com 45.
- [ ] Perfil diferente mantém sua própria antecedência e datas ausentes não causam erro.
- [ ] Não há envio automático ao estagiário: essa automação permanece Aditivo.

### Decisões necessárias

- Confirmar perfil abrangido, inclusão do dia limite e quem visualiza o aviso.

### Referências dos pedidos

- [WI-09:1](https://dcadv789.github.io/sigles-pedidos/#WI-09) — Parâmetro de antecedência por perfil. (Entregue).
- [WI-09:2](https://dcadv789.github.io/sigles-pedidos/#WI-09) — Conferir a configuração de 45 dias para estagiários. (Validar).
- US05.1 — Aplicar especificamente 45 dias ao perfil de estagiários.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E1-02"></a>

## E1-02 — Data de criação em Minhas solicitações e Painel

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

As consultas de solicitações retornam nome, estágio e período, mas as listagens não apresentam a data de criação solicitada. O histórico de alterações não substitui essa coluna.

### Arquivos verificados

- [src/Repository/SolicitacaoRepository.php:29](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/SolicitacaoRepository.php#L29) — base dev, commit 3ed9a38.
- [src/Entity/Solicitacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Solicitacao.php#L1) — base dev, commit 3ed9a38.
- [templates/solicitacao/index.html.twig:175](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/solicitacao/index.html.twig#L175) — base dev, commit 3ed9a38.
- [templates/painel_solicitacoes/index.html.twig:374](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/painel_solicitacoes/index.html.twig#L374) — base dev, commit 3ed9a38.

### Implementação prevista

1. Acrescentar dt_criado ao resultado das consultas de solicitações e de gestão/pendentes do Painel, usando o campo dtCriado existente. Não confundir com a data do período ou a data de finalização.
2. Exibir DD/MM/AAAA HH:mm e usar valor ISO ou numérico para ordenar. Manter um único critério de fuso entre resposta e tela.
3. Na lista agregada por material, definir uma apresentação por solicitação ou o detalhamento de origem; não fabricar uma data única para compras de solicitações diferentes.
4. Ajustar os cabeçalhos, os índices da DataTable e as exportações que usam essas colunas.

### Banco e dados

Campo já existe; não criar uma nova data nem preencher o histórico com datas atuais. Consultas parametrizadas e sem multiplicar pedidos nos agrupamentos.

### Testes de aceite previstos

- [ ] Duas solicitações de períodos diferentes mostram sua própria data de criação.
- [ ] 31/12 e 01/01 ordenam cronologicamente, inclusive após exportar ou alternar as abas.
- [ ] O total por material/departamento permanece igual; a data agregada não sugere uma origem inexistente.

### Decisões necessárias

- Fechar a apresentação da data na lista consolidada por material; recomendação: abrir as solicitações de origem, mantendo datas individuais.

### Referências dos pedidos

- [V1-07:2](https://dcadv789.github.io/sigles-pedidos/#V1-07) — Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período. (Pendente).

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E1-99"></a>

## E1-99 — Aceite integrado do fechamento da entrega 1

**Status:** Planejado. **Dependências:** E1-01, E1-02, E1-03, E1-04, E1-05.

### Evidência e diagnóstico

Cadastros e compras já estão em produção. O fechamento é uma correção incremental sobre a dev atual, não o retorno à tag antiga.

### Arquivos verificados

- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/UsuarioController.php:707](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L707) — base dev, commit 3ed9a38.
- [src/Controller/PredioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PredioController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/PedidoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PedidoController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Executar os cenários afetados por E1-01 a E1-05 no teste.
2. Conferir exclusão de usuários/materiais/categorias/prédios/salas com e sem vínculos e impedir exclusão do próprio usuário conectado.
3. Conferir envio, recebimento, edição, cópia de solicitação e consulta de períodos encerrados. Registrar evidência por pedido antes de alterar o status no quadro.

### Banco e dados

Usar massa sintética de teste; não remover registros reais para provar a exclusão.

### Testes de aceite previstos

- [ ] Bloqueios de vínculos continuam funcionando e os totais de compras não mudam por regressão.
- [ ] Usuário sem a permissão da ação recebe 406 e toast.
- [ ] Casos corrigidos têm evidência de homologação; os demais permanecem como Validar/Definir.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [V1-01:1](https://dcadv789.github.io/sigles-pedidos/#V1-01) — Excluir material inativo sem pedidos vinculados; ativar e inativar continuam disponíveis. (Entregue).
- [V1-02:1](https://dcadv789.github.io/sigles-pedidos/#V1-02) — Exclusão definitiva com validação de vínculos e manutenção da ativação/inativação. (Entregue).
- [V1-06:1](https://dcadv789.github.io/sigles-pedidos/#V1-06) — Finalizar pelo painel e impedir alterações nos estágios encerrados. (Entregue).
- [V1-07:1](https://dcadv789.github.io/sigles-pedidos/#V1-07) — Histórico de criação e alterações da solicitação. (Entregue).
- [V1-08:1](https://dcadv789.github.io/sigles-pedidos/#V1-08) — Incluir, alterar e retirar pedidos quando permitido; preservar o recebimento da secretaria. (Entregue).
- [VS-01:1](https://dcadv789.github.io/sigles-pedidos/#VS-01) — Cadastros, usuários e compras. (Entregue).
- [VS-04:1](https://dcadv789.github.io/sigles-pedidos/#VS-04) — Exibição de férias e contratos com tratamento de datas ausentes. (Entregue).
- [VS-08:1](https://dcadv789.github.io/sigles-pedidos/#VS-08) — Tipo Compras ou Almoxarifado e filtro dos materiais de compras. (Entregue).
- [VS-09:1](https://dcadv789.github.io/sigles-pedidos/#VS-09) — Envio, reabertura, recebimento, realização/cancelamento, consulta dos períodos encerrados e lista para compras. (Entregue).
- [WI-05:2](https://dcadv789.github.io/sigles-pedidos/#WI-05) — CERT, férias e contratos, com tratamento de datas ausentes. (Entregue).
- [WI-07:1](https://dcadv789.github.io/sigles-pedidos/#WI-07) — Datas da CERT e separação das informações no Dashboard. (Entregue).
- [WI-08:1](https://dcadv789.github.io/sigles-pedidos/#WI-08) — Excluir usuário inativo sem vínculos e manter o formulário/aba após salvar. (Entregue).
- [WI-09:1](https://dcadv789.github.io/sigles-pedidos/#WI-09) — Parâmetro de antecedência por perfil. (Entregue).
- [WI-16:1](https://dcadv789.github.io/sigles-pedidos/#WI-16) — Separação por tipo de material e detalhe/observação no recurso da OS. (Entregue).
- [WI-20:1](https://dcadv789.github.io/sigles-pedidos/#WI-20) — Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos. (Entregue).

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
