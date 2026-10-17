# Quadro de pedidos SIGLES

[Abrir o quadro](https://dcadv789.github.io/sigles-pedidos/)

[Planejamento funcional das entregas 5 a 8](https://dcadv789.github.io/sigles-pedidos/planejamento.html) — proposta de 16/10/2026, restrita ao restante de Pedido inicial, com divisão de esforço relativo de 15%, 15%, 20% e 50%. As novas entregas ainda não estão implementadas. Os status do quadro de conferência permanecem independentes do planejamento.

Conferência atualizada em **15/10/2026**, preservando os 52 identificadores e pedidos do quadro anterior. As descrições dos pedidos são os resumos que já estavam nesta página, não transcrições literais dos documentos originais. Os pedidos podem se sobrepor e não representam 52 funcionalidades independentes.

- **Entrega 1:** cadastros, usuários e compras, em produção (v1.1.0/v1.1.1).
- **Entrega 2:** disciplinas, relatórios e login, em produção (v1.2.0/v1.2.1).
- **Entrega 3:** OS e aniversariantes, em homologação (v1.3.0-beta).
- **Entrega 4:** cronogramas no [PR 9](https://github.com/Dcadv789/sigles/pull/9), revisão `13f5075`, ainda sem integração ou homologação.

## Interpretação dos status

O status principal resume o pedido. Os detalhes discriminam as partes atendidas, a entrega correspondente e as pendências. Um item parcial pode conter mudanças já em produção. “Já existente” identifica funções anteriores à entrega 1, sem atribuir uma nova entrega. “Validar” exige reproduzir o caso relatado; a anotação “FEITO” no documento não substitui essa conferência. Implementação identificada no código não equivale ao teste de aceite de todos os cenários.

Os status ficam publicados em `dados.js` e são iguais para todos os visitantes. A antiga chave `sigles-pedidos-done` do navegador não é usada nem apagada. Não há edição de status ou gravação no sistema SIGLES pela página.

## Arquivos

`index.html` contém a apresentação e os filtros; `dados.js` reúne o conteúdo conferido por pedido. A página funciona sem compilação, inclusive abrindo o HTML localmente com os dois arquivos na mesma pasta. O GitHub Pages publica a raiz da branch `main`.

`cliente.html` preserva a apresentação de cronograma anterior e não recebeu esta revisão de status. Para o acompanhamento atual, use o quadro principal.

## Cobrança adicional

O filtro oferece **Pedido inicial** e **Aditivo**, com classificação por parte do pedido. Pedidos mistos aparecem nos dois filtros. A recomendação atual marca como aditivo a gestão de comissões (WI-21), o envio automático dos avisos de contratos (parte de WI-09) e o bloqueio automático de feriados (parte de WI-22).

A antecedência no Dashboard já entregue, a configuração de 45 dias, a validação do bloqueio manual e as correções das funções existentes permanecem no pedido inicial. A classificação não representa cobrança aceita: feriados e avisos exigem conferir aprovações, entregas e pagamentos anteriores. Aproveitamento de disciplinas, avaliação do NotebookLM e reservas de alunos/externos já aparecem no relatório original; não foram tratados automaticamente como adicionais. Uma implementação ampliada deve ser delimitada antes de reclassificar.

## Documento adicional

Em 15/10/2026 foram acrescentados 48 pedidos de **Adiçoes do SIGLES.docx**, com IDs AD-01 a AD-48, origem **Adicional** e cobrança **Aditivo** em todas as partes, conforme instrução expressa do usuário. Os 95 parágrafos não vazios foram associados às referências, incluindo títulos, contexto e links dos modelos. O quadro passa a 100 pedidos.

A classificação comercial não altera o status de implementação. AD-01 registra o responsável já existente na entrega 2 e a definição de vários responsáveis; AD-02 se sobrepõe à coluna pendente de WI-14. Os caminhos de formulário e de anexação das atas são alternativas, sem presumir duas implementações obrigatórias. Os modelos externos são referências para conferência, sem presumir seus campos não extraídos.

## Ordem técnica das entregas 1 a 8

[Índice dos oito planos técnicos](https://dcadv789.github.io/sigles-pedidos/tecnico/) — 42 itens planejados em 16/10/2026. Cada entrega tem um Markdown e uma página HTML, com diagnóstico, arquivos verificados, alterações previstas, dados, dependências, decisões e testes de aceite. O quadro liga cada parte de Pedido inicial ao item técnico correspondente. Aditivos ficam fora. O plano não executou correções no sistema.

## Revisão técnica 02 — 16/10/2026

[Planos revisados em cadeia](https://dcadv789.github.io/sigles-pedidos/tecnico/) — entrada/saída, regra dona, dependências, testes de aceite e fechamento por entrega. [Decisões e integração](https://dcadv789.github.io/sigles-pedidos/tecnico/integracao.html). Nenhum status funcional alterado por esta revisão.
