# Entrega 8 — Agenda, reservas externas, integrações e estudos

**Atualizado em 21/10/2026 · Somente escopo restante planejado; E8-01 transferido à 3.5.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-7: entrega anterior aceita em homologação.
- Situação: Somente escopo restante planejado; E8-01 transferido à 3.5.
- Preservar a base cumulativa e todos os controles já publicados.

## Retirado da execução desta entrega

E8-01 foi antecipado e publicado na Entrega 3.5. Datas, edição/inativação de recorrências, exceções, conflitos e concorrência não são desenvolvimento novo na 8. Permanecem regressões das integrações futuras. Escolha/retorno da aba Salas e bloqueio manual próprio ainda são complementos pendentes de E8-02.

<a id="E8-01"></a>

## E8-01 — Recorrências e conflitos — antecipados para a Entrega 3.5

**Situação:** Transferido e entregue na 3.5; sem implementação pendente nesta entrega.

Os problemas de datas, disponibilidade, série/exceções e concorrência descritos em 16/10 foram corrigidos na Entrega 3.5/v1.3.3. Este identificador permanece somente para rastreio.

- Entrada: Contrato D21 já publicado na Entrega 3.5.
- Saída: Regressão preservada nas novas integrações; nenhuma entrega duplicada.
- Limite: Saneamento dos dados antigos depende da coordenação; não caracteriza falha nova do bloqueio.

### Funções, correções ou próximos passos

- Consumir E3.5-01, E3.5-02 e E3.5-05 como contrato já publicado.
- Reexecutar regressões ao implementar reservas externas e bloqueios manuais; não reconstruir o mecanismo.

### Banco e reversão

Sem nova alteração de dados por este item transferido.

### Referências de código (snapshot da leitura)

