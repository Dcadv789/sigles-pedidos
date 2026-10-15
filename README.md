# Quadro de pedidos SIGLES

[Abrir o quadro](https://dcadv789.github.io/sigles-pedidos/)

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
