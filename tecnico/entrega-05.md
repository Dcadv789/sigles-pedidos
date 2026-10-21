# Entrega 5 — Usabilidade, cadastros e acesso

**Atualizado em 21/10/2026 · Código na PR #36; atualizar base, validar visualmente e homologar.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-4: entrega anterior aceita em homologação.
- Situação: Código na PR #36; atualizar base, validar visualmente e homologar.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E5-04"></a>

## E5-04 — Matriz de acesso dos perfis existentes

**Situação:** Implementado na PR #36; rascunho, integração atualizada e homologação pendentes.

A ACL usa PerfilModulo e valores na sessão, não voters. O bug de ROLE_ROOT em GAM é conhecido e não faz parte de uma correção automática nesta revisão.

- Entrada: FECHO-4 e matriz atual PerfilModulo/sessão.
- Saída: D11 com perfis, módulos, ações e recortes aprovados para uso nas entregas seguintes.
- Limite: Permissões de produção e bug GAM/ROLE_ROOT não são alterados; acesso externo é desenhado em E8-04.

### Funções, correções ou próximos passos

- Executar esta tarefa primeiro na entrega 5: inventariar perfis reais, permissões persistidas e comportamento após novo login.
- Fechar D11 por módulo, ação, departamento e propriedade do registro; separar visualizar todos, administrar e acessar próprio registro.
- Testar cada rota tocada diretamente com perfil sem acesso. Alterar somente os módulos acordados, sem revisão global da ACL.
- Fornecer a mesma matriz a Dashboard, relatórios, fornecedores e aos desenhos de acesso externo, que terão decisões específicas.

### Evidências registradas

- PR #36: código implementado sobre uma revisão anterior da PR #9; sem deploy.
- 75 testes unitários/208 asserções, 72 HTTP, 7 JavaScript e 8 verificações ORM registrados na revisão da PR.
- Reconciliar com a 3.5/v1.3.3 e a Entrega 4/beta2 antes de homologar; não assumir compatibilidade só pela base nominal.
- Sem migration nova. Três inconsistências ORM e a suíte antiga de Compras continuam declaradas.

### Banco e reversão

Reutilizar Perfil/PerfilModulo/Modulo. Ajustes de configuração somente no teste; sem reestruturação global de ACL.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Dois perfis com permissões diferentes e sessão antiga | Alterar só no teste e relogar | Permissão nova só após sessão atualizada; acesso direto recusado quando devido. |

### Rastreio dos pedidos

- VS-06:1 — Definir as mudanças pretendidas por perfil, módulo e ação. · Na PR.

### Pendências detalhadas

- OR02 — Avaliar e evoluir perfis, permissões e regras de acesso. **Definir** — existem permissões por perfil; falta uma lista de mudanças além dos ajustes já entregues.

### Documentos originais (rastreio preservado)

**RV18 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> O Módulo de Usuários, atualmente, possui funcionalidades predominantemente voltadas ao cadastro, sendo necessária avaliação quanto às possibilidades de evolução, perfis, permissões e demais regras de acesso.

### Referências de código (snapshot da leitura)

- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) · 3ed9a38
- [src/Controller/BaseController.php:31](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/BaseController.php#L31) · 3ed9a38
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) · 3ed9a38
- [src/Entity/PerfilModulo.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PerfilModulo.php#L1) · 3ed9a38
- [templates/perfil/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/perfil/index.html.twig#L1) · 3ed9a38

<a id="E5-01"></a>

## E5-01 — Dashboard: atalhos, imagem e abrangência das informações

**Situação:** Implementado na PR #36; rascunho, integração atualizada e homologação pendentes.

Dashboard é composto por Twig e consultas AJAX. Há rotas de avisos com perfis e limites próprios; a abrangência precisa ser coerente com E1-04 e com o departamento do usuário.

- Entrada: D02, D11, destinos institucionais fornecidos e D12 de apresentação/abrangência.
- Saída: Atalhos e Dashboard coerentes com a regra de contrato e o recorte aprovado.
- Limite: Não ampliar silenciosamente o escopo departamental da consulta de OS.

### Funções, correções ou próximos passos

- Aplicar a escolha Minhas/Todas do ADM e a visão própria do usuário comum conforme D12; a escolha precisa funcionar na consulta e no link de destino.
- Manter somente OS abertas/em andamento no bloco conforme o documento e fazer o clique abrir a tela Ordens de serviço com o recorte compatível.
- Inserir LES, Conexão LES, MarteWeb e Júpiter Web com destinos confirmados; não substituir um sistema específico pelo portal genérico.
- Aplicar a decisão sobre fundo/conteúdo da imagem e conferir legibilidade em tela estreita.
- Reutilizar D02 para avisos e conferir a presença dos perfis de bolsistas/colaboradores, sem repetir a lógica de antecedência.

### Evidências registradas

- PR #36: código implementado sobre uma revisão anterior da PR #9; sem deploy.
- 75 testes unitários/208 asserções, 72 HTTP, 7 JavaScript e 8 verificações ORM registrados na revisão da PR.
- Reconciliar com a 3.5/v1.3.3 e a Entrega 4/beta2 antes de homologar; não assumir compatibilidade só pela base nominal.
- Sem migration nova. Três inconsistências ORM e a suíte antiga de Compras continuam declaradas.

### Banco e reversão

Sem migração esperada. A leitura de avisos deve aceitar datas ausentes e resultados vazios.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| ADM e usuário comum em dois departamentos | Alternar Minhas/Todas e abrir OS | Somente o recorte D11/D12 e estágios permitidos. |
| Quatro atalhos | Abrir cada destino | Sistema correto em todos, imagem não impede leitura. |

### Rastreio dos pedidos

- WI-05:3 — Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web. · Na PR.
- WI-05:4 — Confirmar se a imagem deve ser plano de fundo ou imagem na página. · Na PR.
- WI-06:2 — Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental. · Na PR.

### Pendências detalhadas

- DB03.1 — Confirmar se “todas as OS” significa todos os departamentos ou somente o departamento e seus descendentes. **Definir** — a visão ampliada implementada é departamental.
- DB07.1 — Confirmar que todos os perfis pretendidos como bolsistas/colaboradores entram nessa lista. **Validar** — a consulta usa perfis específicos; verificar os perfis efetivos em produção.
- DB08.1 — Link direto para o site do LES. **Pendente** — não identificado no conjunto de atalhos do Dashboard.
- DB08.2 — Link direto para MarteWeb. **Pendente** — há link para USP Digital, mas não o atalho específico solicitado.
- DB08.3 — Link direto para Júpiter Web. **Pendente** — há link para USP Digital, mas não o atalho específico solicitado.
- DB09.1 — Aplicar a imagem como plano de fundo, se essa for a intenção literal do pedido. **Definir** — o código apresenta a imagem na página, não como fundo da página inteira.

### Documentos originais (rastreio preservado)

**DI10 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 33**

> Em “Minhas ordens de serviço” aparecem todas as ordens de serviço (será por causa do meu perfil de ADM?). O ADM deve ter a opção de ver todas as ordens de serviço ou somente as dele próprio. Para os que não forem ADM, devem aparecer somente as ordens do usuário. Aparecerem somente as ordens de serviços abertas ou em andamento. Quando clicar em Minhas ordens de serviço, o sistema deve abrir o Menu, Ordens de Serviço.

**DI12 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 36**

> Adicionar período de férias e início e fim de contratos  dos bolsistas/colaboradores na página inicial

**DI13 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 37**

> Inserir links para acesso aos sites do LES, do ConexãoLes, dos sistemas MarteWeb, Júpiter Web.

**DI14 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 38**

> Inserir plano de fundo com a imagem inicial do Dashboard.

### Referências de código (snapshot da leitura)

- [templates/dashboard/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L1) · 3ed9a38
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) · 3ed9a38
- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) · 3ed9a38
- [src/Controller/OrdemServicoController.php:49](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L49) · 3ed9a38

