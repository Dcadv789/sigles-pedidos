# Entrega 5 — Planejamento técnico revisado

**Usabilidade, cadastros e acesso**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-5.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-4: entrega anterior aceita em homologação.
- **Saída:** FECHO-5, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Escopo inicial restante. Aditivos continuam fora.

**Alocação macro pretendida:** 15%. É a meta original de divisão de esforço, não medição em horas. Fechamentos antecipados para 1 a 4 não são outra implementação nesta entrega.

## Ordem interna obrigatória

23. [E5-04 — Matriz de acesso dos perfis existentes](#E5-04)
24. [E5-01 — Dashboard: atalhos, imagem e abrangência das informações](#E5-01)
25. [E5-02 — Contatos, férias e dados complementares de usuários](#E5-02)
26. [E5-03 — Menu, nome abreviado da sala e dados por tipo de reserva](#E5-03)

Depois do último item, conferir **FECHO-5** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E5-04"></a>

## E5-04 — Matriz de acesso dos perfis existentes

**Ordem global:** 23/42. **Executar após:** FECHO-4. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** FECHO-4 e matriz atual PerfilModulo/sessão.
- **Saída esperada:** D11 com perfis, módulos, ações e recortes aprovados para uso nas entregas seguintes.
- **Limite do item:** Permissões de produção e bug GAM/ROLE_ROOT não são alterados; acesso externo é desenhado em E8-04.

### Diagnóstico conferido no código

A ACL usa PerfilModulo e valores na sessão, não voters. O bug de ROLE_ROOT em GAM é conhecido e não faz parte de uma correção automática nesta revisão.

### Referência literal dos documentos originais

**Referência original RV18 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> O Módulo de Usuários, atualmente, possui funcionalidades predominantemente voltadas ao cadastro, sendo necessária avaliação quanto às possibilidades de evolução, perfis, permissões e demais regras de acesso.

### Arquivos e pontos verificados

- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) — dev 3ed9a38.
- [src/Controller/BaseController.php:31](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/BaseController.php#L31) — dev 3ed9a38.
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) — dev 3ed9a38.
- [src/Entity/PerfilModulo.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PerfilModulo.php#L1) — dev 3ed9a38.
- [templates/perfil/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/perfil/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Executar esta tarefa primeiro na entrega 5: inventariar perfis reais, permissões persistidas e comportamento após novo login.
2. Fechar D11 por módulo, ação, departamento e propriedade do registro; separar visualizar todos, administrar e acessar próprio registro.
3. Testar cada rota tocada diretamente com perfil sem acesso. Alterar somente os módulos acordados, sem revisão global da ACL.
4. Fornecer a mesma matriz a Dashboard, relatórios, fornecedores e aos desenhos de acesso externo, que terão decisões específicas.

### Banco, arquivos e reversão

Reutilizar Perfil/PerfilModulo/Modulo. Ajustes de configuração somente no teste; sem reestruturação global de ACL.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Definir neste item. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Dois perfis com permissões diferentes e sessão antiga | Alterar só no teste e relogar | Permissão nova só após sessão atualizada; acesso direto recusado quando devido. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-06:1](https://dcadv789.github.io/sigles-pedidos/#VS-06) — **execução: Matriz de acesso dos perfis existentes**. Definir as mudanças pretendidas por perfil, módulo e ação. · status atual: Definir.
- Pendência detalhada OR02 — Avaliar e evoluir perfis, permissões e regras de acesso.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E5-01"></a>

## E5-01 — Dashboard: atalhos, imagem e abrangência das informações

**Ordem global:** 24/42. **Executar após:** E5-04. **Dependências técnicas:** [E1-04](entrega-01.md#E1-04), [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** D02, D11, destinos institucionais fornecidos e D12 de apresentação/abrangência.
- **Saída esperada:** Atalhos e Dashboard coerentes com a regra de contrato e o recorte aprovado.
- **Limite do item:** Não ampliar silenciosamente o escopo departamental da consulta de OS.

### Diagnóstico conferido no código

Dashboard é composto por Twig e consultas AJAX. Há rotas de avisos com perfis e limites próprios; a abrangência precisa ser coerente com E1-04 e com o departamento do usuário.

### Referência literal dos documentos originais

**Referência original DI10 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 33**

> Em “Minhas ordens de serviço” aparecem todas as ordens de serviço (será por causa do meu perfil de ADM?). O ADM deve ter a opção de ver todas as ordens de serviço ou somente as dele próprio. Para os que não forem ADM, devem aparecer somente as ordens do usuário. Aparecerem somente as ordens de serviços abertas ou em andamento. Quando clicar em Minhas ordens de serviço, o sistema deve abrir o Menu, Ordens de Serviço.

**Referência original DI12 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 36**

> Adicionar período de férias e início e fim de contratos  dos bolsistas/colaboradores na página inicial

**Referência original DI13 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 37**

> Inserir links para acesso aos sites do LES, do ConexãoLes, dos sistemas MarteWeb, Júpiter Web.

**Referência original DI14 — Documento inicial SINGLES — ALTERAÇÕES / DASHBOARD — parágrafo 38**

> Inserir plano de fundo com a imagem inicial do Dashboard.

### Arquivos e pontos verificados

- [templates/dashboard/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L1) — dev 3ed9a38.
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) — dev 3ed9a38.
- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) — dev 3ed9a38.
- [src/Controller/OrdemServicoController.php:49](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L49) — dev 3ed9a38.

### Roteiro de implementação

1. Aplicar a escolha Minhas/Todas do ADM e a visão própria do usuário comum conforme D12; a escolha precisa funcionar na consulta e no link de destino.
2. Manter somente OS abertas/em andamento no bloco conforme o documento e fazer o clique abrir a tela Ordens de serviço com o recorte compatível.
3. Inserir LES, Conexão LES, MarteWeb e Júpiter Web com destinos confirmados; não substituir um sistema específico pelo portal genérico.
4. Aplicar a decisão sobre fundo/conteúdo da imagem e conferir legibilidade em tela estreita.
5. Reutilizar D02 para avisos e conferir a presença dos perfis de bolsistas/colaboradores, sem repetir a lógica de antecedência.

### Banco, arquivos e reversão

Sem migração esperada. A leitura de avisos deve aceitar datas ausentes e resultados vazios.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D02 — Contratos, CERT e férias](INTEGRACAO_E_DECISOES.md#D02) · dono E1-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfil de estagiário, fonte da data final, nulo/zero/vencido, inclusão do dia limite e quem consulta.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D12 — Dashboard: abrangência, links e imagem](INTEGRACAO_E_DECISOES.md#D12) · dono E5-01. Definir neste item. Significado departamental de Todas, destinos oficiais, perfis de colaboradores e imagem como fundo/conteúdo.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| ADM e usuário comum em dois departamentos | Alternar Minhas/Todas e abrir OS | Somente o recorte D11/D12 e estágios permitidos. |
| Quatro atalhos | Abrir cada destino | Sistema correto em todos, imagem não impede leitura. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-05:3](https://dcadv789.github.io/sigles-pedidos/#WI-05) — **execução: Dashboard: atalhos, imagem e abrangência das informações**. Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web. · status atual: Pendente.
- [Quadro WI-05:4](https://dcadv789.github.io/sigles-pedidos/#WI-05) — **execução: Dashboard: atalhos, imagem e abrangência das informações**. Confirmar se a imagem deve ser plano de fundo ou imagem na página. · status atual: Definir.
- [Quadro WI-06:2](https://dcadv789.github.io/sigles-pedidos/#WI-06) — **execução: Dashboard: atalhos, imagem e abrangência das informações**. Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental. · status atual: Definir.
- Pendência detalhada DB03.1 — Confirmar se “todas as OS” significa todos os departamentos ou somente o departamento e seus descendentes.
- Pendência detalhada DB07.1 — Confirmar que todos os perfis pretendidos como bolsistas/colaboradores entram nessa lista.
- Pendência detalhada DB08.1 — Link direto para o site do LES.
- Pendência detalhada DB08.2 — Link direto para MarteWeb.
- Pendência detalhada DB08.3 — Link direto para Júpiter Web.
- Pendência detalhada DB09.1 — Aplicar a imagem como plano de fundo, se essa for a intenção literal do pedido.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E5-02"></a>

## E5-02 — Contatos, férias e dados complementares de usuários

**Ordem global:** 25/42. **Executar após:** E5-01. **Dependências técnicas:** [E1-01](entrega-01.md#E1-01), [E1-04](entrega-01.md#E1-04), [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** D02/D11 e lista objetiva D13 de contatos, férias e campos.
- **Saída esperada:** Campos/consultas acordados com persistência e apresentação testadas.
- **Limite do item:** Pedido genérico exige especificação; não é promessa de cadastro novo ilimitado.

### Diagnóstico conferido no código

Os pedidos de evolução são genéricos. Contatos e férias já existem; ordenar usuários e configurar os 45 dias pertencem ao fechamento da entrega 1.

### Referência literal dos documentos originais

**Referência original RV14 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Telefones e contatos;

**Referência original RV16 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Férias;

**Referência original RV17 — Relatório de visita, página 2 — Detalhamento técnico: 2-) o que foi apresentado**

> - Informações gerais relacionadas aos usuários e colaboradores.

### Arquivos e pontos verificados

- [src/Controller/UsuarioController.php:957](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L957) — dev 3ed9a38.
- [src/Entity/Usuario.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Usuario.php#L1) — dev 3ed9a38.
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) — dev 3ed9a38.
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Comparar cada campo solicitado com Usuario, ContratoDocente e telas existentes; marcar existente, ajuste ou campo novo.
2. Definir validação, obrigatoriedade, consulta/exportação e acesso de cada campo. Migration nullable só quando o campo realmente faltar.
3. Usar as regras D02 para contratos e a definição temporal de férias; não exibir férias antigas como futuras.
4. Testar gravação e leitura em contato/férias e a permanência da aba após salvar, reutilizando E1-01.

### Banco, arquivos e reversão

Esquema somente se a lista aprovada exigir campo ausente; preferir nullable para registros antigos, com validação da tela no caso aplicável.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D02 — Contratos, CERT e férias](INTEGRACAO_E_DECISOES.md#D02) · dono E1-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfil de estagiário, fonte da data final, nulo/zero/vencido, inclusão do dia limite e quem consulta.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D12 — Dashboard: abrangência, links e imagem](INTEGRACAO_E_DECISOES.md#D12) · dono E5-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Significado departamental de Todas, destinos oficiais, perfis de colaboradores e imagem como fundo/conteúdo.
- [D13 — Dados complementares de usuários](INTEGRACAO_E_DECISOES.md#D13) · dono E5-02. Definir neste item. Quais melhorias além das já entregues, regras temporais das férias e necessidade de campo novo.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Férias passadas, correntes, futuras e nulas | Consultar e editar dados aprovados | Datas e campos coerentes sem misturar aviso contratual e férias. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-03:2](https://dcadv789.github.io/sigles-pedidos/#VS-03) — **execução: Contatos, férias e dados complementares de usuários**. Detalhar campos, busca e exportações desejados. · status atual: Definir.
- [Quadro VS-04:2](https://dcadv789.github.io/sigles-pedidos/#VS-04) — **execução: Contatos, férias e dados complementares de usuários**. Definir outras mudanças além do cadastro e dos avisos existentes. · status atual: Definir.
- [Quadro VS-05:1](https://dcadv789.github.io/sigles-pedidos/#VS-05) — **execução: Contatos, férias e dados complementares de usuários**. Especificar o que falta nas informações de usuários e colaboradores. · status atual: Definir.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E5-03"></a>

## E5-03 — Menu, nome abreviado da sala e dados por tipo de reserva

**Ordem global:** 26/42. **Executar após:** E5-02. **Dependências técnicas:** [E4-06](entrega-04.md#E4-06), [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** D08 e D11 fechadas, campos reais nome_abreviado/discente/discente_email identificados; definir D10 antes de alterar o fluxo.
- **Saída esperada:** Menu ajustado, rótulo de sala pelo nome abreviado e nome/e-mail persistidos em criação e edição.
- **Limite do item:** Nome, descrição e nome abreviado são campos diferentes; não renomear nem mesclar salas aqui.

### Diagnóstico conferido no código

O documento inicial pede nome abreviado. Sala possui nome, descricao e nome_abreviado distintos; labelSala hoje prefere descricao. O JavaScript exige discente/e-mail em Reunião e Extensão, ao contrário do pedido; o update de reserva não transporta esses campos. O planejamento anterior precisava corrigir essas duas lacunas.

### Referência literal dos documentos originais

**Referência original DI47 — Documento inicial SINGLES — CADASTRO / 3. Períodos: — parágrafo 113**

> Exportar para dentro de “Compras”

**Referência original DI49 — Documento inicial SINGLES — CADASTRO / 4 Espaços/Salas — parágrafo 118**

> No cadastro da agenda, deve aparecer somente a descrição que consta como nome abreviado

**Referência original DI55 — Documento inicial SINGLES — AGENDA / Tipos de reserva — parágrafo 138**

> Acrescentar a função e-mail e nome discente/solicitante em todos os tipos de reserva, deixando somente grupo de extensão como obrigatório.

### Arquivos e pontos verificados

- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) — dev 3ed9a38.
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) — dev 3ed9a38.
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) — dev 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — dev 3ed9a38.
- [src/Entity/Reserva.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L210) — dev 3ed9a38.
- [src/Entity/Sala.php:142](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L142) — dev 3ed9a38.
- [src/Controller/ReservaController.php:421](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L421) — dev 3ed9a38.
- [src/Repository/ReservaRepository.php:68](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L68) — dev 3ed9a38.

### Roteiro de implementação

1. Mover Períodos para Compras preservando rota e GS; validar visibilidade antes/depois.
2. Corrigir o plano anterior: o pedido literal é nome_abreviado, não Nome. Usar getNomeAbreviado no contexto da agenda; fallback só para valor ausente conforme D10.
3. Manter ID de sala em payload e consultas. Rótulo não pode ser usado como identidade ou chave de associação entre agenda e cronograma.
4. Exibir nome/e-mail para todos os tipos; exigir ambos só em Grupo de extensão, no cliente e no servidor.
5. Revisar create e update: hoje o update não transporta os dois campos ao repository. Preservar valor omitido, permitir limpeza quando opcional e não apagar ao trocar tipo sem intenção.
6. Conferir grupos de serialização, formulário e retorno da entidade após salvar para eliminar sucesso aparente.

### Banco, arquivos e reversão

Campos já existem; nenhuma migração prevista. Validar e-mail quando informado.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Consumir a decisão anterior, sem redefini-la silenciosamente. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.
- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Definir neste item. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Sala com Nome diferente do nome abreviado | Abrir seletor da agenda | Mostra o nome abreviado e envia o mesmo ID. |
| Reunião sem nome/e-mail e extensão sem os dois | Criar e editar | Primeira válida; extensão recusada até preencher ambos. |
| Reserva com nome/e-mail já salvo | Editar os dois e depois outro campo | Valores persistem e não somem por payload omitido. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-17:2](https://dcadv789.github.io/sigles-pedidos/#WI-17) — **execução: Menu, nome abreviado da sala e dados por tipo de reserva**. Usar o nome abreviado na apresentação da sala na agenda. · status atual: Pendente.
- [Quadro WI-19:1](https://dcadv789.github.io/sigles-pedidos/#WI-19) — **execução: Menu, nome abreviado da sala e dados por tipo de reserva**. Exibir os campos em todos os tipos e exigir preenchimento somente em Grupo de extensão. · status atual: Pendente.
- Pendência detalhada CA04 — Mover Períodos para dentro do menu Compras.
- Pendência detalhada CA06 — Na agenda, identificar a sala somente pelo nome abreviado.
- Pendência detalhada AG06 — Exibir nome e e-mail do discente/solicitante em todos os tipos de reserva.
- Pendência detalhada AG06.1 — Exigir nome e e-mail somente no tipo Grupo de extensão.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-5"></a>

## FECHO-5 — Condição para seguir

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
