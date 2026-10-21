# SIGLES — Decisões e integração

**Atualização: 21/10/2026.**

Atualização de 21/10/2026: Entregas 1, 2, 3 e 3.5 em produção; produção atual v1.3.3. Entrega 4 em homologação na v1.4.0-beta2, PR #9 aberta e sem merge. Entrega 5 implementada em rascunho na PR #36, ainda precisa incorporar a base atual e passar por homologação. Entregas 6 a 8: escopo restante planejado.

## Base e preservações

Reservas, recorrências, disponibilidade, permissões de edição, bloqueio entre aulas e reservas, concorrência, consulta/edição da Agenda, Relatório de reservas e ajustes de login/sessão publicados na Entrega 3.5 (v1.3.1/v1.3.2/v1.3.3).

Dados legados: 25 cruzamentos reserva/aula foram resolvidos por 23 remanejamentos autorizados. Restam 172 pares de ocorrências acadêmicas preexistentes para a coordenação: 21 entre disciplinas diferentes e 151 para confirmar identificação/compartilhamento. São alertas de dados antigos, não 172 novos agendamentos. Não remanejar automaticamente.

<a id="D01"></a>

## D01 — Estágios e encerramento dos períodos

- Dono: E1-05.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Preservar estados finais e uma única matriz para manual/automático; não reclassificar histórico.
- A confirmar / preservar: Prevalência do descritivo Em andamento→Realizada versus código atual que expira; limites de data e diferença manual/automático.
- Consumidores: E1-03, E1-99, E6-02.

<a id="D02"></a>

## D02 — Contratos, CERT e férias

- Dono: E1-04.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Ler diasAvisoContrato do perfil real, separar a fonte de contrato/CERT e a regra temporal das férias.
- A confirmar / preservar: Perfil de estagiário, fonte da data final, nulo/zero/vencido, inclusão do dia limite e quem consulta.
- Consumidores: E5-01, E5-02.

<a id="D03"></a>

## D03 — Data de origem das compras

- Dono: E1-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Exibir data da solicitação individual e detalhar origens na soma por material; nunca inventar data única.
- A confirmar / preservar: Forma de abrir o detalhamento e representação temporal/fuso de exibição.
- Consumidores: E1-99, E6-02.

<a id="D04"></a>

## D04 — Responsável acadêmico e período

- Dono: E2-01.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Ano/semestre explícitos; múltiplos responsáveis na mesma disciplina sem confundi-los com ministrantes.
- A confirmar / preservar: Período padrão e leitura histórica de vínculos/docentes inativos.
- Consumidores: E2-02, E2-99, E7-03, E7-04.

<a id="D05"></a>

## D05 — Fonte e nível do crédito

- Dono: E2-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Leitura atual prioriza crédito específico do semestre quando existir, inclusive zero; fallback somente se ausente. Alteração de nível, se aprovada, é implementada em E7-01.
- A confirmar / preservar: Crédito por disciplina/semestre ou por turma/dia e regra de preservação/migração se o nível mudar.
- Consumidores: E4-02, E4-05, E7-01, E7-02, E7-03, E7-04.

<a id="D06"></a>

## D06 — Responsável da OS e herança

- Dono: E3-02.
- Situação: Configuração e correções publicadas na Entrega 3.
- Regra / proposta: Escolha explícita preservada; padrão serve à nova OS, sem atualizar OS antigas.
- A confirmar / preservar: Iraides definida nas categorias acordadas; preservar os demais responsáveis e a herança/vínculos existentes. Responsável independente novo na subcategoria requer definição específica.
- Consumidores: E3-03, E3-99, E6-03.

<a id="D07"></a>

## D07 — Anexos e criação conjunta de OS/orçamento

- Dono: E3-04.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Validar tudo antes de confirmar e compensar somente arquivos novos se houver falha.
- A confirmar / preservar: Extensões/tamanhos, anexos múltiplos e comportamento da OS se o orçamento falhar.
- Consumidores: E3-99, E6-01.

<a id="D08"></a>

## D08 — Sala de aula e sala reservável

