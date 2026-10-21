# Quadro e cronograma de entregas SIGLES

**Atualizado em 21/10/2026.**

Atualização de 21/10/2026: Entregas 1, 2, 3 e 3.5 em produção; produção atual v1.3.3. Entrega 4 em homologação na v1.4.0-beta2, PR #9 aberta e sem merge. Entrega 5 implementada em rascunho na PR #36, ainda precisa incorporar a base atual e passar por homologação. Entregas 6 a 8: escopo restante planejado.

- [Quadro com busca e filtros](https://dcadv789.github.io/sigles-pedidos/)
- [Cronograma e situação das entregas](https://dcadv789.github.io/sigles-pedidos/tecnico/)
- [Escopo restante das entregas 5 a 8](https://dcadv789.github.io/sigles-pedidos/planejamento.html)

## Arquivos que alimentam as páginas

- `dados.js`: 100 pedidos, partes, situações e vínculos técnicos do quadro filtrável.
- `tecnico/planos.json`: entregas, tarefas, decisões e cobertura. Markdown e HTML são mantidos em conjunto.
- `planejamento.json`: macro do escopo futuro, com 8.1 transferido para o histórico da 3.5.

15/15/20/50 são pesos históricos do planejamento original das entregas 5 a 8. Com a antecipação para 3.5, não representam o esforço restante recalculado nem horas. Não cobrar ou implementar novamente o que já foi entregue.

Os 48 pedidos de origem Adicional permanecem Aditivo. Classificação comercial e texto do pedido original foram preservados. `cliente.html` é a apresentação comercial atualizada: entregas, escopo incluído e pacotes adicionais com justificativas e limites para evitar cobrança duplicada. `APRESENTACAO_CLIENTE.md` mantém o texto correspondente. GitHub Pages publica a raiz de `main`, sem compilação. Nenhum dado, credencial ou arquivo real de banco pertence a este repositório.

## Endereço separado para o cliente

- Apresentação: https://dcadv789.github.io/sigles-cliente/
- Referências dos pedidos: https://dcadv789.github.io/sigles-cliente/referencias.html

A apresentação está em repositório próprio e não contém links para este quadro ou os planos técnicos. Os dois sites continuam públicos, conforme decisão de Daniel: a separação é de conteúdo e navegação, sem autenticação. Os endereços antigos cliente.html e referencias-comerciais.html redirecionam ao site do cliente.
