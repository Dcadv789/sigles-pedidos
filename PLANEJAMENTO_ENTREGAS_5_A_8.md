# SIGLES — Planejamento funcional das entregas 5 a 8

**Data:** 16/10/2026. **Situação:** proposta de divisão funcional; nenhuma implementação atribuída às novas entregas.

Consideramos **Pedido inicial** como o escopo pago, conforme orientação do usuário. A classificação comercial do quadro é a base. Incluímos as partes pendentes dos pedidos parcialmente atendidos e excluímos todas as partes classificadas como **Aditivo**, inclusive os 48 pedidos da origem **Adicional**.

A divisão abaixo usa **100 pontos de esforço relativo preliminar**. Os percentuais são a alocação solicitada, não quantidade de pedidos, horas ou duração comprovada. As demandas ainda em definição precisam de fechamento para verificar se o volume real cabe nessa distribuição.

| Entrega | Participação no trabalho restante | Tema |
|---|---|---|
| 5 | 15% | Usabilidade, cadastros e ajustes de acesso |
| 6 | 15% | Fornecedores, compras e ordens de serviço |
| 7 | 20% | Cronogramas, disciplinas e relatórios acadêmicos |
| 8 | 50% | Agenda, reservas externas e integrações |

Os percentuais se referem somente ao trabalho restante deste plano, sem incluir o esforço das entregas 1 a 4. As entregas seguem teste/homologação antes de produção. Não há calendário ou desenho de código nesta etapa.

## Entrega 5 — 15%

**Usabilidade, cadastros e ajustes de acesso.** Fechar os ajustes menores das telas existentes e as definições básicas de cadastro e acesso.

### 5.1. Dashboard e informações iniciais — 4 pontos

**Tipo:** Usabilidade e validação. **Peso:** Leve.

Completar atalhos e apresentação das informações do Dashboard.

- Inserir links diretos para LES, MarteWeb e Júpiter Web e confirmar a aplicação da imagem de fundo.
- Conferir a abrangência das OS do administrador e os perfis de bolsistas e colaboradores nos avisos de férias e contratos.

**Rastreio:** DB03.1, DB07.1, DB08.1, DB08.2, DB08.3, DB09.1; WI-05:3, WI-05:4, WI-06:2.

### 5.2. Usuários, contatos, férias e prazo de contratos — 5 pontos

**Tipo:** Correção e complemento de cadastro. **Peso:** Leve a médio.

Resolver a ordenação e fechar os refinamentos do cadastro e das informações já existentes.

- Validar e corrigir a desconfiguração ao ordenar usuários pelo nome.
- Detalhar e concluir os ajustes ordinários de contatos, dados de colaboradores e férias.
- Conferir a configuração de 45 dias no perfil de estagiários.

**Limite:** O envio automático de avisos é Aditivo e não integra esta entrega. Os ajustes ainda descritos genericamente precisam ser delimitados; não representam campos ou rotinas ilimitados.

**Rastreio:** US02, US05.1; VS-03:2, VS-04:2, VS-05:1, WI-08:2, WI-09:2.

### 5.3. Navegação, identificação das salas e dados do solicitante — 4 pontos

**Tipo:** Usabilidade e regra de formulário. **Peso:** Leve.

Reunir pequenos ajustes de apresentação e de preenchimento.

- Mover Períodos para o menu Compras.
- Apresentar o nome abreviado da sala na agenda.
- Exibir nome e e-mail em todos os tipos de reserva e exigir os campos somente em Grupo de extensão.

**Rastreio:** CA04, CA06, AG06, AG06.1; WI-17:2, WI-19:1.

### 5.4. Perfis e permissões existentes — 2 pontos

**Tipo:** Definição e ajuste de acesso. **Peso:** Médio.

Fechar a lista de ajustes de acesso nos perfis atuais e adequar o comportamento acordado.

- Identificar as ações permitidas por perfil e módulo e resolver os desvios do fluxo existente.

**Limite:** Abrange a revisão dos perfis atuais. O acesso novo de alunos e externos a reservas fica na entrega 8; não há substituição geral do controle de permissões.

**Rastreio:** OR02; VS-06:1.

