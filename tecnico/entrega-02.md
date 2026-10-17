# Entrega 2 — Planejamento técnico revisado

**Disciplinas, relatórios, planos e login**

Revisão 02 · 16/10/2026 · **Planejado; execução não iniciada.**

[Índice](README.md) · [Regras, decisões e integração](INTEGRACAO_E_DECISOES.md) · [Conferência de cobertura](COBERTURA_E_CONFERENCIA.md) · [Página de revisão](https://dcadv789.github.io/sigles-pedidos/tecnico/entrega-2.html)

## Entrada e resultado da entrega

- **Entrada:** FECHO-1: entrega anterior aceita em homologação.
- **Saída:** FECHO-2, com critérios de encerramento no fim deste arquivo.
- **Base:** commit cumulativo aceito da entrega anterior; os hashes da leitura não substituem essa base.
- **Escopo:** Fechamento de entrega existente. Aditivos continuam fora.

## Ordem interna obrigatória

7. [E2-03 — Preservar migrações e correções do plano e do relatório](#E2-03)
8. [E2-01 — Responsável na listagem e Excel de Disciplinas](#E2-01)
9. [E2-02 — Créditos na exportação de Disciplinas docente](#E2-02)
10. [E2-99 — Aceite integrado do fechamento da entrega 2](#E2-99)

Depois do último item, conferir **FECHO-2** antes de iniciar a próxima entrega. Dependência técnica e simples precedência de execução são indicadas separadamente.

<a id="E2-03"></a>

## E2-03 — Preservar migrações e correções do plano e do relatório

**Ordem global:** 7/42. **Executar após:** FECHO-1. **Dependências técnicas:** nenhuma adicional ao fechamento da entrega anterior.

### Entrada, saída e limite

- **Entrada:** FECHO-1 e snapshot das migrations/arquivos da dev; nenhuma leitura de banco presumida.
- **Saída esperada:** Inventário de preservação de planos, responsáveis, anexos e login para as próximas integrações.
- **Limite do item:** Não reaplicar backfill, alterar migrations executadas ou antecipar integração da PR.

### Diagnóstico conferido no código

A dev tem correções e migrations que não estão na branch antiga da PR 9, incluindo o backfill de responsáveis e os ajustes da visualização de anexos.

### Referência literal dos documentos originais

**Referência original DI40 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 87**

> Relatórios de justificativas de alterações de planos de ensino, constando data da alteração e o  responsável.

### Arquivos e pontos verificados

- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) — dev 3ed9a38.
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) — dev 3ed9a38.
- [src/Controller/PlanoEnsinoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PlanoEnsinoController.php#L1) — dev 3ed9a38.
- [templates/plano_ensino/modal.visualizar_anexo.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/plano_ensino/modal.visualizar_anexo.html.twig#L1) — dev 3ed9a38.
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Comparar os dois arquivos de migration e o visualizador com a base do FECHO-1; consultar status no teste apenas na futura execução.
2. Montar casos de plano antigo/novo, observação vazia/preenchida, download de log e PDF/DOCX. Conferir permissões das rotas de arquivo já existentes.
3. Testar os quatro ajustes de login: Enter, espaços colados, olho de senha e perfil ausente. O AGENTS registra o risco histórico; o diagnóstico deve usar o commit atual.
4. Guardar uma lista de arquivos e comportamentos que E4-01 deverá conservar no diff final.

### Banco, arquivos e reversão

Backfill e arquivos existentes devem ser preservados. Não apagar versões executadas da tabela de migrations.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

Nenhuma nova decisão de negócio específica; manter os contratos anteriores e reproduzir o caso antes de alterar código.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Plano com arquivo antigo e novo | Visualizar e baixar com e sem acesso | Arquivo acessível só no fluxo autorizado; histórico preservado. |
| Usuário de teste sem perfil | Fazer login | Tratamento da dev preservado e ausência de erro fatal. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

Item técnico de integração/preservação/aceite; não cria outro pedido nem cobrança.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E2-01"></a>

## E2-01 — Responsável na listagem e Excel de Disciplinas

**Ordem global:** 8/42. **Executar após:** E2-03. **Dependências técnicas:** [E2-03](entrega-02.md#E2-03).

### Entrada, saída e limite

- **Entrada:** Período explícito e vínculos de responsável definidos em D04.
- **Saída esperada:** Listagem principal de Disciplinas com responsáveis do período e Excel do mesmo conjunto.
- **Limite do item:** Responsável e ministrante continuam conceitos diferentes; relatório genérico fica em E7-03.

### Diagnóstico conferido no código

DisciplinaController::list retorna entidades de disciplina. O vínculo de responsável existe em DisciplinaResponsavel por ano/semestre e não deve ser substituído pelo docente da turma.

### Referência literal dos documentos originais

**Referência original DI36 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 83**

> Opção de baixar informações em excel

**Referência original DI37 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 84**

> Aparecer nome do docente responsável na página principal da disciplina.

**Referência original DI38 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 85**

> Analisar a possibilidade de exportar dados como carga horária, créditos e docente responsável de acordo com informações que constam no cadastro “Disciplina” ou “Disciplina Docente”

### Arquivos e pontos verificados

- [src/Controller/DisciplinaController.php:34](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L34) — dev 3ed9a38.
- [src/Entity/DisciplinaResponsavel.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaResponsavel.php#L1) — dev 3ed9a38.
- [src/Repository/DisciplinaResponsavelRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/DisciplinaResponsavelRepository.php#L1) — dev 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Adicionar ano/semestre visíveis e validar os valores; a referência padrão deve aparecer na tela e no arquivo.
2. Carregar responsáveis por lote de IDs de disciplinas, com filtros de vínculo e docente/usuário aplicáveis. Definir a exibição histórica sem apagar o passado ao inativar um docente.
3. Preservar uma linha por disciplina, incluindo as sem responsável; representar múltiplos nomes sem escolher o primeiro arbitrariamente.
4. Usar os Buttons/DataTables já instalados; garantir as dependências de Excel existentes, filtros, nomes de colunas e exclusão da coluna de ações.
5. Revalidar números e nomes exportados contra uma massa pequena e registrar o contrato de período para os relatórios da entrega 7.

### Banco, arquivos e reversão

Reutilizar disciplina_responsavel e seus índices; sem criar outro campo de responsável direto em Disciplina.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D04 — Responsável acadêmico e período](INTEGRACAO_E_DECISOES.md#D04) · dono E2-01. Definir neste item. Período padrão e leitura histórica de vínculos/docentes inativos.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina com A em 2026/1 e B em 2026/2 | Alternar semestre e exportar | Cada período mostra o responsável correto. |
| Disciplina com dois responsáveis e nenhuma turma | Consultar listagem e Excel | Uma linha de disciplina, ambos os nomes e ausência de turma sem erro. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-14:2](https://dcadv789.github.io/sigles-pedidos/#WI-14) — **execução: Responsável na listagem e Excel de Disciplinas**. Exportar a listagem principal e mostrar nela o docente responsável. · status atual: Pendente.
- Pendência detalhada DI02 — Exportar a listagem principal de Disciplinas para Excel.
- Pendência detalhada DI03 — Mostrar o docente responsável na listagem principal de Disciplinas.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E2-02"></a>

## E2-02 — Créditos na exportação de Disciplinas docente

**Ordem global:** 9/42. **Executar após:** E2-01. **Dependências técnicas:** [E2-01](entrega-02.md#E2-01).

### Entrada, saída e limite

- **Entrada:** D04 fechada e modelo atual do crédito identificado; D05 será definida na primeira etapa deste item.
- **Saída esperada:** Crédito explícito no relatório e na exportação sem duplicação.
- **Limite do item:** Não criar crédito por dia aqui. Se D05 escolher novo nível, E2 lê o modelo atual com limitação explícita; a migração pertence a E7-01.

### Diagnóstico conferido no código

disciplinasDocentes retorna carga horária, ano e semestre, mas não Crédito. O crédito aparece tanto em Disciplina como em DisciplinaSemestre e sua precedência precisa ser definida.

### Referência literal dos documentos originais

**Referência original DI38 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 85**

> Analisar a possibilidade de exportar dados como carga horária, créditos e docente responsável de acordo com informações que constam no cadastro “Disciplina” ou “Disciplina Docente”

### Arquivos e pontos verificados

- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) — dev 3ed9a38.
- [src/Entity/DisciplinaSemestre.php:90](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L90) — dev 3ed9a38.
- [src/Entity/Disciplina.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L210) — dev 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Registrar em D05 a precedência de DisciplinaSemestre.credito, Disciplina.credito e nulo; zero é valor válido e não pode cair no fallback por teste booleano.
2. Acrescentar o crédito à consulta por ano/semestre, preservando o LEFT JOIN e as condições que vinculam o responsável às suas turmas.
3. Parametrizar os filtros alterados e transportar o campo até o Twig e o Excel; conferir a unidade da linha antes de somar qualquer valor.
4. Definir um teste de contrato que E4-02/E4-05/E7-01 reaplicarão ao copiar, importar e alterar créditos.

### Banco, arquivos e reversão

Sem migração prevista; não recalcular créditos históricos a partir da carga horária por suposição.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D04 — Responsável acadêmico e período](INTEGRACAO_E_DECISOES.md#D04) · dono E2-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Período padrão e leitura histórica de vínculos/docentes inativos.
- [D05 — Fonte e nível do crédito](INTEGRACAO_E_DECISOES.md#D05) · dono E2-02. Definir neste item. Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina com crédito base 4 e semestre com 0 | Exportar o semestre | Crédito 0 preservado. |
| Dois responsáveis, dois semestres e disciplina sem turma | Filtrar e exportar | Nenhuma turma de um responsável é atribuída a outro e nenhuma disciplina elegível desaparece. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro WI-14:3](https://dcadv789.github.io/sigles-pedidos/#WI-14) — **execução: Créditos na exportação de Disciplinas docente**. Incluir crédito na exportação do relatório Disciplinas docente. · status atual: Pendente.
- Pendência detalhada DI04.1 — Incluir também Crédito na exportação desse relatório.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="E2-99"></a>

## E2-99 — Aceite integrado do fechamento da entrega 2

**Ordem global:** 10/42. **Executar após:** E2-02. **Dependências técnicas:** [E2-03](entrega-02.md#E2-03), [E2-01](entrega-02.md#E2-01), [E2-02](entrega-02.md#E2-02).

### Entrada, saída e limite

- **Entrada:** E2-01/E2-02/E2-03 e D04/D05 fechados.
- **Saída esperada:** FECHO-2 com colunas/Excel e preservações acadêmicas aceitas.
- **Limite do item:** Total anual e departamento continuam em E7-04.

### Diagnóstico conferido no código

A entrega 2 já foi publicada. As lacunas de colunas/exportação são fechadas aqui; consolidação anual e departamental continua em E7-04.

### Referência literal dos documentos originais

**Referência original DI35 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 82**

> Acrescentar campo para carga horária e crédito

**Referência original DI40 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 87**

> Relatórios de justificativas de alterações de planos de ensino, constando data da alteração e o  responsável.

**Referência original DI42 — Documento inicial SINGLES — ALTERAÇÕES / 3. QUADRO DE AULA — parágrafo 96**

> Dentro de cada dia da semana ordenar por horário em ordem crescente

### Arquivos e pontos verificados

- [templates/relatorios/quadro_aulas.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/quadro_aulas.html.twig#L1) — dev 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — dev 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — dev 3ed9a38.

### Roteiro de implementação

1. Conciliar listagem, exportação e amostra dos vínculos de responsáveis por ano/semestre.
2. Repetir os filtros tipo/dia/docente, as duas visões do Quadro de aulas e a ordem cronológica dentro de cada dia.
3. Reexecutar os casos de login/plano/anexo da preservação e guardar o commit cumulativo que a entrega 3 receberá.

### Banco, arquivos e reversão

Massa de teste; sem alteração de histórico em produção.

Usar somente o teste. Se houver dados alterados, guardar IDs/valores e compensação seletiva. Reverter código não restaura automaticamente dados ou arquivos; não executar down amplo nem apagar versões de migration.

### Decisões e contratos usados

- [D04 — Responsável acadêmico e período](INTEGRACAO_E_DECISOES.md#D04) · dono E2-01. Consumir a decisão anterior, sem redefini-la silenciosamente. Período padrão e leitura histórica de vínculos/docentes inativos.

### Casos de aceite previstos

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Graduação e pós em dois semestres | Comparar tela, Excel e amostra | Conjunto e valores coincidem; soma anual ainda não é declarada pronta. |

Também executar os casos comuns aplicáveis de permissão, erro legível, dado nulo e regressão do contrato anterior. São testes previstos, não executados.

### Pedidos e partes sob responsabilidade deste item

- [Quadro V1-11:1](https://dcadv789.github.io/sigles-pedidos/#V1-11) — **aceite: Aceite integrado do fechamento da entrega 2**. Campos e identificação do tipo de disciplina, graduação ou pós-graduação. · status atual: Entregue.
- [Quadro VS-01:2](https://dcadv789.github.io/sigles-pedidos/#VS-01) — **aceite: Aceite integrado do fechamento da entrega 2**. Disciplinas, relatórios e login. · status atual: Entregue.
- [Quadro VS-17:1](https://dcadv789.github.io/sigles-pedidos/#VS-17) — **aceite: Aceite integrado do fechamento da entrega 2**. Filtros, responsável por semestre e visualização das disciplinas docentes. · status atual: Entregue.
- [Quadro WI-14:1](https://dcadv789.github.io/sigles-pedidos/#WI-14) — **aceite: Aceite integrado do fechamento da entrega 2**. Carga horária, crédito, responsável por ano/semestre, histórico do plano e filtros dos relatórios. · status atual: Entregue.
- [Quadro WI-15:1](https://dcadv789.github.io/sigles-pedidos/#WI-15) — **aceite: Aceite integrado do fechamento da entrega 2**. Ordenação cronológica dentro de cada dia no Quadro de aulas. · status atual: Entregue.

**Evidência para encerrar:** commit, cenário e massa sintética, resultado, decisão aplicada e eventuais limitações. Referências originais DI/RV, pendências detalhadas e IDs WI/VS do quadro pertencem a numerações distintas.

<a id="FECHO-2"></a>

## FECHO-2 — Condição para seguir

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
