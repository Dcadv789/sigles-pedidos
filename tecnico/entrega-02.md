# Entrega 2 — Disciplinas, relatórios, planos e login

**Atualizado em 21/10/2026 · Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-1: entrega anterior aceita em homologação.
- Situação: Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.
- Preservar a base cumulativa e todos os controles já publicados.

<a id="E2-03"></a>

## E2-03 — Preservar migrações e correções do plano e do relatório

**Situação:** Planejado — execução não iniciada.

A dev tem correções e migrations que não estão na branch antiga da PR 9, incluindo o backfill de responsáveis e os ajustes da visualização de anexos.

- Entrada: FECHO-1 e snapshot das migrations/arquivos da dev; nenhuma leitura de banco presumida.
- Saída: Inventário de preservação de planos, responsáveis, anexos e login para as próximas integrações.
- Limite: Não reaplicar backfill, alterar migrations executadas ou antecipar integração da PR.

### Funções, correções ou próximos passos

- Comparar os dois arquivos de migration e o visualizador com a base do FECHO-1; consultar status no teste apenas na futura execução.
- Montar casos de plano antigo/novo, observação vazia/preenchida, download de log e PDF/DOCX. Conferir permissões das rotas de arquivo já existentes.
- Testar os quatro ajustes de login: Enter, espaços colados, olho de senha e perfil ausente. O AGENTS registra o risco histórico; o diagnóstico deve usar o commit atual.
- Guardar uma lista de arquivos e comportamentos que E4-01 deverá conservar no diff final.

### Banco e reversão

Backfill e arquivos existentes devem ser preservados. Não apagar versões executadas da tabela de migrations.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Plano com arquivo antigo e novo | Visualizar e baixar com e sem acesso | Arquivo acessível só no fluxo autorizado; histórico preservado. |
| Usuário de teste sem perfil | Fazer login | Tratamento da dev preservado e ausência de erro fatal. |

### Documentos originais (rastreio preservado)

**DI40 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 87**

> Relatórios de justificativas de alterações de planos de ensino, constando data da alteração e o  responsável.

### Referências de código (snapshot da leitura)

