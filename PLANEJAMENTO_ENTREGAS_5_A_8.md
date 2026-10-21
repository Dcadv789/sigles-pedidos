# SIGLES — Planejamento das entregas e escopo restante

**Atualizado em 21/10/2026.**

Atualização de 21/10/2026: Entregas 1, 2, 3 e 3.5 em produção; produção atual v1.3.3. Entrega 4 em homologação na v1.4.0-beta2, PR #9 aberta e sem merge. Entrega 5 implementada em rascunho na PR #36, ainda precisa incorporar a base atual e passar por homologação. Entregas 6 a 8: escopo restante planejado.

[Sequência completa](https://dcadv789.github.io/sigles-pedidos/tecnico/)

## Referência de esforço

15/15/20/50 são pesos históricos do planejamento original das entregas 5 a 8. Com a antecipação para 3.5, não representam o esforço restante recalculado nem horas. Não cobrar ou implementar novamente o que já foi entregue.

## Antecipação concluída — Entrega 3.5

Reservas, recorrências, disponibilidade, permissões de edição, bloqueio entre aulas e reservas, concorrência, consulta/edição da Agenda, Relatório de reservas e ajustes de login/sessão publicados na Entrega 3.5 (v1.3.1/v1.3.2/v1.3.3). E8-01/antigo grupo 8.1 foram retirados da fila futura.

## Entrega 5 — Usabilidade, cadastros e ajustes de acesso

**Situação:** Código na PR #36; atualizar base, validar visualmente e homologar. **Peso original:** 15% (histórico).

### 5.1 — Dashboard e informações iniciais

Completar atalhos e apresentação das informações do Dashboard.

- Inserir LES, Conexão LES, MarteWeb e Júpiter Web com destinos confirmados.
- Conferir recorte Minhas/Todas das OS e perfis de colaboradores; consumir a regra contratual D02, sem reimplementá-la.
- Aplicar a decisão sobre a imagem de fundo/conteúdo e testar legibilidade.

**Limite:**

### 5.2 — Usuários, contatos, férias e prazo de contratos

Refinar contatos, férias e dados complementares usando as regras já fechadas.

- Reutilizar E1-01 para ordenação/permanência de aba e E1-04 para a regra dos 45 dias; esses resultados ficam no fechamento da entrega 1.
- Definir e concluir somente os complementos de contatos, dados e férias previstos em E5-02.

**Limite:** O envio automático de avisos continua Aditivo. Campos e saídas genéricos precisam de uma lista finita; correções já fechadas na entrega 1 não são desenvolvidas novamente.

### 5.3 — Navegação, identificação das salas e dados do solicitante

Reunir pequenos ajustes de apresentação e de preenchimento.

- Mover Períodos para o menu Compras.
- Apresentar o nome abreviado da sala na agenda.
- Exibir nome e e-mail em todos os tipos de reserva e exigir os campos somente em Grupo de extensão.

**Limite:**

### 5.4 — Perfis e permissões existentes

Fechar a lista de ajustes de acesso nos perfis atuais e adequar o comportamento acordado.

- Identificar as ações permitidas por perfil e módulo e resolver os desvios do fluxo existente.

**Limite:** Abrange a revisão dos perfis atuais. O acesso novo de alunos e externos a reservas fica na entrega 8; não há substituição geral do controle de permissões.

## Entrega 6 — Fornecedores, compras e ordens de serviço

**Situação:** Não executado. **Peso original:** 15% (histórico).

### 6.1 — Fornecedores e ligação com compras

Concluir o cadastro de fornecedores e a integração administrativa pretendida.

- Acrescentar a descrição dos serviços no cadastro, edição e listagem.
- Reproduzir e corrigir os dados de fornecedor que não eram gravados.
- Definir e concluir a ligação ordinária com o fluxo de compras, sem duplicar os dois ajustes anteriores.

**Limite:**

### 6.2 — Períodos e apresentação das solicitações de compras

Completar navegação de períodos encerrados e esclarecer a aba Compras.

- Consumir ativação, datas e transições fechadas em E1-02/E1-03/E1-05.
- Comprovar equivalência da consulta de encerrados com Arquivados ou especificar a diferença.
- Definir se a aba Compras é navegação existente ou saída distinta e implementar apenas o complemento acordado.

**Limite:** Estágios, datas e histórico pertencem ao fechamento da entrega 1. Arquivados não cria outro estágio sem regra explícita.

### 6.3 — Complementos das ordens de serviço

Concluir apenas os relatórios e complementos administrativos que restarem após E3.

- Reutilizar seguidores E3-01, responsáveis E3-02, ordenação/resumo E3-03 e anexos E3-04.
- Fechar com Milton a lista dos relatórios e ajustes administrativos restantes e implementar a saída realmente distinta.
- Conferir unidade de contagem e exportação sem multiplicar OS por anexos ou seguidores.

**Limite:** Não reexecutar a construção da entrega 3. Lista de relatórios finita e validada por amostra; nenhum visualizador universal é presumido.

### 6.4 — Separação de materiais e alcance do Almoxarifado

Encerrar a interpretação de Compras/Almoxarifado e da eventual hierarquia de materiais.

- Conferir se Tipo atende à subcategoria Compras/Almoxarifado.
- Fechar D17: avaliação da separação ou construção paga de estoque.
- Se houver estoque contratado, manter a tarefa aberta até detalhar e implementar movimentos/saldo/estorno no limite aprovado.

**Limite:** O ponto macro é reserva preliminar para definição. Ele não prova capacidade de construir estoque completo. Se a construção fizer parte do pagamento, o compromisso permanece e o esforço precisa ser conferido antes de fechar FECHO-6.

## Entrega 7 — Cronogramas, disciplinas e relatórios acadêmicos

**Situação:** Não executado. **Peso original:** 20% (histórico).

### 7.1 — Turmas, dados e seleções do cronograma

Resolver os casos de turma e completar a consulta e a exportação do cronograma.

- Validar criação repetida, edição individual e exclusão por ID sem confundir dias/docentes legítimos com duplicatas.
- Reutilizar crédito D05 e identidade D09; preencher carga, tipo/crédito e ordenar horários sem sobrescrita por resposta tardia.
- Filtros de docentes/salas e exportação de cursos são fechados em E4-03/E4-04; aqui somente regressão desses resultados.

**Limite:** Não refazer cópia, datas, filtros, modelo e cursos da entrega 4. Mudança de nível do crédito só ocorre aqui se já deliberada em D05 e revalida consumidores anteriores.

### 7.2 — Complementos de importação acadêmica

Complementar a importação XLSX já entregue na 4: diagnóstico ampliado e recortes de tipo ainda não atendidos.

- Reutilizar XLSX/modelo, identidade, repetição e rollback da Entrega 4.
- Delimitar importação de tipos mistos no mesmo arquivo e diagnóstico ampliado por linha, sem substituir o tipo de disciplina existente.
- Aceitar o arquivo original do cliente e preservar bloqueios de ocupação da 3.5.

**Limite:** XLSX não é tarefa futura: já está em homologação na Entrega 4. Não reintroduzir CSV.

### 7.3 — Disciplinas e exportações

Delimitar relatórios acadêmicos restantes, sem repetir colunas/exportações já fechadas.

- Reutilizar responsável/Excel E2-01 e crédito E2-02 já fechados.
- Definir o pedido genérico Relatório de disciplinas e comprovar equivalência ou uma saída distinta.
- A consulta de pós por filtro já registrada como entregue é regressão/equivalência, salvo diferença concreta de campos/finalidade.

**Limite:** Responsável, Excel e crédito são uma única implementação na entrega 2. O editor de planos do documento Adicional continua fora.

### 7.4 — Carga horária anual e por departamento

Consolidar a carga horária docente nos recortes solicitados.

- Definir D20: carga da turma ou do docente, rateio, departamento e unidade única de contagem.
- Consolidar semestres e pós em parcelas exclusivas ou recortes explicados, evitando dupla soma.
- Exportar a mesma base e fornecer detalhamento conciliável.

**Limite:**

## Entrega 8 — Agenda, reservas externas e integrações

**Situação:** Somente escopo restante planejado; E8-01 transferido à 3.5. **Peso original:** 50% (histórico).

### 8.2 — Disponibilidade e bloqueios manuais

Concluir a escolha de sala a partir da disponibilidade e confirmar o bloqueio manual.

- Adicionar seleção/retorno ao evento a partir da aba de consulta, preservando campos. No seletor do evento, manter ocupadas cinzas e bloqueadas como aprovado na 3.5.
- Revalidar ocupação D21 na gravação; consulta anterior não garante reserva.
- Conferir a solução manual marcada FEITO e implementar somente a lacuna comprovada de bloqueio manual.

**Limite:** Bloqueio automático de feriados é Aditivo e fica fora. A política de um novo módulo de indisponibilidades não é acrescentada silenciosamente. A escolha visual cinza e o bloqueio concorrente já estão entregues na 3.5; não reimplementar.

### 8.3 — Salas duplicadas e consistência dos vínculos

Concluir o saneamento solicitado com base na planilha e nos vínculos existentes.

- Fechar mapa antiga→canônica por ID conforme a planilha.
- Simular união de calendários e resolver colisões antes de remapear vínculos.
- Ensaiar snapshot, remapeamento, idempotência e compensação seletiva no teste; revalidar classificação e rótulos.

**Limite:** Planejamento funcional apenas: nenhuma alteração de dados foi executada. A quantidade de duplicidades e vínculos ainda precisa ser medida.

### 8.4 — Solicitação de salas por alunos e usuários externos

Entregar o fluxo original de reservas para solicitantes externos ao cadastro administrativo atual.

- Definir identificação/cadastro, propriedade do pedido e regras de aprovação.
- Criar solicitação separada da Reserva, com estados e acompanhamento.
- Aprovar com bloqueio/revalidação D21 e vínculo único, depois do saneamento de salas E8-03.

**Limite:** Trata de reserva de salas. Não inclui o processo completo de Aproveitamento de Estudos do documento Adicional.

### 8.5 — Comunicações externas da Conexão LES

Concluir a revisão do fluxo de comunicação externa já solicitado.

- Revisar cadastro dos publicadores, destinatários e permissões.
- Conferir os endereços usados nas comunicações para o ambiente correto.
- Validar o envio e o acesso no fluxo externo existente.

**Limite:**

### 8.6 — Histórico e relatórios de agenda

Concluir os aprimoramentos da consulta das alterações da agenda.

- Definir campos, filtros e informações de saída.
- Validar as consultas e a extração do histórico, aproveitando o log e a exportação existentes.

**Limite:**

### 8.7 — Importação em lote em outros cadastros

Fechar quais importações em lote fazem parte do pedido inicial e o resultado de cada uma.

- Definir cadastros, colunas, formatos e regras de duplicidade e validação.
- Concluir o lote funcional delimitado no acordo inicial; não assumir importação universal para todas as telas.

**Limite:** A quantidade de cadastros e os formatos não estão definidos. Os 3 pontos são uma reserva preliminar, a recalibrar quando o lote for fechado.

### 8.8 — Estudos de Aproveitamento de Disciplinas e NotebookLM

Encerrar os estudos mencionados no relatório original, com um resultado registrado.

- Levantar o fluxo acadêmico, os documentos e a viabilidade do módulo originalmente mencionado.
- Avaliar o uso do NotebookLM e registrar a conclusão e os limites da solução.

**Limite:** Inclui estudo e detalhamento. O desenvolvimento completo de Aproveitamento de Estudos descrito no documento Adicional permanece Aditivo e não entra nesses 2 pontos.
