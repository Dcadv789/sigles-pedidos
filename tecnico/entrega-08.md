# Entrega 8 — Planejamento técnico revisado

**Agenda, reservas externas, integrações e estudos**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-8.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-7: entrega anterior aceita em homologação.
- **Saída:** FECHO-8, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Escopo inicial restante. Aditivos continuam fora.

**Alocação macro pretendida:** 50%. É a meta original de divisão de esforço, não medição em horas. Fechamentos antecipados para 1 a 4 não são outra implementação nesta entrega.

## Ordem interna obrigatória

35. [E8-01 — Conflitos e alterações de reservas recorrentes](#E8-01)
36. [E8-02 — Escolha de sala disponível e bloqueio manual](#E8-02)
37. [E8-03 — Saneamento das salas duplicadas](#E8-03)
38. [E8-04 — Reservas para alunos e pessoas externas](#E8-04)
39. [E8-05 — Conexão LES: acessos, destinatários e endereços](#E8-05)
40. [E8-06 — Histórico e relatórios de alterações da agenda](#E8-06)
41. [E8-07 — Importações em lote de outros cadastros](#E8-07)
42. [E8-08 — Estudos previstos de Aproveitamento de Disciplinas e NotebookLM](#E8-08)

Depois do último item, conferir **FECHO-8** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E8-01"></a>

## E8-01 — Conflitos e alterações de reservas recorrentes

**Ordem global:** 35/42. **Executar após:** FECHO-7. **Dependências técnicas:** [E4-06](entrega-04.md#E4-06), [E5-03](entrega-05.md#E5-03), [E7-01](entrega-07.md#E7-01).

### Entrada, saída e limite

- **Entrada:** FECHO-7, D08/D10 e inventário de ocupação/recorrência; definir D21 no início antes das correções dependentes.
- **Saída esperada:** Um contrato de datas e ocupação para criar, editar, consultar e aprovar reservas.
- **Limite do item:** Consulta de disponibilidade, gravação e recorrência precisam concordar; transação sozinha não elimina corrida.

### Diagnóstico conferido no código

ReservaController::update confere conflito com inicio/fim, mas valida e grava dt_inicio/dt_fim. Há entidades distintas para a regra de recorrência e cada ocorrência. A criação pode enviar data nula à checagem antes da validação; getPeriodo usa BETWEEN no início e pode omitir eventos iniciados antes da janela. A disponibilidade considera aulas, mas a checagem de gravação consulta só Reserva. A garantia precisa ser definida e testada em todos esses caminhos.

### Referência literal dos documentos originais

**Referência original DI04 — Documento inicial SINGLES — ERROS / AGENDA — parágrafo 15**

> Ao editar uma informação em um evento já cadastrado, o sistema altera o que queremos, mas a sala some, ou seja, não dá para alterar o evento, o sistema obriga a criar outro em outra sala. 25/03/2026 - agora nem conseguimos alterar, pois o sistema apresenta a mensagem que a sala já está reservada.

**Referência original DI05 — Documento inicial SINGLES — ERROS / AGENDA — parágrafo 17**

> 26/03 - Sanada a questão de alteração do evento. Apenas para os eventos recorrentes não está sendo possível realizar alterações. Como não estava no escopo, ficará para depois. - URGENTE

**Referência original DI51 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 130**

> Na função “novo evento” está com erro ao efetuar reserva com recorrência, não aparece a última data.

**Referência original DI53 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 132**

> Possibilidade de excluir ou alterar sala somente um dia na reserva com recorrência.

**Referência original RV51 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> As funcionalidades relacionadas às alterações de agenda também deverão ser revisadas.

### Arquivos e pontos verificados

- [src/Controller/ReservaController.php:421](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L421) — dev 3ed9a38.
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) — dev 3ed9a38.
- [src/Entity/ReservaRecorrencia.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrencia.php#L1) — dev 3ed9a38.
- [src/Entity/ReservaRecorrente.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/ReservaRecorrente.php#L1) — dev 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — dev 3ed9a38.
- [src/Controller/ReservaController.php:192](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L192) — dev 3ed9a38.
- [src/Controller/ReservaController.php:969](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L969) — dev 3ed9a38.
- [src/Repository/ReservaRepository.php:83](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L83) — dev 3ed9a38.
- [src/Repository/DisciplinaTurmaRepository.php:147](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/DisciplinaTurmaRepository.php#L147) — dev 3ed9a38.
- [src/Utils/Date.php:9](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Utils/Date.php#L9) — dev 3ed9a38.
- [src/Controller/DisciplinaTurmaController.php:35](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L35) — dev 3ed9a38.
- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — PR 9 13f5075.

### Roteiro de implementação

1. Validar IDs e datas antes de chamar funções tipadas: create hoje pode passar null à checagem e update usa inicio/fim em vez de dt_inicio/dt_fim. Rejeitar datas normalizadas, fim igual ou anterior e intervalos inválidos.
2. Uniformizar intervalo semiaberto [início,fim) com conflito início_existente < fim_novo e fim_existente > início_novo, sujeito a D21; excluir só a ocorrência editada.
3. Conferir ReservaRepository::getPeriodo: BETWEEN apenas no início perde reserva que começou antes da janela. Ajustar a leitura de sobreposição e as recorrências para o mesmo contrato.
4. A disponibilidade lê reservas e cronogramas, mas verificarConflitoReserva hoje só consulta Reserva. Definir o conjunto de ocupantes D21 e usar IDs de sala ao combinar aulas, reservas, exceções e bloqueios manuais.
5. Mapear pai/série/exceção e operações esta/futuras/todas. Definir limite inclusivo, primeira/última ocorrência e preservação das exceções sem recriar toda a série.
6. Na gravação, revalidar ocupação dentro da transação e da proteção concorrente escolhida. Proposta: bloquear a linha de Sala e, ao trocar sala, bloquear IDs em ordem; todas as entradas de reserva participantes usam o mesmo protocolo.
7. Inventariar também escrita de cronogramas/importações que ocupa salas. Se participar da garantia contra concorrência, usar o mesmo protocolo; se não, registrar explicitamente a limitação antes de liberar reserva externa.
8. Auditar flushes internos de cria/altera/registrarLog para manter reserva, ocorrências e histórico no mesmo limite de commit. E-mail fica após commit, sem reverter reserva válida por falha de envio.

### Banco, arquivos e reversão

Preferir o modelo existente. Migração só se uma limitação estrutural for demonstrada; não recriar séries e perder exceções/histórico.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Consumir a decisão anterior, sem redefini-la silenciosamente. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.
- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D21 — Ocupação, datas, recorrência e concorrência](INTEGRACAO_E_DECISOES.md#D21) · dono E8-01. Definir neste item. Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Reserva que começa ontem e termina hoje | Consultar e tentar sobrepor hoje | Aparece como ocupada mesmo começando fora da janela. |
| Evento sem mudar horário e dois eventos adjacentes | Editar e criar | Sem conflito consigo mesmo; adjacência conforme D21. |
| Série até sexta e exceção na quarta | Alterar uma/futuras/todas | Última sexta aparece; exceção preservada conforme a operação. |
| Duas conexões para mesma sala/hora | Gravar simultaneamente | Só uma gravação incompatível confirma; a outra recebe conflito legível. |
| Aula de cronograma na sala | Consultar e tentar reservar | Mesma resposta de disponibilidade e de gravação. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-03:1](https://dcadv789.github.io/sigles-pedidos/#WI-03) — **execução: Conflitos e alterações de reservas recorrentes**. Testar alteração da série e de uma ocorrência, preservação da sala e conflitos. · status atual: Validar.
- [Quadro WI-03:2](https://dcadv789.github.io/sigles-pedidos/#WI-03) — **execução: Conflitos e alterações de reservas recorrentes**. Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação. · status atual: Pendente.
- [Quadro WI-18:3](https://dcadv789.github.io/sigles-pedidos/#WI-18) — **execução: Conflitos e alterações de reservas recorrentes**. Validar última data, exclusão e troca de sala de uma ocorrência. · status atual: Validar.
- Pendência detalhada ER04 — Editar um evento sem perder a sala e sem conflito indevido com a própria reserva.
- Pendência detalhada ER05 — Editar eventos recorrentes corretamente.
- Pendência detalhada AG01 — A recorrência incluir e apresentar corretamente a última data prevista.
- Pendência detalhada AG03 — Excluir apenas um dia de uma reserva recorrente.
- Pendência detalhada AG03.1 — Trocar a sala somente em um dia de uma reserva recorrente, preservando os demais.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-02"></a>

## E8-02 — Escolha de sala disponível e bloqueio manual

**Ordem global:** 36/42. **Executar após:** E8-01. **Dependências técnicas:** [E8-01](entrega-08.md#E8-01), [E5-03](entrega-05.md#E5-03).

### Entrada, saída e limite

- **Entrada:** D21 funcionando e D22 de bloqueio manual.
- **Saída esperada:** Seleção da sala disponível retorna ao evento e bloqueio manual participa da ocupação.
- **Limite do item:** Feriados automáticos são Aditivo; o nome da sala não identifica o registro.

### Diagnóstico conferido no código

A consulta de disponibilidade já lista salas, mas não completa o retorno ao evento. O bloqueio manual marcado FEITO não está comprovado; feriados automáticos são Aditivo.

### Referência literal dos documentos originais

**Referência original DI52 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 131**

> Na função Salas, aparecerem somente as salas DISPONÍVEIS e ter a opção de selecionar uma para efetuar reserva, e a tela volta para o cadastro do evento.

**Referência original DI54 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 133**

> NOVA FUNÇÃO: BLOQUEAR DIA - FEITO DE FORMA MANUAL PARA DATAS COMUNS E DE FORMA AUTOMÁTICA PARA FERIADOS.

### Arquivos e pontos verificados

- [src/Controller/ReservaController.php:671](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L671) — dev 3ed9a38.
- [src/Controller/ReservaController.php:895](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L895) — dev 3ed9a38.
- [templates/agenda/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/modal.html.twig#L1) — dev 3ed9a38.
- [templates/agenda/agenda.js:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda/agenda.js#L1) — dev 3ed9a38.
- [src/Entity/TipoReserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/TipoReserva.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Usar IDs retornados pelo servidor e esconder a lista de indisponíveis nessa função, como o pedido literal, preservando mensagem de ausência de salas.
2. Ao escolher sala, voltar ao formulário sem perder datas, tipo, nome/e-mail e descrição; prevenir respostas antigas de uma consulta anterior.
3. Revalidar disponibilidade ao salvar pelo mesmo contrato D21. Resultado da consulta não é promessa de reserva.
4. Conferir o bloqueio manual marcado FEITO: se o tipo existente atende, homologar; se não, delimitar implementação D22 sobre o modelo existente.
5. Definir dia inteiro com fronteira [00:00,00:00 do dia seguinte), sala ou conjunto e cancelamento autorizado; tratar dias com eventos já existentes sem apagar esses eventos.

### Banco, arquivos e reversão

Reutilização de Reserva/TipoReserva é uma proposta a confirmar. Novo cadastro de indisponibilidade só se houver necessidade demonstrada e escopo fechado.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D21 — Ocupação, datas, recorrência e concorrência](INTEGRACAO_E_DECISOES.md#D21) · dono E8-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.
- [D22 — Bloqueio manual e escolha de sala](INTEGRACAO_E_DECISOES.md#D22) · dono E8-02. Definir neste item. Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Formulário preenchido e consulta anterior em andamento | Escolher sala da consulta atual | ID correto e todos os campos preservados. |
| Bloqueio manual em dia com reserva | Tentar aplicar e remover | Conflito tratado conforme D22; remoção autorizada libera só o bloqueio. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-18:2](https://dcadv789.github.io/sigles-pedidos/#WI-18) — **execução: Escolha de sala disponível e bloqueio manual**. Selecionar a sala na consulta e retornar ao evento com ela preenchida. · status atual: Pendente.
- [Quadro WI-22:2](https://dcadv789.github.io/sigles-pedidos/#WI-22) — **execução: Escolha de sala disponível e bloqueio manual**. Confirmar o bloqueio manual indicado como FEITO e o que foi efetivamente realizado. · status atual: Validar.
- Pendência detalhada AG02.1 — Selecionar uma sala na lista de disponíveis e retornar ao cadastro do evento com a sala preenchida.
- Pendência detalhada AG02.2 — Exibir somente as disponíveis nessa função, sem a lista de indisponíveis.
- Pendência detalhada AG04 — Função própria para bloquear manualmente um dia.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-03"></a>

## E8-03 — Saneamento das salas duplicadas

**Ordem global:** 37/42. **Executar após:** E8-02. **Dependências técnicas:** [E8-01](entrega-08.md#E8-01), [E8-02](entrega-08.md#E8-02), [E4-06](entrega-04.md#E4-06).

### Entrada, saída e limite

- **Entrada:** D23 e planilha de correspondência, D08 de classificação, D10 de rótulo e D21 de ocupação.
- **Saída esperada:** Remapeamento rastreável de salas duplicadas no teste, sem perda de vínculos ou conflitos ocultos.
- **Limite do item:** Sem planilha ou com colisão sem decisão, item continua aberto. Rótulo igual não prova duplicidade.

### Diagnóstico conferido no código

Não há prova de consolidação em produção. A execução precisa de mapeamento de IDs e de todos os vínculos, não apenas de exclusão dos nomes repetidos.

### Referência literal dos documentos originais

**Referência original DI48 — Documento inicial SINGLES — CADASTRO / 4 Espaços/Salas — parágrafo 117**

> Remover salas duplicadas (salas de aula) - envio de arquivo

### Arquivos e pontos verificados

- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) — dev 3ed9a38.
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) — dev 3ed9a38.
- [src/Entity/DisciplinaTurma.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaTurma.php#L1) — dev 3ed9a38.
- [src/Entity/OrdemServico.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/OrdemServico.php#L1) — dev 3ed9a38.
- [src/Controller/SalaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/SalaController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Inventariar metadados ORM e FKs reais da cópia de teste; considerar vínculos não óbvios em recorrência, logs e tabelas sem constraint.
2. Validar mapa antiga→canônica com prédio, número USP/local, nome abreviado, classe e status. Cada origem tem um destino sem ciclo.
3. Simular a união dos calendários por sala antes de escrever. Listar conflitos entre reservas e aulas e impedir saneamento até a decisão de cada colisão.
4. Guardar snapshot seletivo de relações, executar remapeamento transacional parametrizado e inativar duplicadas quando essa for a regra.
5. Conferir contagens, classificação salaAula, filtros, rótulos e disponibilidade; preservar autoria e histórico em vez de reescrevê-los como eventos novos.
6. Reexecutar o mesmo mapa e restaurar somente o conjunto auditado para demonstrar idempotência/reversão.

### Banco, arquivos e reversão

Operação de dados somente em esalq_sistema_des. Snapshot e mapa de reversão obrigatórios; nenhuma remoção recursiva ou DELETE em lote presumido.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Consumir a decisão anterior, sem redefini-la silenciosamente. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.
- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D21 — Ocupação, datas, recorrência e concorrência](INTEGRACAO_E_DECISOES.md#D21) · dono E8-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.
- [D22 — Bloqueio manual e escolha de sala](INTEGRACAO_E_DECISOES.md#D22) · dono E8-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento.
- [D23 — Salas duplicadas e sala canônica](INTEGRACAO_E_DECISOES.md#D23) · dono E8-03. Definir neste item. Planilha, destino de cada sala, flags e resolução dos conflitos de calendário detectados.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Duas salas duplicadas com eventos simultâneos | Simular remapeamento | Colisão listada e operação não confirma sem tratamento. |
| Mapa sem colisões e com vários vínculos | Executar, repetir e reverter no teste | Contagens preservadas, repetição inofensiva e restauração seletiva. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-17:1](https://dcadv789.github.io/sigles-pedidos/#WI-17) — **execução: Saneamento das salas duplicadas**. Conferir a planilha e remover duplicidades com validação dos vínculos. · status atual: Validar.
- Pendência detalhada CA05 — Remover salas duplicadas conforme a planilha do cliente.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-04"></a>

## E8-04 — Reservas para alunos e pessoas externas

**Ordem global:** 38/42. **Executar após:** E8-03. **Dependências técnicas:** [E5-04](entrega-05.md#E5-04), [E8-01](entrega-08.md#E8-01), [E8-02](entrega-08.md#E8-02), [E8-03](entrega-08.md#E8-03).

### Entrada, saída e limite

- **Entrada:** D11, D21/D22/D23 e D24 sobre identificação, papéis e aprovação.
- **Saída esperada:** Solicitação separada da reserva, com acesso próprio e aprovação idempotente.
- **Limite do item:** Número USP informado não autentica; não abrir o firewall geral ou copiar permissão de publicador.

### Diagnóstico conferido no código

security.yaml exige autenticação para as rotas gerais e o formulário de Reserva é administrativo. Não há fluxo separado de solicitação, aprovação e acompanhamento de externo.

### Referência literal dos documentos originais

**Referência original RV53 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> Um dos pontos relevantes discutidos foi a possibilidade de incorporar ao SIGLES o processo de solicitação e reserva de salas. Atualmente, parte desse procedimento é realizada for a do sistema.

**Referência original RV54 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Solicitação de reserva de sala diretamente pelo SIGLES;

**Referência original RV55 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Disponibilização de formulário eletrônico para solicitação;

**Referência original RV56 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Consulta de disponibilidade;

**Referência original RV57 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Registro e acompanhamento das solicitações;

**Referência original RV58 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Definição de fluxo de aprovação, quando aplicável;

**Referência original RV59 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> - Acesso de alunos e demais usuários autorizados.

**Referência original RV60 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> Para alunos, foi discutida a possibilidade de realizar a validação por meio do número USP, permitindo identificar o solicitante e conceder acesso às funcionalidades autorizadas.

**Referência original RV61 — Relatório de visita, página 4 — Detalhamento técnico: 11-) reserva de salas e acesso de usuários externos**

> A solução deverá considerar também a eventual necessidade de acesso por pessoas externas à Universidade, com regras específicas de identificação, autenticação e permissão.

### Arquivos e pontos verificados

- [config/packages/security.yaml:38](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L38) — dev 3ed9a38.
- [src/Controller/ReservaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L1) — dev 3ed9a38.
- [src/Entity/Reserva.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Reserva.php#L1) — dev 3ed9a38.
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) — dev 3ed9a38.
- [src/Controller/PerfilModuloController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PerfilModuloController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Fechar identidade e acesso antes do esquema: alunos/externos podem usar login limitado; qualquer validação USP depende de fonte autorizada realmente disponível.
2. Especificar registro proposto SolicitacaoReserva: solicitante autenticado, sala/intervalo pretendidos, estado, responsável pela decisão, justificativa, timestamps e vínculo único à reserva criada.
3. Propor estados Rascunho → Enviada → Aprovada/Recusada/Cancelada, com operações e atores em D24. Definir reenvio, alteração após envio e quem cancela reserva já aprovada.
4. Implementar Twig/AJAX e checagem de propriedade em cada rota: listar, ver, editar, enviar e decidir. Aprovar exige permissão administrativa, não só posse do link.
5. No aceite, bloquear solicitação e sala, conferir estado atual, revalidar ocupação D21 e criar uma única Reserva na mesma transação. Repetir aprovação retorna o resultado já criado, sem outra reserva.
6. Reutilizar nome/e-mail D10 e enviar avisos após commit para destinatários de teste. Falha de envio não causa segunda aprovação nem elimina reserva válida.
7. Se aprovado acesso sem cadastro, desenhar token aleatório com escopo/prazo/rota restritos e testes de acesso; essa alternativa não está decidida por este documento.

### Banco, arquivos e reversão

Novas entidades/migrations aditivas provavelmente necessárias após definir o fluxo. Sem REST/React/Service novo por conveniência. Não alterar reservas existentes para simular solicitações antigas.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Consumir a decisão anterior, sem redefini-la silenciosamente. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.
- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D21 — Ocupação, datas, recorrência e concorrência](INTEGRACAO_E_DECISOES.md#D21) · dono E8-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.
- [D22 — Bloqueio manual e escolha de sala](INTEGRACAO_E_DECISOES.md#D22) · dono E8-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento.
- [D23 — Salas duplicadas e sala canônica](INTEGRACAO_E_DECISOES.md#D23) · dono E8-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Planilha, destino de cada sala, flags e resolução dos conflitos de calendário detectados.
- [D24 — Identificação e aprovação de solicitantes](INTEGRACAO_E_DECISOES.md#D24) · dono E8-04. Definir neste item. Validação USP realmente disponível, cadastro externo, aprovador, estados/reenvio/cancelamento e eventual acesso sem cadastro.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Aluno A e aluno B | Abrir/alterar pedido alheio por ID | Acesso negado sem exposição de dados. |
| Mesmo pedido aprovado em duas conexões | Aprovar simultaneamente | Uma reserva vinculada e resposta repetível. |
| Dois pedidos distintos em mesmo horário | Aprovar em paralelo | Somente a reserva compatível confirma; pedido conflitante mantém estado coerente. |
| Falha do serviço de e-mail após aprovação | Repetir a ação | Reserva única preservada e notificação tratada separadamente. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-19:1](https://dcadv789.github.io/sigles-pedidos/#VS-19) — **execução: Reservas para alunos e pessoas externas**. Solicitação pelo aluno, validação do número USP, acompanhamento e acesso externo. · status atual: Pendente.
- [Quadro VS-19:2](https://dcadv789.github.io/sigles-pedidos/#VS-19) — **execução: Reservas para alunos e pessoas externas**. Definir responsáveis e regras de aprovação de reservas. · status atual: Definir.
- Pendência detalhada OR14 — Solicitação eletrônica de sala por aluno, com acompanhamento.
- Pendência detalhada OR15 — Aprovação de solicitações de reserva de salas, quando aplicável.
- Pendência detalhada OR16 — Identificação/validação de aluno por número USP para solicitar sala.
- Pendência detalhada OR17 — Acesso de usuários externos para solicitação de reservas, com autenticação e permissões específicas.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-05"></a>

## E8-05 — Conexão LES: acessos, destinatários e endereços

**Ordem global:** 39/42. **Executar após:** E8-04. **Dependências técnicas:** [E5-04](entrega-05.md#E5-04).

### Entrada, saída e limite

- **Entrada:** D11 e D25 de fluxo do publicador; acesso externo de reserva não concede acesso à publicação.
- **Saída esperada:** Cadastro, destinatários, permissões e links da Conexão LES revisados com comportamento testável.
- **Limite do item:** Autorização de reserva e de publicação são domínios distintos, mesmo reutilizando o login.

### Diagnóstico conferido no código

PublicacaoController estende AbstractController e não usa a verificação modular de BaseController. CadastroPublicador e as rotas de publicação precisam ser analisados junto das regras globais do firewall.

### Referência literal dos documentos originais

**Referência original RV27 — Relatório de visita, página 2 — Detalhamento técnico: 5-) conexão LES e comunicações externas**

> Foi apresentada a funcionalidade relacionada à Conexão LES, que contempla o envio de informações/comunicações inclusive para pessoas externas à Universidade.

**Referência original RV28 — Relatório de visita, página 2 — Detalhamento técnico: 5-) conexão LES e comunicações externas**

> Esse fluxo deverá ser analisado tecnicamente, especialmente quanto às regras de cadastro, identificação de destinatários, permissões e funcionamento das comunicações para usuários externos.

### Arquivos e pontos verificados

- [src/Controller/PublicacaoController.php:24](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PublicacaoController.php#L24) — dev 3ed9a38.
- [src/Controller/CadastroPublicadorController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/CadastroPublicadorController.php#L1) — dev 3ed9a38.
- [config/packages/security.yaml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/config/packages/security.yaml#L1) — dev 3ed9a38.
- [src/Entity/Publicacao.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Publicacao.php#L1) — dev 3ed9a38.
- [src/Controller/ConfiguracoesController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ConfiguracoesController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Inventariar CadastroPublicador, Publicacao, edições, anexos, aprovação/publicação e disparos, incluindo caminhos atualmente liberados no firewall.
2. Fechar D25 por ator e estado: o que externo pode criar, consultar e alterar e qual administração pode publicar/enviar.
3. Aplicar ACL nas ações internas pelo padrão atual e propriedade/escopo no fluxo externo; conferir rota direta, ID de outro autor e download.
4. Usar a configuração confiável da URL do ambiente para montar links e deduplicar destinatários, cópias e remetente conforme a regra.
5. Guardar a transição de publicação uma única vez e evitar repetição do disparo ao repetir o POST; registrar falha de envio sem recriar publicação.

### Banco, arquivos e reversão

Esquema não necessariamente muda. Revisar configurações somente no teste; nenhum envio para a lista real na homologação.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D25 — Conexão LES e comunicações externas](INTEGRACAO_E_DECISOES.md#D25) · dono E8-05. Definir neste item. Ações/estados por ator, destinatários/cópias, acesso aos anexos e tratamento de repetição/falha.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Publicador externo A e publicação de B | Consultar/editar/download por ID | Somente ações aprovadas, sem acesso ao objeto alheio. |
| Ambiente de teste e destinatário repetido em To/CC | Disparar teste e repetir POST | URLs do teste, sem cópia duplicada e tratamento de repetição. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-12:1](https://dcadv789.github.io/sigles-pedidos/#VS-12) — **execução: Conexão LES: acessos, destinatários e endereços**. Revisar cadastros, destinatários, permissões e endereços de teste/produção da Conexão LES. · status atual: Pendente.
- Pendência detalhada OR06 — Revisar cadastro, destinatários, permissões e comunicações externas da Conexão LES.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-06"></a>

## E8-06 — Histórico e relatórios de alterações da agenda

**Ordem global:** 40/42. **Executar após:** E8-05. **Dependências técnicas:** [E8-01](entrega-08.md#E8-01), [E8-03](entrega-08.md#E8-03), [E8-04](entrega-08.md#E8-04).

### Entrada, saída e limite

- **Entrada:** Log de E8-01 a E8-04 e D26 de relatório/acesso/retenção.
- **Saída esperada:** Histórico consultável com filtros, exportação e recorte compatíveis com a reserva.
- **Limite do item:** Não inventar ações antigas; log ausente não pode ser preenchido como se fosse original.

### Diagnóstico conferido no código

AgendaLogController já lista eventos e ações; faltam os campos/filtros específicos do pedido. A relação de acesso entre usuário e reserva deve valer também no log.

### Referência literal dos documentos originais

**Referência original RV51 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> As funcionalidades relacionadas às alterações de agenda também deverão ser revisadas.

**Referência original RV52 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> O principal direcionamento consiste no aprimoramento dos relatórios e consultas, permitindo melhor acompanhamento das alterações realizadas e maior facilidade na extração das informações.

### Arquivos e pontos verificados

- [src/Controller/AgendaLogController.php:51](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/AgendaLogController.php#L51) — dev 3ed9a38.
- [templates/agenda_log/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/agenda_log/index.html.twig#L1) — dev 3ed9a38.
- [src/Controller/ReservaController.php:958](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/ReservaController.php#L958) — dev 3ed9a38.
- [templates/reserva/relatorio.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/reserva/relatorio.html.twig#L1) — dev 3ed9a38.
- [src/Entity/AgendaLog.php:10](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/AgendaLog.php#L10) — dev 3ed9a38.

### Roteiro de implementação

1. Fechar amostra com reserva, sala canônica, série/ocorrência, usuário, ação e data; identificar quais campos já existem e quais só poderão ser capturados daqui para frente.
2. Preservar IDs antigos de log e aplicar autorização do relatório em listagem, consulta individual e exportação.
3. Garantir que ações individuais não pareçam alteração de toda a série e que aprovação externa apareça apenas se estiver no relatório acordado.
4. Exportar o mesmo conjunto filtrado com ordenação temporal e dados mínimos necessários; registrar limitações de históricos antigos.

### Banco, arquivos e reversão

Reutilizar o log; novo campo só se faltar a informação necessária e houver regra de captura aprovada.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D10 — Rótulo de sala e dados de solicitante](INTEGRACAO_E_DECISOES.md#D10) · dono E5-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D21 — Ocupação, datas, recorrência e concorrência](INTEGRACAO_E_DECISOES.md#D21) · dono E8-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.
- [D22 — Bloqueio manual e escolha de sala](INTEGRACAO_E_DECISOES.md#D22) · dono E8-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento.
- [D23 — Salas duplicadas e sala canônica](INTEGRACAO_E_DECISOES.md#D23) · dono E8-03. Consumir a decisão anterior, sem redefini-la silenciosamente. Planilha, destino de cada sala, flags e resolução dos conflitos de calendário detectados.
- [D24 — Identificação e aprovação de solicitantes](INTEGRACAO_E_DECISOES.md#D24) · dono E8-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Validação USP realmente disponível, cadastro externo, aprovador, estados/reenvio/cancelamento e eventual acesso sem cadastro.
- [D26 — Relatório do histórico de agenda](INTEGRACAO_E_DECISOES.md#D26) · dono E8-06. Definir neste item. Campos, filtros, recorte de acesso, retenção e se aprovação externa entra na amostra.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Série com uma ocorrência alterada e saneamento de sala | Consultar log e exportar | Ação, usuário e ocorrência corretos sem reescrita artificial de histórico. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-18:2](https://dcadv789.github.io/sigles-pedidos/#VS-18) — **execução: Histórico e relatórios de alterações da agenda**. Definir novos campos e filtros; validar os problemas da agenda. · status atual: Definir.
- Pendência detalhada OR13 — Melhorar relatórios e consultas do histórico de alterações de agenda.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-07"></a>

## E8-07 — Importações em lote de outros cadastros

**Ordem global:** 41/42. **Executar após:** E8-06. **Dependências técnicas:** [E7-02](entrega-07.md#E7-02).

### Entrada, saída e limite

- **Entrada:** D09/D18 e lista fechada D27 de cadastros-alvo.
- **Saída esperada:** Um modelo e um fluxo de importação por cadastro aprovado, sem expansão ilimitada.
- **Limite do item:** Só o cadastro já pago e definido entra; Cronograma é referência, não importador universal.

### Diagnóstico conferido no código

O relatório original cita a possibilidade de importação em lote, mas não define cadastros nem quantidade. Cronograma é referência técnica, não contrato universal de importação.

### Referência literal dos documentos originais

**Referência original RV31 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Possibilidade de realizar cadastros em lote por meio da importação de planilhas em outras funcionalidades do sistema;

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — PR 9 13f5075.
- [src/Controller/UsuarioController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/UsuarioController.php#L1) — dev 3ed9a38.
- [src/Controller/MaterialController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/MaterialController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Para cada cadastro-alvo, especificar colunas, tipos, obrigatoriedade, identidade, criar/atualizar, inativos, relacionamentos e tamanho de lote.
2. Reutilizar o padrão de validação, atomicidade e relatório de E7-02 no controller do domínio, sem criar nova API ou Service genérico.
3. Produzir modelo versionado e prévia de impacto; validar todas as referências e direitos antes da gravação.
4. Reimportar por chave de negócio e registrar criados/atualizados/recusados; não reativar cadastros por ausência de regra.
5. Homologar cada cadastro separadamente. Se a lista não estiver fechada, FECHO-8 mantém esse item aberto em vez de prometer todos os cadastros.

### Banco, arquivos e reversão

Não há migration geral presumida. Alterações dependem dos campos faltantes por cadastro e devem ser aditivas.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.
- [D11 — Permissões e recorte dos perfis](INTEGRACAO_E_DECISOES.md#D11) · dono E5-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- [D13 — Dados complementares de usuários](INTEGRACAO_E_DECISOES.md#D13) · dono E5-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Quais melhorias além das já entregues, regras temporais das férias e necessidade de campo novo.
- [D17 — Materiais, subcategorias e Almoxarifado](INTEGRACAO_E_DECISOES.md#D17) · dono E6-04. Consumir a decisão anterior, sem redefini-la silenciosamente. Tipo atende subcategoria? O compromisso é avaliar ou construir? Se construir: unidades, locais, movimentos, saldo negativo e estorno.
- [D18 — Importação ampliada](INTEGRACAO_E_DECISOES.md#D18) · dono E7-02. Consumir a decisão anterior, sem redefini-la silenciosamente. CSV/XLSX, Ambas, limites e eventual aceite parcial. Qualquer alteração de D09 exige revisão dos consumidores anteriores.
- [D27 — Cadastros-alvo de importação](INTEGRACAO_E_DECISOES.md#D27) · dono E8-07. Definir neste item. Lista paga/finita de cadastros, colunas, identidades, criar/atualizar, inativos e tamanho de lote.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Lote com chave existente, nova e referência inválida | Validar e importar | Erro de referência impede gravação conforme a política e repetição não duplica. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-14:1](https://dcadv789.github.io/sigles-pedidos/#VS-14) — **execução: Importações em lote de outros cadastros**. Escolher cadastros, colunas, formatos, validações e regras de duplicidade. · status atual: Definir.
- Pendência detalhada OR08 — Importação em lote em outras funcionalidades.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E8-08"></a>

## E8-08 — Estudos previstos de Aproveitamento de Disciplinas e NotebookLM

**Ordem global:** 42/42. **Executar após:** E8-07. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** Responsável acadêmico, processo atual e D28 da saída do estudo.
- **Saída esperada:** Viabilidade de Aproveitamento de Disciplinas e NotebookLM com limites e conclusão documentados.
- **Limite do item:** O fluxo completo do documento Adicional continua Aditivo; estudo não o marca entregue.

### Diagnóstico conferido no código

O pedido inicial contém estudo e avaliação. O novo fluxo completo de Aproveitamento de Estudos foi classificado pelo usuário como Adicional/Aditivo e não é implementado por este item.

### Referência literal dos documentos originais

**Referência original RV42 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> Foi discutida a possibilidade de desenvolvimento de um novo Módulo de Aproveitamento de Disciplinas, buscando automatizar atividades atualmente realizadas de maneira manual ou por ferramentas externas.

**Referência original RV43 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> A viabilidade e o escopo dessa funcionalidade deverão ser detalhados posteriormente, a partir do levantamento do fluxo atualmente utilizado, regras acadêmicas envolvidas, documentos necessários e possibilidades de automação.

**Referência original RV44 — Relatório de visita, página 3 — Detalhamento técnico: 8-) aproveitamento de disciplinas**

> Também foi mencionada a utilização de solução/processo relacionado ao Notebook LM, cuja eventual integração ou utilização deverá ser avaliada tecnicamente.

### Arquivos e pontos verificados

- [src/Entity/Disciplina.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L1) — dev 3ed9a38.
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) — dev 3ed9a38.
- [src/Controller/DisciplinaController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Levantar atores, entradas, documentos, regra acadêmica, decisão e saída atuais com amostra autorizada.
2. Produzir mapa do processo, dados existentes/faltantes, alternativas de automação e limites entre estudo inicial e desenvolvimento adicional.
3. Na futura execução do estudo, consultar documentação oficial vigente do NotebookLM, sem presumir API, licença ou conector; registrar fontes, data e conclusão favorável ou desfavorável.
4. Não enviar documentos reais a serviço externo sem autorização específica. Prova de conceito, se necessária e autorizada, usa dados sintéticos.
5. Entregar parecer de viabilidade com critérios de uma eventual implementação; não fechar AD-13 a AD-33 por concluir este estudo.

### Banco, arquivos e reversão

Sem alteração do banco e sem envio de documentos reais a serviço externo nesta fase de estudo.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D28 — Saída dos estudos acadêmicos](INTEGRACAO_E_DECISOES.md#D28) · dono E8-08. Definir neste item. Responsável, processo atual, resultado esperado e fontes oficiais a consultar na futura execução.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Processo e objetivo de estudo definidos | Revisar o parecer com responsável | Conclusão sustentada, limitações explícitas e nenhum fluxo Aditivo implementado por dedução. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-16:1](https://dcadv789.github.io/sigles-pedidos/#VS-16) — **execução: Estudos previstos de Aproveitamento de Disciplinas e NotebookLM**. Levantar o fluxo acadêmico e detalhar o módulo. · status atual: Pendente.
- [Quadro VS-16:2](https://dcadv789.github.io/sigles-pedidos/#VS-16) — **execução: Estudos previstos de Aproveitamento de Disciplinas e NotebookLM**. Avaliar o uso do NotebookLM e registrar o resultado. · status atual: Pendente.
- Pendência detalhada OR10 — Estudar e detalhar o módulo de Aproveitamento de Disciplinas.
- Pendência detalhada OR11 — Avaliar eventual integração ou utilização de Notebook LM.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-8"></a>

## FECHO-8 — Condição para seguir

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
