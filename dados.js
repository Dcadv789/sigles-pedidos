/* Conferência em 15/10/2026. Status compartilhados, sem dependência de localStorage. */
window.SIGLES_BOARD = {
  "atualizado": "15/10/2026",
  "itens": [
    {
      "id": "V1-01",
      "fonte": "Vídeo",
      "tela": "Cadastros → Materiais",
      "titulo": "Apagar / inativar material",
      "pedido": "Na listagem não dá para apagar. Colocar a função.",
      "status": "Entregue",
      "resumo": "Entrega 1: exclusão definitiva de material inativo, com proteção dos vínculos.",
      "partes": [
        {
          "texto": "Excluir material inativo sem pedidos vinculados; ativar e inativar continuam disponíveis.",
          "entrega": 1,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "V1-02",
      "fonte": "Vídeo",
      "tela": "Cadastros → Períodos",
      "titulo": "Apagar / inativar período",
      "pedido": "Não tem opção de apagar. Colocar a função.",
      "status": "Entregue",
      "resumo": "Entrega 1: excluir período inativo sem solicitações vinculadas.",
      "partes": [
        {
          "texto": "Exclusão definitiva com validação de vínculos e manutenção da ativação/inativação.",
          "entrega": 1,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "V1-03",
      "fonte": "Vídeo",
      "tela": "Cadastros → Períodos",
      "titulo": "Erro ao ativar período",
      "pedido": "Ao ativar um período dá erro. Arrumar.",
      "status": "Validar",
      "resumo": "A ativação existe; falta reproduzir o erro do vídeo para confirmar sua resolução.",
      "partes": [
        {
          "texto": "Testar a ativação com as datas e condições do caso original.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "V1-04",
      "fonte": "Vídeo",
      "tela": "Cadastros → Fornecedores",
      "titulo": "Coluna de descrição dos serviços",
      "pedido": "Nova coluna para descrever os serviços do fornecedor.",
      "status": "Pendente",
      "resumo": "Não foi localizada a nova descrição de serviços no fornecedor.",
      "partes": [
        {
          "texto": "Adicionar o campo ao cadastro, à edição e à listagem de fornecedores.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "V1-05",
      "fonte": "Vídeo",
      "tela": "Cadastros → Fornecedores",
      "titulo": "Editar fornecedor não grava",
      "pedido": "Ao editar e salvar, as informações não são salvas.",
      "status": "Validar",
      "resumo": "A edição já existe, mas não há correção específica comprovada nas entregas.",
      "partes": [
        {
          "texto": "Reproduzir com os campos e dados que não eram gravados.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "V1-06",
      "fonte": "Vídeo",
      "tela": "Compras → Solicitações",
      "titulo": "Solicitação não finaliza",
      "pedido": "Toda solicitação fica em andamento. Precisa finalizar.",
      "status": "Entregue",
      "resumo": "Entrega 1: o painel permite realizar e cancelar solicitações e controlar os estágios.",
      "partes": [
        {
          "texto": "Finalizar pelo painel e impedir alterações nos estágios encerrados.",
          "entrega": 1,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "V1-07",
      "fonte": "Vídeo",
      "tela": "Compras → Solicitações / Painel",
      "titulo": "Data em toda solicitação",
      "pedido": "A solicitação precisa ter data visível em todos os controles.",
      "status": "Parcial",
      "resumo": "Entrega 1 ampliou o histórico; a data ainda não aparece em todas as listagens.",
      "partes": [
        {
          "texto": "Histórico de criação e alterações da solicitação.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "V1-08",
      "fonte": "Vídeo",
      "tela": "Compras → pedido na solicitação",
      "titulo": "Alterar pedido depois de criado",
      "pedido": "Feito o pedido, não dá para alterá-lo. Deve ser possível.",
      "status": "Entregue",
      "resumo": "Entrega 1: editar itens e reabrir solicitações conforme o estágio.",
      "partes": [
        {
          "texto": "Incluir, alterar e retirar pedidos quando permitido; preservar o recebimento da secretaria.",
          "entrega": 1,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "V1-09",
      "fonte": "Vídeo",
      "tela": "Aulas e horários → Cronogramas",
      "titulo": "Ordenar por horário",
      "pedido": "A visualização não tem ordem clara. Filtro/ordem por horário.",
      "status": "Validar",
      "resumo": "O Quadro de aulas foi ordenado na entrega 2; este pedido cita a grade de Cronogramas.",
      "partes": [
        {
          "texto": "Confirmar a ordenação por horário na tela de Cronogramas do vídeo, sem confundir com Quadro de aulas.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "V1-10",
      "fonte": "Vídeo",
      "tela": "Cronogramas (nova turma)",
      "titulo": "Ao escolher a matéria, puxar carga, tipo e créditos",
      "pedido": "O sistema deve preencher sozinho esses campos da turma.",
      "status": "Pendente",
      "resumo": "Os dados da disciplina existem; não foi comprovado o preenchimento automático da nova turma.",
      "partes": [
        {
          "texto": "Preencher carga horária, tipo e créditos ao escolher a disciplina na criação da turma.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "V1-11",
      "fonte": "Vídeo",
      "tela": "Aulas e horários → Disciplinas",
      "titulo": "Cadastro com carga, tipo de turma e créditos",
      "pedido": "A matéria precisa ter esses dados para a turma puxar.",
      "status": "Entregue",
      "resumo": "Entrega 2: tipo, carga horária e crédito no cadastro da disciplina.",
      "partes": [
        {
          "texto": "Campos e identificação do tipo de disciplina, graduação ou pós-graduação.",
          "entrega": 2,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "VS-01",
      "fonte": "Relatório de visita",
      "tela": "Escopo geral da visita",
      "titulo": "Pacote contratual (bugs, UX, módulos, import/export, relatórios)",
      "pedido": "Texto amplo do contrato. Não é uma tela só.",
      "status": "Parcial",
      "resumo": "O pacote é amplo: há entregas concluídas e funções ainda pendentes.",
      "partes": [
        {
          "texto": "Cadastros, usuários e compras.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Disciplinas, relatórios e login.",
          "entrega": 2,
          "situacao": "Entregue"
        },
        {
          "texto": "Ordens de serviço e aniversariantes.",
          "entrega": 3,
          "situacao": "Homologação"
        },
        {
          "texto": "Evolução de cronogramas.",
          "entrega": 4,
          "situacao": "Na PR"
        },
        {
          "texto": "Concluir os pedidos específicos ainda pendentes; este item não representa uma funcionalidade única.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "VS-02",
      "fonte": "Relatório de visita",
      "tela": "Dashboard (parabéns de aniversário)",
      "titulo": "Parabéns só para o aniversariante",
      "pedido": "O aviso grande aparece para todo mundo. Só o aniversariante deve ver.",
      "status": "Homologação",
      "resumo": "Entrega 3: a janela de parabéns aparece somente ao aniversariante.",
      "partes": [
        {
          "texto": "Demais usuários continuam vendo os aniversariantes na lista do mês.",
          "entrega": 3,
          "situacao": "Homologação"
        }
      ]
    },
    {
      "id": "VS-03",
      "fonte": "Relatório de visita",
      "tela": "Dashboard / Usuários → contatos",
      "titulo": "Telefones e contatos",
      "pedido": "Evoluir telefones e contatos de usuários e colaboradores.",
      "status": "Definir",
      "resumo": "Contatos já existem; falta definir quais melhorias devem ser feitas.",
      "partes": [
        {
          "texto": "Consulta de telefones e contatos no Dashboard.",
          "entrega": null,
          "situacao": "Já existente"
        },
        {
          "texto": "Detalhar campos, busca e exportações desejados.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-04",
      "fonte": "Relatório de visita",
      "tela": "Dashboard / Usuários → férias",
      "titulo": "Férias",
      "pedido": "Melhorar rotina de férias (cadastro, aviso e consulta).",
      "status": "Parcial",
      "resumo": "Entrega 1 ajustou férias e contratos no Dashboard; a evolução ampla precisa de definição.",
      "partes": [
        {
          "texto": "Exibição de férias e contratos com tratamento de datas ausentes.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Definir outras mudanças além do cadastro e dos avisos existentes.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-05",
      "fonte": "Relatório de visita",
      "tela": "Usuários",
      "titulo": "Informações gerais de usuários e colaboradores",
      "pedido": "Avaliar o que o cadastro ainda não cobre.",
      "status": "Definir",
      "resumo": "O cadastro existe; falta uma lista dos dados ou comportamentos adicionais.",
      "partes": [
        {
          "texto": "Especificar o que falta nas informações de usuários e colaboradores.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-06",
      "fonte": "Relatório de visita",
      "tela": "Usuários / Perfis / Módulos",
      "titulo": "Evoluir cadastro, perfis e permissões",
      "pedido": "O módulo é quase só cadastro. Avaliar perfis e regras de acesso.",
      "status": "Definir",
      "resumo": "Perfis e permissões já existem; uma revisão ampla não foi encerrada pelas entregas.",
      "partes": [
        {
          "texto": "Definir as mudanças pretendidas por perfil, módulo e ação.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-07",
      "fonte": "Relatório de visita",
      "tela": "Cadastros → Tags",
      "titulo": "Onde as tags são usadas",
      "pedido": "Ver finalidade atual e se vale expandir.",
      "status": "Já existente",
      "resumo": "Uso de tags mapeado: estão vinculadas aos fornecedores.",
      "partes": [
        {
          "texto": "Levantamento documentado antes da entrega 1; eventual expansão precisa de novo detalhamento.",
          "entrega": null,
          "situacao": "Já existente"
        }
      ]
    },
    {
      "id": "VS-08",
      "fonte": "Relatório de visita",
      "tela": "Compras / Almoxarifado",
      "titulo": "Separar Compras e Almoxarifado",
      "pedido": "Dois módulos, fluxos e controles específicos.",
      "status": "Parcial",
      "resumo": "Entrega 1 separou os tipos de material; controle de estoque ainda não foi entregue.",
      "partes": [
        {
          "texto": "Tipo Compras ou Almoxarifado e filtro dos materiais de compras.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-09",
      "fonte": "Relatório de visita",
      "tela": "Compras",
      "titulo": "Revisar o fluxo de compras",
      "pedido": "Etapas, cadastros e rotina administrativa.",
      "status": "Parcial",
      "resumo": "Entrega 1 revisou solicitações, períodos e painel; ainda há ajustes pontuais de compras pendentes.",
      "partes": [
        {
          "texto": "Envio, reabertura, recebimento, realização/cancelamento, consulta dos períodos encerrados e lista para compras.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "VS-10",
      "fonte": "Relatório de visita",
      "tela": "Ordens de serviço",
      "titulo": "Aprimorar OS",
      "pedido": "Regras, etapas, cadastros e relatórios.",
      "status": "Parcial",
      "resumo": "Entrega 3 atende vários ajustes de OS; o pedido amplo inclui pontos ainda abertos.",
      "partes": [
        {
          "texto": "Responsável, orçamento na criação, anexos, filtros, estágios e histórico.",
          "entrega": 3,
          "situacao": "Homologação"
        },
        {
          "texto": "Validar persistência dos seguidores e definir os relatórios gerenciais restantes.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "VS-11",
      "fonte": "Relatório de visita",
      "tela": "Cadastros → Fornecedores",
      "titulo": "Fornecedores pouco usados",
      "pedido": "Melhorar cadastro e ligar aos fluxos de compras.",
      "status": "Definir",
      "resumo": "O cadastro existe; a integração com compras e sua ampliação ainda precisam de escopo.",
      "partes": [
        {
          "texto": "Definir a integração pretendida e tratar os pedidos V1-04 e V1-05.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-12",
      "fonte": "Relatório de visita",
      "tela": "Conexão LES",
      "titulo": "Comunicações para pessoas de fora da USP",
      "pedido": "Regras de cadastro, destinatários, permissão e envio externo.",
      "status": "Pendente",
      "resumo": "A comunicação externa já existe, mas a revisão desse fluxo ainda não foi concluída.",
      "partes": [
        {
          "texto": "Revisar cadastros, destinatários, permissões e endereços de teste/produção da Conexão LES.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "VS-13",
      "fonte": "Relatório de visita",
      "tela": "Cronogramas → importar Excel",
      "titulo": "Melhorar importação do cronograma",
      "pedido": "Validar planilha, tratar erro, modelo padrão.",
      "status": "Parcial",
      "resumo": "Entrega 4, na PR: importação CSV e modelo. Importação Excel e validação completa não estão comprovadas.",
      "partes": [
        {
          "texto": "Fluxo unificado de Novo cronograma e arquivo modelo CSV.",
          "entrega": 4,
          "situacao": "Na PR"
        },
        {
          "texto": "Testar o arquivo original do cliente e o tratamento dos erros por linha.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Confirmar necessidade de XLSX; o formato implementado é CSV.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-14",
      "fonte": "Relatório de visita",
      "tela": "Outras telas (lote)",
      "titulo": "Importação em lote em outras funcionalidades",
      "pedido": "Planilha com modelo e validação em outras telas.",
      "status": "Definir",
      "resumo": "Não há uma entrega geral de importação em lote nas outras telas.",
      "partes": [
        {
          "texto": "Escolher cadastros, colunas, formatos, validações e regras de duplicidade.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-15",
      "fonte": "Relatório de visita",
      "tela": "Aulas e horários → Cronogramas",
      "titulo": "Reorganizar a página do cronograma",
      "pedido": "Visual, filtros, espaço, fonte, legibilidade.",
      "status": "Na PR",
      "resumo": "Entrega 4: organização visual, filtros e criação unificada de cronogramas.",
      "partes": [
        {
          "texto": "Implementado no PR 9; depende de integração e homologação.",
          "entrega": 4,
          "situacao": "Na PR"
        }
      ]
    },
    {
      "id": "VS-16",
      "fonte": "Relatório de visita",
      "tela": "Aproveitamento de disciplinas (não existe)",
      "titulo": "Novo módulo + Notebook LM",
      "pedido": "Automatizar o que hoje é manual. Escopo depois. Avaliar Notebook LM.",
      "status": "Pendente",
      "resumo": "Aproveitamento de disciplinas e avaliação do NotebookLM ainda não foram concluídos.",
      "partes": [
        {
          "texto": "Levantar o fluxo acadêmico e detalhar o módulo.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Avaliar o uso do NotebookLM e registrar o resultado.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "VS-17",
      "fonte": "Relatório de visita",
      "tela": "Carga horária dos docentes",
      "titulo": "Relatório de carga por departamento",
      "pedido": "Filtros, consolidação, visualização e exportação.",
      "status": "Parcial",
      "resumo": "Entrega 2 melhorou relatórios docentes; falta a consolidação por departamento.",
      "partes": [
        {
          "texto": "Filtros, responsável por semestre e visualização das disciplinas docentes.",
          "entrega": 2,
          "situacao": "Entregue"
        },
        {
          "texto": "Consolidar a carga por departamento com filtros e exportação próprios.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "VS-18",
      "fonte": "Relatório de visita",
      "tela": "Agenda → Log / Relatório",
      "titulo": "Relatórios de alteração de agenda",
      "pedido": "Acompanhar mudanças e extrair informações.",
      "status": "Definir",
      "resumo": "Log e exportação da agenda já existiam; falta especificar a evolução do relatório.",
      "partes": [
        {
          "texto": "Consulta de alterações e exportação existentes antes da entrega 1.",
          "entrega": null,
          "situacao": "Já existente"
        },
        {
          "texto": "Definir novos campos e filtros; validar os problemas da agenda.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "VS-19",
      "fonte": "Relatório de visita",
      "tela": "Agenda → reserva para alunos e externos",
      "titulo": "Solicitar sala no SIGLES (nº USP e pessoas de fora)",
      "pedido": "Formulário, disponibilidade, aprovação, aluno e externo.",
      "status": "Pendente",
      "resumo": "O formulário administrativo atual não atende ao fluxo de alunos e pessoas externas.",
      "partes": [
        {
          "texto": "Solicitação pelo aluno, validação do número USP, acompanhamento e acesso externo.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Definir responsáveis e regras de aprovação de reservas.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-01",
      "fonte": "Word inicial",
      "tela": "Cronogramas",
      "titulo": "Criação e importação do cronograma do 2º semestre de 2026",
      "pedido": "O documento marca erro ao importar ou criar o cronograma, com indicação posterior de FEITO.",
      "status": "Na PR",
      "resumo": "Entrega 4: criar do zero ou importar CSV no mesmo fluxo.",
      "partes": [
        {
          "texto": "Criação com ano/semestre e modelo de importação.",
          "entrega": 4,
          "situacao": "Na PR"
        },
        {
          "texto": "O arquivo que originou o erro ainda precisa de teste de aceite.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "WI-02",
      "fonte": "Word inicial",
      "tela": "Cronogramas → nova turma",
      "titulo": "Duplicação de turmas e alteração compartilhada entre dias",
      "pedido": "A criação triplica o cadastro; alterações de carga/créditos em um dia afetam o outro. Marcado como FEITO no documento.",
      "status": "Validar",
      "resumo": "Duplicação e edição por dia ainda precisam de reprodução; créditos dependem da regra esperada.",
      "partes": [
        {
          "texto": "Reproduzir a criação que triplicava turmas e a alteração de carga entre dias.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Definir se o crédito deve pertencer à disciplina, turma ou dia.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-03",
      "fonte": "Word inicial",
      "tela": "Agenda → eventos recorrentes",
      "titulo": "Alterar eventos recorrentes",
      "pedido": "Alterações em eventos recorrentes continuam sem funcionar; o documento marca como urgente.",
      "status": "Validar",
      "resumo": "Há mecanismos de recorrência anteriores às entregas, mas a correção relatada não foi comprovada.",
      "partes": [
        {
          "texto": "Testar alteração da série e de uma ocorrência, preservação da sala e conflitos.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-04",
      "fonte": "Word inicial",
      "tela": "Usuários / Cronogramas",
      "titulo": "Docente sênior não aparece no cronograma",
      "pedido": "Perfil de docente sênior não é apresentado, apenas docente.",
      "status": "Validar",
      "resumo": "A consulta já inclui Docente Sênior; falta reproduzir a ausência relatada.",
      "partes": [
        {
          "texto": "Conferir o cadastro e os filtros com o docente do caso original.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "WI-05",
      "fonte": "Word inicial",
      "tela": "Dashboard",
      "titulo": "Revisar cartões, atalhos e informações iniciais",
      "pedido": "Trocar cartões, adicionar calendário, férias, contratos e links institucionais.",
      "status": "Parcial",
      "resumo": "Parte do Dashboard já existia e a entrega 1 corrigiu contratos; faltam atalhos específicos.",
      "partes": [
        {
          "texto": "Calendário, retirada de anotações e link Conexão LES.",
          "entrega": null,
          "situacao": "Já existente"
        },
        {
          "texto": "CERT, férias e contratos, com tratamento de datas ausentes.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Confirmar se a imagem deve ser plano de fundo ou imagem na página.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-06",
      "fonte": "Word inicial",
      "tela": "Dashboard → Ordens de serviço",
      "titulo": "Exibir OS conforme perfil e status",
      "pedido": "ADM pode ver todas ou próprias; demais usuários só as próprias; mostrar apenas abertas ou em andamento.",
      "status": "Já existente",
      "resumo": "Filtros de OS por usuário e estágio já existiam antes da entrega 1.",
      "partes": [
        {
          "texto": "Alternância da visão do administrador e OS abertas/em andamento.",
          "entrega": null,
          "situacao": "Já existente"
        },
        {
          "texto": "Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-07",
      "fonte": "Word inicial",
      "tela": "Usuários → contratos e CERT",
      "titulo": "Salvar data da CERT e corrigir aviso de vencimento",
      "pedido": "Data da CERT informa sucesso sem gravar; cartão de contratos deve tratar CERT corretamente.",
      "status": "Entregue",
      "resumo": "Entrega 1: gravação da CERT e consulta dos vencimentos corrigidas.",
      "partes": [
        {
          "texto": "Datas da CERT e separação das informações no Dashboard.",
          "entrega": 1,
          "situacao": "Entregue"
        }
      ]
    },
    {
      "id": "WI-08",
      "fonte": "Word inicial",
      "tela": "Usuários",
      "titulo": "Ordenação, exclusão e comportamento das abas",
      "pedido": "Ordenar alfabeticamente, permitir excluir cadastro e manter a aba aberta após salvar.",
      "status": "Parcial",
      "resumo": "Entrega 1: exclusão definitiva e manutenção da aba; ordenação ainda precisa ser validada.",
      "partes": [
        {
          "texto": "Excluir usuário inativo sem vínculos e manter o formulário/aba após salvar.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Reproduzir a desconfiguração relatada ao ordenar nomes.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "WI-09",
      "fonte": "Word inicial",
      "tela": "Usuários → estagiários",
      "titulo": "Aviso de vencimento de contrato de estagiário",
      "pedido": "Avisar ADM e estagiário com 45 dias de antecedência.",
      "status": "Parcial",
      "resumo": "Entrega 1 permite configurar antecedência; o aviso automático aos dois destinatários falta.",
      "partes": [
        {
          "texto": "Parâmetro de antecedência por perfil.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Conferir a configuração de 45 dias para estagiários.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Enviar automaticamente o aviso ao administrador e ao estagiário.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-10",
      "fonte": "Word inicial",
      "tela": "Ordens de serviço",
      "titulo": "Responsável e seguidores não persistem corretamente",
      "pedido": "Responsável aparece aleatório; seguidores voltam para nomes fixos após reabrir.",
      "status": "Parcial",
      "resumo": "Entrega 3 permite escolher responsável na criação; seguidores precisam de validação.",
      "partes": [
        {
          "texto": "Responsável sugerido pela categoria e possibilidade de troca antes de salvar.",
          "entrega": 3,
          "situacao": "Homologação"
        },
        {
          "texto": "Verificar se os seguidores escolhidos permanecem após salvar e reabrir.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Confirmar a regra do responsável inicial solicitada pelo cliente.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-11",
      "fonte": "Word inicial",
      "tela": "Ordens de serviço → orçamento",
      "titulo": "Anexos e orçamento na criação da OS",
      "pedido": "Aceitar mais tipos de arquivo e anexar orçamento já ao criar a ordem.",
      "status": "Homologação",
      "resumo": "Entrega 3: mais formatos de anexo e orçamento durante a criação da OS.",
      "partes": [
        {
          "texto": "Orçamento com anexo já na criação e lista ampliada de formatos suportados.",
          "entrega": 3,
          "situacao": "Homologação"
        }
      ]
    },
    {
      "id": "WI-12",
      "fonte": "Word inicial",
      "tela": "Ordens de serviço",
      "titulo": "Filtros e responsáveis por categoria",
      "pedido": "Filtrar por solicitante e indicar responsável por categoria/subcategoria.",
      "status": "Parcial",
      "resumo": "Entrega 3: filtro por solicitante e responsável por categoria; subcategoria precisa de definição.",
      "partes": [
        {
          "texto": "Filtro Aberto por e responsável por categoria.",
          "entrega": 3,
          "situacao": "Homologação"
        },
        {
          "texto": "Definir se a subcategoria terá responsável próprio; hoje herda da categoria.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-13",
      "fonte": "Word inicial",
      "tela": "Cronogramas",
      "titulo": "Exportação, filtros e importação entre semestres",
      "pedido": "Exportar cursos, ocultar docentes inativos, filtrar salas e informar início/fim ao importar.",
      "status": "Parcial",
      "resumo": "Entrega 4 atende cópia com datas; exportação de todos os cursos e filtro de salas ainda têm lacunas.",
      "partes": [
        {
          "texto": "Copiar entre semestres, com início/fim e seleção Graduação, Pós-graduação ou Ambas.",
          "entrega": 4,
          "situacao": "Na PR"
        },
        {
          "texto": "Exportar todos os cursos da disciplina: o servidor ainda retorna só o curso da turma.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Aplicar no servidor o filtro das salas elegíveis.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Confirmar a seleção de docentes inativos no caso relatado.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "WI-14",
      "fonte": "Word inicial",
      "tela": "Disciplinas",
      "titulo": "Carga horária, crédito, responsável, exportação e relatórios",
      "pedido": "Completar cadastro e permitir consulta/exportação de disciplinas e docentes.",
      "status": "Parcial",
      "resumo": "Entrega 2 atende cadastro, responsáveis e parte dos relatórios; faltam colunas e exportações.",
      "partes": [
        {
          "texto": "Carga horária, crédito, responsável por ano/semestre, histórico do plano e filtros dos relatórios.",
          "entrega": 2,
          "situacao": "Entregue"
        },
        {
          "texto": "Exportar a listagem principal e mostrar nela o docente responsável.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Incluir crédito na exportação do relatório Disciplinas docente.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-15",
      "fonte": "Word inicial",
      "tela": "Quadro de aula / docentes",
      "titulo": "Ordenar aulas e consolidar carga horária docente",
      "pedido": "Ordenar horários e somar carga dos semestres e da pós-graduação.",
      "status": "Parcial",
      "resumo": "Entrega 2 ordenou o Quadro de aulas; falta a carga horária anual consolidada.",
      "partes": [
        {
          "texto": "Ordenação cronológica dentro de cada dia no Quadro de aulas.",
          "entrega": 2,
          "situacao": "Entregue"
        },
        {
          "texto": "Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-16",
      "fonte": "Word inicial",
      "tela": "Cadastros → materiais e recursos",
      "titulo": "Subcategoria Compras/Almoxarifado e descrição FUSP",
      "pedido": "Criar subcategoria para materiais e nova descrição para recursos de OS.",
      "status": "Entregue",
      "resumo": "Entrega 1: tipo Compras/Almoxarifado e campos adicionais dos recursos de OS.",
      "partes": [
        {
          "texto": "Separação por tipo de material e detalhe/observação no recurso da OS.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-17",
      "fonte": "Word inicial",
      "tela": "Espaços / Salas",
      "titulo": "Remover salas duplicadas e ajustar exibição na agenda",
      "pedido": "Importar arquivo para remover duplicidades; mostrar nome abreviado no cadastro da agenda.",
      "status": "Pendente",
      "resumo": "Não há comprovação de saneamento em produção; a agenda ainda usa a descrição da sala.",
      "partes": [
        {
          "texto": "Conferir a planilha e remover duplicidades com validação dos vínculos.",
          "entrega": null,
          "situacao": "Validar"
        },
        {
          "texto": "Usar o nome abreviado na apresentação da sala na agenda.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-18",
      "fonte": "Word inicial",
      "tela": "Agenda",
      "titulo": "Recorrência, disponibilidade e alteração de uma ocorrência",
      "pedido": "Corrigir data final da recorrência, listar apenas salas disponíveis e permitir alterar/excluir apenas um dia.",
      "status": "Parcial",
      "resumo": "A consulta de disponibilidade já existia; seleção de sala e recorrência ainda têm pendências.",
      "partes": [
        {
          "texto": "Consulta de salas disponíveis por intervalo.",
          "entrega": null,
          "situacao": "Já existente"
        },
        {
          "texto": "Selecionar a sala na consulta e retornar ao evento com ela preenchida.",
          "entrega": null,
          "situacao": "Pendente"
        },
        {
          "texto": "Validar última data, exclusão e troca de sala de uma ocorrência.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    },
    {
      "id": "WI-19",
      "fonte": "Word inicial",
      "tela": "Tipos de reserva",
      "titulo": "Dados do solicitante nos tipos de reserva",
      "pedido": "Incluir e-mail e nome do discente/solicitante, mantendo grupo de extensão obrigatório.",
      "status": "Pendente",
      "resumo": "Nome e e-mail ainda ficam restritos a certos tipos; a obrigatoriedade não corresponde ao pedido.",
      "partes": [
        {
          "texto": "Exibir os campos em todos os tipos e exigir preenchimento somente em Grupo de extensão.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-20",
      "fonte": "Word inicial",
      "tela": "Compras → períodos e painel",
      "titulo": "Arquivamento automático, painel e layout de pedidos",
      "pedido": "Manter período vigente, arquivar após encerramento, rever abas/status e expandir a tela de pedidos.",
      "status": "Parcial",
      "resumo": "Entrega 1 atende períodos, painel e edição; nomes de abas específicos precisam de aceite.",
      "partes": [
        {
          "texto": "Período vigente, encerramento, consulta dos anteriores, estágios e apresentação dos pedidos.",
          "entrega": 1,
          "situacao": "Entregue"
        },
        {
          "texto": "Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras.",
          "entrega": null,
          "situacao": "Definir"
        }
      ]
    },
    {
      "id": "WI-21",
      "fonte": "Word inicial",
      "tela": "Novos módulos → comissões",
      "titulo": "Graduação, Pós-Graduação, Pesquisa e Extensão",
      "pedido": "Representantes, atas/relatórios de reunião, datas e arquivos.",
      "status": "Pendente",
      "resumo": "Gestão de comissões ainda não implementada.",
      "partes": [
        {
          "texto": "Comissões de Graduação, Pós-Graduação, Pesquisa e Extensão, com titular/suplente e reuniões com data, texto e anexos.",
          "entrega": null,
          "situacao": "Pendente"
        }
      ]
    },
    {
      "id": "WI-22",
      "fonte": "Word inicial",
      "tela": "Itens marcados como FEITO",
      "titulo": "Validar os itens já declarados resolvidos",
      "pedido": "Cronograma e bloqueio de dias estão sinalizados como FEITO no Word.",
      "status": "Validar",
      "resumo": "A anotação FEITO no Word não foi tomada como aceite técnico.",
      "partes": [
        {
          "texto": "Criação e importação do cronograma implementadas no PR 9.",
          "entrega": 4,
          "situacao": "Na PR"
        },
        {
          "texto": "Confirmar o bloqueio manual indicado como FEITO; bloqueio automático de feriados não foi localizado.",
          "entrega": null,
          "situacao": "Validar"
        }
      ]
    }
  ]
};