- [src/Controller/ReservaController.php:421](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L421) · 3ed9a38
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) · 3ed9a38
- [src/Entity/ReservaRecorrencia.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrencia.php#L1) · 3ed9a38
- [src/Entity/ReservaRecorrente.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrente.php#L1) · 3ed9a38
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) · 3ed9a38
- [src/Controller/ReservaController.php:192](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L192) · 3ed9a38
- [src/Controller/ReservaController.php:969](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L969) · 3ed9a38
- [src/Repository/ReservaRepository.php:83](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L83) · 3ed9a38
- [src/Repository/DisciplinaTurmaRepository.php:147](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/DisciplinaTurmaRepository.php#L147) · 3ed9a38
- [src/Utils/Date.php:9](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Utils/Date.php#L9) · 3ed9a38
- [src/Controller/DisciplinaTurmaController.php:35](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L35) · 3ed9a38
- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) · 13f5075

**Dependências:** E3.5-01, E3.5-02, E3.5-05.

<a id="E8-02"></a>

## E8-02 — Escolha de sala disponível e bloqueio manual

**Situação:** Planejado — execução não iniciada.

O seletor do evento já mostra ocupadas em cinza, bloqueadas e com motivo (Entrega 3.5). A aba Salas continua sendo consulta: o atalho de selecionar e retornar ao formulário e o bloqueio manual próprio ainda são complementos pendentes.

- Entrada: D21 funcionando e D22 de bloqueio manual.
- Saída: Seleção da sala disponível retorna ao evento e bloqueio manual participa da ocupação.
- Limite: Não ocultar as salas ocupadas: Daniel aprovou exibi-las em cinza com motivo do bloqueio. Feriados automáticos continuam Aditivo.

### Funções, correções ou próximos passos

- Usar IDs retornados pelo servidor e esconder a lista de indisponíveis nessa função, como o pedido literal, preservando mensagem de ausência de salas.
- Ao escolher sala, voltar ao formulário sem perder datas, tipo, nome/e-mail e descrição; prevenir respostas antigas de uma consulta anterior.
- Revalidar disponibilidade ao salvar pelo mesmo contrato D21. Resultado da consulta não é promessa de reserva.
- Conferir o bloqueio manual marcado FEITO: se o tipo existente atende, homologar; se não, delimitar implementação D22 sobre o modelo existente.
- Definir dia inteiro com fronteira [00:00,00:00 do dia seguinte), sala ou conjunto e cancelamento autorizado; tratar dias com eventos já existentes sem apagar esses eventos.

### Banco e reversão

Reutilização de Reserva/TipoReserva é uma proposta a confirmar. Novo cadastro de indisponibilidade só se houver necessidade demonstrada e escopo fechado.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Formulário preenchido e consulta anterior em andamento | Escolher sala da consulta atual | ID correto e todos os campos preservados. |
| Bloqueio manual em dia com reserva | Tentar aplicar e remover | Conflito tratado conforme D22; remoção autorizada libera só o bloqueio. |

### Rastreio dos pedidos

- WI-18:2 — Selecionar a sala na consulta e retornar ao evento com ela preenchida. · Pendente.
- WI-22:2 — Confirmar o bloqueio manual indicado como FEITO e o que foi efetivamente realizado. · Validar.

### Pendências detalhadas

- AG02.1 — Selecionar uma sala na lista de disponíveis e retornar ao cadastro do evento com a sala preenchida. **Pendente** — a lista atual apresenta as salas, mas não implementa esse caminho de seleção e retorno.
- AG04 — Função própria para bloquear manualmente um dia. **Pendente** — não foi localizada uma função específica nas entregas conferidas; confirmar o que significa a anotação “FEITO” do documento.

### Documentos originais (rastreio preservado)

**DI52 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 131**

> Na função Salas, aparecerem somente as salas DISPONÍVEIS e ter a opção de selecionar uma para efetuar reserva, e a tela volta para o cadastro do evento.

**DI54 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 133**

> NOVA FUNÇÃO: BLOQUEAR DIA - FEITO DE FORMA MANUAL PARA DATAS COMUNS E DE FORMA AUTOMÁTICA PARA FERIADOS.

### Referências de código (snapshot da leitura)

- [src/Controller/ReservaController.php:671](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L671) · 3ed9a38
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) · 3ed9a38
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) · 3ed9a38
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) · 3ed9a38
- [src/Entity/TipoReserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/TipoReserva.php#L1) · 3ed9a38

**Dependências:** E3.5-01, E5-03.

<a id="E8-03"></a>

## E8-03 — Saneamento das salas duplicadas

**Situação:** Planejado — execução não iniciada.

Não há prova de consolidação em produção. A execução precisa de mapeamento de IDs e de todos os vínculos, não apenas de exclusão dos nomes repetidos.

- Entrada: D23 e planilha de correspondência, D08 de classificação, D10 de rótulo e D21 de ocupação.
- Saída: Remapeamento rastreável de salas duplicadas no teste, sem perda de vínculos ou conflitos ocultos.
- Limite: Sem planilha ou com colisão sem decisão, item continua aberto. Rótulo igual não prova duplicidade.

### Funções, correções ou próximos passos

- Inventariar metadados ORM e FKs reais da cópia de teste; considerar vínculos não óbvios em recorrência, logs e tabelas sem constraint.
- Validar mapa antiga→canônica com prédio, número USP/local, nome abreviado, classe e status. Cada origem tem um destino sem ciclo.
- Simular a união dos calendários por sala antes de escrever. Listar conflitos entre reservas e aulas e impedir saneamento até a decisão de cada colisão.
- Guardar snapshot seletivo de relações, executar remapeamento transacional parametrizado e inativar duplicadas quando essa for a regra.
- Conferir contagens, classificação salaAula, filtros, rótulos e disponibilidade; preservar autoria e histórico em vez de reescrevê-los como eventos novos.
- Reexecutar o mesmo mapa e restaurar somente o conjunto auditado para demonstrar idempotência/reversão.

### Banco e reversão

Operação de dados somente em esalq_sistema_des. Snapshot e mapa de reversão obrigatórios; nenhuma remoção recursiva ou DELETE em lote presumido.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Duas salas duplicadas com eventos simultâneos | Simular remapeamento | Colisão listada e operação não confirma sem tratamento. |
| Mapa sem colisões e com vários vínculos | Executar, repetir e reverter no teste | Contagens preservadas, repetição inofensiva e restauração seletiva. |

### Rastreio dos pedidos

- WI-17:1 — Conferir a planilha e remover duplicidades com validação dos vínculos. · Validar.

### Pendências detalhadas

- CA05 — Remover salas duplicadas conforme a planilha do cliente. **Validar** — não há comprovação de execução desse saneamento em produção. O banco de teste não confirma o resultado na base real.

### Documentos originais (rastreio preservado)

**DI48 — Documento inicial SINGLES — CADASTRO / 4 Espaços/Salas — parágrafo 117**

> Remover salas duplicadas (salas de aula) - envio de arquivo

### Referências de código (snapshot da leitura)

- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) · 3ed9a38
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) · 3ed9a38
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) · 3ed9a38
- [src/Entity/OrdemServico.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/OrdemServico.php#L1) · 3ed9a38
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) · 3ed9a38