- Dono: E4-06.
- Situação: Regra definida por Daniel e aplicada na Entrega 4 em homologação.
- Regra / proposta: Novas atribuições acadêmicas usam somente salas ativas marcadas “É sala de aula?”; vínculos históricos preservados.
- A confirmar / preservar: Ensaiar efeitos da migration histórica e classificação antes de produção; sala reservável não equivale automaticamente a sala de aula.
- Consumidores: E4-04, E5-03, E8-01, E8-03, E8-04.

<a id="D09"></a>

## D09 — Identidade, cópia e importação de turmas

- Dono: E4-02.
- Situação: Aplicado na Entrega 4; extensões futuras preservam o contrato.
- Regra / proposta: Importação .xlsx com identidade de aula incluindo dia/horário/docente, repetição sem duplicação e rollback; preservar tipo existente e ajustes do destino.
- A confirmar / preservar: Aceite do arquivo original e complementos específicos de E7-02; não reabrir o formato .xlsx já definido.
- Consumidores: E4-05, E4-99, E7-01, E7-02, E8-07.

<a id="D10"></a>

## D10 — Rótulo de sala e dados de solicitante

- Dono: E5-03.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Agenda usa nome_abreviado e payload por ID. Nome/e-mail em todos os tipos, obrigatórios apenas em Grupo de extensão.
- A confirmar / preservar: Fallback se abreviado estiver vazio; limpeza explícita de campos opcionais e troca de tipo.
- Consumidores: E8-01, E8-02, E8-03, E8-04, E8-06.

<a id="D11"></a>

## D11 — Permissões e recorte dos perfis

- Dono: E5-04.
- Situação: Preservar matriz atual; correções de divergência na PR #36, sem homologação.
- Regra / proposta: Matriz perfil×módulo×ação e recorte por departamento/propriedade, validada após novo login.
- A confirmar / preservar: Renovar a sessão após mudanças. Preservar a restrição ao Administrador publicada na 3.5 para configuração de perfis e edição de reservas.
- Consumidores: E5-01, E5-02, E5-03, E6-01, E6-03, E7-03, E7-04, E8-04, E8-05, E8-06, E8-07.

<a id="D12"></a>

## D12 — Dashboard: abrangência, links e imagem

- Dono: E5-01.
- Situação: Recorte definido por Daniel; implementado na PR #36, ainda sem homologação.
- Regra / proposta: Usuário comum vê suas OS; ADM escolhe Minhas/Todas dentro do recorte aprovado; blocos mostram abertas/em andamento.
- A confirmar / preservar: Todas as OS limitado ao departamento e setores vinculados. Revalidar atalhos e fundo ao atualizar a base da Entrega 5.
- Consumidores: E5-02.

<a id="D13"></a>

## D13 — Dados complementares de usuários

- Dono: E5-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Fechar lista de campos, validação, acesso e saídas; reutilizar dados existentes.
- A confirmar / preservar: Quais melhorias além das já entregues, regras temporais das férias e necessidade de campo novo.
- Consumidores: E8-07.

<a id="D14"></a>

## D14 — Fornecedores e vínculo com compras

- Dono: E6-01.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Descrição de serviços nullable para legado e integração com vínculo existente quando atender.
- A confirmar / preservar: Tamanho/obrigatoriedade e qual registro de compra/orçamento recebe fornecedor; criar ou apenas selecionar.
- Consumidores: E6-02.

<a id="D15"></a>

## D15 — Arquivados e aba Compras

- Dono: E6-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Preferir navegação sobre consulta de encerrados e painel existente, com equivalência demonstrada.
- A confirmar / preservar: Diferença real entre Arquivados e encerrados; público/campos da aba Compras caso seja outra função.
- Consumidores: E6-04.

<a id="D16"></a>

## D16 — Relatórios administrativos de OS

- Dono: E6-03.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Lista finita com amostra, filtros, unidade de contagem e acesso, validada com Milton.
- A confirmar / preservar: Quais relatórios/ajustes restam depois de E3 e como medir seu aceite.
- Consumidores: .

<a id="D17"></a>

## D17 — Materiais, subcategorias e Almoxarifado