## Entrega 6 — 15%

**Fornecedores, compras e ordens de serviço.** Concluir as pendências do fluxo administrativo, sem refazer os recursos entregues.

### 6.1. Fornecedores e ligação com compras — 5 pontos

**Tipo:** Correção e complemento funcional. **Peso:** Médio.

Concluir o cadastro de fornecedores e a integração administrativa pretendida.

- Acrescentar a descrição dos serviços no cadastro, edição e listagem.
- Reproduzir e corrigir os dados de fornecedor que não eram gravados.
- Definir e concluir a ligação ordinária com o fluxo de compras, sem duplicar os dois ajustes anteriores.

**Rastreio:** OR05; V1-04:1, V1-05:1, VS-11:1.

### 6.2. Períodos e apresentação das solicitações de compras — 4 pontos

**Tipo:** Correção, usabilidade e aceite. **Peso:** Leve a médio.

Fechar os pontos que restaram da operação de períodos e compras.

- Validar a ativação de período no cenário relatado e corrigir o problema se reproduzido.
- Exibir a data da solicitação nas listagens de Minhas solicitações e do Painel.
- Confirmar a equivalência entre Arquivados e a consulta de períodos encerrados; definir a aba Compras e os complementos da rotina administrativa.

**Limite:** Não reabre o trabalho de estágios, edição, encerramento e histórico já entregue na entrega 1.

**Rastreio:** CO01.3, CO06; V1-03:1, V1-07:2, VS-09:2, WI-20:2.

### 6.3. Complementos das ordens de serviço — 5 pontos

**Tipo:** Correção e regra administrativa. **Peso:** Médio.

Concluir o comportamento de responsáveis, seguidores, formatos e listagem.

- Validar a persistência dos seguidores e corrigir o caso que repunha nomes fixos.
- Fechar a regra do responsável inicial e da independência entre categoria e subcategoria.
- Apresentar os responsáveis por categoria em Configurações e ordenar inicialmente as OS da mais recente para a mais antiga.
- Conferir os formatos de anexos necessários e fechar com Milton a lista dos relatórios e ajustes restantes.

**Limite:** A relação de formatos e os ajustes com Milton precisam ser fechados. Não se presume um visualizador para qualquer formato nem uma lista ilimitada de novas funções.

**Rastreio:** OS01.1, OS02, OS03.1, OS06.1, OS07, OS08, CA07.1; VS-10:2, WI-10:2, WI-10:3, WI-12:2.

### 6.4. Separação de materiais e alcance do Almoxarifado — 1 pontos

**Tipo:** Definição de escopo funcional. **Peso:** Definição.

Encerrar a interpretação de Compras/Almoxarifado e da eventual hierarquia de materiais.

- Confirmar se o campo Tipo já atende ao pedido de subcategoria.
- Definir o fluxo independente de Almoxarifado pretendido e seu alcance no acordo inicial.

**Limite:** O escopo conhecido aqui é a definição. Não foi incluído, dentro de 1 ponto, o desenvolvimento de um sistema completo de estoque ainda sem regras. Se ele fizer parte do pagamento, a dimensão do plano precisa ser recalibrada, sem retirar esse compromisso.

**Rastreio:** CA02.1, OR04.1; VS-08:2, WI-16:2.

## Entrega 7 — 20%

**Cronogramas, disciplinas e relatórios acadêmicos.** Completar os dados acadêmicos, as exportações e as consolidações que ainda faltam.

### 7.1. Turmas, dados e seleções do cronograma — 8 pontos

**Tipo:** Correção e complemento acadêmico. **Peso:** Médio a pesado.

Resolver os casos de turma e completar a consulta e a exportação do cronograma.

- Validar a criação que triplica turmas e a alteração de carga entre dias; fechar a regra dos créditos.
- Preencher carga, tipo e créditos ao escolher a disciplina e conferir a ordenação por horário.
- Resolver o cenário do Docente Sênior e a seleção de docentes inativos.
- Filtrar salas elegíveis e exportar todos os cursos vinculados à disciplina.