**Dependências:** E8-01, E8-02, E4-06.

<a id="E8-04"></a>

## E8-04 — Reservas para alunos e pessoas externas

**Situação:** Planejado — execução não iniciada.

security.yaml exige autenticação para as rotas gerais e o formulário de Reserva é administrativo. Não há fluxo separado de solicitação, aprovação e acompanhamento de externo.

- Entrada: D11, D21/D22/D23 e D24 sobre identificação, papéis e aprovação.
- Saída: Solicitação separada da reserva, com acesso próprio e aprovação idempotente.
- Limite: Número USP informado não autentica; não abrir o firewall geral ou copiar permissão de publicador.

### Funções, correções ou próximos passos

- Fechar identidade e acesso antes do esquema: alunos/externos podem usar login limitado; qualquer validação USP depende de fonte autorizada realmente disponível.
- Especificar registro proposto SolicitacaoReserva: solicitante autenticado, sala/intervalo pretendidos, estado, responsável pela decisão, justificativa, timestamps e vínculo único à reserva criada.
- Propor estados Rascunho → Enviada → Aprovada/Recusada/Cancelada, com operações e atores em D24. Definir reenvio, alteração após envio e quem cancela reserva já aprovada.
- Implementar Twig/AJAX e checagem de propriedade em cada rota: listar, ver, editar, enviar e decidir. Aprovar exige permissão administrativa, não só posse do link.
- No aceite, bloquear solicitação e sala, conferir estado atual, revalidar ocupação D21 e criar uma única Reserva na mesma transação. Repetir aprovação retorna o resultado já criado, sem outra reserva.
- Reutilizar nome/e-mail D10 e enviar avisos após commit para destinatários de teste. Falha de envio não causa segunda aprovação nem elimina reserva válida.
- Se aprovado acesso sem cadastro, desenhar token aleatório com escopo/prazo/rota restritos e testes de acesso; essa alternativa não está decidida por este documento.

### Banco e reversão

Novas entidades/migrations aditivas provavelmente necessárias após definir o fluxo. Sem REST/React/Service novo por conveniência. Não alterar reservas existentes para simular solicitações antigas.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Aluno A e aluno B | Abrir/alterar pedido alheio por ID | Acesso negado sem exposição de dados. |
| Mesmo pedido aprovado em duas conexões | Aprovar simultaneamente | Uma reserva vinculada e resposta repetível. |
| Dois pedidos distintos em mesmo horário | Aprovar em paralelo | Somente a reserva compatível confirma; pedido conflitante mantém estado coerente. |
| Falha do serviço de e-mail após aprovação | Repetir a ação | Reserva única preservada e notificação tratada separadamente. |

### Rastreio dos pedidos

- VS-19:1 — Solicitação pelo aluno, validação do número USP, acompanhamento e acesso externo. · Pendente.
- VS-19:2 — Definir responsáveis e regras de aprovação de reservas. · Definir.

### Pendências detalhadas

- OR14 — Solicitação eletrônica de sala por aluno, com acompanhamento. **Pendente** — o formulário administrativo existente não implementa o fluxo solicitado para aluno.
- OR15 — Aprovação de solicitações de reserva de salas, quando aplicável. **Definir** — confirmar se haverá aprovação, quem aprova e em quais casos; não foi identificado um fluxo novo de aprovação.
- OR16 — Identificação/validação de aluno por número USP para solicitar sala. **Pendente**
- OR17 — Acesso de usuários externos para solicitação de reservas, com autenticação e permissões específicas. **Pendente**

### Documentos originais (rastreio preservado)