- [migrations/Version20261011120000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20261011120000.php#L1) · 3ed9a38
- [migrations/Version20260908230000.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/migrations/Version20260908230000.php#L1) · 3ed9a38
- [src/Controller/PlanoEnsinoController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/PlanoEnsinoController.php#L1) · 3ed9a38
- [templates/plano_ensino/modal.visualizar_anexo.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/plano_ensino/modal.visualizar_anexo.html.twig#L1) · 3ed9a38
- [src/Controller/LoginController.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/LoginController.php#L1) · 3ed9a38

<a id="E2-01"></a>

## E2-01 — Responsável na listagem e Excel de Disciplinas

**Situação:** Planejado — execução não iniciada.

DisciplinaController::list retorna entidades de disciplina. O vínculo de responsável existe em DisciplinaResponsavel por ano/semestre e não deve ser substituído pelo docente da turma.

- Entrada: Período explícito e vínculos de responsável definidos em D04.
- Saída: Listagem principal de Disciplinas com responsáveis do período e Excel do mesmo conjunto.
- Limite: Responsável e ministrante continuam conceitos diferentes; relatório genérico fica em E7-03.

### Funções, correções ou próximos passos

- Adicionar ano/semestre visíveis e validar os valores; a referência padrão deve aparecer na tela e no arquivo.
- Carregar responsáveis por lote de IDs de disciplinas, com filtros de vínculo e docente/usuário aplicáveis. Definir a exibição histórica sem apagar o passado ao inativar um docente.
- Preservar uma linha por disciplina, incluindo as sem responsável; representar múltiplos nomes sem escolher o primeiro arbitrariamente.
- Usar os Buttons/DataTables já instalados; garantir as dependências de Excel existentes, filtros, nomes de colunas e exclusão da coluna de ações.
- Revalidar números e nomes exportados contra uma massa pequena e registrar o contrato de período para os relatórios da entrega 7.

### Banco e reversão

Reutilizar disciplina_responsavel e seus índices; sem criar outro campo de responsável direto em Disciplina.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina com A em 2026/1 e B em 2026/2 | Alternar semestre e exportar | Cada período mostra o responsável correto. |
| Disciplina com dois responsáveis e nenhuma turma | Consultar listagem e Excel | Uma linha de disciplina, ambos os nomes e ausência de turma sem erro. |

### Rastreio dos pedidos

- WI-14:2 — Exportar a listagem principal e mostrar nela o docente responsável. · Pendente.

### Pendências detalhadas

- DI02 — Exportar a listagem principal de Disciplinas para Excel. **Pendente** — essa listagem não possui exportação Excel implementada.
- DI03 — Mostrar o docente responsável na listagem principal de Disciplinas. **Pendente** — o vínculo existe na aba Responsável, mas não aparece como coluna na listagem principal.

### Documentos originais (rastreio preservado)

**DI36 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 83**

> Opção de baixar informações em excel

**DI37 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 84**

> Aparecer nome do docente responsável na página principal da disciplina.

**DI38 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 85**

> Analisar a possibilidade de exportar dados como carga horária, créditos e docente responsável de acordo com informações que constam no cadastro “Disciplina” ou “Disciplina Docente”

### Referências de código (snapshot da leitura)

- [src/Controller/DisciplinaController.php:34](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaController.php#L34) · 3ed9a38
- [src/Entity/DisciplinaResponsavel.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaResponsavel.php#L1) · 3ed9a38
- [src/Repository/DisciplinaResponsavelRepository.php:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Repository/DisciplinaResponsavelRepository.php#L1) · 3ed9a38
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) · 3ed9a38

**Dependências:** E2-03.

<a id="E2-02"></a>

## E2-02 — Créditos na exportação de Disciplinas docente

**Situação:** Planejado — execução não iniciada.

disciplinasDocentes retorna carga horária, ano e semestre, mas não Crédito. O crédito aparece tanto em Disciplina como em DisciplinaSemestre e sua precedência precisa ser definida.

- Entrada: D04 fechada e modelo atual do crédito identificado; D05 será definida na primeira etapa deste item.
- Saída: Crédito explícito no relatório e na exportação sem duplicação.
- Limite: Não criar crédito por dia aqui. Se D05 escolher novo nível, E2 lê o modelo atual com limitação explícita; a migração pertence a E7-01.

### Funções, correções ou próximos passos

- Registrar em D05 a precedência de DisciplinaSemestre.credito, Disciplina.credito e nulo; zero é valor válido e não pode cair no fallback por teste booleano.
- Acrescentar o crédito à consulta por ano/semestre, preservando o LEFT JOIN e as condições que vinculam o responsável às suas turmas.
- Parametrizar os filtros alterados e transportar o campo até o Twig e o Excel; conferir a unidade da linha antes de somar qualquer valor.
- Definir um teste de contrato que E4-02/E4-05/E7-01 reaplicarão ao copiar, importar e alterar créditos.

### Banco e reversão

Sem migração prevista; não recalcular créditos históricos a partir da carga horária por suposição.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Disciplina com crédito base 4 e semestre com 0 | Exportar o semestre | Crédito 0 preservado. |
| Dois responsáveis, dois semestres e disciplina sem turma | Filtrar e exportar | Nenhuma turma de um responsável é atribuída a outro e nenhuma disciplina elegível desaparece. |

### Rastreio dos pedidos

- WI-14:3 — Incluir crédito na exportação do relatório Disciplinas docente. · Pendente.

### Pendências detalhadas

- DI04.1 — Incluir também Crédito na exportação desse relatório. **Pendente** — o relatório não retorna nem exporta esse campo.

### Documentos originais (rastreio preservado)

**DI38 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 85**

> Analisar a possibilidade de exportar dados como carga horária, créditos e docente responsável de acordo com informações que constam no cadastro “Disciplina” ou “Disciplina Docente”

### Referências de código (snapshot da leitura)

- [src/Controller/DisciplinaTurmaController.php:513](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Controller/DisciplinaTurmaController.php#L513) · 3ed9a38
- [src/Entity/DisciplinaSemestre.php:90](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/DisciplinaSemestre.php#L90) · 3ed9a38
- [src/Entity/Disciplina.php:210](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/src/Entity/Disciplina.php#L210) · 3ed9a38
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) · 3ed9a38

**Dependências:** E2-01.

<a id="E2-99"></a>

## E2-99 — Aceite integrado do fechamento da entrega 2

**Situação:** Planejado — execução não iniciada.

A entrega 2 já foi publicada. As lacunas de colunas/exportação são fechadas aqui; consolidação anual e departamental continua em E7-04.

- Entrada: E2-01/E2-02/E2-03 e D04/D05 fechados.
- Saída: FECHO-2 com colunas/Excel e preservações acadêmicas aceitas.
- Limite: Total anual e departamento continuam em E7-04.

### Funções, correções ou próximos passos

- Conciliar listagem, exportação e amostra dos vínculos de responsáveis por ano/semestre.
- Repetir os filtros tipo/dia/docente, as duas visões do Quadro de aulas e a ordem cronológica dentro de cada dia.
- Reexecutar os casos de login/plano/anexo da preservação e guardar o commit cumulativo que a entrega 3 receberá.

### Banco e reversão

Massa de teste; sem alteração de histórico em produção.

### Cenários de aceite da referência

Os cenários abaixo são roteiro; somente as evidências acima comprovam execução.

| Massa / pré-condição | Ação | Resultado esperado |
|---|---|---|
| Graduação e pós em dois semestres | Comparar tela, Excel e amostra | Conjunto e valores coincidem; soma anual ainda não é declarada pronta. |

### Rastreio dos pedidos

- V1-11:1 — Campos e identificação do tipo de disciplina, graduação ou pós-graduação. · Entregue.
- VS-01:2 — Disciplinas, relatórios e login. · Entregue.
- VS-17:1 — Filtros, responsável por semestre e visualização das disciplinas docentes. · Entregue.
- WI-14:1 — Carga horária, crédito, responsável por ano/semestre, histórico do plano e filtros dos relatórios. · Entregue.
- WI-15:1 — Ordenação cronológica dentro de cada dia no Quadro de aulas. · Entregue.

### Documentos originais (rastreio preservado)

**DI35 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 82**

> Acrescentar campo para carga horária e crédito

**DI40 — Documento inicial SINGLES — ALTERAÇÕES / 2. DISCIPLINAS — parágrafo 87**

> Relatórios de justificativas de alterações de planos de ensino, constando data da alteração e o  responsável.

**DI42 — Documento inicial SINGLES — ALTERAÇÕES / 3. QUADRO DE AULA — parágrafo 96**

> Dentro de cada dia da semana ordenar por horário em ordem crescente

### Referências de código (snapshot da leitura)

- [templates/relatorios/quadro_aulas.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/quadro_aulas.html.twig#L1) · 3ed9a38
- [templates/relatorios/disciplinas_docente.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/relatorios/disciplinas_docente.html.twig#L1) · 3ed9a38
- [templates/disciplina/index.html.twig:1](https://github.com/Dcadv789/sigles/blob/3ed9a38415417b8a4ead22ecd472f758b3506db1/templates/disciplina/index.html.twig#L1) · 3ed9a38

**Dependências:** E2-03, E2-01, E2-02.

## FECHO-2 — Fechamento

**Versão publicada; lacunas de revisão continuam individualizadas, sem aceite automático.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
