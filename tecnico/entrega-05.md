# Entrega 5 — Planejamento técnico

**Usabilidade, cadastros e acesso**

**Data:** 16/10/2026. **Etapa:** Escopo inicial restante. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

A referência macro original desta entrega é **15%** do restante. Pontos antecipados para o fechamento das entregas 1 a 4 não serão executados outra vez aqui. Revalidar o esforço depois desses fechamentos e das definições abertas.

## Ordem de execução

1. [E5-01 — Dashboard: atalhos, imagem e abrangência das informações](#E5-01)
2. [E5-02 — Contatos, férias e dados complementares de usuários](#E5-02)
3. [E5-03 — Menu, nome da sala e campos por tipo de reserva](#E5-03)
4. [E5-04 — Matriz de acesso dos perfis existentes](#E5-04)

<a id="E5-01"></a>

## E5-01 — Dashboard: atalhos, imagem e abrangência das informações

**Status:** Planejado — exige definição. **Dependências:** E4-99, E1-04.

### Evidência e diagnóstico

Dashboard é composto por Twig e consultas AJAX. Há rotas de avisos com perfis e limites próprios; a abrangência precisa ser coerente com E1-04 e com o departamento do usuário.

### Arquivos verificados

- [templates/dashboard/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) — base dev, commit 3ed9a38.
- [src/Controller/UsuarioController.php:1093](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1093) — base dev, commit 3ed9a38.
- [src/Controller/OrdemServicoController.php:49](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L49) — base dev, commit 3ed9a38.

### Implementação prevista

1. Confirmar URLs institucionais e aplicar os três atalhos usando o layout existente, com nomes claros e destino correto.
2. Fechar se a imagem é conteúdo ou fundo e ajustar apenas CSS/Twig do bloco afetado.
3. Confirmar a abrangência departamental de todas as OS e dos avisos; ajustar consultas parametrizadas e visibilidade por perfil, sem liberar dados de outros departamentos por acidente.
4. Reutilizar a regra de antecedência fechada em E1-04, sem reconstruí-la.

### Banco e dados

Sem migração esperada. A leitura de avisos deve aceitar datas ausentes e resultados vazios.

### Testes de aceite previstos

- [ ] Links abrem os destinos fornecidos; a imagem não prejudica a leitura em tela estreita.
- [ ] Administrador e usuário comum recebem apenas a visão aprovada; perfis de colaboradores corretos aparecem nos avisos.
- [ ] O prazo por perfil corresponde ao validado no fechamento da entrega 1.

### Decisões necessárias

- Destinos oficiais, uso da imagem e significado de todas as OS.

### Referências dos pedidos

- [WI-05:3](https://dcadv789.github.io/sigles-pedidos/#WI-05) — Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web. (Pendente).
- [WI-05:4](https://dcadv789.github.io/sigles-pedidos/#WI-05) — Confirmar se a imagem deve ser plano de fundo ou imagem na página. (Definir).
- [WI-06:2](https://dcadv789.github.io/sigles-pedidos/#WI-06) — Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental. (Definir).
- DB03.1 — Confirmar se “todas as OS” significa todos os departamentos ou somente o departamento e seus descendentes.
- DB07.1 — Confirmar que todos os perfis pretendidos como bolsistas/colaboradores entram nessa lista.
- DB08.1 — Link direto para o site do LES.
- DB08.2 — Link direto para MarteWeb.
- DB08.3 — Link direto para Júpiter Web.
- DB09.1 — Aplicar a imagem como plano de fundo, se essa for a intenção literal do pedido.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E5-02"></a>

## E5-02 — Contatos, férias e dados complementares de usuários

**Status:** Planejado — exige definição. **Dependências:** E1-99, E5-01.

### Evidência e diagnóstico

Os pedidos de evolução são genéricos. Contatos e férias já existem; ordenar usuários e configurar os 45 dias pertencem ao fechamento da entrega 1.

### Arquivos verificados

- [src/Controller/UsuarioController.php:957](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L957) — base dev, commit 3ed9a38.
- [src/Entity/Usuario.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Usuario.php#L1) — base dev, commit 3ed9a38.
- [templates/usuario/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/usuario/modal.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/dashboard/dashboard.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Registrar uma lista fechada de campos, consulta e exportação solicitados, distinguindo dado existente de campo novo.
2. Reutilizar os campos atuais e ajustar validação, grupos de serialização e modal conforme a lista definida. Campo realmente novo só entra com migration aditiva após esse fechamento.
3. Revisar os avisos de férias para considerar início/fim e evitar apresentar períodos antigos como futuros.
4. Não repetir as correções e o aceite de E1-01/E1-04.

### Banco e dados

Esquema somente se a lista aprovada exigir campo ausente; preferir nullable para registros antigos, com validação da tela no caso aplicável.

### Testes de aceite previstos

- [ ] Campos aprovados salvam e voltam no cadastro/consulta/exportação correspondentes.
- [ ] Férias antigas, futuras, em andamento e sem datas são apresentadas corretamente.
- [ ] A sessão sem perfil e dados opcionais não derrubam as consultas.

### Decisões necessárias

- Lista objetiva dos campos e saídas; regra temporal do aviso de férias.

### Referências dos pedidos

- [VS-03:2](https://dcadv789.github.io/sigles-pedidos/#VS-03) — Detalhar campos, busca e exportações desejados. (Definir).
- [VS-04:2](https://dcadv789.github.io/sigles-pedidos/#VS-04) — Definir outras mudanças além do cadastro e dos avisos existentes. (Definir).
- [VS-05:1](https://dcadv789.github.io/sigles-pedidos/#VS-05) — Especificar o que falta nas informações de usuários e colaboradores. (Definir).

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E5-03"></a>

## E5-03 — Menu, nome da sala e campos por tipo de reserva

**Status:** Planejado — exige definição. **Dependências:** E4-99.

### Evidência e diagnóstico

O menu está em admin.html.twig; o nome da sala e os campos de discente são exibidos por fluxos específicos de reserva/agenda. Alterar só um rótulo não corrige necessariamente os dois caminhos.

### Arquivos verificados

- [templates/admin.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/admin.html.twig#L1) — base dev, commit 3ed9a38.
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) — base dev, commit 3ed9a38.
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — base dev, commit 3ed9a38.
- [src/Entity/Reserva.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L210) — base dev, commit 3ed9a38.

### Implementação prevista

1. Mover a entrada Períodos para Compras preservando o mesmo código de permissão e URL.
2. Reutilizar o campo Nome da sala nas opções, disponibilidade e eventos; se estiver vazio em registro antigo, definir fallback legível.
3. Exibir nome/e-mail para todos os tipos e aplicar obrigatoriedade somente em Grupo de extensão tanto no JavaScript como no servidor.
4. Manter consultas de reservas antigas e não apagar dados ao mudar um tipo de reserva sem a regra aprovada.

### Banco e dados

Campos já existem; nenhuma migração prevista. Validar e-mail quando informado.

### Testes de aceite previstos

- [ ] Menu continua respeitando a sessão de permissões e o link anterior funciona.
- [ ] Sala com e sem nome é identificável e a seleção mantém o ID correto.
- [ ] Reunião salva sem discente/e-mail; Grupo de extensão sem os dados é recusado no servidor.

### Decisões necessárias

- Fallback do nome abreviado para salas antigas sem Nome.

### Referências dos pedidos

- [WI-17:2](https://dcadv789.github.io/sigles-pedidos/#WI-17) — Usar o nome abreviado na apresentação da sala na agenda. (Pendente).
- [WI-19:1](https://dcadv789.github.io/sigles-pedidos/#WI-19) — Exibir os campos em todos os tipos e exigir preenchimento somente em Grupo de extensão. (Pendente).
- CA04 — Mover Períodos para dentro do menu Compras.
- CA06 — Na agenda, identificar a sala somente pelo nome abreviado.
- AG06 — Exibir nome e e-mail do discente/solicitante em todos os tipos de reserva.
- AG06.1 — Exigir nome e e-mail somente no tipo Grupo de extensão.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E5-04"></a>

## E5-04 — Matriz de acesso dos perfis existentes

**Status:** Planejado — exige definição. **Dependências:** E1-99.

### Evidência e diagnóstico

A ACL usa PerfilModulo e valores na sessão, não voters. O bug de ROLE_ROOT em GAM é conhecido e não faz parte de uma correção automática nesta revisão.

### Arquivos verificados

- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/BaseController.php:31](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/BaseController.php#L31) — base dev, commit 3ed9a38.
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/PerfilModulo.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/PerfilModulo.php#L1) — base dev, commit 3ed9a38.
- [templates/perfil/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/perfil/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Montar uma matriz perfil×módulo×ação com exemplos do negócio antes de editar permissões.
2. Conferir listagem, GET individual, criação, alteração e exclusão; UI oculta não substitui a validação da rota.
3. Ajustar apenas módulos e ações acordados, seguindo BaseController e a sessão atual. Pedir novo login na validação para carregar a nova matriz.
4. Preservar as exceções conhecidas fora do escopo; o acesso externo novo será tratado separadamente em E8-04.

### Banco e dados

Reutilizar Perfil/PerfilModulo/Modulo. Ajustes de configuração somente no teste; sem reestruturação global de ACL.

### Testes de aceite previstos

- [ ] Usuário autorizado executa a ação; outro perfil e acesso direto à rota são recusados.
- [ ] Após novo login, os valores da sessão correspondem à matriz aprovada.
- [ ] O comportamento conhecido de GAM/ROOT não é replicado em tela nova.

### Decisões necessárias

- Matriz e responsáveis por aprovar as permissões.

### Referências dos pedidos

- [VS-06:1](https://dcadv789.github.io/sigles-pedidos/#VS-06) — Definir as mudanças pretendidas por perfil, módulo e ação. (Definir).
- OR02 — Avaliar e evoluir perfis, permissões e regras de acesso.

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