**Limite:** Cópia, datas, criação unificada e modelo de arquivo já atribuídos à entrega 4 não entram novamente. Se algum complemento for concluído na entrega 4, ele sai da entrega 7.

**Rastreio:** ER02, ER03, ER03.1, ER06, CR01, CR02, CR03; V1-09:1, V1-10:1, WI-02:1, WI-02:2, WI-04:1, WI-13:2, WI-13:3, WI-13:4.

### 7.2. Complementos de importação acadêmica — 4 pontos

**Tipo:** Complemento funcional e definição de formato. **Peso:** Médio.

Cobrir as partes de importação que não estão implementadas na entrega 4.

- Definir e tratar os erros de conteúdo por linha além do fluxo básico de importação.
- Permitir graduação e pós-graduação no mesmo arquivo quando essa for a regra acordada.
- Confirmar a exigência de XLSX além de CSV e delimitar o formato aceito.

**Limite:** O teste de aceite do arquivo original para a importação da PR continua na entrega 4. VS-13:2 contém esse teste e o tratamento de erros; somente o complemento ainda ausente entra aqui.

**Rastreio:** CR05.1, OR07.1; VS-13:2, VS-13:3.

### 7.3. Disciplinas e exportações — 3 pontos

**Tipo:** Complemento de listagem e relatório. **Peso:** Médio.

Completar as colunas e exportações das telas de disciplinas.

- Mostrar o docente responsável na listagem principal e disponibilizar sua exportação Excel.
- Incluir Crédito na exportação do relatório Disciplinas docente.
- Definir a finalidade e os campos do pedido genérico Relatório de disciplinas, reutilizando as consultas quando forem o mesmo resultado.

**Limite:** A coluna de responsável também aparece no novo documento Adicional, mas já consta do pedido inicial. É um único desenvolvimento nesta entrega, sem somar uma segunda cobrança pelo mesmo resultado. O editor de planos de ensino não está incluído.

**Rastreio:** DI02, DI03, DI04.1, DI05; WI-14:2, WI-14:3.

### 7.4. Carga horária anual e por departamento — 5 pontos

**Tipo:** Consolidação e relatório. **Peso:** Pesado.

Consolidar a carga horária docente nos recortes solicitados.

- Somar primeiro e segundo semestre e pós-graduação, apresentando o total anual por docente.
- Consolidar por departamento, com filtros e exportação.
- Fechar a regra para turmas compartilhadas e evitar dupla contagem.

**Rastreio:** DD01, OR12.1; VS-17:2, WI-15:2.

## Entrega 8 — 50%

**Agenda, reservas externas e integrações.** Concentrar as regras que cruzam agenda, usuários, dados e comunicações externas, além dos estudos originalmente previstos.

### 8.1. Edição e recorrência da agenda — 12 pontos

**Tipo:** Correção de regras de calendário. **Peso:** Pesado.

Estabilizar a edição da série e de uma ocorrência, preservando salas e demais reservas.

- Corrigir a edição que perde a sala e o conflito indevido com a própria reserva.
- Validar a última data das recorrências e a alteração da série.
- Excluir ou trocar a sala de uma única ocorrência sem modificar indevidamente as demais.

**Limite:** Cobre a correção e o fechamento dos comportamentos já solicitados. Um mecanismo novo de recorrência além desses cenários não é presumido.

**Rastreio:** ER04, ER05, AG01, AG03, AG03.1; WI-03:1, WI-03:2, WI-18:3.

### 8.2. Disponibilidade e bloqueios manuais — 6 pontos

**Tipo:** Complemento do fluxo de reservas. **Peso:** Pesado.

Concluir a escolha de sala a partir da disponibilidade e confirmar o bloqueio manual.

- Selecionar uma sala disponível e retornar ao evento com ela preenchida.
- Confirmar se a consulta deve ocultar a lista de indisponíveis.
- Conferir a anotação FEITO do bloqueio manual e completar a solução ordinária prevista, se ainda faltar.

**Limite:** Bloqueio automático de feriados é Aditivo e fica fora. A política de um novo módulo de indisponibilidades não é acrescentada silenciosamente.

**Rastreio:** AG02.1, AG02.2, AG04; WI-18:2, WI-22:2.

