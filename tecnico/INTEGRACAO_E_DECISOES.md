# SIGLES — Regras únicas, decisões e integração

Revisão 02 · 16/10/2026 · [Índice](README.md)

## Como executar sem conflito entre entregas

1. Uma cadeia de implementação: BASE-0 → itens da entrega 1 → FECHO-1 → ... → FECHO-8.
2. A tarefa dona fecha a regra; os consumidores reutilizam a decisão. Uma mudança posterior precisa listar consumidores afetados e reexecutar seus aceites.
3. Arquivos compartilhados são editados em sequência sobre o commit cumulativo aceito. Não manter oito branches independentes saídas da mesma base antiga.
4. Fechamento é homologação comprovada. Nunca atualizar status funcional só por ter um plano ou código na PR.
5. Regra não resolvida pode receber diagnóstico e proposta, mas bloqueia a implementação/aceite do trecho dependente. Não bloqueia a elaboração dos outros planos.

## Decisões de negócio e contratos

<a id="D01"></a>

### D01 — Estágios e encerramento dos períodos

- **Dono:** [E1-05](entrega-01.md#E1-05).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Preservar estados finais e uma única matriz para manual/automático; não reclassificar histórico.
- **Definição necessária:** Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.
- **Consumidores:** [E1-03](entrega-01.md#E1-03), [E1-99](entrega-01.md#E1-99), [E6-02](entrega-06.md#E6-02).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D02"></a>

### D02 — Contratos, CERT e férias

- **Dono:** [E1-04](entrega-01.md#E1-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Ler diasAvisoContrato do perfil real, separar a fonte de contrato/CERT e a regra temporal das férias.
- **Definição necessária:** Perfil de estagiário, fonte da data final, nulo/zero/vencido, inclusão do dia limite e quem consulta.
- **Consumidores:** [E5-01](entrega-05.md#E5-01), [E5-02](entrega-05.md#E5-02).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D03"></a>

### D03 — Data de origem das compras

- **Dono:** [E1-02](entrega-01.md#E1-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Exibir data da solicitação individual e detalhar origens na soma por material; nunca inventar data única.
- **Definição necessária:** Forma de abrir o detalhamento e representação temporal/fuso de exibição.
- **Consumidores:** [E1-99](entrega-01.md#E1-99), [E6-02](entrega-06.md#E6-02).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D04"></a>

### D04 — Responsável acadêmico e período

- **Dono:** [E2-01](entrega-02.md#E2-01).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Ano/semestre explícitos; múltiplos responsáveis na mesma disciplina sem confundi-los com ministrantes.
- **Definição necessária:** Período padrão e leitura histórica de vínculos/docentes inativos.
- **Consumidores:** [E2-02](entrega-02.md#E2-02), [E2-99](entrega-02.md#E2-99), [E7-03](entrega-07.md#E7-03), [E7-04](entrega-07.md#E7-04).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D05"></a>

### D05 — Fonte e nível do crédito

- **Dono:** [E2-02](entrega-02.md#E2-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Leitura atual prioriza crédito específico do semestre quando existir, inclusive zero; fallback somente se ausente. Alteração de nível, se aprovada, é implementada em E7-01.
- **Definição necessária:** Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- **Consumidores:** [E4-02](entrega-04.md#E4-02), [E4-05](entrega-04.md#E4-05), [E7-01](entrega-07.md#E7-01), [E7-02](entrega-07.md#E7-02), [E7-03](entrega-07.md#E7-03), [E7-04](entrega-07.md#E7-04).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D06"></a>

### D06 — Responsável da OS e herança

- **Dono:** [E3-02](entrega-03.md#E3-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Escolha explícita preservada; padrão serve à nova OS, sem atualizar OS antigas.
- **Definição necessária:** Solicitante versus categoria/subcategoria/configuração; independência e como distinguir herança de escolha específica.
- **Consumidores:** [E3-03](entrega-03.md#E3-03), [E3-99](entrega-03.md#E3-99), [E6-03](entrega-06.md#E6-03).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D07"></a>

### D07 — Anexos e criação conjunta de OS/orçamento

- **Dono:** [E3-04](entrega-03.md#E3-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Validar tudo antes de confirmar e compensar somente arquivos novos se houver falha.
- **Definição necessária:** Extensões/tamanhos, anexos múltiplos e comportamento da OS se o orçamento falhar.
- **Consumidores:** [E3-99](entrega-03.md#E3-99), [E6-01](entrega-06.md#E6-01).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D08"></a>

### D08 — Sala de aula e sala reservável

- **Dono:** [E4-06](entrega-04.md#E4-06).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Não deduzir equivalência dos dois conceitos nem inferir sala de aula por qualquer reunião. Preservar flags legítimos e tratar origem desconhecida.
- **Definição necessária:** Critério real de elegibilidade e se é necessária uma marcação distinta de salaAula.
- **Consumidores:** [E4-04](entrega-04.md#E4-04), [E5-03](entrega-05.md#E5-03), [E8-01](entrega-08.md#E8-01), [E8-03](entrega-08.md#E8-03), [E8-04](entrega-08.md#E8-04).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D09"></a>

### D09 — Identidade, cópia e importação de turmas

- **Dono:** [E4-02](entrega-04.md#E4-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Propor identidade por semestre/disciplina, código da turma, dia, intervalo e docente; confrontar com registros legítimos. Arquivo básico atômico, com repetição identificável.
- **Definição necessária:** Campos que realmente identificam aula/turma, criar versus atualizar, disciplina com tipo divergente, aceite docente e política de reimportação.
- **Consumidores:** [E4-05](entrega-04.md#E4-05), [E4-99](entrega-04.md#E4-99), [E7-01](entrega-07.md#E7-01), [E7-02](entrega-07.md#E7-02), [E8-07](entrega-08.md#E8-07).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D10"></a>

### D10 — Rótulo de sala e dados de solicitante

- **Dono:** [E5-03](entrega-05.md#E5-03).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Agenda usa nome_abreviado e payload por ID. Nome/e-mail em todos os tipos, obrigatórios apenas em Grupo de extensão.
- **Definição necessária:** Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- **Consumidores:** [E8-01](entrega-08.md#E8-01), [E8-02](entrega-08.md#E8-02), [E8-03](entrega-08.md#E8-03), [E8-04](entrega-08.md#E8-04), [E8-06](entrega-08.md#E8-06).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D11"></a>

### D11 — Permissões e recorte dos perfis

- **Dono:** [E5-04](entrega-05.md#E5-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Matriz perfil×módulo×ação e recorte por departamento/propriedade, validada após novo login.
- **Definição necessária:** Perfis reais e ações permitidas; não alterar exceções conhecidas fora do escopo.
- **Consumidores:** [E5-01](entrega-05.md#E5-01), [E5-02](entrega-05.md#E5-02), [E5-03](entrega-05.md#E5-03), [E6-01](entrega-06.md#E6-01), [E6-03](entrega-06.md#E6-03), [E7-03](entrega-07.md#E7-03), [E7-04](entrega-07.md#E7-04), [E8-04](entrega-08.md#E8-04), [E8-05](entrega-08.md#E8-05), [E8-06](entrega-08.md#E8-06), [E8-07](entrega-08.md#E8-07).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D12"></a>

### D12 — Dashboard: abrangência, links e imagem

- **Dono:** [E5-01](entrega-05.md#E5-01).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Usuário comum vê suas OS; ADM escolhe Minhas/Todas dentro do recorte aprovado; blocos mostram abertas/em andamento.
- **Definição necessária:** Significado departamental de Todas, destinos oficiais, perfis de colaboradores e imagem como fundo/conteúdo.
- **Consumidores:** [E5-02](entrega-05.md#E5-02).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D13"></a>

### D13 — Dados complementares de usuários

- **Dono:** [E5-02](entrega-05.md#E5-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Fechar lista de campos, validação, acesso e saídas; reutilizar dados existentes.
- **Definição necessária:** Quais melhorias além das já entregues, regras temporais das férias e necessidade de campo novo.
- **Consumidores:** [E8-07](entrega-08.md#E8-07).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D14"></a>

### D14 — Fornecedores e vínculo com compras

- **Dono:** [E6-01](entrega-06.md#E6-01).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Descrição de serviços nullable para legado e integração com vínculo existente quando atender.
- **Definição necessária:** Tamanho/obrigatoriedade e qual registro de compra/orçamento recebe fornecedor; criar ou apenas selecionar.
- **Consumidores:** [E6-02](entrega-06.md#E6-02).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D15"></a>

### D15 — Arquivados e aba Compras

- **Dono:** [E6-02](entrega-06.md#E6-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Preferir navegação sobre consulta de encerrados e painel existente, com equivalência demonstrada.
- **Definição necessária:** Diferença real entre Arquivados e encerrados; público/campos da aba Compras caso seja outra função.
- **Consumidores:** [E6-04](entrega-06.md#E6-04).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D16"></a>

### D16 — Relatórios administrativos de OS

- **Dono:** [E6-03](entrega-06.md#E6-03).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Lista finita com amostra, filtros, unidade de contagem e acesso, validada com Milton.
- **Definição necessária:** Quais relatórios/ajustes restam depois de E3 e como medir seu aceite.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D17"></a>

### D17 — Materiais, subcategorias e Almoxarifado

- **Dono:** [E6-04](entrega-06.md#E6-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Separar classificação já entregue de controle de estoque; alternativa de movimentos só se houver construção paga confirmada.
- **Definição necessária:** Tipo atende subcategoria? O compromisso é avaliar ou construir? Se construir: unidades, locais, movimentos, saldo negativo e estorno.
- **Consumidores:** [E8-07](entrega-08.md#E8-07).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D18"></a>

### D18 — Importação ampliada

- **Dono:** [E7-02](entrega-07.md#E7-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Reutilizar D09 e manter atomicidade integral como padrão; ampliar diagnóstico por linha.
- **Definição necessária:** CSV/XLSX, Ambas, limites e eventual aceite parcial. Qualquer alteração de D09 exige revisão dos consumidores anteriores.
- **Consumidores:** [E8-07](entrega-08.md#E8-07).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D19"></a>

### D19 — Relatórios de disciplinas e pós-graduação

- **Dono:** [E7-03](entrega-07.md#E7-03).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Comparar duas demandas com saídas existentes e comprovar equivalência ou especificar uma saída distinta.
- **Definição necessária:** Colunas, granularidade, público, período, filtros e sentido da pergunta sobre pós.
- **Consumidores:** [E7-04](entrega-07.md#E7-04).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D20"></a>

### D20 — Carga anual e departamento

- **Dono:** [E7-04](entrega-07.md#E7-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Uma fonte de carga e agregação por identidade única; pós é recorte ou parcela exclusiva, nunca as duas coisas na soma.
- **Definição necessária:** carga_horaria ou carga_horaria_docente, rateio, departamento de referência e representação dos semestres/pós.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D21"></a>

### D21 — Ocupação, datas, recorrência e concorrência

- **Dono:** [E8-01](entrega-08.md#E8-01).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Propor intervalos [início,fim), IDs de sala, leitura de reservas/aulas/exceções e revalidação na gravação protegida contra concorrência.
- **Definição necessária:** Fontes que bloqueiam a sala, limite inclusivo da série, esta/futuras/todas, proteção comum dos escritores e política para conflitos com aulas.
- **Consumidores:** [E8-02](entrega-08.md#E8-02), [E8-03](entrega-08.md#E8-03), [E8-04](entrega-08.md#E8-04), [E8-06](entrega-08.md#E8-06).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D22"></a>

### D22 — Bloqueio manual e escolha de sala

- **Dono:** [E8-02](entrega-08.md#E8-02).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Somente disponíveis na função de escolha e bloqueio manual com limites explícitos; feriados automáticos ficam fora.
- **Definição necessária:** Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento.
- **Consumidores:** [E8-03](entrega-08.md#E8-03), [E8-04](entrega-08.md#E8-04), [E8-06](entrega-08.md#E8-06).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D23"></a>

### D23 — Salas duplicadas e sala canônica

- **Dono:** [E8-03](entrega-08.md#E8-03).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Mapa por ID, simulação de colisões, snapshot seletivo e inativação rastreável quando adequada.
- **Definição necessária:** Planilha, destino de cada sala, flags e resolução dos conflitos de calendário detectados.
- **Consumidores:** [E8-04](entrega-08.md#E8-04), [E8-06](entrega-08.md#E8-06).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D24"></a>

### D24 — Identificação e aprovação de solicitantes

- **Dono:** [E8-04](entrega-08.md#E8-04).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Propor login limitado, solicitação separada, checagem de propriedade e aprovação idempotente com ocupação D21.
- **Definição necessária:** Validação USP realmente disponível, cadastro externo, aprovador, estados/reenvio/cancelamento e eventual acesso sem cadastro.
- **Consumidores:** [E8-06](entrega-08.md#E8-06).
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D25"></a>

### D25 — Conexão LES e comunicações externas

- **Dono:** [E8-05](entrega-08.md#E8-05).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Separar permissões de publicador e solicitante de reserva, usar URL de ambiente confiável e deduplicar envios.
- **Definição necessária:** Ações/estados por ator, destinatários/cópias, acesso aos anexos e tratamento de repetição/falha.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D26"></a>

### D26 — Relatório do histórico de agenda

- **Dono:** [E8-06](entrega-08.md#E8-06).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Reutilizar logs, filtrar/exportar o mesmo conjunto e explicitar informação histórica ausente.
- **Definição necessária:** Campos, filtros, recorte de acesso, retenção e se aprovação externa entra na amostra.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D27"></a>

### D27 — Cadastros-alvo de importação

- **Dono:** [E8-07](entrega-08.md#E8-07).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Uma especificação por cadastro; padrão D09/D18 aplicado no domínio existente.
- **Definição necessária:** Lista paga/finita de cadastros, colunas, identidades, criar/atualizar, inativos e tamanho de lote.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

<a id="D28"></a>

### D28 — Saída dos estudos acadêmicos

- **Dono:** [E8-08](entrega-08.md#E8-08).
- **Estado:** Proposta para revisão — não homologada.
- **Proposta:** Mapa de processo e parecer de viabilidade, incluindo eventual conclusão negativa sobre NotebookLM.
- **Definição necessária:** Responsável, processo atual, resultado esperado e fontes oficiais a consultar na futura execução.
- **Consumidores:** sem consumidor direto adicional ao fechamento da entrega.
- **Registro na execução:** responsável funcional, data, decisão, exemplo e critérios aceitos. Se a decisão mudar depois, revisar consumidores antes de avançar.

## Arquivos compartilhados: ordem de alteração

A tabela lista referências de leitura/alteração em mais de um item. Não declara que todos precisarão ser modificados. Na implementação, marcar o diff real de cada tarefa e reaplicar a regressão do item anterior que tocou o mesmo arquivo.

| Arquivo | Sequência dos itens |
|---|---|
| src/Controller/PeriodoSolicitacoesController.php | [E1-05](entrega-01.md#E1-05) → [E1-03](entrega-01.md#E1-03) |
| src/Repository/PeriodoSolicitacoesRepository.php | [E1-05](entrega-01.md#E1-05) → [E6-02](entrega-06.md#E6-02) |
| src/Controller/PainelSolicitacoesController.php | [E1-05](entrega-01.md#E1-05) → [E1-02](entrega-01.md#E1-02) → [E6-02](entrega-06.md#E6-02) |
| src/Controller/UsuarioController.php | [E1-01](entrega-01.md#E1-01) → [E1-04](entrega-01.md#E1-04) → [E1-99](entrega-01.md#E1-99) → [E5-01](entrega-05.md#E5-01) → [E5-02](entrega-05.md#E5-02) → [E8-07](entrega-08.md#E8-07) |
| templates/usuario/modal.html.twig | [E1-01](entrega-01.md#E1-01) → [E5-02](entrega-05.md#E5-02) |
| templates/dashboard/dashboard.js | [E1-04](entrega-01.md#E1-04) → [E3-04](entrega-03.md#E3-04) → [E5-01](entrega-05.md#E5-01) → [E5-02](entrega-05.md#E5-02) |
| templates/painel_solicitacoes/index.html.twig | [E1-02](entrega-01.md#E1-02) → [E6-02](entrega-06.md#E6-02) |
| src/Controller/MaterialController.php | [E1-99](entrega-01.md#E1-99) → [E6-04](entrega-06.md#E6-04) → [E8-07](entrega-08.md#E8-07) |
| src/Controller/SalaController.php | [E1-99](entrega-01.md#E1-99) → [E4-04](entrega-04.md#E4-04) → [E8-03](entrega-08.md#E8-03) |
| migrations/Version20261011120000.php | [E2-03](entrega-02.md#E2-03) → [E4-01](entrega-04.md#E4-01) |
| migrations/Version20260908230000.php | [E2-03](entrega-02.md#E2-03) → [E4-01](entrega-04.md#E4-01) |
| src/Controller/LoginController.php | [E2-03](entrega-02.md#E2-03) → [E5-04](entrega-05.md#E5-04) |
| src/Controller/DisciplinaController.php | [E2-01](entrega-02.md#E2-01) → [E4-04](entrega-04.md#E4-04) → [E7-01](entrega-07.md#E7-01) → [E8-08](entrega-08.md#E8-08) |
| templates/disciplina/index.html.twig | [E2-01](entrega-02.md#E2-01) → [E2-99](entrega-02.md#E2-99) → [E7-03](entrega-07.md#E7-03) |
| src/Controller/DisciplinaTurmaController.php | [E2-02](entrega-02.md#E2-02) → [E7-01](entrega-07.md#E7-01) → [E7-03](entrega-07.md#E7-03) → [E7-04](entrega-07.md#E7-04) → [E8-01](entrega-08.md#E8-01) |
| src/Entity/DisciplinaSemestre.php | [E2-02](entrega-02.md#E2-02) → [E7-01](entrega-07.md#E7-01) |
| src/Entity/Disciplina.php | [E2-02](entrega-02.md#E2-02) → [E8-08](entrega-08.md#E8-08) |
| templates/relatorios/disciplinas_docente.html.twig | [E2-02](entrega-02.md#E2-02) → [E2-99](entrega-02.md#E2-99) → [E7-03](entrega-07.md#E7-03) |
| src/Controller/OrdemServicoController.php | [E3-01](entrega-03.md#E3-01) → [E3-02](entrega-03.md#E3-02) → [E3-99](entrega-03.md#E3-99) → [E5-01](entrega-05.md#E5-01) → [E6-03](entrega-06.md#E6-03) |
| templates/ordem_servico/index.html.twig | [E3-01](entrega-03.md#E3-01) → [E3-03](entrega-03.md#E3-03) → [E6-03](entrega-06.md#E6-03) |
| src/Controller/CategoriaOsController.php | [E3-02](entrega-03.md#E3-02) → [E3-03](entrega-03.md#E3-03) |
| src/Controller/ConfiguracoesController.php | [E3-03](entrega-03.md#E3-03) → [E8-05](entrega-08.md#E8-05) |
| src/Controller/OrcamentoController.php | [E3-04](entrega-03.md#E3-04) → [E6-03](entrega-06.md#E6-03) |
| templates/dashboard/index.html.twig | [E3-04](entrega-03.md#E3-04) → [E5-01](entrega-05.md#E5-01) |
| src/Controller/HistoricoOsController.php | [E3-99](entrega-03.md#E3-99) → [E6-03](entrega-06.md#E6-03) |
| .github/workflows/deploy-teste.yml | [E3-99](entrega-03.md#E3-99) → [E4-99](entrega-04.md#E4-99) |
| src/Controller/CronogramaController.php | [E4-01](entrega-04.md#E4-01) → [E4-02](entrega-04.md#E4-02) → [E4-03](entrega-04.md#E4-03) → [E4-05](entrega-04.md#E4-05) → [E4-99](entrega-04.md#E4-99) → [E7-02](entrega-07.md#E7-02) → [E8-01](entrega-08.md#E8-01) → [E8-07](entrega-08.md#E8-07) |
| templates/cronograma/cronograma.js | [E4-01](entrega-04.md#E4-01) → [E4-03](entrega-04.md#E4-03) → [E4-04](entrega-04.md#E4-04) → [E7-01](entrega-07.md#E7-01) |
| src/Entity/Sala.php | [E4-06](entrega-04.md#E4-06) → [E5-03](entrega-05.md#E5-03) → [E8-03](entrega-08.md#E8-03) |
| src/Repository/ReservaRepository.php | [E4-06](entrega-04.md#E4-06) → [E5-03](entrega-05.md#E5-03) → [E8-01](entrega-08.md#E8-01) |
| templates/cronograma/modal.html.twig | [E4-02](entrega-04.md#E4-02) → [E4-05](entrega-04.md#E4-05) → [E7-02](entrega-07.md#E7-02) |
| src/Repository/DisciplinaTurmaRepository.php | [E4-02](entrega-04.md#E4-02) → [E7-02](entrega-07.md#E7-02) → [E8-01](entrega-08.md#E8-01) |
| src/Entity/DisciplinaCurso.php | [E4-03](entrega-04.md#E4-03) → [E8-08](entrega-08.md#E8-08) |
| src/Controller/PerfilModuloController.php | [E5-04](entrega-05.md#E5-04) → [E8-04](entrega-08.md#E8-04) |
| templates/admin.html.twig | [E5-03](entrega-05.md#E5-03) → [E6-02](entrega-06.md#E6-02) |
| src/Controller/ReservaController.php | [E5-03](entrega-05.md#E5-03) → [E8-01](entrega-08.md#E8-01) → [E8-02](entrega-08.md#E8-02) → [E8-04](entrega-08.md#E8-04) → [E8-06](entrega-08.md#E8-06) |
| templates/agenda/modal.html.twig | [E5-03](entrega-05.md#E5-03) → [E8-02](entrega-08.md#E8-02) |
| templates/agenda/agenda.js | [E5-03](entrega-05.md#E5-03) → [E8-01](entrega-08.md#E8-01) → [E8-02](entrega-08.md#E8-02) |
| src/Entity/Reserva.php | [E5-03](entrega-05.md#E5-03) → [E8-03](entrega-08.md#E8-03) → [E8-04](entrega-08.md#E8-04) |
| src/Entity/DisciplinaTurma.php | [E7-04](entrega-07.md#E7-04) → [E8-03](entrega-08.md#E8-03) |
| config/packages/security.yaml | [E8-04](entrega-08.md#E8-04) → [E8-05](entrega-08.md#E8-05) |
| src/Controller/CadastroPublicadorController.php | [E8-04](entrega-08.md#E8-04) → [E8-05](entrega-08.md#E8-05) |

## Regras comuns

- Preservar Symfony 6.3, PHP 8.2, MariaDB, Twig, jQuery e DataTables; seguir o CRUD existente, sem nova stack, REST, Symfony Form novo ou camada Service por conveniência.
- Escrita de dados exclusivamente em esalq_sistema_des. A restrição de não escrever em produção continua válida. O workflow de produção executa migrations e não deve ser acionado enquanto essa restrição vigorar.
- Trabalhar em checkout limpo com branch codex/, mantendo as alterações locais de Cronograma do usuário. Não usar reset/checkout de arquivos para descartar trabalho existente.
- Novas ações internas devem validar ACL modular no servidor e no Twig. Rotas AJAX expostas, payload e toast/406 seguem o padrão atual; permissões da sessão exigem novo login para validação.
- SQL tocado usa parâmetros. Não interpolar valores da requisição; não refatorar a segurança inteira nem o CSRF de todos os módulos.
- Não alterar o bug conhecido de GAM/ROLE_ROOT por iniciativa própria. Conferir o código real GOÇ no módulo de orçamento e não copiar a ausência de ACL de PublicacaoController.
- Não commitar .env, .env.local, senhas, backups de ambiente, vendor/ ou uploads/. Referências de código deste plano apontam a commits fixos e podem exigir acesso ao GitHub.
- Criar migrations somente na implementação, após fechar a regra. Preservar migrations executadas e usar compensação seletiva de dados, não um down amplo que apague histórico.
- Os comandos e testes abaixo são planejados. Não foram executados testes funcionais do sistema, migrations, merge da PR ou deploy do SIGLES nesta etapa.
- Ordem de execução e dependência técnica são relações distintas. Todos os itens seguem a cadeia explícita e FECHO-1 a FECHO-8; dependências indicam os resultados de código/regra que são reutilizados.

## Dados e publicação

Leitura do código não substitui inventário de migrations/FKs no teste. Cada migration tem estado anterior, SQL previsto, IDs afetados e compensação. Produção não pode ser escrita sob a restrição atual; o workflow executa migrations. Planejar publicação futura não autoriza executá-la. Não publicar credenciais, documentos pessoais ou massas reais no repositório do quadro.
