# Entrega 3 — Planejamento técnico

**Ordens de serviço, orçamentos e aniversários**

**Data:** 16/10/2026. **Etapa:** Fechamento e homologação. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

Este arquivo fecha lacunas e valida a entrega existente sobre a dev atual. Não instrui a voltar a uma tag antiga nem declara uma nova publicação em produção.

## Ordem de execução

1. [E3-01 — Persistência dos seguidores da OS](#E3-01)
2. [E3-02 — Regra do responsável e das subcategorias](#E3-02)
3. [E3-03 — Ordenação inicial e resumo de responsáveis](#E3-03)
4. [E3-04 — Orçamentos, anexos e cache do JavaScript](#E3-04)
5. [E3-99 — Homologação e preparação de publicação da entrega 3](#E3-99)

<a id="E3-01"></a>

## E3-01 — Persistência dos seguidores da OS

**Status:** Planejado. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

A edição só chama setSeguidores quando a lista não está vazia. O modal também carrega seguidores padrão em uma requisição paralela à leitura da OS. Esses são caminhos concretos para testar remoção total e sobrescrita por corrida de respostas.

### Arquivos verificados

- [src/Controller/OrdemServicoController.php:476](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L476) — base dev, commit 3ed9a38.
- [src/Repository/OrdemServicoRepository.php:36](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/OrdemServicoRepository.php#L36) — base dev, commit 3ed9a38.
- [src/Entity/SeguidorOs.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/SeguidorOs.php#L1) — base dev, commit 3ed9a38.
- [templates/ordem_servico/index.html.twig:936](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L936) — base dev, commit 3ed9a38.

### Implementação prevista

1. Carregar seguidores padrão apenas na criação de OS; na edição, a resposta da própria OS deve prevalecer, inclusive quando a lista está vazia.
2. Distinguir lista explicitamente vazia de um payload em que o campo não foi enviado por estar bloqueado. Permitir limpar todos quando a edição é autorizada.
3. Na leitura/serialização, retornar somente seguidores ativos; na gravação, preservar os vínculos/histórico previstos pelo repository.
4. Gravar o histórico da alteração uma única vez e manter a regra de campos bloqueados por estágio.

### Banco e dados

Sem nova tabela. Atualizar apenas vínculos da OS em edição, validando usuários e permissão GOS.

### Testes de aceite previstos

- [ ] Salvar A+B, trocar para C e reabrir mantém só C.
- [ ] Remover todos e reabrir mantém vazio.
- [ ] Simular resposta lenta de Configurações não repõe seguidores padrão na edição.
- [ ] OS encerrada ou usuário sem permissão não perde seus seguidores por payload incompleto.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — Validar persistência dos seguidores e definir os relatórios gerenciais restantes. (Validar).
- [WI-10:2](https://dcadv789.github.io/sigles-pedidos/#WI-10) — Verificar se os seguidores escolhidos permanecem após salvar e reabrir. (Validar).
- OS02 — Preservar os seguidores selecionados ao salvar e reabrir a OS.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E3-02"></a>

## E3-02 — Regra do responsável e das subcategorias

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

A criação prioriza a categoria e permite trocar o usuário. CategoriaOsController propaga o responsável às subcategorias; isso não equivale a responsáveis independentes.

### Arquivos verificados

- [src/Controller/OrdemServicoController.php:187](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L187) — base dev, commit 3ed9a38.
- [src/Controller/CategoriaOsController.php:224](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L224) — base dev, commit 3ed9a38.
- [src/Controller/SubcategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SubcategoriaOsController.php#L1) — base dev, commit 3ed9a38.
- [templates/ordem_servico/modal.html.twig:135](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/modal.html.twig#L135) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar a ordem de precedência entre solicitante, subcategoria, categoria e configuração geral; mostrar essa regra na dica do formulário.
2. Se houver independência da subcategoria, aproveitar responsavelPadrao e impedir que a atualização da categoria sobrescreva um valor específico sem a regra acordada.
3. Validar responsáveis ativos e pertencimento permitido; preservar a escolha explícita ao alternar categoria e abrir a edição.

### Banco e dados

Campos já existem. Não atualizar todas as OS antigas ao mudar o padrão de uma categoria.

### Testes de aceite previstos

- [ ] Criar e editar mostram o responsável da regra aprovada e preservam a escolha explícita.
- [ ] Alterar categoria não substitui responsáveis de OS existentes.
- [ ] Subcategoria com e sem responsável específico obedece à precedência acordada.

### Decisões necessárias

- Precedência válida e se a subcategoria tem responsável independente ou herda da categoria.

### Referências dos pedidos

- [WI-10:3](https://dcadv789.github.io/sigles-pedidos/#WI-10) — Confirmar a regra do responsável inicial solicitada pelo cliente. (Definir).
- [WI-12:2](https://dcadv789.github.io/sigles-pedidos/#WI-12) — Definir se a subcategoria terá responsável próprio; hoje herda da categoria. (Definir).
- OS01.1 — Preencher o responsável com o próprio solicitante, como escrito no documento.
- OS06.1 — Ter responsáveis independentes na categoria e na subcategoria, se essa for a intenção do pedido.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E3-03"></a>

## E3-03 — Ordenação inicial e resumo de responsáveis

**Status:** Planejado. **Dependências:** E3-02.

### Evidência e diagnóstico

A DataTable inicia ordenada pela primeira coluna; o pedido pede Criado em decrescente. Os responsáveis estão nas categorias, mas não há o resumo por categoria em Configurações.

### Arquivos verificados

- [templates/ordem_servico/index.html.twig:788](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L788) — base dev, commit 3ed9a38.
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) — base dev, commit 3ed9a38.
- [templates/configuracoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/configuracoes/index.html.twig#L1) — base dev, commit 3ed9a38.
- [src/Controller/CategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Definir a ordem inicial pela coluna Criado em em valor temporal e um desempate estável por ID; recalcular a numeração visual depois da ordenação.
2. Conferir o efeito do estado de tabela salvo para não preservar uma ordem antiga involuntariamente.
3. Apresentar em Configurações a relação de categorias e responsáveis reutilizando a mesma fonte, sem gravar uma segunda configuração concorrente.

### Banco e dados

Sem migração prevista. Resumo somente para o perfil com as permissões necessárias; alterações continuam na fonte única.

### Testes de aceite previstos

- [ ] Abertura limpa apresenta OS mais recente primeiro, inclusive entre meses/anos diferentes.
- [ ] Ocultar colunas e voltar não quebra a ordenação nem a sequência visual.
- [ ] Resumo de responsáveis reflete a mesma regra das categorias/subcategorias.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — Validar persistência dos seguidores e definir os relatórios gerenciais restantes. (Validar).
- OS07 — Abrir a listagem ordenada pela data de criação, da mais recente para a mais antiga.
- CA07.1 — Apresentar os responsáveis de todas as categorias juntos na tela Configurações, um abaixo do outro.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E3-04"></a>

## E3-04 — Orçamentos, anexos e cache do JavaScript

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

O orçamento já foi integrado à criação da OS. O dashboard.js é incluído sem versão explícita na URL, e há registro de pendência de cache no acompanhamento da dev.

### Arquivos verificados

- [src/Controller/OrcamentoController.php:72](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L72) — base dev, commit 3ed9a38.
- [src/Utils/File.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Utils/File.php#L1) — base dev, commit 3ed9a38.
- [templates/orcamento/orcamento.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/orcamento/orcamento.js#L1) — base dev, commit 3ed9a38.
- [templates/dashboard/index.html.twig:183](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L183) — base dev, commit 3ed9a38.
- [templates/dashboard/dashboard.js:445](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L445) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar a lista real de formatos e testar anexos múltiplos, prazo vazio e fornecedor criado no modal da OS. Rejeitar arquivos inválidos com mensagem, sem deixar orçamento parcial.
2. Aplicar uma estratégia de versão dos scripts próprios afetados pelo release, compatível com asset/Twig existente; não modificar assets/libs.
3. Testar cache aquecido para comprovar que a regra de aniversário nova chega ao navegador sem limpeza manual.

### Banco e dados

Sem migração prevista. Validar arquivos de teste; preservar anexos existentes e não enviar e-mails reais durante homologação.

### Testes de aceite previstos

- [ ] OS nova salva orçamento e anexos válidos e não cria registros incompletos após erro.
- [ ] O usuário aniversariante recebe o recado; outro usuário só vê a lista.
- [ ] Navegador que abriu a versão anterior carrega o script novo após o deploy.

### Decisões necessárias

- Lista final de formatos aceitos; visualizadores adicionais permanecem fora do escopo ordinário.

### Referências dos pedidos

- OS03.1 — Garantir aceitação de qualquer formato de documento, sem uma lista definida.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E3-99"></a>

## E3-99 — Homologação e preparação de publicação da entrega 3

**Status:** Planejado. **Dependências:** E3-01, E3-02, E3-03, E3-04, E2-99.

### Evidência e diagnóstico

A v1.3.0-beta está em homologação; não deve ser declarada em produção por existir na dev.

### Arquivos verificados

- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) — base dev, commit 3ed9a38.
- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) — base dev, commit 3ed9a38.
- [.github/workflows/deploy-prod.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-prod.yml#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Validar a matriz de estágios, datas previstas, reabertura, exclusão lógica, histórico e edição de cada campo por estágio.
2. Confirmar /login e /js/routing, preferência de colunas e cenários de permissão.
3. Preparar notas e evidências da versão cumulativa. O plano de publicação deve respeitar a restrição atual de não escrever no banco de produção; o workflow de produção executa migrations e não pode ser acionado sob essa restrição.

### Banco e dados

Escrita somente no teste. Publicação do sistema não é executada nesta fase de planejamento.

### Testes de aceite previstos

- [ ] Cada correção tem evidência no teste e histórico coerente.
- [ ] Plano de versão preserva as correções 1 e 2 e identifica os passos de banco/publicação que exigem outra etapa operacional.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [VS-01:3](https://dcadv789.github.io/sigles-pedidos/#VS-01) — Ordens de serviço e aniversariantes. (Homologação).
- [VS-02:1](https://dcadv789.github.io/sigles-pedidos/#VS-02) — Demais usuários continuam vendo os aniversariantes na lista do mês. (Homologação).
- [VS-10:1](https://dcadv789.github.io/sigles-pedidos/#VS-10) — Responsável, orçamento na criação, anexos, filtros, estágios e histórico. (Homologação).
- [WI-10:1](https://dcadv789.github.io/sigles-pedidos/#WI-10) — Responsável sugerido pela categoria e possibilidade de troca antes de salvar. (Homologação).
- [WI-11:1](https://dcadv789.github.io/sigles-pedidos/#WI-11) — Orçamento com anexo já na criação e lista ampliada de formatos suportados. (Homologação).
- [WI-12:1](https://dcadv789.github.io/sigles-pedidos/#WI-12) — Filtro Aberto por e responsável por categoria. (Homologação).

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