### 8.3. Salas duplicadas e consistência dos vínculos — 6 pontos

**Tipo:** Saneamento de dados. **Peso:** Pesado.

Concluir o saneamento solicitado com base na planilha e nos vínculos existentes.

- Identificar os cadastros de sala que permanecem e quais são duplicados.
- Conferir os vínculos de reservas, turmas e histórico antes de consolidar os registros.
- Validar o resultado e a preservação das informações relacionadas.

**Limite:** Planejamento funcional apenas: nenhuma alteração de dados foi executada. A quantidade de duplicidades e vínculos ainda precisa ser medida.

**Rastreio:** CA05; WI-17:1.

### 8.4. Solicitação de salas por alunos e usuários externos — 12 pontos

**Tipo:** Fluxo novo previsto no pedido inicial. **Peso:** Pesado.

Entregar o fluxo original de reservas para solicitantes externos ao cadastro administrativo atual.

- Disponibilizar solicitação e acompanhamento pelo aluno.
- Definir e aplicar identificação por número USP, acesso externo e permissões próprias.
- Fechar quem aprova e em quais situações, com o acompanhamento da solicitação.

**Limite:** Trata de reserva de salas. Não inclui o processo completo de Aproveitamento de Estudos do documento Adicional.

**Rastreio:** OR14, OR15, OR16, OR17; VS-19:1, VS-19:2.

### 8.5. Comunicações externas da Conexão LES — 6 pontos

**Tipo:** Revisão de integração e acesso. **Peso:** Pesado.

Concluir a revisão do fluxo de comunicação externa já solicitado.

- Revisar cadastro dos publicadores, destinatários e permissões.
- Conferir os endereços usados nas comunicações para o ambiente correto.
- Validar o envio e o acesso no fluxo externo existente.

**Rastreio:** OR06; VS-12:1.

### 8.6. Histórico e relatórios de agenda — 3 pontos

**Tipo:** Consulta e relatório. **Peso:** Médio.

Concluir os aprimoramentos da consulta das alterações da agenda.

- Definir campos, filtros e informações de saída.
- Validar as consultas e a extração do histórico, aproveitando o log e a exportação existentes.

**Rastreio:** OR13; VS-18:2.

### 8.7. Importação em lote em outros cadastros — 3 pontos

**Tipo:** Definição e complemento de importação. **Peso:** Médio a pesado.

Fechar quais importações em lote fazem parte do pedido inicial e o resultado de cada uma.

- Definir cadastros, colunas, formatos e regras de duplicidade e validação.
- Concluir o lote funcional delimitado no acordo inicial; não assumir importação universal para todas as telas.

**Limite:** A quantidade de cadastros e os formatos não estão definidos. Os 3 pontos são uma reserva preliminar, a recalibrar quando o lote for fechado.

**Rastreio:** OR08; VS-14:1.

### 8.8. Estudos de Aproveitamento de Disciplinas e NotebookLM — 2 pontos

**Tipo:** Estudo funcional e de viabilidade. **Peso:** Definição.

Encerrar os estudos mencionados no relatório original, com um resultado registrado.

- Levantar o fluxo acadêmico, os documentos e a viabilidade do módulo originalmente mencionado.
- Avaliar o uso do NotebookLM e registrar a conclusão e os limites da solução.

**Limite:** Inclui estudo e detalhamento. O desenvolvimento completo de Aproveitamento de Estudos descrito no documento Adicional permanece Aditivo e não entra nesses 2 pontos.

**Rastreio:** OR10, OR11; VS-16:1, VS-16:2.

## O que permanece fora das entregas 5 a 8

- Tudo que já está atribuído às entregas 1 a 4 ou era preexistente. A revisão, integração, homologação e correção do que já foi combinado na entrega 4 continuam nela.
- Teste do arquivo original de importação: ER01.2 e WI-01:2 continuam na entrega 4. VS-13:2 é misto: o aceite básico fica na 4; o complemento de tratamento de erros ainda ausente vai para a 7.2.
- Gestão de comissões, feriados automáticos e novo envio automático de avisos de contratos, já classificados como Aditivo.
- Todos os 48 pedidos da origem Adicional, incluindo editor de planos, Aproveitamento de Estudos completo, atas e viagens didáticas. A coluna de responsável, já pedida inicialmente, é coberta uma única vez em 7.3.
- Uma funcionalidade que já existe não será reconstruída apenas para receber um número de entrega. O item de validação será encerrado por confirmação ou correção do cenário, conforme o resultado.

