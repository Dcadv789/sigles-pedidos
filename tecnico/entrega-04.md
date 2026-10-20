# Entrega 4 — Planejamento técnico revisado

> 20/10/2026 — a parcela urgente de bloqueio de ocupação de E8-01/D21 foi antecipada para a Entrega 3.5 (PR #40), publicada somente em homologação como v1.3.1-beta1 e aguardando aceite de Daniel. O restante de E8-01 continua na Entrega 8; não duplicar esta implementação. [Plano da Entrega 3.5](entrega-3.5.html).

**Integração e conclusão dos cronogramas**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-4.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-3: entrega anterior aceita em homologação.
- **Saída:** FECHO-4, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Integração da PR 9 e homologação. Aditivos continuam fora.

## Ordem interna obrigatória

16. [E4-01 — Reconstruir a integração da PR sobre a dev atual](#E4-01)
17. [E4-06 — Conferir a migration de sala_aula e sua reversão](#E4-06)
18. [E4-02 — Criação unificada, cópia e datas brasileiras](#E4-02)
19. [E4-03 — Fechar a exportação de todos os cursos](#E4-03)
20. [E4-04 — Aplicar filtros de salas e docentes de ponta a ponta](#E4-04)
21. [E4-05 — Aceite da importação CSV da PR](#E4-05)
22. [E4-99 — Revisão final e integração da entrega 4](#E4-99)

Depois do último item, conferir **FECHO-4** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E4-01"></a>

## E4-01 — Reconstruir a integração da PR sobre a dev atual

**Ordem global:** 16/42. **Executar após:** FECHO-3. **Dependências técnicas:** [E2-03](entrega-02.md#E2-03).

### Entrada, saída e limite

- **Entrada:** FECHO-3, refs recalculadas e inventário das alterações locais não commitadas.
- **Saída esperada:** Branch de integração sobre a base cumulativa aprovada, com preservações comprovadas.
- **Limite do item:** Reaplicar intenção dos incrementos; o diff direto de árvores não prova que um merge Git deletaria tudo.

### Diagnóstico conferido no código

A PR 9 está aberta, base ordem-servico, e o GitHub informa conflitos. Sua árvore é anterior a correções da dev. Comparar árvores mostra arquivos divergentes, mas não demonstra que um merge removeria todos esses arquivos. A futura integração deve preservar a base cumulativa aceita e reaplicar só as intenções de cronogramas, conciliando o trabalho local.

### Referência literal dos documentos originais

**Referência original DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

**Referência original DI34 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 75**

> Retirar a página inicial, logo após clicar no semestre do cronograma e ir direto para os dados.

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:128](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L128) — PR 9 13f5075.
- [templates/cronograma/cronograma.js:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L1) — PR 9 13f5075.
- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) — dev 3ed9a38.
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Recalcular merge-base, commits próprios e diff da PR 9. A PR continua com base ordem-servico; trocar base é uma alteração futura, não executada por este plano.
2. Criar checkout limpo baseado no commit cumulativo do FECHO-3, não no snapshot antigo 3ed9a38. Registrar diff/patch das alterações locais sem descartá-las nem publicá-las automaticamente.
3. Reaplicar os incrementos 9dab4c5/13f5075 por intenção, conferindo o patch completo antes de escolher cherry-pick ou reaplicação manual.
4. Conciliar cada alteração local com o resultado pretendido, especialmente parsing de datas e modais; registrar aceito, incorporado ou preservado separadamente.
5. Comparar a árvore resultante com a base cumulativa: manter migrations, login, compras, responsáveis e visualizador. Atualizar a PR apenas na futura implementação.

### Banco, arquivos e reversão

Nenhuma migração será removida por faltar na branch antiga. Nenhum merge, cherry-pick ou push no SIGLES foi executado no planejamento.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

Nenhuma nova decisão de negócio específica; manter os contratos anteriores e reproduzir o caso antes de alterar código.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Base FECHO-3 e incrementos cronograma | Revisar diff final | Somente mudanças intencionais, sem regressão das entregas 1 a 3. |
| Arquivos locais modificados | Comparar antes/depois da preparação | Nenhum arquivo do usuário perdido ou substituído. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

Item técnico de integração/preservação/aceite; não cria outro pedido nem cobrança.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-06"></a>

## E4-06 — Conferir a migration de sala_aula e sua reversão

**Ordem global:** 17/42. **Executar após:** E4-01. **Dependências técnicas:** [E4-01](entrega-04.md#E4-01).

### Entrada, saída e limite

- **Entrada:** Inventário da migration e D08 de classificação das salas.
- **Saída esperada:** Critério de sala de aula/reservável e estratégia de dados reversível no teste.
- **Limite do item:** Não confundir sala de aula com sala reservável; duplicidades são remapeadas em E8-03.

### Diagnóstico conferido no código

Version20260911120000 marca salas usadas em turma OU reserva como sala de aula. Seu down limpa todos os flags 1, inclusive os que poderiam existir antes. Esse comportamento não deve ser aplicado ou revertido sem conferir a regra e o estado anterior.

### Referência literal dos documentos originais

**Referência original DI31 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 72**

> No filtro de salas tanto no cadastro quanto na página inicial, só aparecer as salas possíveis de reserva e não todas como aparecem.

### Arquivos e pontos verificados

- [migrations/Version20260911120000.php:17](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/migrations/Version20260911120000.php#L17) — PR 9 13f5075.
- [src/Entity/Sala.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Sala.php#L1) — dev 3ed9a38.
- [src/Repository/ReservaRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/ReservaRepository.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Conferir se Version20260911120000 está registrada e quais valores existiam; ausência de snapshot impede alegar reversão exata dos valores antigos.
2. Comparar sala com turma, com reunião, sem uso e com marcação manual. Registrar D08 antes de usar sala_aula como filtro de reserva.
3. Se a migration não foi executada, desenhar sua entrada segura mantendo a rastreabilidade; se já executada, preservar a versão e criar correção aditiva seletiva.
4. Preparar mapa ID→valor anterior/novo para os casos conhecidos; registros de origem incerta precisam de validação, não de inferência pela ausência de uso.
5. Proibir down que zera todos os flags. Entregar o critério a E4-04 e o mapa de classificação a E8-03.

### Banco, arquivos e reversão

Migração de dados potencialmente necessária após o diagnóstico; nenhuma escrita em produção. Valores prévios precisam de snapshot para reversão seletiva.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Definir neste item. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Sala só de reunião e sala letiva | Aplicar o critério D08 em massa de teste | Cada uma recebe somente a classificação aprovada. |
| Flag manual preexistente e sem snapshot | Ensaiar compensação | Flag não é apagado por regra ampla; incerteza fica registrada. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

Item técnico de integração/preservação/aceite; não cria outro pedido nem cobrança.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-02"></a>

## E4-02 — Criação unificada, cópia e datas brasileiras

**Ordem global:** 18/42. **Executar após:** E4-06. **Dependências técnicas:** [E4-01](entrega-04.md#E4-01), [E2-02](entrega-02.md#E2-02).

### Entrada, saída e limite

- **Entrada:** E4-01, D05 e D09 de identidade e gravação de turmas.
- **Saída esperada:** Criar vazio/copiar com datas válidas e alvo correto, sem alterar origem ou copiar a mesma turma duas vezes.
- **Limite do item:** Ampliar formatos e corrigir edição por dia são tarefas de E7; preservar o contrato definido agora.

### Diagnóstico conferido no código

A PR reúne criação vazia, cópia e CSV em Novo cronograma e introduz parseDataCronograma. Há alterações locais no mesmo conjunto de arquivos que precisam ser conciliadas na implementação.

### Referência literal dos documentos originais

**Referência original DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

**Referência original DI32 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 73**

> Ao importar o cronograma de um semestre para o outro, colocarmos início e fim, na mesma tela e já aparecer no cronograma, deixando livre para alterarmos, pois as disciplinas da pós, nós alteramos todos os semestres e elas tem início e fim diferentes.

**Referência original DI33 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 74**

> Na página de importação do cronograma acrescentar as opções de baixar não só os dados das turmas da graduação, mas da pós-graduação ou ambos.

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:656](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L656) — PR 9 13f5075.
- [src/Controller/CronogramaController.php:940](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L940) — PR 9 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — PR 9 13f5075.
- [templates/disciplina_turma/modal_editar.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/disciplina_turma/modal_editar.html.twig#L1) — PR 9 13f5075.
- [src/Repository/DisciplinaTurmaRepository.php:30](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Repository/DisciplinaTurmaRepository.php#L30) — PR 9 13f5075.

### Roteiro de implementação

1. Documentar payload de origem vazio/cópia/CSV, ano, semestre, recorte e início/fim. Tratar POST inválido antes de persistir qualquer DisciplinaSemestre.
2. Validar datas por formato e round-trip; aceitar somente os formatos declarados pelo fluxo, rejeitando datas normalizadas como 31/02.
3. Definir precedência entre datas alvo e datas específicas de pós. A cópia não altera a origem e não cria um segundo vínculo de semestre para a mesma disciplina.
4. Copiar em transação com a identidade D09, preservando cursos, docentes, sala, crédito D05 e relação de AceiteDocente conforme a regra existente.
5. Registrar contagem prevista/criada/atualizada e tratar repetição da operação explicitamente.

### Banco, arquivos e reversão

Reutilizar entidades de disciplina_semestre e turma. Validar antes de persistir e usar transação no conjunto copiado quando houver risco de criação parcial.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Definir neste item. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Graduação e pós com datas diferentes | Copiar cada recorte e Ambos | Somente alvo alterado, recorte preservado e datas editáveis depois. |
| Cópia repetida e data 31/02 | Submeter | Sem duplicação silenciosa e nenhuma gravação com data inválida. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

Item técnico de integração/preservação/aceite; não cria outro pedido nem cobrança.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-03"></a>

## E4-03 — Fechar a exportação de todos os cursos

**Ordem global:** 19/42. **Executar após:** E4-02. **Dependências técnicas:** [E4-02](entrega-04.md#E4-02).

### Entrada, saída e limite

- **Entrada:** Cursos ativos e formato de exportação por linha definidos.
- **Saída esperada:** Todos os cursos da disciplina disponíveis no JSON e Excel, sem multiplicar linhas.
- **Limite do item:** Curso da turma e lista de cursos oferecidos pela disciplina são campos distintos.

### Diagnóstico conferido no código

O JavaScript da PR prepara cursos_disciplina, mas a consulta retorna o curso ligado à turma. A apresentação da exportação ainda não tem os dados prometidos.

### Referência literal dos documentos originais

**Referência original DI29 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 70**

> Ao baixar o arquivo do cronograma, termos a opção de aparecerem todos os cursos para os quais as disciplinas são oferecidas.

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:424](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L424) — PR 9 13f5075.
- [templates/cronograma/cronograma.js:671](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L671) — PR 9 13f5075.
- [src/Entity/DisciplinaCurso.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaCurso.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Carregar todos os vínculos DisciplinaCurso relevantes em consulta por lote; definir se a atividade é do vínculo, do curso e da disciplina.
2. Acrescentar cursos_disciplina como coleção estável e manter os campos legados necessários; resolver ordenação e nomes repetidos por IDs.
3. Renderizar vários nomes na célula da exportação com separador claro e HTML removido; sem curso, usar vazio/indicador acordado.
4. Comparar número de linhas e carga antes/depois para impedir fan-out por JOIN em cursos.

### Banco, arquivos e reversão

Sem nova tabela. Consultas parametrizadas e tratamento de disciplina sem curso.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

Nenhuma nova decisão de negócio específica; manter os contratos anteriores e reproduzir o caso antes de alterar código.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina em três cursos e turma ligada a um | Exportar cronograma | Três cursos na célula, uma linha de turma e mesma carga. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-13:2](https://dcadv789.github.io/sigles-pedidos/#WI-13) — **execução: Fechar a exportação de todos os cursos**. Exportar todos os cursos da disciplina: o servidor ainda retorna só o curso da turma. · status atual: Pendente.
- Pendência detalhada CR01 — Mostrar todos os cursos vinculados à disciplina no arquivo exportado.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-04"></a>

## E4-04 — Aplicar filtros de salas e docentes de ponta a ponta

**Ordem global:** 20/42. **Executar após:** E4-03. **Dependências técnicas:** [E4-06](entrega-04.md#E4-06).

### Entrada, saída e limite

- **Entrada:** D08, cadastro Docente/Usuario e caso original do docente sênior.
- **Saída esperada:** Filtros aplicados no servidor e em todos os seletores, preservando vínculos históricos.
- **Limite do item:** Elegibilidade de sala não garante disponibilidade no horário; essa regra pertence a E8-01/E8-02.

### Diagnóstico conferido no código

A PR envia sala_aula, mas SalaController::list continua filtrando apenas active. O filtro de docente precisa considerar o cadastro docente e o usuário associado.

### Referência literal dos documentos originais

**Referência original DI07 — Documento inicial SINGLES — ERROS / USUÁRIOS — parágrafo 23**

> O perfil de docente sênior, não está aparecendo no cronograma, somente docente.

**Referência original DI30 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 71**

> Ao cadastrar outro docente na turma, na pesquisa aparecem os docentes inativos;

**Referência original DI31 — Documento inicial SINGLES — ALTERAÇÕES / 4. CRONOGRAMA — parágrafo 72**

> No filtro de salas tanto no cadastro quanto na página inicial, só aparecer as salas possíveis de reserva e não todas como aparecem.

### Arquivos e pontos verificados

- [src/Controller/SalaController.php:37](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/SalaController.php#L37) — PR 9 13f5075.
- [src/Controller/DisciplinaController.php:74](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L74) — dev 3ed9a38.
- [src/Controller/DocenteController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DocenteController.php#L1) — dev 3ed9a38.
- [templates/cronograma/cronograma.js:188](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/cronograma.js#L188) — PR 9 13f5075.

### Roteiro de implementação

1. Inventariar seletor principal, modal de turma e incluir outro docente; enviar parâmetros uniformes e realmente aplicá-los nas queries.
2. Validar atividade de Docente e Usuario e conferir o perfil real do sênior, sem lista arbitrária de IDs. Não reativar usuário só para aparecer no seletor.
3. Aplicar o critério D08 nas salas do cronograma; não assumir que salaAula equivale a reservável.
4. Na edição histórica, apresentar o vínculo inativo atual identificado como tal, mas impedir nova atribuição indevida; não apagar o vínculo por ele sair da lista.
5. Testar persistência no servidor, não apenas ocultação de opções na UI.

### Banco, arquivos e reversão

Campo sala_aula já existe; o saneamento de seus valores está em E4-06. Sem exclusão de referências históricas.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D08 — Sala de aula e sala reservável](INTEGRACAO_E_DECISOES.md#D08) · dono E4-06. Consumir a decisão anterior, sem redefini-la silenciosamente. Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Docente sênior ativo, usuário inativo e docente inativo | Pesquisar nos três pontos | Só elegíveis para nova atribuição; sênior ativo disponível. |
| Turma antiga em sala inativa | Abrir e salvar outro campo | Vínculo antigo legível, sem remoção silenciosa. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-04:1](https://dcadv789.github.io/sigles-pedidos/#WI-04) — **execução: Aplicar filtros de salas e docentes de ponta a ponta**. Conferir o cadastro e os filtros com o docente do caso original. · status atual: Validar.
- [Quadro WI-13:3](https://dcadv789.github.io/sigles-pedidos/#WI-13) — **execução: Aplicar filtros de salas e docentes de ponta a ponta**. Aplicar no servidor o filtro das salas elegíveis. · status atual: Pendente.
- [Quadro WI-13:4](https://dcadv789.github.io/sigles-pedidos/#WI-13) — **execução: Aplicar filtros de salas e docentes de ponta a ponta**. Confirmar a seleção de docentes inativos no caso relatado. · status atual: Validar.
- Pendência detalhada ER06 — Mostrar Docente Sênior na seleção de docentes do cronograma.
- Pendência detalhada CR02 — Ocultar docentes inativos ao incluir outro docente na turma.
- Pendência detalhada CR03 — Mostrar apenas salas elegíveis para reserva no cadastro e no filtro do cronograma.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-05"></a>

## E4-05 — Aceite da importação CSV da PR

**Ordem global:** 21/42. **Executar após:** E4-04. **Dependências técnicas:** [E4-02](entrega-04.md#E4-02), [E4-04](entrega-04.md#E4-04).

### Entrada, saída e limite

- **Entrada:** Modelo CSV, arquivo de erro original quando disponível e D09.
- **Saída esperada:** Importação básica segura: estrutura validada, lote coerente e chave de turma definida.
- **Limite do item:** XLSX e relatório ampliado são E7-02; atomicidade e identidade não podem ser adiadas para lá.

### Diagnóstico conferido no código

O importador usa colunas fixas, delimitador ponto e vírgula e valida getClientMimeType como text/csv. O arquivo original do cliente ainda precisa de aceite. O código tem flushes intermediários sem transação explícita, conversão fixa Latin-1, leitura limitada a 1000 e chave que não inclui dia/horário/docente. São riscos verificáveis de gravação parcial, corrupção e sobrescrita, a confirmar com testes na execução.

### Referência literal dos documentos originais

**Referência original DI01 — Documento inicial SINGLES — ERROS / AULAS E HORÁRIOS / CRONOGRAMA: — parágrafo 10**

> Não é possível criar cronograma 2º semestre 2026 - Erro ao importar, erro ao tentar criar novo cronograma do zero - FEITO

**Referência original RV29 — Relatório de visita, página 2 — Detalhamento técnico: 6-) cronograma e importação de dados**

> O sistema possui Módulo de Cronograma, que atualmente permite a importação de dados por meio de arquivos Excel.

**Referência original RV30 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Aperfeiçoamento do processo de importação;

**Referência original RV32 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Validação dos dados importados;

**Referência original RV33 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Tratamento de inconsistências e erros durante as importações;

**Referência original RV34 — Relatório de visita, página 3 — Detalhamento técnico: 6-) cronograma e importação de dados**

> - Avaliação da possibilidade de criação de modelos padronizados de planilha para alimentação do sistema.

### Arquivos e pontos verificados

- [src/Controller/CronogramaController.php:44](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L44) — PR 9 13f5075.
- [src/Controller/CronogramaController.php:142](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L142) — PR 9 13f5075.
- [templates/cronograma/modal.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/modal.html.twig#L1) — PR 9 13f5075.
- [src/Controller/CronogramaController.php:160](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L160) — PR 9 13f5075.
- [src/Controller/CronogramaController.php:320](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L320) — PR 9 13f5075.
- [src/Entity/AceiteDocente.php:12](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/AceiteDocente.php#L12) — dev 3ed9a38.

### Roteiro de implementação

1. Comparar modelo baixado, cabeçalhos e arquivo original com as 25 posições lidas hoje. Tratar BOM/codificação e delimitador explicitamente; não converter todo UTF-8 como Latin-1.
2. Validar todas as linhas e referências antes de gravar. Não ignorar docente desconhecido nem criar categoria docente vazia por falta de tipo_jornada sem regra aprovada.
3. Corrigir a identidade atual que busca só código_turma/semestre/início/fim: ela pode sobrescrever aulas de outros dias/docentes. Aplicar D09 desde esta entrega.
4. A chave proposta contém campos mutáveis: documentar como reconhecer correção de docente/dia/horário versus nova aula. Se não houver identidade confiável, recusar atualização ambígua com diagnóstico; não criar outra linha nem sobrescrever por aproximação.
5. Evitar alteração colateral de Disciplina.tipo global pelo tipo escolhido da importação; comparar o existente e recusar conflito enquanto D05/D09 não o autorizarem.
6. Envolver os flushes necessários em transação única do arquivo, com rollback integral em falha; repetir o arquivo deve seguir a chave de negócio, inclusive AceiteDocente.
7. Validar extensão, conteúdo e tamanho sem confiar no MIME do cliente. Arquivo indisponível mantém o caso ER01.2 em Validar; modelo aprovado não substitui esse aceite.

### Banco, arquivos e reversão

Escrita somente no semestre e na massa de teste. Arquivo real deve ser tratado no ambiente autorizado, sem publicá-lo no Pages.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Mesmo código de turma em dois dias e dois docentes | Importar arquivo e repetir | Nenhuma linha legítima sobrescrita e nenhuma duplicata na repetição. |
| Arquivo com erro só na última linha | Importar | Nenhum dado do arquivo persiste, inclusive cadastros auxiliares. |
| CSV UTF-8 com acento e linha maior que 1000 caracteres | Importar | Sem corrupção de nomes ou divisão silenciosa da linha. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-13:2](https://dcadv789.github.io/sigles-pedidos/#VS-13) — **parcela: CSV básico, integridade e arquivo original**. Testar o arquivo original do cliente e o tratamento dos erros por linha. · status atual: Validar.
- [Quadro WI-01:2](https://dcadv789.github.io/sigles-pedidos/#WI-01) — **execução: Aceite da importação CSV da PR**. O arquivo que originou o erro ainda precisa de teste de aceite. · status atual: Validar.
- Pendência detalhada ER01.2 — Confirmar que o arquivo que originou o erro de importação do cliente é aceito e cria o cronograma corretamente.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E4-99"></a>

## E4-99 — Revisão final e integração da entrega 4

**Ordem global:** 22/42. **Executar após:** E4-05. **Dependências técnicas:** [E4-01](entrega-04.md#E4-01), [E4-06](entrega-04.md#E4-06), [E4-02](entrega-04.md#E4-02), [E4-03](entrega-04.md#E4-03), [E4-04](entrega-04.md#E4-04), [E4-05](entrega-04.md#E4-05).

### Entrada, saída e limite

- **Entrada:** E4-01 a E4-06, D08 e D09 resolvidos e preservações de E2-03.
- **Saída esperada:** FECHO-4 com diff revisável, cronogramas homologados e base para a entrega 5.
- **Limite do item:** PR aberta e código existente não são prova de integração ou publicação.

### Diagnóstico conferido no código

Implementação na PR não equivale a entrega homologada. A integração depende da preservação das entregas anteriores e do aceite dos fluxos de cronogramas.

### Referência literal dos documentos originais

**Referência original RV35 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> Foi identificada a necessidade de aprimoramento da página destinada ao cronograma de aulas.

**Referência original RV36 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhoria da organização visual da página;

**Referência original RV37 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Revisão de filtros e mecanismos de pesquisa;

**Referência original RV38 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhor aproveitamento dos espaços disponíveis;

**Referência original RV39 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Padronização de fontes, tamanhos de letras e demais componentes da interface;

**Referência original RV40 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Melhoria da legibilidade e da experiência de utilização;

**Referência original RV41 — Relatório de visita, página 3 — Detalhamento técnico: 7-) cronograma de aulas**

> - Avaliação das informações apresentadas e da forma de consulta pelos usuários.

### Arquivos e pontos verificados

- [.github/workflows/deploy-teste.yml:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/.github/workflows/deploy-teste.yml#L1) — dev 3ed9a38.
- [templates/cronograma/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/templates/cronograma/index.html.twig#L1) — PR 9 13f5075.
- [src/Controller/CronogramaController.php:1](https://github.com/Dcadv789/sigles/blob/13f5075b4685f7a26008e63810d38bd8516f558f/src/Controller/CronogramaController.php#L1) — PR 9 13f5075.

### Roteiro de implementação

1. Conferir diff, migrations presentes, contratos de payload e a conciliação do trabalho local antes de integrar.
2. Executar vazio/cópia/CSV, datas inválidas, cursos múltiplos, filtros e docente sênior; conferir PHP/Twig e /js/routing.
3. Reaplicar os testes essenciais de compras, login, planos e OS das entregas anteriores.
4. Registrar o commit e a URL/versão de homologação; arquivo original não testado continua pendência explícita e impede aceite integral desse caso.

### Banco, arquivos e reversão

Sem execução de deploy do SIGLES nesta etapa. A limitação de escrita em produção permanece.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D09 — Identidade, cópia e importação de turmas](INTEGRACAO_E_DECISOES.md#D09) · dono E4-02. Consumir a decisão anterior, sem redefini-la silenciosamente. Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Branch de integração cumulativa | Homologar todos os cenários E4 e regressões | Nenhuma regressão conhecida aberta; FECHO-4 só então é liberado. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro VS-01:4](https://dcadv789.github.io/sigles-pedidos/#VS-01) — **aceite: Revisão final e integração da entrega 4**. Evolução de cronogramas. · status atual: Na PR.
- [Quadro VS-13:1](https://dcadv789.github.io/sigles-pedidos/#VS-13) — **aceite: Revisão final e integração da entrega 4**. Fluxo unificado de Novo cronograma e arquivo modelo CSV. · status atual: Na PR.
- [Quadro VS-15:1](https://dcadv789.github.io/sigles-pedidos/#VS-15) — **aceite: Revisão final e integração da entrega 4**. Implementado no PR 9; depende de integração e homologação. · status atual: Na PR.
- [Quadro WI-01:1](https://dcadv789.github.io/sigles-pedidos/#WI-01) — **aceite: Revisão final e integração da entrega 4**. Criação com ano/semestre e modelo de importação. · status atual: Na PR.
- [Quadro WI-13:1](https://dcadv789.github.io/sigles-pedidos/#WI-13) — **aceite: Revisão final e integração da entrega 4**. Copiar entre semestres, com início/fim e seleção Graduação, Pós-graduação ou Ambas. · status atual: Na PR.
- [Quadro WI-22:1](https://dcadv789.github.io/sigles-pedidos/#WI-22) — **aceite: Revisão final e integração da entrega 4**. Criação e importação do cronograma implementadas no PR 9. · status atual: Na PR.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-4"></a>

## FECHO-4 — Condição para seguir

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