- Dono: E6-04.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Separar classificação já entregue de controle de estoque; alternativa de movimentos só se houver construção paga confirmada.
- A confirmar / preservar: Tipo atende subcategoria? O compromisso é avaliar ou construir? Se construir: unidades, locais, movimentos, saldo negativo e estorno.
- Consumidores: E8-07.

<a id="D18"></a>

## D18 — Importação ampliada

- Dono: E7-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Reutilizar D09 e manter atomicidade integral como padrão; ampliar diagnóstico por linha.
- A confirmar / preservar: Somente XLSX já definido por Daniel e entregue na 4. Delimitar tipos mistos, limites, diagnóstico ampliado e eventual aceite parcial sem enfraquecer D09.
- Consumidores: E8-07.

<a id="D19"></a>

## D19 — Relatórios de disciplinas e pós-graduação

- Dono: E7-03.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Comparar duas demandas com saídas existentes e comprovar equivalência ou especificar uma saída distinta.
- A confirmar / preservar: Colunas, granularidade, público, período, filtros e sentido da pergunta sobre pós.
- Consumidores: E7-04.

<a id="D20"></a>

## D20 — Carga anual e departamento

- Dono: E7-04.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Uma fonte de carga e agregação por identidade única; pós é recorte ou parcela exclusiva, nunca as duas coisas na soma.
- A confirmar / preservar: carga_horaria ou carga_horaria_docente, rateio, departamento de referência e representação dos semestres/pós.
- Consumidores: .

<a id="D21"></a>

## D21 — Ocupação, datas, recorrência e concorrência

- Dono: E3.5-01.
- Situação: Aplicado e publicado — v1.3.3.
- Regra / proposta: Intervalos [início,fim), ocupação por ID da sala, reservas/repetições/exceções/aulas e bloqueio transacional comum aos gravadores internos.
- A confirmar / preservar: Somente políticas futuras de bloqueio manual/externos em D22/D24 e saneamento legado pela coordenação.
- Consumidores: E8-02, E8-03, E8-04, E8-06.

<a id="D22"></a>

## D22 — Bloqueio manual e escolha de sala

- Dono: E8-02.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Somente disponíveis na função de escolha e bloqueio manual com limites explícitos; feriados automáticos ficam fora.
- A confirmar / preservar: Salas abrangidas, perfil administrador, conflito com evento existente e cancelamento. Decisão já aprovada: salas ocupadas visíveis em cinza e não selecionáveis, com motivo do bloqueio; não ocultá-las.
- Consumidores: E8-03, E8-04, E8-06.

<a id="D23"></a>

## D23 — Salas duplicadas e sala canônica

- Dono: E8-03.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Mapa por ID, simulação de colisões, snapshot seletivo e inativação rastreável quando adequada.
- A confirmar / preservar: Planilha, destino de cada sala, flags e resolução dos conflitos de calendário detectados.
- Consumidores: E8-04, E8-06.

<a id="D24"></a>

## D24 — Identificação e aprovação de solicitantes

- Dono: E8-04.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Propor login limitado, solicitação separada, checagem de propriedade e aprovação idempotente com ocupação D21.
- A confirmar / preservar: Validação USP realmente disponível, cadastro externo, aprovador, estados/reenvio/cancelamento e eventual acesso sem cadastro.
- Consumidores: E8-06.

<a id="D25"></a>

## D25 — Conexão LES e comunicações externas

- Dono: E8-05.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Separar permissões de publicador e solicitante de reserva, usar URL de ambiente confiável e deduplicar envios.
- A confirmar / preservar: Ações/estados por ator, destinatários/cópias, acesso aos anexos e tratamento de repetição/falha.
- Consumidores: .

<a id="D26"></a>

## D26 — Relatório do histórico de agenda

- Dono: E8-06.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Reutilizar logs, filtrar/exportar o mesmo conjunto e explicitar informação histórica ausente.
- A confirmar / preservar: Campos, filtros, recorte de acesso, retenção e se aprovação externa entra na amostra.
- Consumidores: .

<a id="D27"></a>

## D27 — Cadastros-alvo de importação

- Dono: E8-07.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Uma especificação por cadastro; padrão D09/D18 aplicado no domínio existente.
- A confirmar / preservar: Lista paga/finita de cadastros, colunas, identidades, criar/atualizar, inativos e tamanho de lote.
- Consumidores: .