## Como garantir a cobertura sem inflar o trabalho

O cruzamento rastreou **53 partes abertas de Pedido inicial** no quadro: **51** ligadas aos grupos acima, uma validação mantida na entrega 4 e um resumo geral coberto pelo conjunto. Também foram cobertas **58 referências pendentes detalhadas** do levantamento anterior, para recuperar pontos que estavam agrupados ou pouco visíveis no quadro. Essas referências se sobrepõem: não representam novas cobranças nem funcionalidades independentes.

Os pedidos amplos de contatos, férias, permissões, relatórios, Almoxarifado e importação em lote continuam identificados. Quando o pedido original prevê estudar ou avaliar, a saída prevista é esse estudo; não se promete automaticamente um módulo completo. Se a definição comprovar uma implementação maior já incluída no pagamento, ela deve permanecer no escopo pago e a divisão de esforço precisa ser reavaliada. Assim, 100% dos pedidos conhecidos ficam rastreados, mas ainda não é possível garantir 100% do volume real de construção.

## Conferência item a item

A numeração XX:2 significa a segunda parte do pedido no quadro. O status atual não foi alterado para entregue.

### Entrega 5

**5.1 — Dashboard e informações iniciais**

- WI-05:3: Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web. (Pendente).
- WI-05:4: Confirmar se a imagem deve ser plano de fundo ou imagem na página. (Definir).
- WI-06:2: Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental. (Definir).
- DB03.1: Confirmar se “todas as OS” significa todos os departamentos ou somente o departamento e seus descendentes.
- DB07.1: Confirmar que todos os perfis pretendidos como bolsistas/colaboradores entram nessa lista.
- DB08.1: Link direto para o site do LES.
- DB08.2: Link direto para MarteWeb.
- DB08.3: Link direto para Júpiter Web.
- DB09.1: Aplicar a imagem como plano de fundo, se essa for a intenção literal do pedido.

**5.2 — Usuários, contatos, férias e prazo de contratos**

- VS-03:2: Detalhar campos, busca e exportações desejados. (Definir).
- VS-04:2: Definir outras mudanças além do cadastro e dos avisos existentes. (Definir).
- VS-05:1: Especificar o que falta nas informações de usuários e colaboradores. (Definir).
- WI-08:2: Reproduzir a desconfiguração relatada ao ordenar nomes. (Validar).
- WI-09:2: Conferir a configuração de 45 dias para estagiários. (Validar).
- US02: Ordenação alfabética sem desconfigurar a tela.
- US05.1: Aplicar especificamente 45 dias ao perfil de estagiários.

**5.3 — Navegação, identificação das salas e dados do solicitante**

- WI-17:2: Usar o nome abreviado na apresentação da sala na agenda. (Pendente).
- WI-19:1: Exibir os campos em todos os tipos e exigir preenchimento somente em Grupo de extensão. (Pendente).
- CA04: Mover Períodos para dentro do menu Compras.
- CA06: Na agenda, identificar a sala somente pelo nome abreviado.
- AG06: Exibir nome e e-mail do discente/solicitante em todos os tipos de reserva.
- AG06.1: Exigir nome e e-mail somente no tipo Grupo de extensão.

**5.4 — Perfis e permissões existentes**

- VS-06:1: Definir as mudanças pretendidas por perfil, módulo e ação. (Definir).
- OR02: Avaliar e evoluir perfis, permissões e regras de acesso.

### Entrega 6

**6.1 — Fornecedores e ligação com compras**

- V1-04:1: Adicionar o campo ao cadastro, à edição e à listagem de fornecedores. (Pendente).
- V1-05:1: Reproduzir com os campos e dados que não eram gravados. (Validar).
- VS-11:1: Definir a integração pretendida e tratar os pedidos V1-04 e V1-05. (Definir).
- OR05: Aprimorar fornecedores e a integração com compras.

