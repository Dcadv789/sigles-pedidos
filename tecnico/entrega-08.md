# Entrega 8 — Planejamento técnico

**Agenda, reservas externas, integrações e estudos**

**Data:** 16/10/2026. **Etapa:** Escopo inicial restante. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

A referência macro original desta entrega é **50%** do restante. Pontos antecipados para o fechamento das entregas 1 a 4 não serão executados outra vez aqui. Revalidar o esforço depois desses fechamentos e das definições abertas.

## Ordem de execução

1. [E8-01 — Conflitos e alterações de reservas recorrentes](#E8-01)
2. [E8-02 — Escolha de sala disponível e bloqueio manual](#E8-02)
3. [E8-03 — Saneamento das salas duplicadas](#E8-03)
4. [E8-04 — Reservas para alunos e pessoas externas](#E8-04)
5. [E8-05 — Conexão LES: acessos, destinatários e endereços](#E8-05)
6. [E8-06 — Histórico e relatórios de alterações da agenda](#E8-06)
7. [E8-07 — Importações em lote de outros cadastros](#E8-07)
8. [E8-08 — Estudos previstos de Aproveitamento de Disciplinas e NotebookLM](#E8-08)

<a id="E8-01"></a>

## E8-01 — Conflitos e alterações de reservas recorrentes

**Status:** Planejado — exige definição. **Dependências:** E7-04.

### Evidência e diagnóstico

ReservaController::update confere conflito com inicio/fim, mas valida e grava dt_inicio/dt_fim. Há entidades distintas para a regra de recorrência e cada ocorrência.

### Arquivos verificados

- [src/Controller/ReservaController.php:421](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L421) — base dev, commit 3ed9a38.
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/ReservaRecorrencia.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrencia.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/ReservaRecorrente.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrente.php#L1) — base dev, commit 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Validar e converter dt_inicio/dt_fim uma única vez antes da checagem de conflito e usar os mesmos objetos na gravação. Excluir a própria reserva da consulta.
2. Mapear série, pai, sequência e exceção; aplicar uma, futuras ou todas somente ao conjunto escolhido.
3. Conferir a geração da última ocorrência e limites inclusivos, preservando exclusões e alterações de sala individuais.
4. Aplicar uma transação ao lote alterado e registrar o log por ocorrência afetada conforme a regra atual.

### Banco e dados

Preferir o modelo existente. Migração só se uma limitação estrutural for demonstrada; não recriar séries e perder exceções/histórico.

### Testes de aceite previstos

- [ ] Editar sem trocar horário não entra em conflito consigo mesma.
- [ ] Reservas adjacentes são permitidas e sobreposição real é bloqueada segundo o intervalo acordado.
- [ ] Trocar/excluir uma ocorrência não altera as demais; futuras/todas respeitam a data limite e as exceções.

### Decisões necessárias

- Semântica de futuras/todas quando já há exceções; inclusão da última data.

### Referências dos pedidos

- [WI-03:1](https://dcadv789.github.io/sigles-pedidos/#WI-03) — Testar alteração da série e de uma ocorrência, preservação da sala e conflitos. (Validar).
- [WI-03:2](https://dcadv789.github.io/sigles-pedidos/#WI-03) — Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação. (Pendente).
- [WI-18:3](https://dcadv789.github.io/sigles-pedidos/#WI-18) — Validar última data, exclusão e troca de sala de uma ocorrência. (Validar).
- ER04 — Editar um evento sem perder a sala e sem conflito indevido com a própria reserva.
- ER05 — Editar eventos recorrentes corretamente.
- AG01 — A recorrência incluir e apresentar corretamente a última data prevista.
- AG03 — Excluir apenas um dia de uma reserva recorrente.
- AG03.1 — Trocar a sala somente em um dia de uma reserva recorrente, preservando os demais.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-02"></a>

## E8-02 — Escolha de sala disponível e bloqueio manual

**Status:** Planejado — exige definição. **Dependências:** E8-01, E5-03.

### Evidência e diagnóstico

A consulta de disponibilidade já lista salas, mas não completa o retorno ao evento. O bloqueio manual marcado FEITO não está comprovado; feriados automáticos são Aditivo.

### Arquivos verificados

- [src/Controller/ReservaController.php:671](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L671) — base dev, commit 3ed9a38.
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) — base dev, commit 3ed9a38.
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — base dev, commit 3ed9a38.
- [src/Entity/TipoReserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/TipoReserva.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Adicionar ação de escolher sala disponível que devolva o ID ao formulário original sem perder data, horário e conteúdo preenchido.
2. Revalidar o conflito ao salvar; o resultado da disponibilidade é uma consulta, não uma garantia de reserva.
3. Fechar se a lista de indisponíveis deve ser removida ou mantida como explicação de conflito.
4. Conferir a solução manual já usada; preferir um bloqueio com o modelo atual se atender ao pedido, definindo sala, dia inteiro, motivo e quem pode cancelar. Não importar calendário de feriados.

### Banco e dados

Reutilização de Reserva/TipoReserva é uma proposta a confirmar. Novo cadastro de indisponibilidade só se houver necessidade demonstrada e escopo fechado.

### Testes de aceite previstos

- [ ] Selecionar sala preenche o ID e mantém os demais campos do evento.
- [ ] Uma sala ocupada entre consulta e gravação é recusada corretamente.
- [ ] Bloqueio manual impede sobreposição e sua retirada autorizada libera o intervalo.

### Decisões necessárias

- Bloqueio por sala ou conjunto de salas, quem administra e o que significou FEITO.

### Referências dos pedidos

- [WI-18:2](https://dcadv789.github.io/sigles-pedidos/#WI-18) — Selecionar a sala na consulta e retornar ao evento com ela preenchida. (Pendente).
- [WI-22:2](https://dcadv789.github.io/sigles-pedidos/#WI-22) — Confirmar o bloqueio manual indicado como FEITO e o que foi efetivamente realizado. (Validar).
- AG02.1 — Selecionar uma sala na lista de disponíveis e retornar ao cadastro do evento com a sala preenchida.
- AG02.2 — Exibir somente as disponíveis nessa função, sem a lista de indisponíveis.
- AG04 — Função própria para bloquear manualmente um dia.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-03"></a>

## E8-03 — Saneamento das salas duplicadas

**Status:** Planejado — exige definição. **Dependências:** E8-01, E4-06.

### Evidência e diagnóstico

Não há prova de consolidação em produção. A execução precisa de mapeamento de IDs e de todos os vínculos, não apenas de exclusão dos nomes repetidos.

### Arquivos verificados

- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/OrdemServico.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/OrdemServico.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Conferir a planilha e gerar um mapa aprovado sala antiga→sala mantida, com prédio, nome e status.
2. Inventariar FKs reais e vínculos via ORM/banco de teste, incluindo reservas, turmas e OS; emitir um relatório de impacto antes de executar.
3. Ensaiar em cópia de teste com transação e parâmetros; remapear vínculos, validar conflitos e preferir inativação rastreável dos duplicados.
4. Registrar valores e contagens anteriores/depois e testar a reversão seletiva. Não executar saneamento em produção sob a restrição atual.

### Banco e dados

Operação de dados somente em esalq_sistema_des. Snapshot e mapa de reversão obrigatórios; nenhuma remoção recursiva ou DELETE em lote presumido.

### Testes de aceite previstos

- [ ] Total de vínculos e histórico é preservado após o remapeamento.
- [ ] Não surgem conflitos de reserva ocultos ao juntar salas antes separadas.
- [ ] Repetir a operação não duplica ações e a reversão do teste restaura somente os IDs mapeados.

### Decisões necessárias

- Planilha e sala canônica por duplicidade; tratamento dos conflitos encontrados.

### Referências dos pedidos

- [WI-17:1](https://dcadv789.github.io/sigles-pedidos/#WI-17) — Conferir a planilha e remover duplicidades com validação dos vínculos. (Validar).
- CA05 — Remover salas duplicadas conforme a planilha do cliente.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-04"></a>

## E8-04 — Reservas para alunos e pessoas externas

**Status:** Planejado — exige definição. **Dependências:** E5-04, E8-01, E8-02.

### Evidência e diagnóstico

security.yaml exige autenticação para as rotas gerais e o formulário de Reserva é administrativo. Não há fluxo separado de solicitação, aprovação e acompanhamento de externo.

### Arquivos verificados

- [config/packages/security.yaml:38](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L38) — base dev, commit 3ed9a38.
- [src/Controller/ReservaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar atores, identificação por número USP, aprovações e acompanhamento. Recomendação inicial: acesso autenticado com perfil de solicitante limitado, reutilizando o login; número USP informado não comprova identidade sozinho.
2. Propor Solicitação de reserva como registro separado, com solicitante, período, sala pretendida, estado, decisão e datas. O nome de entidade/controller é proposta, não arquivo existente.
3. Implementar CRUD Twig/AJAX no padrão atual e ACL para solicitante/aprovador; o usuário vê apenas seus pedidos. A aprovação revalida a disponibilidade e cria a Reserva no mesmo fluxo transacional.
4. Se o negócio exigir acesso sem cadastro, desenhar primeiro rota e autorização específicas, com token limitado ao pedido. Não abrir ^/ nem reaproveitar automaticamente a permissão de publicador.
5. Reutilizar MailerInterface para os avisos acordados, usando destinatários de teste na homologação.

### Banco e dados

Novas entidades/migrations aditivas provavelmente necessárias após definir o fluxo. Sem REST/React/Service novo por conveniência. Não alterar reservas existentes para simular solicitações antigas.

### Testes de aceite previstos

- [ ] Aluno acompanha somente seus pedidos e não altera reserva administrativa.
- [ ] Solicitação não ocupa a sala antes da regra aprovada; aprovador sem permissão é recusado.
- [ ] Dois pedidos para o mesmo intervalo não geram reserva dupla no aceite; reenvio/repetição da ação é tratado.
- [ ] Identificação e acesso externo seguem a opção aprovada, com testes de acesso direto ao pedido de outro solicitante.

### Decisões necessárias

- Autenticação/cadastro, validação do número USP, aprovador e estados; acesso sem cadastro não está decidido.

### Referências dos pedidos

- [VS-19:1](https://dcadv789.github.io/sigles-pedidos/#VS-19) — Solicitação pelo aluno, validação do número USP, acompanhamento e acesso externo. (Pendente).
- [VS-19:2](https://dcadv789.github.io/sigles-pedidos/#VS-19) — Definir responsáveis e regras de aprovação de reservas. (Definir).
- OR14 — Solicitação eletrônica de sala por aluno, com acompanhamento.
- OR15 — Aprovação de solicitações de reserva de salas, quando aplicável.
- OR16 — Identificação/validação de aluno por número USP para solicitar sala.
- OR17 — Acesso de usuários externos para solicitação de reservas, com autenticação e permissões específicas.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-05"></a>

## E8-05 — Conexão LES: acessos, destinatários e endereços

**Status:** Planejado — exige definição. **Dependências:** E5-04, E8-04.

### Evidência e diagnóstico

PublicacaoController estende AbstractController e não usa a verificação modular de BaseController. CadastroPublicador e as rotas de publicação precisam ser analisados junto das regras globais do firewall.

### Arquivos verificados

- [src/Controller/PublicacaoController.php:24](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PublicacaoController.php#L24) — base dev, commit 3ed9a38.
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) — base dev, commit 3ed9a38.
- [config/packages/security.yaml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L1) — base dev, commit 3ed9a38.
- [src/Entity/Publicacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Publicacao.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Mapear o fluxo real do publicador e classificar cada rota como consulta interna, manutenção ou entrada externa; conferir o firewall para cada uma.
2. Aplicar a verificação GPO nas ações internas pelo padrão existente, sem quebrar o fluxo externo autorizado. Qualquer exceção ao firewall deve ser estrita à rota e à finalidade definidas.
3. Consolidar a base de URL do ambiente para os links enviados; não montar endereço com host arbitrário da requisição.
4. Conferir destinatários obrigatórios/opcionais, deduplicação e cópias; preservar a autoria e os arquivos da publicação.

### Banco e dados

Esquema não necessariamente muda. Revisar configurações somente no teste; nenhum envio para a lista real na homologação.

### Testes de aceite previstos

- [ ] Usuário sem GPO não obtém/manipula publicação por rota direta.
- [ ] Publicador autorizado conclui o fluxo permitido e vê apenas o conteúdo definido.
- [ ] Links de teste permanecem no ambiente de teste; destinatários de prova são os esperados, sem duplicação.

### Decisões necessárias

- Quais ações são permitidas ao externo e quem pode receber cada comunicação.

### Referências dos pedidos

- [VS-12:1](https://dcadv789.github.io/sigles-pedidos/#VS-12) — Revisar cadastros, destinatários, permissões e endereços de teste/produção da Conexão LES. (Pendente).
- OR06 — Revisar cadastro, destinatários, permissões e comunicações externas da Conexão LES.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-06"></a>

## E8-06 — Histórico e relatórios de alterações da agenda

**Status:** Planejado — exige definição. **Dependências:** E8-01, E8-05.

### Evidência e diagnóstico

AgendaLogController já lista eventos e ações; faltam os campos/filtros específicos do pedido. A relação de acesso entre usuário e reserva deve valer também no log.

### Arquivos verificados

- [src/Controller/AgendaLogController.php:51](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/AgendaLogController.php#L51) — base dev, commit 3ed9a38.
- [templates/agenda_log/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda_log/index.html.twig#L1) — base dev, commit 3ed9a38.
- [src/Controller/ReservaController.php:958](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L958) — base dev, commit 3ed9a38.
- [templates/reserva/relatorio.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/reserva/relatorio.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar os campos, períodos e filtros, com amostra de relatório esperado.
2. Aplicar o mesmo recorte de autorização na listagem e na consulta por ID da reserva.
3. Retornar campos estáveis de data/usuário/ação e exportar com as ferramentas já usadas; manter o log histórico sem reescrita.
4. Conferir se as alterações de recorrência de E8-01 geram eventos suficientes para a leitura pedida.

### Banco e dados

Reutilizar o log; novo campo só se faltar a informação necessária e houver regra de captura aprovada.

### Testes de aceite previstos

- [ ] Filtros do relatório e exportação retornam o mesmo conjunto.
- [ ] Consulta direta ao ID não expõe histórico fora do recorte permitido.
- [ ] Alterar uma ocorrência mostra a ação certa sem sugerir mudança em toda a série.

### Decisões necessárias

- Campos, filtros e acesso ao histórico.

### Referências dos pedidos

- [VS-18:2](https://dcadv789.github.io/sigles-pedidos/#VS-18) — Definir novos campos e filtros; validar os problemas da agenda. (Definir).
- OR13 — Melhorar relatórios e consultas do histórico de alterações de agenda.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-07"></a>

## E8-07 — Importações em lote de outros cadastros

**Status:** Planejado — exige definição. **Dependências:** E7-02, E8-06.

### Evidência e diagnóstico

O relatório original cita a possibilidade de importação em lote, mas não define cadastros nem quantidade. Cronograma é referência técnica, não contrato universal de importação.

### Arquivos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — base PR 9, commit 13f5075.
- [src/Controller/UsuarioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Fechar uma lista de cadastros-alvo e, para cada um, colunas, formato, chave de identificação, comportamento de atualizar/criar e vínculo com registros inativos.
2. Produzir modelo e validação antes de gravação, incluindo relatório de erros e prévia de impacto.
3. Implementar cada lote no controller do domínio com as validações de CRUD existentes; não contornar permissões nem transformar o importador em uma API genérica nova.
4. Usar a política de atomicidade e reimportação aprovada; não importar dados pessoais reais para massa pública de teste.

### Banco e dados

Não há migration geral presumida. Alterações dependem dos campos faltantes por cadastro e devem ser aditivas.

### Testes de aceite previstos

- [ ] Modelo aprovado importa e arquivo com cabeçalho incorreto não grava.
- [ ] Repetição do mesmo lote segue a chave de atualização e não cria duplicatas.
- [ ] Erros mostram linha/campo sem deixar dados parciais escondidos.

### Decisões necessárias

- Cadastros, formatos, quantidade, atualização versus criação e lote incluído no pagamento.

### Referências dos pedidos

- [VS-14:1](https://dcadv789.github.io/sigles-pedidos/#VS-14) — Escolher cadastros, colunas, formatos, validações e regras de duplicidade. (Definir).
- OR08 — Importação em lote em outras funcionalidades.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E8-08"></a>

## E8-08 — Estudos previstos de Aproveitamento de Disciplinas e NotebookLM

**Status:** Planejado — exige definição. **Dependências:** E8-07.

### Evidência e diagnóstico

O pedido inicial contém estudo e avaliação. O novo fluxo completo de Aproveitamento de Estudos foi classificado pelo usuário como Adicional/Aditivo e não é implementado por este item.

### Arquivos verificados

- [src/Entity/Disciplina.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L1) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/DisciplinaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Mapear processo atual, participantes, documentos e critérios de equivalência com o responsável acadêmico.
2. Comparar os dados existentes com o fluxo pretendido e entregar lacunas, alternativas e critérios de aceite de uma futura implementação.
3. Avaliar o uso do NotebookLM com documentação oficial vigente na data do estudo, verificando mecanismo de integração, acesso e limites reais; registrar também a conclusão se a integração não for adequada.
4. Entregar um documento de viabilidade e uma delimitação do que é estudo inicial versus desenvolvimento do Aditivo; não desenvolver o módulo completo silenciosamente.

### Banco e dados

Sem alteração do banco e sem envio de documentos reais a serviço externo nesta fase de estudo.

### Testes de aceite previstos

- [ ] Fluxo e lacunas documentados e revisáveis pelo responsável.
- [ ] Conclusão sobre NotebookLM tem fontes atuais e não pressupõe API ou funcionalidade inexistente.
- [ ] Não há mudança de status dos 48 itens Adicionais para entregue por causa deste estudo.

### Decisões necessárias

- Responsável acadêmico, processo atual e resultado esperado do estudo.

### Referências dos pedidos

- [VS-16:1](https://dcadv789.github.io/sigles-pedidos/#VS-16) — Levantar o fluxo acadêmico e detalhar o módulo. (Pendente).
- [VS-16:2](https://dcadv789.github.io/sigles-pedidos/#VS-16) — Avaliar o uso do NotebookLM e registrar o resultado. (Pendente).
- OR10 — Estudar e detalhar o módulo de Aproveitamento de Disciplinas.
- OR11 — Avaliar eventual integração ou utilização de Notebook LM.

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