**RV53 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> Um dos pontos relevantes discutidos foi a possibilidade de incorporar ao SIGLES o processo de solicitação e reserva de salas. Atualmente, parte desse procedimento é realizada for a do sistema.

**RV54 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Solicitação de reserva de sala diretamente pelo SIGLES;

**RV55 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Disponibilização de formulário eletrônico para solicitação;

**RV56 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Consulta de disponibilidade;

**RV57 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Registro e acompanhamento das solicitações;

**RV58 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Definição de fluxo de aprovação, quando aplicável;

**RV59 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Acesso de alunos e demais usuários autorizados.

**RV60 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> Para alunos, foi discutida a possibilidade de realizar a validação por meio do número USP, permitindo identificar o solicitante e conceder acesso às funcionalidades autorizadas.

**RV61 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> A solução deverá considerar também a eventual necessidade de acesso por pessoas externas à Universidade, com regras específicas de identificação, autenticação e permissão.

### Referências de código (snapshot da leitura)

- [config/packages/security.yaml:38](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L38) · 3ed9a38
- [src/Controller/ReservaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L1) · 3ed9a38
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) · 3ed9a38
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) · 3ed9a38
- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) · 3ed9a38

**Dependências:** E5-04, E8-01, E8-02, E8-03.

<a id="E8-05"></a>

## E8-05 — Conexão LES: acessos, destinatários e endereços

**Situação:** Planejado — execução não iniciada.

PublicacaoController estende AbstractController e não usa a verificação modular de BaseController. CadastroPublicador e as rotas de publicação precisam ser analisados junto das regras globais do firewall.

- Entrada: D11 e D25 de fluxo do publicador; acesso externo de reserva não concede acesso à publicação.
- Saída: Cadastro, destinatários, permissões e links da Conexão LES revisados com comportamento testável.
- Limite: Autorização de reserva e de publicação são domínios distintos, mesmo reutilizando o login.

### Funções, correções ou próximos passos

- Inventariar CadastroPublicador, Publicacao, edições, anexos, aprovação/publicação e disparos, incluindo caminhos atualmente liberados no firewall.
- Fechar D25 por ator e estado: o que externo pode criar, consultar e alterar e qual administração pode publicar/enviar.
- Aplicar ACL nas ações internas pelo padrão atual e propriedade/escopo no fluxo externo; conferir rota direta, ID de outro autor e download.
- Usar a configuração confiável da URL do ambiente para montar links e deduplicar destinatários, cópias e remetente conforme a regra.
- Guardar a transição de publicação uma única vez e evitar repetição do disparo ao repetir o POST; registrar falha de envio sem recriar publicação.

### Banco e reversão

Esquema não necessariamente muda. Revisar configurações somente no teste; nenhum envio para a lista real na homologação.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Publicador externo A e publicação de B | Consultar/editar/download por ID | Somente ações aprovadas, sem acesso ao objeto alheio. |
| Ambiente de teste e destinatário repetido em To/CC | Disparar teste e repetir POST | URLs do teste, sem cópia duplicada e tratamento de repetição. |

### Rastreio dos pedidos

- VS-12:1 — Revisar cadastros, destinatários, permissões e endereços de teste/produção da Conexão LES. · Pendente.

### Pendências detalhadas

- OR06 — Revisar cadastro, destinatários, permissões e comunicações externas da Conexão LES. **Pendente** — concluir a revisão e validação do fluxo externo; há problemas conhecidos de endereços entre teste e produção.

### Documentos originais (rastreio preservado)

**RV27 — Relatório de visita, página 2 — Detalhamento técnico: 5-) conexão LES e comunicações externas**

> Foi apresentada a funcionalidade relacionada à Conexão LES, que contempla o envio de informações/comunicações inclusive para pessoas externas à Universidade.

**RV28 — Relatório de visita, página 2 — Detalhamento técnico: 5-) conexão LES e comunicações externas**

> Esse fluxo deverá ser analisado tecnicamente, especialmente quanto às regras de cadastro, identificação de destinatários, permissões e funcionamento das comunicações para usuários externos.

### Referências de código (snapshot da leitura)