<a id="D28"></a>

## D28 — Saída dos estudos acadêmicos

- Dono: E8-08.
- Situação: Proposta para revisão — não homologada.
- Regra / proposta: Mapa de processo e parecer de viabilidade, incluindo eventual conclusão negativa sobre NotebookLM.
- A confirmar / preservar: Responsável, processo atual, resultado esperado e fontes oficiais a consultar na futura execução.
- Consumidores: .

## Arquivos compartilhados

| Arquivo | Itens consumidores |
|---|---|
| src/Controller/PeriodoSolicitacoesController.php | E1-05, E1-03 |
| src/Repository/PeriodoSolicitacoesRepository.php | E1-05, E6-02 |
| src/Controller/PainelSolicitacoesController.php | E1-05, E1-02, E6-02 |
| src/Controller/UsuarioController.php | E1-01, E1-04, E1-99, E5-01, E5-02, E8-07 |
| templates/usuario/modal.html.twig | E1-01, E5-02 |
| templates/dashboard/dashboard.js | E1-04, E3-04, E5-01, E5-02 |
| templates/painel_solicitacoes/index.html.twig | E1-02, E6-02 |
| src/Controller/MaterialController.php | E1-99, E6-04, E8-07 |
| src/Controller/SalaController.php | E1-99, E4-04, E8-03 |
| migrations/Version20261011120000.php | E2-03, E4-01 |
| migrations/Version20260908230000.php | E2-03, E4-01 |
| src/Controller/LoginController.php | E2-03, E5-04 |
| src/Controller/DisciplinaController.php | E2-01, E4-04, E7-01, E8-08 |
| templates/disciplina/index.html.twig | E2-01, E2-99, E7-03 |
| src/Controller/DisciplinaTurmaController.php | E2-02, E7-01, E7-03, E7-04, E8-01 |
| src/Entity/DisciplinaSemestre.php | E2-02, E7-01 |
| src/Entity/Disciplina.php | E2-02, E8-08 |
| templates/relatorios/disciplinas_docente.html.twig | E2-02, E2-99, E7-03 |
| src/Controller/OrdemServicoController.php | E3-01, E3-02, E3-99, E5-01, E6-03 |
| templates/ordem_servico/index.html.twig | E3-01, E3-03, E6-03 |
| src/Controller/CategoriaOsController.php | E3-02, E3-03 |
| src/Controller/ConfiguracoesController.php | E3-03, E8-05 |
| src/Controller/OrcamentoController.php | E3-04, E6-03 |
| templates/dashboard/index.html.twig | E3-04, E5-01 |
| src/Controller/HistoricoOsController.php | E3-99, E6-03 |
| .github/workflows/deploy-teste.yml | E3-99, E4-99 |
| src/Controller/CronogramaController.php | E4-01, E4-02, E4-03, E4-05, E4-99, E7-02, E8-01, E8-07 |
| templates/cronograma/cronograma.js | E4-01, E4-03, E4-04, E7-01 |
| src/Entity/Sala.php | E4-06, E5-03, E8-03 |
| src/Repository/ReservaRepository.php | E4-06, E5-03, E8-01 |
| templates/cronograma/modal.html.twig | E4-02, E4-05, E7-02 |
| src/Repository/DisciplinaTurmaRepository.php | E4-02, E7-02, E8-01 |
| src/Entity/DisciplinaCurso.php | E4-03, E8-08 |
| src/Controller/PerfilModuloController.php | E5-04, E8-04 |
| templates/admin.html.twig | E5-03, E6-02 |
| src/Controller/ReservaController.php | E5-03, E8-01, E8-02, E8-04, E8-06 |
| templates/agenda/modal.html.twig | E5-03, E8-02 |
| templates/agenda/agenda.js | E5-03, E8-01, E8-02 |
| src/Entity/Reserva.php | E5-03, E8-03, E8-04 |
| src/Entity/DisciplinaTurma.php | E7-04, E8-03 |
| config/packages/security.yaml | E8-04, E8-05 |
| src/Controller/CadastroPublicadorController.php | E8-04, E8-05 |
