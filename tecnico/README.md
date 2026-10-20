# SIGLES — Planos técnicos em cadeia, entregas 1 a 8

> 20/10/2026 — a parcela urgente de bloqueio de ocupação de E8-01/D21 foi antecipada para a Entrega 3.5 (PR #40), publicada somente em homologação como v1.3.1-beta1 e aguardando aceite de Daniel. O restante de E8-01 continua na Entrega 8; não duplicar esta implementação. [Plano da Entrega 3.5](entrega-3.5.html).

**Revisão 02 · 16/10/2026.** Revisão documental/técnica concluída; execução funcional não iniciada.

[Abrir a página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/)

Primeiro fechar as lacunas de 1 a 4; depois executar 5 a 8. Há **42 itens técnicos**, um Markdown por entrega, **84 cenários de aceite** e 28 decisões identificadas. Decisões são propostas para revisão, não regras homologadas. Aditivos continuam excluídos.

## Sequência obrigatória

| Ordem | Arquivo de planejamento | Itens | Entrada → saída |
|---|---|---:|---|
| 1 | [Entrega 1 — Cadastros, usuários e compras](entrega-01.md) | 6 | BASE-0 → FECHO-1 |
| 2 | [Entrega 2 — Disciplinas, relatórios, planos e login](entrega-02.md) | 4 | FECHO-1 → FECHO-2 |
| 3 | [Entrega 3 — Ordens de serviço, orçamentos e aniversários](entrega-03.md) | 5 | FECHO-2 → FECHO-3 |
| 4 | [Entrega 4 — Integração e conclusão dos cronogramas](entrega-04.md) | 7 | FECHO-3 → FECHO-4 |
| 5 | [Entrega 5 — Usabilidade, cadastros e acesso](entrega-05.md) | 4 | FECHO-4 → FECHO-5 |
| 6 | [Entrega 6 — Fornecedores e operação administrativa](entrega-06.md) | 4 | FECHO-5 → FECHO-6 |
| 7 | [Entrega 7 — Complementos acadêmicos e consolidações](entrega-07.md) | 4 | FECHO-6 → FECHO-7 |
| 8 | [Entrega 8 — Agenda, reservas externas, integrações e estudos](entrega-08.md) | 8 | FECHO-7 → FECHO-8 |

Cada item tem entrada, saída, limite, passos, pontos de código verificados, decisões, massa/ação/resultado de aceite e vínculo com o pedido. Cada entrega fecha em homologação antes da próxima. Isso é uma sequência de trabalho; publicação em produção depende de uma etapa operacional futura.

## Documentos de controle

- [Regras únicas, decisões e integração](INTEGRACAO_E_DECISOES.md): D01–D28, dono de cada decisão, consumidores e ordem dos arquivos compartilhados.
- [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md): cada parte do Pedido inicial ligada à tarefa responsável, com execução, parcela ou aceite distinguidos.

## O que foi corrigido nesta revisão

- E5-03 corrigido para nome_abreviado; criação e edição de nome/e-mail passam a ser verificadas no cliente, controller, repository e serialização.
- E5-04 vem primeiro na entrega 5 para fechar o recorte antes de ajustar o Dashboard.
- Crédito D05 é decidido uma vez na 2; se mudar de nível, só a 7 implementa o modelo e revalida as leituras anteriores.
- D09 sobre identidade/atomicidade já entra na 4; a 7 amplia o mesmo importador, evitando sobrescrever outro dia/docente e repetir decisões.
- Reservas E8-01 incluem data nula, sobreposição na janela, aulas, IDs, recorrência e concorrência; E8-04 só aprova usando esse contrato.
- E8-03 precede a liberação de reservas externas e inclui simulação de colisões antes de juntar salas.
- A comparação de árvores da PR foi qualificada: ela revela divergências, não prova exclusão automática por merge. A integração usa a base cumulativa do FECHO-3.
- Os 42 itens agora têm entrada, saída, limite, roteiro, massa/ação/resultado de aceite, decisões e ligação ao fechamento da entrega.
- Aditivos e status funcionais foram preservados. Estudos, equivalência e construção paga têm critérios distintos de encerramento.

## Preparação antes da execução

- BASE-0: recalcular refs dev/main/PR e registrar o commit que será a base. Os hashes deste documento são evidência da leitura, não autorização para sobrescrever mudanças posteriores.
- Preservar o trabalho local de Cronograma, a alteração já staged de .gitignore e documentos existentes. Preparar checkout limpo e branch codex/; nunca resetar arquivos para iniciar.
- Confirmar ambiente e conexão esalq_sistema_des antes de comandos de aplicação/migrations. Se o acesso não estiver disponível, solicitar o túnel sem expor credenciais. Nenhuma consulta ao banco foi necessária nesta revisão documental.
- Usar massa sintética com datas fixas, IDs identificáveis e e-mails de prova; mapear as migrations executadas e guardar reversão seletiva antes de qualquer saneamento.
- Registrar um responsável funcional por decisão D01–D28. Definir uma decisão na sua tarefa dona antes de iniciar consumidores; não é necessário interromper o planejamento para isso.
- Não definir versão de produção apenas pelo nome histórico da entrega. Cada fechamento produz um commit cumulativo de homologação, preservando todas as correções anteriores.

## Distribuição de esforço

As metas macro de 5/6/7/8 permanecem **15% / 15% / 20% / 50%**. São divisão relativa pretendida, não horas medidas nem evidência de que o esforço real já foi estimado. Os fechamentos antecipados para 1 a 4 ficam nessas entregas e não são outra implementação nos grupos 5 a 8. Decisões de alcance, especialmente estoque, importações e acesso externo, precisam ser fechadas para conferir o peso real.

## Resultado da conferência estrutural

Sem ciclos, dependências futuras ou dupla implementação integral nas relações verificadas; regras de negócio pendentes identificadas. Não é resultado de testes funcionais.

- 70 dependências técnicas verificadas contra a ordem.
- 194 referências de código conferidas em arquivos e âncoras dos snapshots.
- 85 partes iniciais com plano; 53 ainda sem número de entrega implementada, incluindo o roteiro geral.
- 48 pedidos de origem Adicional preservados como Aditivo, sem implementação neste escopo.
- Banco não consultado nesta revisão; código não executado, PR não integrada, migrations e deploy do SIGLES não executados.

## Base e limites

- dev lida: 3ed9a38415417b8a4ead22ecd472f758b3506db1.
- PR 9 lida: 13f5075b4685f7a26008e63810d38bd8516f558f; aberta, base ordem-servico e conflitante na conferência.
- O diff de árvores aponta divergências; não prova que o merge apagaria todos os arquivos divergentes.
- Condições de banco, FKs, dados legados e comportamento real precisam de validação no teste durante a execução.
- As alterações locais do usuário foram preservadas.
