# Entrega 3 — Ordens de serviço, orçamentos e aniversários

**Atualizado em 21/10/2026 · Publicado em produção — v1.3.0; complementos gerais de revisão permanecem individualizados.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-2: entrega anterior aceita em homologação.
- Situação: Publicado em produção — v1.3.0; complementos gerais de revisão permanecem individualizados.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E3-01"></a>

## E3-01 — Persistência dos seguidores da OS

**Situação:** Correções/publicação registradas na Entrega 3 — v1.3.0 em produção.

O diagnóstico de 16/10 é histórico. Publicação v1.3.0 e correções de seguidores/responsáveis comprovadas no STATUS_DEPLOY; os cenários adicionais de revisão não devem ser marcados aceitos sem evidência.

- Entrada: FECHO-2, payload de criação/edição e regra dos campos por estágio.
- Saída: Seguidores persistidos de forma determinística, inclusive remoção total.
- Limite: Não mudar responsáveis nem os destinatários de e-mails; defaults só na criação.

### Funções, correções ou próximos passos

- Traçar as duas requisições paralelas do modal e separar modo de criação do modo de edição. A leitura da OS editada é a única autoridade para seguidores.
- Definir o contrato do payload: campo omitido preserva; lista presente e vazia limpa; IDs presentes são validados e deduplicados.
- Se o serializador do formulário omitir o multiselect vazio, propor marcador explícito de intenção no POST da mesma rota, compatível com chamadas antigas. A lista ausente não pode significar limpar seguidores.
- No repository, validar todos os usuários antes de inativar os vínculos anteriores; não ignorar ID inválido depois de limpar a lista.
- Persistir somente a OS em edição e os vínculos correspondentes no mesmo fluxo; serializar apenas vínculos ativos e preservar histórico.
- Ensaiar respostas fora de ordem, reabertura do modal e submissão sem o campo por bloqueio de estágio.

### Evidências registradas

- Entrega 3 publicada em 20/10/2026, código d4d3734f15dbf86e1427a693fe9008f8a0af7f3b.
- Responsáveis por categoria definidos conforme Daniel; seguidores podem ser removidos integralmente sem FK nula.
- Notificação automática ao solicitante não foi incluída silenciosamente; manter a regra de destinatários e a pendência específica de e-mail.

### Banco e reversão

Sem nova tabela. Atualizar apenas vínculos da OS em edição, validando usuários e permissão GOS.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS com A+B | Salvar C, reabrir, depois remover todos | Primeiro só C, depois nenhum seguidor. |
| Lista com ID inválido e OS com seguidores válidos | Submeter alteração | Erro legível, lista antiga preservada, sem limpeza parcial. |
| Rede lenta para padrões | Abrir edição e aguardar as duas respostas | Padrões não sobrescrevem o salvo. |

### Rastreio dos pedidos

- VS-10:2 — Persistência de seguidores corrigida na Entrega 3; ordenação/resumo e relatórios gerenciais restantes continuam individualizados para revisão. · Validar.
- WI-10:2 — Seguidores escolhidos preservados; remoção integral e lista vazia corrigidas e testadas na publicação da Entrega 3. · Entregue.

### Pendências detalhadas

- OS02 — Preservar os seguidores selecionados ao salvar e reabrir a OS. **Entrega 3 — produção**: persistência de seguidores e remoção integral corrigidas e testadas na publicação v1.3.0.

### Documentos originais (rastreio preservado)

**DI22 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 58**

> Está com erro também no cadastro de seguidores, seleciono o nome desejado e ao reabrir ele corrige mantendo somente André e Iraides como seguidores e excluindo o nome selecionado.

### Referências de código (snapshot da leitura)