**6.2 — Períodos e apresentação das solicitações de compras**

- V1-03:1: Testar a ativação com as datas e condições do caso original. (Validar).
- V1-07:2: Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período. (Pendente).
- VS-09:2: Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa. (Pendente).
- WI-20:2: Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras. (Definir).
- CO01.3: Criar uma aba ou campo específico chamado Arquivados.
- CO06: Criar a “aba Compras”, caso seja diferente do menu e do painel já existentes.

**6.3 — Complementos das ordens de serviço**

- VS-10:2: Validar persistência dos seguidores e definir os relatórios gerenciais restantes. (Validar).
- WI-10:2: Verificar se os seguidores escolhidos permanecem após salvar e reabrir. (Validar).
- WI-10:3: Confirmar a regra do responsável inicial solicitada pelo cliente. (Definir).
- WI-12:2: Definir se a subcategoria terá responsável próprio; hoje herda da categoria. (Definir).
- OS01.1: Preencher o responsável com o próprio solicitante, como escrito no documento.
- OS02: Preservar os seguidores selecionados ao salvar e reabrir a OS.
- OS03.1: Garantir aceitação de qualquer formato de documento, sem uma lista definida.
- OS06.1: Ter responsáveis independentes na categoria e na subcategoria, se essa for a intenção do pedido.
- OS07: Abrir a listagem ordenada pela data de criação, da mais recente para a mais antiga.
- OS08: Levantar com Milton outros ajustes necessários.
- CA07.1: Apresentar os responsáveis de todas as categorias juntos na tela Configurações, um abaixo do outro.

**6.4 — Separação de materiais e alcance do Almoxarifado**

- VS-08:2: Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque. (Definir).
- WI-16:2: Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente. (Definir).
- CA02.1: Criar uma hierarquia adicional de subcategorias, caso seja isso que o cliente pretende.
- OR04.1: Criar controle próprio de Almoxarifado, com fluxos independentes, caso pretendido.

### Entrega 7

**7.1 — Turmas, dados e seleções do cronograma**

- V1-09:1: Confirmar a ordenação por horário na tela de Cronogramas do vídeo, sem confundir com Quadro de aulas. (Validar).
- V1-10:1: Preencher carga horária, tipo e créditos ao escolher a disciplina na criação da turma. (Pendente).
- WI-02:1: Reproduzir a criação que triplicava turmas e a alteração de carga entre dias. (Validar).
- WI-02:2: Definir se o crédito deve pertencer à disciplina, turma ou dia. (Definir).
- WI-04:1: Conferir o cadastro e os filtros com o docente do caso original. (Validar).
- WI-13:2: Exportar todos os cursos da disciplina: o servidor ainda retorna só o curso da turma. (Pendente).
- WI-13:3: Aplicar no servidor o filtro das salas elegíveis. (Pendente).
- WI-13:4: Confirmar a seleção de docentes inativos no caso relatado. (Validar).
- ER02: Impedir que a criação de uma turma triplique indevidamente os cadastros e permita apagar somente um.
- ER03: Alterar a carga horária de um dia sem modificar indevidamente o outro dia da turma.
- ER03.1: Alterar créditos de um dia sem alterar o outro dia.
- ER06: Mostrar Docente Sênior na seleção de docentes do cronograma.
- CR01: Mostrar todos os cursos vinculados à disciplina no arquivo exportado.
- CR02: Ocultar docentes inativos ao incluir outro docente na turma.
- CR03: Mostrar apenas salas elegíveis para reserva no cadastro e no filtro do cronograma.

**7.2 — Complementos de importação acadêmica**

- VS-13:2: Testar o arquivo original do cliente e o tratamento dos erros por linha. (Validar).
- VS-13:3: Confirmar necessidade de XLSX; o formato implementado é CSV. (Definir).
- CR05.1: Na importação de um único CSV, escolher Ambas e preservar os tipos de cada disciplina.
- OR07.1: Importar diretamente arquivos Excel, caso seja exigido XLSX além de CSV.

**7.3 — Disciplinas e exportações**