- [src/Controller/PublicacaoController.php:24](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PublicacaoController.php#L24) · 3ed9a38
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) · 3ed9a38
- [config/packages/security.yaml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L1) · 3ed9a38
- [src/Entity/Publicacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Publicacao.php#L1) · 3ed9a38
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) · 3ed9a38

**Dependências:** E5-04.

<a id="E8-06"></a>

## E8-06 — Histórico e relatórios de alterações da agenda

**Situação:** Planejado — execução não iniciada.

AgendaLogController já lista eventos e ações; faltam os campos/filtros específicos do pedido. A relação de acesso entre usuário e reserva deve valer também no log.

- Entrada: Log de E8-01 a E8-04 e D26 de relatório/acesso/retenção.
- Saída: Histórico consultável com filtros, exportação e recorte compatíveis com a reserva.
- Limite: Não inventar ações antigas; log ausente não pode ser preenchido como se fosse original.

### Funções, correções ou próximos passos

- Fechar amostra com reserva, sala canônica, série/ocorrência, usuário, ação e data; identificar quais campos já existem e quais só poderão ser capturados daqui para frente.
- Preservar IDs antigos de log e aplicar autorização do relatório em listagem, consulta individual e exportação.
- Garantir que ações individuais não pareçam alteração de toda a série e que aprovação externa apareça apenas se estiver no relatório acordado.
- Exportar o mesmo conjunto filtrado com ordenação temporal e dados mínimos necessários; registrar limitações de históricos antigos.

### Banco e reversão

Reutilizar o log; novo campo só se faltar a informação necessária e houver regra de captura aprovada.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Série com uma ocorrência alterada e saneamento de sala | Consultar log e exportar | Ação, usuário e ocorrência corretos sem reescrita artificial de histórico. |

### Rastreio dos pedidos

- VS-18:2 — Definir novos campos e filtros; validar os problemas da agenda. · Definir.

### Pendências detalhadas

- OR13 — Melhorar relatórios e consultas do histórico de alterações de agenda. **Definir** — log e exportação já existiam; especificar as melhorias esperadas e corrigir as pendências desse fluxo.

### Documentos originais (rastreio preservado)

**RV51 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> As funcionalidades relacionadas às alterações de agenda também deverão ser revisadas.

**RV52 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> O principal direcionamento consiste no aprimoramento dos relatórios e consultas, permitindo melhor acompanhamento das alterações realizadas e maior facilidade na extração das informações.

### Referências de código (snapshot da leitura)