**Dependências:** E1-04, E5-04.

<a id="E5-02"></a>

## E5-02 — Contatos, férias e dados complementares de usuários

**Situação:** Implementado na PR #36; rascunho, integração atualizada e homologação pendentes.

Os pedidos de evolução são genéricos. Contatos e férias já existem; ordenar usuários e configurar os 45 dias pertencem ao fechamento da entrega 1.

- Entrada: D02/D11 e lista objetiva D13 de contatos, férias e campos.
- Saída: Campos/consultas acordados com persistência e apresentação testadas.
- Limite: Pedido genérico exige especificação; não é promessa de cadastro novo ilimitado.

### Funções, correções ou próximos passos

- Comparar cada campo solicitado com Usuario, ContratoDocente e telas existentes; marcar existente, ajuste ou campo novo.
- Definir validação, obrigatoriedade, consulta/exportação e acesso de cada campo. Migration nullable só quando o campo realmente faltar.
- Usar as regras D02 para contratos e a definição temporal de férias; não exibir férias antigas como futuras.
- Testar gravação e leitura em contato/férias e a permanência da aba após salvar, reutilizando E1-01.

### Evidências registradas

- PR #36: código implementado sobre uma revisão anterior da PR #9; sem deploy.
- 75 testes unitários/208 asserções, 72 HTTP, 7 JavaScript e 8 verificações ORM registrados na revisão da PR.
- Reconciliar com a 3.5/v1.3.3 e a Entrega 4/beta2 antes de homologar; não assumir compatibilidade só pela base nominal.
- Sem migration nova. Três inconsistências ORM e a suíte antiga de Compras continuam declaradas.

### Banco e reversão

Esquema somente se a lista aprovada exigir campo ausente; preferir nullable para registros antigos, com validação da tela no caso aplicável.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Férias passadas, correntes, futuras e nulas | Consultar e editar dados aprovados | Datas e campos coerentes sem misturar aviso contratual e férias. |

### Rastreio dos pedidos

- VS-03:2 — Detalhar campos, busca e exportações desejados. · Na PR.
- VS-04:2 — Definir outras mudanças além do cadastro e dos avisos existentes. · Na PR.
- VS-05:1 — Especificar o que falta nas informações de usuários e colaboradores. · Na PR.

### Documentos originais (rastreio preservado)

**RV14 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Telefones e contatos;

**RV16 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Férias;

**RV17 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Informações gerais relacionadas aos usuários e colaboradores.

### Referências de código (snapshot da leitura)

- [src/Controller/UsuarioController.php:957](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L957) · 3ed9a38
- [src/Entity/Usuario.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Usuario.php#L1) · 3ed9a38
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) · 3ed9a38
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) · 3ed9a38

**Dependências:** E1-01, E1-04, E5-04.

<a id="E5-03"></a>

## E5-03 — Menu, nome abreviado da sala e dados por tipo de reserva

**Situação:** Implementado na PR #36; rascunho, integração atualizada e homologação pendentes.

O documento inicial pede nome abreviado. Sala possui nome, descricao e nome_abreviado distintos; labelSala hoje prefere descricao. O JavaScript exige discente/e-mail em Reunião e Extensão, ao contrário do pedido; o update de reserva não transporta esses campos. O planejamento anterior precisava corrigir essas duas lacunas.

- Entrada: D08 e D11 fechadas, campos reais nome_abreviado/discente/discente_email identificados; definir D10 antes de alterar o fluxo.
- Saída: Menu ajustado, rótulo de sala pelo nome abreviado e nome/e-mail persistidos em criação e edição.
- Limite: Nome, descrição e nome abreviado são campos diferentes; não renomear nem mesclar salas aqui.

### Funções, correções ou próximos passos