- WI-14:2: Exportar a listagem principal e mostrar nela o docente responsável. (Pendente).
- WI-14:3: Incluir crédito na exportação do relatório Disciplinas docente. (Pendente).
- DI02: Exportar a listagem principal de Disciplinas para Excel.
- DI03: Mostrar o docente responsável na listagem principal de Disciplinas.
- DI04.1: Incluir também Crédito na exportação desse relatório.
- DI05: Criar “Relatório de disciplinas”, sem definição de campos e finalidade.

**7.4 — Carga horária anual e por departamento**

- VS-17:2: Consolidar a carga por departamento com filtros e exportação próprios. (Pendente).
- WI-15:2: Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente. (Pendente).
- DD01: Consolidar por docente primeiro semestre, segundo semestre, pós-graduação e carga horária total anual.
- OR12.1: Consolidar a carga horária por departamento, com filtros e exportação próprios.

### Entrega 8

**8.1 — Edição e recorrência da agenda**

- WI-03:1: Testar alteração da série e de uma ocorrência, preservação da sala e conflitos. (Validar).
- WI-03:2: Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação. (Pendente).
- WI-18:3: Validar última data, exclusão e troca de sala de uma ocorrência. (Validar).
- ER04: Editar um evento sem perder a sala e sem conflito indevido com a própria reserva.
- ER05: Editar eventos recorrentes corretamente.
- AG01: A recorrência incluir e apresentar corretamente a última data prevista.
- AG03: Excluir apenas um dia de uma reserva recorrente.
- AG03.1: Trocar a sala somente em um dia de uma reserva recorrente, preservando os demais.

**8.2 — Disponibilidade e bloqueios manuais**

- WI-18:2: Selecionar a sala na consulta e retornar ao evento com ela preenchida. (Pendente).
- WI-22:2: Confirmar o bloqueio manual indicado como FEITO e o que foi efetivamente realizado. (Validar).
- AG02.1: Selecionar uma sala na lista de disponíveis e retornar ao cadastro do evento com a sala preenchida.
- AG02.2: Exibir somente as disponíveis nessa função, sem a lista de indisponíveis.
- AG04: Função própria para bloquear manualmente um dia.

**8.3 — Salas duplicadas e consistência dos vínculos**

- WI-17:1: Conferir a planilha e remover duplicidades com validação dos vínculos. (Validar).
- CA05: Remover salas duplicadas conforme a planilha do cliente.

**8.4 — Solicitação de salas por alunos e usuários externos**

- VS-19:1: Solicitação pelo aluno, validação do número USP, acompanhamento e acesso externo. (Pendente).
- VS-19:2: Definir responsáveis e regras de aprovação de reservas. (Definir).
- OR14: Solicitação eletrônica de sala por aluno, com acompanhamento.
- OR15: Aprovação de solicitações de reserva de salas, quando aplicável.
- OR16: Identificação/validação de aluno por número USP para solicitar sala.
- OR17: Acesso de usuários externos para solicitação de reservas, com autenticação e permissões específicas.

**8.5 — Comunicações externas da Conexão LES**

- VS-12:1: Revisar cadastros, destinatários, permissões e endereços de teste/produção da Conexão LES. (Pendente).
- OR06: Revisar cadastro, destinatários, permissões e comunicações externas da Conexão LES.

**8.6 — Histórico e relatórios de agenda**

- VS-18:2: Definir novos campos e filtros; validar os problemas da agenda. (Definir).
- OR13: Melhorar relatórios e consultas do histórico de alterações de agenda.

**8.7 — Importação em lote em outros cadastros**

- VS-14:1: Escolher cadastros, colunas, formatos, validações e regras de duplicidade. (Definir).
- OR08: Importação em lote em outras funcionalidades.

**8.8 — Estudos de Aproveitamento de Disciplinas e NotebookLM**

- VS-16:1: Levantar o fluxo acadêmico e detalhar o módulo. (Pendente).
- VS-16:2: Avaliar o uso do NotebookLM e registrar o resultado. (Pendente).
- OR10: Estudar e detalhar o módulo de Aproveitamento de Disciplinas.
- OR11: Avaliar eventual integração ou utilização de Notebook LM.