- [src/Controller/AgendaLogController.php:51](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/AgendaLogController.php#L51) · 3ed9a38
- [templates/agenda_log/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda_log/index.html.twig#L1) · 3ed9a38
- [src/Controller/ReservaController.php:958](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L958) · 3ed9a38
- [templates/reserva/relatorio.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/reserva/relatorio.html.twig#L1) · 3ed9a38
- [src/Entity/AgendaLog.php:10](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/AgendaLog.php#L10) · 3ed9a38

**Dependências:** E8-01, E8-03, E8-04.

<a id="E8-07"></a>

## E8-07 — Importações em lote de outros cadastros

**Situação:** Planejado — execução não iniciada.

O relatório original cita a possibilidade de importação em lote, mas não define cadastros nem quantidade. Cronograma é referência técnica, não contrato universal de importação.

- Entrada: D09/D18 e lista fechada D27 de cadastros-alvo.
- Saída: Um modelo e um fluxo de importação por cadastro aprovado, sem expansão ilimitada.
- Limite: Só o cadastro já pago e definido entra; Cronograma é referência, não importador universal.

### Funções, correções ou próximos passos

- Para cada cadastro-alvo, especificar colunas, tipos, obrigatoriedade, identidade, criar/atualizar, inativos, relacionamentos e tamanho de lote.
- Reutilizar o padrão de validação, atomicidade e relatório de E7-02 no controller do domínio, sem criar nova API ou Service genérico.
- Produzir modelo versionado e prévia de impacto; validar todas as referências e direitos antes da gravação.
- Reimportar por chave de negócio e registrar criados/atualizados/recusados; não reativar cadastros por ausência de regra.
- Homologar cada cadastro separadamente. Se a lista não estiver fechada, FECHO-8 mantém esse item aberto em vez de prometer todos os cadastros.

### Banco e reversão

Não há migration geral presumida. Alterações dependem dos campos faltantes por cadastro e devem ser aditivas.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Lote com chave existente, nova e referência inválida | Validar e importar | Erro de referência impede gravação conforme a política e repetição não duplica. |

### Rastreio dos pedidos

- VS-14:1 — Escolher cadastros, colunas, formatos, validações e regras de duplicidade. · Definir.

### Pendências detalhadas

- OR08 — Importação em lote em outras funcionalidades. **Definir** — indicar quais cadastros, colunas e regras; não há uma entrega geral de importação em lote.

### Documentos originais (rastreio preservado)

**RV31 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Possibilidade de realizar cadastros em lote por meio da importação de planilhas em outras funcionalidades do sistema;

### Referências de código (snapshot da leitura)

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) · 13f5075
- [src/Controller/UsuarioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1) · 3ed9a38
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) · 3ed9a38

**Dependências:** E7-02.

<a id="E8-08"></a>

## E8-08 — Estudos previstos de Aproveitamento de Disciplinas e NotebookLM

**Situação:** Planejado — execução não iniciada.

O pedido inicial contém estudo e avaliação. O novo fluxo completo de Aproveitamento de Estudos foi classificado pelo usuário como Adicional/Aditivo e não é implementado por este item.

- Entrada: Responsável acadêmico, processo atual e D28 da saída do estudo.
- Saída: Viabilidade de Aproveitamento de Disciplinas e NotebookLM com limites e conclusão documentados.
- Limite: O fluxo completo do documento Adicional continua Aditivo; estudo não o marca entregue.

### Funções, correções ou próximos passos

- Levantar atores, entradas, documentos, regra acadêmica, decisão e saída atuais com amostra autorizada.
- Produzir mapa do processo, dados existentes/faltantes, alternativas de automação e limites entre estudo inicial e desenvolvimento adicional.
- Na futura execução do estudo, consultar documentação oficial vigente do NotebookLM, sem presumir API, licença ou conector; registrar fontes, data e conclusão favorável ou desfavorável.
- Não enviar documentos reais a serviço externo sem autorização específica. Prova de conceito, se necessária e autorizada, usa dados sintéticos.
- Entregar parecer de viabilidade com critérios de uma eventual implementação; não fechar AD-13 a AD-33 por concluir este estudo.

### Banco e reversão

Sem alteração do banco e sem envio de documentos reais a serviço externo nesta fase de estudo.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Processo e objetivo de estudo definidos | Revisar o parecer com responsável | Conclusão sustentada, limitações explícitas e nenhum fluxo Aditivo implementado por dedução. |

### Rastreio dos pedidos

- VS-16:1 — Levantar o fluxo acadêmico e detalhar o módulo. · Pendente.
- VS-16:2 — Avaliar o uso do NotebookLM e registrar o resultado. · Pendente.

### Pendências detalhadas

- OR10 — Estudar e detalhar o módulo de Aproveitamento de Disciplinas. **Pendente** — não foi identificado estudo funcional conclusivo ou módulo implementado.
- OR11 — Avaliar eventual integração ou utilização de Notebook LM. **Pendente** — não foi identificado resultado dessa avaliação nem integração implementada.

### Documentos originais (rastreio preservado)

**RV42 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> Foi discutida a possibilidade de desenvolvimento de um novo Módulo de Aproveitamento de Disciplinas, buscando automatizar atividades atualmente realizadas de maneira manual ou por ferramentas externas.

**RV43 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> A viabilidade e o escopo dessa funcionalidade deverão ser detalhados posteriormente, a partir do levantamento do fluxo atualmente utilizado, regras acadêmicas envolvidas, documentos necessários e possibilidades de automação.

**RV44 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> Também foi mencionada a utilização de solução/processo relacionado ao Notebook LM, cuja eventual integração ou utilização deverá ser avaliada tecnicamente.

### Referências de código (snapshot da leitura)

- [src/Entity/Disciplina.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L1) · 3ed9a38
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) · 3ed9a38
- [src/Controller/DisciplinaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L1) · 3ed9a38

## FECHO-8 — Fechamento

**Somente escopo restante planejado; E8-01 transferido à 3.5.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