- Mover Períodos para Compras preservando rota e GS; validar visibilidade antes/depois.
- Corrigir o plano anterior: o pedido literal é nome_abreviado, não Nome. Usar getNomeAbreviado no contexto da agenda; fallback só para valor ausente conforme D10.
- Manter ID de sala em payload e consultas. Rótulo não pode ser usado como identidade ou chave de associação entre agenda e cronograma.
- Exibir nome/e-mail para todos os tipos; exigir ambos só em Grupo de extensão, no cliente e no servidor.
- Revisar create e update: hoje o update não transporta os dois campos ao repository. Preservar valor omitido, permitir limpeza quando opcional e não apagar ao trocar tipo sem intenção.
- Conferir grupos de serialização, formulário e retorno da entidade após salvar para eliminar sucesso aparente.

### Evidências registradas

- PR #36: código implementado sobre uma revisão anterior da PR #9; sem deploy.
- 75 testes unitários/208 asserções, 72 HTTP, 7 JavaScript e 8 verificações ORM registrados na revisão da PR.
- Reconciliar com a 3.5/v1.3.3 e a Entrega 4/beta2 antes de homologar; não assumir compatibilidade só pela base nominal.
- Sem migration nova. Três inconsistências ORM e a suíte antiga de Compras continuam declaradas.

### Banco e reversão

Campos já existem; nenhuma migração prevista. Validar e-mail quando informado.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Sala com Nome diferente do nome abreviado | Abrir seletor da agenda | Mostra o nome abreviado e envia o mesmo ID. |
| Reunião sem nome/e-mail e extensão sem os dois | Criar e editar | Primeira válida; extensão recusada até preencher ambos. |
| Reserva com nome/e-mail já salvo | Editar os dois e depois outro campo | Valores persistem e não somem por payload omitido. |

### Rastreio dos pedidos

- WI-17:2 — Usar o nome abreviado na apresentação da sala na agenda. · Na PR.
- WI-19:1 — Exibir os campos em todos os tipos e exigir preenchimento somente em Grupo de extensão. · Na PR.

### Pendências detalhadas

- CA04 — Mover Períodos para dentro do menu Compras. **Pendente** — permanece em Cadastros.
- CA06 — Na agenda, identificar a sala somente pelo nome abreviado. **Pendente** — a agenda e a disponibilidade ainda usam a descrição da sala.
- AG06 — Exibir nome e e-mail do discente/solicitante em todos os tipos de reserva. **Pendente** — os campos ficam ocultos fora de Reunião e Grupo de extensão.
- AG06.1 — Exigir nome e e-mail somente no tipo Grupo de extensão. **Pendente** — a regra atual também exige esses campos no tipo Reunião.

### Documentos originais (rastreio preservado)

**DI47 — Documento inicial SINGLES — CADASTRO / 3. Períodos: — parágrafo 113**

> Exportar para dentro de “Compras”

**DI49 — Documento inicial SINGLES — CADASTRO / 4 Espaços/Salas — parágrafo 118**

> No cadastro da agenda, deve aparecer somente a descrição que consta como nome abreviado

**DI55 — Documento inicial SINGLES — AGENDA / Tipos de reserva — parágrafo 138**

> Acrescentar a função e-mail e nome discente/solicitante em todos os tipos de reserva, deixando somente grupo de extensão como obrigatório.

### Referências de código (snapshot da leitura)

- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) · 3ed9a38
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) · 3ed9a38
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) · 3ed9a38
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) · 3ed9a38
- [src/Entity/Reserva.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L210) · 3ed9a38
- [src/Entity/Sala.php:142](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L142) · 3ed9a38
- [src/Controller/ReservaController.php:421](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L421) · 3ed9a38
- [src/Repository/ReservaRepository.php:68](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L68) · 3ed9a38

**Dependências:** E4-06, E5-04.

## FECHO-5 — Fechamento

**Código na PR #36; atualizar base, validar visualmente e homologar.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
