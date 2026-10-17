# Entrega 3 — Planejamento técnico revisado

**Ordens de serviço, orçamentos e aniversários**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-3.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-2: entrega anterior aceita em homologação.
- **Saída:** FECHO-3, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Fechamento e homologação. Aditivos continuam fora.

## Ordem interna obrigatória

11. [E3-01 — Persistência dos seguidores da OS](#E3-01)
12. [E3-02 — Regra do responsável e das subcategorias](#E3-02)
13. [E3-03 — Ordenação inicial e resumo de responsáveis](#E3-03)
14. [E3-04 — Orçamentos, anexos e cache do JavaScript](#E3-04)
15. [E3-99 — Homologação e preparação de publicação da entrega 3](#E3-99)

Depois do último item, conferir **FECHO-3** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E3-01"></a>

## E3-01 — Persistência dos seguidores da OS

**Ordem global:** 11/42. **Executar após:** FECHO-2. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** FECHO-2, payload de criação/edição e regra dos campos por estágio.
- **Saída esperada:** Seguidores persistidos de forma determinística, inclusive remoção total.
- **Limite do item:** Não mudar responsáveis nem os destinatários de e-mails; defaults só na criação.

### Diagnóstico conferido no código

A edição só chama setSeguidores quando a lista não está vazia. O modal também carrega seguidores padrão em uma requisição paralela à leitura da OS. Esses são caminhos concretos para testar remoção total e sobrescrita por corrida de respostas.

### Referência literal dos documentos originais

**Referência original DI22 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 58**

> Está com erro também no cadastro de seguidores, seleciono o nome desejado e ao reabrir ele corrige mantendo somente André e Iraides como seguidores e excluindo o nome selecionado.

### Arquivos e pontos verificados

- [src/Controller/OrdemServicoController.php:476](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L476) — dev 3ed9a38.
- [src/Repository/OrdemServicoRepository.php:36](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/OrdemServicoRepository.php#L36) — dev 3ed9a38.
- [src/Entity/SeguidorOs.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/SeguidorOs.php#L1) — dev 3ed9a38.
- [templates/ordem_servico/index.html.twig:936](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L936) — dev 3ed9a38.

### Roteiro de implementação

1. Traçar as duas requisições paralelas do modal e separar modo de criação do modo de edição. A leitura da OS editada é a única autoridade para seguidores.
2. Definir o contrato do payload: campo omitido preserva; lista presente e vazia limpa; IDs presentes são validados e deduplicados.
3. Se o serializador do formulário omitir o multiselect vazio, propor marcador explícito de intenção no POST da mesma rota, compatível com chamadas antigas. A lista ausente não pode significar limpar seguidores.
4. No repository, validar todos os usuários antes de inativar os vínculos anteriores; não ignorar ID inválido depois de limpar a lista.
5. Persistir somente a OS em edição e os vínculos correspondentes no mesmo fluxo; serializar apenas vínculos ativos e preservar histórico.
6. Ensaiar respostas fora de ordem, reabertura do modal e submissão sem o campo por bloqueio de estágio.

### Banco, arquivos e reversão

Sem nova tabela. Atualizar apenas vínculos da OS em edição, validando usuários e permissão GOS.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

Nenhuma nova decisão de negócio específica; manter os contratos anteriores e reproduzir o caso antes de alterar código.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS com A+B | Salvar C, reabrir, depois remover todos | Primeiro só C, depois nenhum seguidor. |
| Lista com ID inválido e OS com seguidores válidos | Submeter alteração | Erro legível, lista antiga preservada, sem limpeza parcial. |
| Rede lenta para padrões | Abrir edição e aguardar as duas respostas | Padrões não sobrescrevem o salvo. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — **parcela: Persistência de seguidores**. Validar persistência dos seguidores e definir os relatórios gerenciais restantes. · status atual: Validar.
- [Quadro WI-10:2](https://dcadv789.github.io/sigles-pedidos/#WI-10) — **execução: Persistência dos seguidores da OS**. Verificar se os seguidores escolhidos permanecem após salvar e reabrir. · status atual: Validar.
- Pendência detalhada OS02 — Preservar os seguidores selecionados ao salvar e reabrir a OS.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E3-02"></a>

## E3-02 — Regra do responsável e das subcategorias

**Ordem global:** 12/42. **Executar após:** E3-01. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** D06 sobre precedência e independência da subcategoria.
- **Saída esperada:** Uma regra documentada de responsável, aplicada no formulário e servidor.
- **Limite do item:** Padrão novo não altera OS históricas; resumo em Configurações apenas lê a regra.

### Diagnóstico conferido no código

A criação prioriza a categoria e permite trocar o usuário. CategoriaOsController propaga o responsável às subcategorias; isso não equivale a responsáveis independentes.

### Referência literal dos documentos originais

**Referência original DI21 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 57**

> Ao cadastrar nova ordem de serviço, o nome do responsável está buscando um nome aleatório, enquanto deveria constar o nome do solicitante. Essa opção “responsável” só abre para alteração após salvar e reabrir.

**Referência original DI26 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 63**

> Poder indicar um responsável por cada categoria, independente da Categoria/Subcategoria

### Arquivos e pontos verificados

- [src/Controller/OrdemServicoController.php:187](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L187) — dev 3ed9a38.
- [src/Controller/CategoriaOsController.php:224](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L224) — dev 3ed9a38.
- [src/Controller/SubcategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SubcategoriaOsController.php#L1) — dev 3ed9a38.
- [templates/ordem_servico/modal.html.twig:135](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/modal.html.twig#L135) — dev 3ed9a38.
- [src/Entity/SubcategoriaOs.php:129](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/SubcategoriaOs.php#L129) — dev 3ed9a38.

### Roteiro de implementação

1. Confrontar o pedido de responsável igual ao solicitante com os padrões posteriores por categoria. Registrar D06, sem tratar um texto como autorização para sobrescrever o outro.
2. Aplicar a precedência escolhida na criação e a preservação da escolha explícita na edição; trocar categoria não deve trocar o responsável silenciosamente.
3. Distinguir herança de responsável específico da subcategoria. Antes de parar a propagação atual, avaliar se o dado existente permite diferenciar herança de escolha manual.
4. Se o modelo não distingue essas situações, delimitar uma migration aditiva e um backfill conservador no teste; não declarar que os campos existentes resolvem toda a regra.
5. Validar ID, atividade, escopo e permissão antes de gravar e entregar a mesma leitura a E3-03.

### Banco, arquivos e reversão

Campos de responsável já existem. Se for necessário distinguir herança de escolha específica e o dado atual não permitir, avaliar migration aditiva e backfill conservador após D06. Não propagar padrões para OS históricas.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D06 — Responsável da OS e herança](INTEGRACAO_E_DECISOES.md#D06) · dono E3-02. Definir neste item. Solicitante versus categoria/subcategoria/configuração; independência e como distinguir herança de escolha específica.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Categoria A, subcategoria B e solicitante C | Criar sem escolha e com escolha explícita | Resultado exatamente D06 e escolha explícita preservada. |
| Subcategoria com responsável próprio | Alterar padrão da categoria | Nenhuma substituição indevida; OS antigas intactas. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-10:3](https://dcadv789.github.io/sigles-pedidos/#WI-10) — **execução: Regra do responsável e das subcategorias**. Confirmar a regra do responsável inicial solicitada pelo cliente. · status atual: Definir.
- [Quadro WI-12:2](https://dcadv789.github.io/sigles-pedidos/#WI-12) — **execução: Regra do responsável e das subcategorias**. Definir se a subcategoria terá responsável próprio; hoje herda da categoria. · status atual: Definir.
- Pendência detalhada OS01.1 — Preencher o responsável com o próprio solicitante, como escrito no documento.
- Pendência detalhada OS06.1 — Ter responsáveis independentes na categoria e na subcategoria, se essa for a intenção do pedido.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E3-03"></a>

## E3-03 — Ordenação inicial e resumo de responsáveis

**Ordem global:** 13/42. **Executar após:** E3-02. **Dependências técnicas:** [E3-02](entrega-03.md#E3-02).

### Entrada, saída e limite

- **Entrada:** D06 e coluna temporal de criação identificada.
- **Saída esperada:** OS recentes primeiro e resumo de responsáveis em Configurações, sem fonte duplicada.
- **Limite do item:** Não criar outra tabela de responsáveis nem substituir preferências explícitas sem critério.

### Diagnóstico conferido no código

A DataTable inicia ordenada pela primeira coluna; o pedido pede Criado em decrescente. Os responsáveis estão nas categorias, mas não há o resumo por categoria em Configurações.

### Referência literal dos documentos originais

**Referência original DI27 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 64**

> Na tela inicial, as datas de criação devem aparecer na ordem da mais atual para as mais antigas.

**Referência original DI50 — Documento inicial SINGLES — CADASTRO / 2. Configurações — parágrafo 122**

> Inserir responsáveis por cada categoria de ordem de serviço, um embaixo do outro, da forma que está.

### Arquivos e pontos verificados

- [templates/ordem_servico/index.html.twig:788](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/ordem_servico/index.html.twig#L788) — dev 3ed9a38.
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) — dev 3ed9a38.
- [templates/configuracoes/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/configuracoes/index.html.twig#L1) — dev 3ed9a38.
- [src/Controller/CategoriaOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CategoriaOsController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Mapear a coluna Criado em e o ID real; usar valor temporal para sort e ID como desempate, sem usar a numeração visual como chave.
2. Diferenciar padrão de primeira abertura e preferência já salva. Se a estrutura mudou, versionar só o estado da tabela afetada.
3. Recalcular numeração visual em ordenação/filtro/página e manter ações ligadas ao ID da OS.
4. Ler categorias/subcategorias e regra D06 no resumo de Configurações, respeitando GCONF e a permissão de consulta necessária; manter edição no cadastro de origem.

### Banco, arquivos e reversão

Sem migração prevista. Resumo somente para o perfil com as permissões necessárias; alterações continuam na fonte única.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D06 — Responsável da OS e herança](INTEGRACAO_E_DECISOES.md#D06) · dono E3-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Solicitante versus categoria/subcategoria/configuração; independência e como distinguir herança de escolha específica.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS em 31/12 e 01/01 com mesma hora | Abrir em sessão limpa e ordenar | Mais recente primeiro, desempate estável e botões corretos. |
| Categoria alterada no cadastro de origem | Reabrir Configurações | Resumo atualizado sem segunda gravação. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-10:2](https://dcadv789.github.io/sigles-pedidos/#VS-10) — **parcela: Ordenação e resumo de responsáveis**. Validar persistência dos seguidores e definir os relatórios gerenciais restantes. · status atual: Validar.
- Pendência detalhada OS07 — Abrir a listagem ordenada pela data de criação, da mais recente para a mais antiga.
- Pendência detalhada CA07.1 — Apresentar os responsáveis de todas as categorias juntos na tela Configurações, um abaixo do outro.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E3-04"></a>

## E3-04 — Orçamentos, anexos e cache do JavaScript

**Ordem global:** 14/42. **Executar após:** E3-03. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** D07 de anexos e pontos de persistência de OS/orçamento/arquivo.
- **Saída esperada:** Orçamento com anexos válidos e atualização do JavaScript sem limpeza manual.
- **Limite do item:** Visualizadores novos e bibliotecas de terceiros não entram nesta correção.

### Diagnóstico conferido no código

O orçamento já foi integrado à criação da OS. O dashboard.js é incluído sem versão explícita na URL, e há registro de pendência de cache no acompanhamento da dev.

### Referência literal dos documentos originais

**Referência original DI23 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 59**

> A aba “orçamento” não está aceitando todos os tipos de documentos. (Débora 13/03)

**Referência original DI24 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 61**

> Permitir anexar orçamento ao criar uma  nova ordem de serviço (só permite criar a ordem, é necessário fechar e reabrir para inserir)

### Arquivos e pontos verificados

- [src/Controller/OrcamentoController.php:72](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrcamentoController.php#L72) — dev 3ed9a38.
- [src/Utils/File.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Utils/File.php#L1) — dev 3ed9a38.
- [templates/orcamento/orcamento.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/orcamento/orcamento.js#L1) — dev 3ed9a38.
- [templates/dashboard/index.html.twig:183](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/index.html.twig#L183) — dev 3ed9a38.
- [templates/dashboard/dashboard.js:445](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/dashboard/dashboard.js#L445) — dev 3ed9a38.

### Roteiro de implementação

1. Mapear criação da OS com orçamento, fornecedores/tags do modal e anexos: registrar onde cada flush e gravação no filesystem ocorre.
2. Validar formato, tamanho e todos os arquivos antes de concluir o orçamento. Usar área temporária e limpeza compensatória para arquivos novos se banco ou movimentação falhar; não apagar anexos anteriores.
3. Tratar prazo vazio e fornecedor recém-criado sem estado parcial; manter código real GOÇ e as permissões específicas.
4. Versionar os scripts próprios tocados com um identificador de release já compatível com Twig/asset, sem mudar assets/libs.
5. Testar a regra de aniversário com cache aquecido e registrar o caminho de publicação cumulativa em FECHO-3.

### Banco, arquivos e reversão

Sem migração prevista. Validar arquivos de teste; preservar anexos existentes e não enviar e-mails reais durante homologação.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D07 — Anexos e criação conjunta de OS/orçamento](INTEGRACAO_E_DECISOES.md#D07) · dono E3-04. Definir neste item. Extensões/tamanhos, anexos múltiplos e comportamento da OS se o orçamento falhar.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Dois anexos válidos e um proibido | Criar OS com orçamento | Erro sem orçamento incompleto ou arquivo novo abandonado; regra para a OS descrita. |
| Banco falha após upload temporário | Simular no teste | Arquivos temporários novos compensados, anexos antigos preservados. |
| Navegador com versão anterior em cache | Abrir nova homologação | Carrega a versão nova e só aniversariante recebe o recado. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- Pendência detalhada OS03.1 — Garantir aceitação de qualquer formato de documento, sem uma lista definida.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E3-99"></a>

## E3-99 — Homologação e preparação de publicação da entrega 3

**Ordem global:** 15/42. **Executar após:** E3-04. **Dependências técnicas:** [E3-01](entrega-03.md#E3-01), [E3-02](entrega-03.md#E3-02), [E3-03](entrega-03.md#E3-03), [E3-04](entrega-03.md#E3-04).

### Entrada, saída e limite

- **Entrada:** E3-01 a E3-04 aceitos e D06/D07 resolvidas.
- **Saída esperada:** FECHO-3, evidências da v1.3 e base cumulativa para reconstruir a PR.
- **Limite do item:** O workflow de produção executa migrations; não acioná-lo sob a restrição atual.

### Diagnóstico conferido no código

A v1.3.0-beta está em homologação; não deve ser declarada em produção por existir na dev.

### Referência literal dos documentos originais

**Referência original DI25 — Documento inicial SINGLES — ALTERAÇÕES / 3. ORDEM DE SERVIÇO / Erro: — parágrafo 62**

> Poder filtrar por solicitante

**Referência original RV23 — Relatório de visita, página 2 — Detalhamento técnico: 3-) módulo de compras e almoxarifado**

> - Avaliar e aprimorar as funcionalidades relacionadas às Ordens de Serviço;

### Arquivos e pontos verificados

- [src/Controller/HistoricoOsController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/HistoricoOsController.php#L1) — dev 3ed9a38.
- [src/Controller/OrdemServicoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/OrdemServicoController.php#L1) — dev 3ed9a38.
- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) — dev 3ed9a38.
- [.github/workflows/deploy-prod.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-prod.yml#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Validar a matriz real de OS por estágio e ação: editar cada campo, responsável, seguidores, orçamento, previsto, reabrir, excluir e consultar histórico.
2. Reexecutar filtros por solicitante, datas e preferência de colunas; conferir login e /js/routing.
3. Conferir as funcionalidades preservadas de 1 e 2 e registrar o commit cumulativo de teste.
4. Separar aceite de homologação, autorização operacional futura e publicação. Nenhuma versão de produção pode ser declarada por existir em dev.

### Banco, arquivos e reversão

Escrita somente no teste. Publicação do sistema não é executada nesta fase de planejamento.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D06 — Responsável da OS e herança](INTEGRACAO_E_DECISOES.md#D06) · dono E3-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Solicitante versus categoria/subcategoria/configuração; independência e como distinguir herança de escolha específica.
- [D07 — Anexos e criação conjunta de OS/orçamento](INTEGRACAO_E_DECISOES.md#D07) · dono E3-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Extensões/tamanhos, anexos múltiplos e comportamento da OS se o orçamento falhar.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| OS em cada estágio com usuário autorizado e sem acesso | Executar a matriz de ações | Campos e respostas coerentes e histórico sem duplicação. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-01:3](https://dcadv789.github.io/sigles-pedidos/#VS-01) — **aceite: Homologação e preparação de publicação da entrega 3**. Ordens de serviço e aniversariantes. · status atual: Homologação.
- [Quadro VS-02:1](https://dcadv789.github.io/sigles-pedidos/#VS-02) — **aceite: Homologação e preparação de publicação da entrega 3**. Demais usuários continuam vendo os aniversariantes na lista do mês. · status atual: Homologação.
- [Quadro VS-10:1](https://dcadv789.github.io/sigles-pedidos/#VS-10) — **aceite: Homologação e preparação de publicação da entrega 3**. Responsável, orçamento na criação, anexos, filtros, estágios e histórico. · status atual: Homologação.
- [Quadro WI-10:1](https://dcadv789.github.io/sigles-pedidos/#WI-10) — **aceite: Homologação e preparação de publicação da entrega 3**. Responsável sugerido pela categoria e possibilidade de troca antes de salvar. · status atual: Homologação.
- [Quadro WI-11:1](https://dcadv789.github.io/sigles-pedidos/#WI-11) — **aceite: Homologação e preparação de publicação da entrega 3**. Orçamento com anexo já na criação e lista ampliada de formatos suportados. · status atual: Homologação.
- [Quadro WI-12:1](https://dcadv789.github.io/sigles-pedidos/#WI-12) — **aceite: Homologação e preparação de publicação da entrega 3**. Filtro Aberto por e responsável por categoria. · status atual: Homologação.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-3"></a>

## FECHO-3 — Condição para seguir

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