- [src/Controller/OrdemServicoController.php:476](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L476) · 3ed9a38
- [src/Repository/OrdemServicoRepository.php:36](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/OrdemServicoRepository.php#L36) · 3ed9a38
- [src/Entity/SeguidorOs.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/SeguidorOs.php#L1) · 3ed9a38
- [templates/ordem_servico/index.html.twig:936](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L936) · 3ed9a38

<a id="E3-02"></a>

## E3-02 — Regra do responsável e das subcategorias

**Situação:** Correções/publicação registradas na Entrega 3 — v1.3.0 em produção.

O diagnóstico de 16/10 é histórico. Publicação v1.3.0 e correções de seguidores/responsáveis comprovadas no STATUS_DEPLOY; os cenários adicionais de revisão não devem ser marcados aceitos sem evidência.

- Entrada: D06 sobre precedência e independência da subcategoria.
- Saída: Uma regra documentada de responsável, aplicada no formulário e servidor.
- Limite: Padrão novo não altera OS históricas; resumo em Configurações apenas lê a regra.

### Funções, correções ou próximos passos

- Confrontar o pedido de responsável igual ao solicitante com os padrões posteriores por categoria. Registrar D06, sem tratar um texto como autorização para sobrescrever o outro.
- Aplicar a precedência escolhida na criação e a preservação da escolha explícita na edição; trocar categoria não deve trocar o responsável silenciosamente.
- Distinguir herança de responsável específico da subcategoria. Antes de parar a propagação atual, avaliar se o dado existente permite diferenciar herança de escolha manual.
- Se o modelo não distingue essas situações, delimitar uma migration aditiva e um backfill conservador no teste; não declarar que os campos existentes resolvem toda a regra.
- Validar ID, atividade, escopo e permissão antes de gravar e entregar a mesma leitura a E3-03.

### Evidências registradas

- Entrega 3 publicada em 20/10/2026, código d4d3734f15dbf86e1427a693fe9008f8a0af7f3b.
- Responsáveis por categoria definidos conforme Daniel; seguidores podem ser removidos integralmente sem FK nula.
- Notificação automática ao solicitante não foi incluída silenciosamente; manter a regra de destinatários e a pendência específica de e-mail.

### Banco e reversão

Campos de responsável já existem. Se for necessário distinguir herança de escolha específica e o dado atual não permitir, avaliar migration aditiva e backfill conservador após D06. Não propagar padrões para OS históricas.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Categoria A, subcategoria B e solicitante C | Criar sem escolha e com escolha explícita | Resultado exatamente D06 e escolha explícita preservada. |
| Subcategoria com responsável próprio | Alterar padrão da categoria | Nenhuma substituição indevida; OS antigas intactas. |

### Rastreio dos pedidos

- WI-10:3 — Responsáveis por categoria definidos conforme Daniel na publicação, preservando os demais vínculos e a herança das subcategorias. · Entregue.
- WI-12:2 — Definir se a subcategoria terá responsável próprio; hoje herda da categoria. · Definir.

### Pendências detalhadas

- OS01.1 — Preencher o responsável com o próprio solicitante, como escrito no documento. **Definir** — a regra implementada sugere o responsável da categoria e permite trocá-lo. Confirmar qual regra deve prevalecer.
- OS06.1 — Ter responsáveis independentes na categoria e na subcategoria, se essa for a intenção do pedido. **Definir** — a subcategoria herda o responsável da categoria na implementação atual.

### Documentos originais (rastreio preservado)

**DI21 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 57**

> Ao cadastrar nova ordem de serviço, o nome do responsável está buscando um nome aleatório, enquanto deveria constar o nome do solicitante. Essa opção “responsável” só abre para alteração após salvar e reabrir.

**DI26 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 63**

> Poder indicar um responsável por cada categoria, independente da Categoria/Subcategoria

### Referências de código (snapshot da leitura)

- [src/Controller/OrdemServicoController.php:187](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L187) · 3ed9a38
- [src/Controller/CategoriaOsController.php:224](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L224) · 3ed9a38
- [src/Controller/SubcategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SubcategoriaOsController.php#L1) · 3ed9a38
- [templates/ordem_servico/modal.html.twig:135](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/modal.html.twig#L135) · 3ed9a38
- [src/Entity/SubcategoriaOs.php:129](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/SubcategoriaOs.php#L129) · 3ed9a38

<a id="E3-03"></a>

## E3-03 — Ordenação inicial e resumo de responsáveis

**Situação:** Planejado — execução não iniciada.

A DataTable inicia ordenada pela primeira coluna; o pedido pede Criado em decrescente. Os responsáveis estão nas categorias, mas não há o resumo por categoria em Configurações.

- Entrada: D06 e coluna temporal de criação identificada.
- Saída: OS recentes primeiro e resumo de responsáveis em Configurações, sem fonte duplicada.
- Limite: Não criar outra tabela de responsáveis nem substituir preferências explícitas sem critério.

### Funções, correções ou próximos passos

- Mapear a coluna Criado em e o ID real; usar valor temporal para sort e ID como desempate, sem usar a numeração visual como chave.
- Diferenciar padrão de primeira abertura e preferência já salva. Se a estrutura mudou, versionar só o estado da tabela afetada.
- Recalcular numeração visual em ordenação/filtro/página e manter ações ligadas ao ID da OS.
- Ler categorias/subcategorias e regra D06 no resumo de Configurações, respeitando GCONF e a permissão de consulta necessária; manter edição no cadastro de origem.

### Banco e reversão

Sem migração prevista. Resumo somente para o perfil com as permissões necessárias; alterações continuam na fonte única.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS em 31/12 e 01/01 com mesma hora | Abrir em sessão limpa e ordenar | Mais recente primeiro, desempate estável e botões corretos. |
| Categoria alterada no cadastro de origem | Reabrir Configurações | Resumo atualizado sem segunda gravação. |

### Rastreio dos pedidos

- VS-10:2 — Persistência de seguidores corrigida na Entrega 3; ordenação/resumo e relatórios gerenciais restantes continuam individualizados para revisão. · Validar.

### Pendências detalhadas

- OS07 — Abrir a listagem ordenada pela data de criação, da mais recente para a mais antiga. **Pendente** — a ordenação inicial não está configurada para Criado em decrescente.
- CA07.1 — Apresentar os responsáveis de todas as categorias juntos na tela Configurações, um abaixo do outro. **Pendente** — o cadastro está nas categorias; a tela Configurações mantém apenas o responsável geral da OS.

### Documentos originais (rastreio preservado)

**DI27 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 64**

> Na tela inicial, as datas de criação devem aparecer na ordem da mais atual para as mais antigas.

**DI50 — Documento inicial SINGLES — CADASTRO / 2. Configurações — parágrafo 122**

> Inserir responsáveis por cada categoria de ordem de serviço, um embaixo do outro, da forma que está.

### Referências de código (snapshot da leitura)

- [templates/ordem_servico/index.html.twig:788](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L788) · 3ed9a38
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) · 3ed9a38
- [templates/configuracoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/configuracoes/index.html.twig#L1) · 3ed9a38
- [src/Controller/CategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L1) · 3ed9a38

**Dependências:** E3-02.

<a id="E3-04"></a>

## E3-04 — Orçamentos, anexos e cache do JavaScript

**Situação:** Planejado — execução não iniciada.

O orçamento já foi integrado à criação da OS. O dashboard.js é incluído sem versão explícita na URL, e há registro de pendência de cache no acompanhamento da dev.

- Entrada: D07 de anexos e pontos de persistência de OS/orçamento/arquivo.
- Saída: Orçamento com anexos válidos e atualização do JavaScript sem limpeza manual.
- Limite: Visualizadores novos e bibliotecas de terceiros não entram nesta correção.

### Funções, correções ou próximos passos

- Mapear criação da OS com orçamento, fornecedores/tags do modal e anexos: registrar onde cada flush e gravação no filesystem ocorre.
- Validar formato, tamanho e todos os arquivos antes de concluir o orçamento. Usar área temporária e limpeza compensatória para arquivos novos se banco ou movimentação falhar; não apagar anexos anteriores.
- Tratar prazo vazio e fornecedor recém-criado sem estado parcial; manter código real GOÇ e as permissões específicas.
- Versionar os scripts próprios tocados com um identificador de release já compatível com Twig/asset, sem mudar assets/libs.
- Testar a regra de aniversário com cache aquecido e registrar o caminho de publicação cumulativa em FECHO-3.

### Banco e reversão

Sem migração prevista. Validar arquivos de teste; preservar anexos existentes e não enviar e-mails reais durante homologação.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Dois anexos válidos e um proibido | Criar OS com orçamento | Erro sem orçamento incompleto ou arquivo novo abandonado; regra para a OS descrita. |
| Banco falha após upload temporário | Simular no teste | Arquivos temporários novos compensados, anexos antigos preservados. |
| Navegador com versão anterior em cache | Abrir nova homologação | Carrega a versão nova e só aniversariante recebe o recado. |

### Pendências detalhadas

- OS03.1 — Garantir aceitação de qualquer formato de documento, sem uma lista definida. **Definir** — existe lista de formatos suportados; confirmar os arquivos efetivamente necessários.

### Documentos originais (rastreio preservado)

**DI23 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 59**

> A aba “orçamento” não está aceitando todos os tipos de documentos. (Débora 13/03)

**DI24 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 61**

> Permitir anexar orçamento ao criar uma  nova ordem de serviço (só permite criar a ordem, é necessário fechar e reabrir para inserir)

### Referências de código (snapshot da leitura)

- [src/Controller/OrcamentoController.php:72](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L72) · 3ed9a38
- [src/Utils/File.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Utils/File.php#L1) · 3ed9a38
- [templates/orcamento/orcamento.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/orcamento/orcamento.js#L1) · 3ed9a38
- [templates/dashboard/index.html.twig:183](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L183) · 3ed9a38
- [templates/dashboard/dashboard.js:445](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L445) · 3ed9a38

<a id="E3-99"></a>

## E3-99 — Homologação e preparação de publicação da entrega 3

**Situação:** Correções/publicação registradas na Entrega 3 — v1.3.0 em produção.

O diagnóstico de 16/10 é histórico. Publicação v1.3.0 e correções de seguidores/responsáveis comprovadas no STATUS_DEPLOY; os cenários adicionais de revisão não devem ser marcados aceitos sem evidência.

- Entrada: E3-01 a E3-04 aceitos e D06/D07 resolvidas.
- Saída: FECHO-3, evidências da v1.3 e base cumulativa para reconstruir a PR.
- Limite: O workflow de produção executa migrations; não acioná-lo sob a restrição atual.

### Funções, correções ou próximos passos

- Validar a matriz real de OS por estágio e ação: editar cada campo, responsável, seguidores, orçamento, previsto, reabrir, excluir e consultar histórico.
- Reexecutar filtros por solicitante, datas e preferência de colunas; conferir login e /js/routing.
- Conferir as funcionalidades preservadas de 1 e 2 e registrar o commit cumulativo de teste.
- Separar aceite de homologação, autorização operacional futura e publicação. Nenhuma versão de produção pode ser declarada por existir em dev.

### Evidências registradas

- Entrega 3 publicada em 20/10/2026, código d4d3734f15dbf86e1427a693fe9008f8a0af7f3b.
- Responsáveis por categoria definidos conforme Daniel; seguidores podem ser removidos integralmente sem FK nula.
- Notificação automática ao solicitante não foi incluída silenciosamente; manter a regra de destinatários e a pendência específica de e-mail.

### Banco e reversão

Escrita somente no teste. Publicação do sistema não é executada nesta fase de planejamento.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS em cada estágio com usuário autorizado e sem acesso | Executar a matriz de ações | Campos e respostas coerentes e histórico sem duplicação. |

### Rastreio dos pedidos

- VS-01:3 — Ordens de serviço e aniversariantes. · Entregue.
- VS-02:1 — Demais usuários continuam vendo os aniversariantes na lista do mês. · Entregue.
- VS-10:1 — Responsável, orçamento na criação, anexos, filtros, estágios e histórico. · Entregue.
- WI-10:1 — Responsável sugerido pela categoria e possibilidade de troca antes de salvar. · Entregue.
- WI-11:1 — Orçamento com anexo já na criação e lista ampliada de formatos suportados. · Entregue.
- WI-12:1 — Filtro Aberto por e responsável por categoria. · Entregue.

### Documentos originais (rastreio preservado)

**DI25 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 62**

> Poder filtrar por solicitante

**RV23 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar e aprimorar as funcionalidades relacionadas às Ordens de Serviço;

### Referências de código (snapshot da leitura)

- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) · 3ed9a38
- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) · 3ed9a38
- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) · 3ed9a38
- [.github/workflows/deploy-prod.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-prod.yml#L1) · 3ed9a38

**Dependências:** E3-01, E3-02, E3-03, E3-04.

## FECHO-3 — Fechamento

**Publicado em produção — v1.3.0; complementos gerais de revisão permanecem individualizados.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
