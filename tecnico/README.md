# SIGLES — Cronograma e situação das entregas

**Atualizado em 21/10/2026.**

Atualização de 21/10/2026: Entregas 1, 2, 3 e 3.5 em produção; produção atual v1.3.3. Entrega 4 em homologação na v1.4.0-beta2, PR #9 aberta e sem merge. Entrega 5 implementada em rascunho na PR #36, ainda precisa incorporar a base atual e passar por homologação. Entregas 6 a 8: escopo restante planejado.

## Sequência cumulativa

1 → 2 → 3 → **3.5** → 4 → 5 → 6 → 7 → 8

| Entrega | Tema | Situação |
|---|---|---|
| 1 | [Cadastros, usuários e compras](entrega-01.md) | Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático |
| 2 | [Disciplinas, relatórios, planos e login](entrega-02.md) | Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático |
| 3 | [Ordens de serviço, orçamentos e aniversários](entrega-03.md) | Publicado em produção — v1.3.0; complementos gerais de revisão permanecem individualizados |
| 3.5 | [Agenda, proteção das salas e estabilidade](entrega-3.5.md) | Publicado em produção — v1.3.3; dados legados aguardam coordenação |
| 4 | [Integração e conclusão dos cronogramas](entrega-04.md) | Publicado em homologação — v1.4.0-beta2; aceite e produção pendentes |
| 5 | [Usabilidade, cadastros e acesso](entrega-05.md) | Código na PR #36; atualizar base, validar visualmente e homologar |
| 6 | [Fornecedores e operação administrativa](entrega-06.md) | Não executado |
| 7 | [Complementos acadêmicos e consolidações](entrega-07.md) | Não executado |
| 8 | [Agenda, reservas externas, integrações e estudos](entrega-08.md) | Somente escopo restante planejado; E8-01 transferido à 3.5 |

## O que foi antecipado

Reservas, recorrências, disponibilidade, permissões de edição, bloqueio entre aulas e reservas, concorrência, consulta/edição da Agenda, Relatório de reservas e ajustes de login/sessão publicados na Entrega 3.5 (v1.3.1/v1.3.2/v1.3.3). A implementação saiu da fila da Entrega 8. Os pesos 15/15/20/50 continuam apenas como referência histórica, sem recalcular prazos ou cobrança.

## Pendências que não devem desaparecer

- Dados legados: 25 cruzamentos reserva/aula foram resolvidos por 23 remanejamentos autorizados. Restam 172 pares de ocorrências acadêmicas preexistentes para a coordenação: 21 entre disciplinas diferentes e 151 para confirmar identificação/compartilhamento. São alertas de dados antigos, não 172 novos agendamentos. Não remanejar automaticamente.
- Entrega 4: aceite funcional, arquivo original no modelo XLSX e ensaio da classificação de salas antes de produção.
- Entrega 5: reconciliar a PR #36 com a base atual antes de homologar; manter as limitações ORM e da suíte antiga de Compras registradas.
- Entregas 6 a 8: somente escopo restante, sem repetir 3.5/4.

## Controles

[Decisões e integração](INTEGRACAO_E_DECISOES.md) · [Cobertura por pedido](COBERTURA_E_CONFERENCIA.md)

As referências de código de 16/10 são snapshots históricos. Para execução, confirmar as refs atuais. A atualização documental não executou banco, testes ou deploy do SIGLES.
