# Entrega 3.5 — Bloqueio de reservas sobrepostas

**Atualização: 20/10/2026 · Publicada em homologação · Aguardando aceite de Daniel.**

[PR #40](https://github.com/Dcadv789/sigles/pull/40) · [Testar na Agenda](https://sistemas.economia.esalq.usp.br/des/agenda/) · [Voltar à sequência](index.html) · [Escopo restante E8-01](entrega-8.html#E8-01)

## Posição no cronograma

Entrega 3 (v1.3.0 em produção) → **Entrega 3.5** → Entrega 4 → Entrega 5 → Entrega 6 → Entrega 7 → Entrega 8.

Demanda urgente relatada pela contratante: reservas simultâneas da mesma sala. A correção já constava de E8-01 e D21. Foi antecipada apenas a parcela necessária ao bloqueio, sem nova cobrança e sem encerrar toda a revisão de recorrências. Base: Entrega 3 publicada; PRs #9 e #36 não foram incorporadas.

## E3.5-01 — O que mudou

- Criar, editar e reativar uma reserva agora confere reservas, repetições, exceções e aulas já cadastradas da mesma sala.
- Duas tentativas simultâneas são verificadas sob bloqueio transacional: apenas a primeira pode ocupar o horário.
- Horários sobrepostos são recusados. Começar exatamente quando a reserva anterior termina continua permitido.
- A edição confere as mesmas datas que serão gravadas. Séries incluem a última data e suas ocorrências futuras; ao alterar uma ocorrência, as outras continuam protegidas.
- Disponibilidade reconhece eventos iniciados antes do período pesquisado e interpreta corretamente datas em português; usa o ID do cadastro da sala.

## O que continua na Entrega 8

Revisão integral de esta/futuras/todas e exclusão de recorrências, seleção de sala na consulta e bloqueios manuais (E8-02), saneamento de salas duplicadas (E8-03), reservas externas/aprovações (E8-04). A concorrência entre gravação de reservas da Agenda e outros gravadores de turmas/importações ainda precisa adotar o mesmo protocolo na integração desses fluxos. Não há promessa de bloqueio universal de todos os escritores de cronograma nesta antecipação.

Não foram unificados cadastros duplicados nem canceladas reservas históricas. A estrutura do banco não mudou: nenhuma migration nova. O número 3.5 é a entrega; a versão candidata é v1.3.1-beta1.

## Evidências e aceite

- 32 testes automatizados, 61 asserções, e 49 verificações locais com gravação no clone isolado.
- 24 verificações HTTP em homologação; concorrência em duas sessões: 200/409, uma única reserva. Simulações e salas temporárias inativadas.
- Container, PHP e Twig conferidos. Publicação de homologação concluída na execução [39460536898](https://github.com/Dcadv789/sigles/actions/runs/39460536898).
- Nenhuma escrita desta tarefa em produção. Produção aguarda o teste e a autorização de Daniel.

Para testar: criar uma reserva; tentar outra no mesmo horário/sala; tentar sobreposição parcial; editar para horário ocupado; conferir uma repetição na última data. Todos devem recusar o conflito. Horário adjacente ou sala diferente deve permitir.

## Rastreio

WI-03:2 foi transferido; WI-03:1 e WI-18:3 tiveram a parcela de bloqueio/datas antecipada. Os complementos continuam rastreados em E8-01. Os percentuais macro 15/15/20/50 são a referência original; não foram recalculados como se esta antecipação adicionasse esforço novo.

Antes de publicar a Entrega 4, integrar esta correção à base cumulativa para não perder o bloqueio. A PR #40 permanece aberta aguardando o aceite; não foi feito merge nem deploy de produção.
