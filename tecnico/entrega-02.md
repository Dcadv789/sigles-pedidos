# Entrega 2 — Planejamento técnico

**Disciplinas, relatórios, planos e login**

**Data:** 16/10/2026. **Etapa:** Fechamento de entrega existente. **Estado:** planejado para revisão; implementação não iniciada.

[Índice e regras comuns](README.md) · [Quadro de pedidos](https://dcadv789.github.io/sigles-pedidos/)

Este arquivo fecha lacunas e valida a entrega existente sobre a dev atual. Não instrui a voltar a uma tag antiga nem declara uma nova publicação em produção.

## Ordem de execução

1. [E2-03 — Preservar migrações e correções do plano e do relatório](#E2-03)
2. [E2-01 — Responsável na listagem e Excel de Disciplinas](#E2-01)
3. [E2-02 — Créditos na exportação de Disciplinas docente](#E2-02)
4. [E2-99 — Aceite integrado do fechamento da entrega 2](#E2-99)

<a id="E2-03"></a>

## E2-03 — Preservar migrações e correções do plano e do relatório

**Status:** Planejado. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

A dev tem correções e migrations que não estão na branch antiga da PR 9, incluindo o backfill de responsáveis e os ajustes da visualização de anexos.

### Arquivos verificados

- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) — base dev, commit 3ed9a38.
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) — base dev, commit 3ed9a38.
- [src/Controller/PlanoEnsinoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PlanoEnsinoController.php#L1) — base dev, commit 3ed9a38.
- [templates/plano_ensino/modal.visualizar_anexo.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/plano_ensino/modal.visualizar_anexo.html.twig#L1) — base dev, commit 3ed9a38.
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Registrar o estado das migrations no teste e manter os arquivos da dev no processo de integração. Não reaplicar backfill em massa para esconder vínculos ausentes.
2. Testar observação obrigatória, logs, PDF/DOCX e caminhos de anexos em homologação; preservar o acesso atual aos arquivos.
3. Conferir Enter, espaços colados, botão de senha e usuário sem perfil no login. Alterar somente se houver regressão reproduzida.

### Banco e dados

Backfill e arquivos existentes devem ser preservados. Não apagar versões executadas da tabela de migrations.

### Testes de aceite previstos

- [ ] Planos antigos continuam abrindo e alterações sem observação não gravam.
- [ ] O relatório da v1.2.1 mantém responsáveis e turmas corretos.
- [ ] O login sem perfil não volta a quebrar após a integração.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

Item de integração, preservação ou aceite do conjunto; não representa uma funcionalidade adicional.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E2-01"></a>

## E2-01 — Responsável na listagem e Excel de Disciplinas

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

DisciplinaController::list retorna entidades de disciplina. O vínculo de responsável existe em DisciplinaResponsavel por ano/semestre e não deve ser substituído pelo docente da turma.

### Arquivos verificados

- [src/Controller/DisciplinaController.php:34](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L34) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaResponsavel.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaResponsavel.php#L1) — base dev, commit 3ed9a38.
- [src/Repository/DisciplinaResponsavelRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/DisciplinaResponsavelRepository.php#L1) — base dev, commit 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Definir o período de referência da listagem. Recomendação: filtros explícitos de ano e semestre, com padrão visível.
2. Agregar os responsáveis ativos do período, preservando disciplinas sem responsável e sem duplicar linhas por turma ou curso. Não escolher arbitrariamente o primeiro docente.
3. Expor o resultado no JSON da listagem, acrescentar a coluna e usar a infraestrutura de exportação DataTables já adotada em outras telas.
4. Exportar o mesmo conjunto filtrado, incluindo código, nome, tipo e responsável do período.

### Banco e dados

Reutilizar disciplina_responsavel e seus índices; sem criar outro campo de responsável direto em Disciplina.

### Testes de aceite previstos

- [ ] Disciplina com dois responsáveis mostra ambos com a referência do período.
- [ ] Responsável difere do ministrante no cronograma e a listagem continua correta.
- [ ] Sem responsável, o resultado é explícito; o Excel respeita os filtros.

### Decisões necessárias

- Ano/semestre mostrado por padrão e formato de apresentação de vários responsáveis.

### Referências dos pedidos

- [WI-14:2](https://dcadv789.github.io/sigles-pedidos/#WI-14) — Exportar a listagem principal e mostrar nela o docente responsável. (Pendente).
- DI02 — Exportar a listagem principal de Disciplinas para Excel.
- DI03 — Mostrar o docente responsável na listagem principal de Disciplinas.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E2-02"></a>

## E2-02 — Créditos na exportação de Disciplinas docente

**Status:** Planejado — exige definição. **Dependências:** seguir a sequência da entrega no índice.

### Evidência e diagnóstico

disciplinasDocentes retorna carga horária, ano e semestre, mas não Crédito. O crédito aparece tanto em Disciplina como em DisciplinaSemestre e sua precedência precisa ser definida.

### Arquivos verificados

- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) — base dev, commit 3ed9a38.
- [src/Entity/DisciplinaSemestre.php:90](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L90) — base dev, commit 3ed9a38.
- [src/Entity/Disciplina.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L210) — base dev, commit 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Definir a fonte de crédito por ano/semestre; usar o valor do semestre quando essa for a regra e tratar zero como valor válido.
2. Acrescentar o campo na consulta e na exportação, preservando os LEFT JOINs que permitem disciplina sem turma. Parametrizar os filtros tocados na consulta.
3. Conferir a associação entre responsável e as próprias turmas para não reintroduzir duplicação corrigida na v1.2.1.

### Banco e dados

Sem migração prevista; não recalcular créditos históricos a partir da carga horária por suposição.

### Testes de aceite previstos

- [ ] Ano/semestre com crédito específico exporta o valor correto, inclusive zero.
- [ ] Disciplina sem turma ativa permanece no relatório quando tem responsável.
- [ ] Dois responsáveis não recebem cópias das turmas um do outro.

### Decisões necessárias

- Precedência de DisciplinaSemestre.credito versus Disciplina.credito.

### Referências dos pedidos

- [WI-14:3](https://dcadv789.github.io/sigles-pedidos/#WI-14) — Incluir crédito na exportação do relatório Disciplinas docente. (Pendente).
- DI04.1 — Incluir também Crédito na exportação desse relatório.

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

<a id="E2-99"></a>

## E2-99 — Aceite integrado do fechamento da entrega 2

**Status:** Planejado. **Dependências:** E2-01, E2-02, E2-03, E1-99.

### Evidência e diagnóstico

A entrega 2 já foi publicada. As lacunas de colunas/exportação são fechadas aqui; consolidação anual e departamental continua em E7-04.

### Arquivos verificados

- [templates/relatorios/quadro_aulas.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/quadro_aulas.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) — base dev, commit 3ed9a38.
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) — base dev, commit 3ed9a38.

### Implementação prevista

1. Conferir graduação/pós, dois semestres, múltiplos responsáveis e disciplinas sem turma.
2. Comparar listagem e Excel e repetir a ordenação de horários/dias no Quadro de aulas.
3. Registrar o aceite dos itens WI-14 e a parte já entregue de WI-15, sem declarar a consolidação anual concluída.

### Banco e dados

Massa de teste; sem alteração de histórico em produção.

### Testes de aceite previstos

- [ ] Resultados e exportação concordam para todos os filtros.
- [ ] Os recursos preservados da entrega 2 continuam acessíveis por seus perfis.

### Decisões necessárias

Nenhuma decisão de negócio adicional identificada para iniciar o diagnóstico; qualquer diferença encontrada deve ser registrada antes de ampliar o escopo.

### Referências dos pedidos

- [V1-11:1](https://dcadv789.github.io/sigles-pedidos/#V1-11) — Campos e identificação do tipo de disciplina, graduação ou pós-graduação. (Entregue).
- [VS-01:2](https://dcadv789.github.io/sigles-pedidos/#VS-01) — Disciplinas, relatórios e login. (Entregue).
- [VS-17:1](https://dcadv789.github.io/sigles-pedidos/#VS-17) — Filtros, responsável por semestre e visualização das disciplinas docentes. (Entregue).
- [WI-14:1](https://dcadv789.github.io/sigles-pedidos/#WI-14) — Carga horária, crédito, responsável por ano/semestre, histórico do plano e filtros dos relatórios. (Entregue).
- [WI-15:1](https://dcadv789.github.io/sigles-pedidos/#WI-15) — Ordenação cronológica dentro de cada dia no Quadro de aulas. (Entregue).

### Reversão e fechamento

Reverter somente o commit funcional deste item se houver regressão. Alteração de dados exige restaurar apenas o conjunto auditado, sem apagar migrations executadas ou registros históricos. Registrar evidência dos testes e o commit antes de marcar a funcionalidade como entregue.

## Verificações comuns antes da integração

- [ ] Confirmar o ambiente de teste antes de qualquer comando que carregue o banco; não publicar valores de conexão nos logs.
- [ ] Executar php -l nos arquivos PHP alterados e php bin/console lint:twig apenas nos templates afetados.
- [ ] Se houver alteração de entidade/migration, executar a validação de schema e o status/dry-run das migrations somente com a conexão de teste conferida; revisar o SQL e as versões já executadas.
- [ ] Conferir as rotas AJAX e /js/routing pelo mecanismo já usado no projeto, sem recriar o antigo dump removido pela dev.
- [ ] Executar os testes de aceite específicos do item: erro/validação, usuário autorizado, usuário sem permissão e regressão do fluxo modificado.
- [ ] Guardar evidência de homologação por item e só então atualizar o status funcional no quadro. Planejamento pronto não significa item implementado.
- [ ] Preparar commit e PR focados por lote; teste/homologação precede produção, e a etapa de produção continua sujeita à restrição atual de acesso ao banco.
