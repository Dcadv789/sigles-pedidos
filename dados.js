/* Atualização urgente em 20/10/2026: Entrega 3.5; demais aceites preservados. */
window.SIGLES_BOARD = {
  "atualizado": "20/10/2026",
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-03",
              "entrega": 1,
              "titulo": "Ativar e inativar períodos sem erro",
              "url": "tecnico/entrega-1.html#E1-03",
              "papel": "execução",
              "escopo": "Ativar e inativar períodos sem erro"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-01",
              "entrega": 6,
              "titulo": "Cadastro e gravação de fornecedores",
              "url": "tecnico/entrega-6.html#E6-01",
              "papel": "execução",
              "escopo": "Cadastro e gravação de fornecedores"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-01",
              "entrega": 6,
              "titulo": "Cadastro e gravação de fornecedores",
              "url": "tecnico/entrega-6.html#E6-01",
              "papel": "execução",
              "escopo": "Cadastro e gravação de fornecedores"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-05",
              "entrega": 1,
              "titulo": "Conciliar encerramento do período com os estágios combinados",
              "url": "tecnico/entrega-1.html#E1-05",
              "papel": "execução",
              "escopo": "Matriz de encerramento a conciliar"
            },
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Regressão do fluxo já entregue"
            }
          ]
        }
      ],
      "notasTecnicas": [
        "Revisão técnica de 16/10: conciliar a transição dos estágios no encerramento de períodos. O código atual e o descritivo inicial divergem; ver E1-05 antes de alterar a regra."
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Mostrar a data nas listagens de Minhas solicitações e do Painel, além do período.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-02",
              "entrega": 1,
              "titulo": "Data de criação em Minhas solicitações e Painel",
              "url": "tecnico/entrega-1.html#E1-02",
              "papel": "execução",
              "escopo": "Data de criação em Minhas solicitações e Painel"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-01",
              "entrega": 7,
              "titulo": "Turmas, edição por dia e preenchimento automático",
              "url": "tecnico/entrega-7.html#E7-01",
              "papel": "execução",
              "escopo": "Turmas, edição por dia e preenchimento automático"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-01",
              "entrega": 7,
              "titulo": "Turmas, edição por dia e preenchimento automático",
              "url": "tecnico/entrega-7.html#E7-01",
              "papel": "execução",
              "escopo": "Turmas, edição por dia e preenchimento automático"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-99",
              "entrega": 2,
              "titulo": "Aceite integrado do fechamento da entrega 2",
              "url": "tecnico/entrega-2.html#E2-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 2"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Disciplinas, relatórios e login.",
          "entrega": 2,
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-99",
              "entrega": 2,
              "titulo": "Aceite integrado do fechamento da entrega 2",
              "url": "tecnico/entrega-2.html#E2-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 2"
            }
          ]
        },
        {
          "texto": "Ordens de serviço e aniversariantes.",
          "entrega": 3,
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
        },
        {
          "texto": "Evolução de cronogramas.",
          "entrega": 4,
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
        },
        {
          "texto": "Concluir os pedidos específicos ainda pendentes; este item não representa uma funcionalidade única.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "roteiro",
              "entrega": 0,
              "titulo": "Ordem técnica das oito entregas",
              "url": "tecnico/index.html#sequencia"
            }
          ]
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
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
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
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
        },
        {
          "texto": "Detalhar campos, busca e exportações desejados.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-02",
              "entrega": 5,
              "titulo": "Contatos, férias e dados complementares de usuários",
              "url": "tecnico/entrega-5.html#E5-02",
              "papel": "execução",
              "escopo": "Contatos, férias e dados complementares de usuários"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Definir outras mudanças além do cadastro e dos avisos existentes.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-02",
              "entrega": 5,
              "titulo": "Contatos, férias e dados complementares de usuários",
              "url": "tecnico/entrega-5.html#E5-02",
              "papel": "execução",
              "escopo": "Contatos, férias e dados complementares de usuários"
            }
          ]
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
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-02",
              "entrega": 5,
              "titulo": "Contatos, férias e dados complementares de usuários",
              "url": "tecnico/entrega-5.html#E5-02",
              "papel": "execução",
              "escopo": "Contatos, férias e dados complementares de usuários"
            }
          ]
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
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-04",
              "entrega": 5,
              "titulo": "Matriz de acesso dos perfis existentes",
              "url": "tecnico/entrega-5.html#E5-04",
              "papel": "execução",
              "escopo": "Matriz de acesso dos perfis existentes"
            }
          ]
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
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Definir o fluxo próprio de Almoxarifado, entradas, saídas e estoque.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-04",
              "entrega": 6,
              "titulo": "Definir materiais e alcance do Almoxarifado",
              "url": "tecnico/entrega-6.html#E6-04",
              "papel": "execução",
              "escopo": "Definir materiais e alcance do Almoxarifado"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Completar a data visível em todas as listagens e definir as demais melhorias da rotina administrativa.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-02",
              "entrega": 6,
              "titulo": "Arquivamento e complementos do fluxo de compras",
              "url": "tecnico/entrega-6.html#E6-02",
              "papel": "execução",
              "escopo": "Arquivamento e complementos do fluxo de compras"
            }
          ]
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
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
        },
        {
          "texto": "Validar persistência dos seguidores e definir os relatórios gerenciais restantes.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-01",
              "entrega": 3,
              "titulo": "Persistência dos seguidores da OS",
              "url": "tecnico/entrega-3.html#E3-01",
              "papel": "parcela",
              "escopo": "Persistência de seguidores"
            },
            {
              "id": "E3-03",
              "entrega": 3,
              "titulo": "Ordenação inicial e resumo de responsáveis",
              "url": "tecnico/entrega-3.html#E3-03",
              "papel": "parcela",
              "escopo": "Ordenação e resumo de responsáveis"
            },
            {
              "id": "E6-03",
              "entrega": 6,
              "titulo": "Relatórios e ajustes administrativos restantes de OS",
              "url": "tecnico/entrega-6.html#E6-03",
              "papel": "parcela",
              "escopo": "Relatórios e ajustes administrativos definidos com Milton"
            }
          ]
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
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-01",
              "entrega": 6,
              "titulo": "Cadastro e gravação de fornecedores",
              "url": "tecnico/entrega-6.html#E6-01",
              "papel": "execução",
              "escopo": "Cadastro e gravação de fornecedores"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-05",
              "entrega": 8,
              "titulo": "Conexão LES: acessos, destinatários e endereços",
              "url": "tecnico/entrega-8.html#E8-05",
              "papel": "execução",
              "escopo": "Conexão LES: acessos, destinatários e endereços"
            }
          ]
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
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
        },
        {
          "texto": "Testar o arquivo original do cliente e o tratamento dos erros por linha.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-05",
              "entrega": 4,
              "titulo": "Aceite da importação CSV da PR",
              "url": "tecnico/entrega-4.html#E4-05",
              "papel": "parcela",
              "escopo": "CSV básico, integridade e arquivo original"
            },
            {
              "id": "E7-02",
              "entrega": 7,
              "titulo": "Importação ampliada e erros por linha",
              "url": "tecnico/entrega-7.html#E7-02",
              "papel": "parcela",
              "escopo": "Diagnóstico ampliado e formatos/recortes aprovados"
            }
          ]
        },
        {
          "texto": "Confirmar necessidade de XLSX; o formato implementado é CSV.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-02",
              "entrega": 7,
              "titulo": "Importação ampliada e erros por linha",
              "url": "tecnico/entrega-7.html#E7-02",
              "papel": "execução",
              "escopo": "Importação ampliada e erros por linha"
            }
          ]
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
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-07",
              "entrega": 8,
              "titulo": "Importações em lote de outros cadastros",
              "url": "tecnico/entrega-8.html#E8-07",
              "papel": "execução",
              "escopo": "Importações em lote de outros cadastros"
            }
          ]
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
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-08",
              "entrega": 8,
              "titulo": "Estudos previstos de Aproveitamento de Disciplinas e NotebookLM",
              "url": "tecnico/entrega-8.html#E8-08",
              "papel": "execução",
              "escopo": "Estudos previstos de Aproveitamento de Disciplinas e NotebookLM"
            }
          ]
        },
        {
          "texto": "Avaliar o uso do NotebookLM e registrar o resultado.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-08",
              "entrega": 8,
              "titulo": "Estudos previstos de Aproveitamento de Disciplinas e NotebookLM",
              "url": "tecnico/entrega-8.html#E8-08",
              "papel": "execução",
              "escopo": "Estudos previstos de Aproveitamento de Disciplinas e NotebookLM"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-99",
              "entrega": 2,
              "titulo": "Aceite integrado do fechamento da entrega 2",
              "url": "tecnico/entrega-2.html#E2-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 2"
            }
          ]
        },
        {
          "texto": "Consolidar a carga por departamento com filtros e exportação próprios.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-04",
              "entrega": 7,
              "titulo": "Consolidação anual e departamental da carga docente",
              "url": "tecnico/entrega-7.html#E7-04",
              "papel": "execução",
              "escopo": "Consolidação anual e departamental da carga docente"
            }
          ]
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
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
        },
        {
          "texto": "Definir novos campos e filtros; validar os problemas da agenda.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-06",
              "entrega": 8,
              "titulo": "Histórico e relatórios de alterações da agenda",
              "url": "tecnico/entrega-8.html#E8-06",
              "papel": "execução",
              "escopo": "Histórico e relatórios de alterações da agenda"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-04",
              "entrega": 8,
              "titulo": "Reservas para alunos e pessoas externas",
              "url": "tecnico/entrega-8.html#E8-04",
              "papel": "execução",
              "escopo": "Reservas para alunos e pessoas externas"
            }
          ]
        },
        {
          "texto": "Definir responsáveis e regras de aprovação de reservas.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-04",
              "entrega": 8,
              "titulo": "Reservas para alunos e pessoas externas",
              "url": "tecnico/entrega-8.html#E8-04",
              "papel": "execução",
              "escopo": "Reservas para alunos e pessoas externas"
            }
          ]
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
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
        },
        {
          "texto": "O arquivo que originou o erro ainda precisa de teste de aceite.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-05",
              "entrega": 4,
              "titulo": "Aceite da importação CSV da PR",
              "url": "tecnico/entrega-4.html#E4-05",
              "papel": "execução",
              "escopo": "Aceite da importação CSV da PR"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-01",
              "entrega": 7,
              "titulo": "Turmas, edição por dia e preenchimento automático",
              "url": "tecnico/entrega-7.html#E7-01",
              "papel": "execução",
              "escopo": "Turmas, edição por dia e preenchimento automático"
            }
          ]
        },
        {
          "texto": "Definir se o crédito deve pertencer à disciplina, turma ou dia.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-01",
              "entrega": 7,
              "titulo": "Turmas, edição por dia e preenchimento automático",
              "url": "tecnico/entrega-7.html#E7-01",
              "papel": "execução",
              "escopo": "Turmas, edição por dia e preenchimento automático"
            }
          ]
        }
      ]
    },
    {
      "id": "WI-03",
      "fonte": "Word inicial",
      "tela": "Agenda → eventos recorrentes",
      "titulo": "Alterar eventos recorrentes",
      "pedido": "Alterações em eventos recorrentes continuam sem funcionar; o documento marca como urgente.",
      "status": "Parcial",
      "resumo": "Bloqueio e datas antecipados para a Entrega 3.5, em homologação (PR #40). A revisão integral da recorrência permanece em E8-01.",
      "partes": [
        {
          "texto": "Bloquear conflitos ao alterar uma ocorrência, preservando a sala (parcela urgente).",
          "entrega": 3.5,
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3.5-01",
              "entrega": 3.5,
              "titulo": "Bloqueio de reservas sobrepostas",
              "url": "tecnico/entrega-3.5.html#E3.5-01",
              "papel": "execução",
              "escopo": "Bloquear criação, edição e reativação de reservas sobrepostas; conferir repetições, exceções e aulas existentes; serializar tentativas simultâneas de reserva por sala; alinhar datas e consulta de disponibilidade."
            }
          ]
        },
        {
          "texto": "Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação.",
          "entrega": 3.5,
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3.5-01",
              "entrega": 3.5,
              "titulo": "Bloqueio de reservas sobrepostas",
              "url": "tecnico/entrega-3.5.html#E3.5-01",
              "papel": "execução",
              "escopo": "Bloquear criação, edição e reativação de reservas sobrepostas; conferir repetições, exceções e aulas existentes; serializar tentativas simultâneas de reserva por sala; alinhar datas e consulta de disponibilidade."
            }
          ]
        },
        {
          "texto": "Revisão integral de alterações da série e das operações esta/futuras/todas, além da parcela urgente antecipada.",
          "entrega": 8,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-01",
              "entrega": 8,
              "titulo": "Conflitos e alterações de reservas recorrentes",
              "url": "tecnico/entrega-8.html#E8-01",
              "papel": "execução",
              "escopo": "Conflitos e alterações de reservas recorrentes"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-04",
              "entrega": 4,
              "titulo": "Aplicar filtros de salas e docentes de ponta a ponta",
              "url": "tecnico/entrega-4.html#E4-04",
              "papel": "execução",
              "escopo": "Aplicar filtros de salas e docentes de ponta a ponta"
            }
          ]
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
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
        },
        {
          "texto": "CERT, férias e contratos, com tratamento de datas ausentes.",
          "entrega": 1,
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Acrescentar atalhos diretos para LES, MarteWeb e Júpiter Web.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-01",
              "entrega": 5,
              "titulo": "Dashboard: atalhos, imagem e abrangência das informações",
              "url": "tecnico/entrega-5.html#E5-01",
              "papel": "execução",
              "escopo": "Dashboard: atalhos, imagem e abrangência das informações"
            }
          ]
        },
        {
          "texto": "Confirmar se a imagem deve ser plano de fundo ou imagem na página.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-01",
              "entrega": 5,
              "titulo": "Dashboard: atalhos, imagem e abrangência das informações",
              "url": "tecnico/entrega-5.html#E5-01",
              "papel": "execução",
              "escopo": "Dashboard: atalhos, imagem e abrangência das informações"
            }
          ]
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
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
        },
        {
          "texto": "Confirmar se a visão ampliada deve abranger todos os departamentos; hoje é departamental.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-01",
              "entrega": 5,
              "titulo": "Dashboard: atalhos, imagem e abrangência das informações",
              "url": "tecnico/entrega-5.html#E5-01",
              "papel": "execução",
              "escopo": "Dashboard: atalhos, imagem e abrangência das informações"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Reproduzir a desconfiguração relatada ao ordenar nomes.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-01",
              "entrega": 1,
              "titulo": "Ordenação e persistência da tela de Usuários",
              "url": "tecnico/entrega-1.html#E1-01",
              "papel": "execução",
              "escopo": "Ordenação e persistência da tela de Usuários"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-04",
              "entrega": 1,
              "titulo": "Regra de antecedência de contratos por perfil",
              "url": "tecnico/entrega-1.html#E1-04",
              "papel": "execução",
              "escopo": "Regra da antecedência por perfil"
            },
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do aviso no Dashboard"
            }
          ]
        },
        {
          "texto": "Conferir a configuração de 45 dias para estagiários.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-04",
              "entrega": 1,
              "titulo": "Regra de antecedência de contratos por perfil",
              "url": "tecnico/entrega-1.html#E1-04",
              "papel": "execução",
              "escopo": "Regra de antecedência de contratos por perfil"
            }
          ]
        },
        {
          "texto": "Enviar automaticamente o aviso ao administrador e ao estagiário.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo",
          "motivoCobranca": "Recomendação: orçar o novo envio automático ao administrador e ao estagiário. O parâmetro de antecedência e sua configuração para 45 dias continuam no pedido inicial. Conferir eventual aprovação ou pagamento anterior da automação."
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
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
        },
        {
          "texto": "Verificar se os seguidores escolhidos permanecem após salvar e reabrir.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-01",
              "entrega": 3,
              "titulo": "Persistência dos seguidores da OS",
              "url": "tecnico/entrega-3.html#E3-01",
              "papel": "execução",
              "escopo": "Persistência dos seguidores da OS"
            }
          ]
        },
        {
          "texto": "Confirmar a regra do responsável inicial solicitada pelo cliente.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-02",
              "entrega": 3,
              "titulo": "Regra do responsável e das subcategorias",
              "url": "tecnico/entrega-3.html#E3-02",
              "papel": "execução",
              "escopo": "Regra do responsável e das subcategorias"
            }
          ]
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
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
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
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-99",
              "entrega": 3,
              "titulo": "Homologação e preparação de publicação da entrega 3",
              "url": "tecnico/entrega-3.html#E3-99",
              "papel": "aceite",
              "escopo": "Homologação e preparação de publicação da entrega 3"
            }
          ]
        },
        {
          "texto": "Definir se a subcategoria terá responsável próprio; hoje herda da categoria.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3-02",
              "entrega": 3,
              "titulo": "Regra do responsável e das subcategorias",
              "url": "tecnico/entrega-3.html#E3-02",
              "papel": "execução",
              "escopo": "Regra do responsável e das subcategorias"
            }
          ]
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
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
        },
        {
          "texto": "Exportar todos os cursos da disciplina: o servidor ainda retorna só o curso da turma.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-03",
              "entrega": 4,
              "titulo": "Fechar a exportação de todos os cursos",
              "url": "tecnico/entrega-4.html#E4-03",
              "papel": "execução",
              "escopo": "Fechar a exportação de todos os cursos"
            }
          ]
        },
        {
          "texto": "Aplicar no servidor o filtro das salas elegíveis.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-04",
              "entrega": 4,
              "titulo": "Aplicar filtros de salas e docentes de ponta a ponta",
              "url": "tecnico/entrega-4.html#E4-04",
              "papel": "execução",
              "escopo": "Aplicar filtros de salas e docentes de ponta a ponta"
            }
          ]
        },
        {
          "texto": "Confirmar a seleção de docentes inativos no caso relatado.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-04",
              "entrega": 4,
              "titulo": "Aplicar filtros de salas e docentes de ponta a ponta",
              "url": "tecnico/entrega-4.html#E4-04",
              "papel": "execução",
              "escopo": "Aplicar filtros de salas e docentes de ponta a ponta"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-99",
              "entrega": 2,
              "titulo": "Aceite integrado do fechamento da entrega 2",
              "url": "tecnico/entrega-2.html#E2-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 2"
            }
          ]
        },
        {
          "texto": "Exportar a listagem principal e mostrar nela o docente responsável.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-01",
              "entrega": 2,
              "titulo": "Responsável na listagem e Excel de Disciplinas",
              "url": "tecnico/entrega-2.html#E2-01",
              "papel": "execução",
              "escopo": "Responsável na listagem e Excel de Disciplinas"
            }
          ]
        },
        {
          "texto": "Incluir crédito na exportação do relatório Disciplinas docente.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-02",
              "entrega": 2,
              "titulo": "Créditos na exportação de Disciplinas docente",
              "url": "tecnico/entrega-2.html#E2-02",
              "papel": "execução",
              "escopo": "Créditos na exportação de Disciplinas docente"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E2-99",
              "entrega": 2,
              "titulo": "Aceite integrado do fechamento da entrega 2",
              "url": "tecnico/entrega-2.html#E2-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 2"
            }
          ]
        },
        {
          "texto": "Consolidar primeiro/segundo semestre e pós-graduação no total anual por docente.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E7-04",
              "entrega": 7,
              "titulo": "Consolidação anual e departamental da carga docente",
              "url": "tecnico/entrega-7.html#E7-04",
              "papel": "execução",
              "escopo": "Consolidação anual e departamental da carga docente"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Aceite integrado do fechamento da entrega 1"
            }
          ]
        },
        {
          "texto": "Uma hierarquia extra de subcategorias só será necessária se essa for a intenção do cliente.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-04",
              "entrega": 6,
              "titulo": "Definir materiais e alcance do Almoxarifado",
              "url": "tecnico/entrega-6.html#E6-04",
              "papel": "execução",
              "escopo": "Definir materiais e alcance do Almoxarifado"
            }
          ]
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
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-03",
              "entrega": 8,
              "titulo": "Saneamento das salas duplicadas",
              "url": "tecnico/entrega-8.html#E8-03",
              "papel": "execução",
              "escopo": "Saneamento das salas duplicadas"
            }
          ]
        },
        {
          "texto": "Usar o nome abreviado na apresentação da sala na agenda.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-03",
              "entrega": 5,
              "titulo": "Menu, nome abreviado da sala e dados por tipo de reserva",
              "url": "tecnico/entrega-5.html#E5-03",
              "papel": "execução",
              "escopo": "Menu, nome abreviado da sala e dados por tipo de reserva"
            }
          ]
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
      "resumo": "Datas, conflitos e leitura de disponibilidade corrigidos na Entrega 3.5, em homologação. Seleção de sala, bloqueios manuais e revisão integral das exclusões continuam na Entrega 8.",
      "partes": [
        {
          "texto": "Consulta de salas disponíveis por intervalo.",
          "entrega": null,
          "situacao": "Já existente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": []
        },
        {
          "texto": "Selecionar a sala na consulta e retornar ao evento com ela preenchida.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-02",
              "entrega": 8,
              "titulo": "Escolha de sala disponível e bloqueio manual",
              "url": "tecnico/entrega-8.html#E8-02",
              "papel": "execução",
              "escopo": "Escolha de sala disponível e bloqueio manual"
            }
          ]
        },
        {
          "texto": "Última data inclusiva, bloqueio de colisões nas repetições e alteração de uma ocorrência sem ignorar as demais (parcela urgente).",
          "entrega": 3.5,
          "situacao": "Homologação",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E3.5-01",
              "entrega": 3.5,
              "titulo": "Bloqueio de reservas sobrepostas",
              "url": "tecnico/entrega-3.5.html#E3.5-01",
              "papel": "execução",
              "escopo": "Bloquear criação, edição e reativação de reservas sobrepostas; conferir repetições, exceções e aulas existentes; serializar tentativas simultâneas de reserva por sala; alinhar datas e consulta de disponibilidade."
            }
          ]
        },
        {
          "texto": "Concluir a revisão integral de exclusão e alteração esta/futuras/todas, reutilizando o bloqueio da Entrega 3.5.",
          "entrega": 8,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-01",
              "entrega": 8,
              "titulo": "Conflitos e alterações de reservas recorrentes",
              "url": "tecnico/entrega-8.html#E8-01",
              "papel": "execução",
              "escopo": "Conflitos e alterações de reservas recorrentes"
            }
          ]
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
          "situacao": "Pendente",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E5-03",
              "entrega": 5,
              "titulo": "Menu, nome abreviado da sala e dados por tipo de reserva",
              "url": "tecnico/entrega-5.html#E5-03",
              "papel": "execução",
              "escopo": "Menu, nome abreviado da sala e dados por tipo de reserva"
            }
          ]
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
          "situacao": "Entregue",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E1-05",
              "entrega": 1,
              "titulo": "Conciliar encerramento do período com os estágios combinados",
              "url": "tecnico/entrega-1.html#E1-05",
              "papel": "execução",
              "escopo": "Regra única de estágios no encerramento"
            },
            {
              "id": "E1-99",
              "entrega": 1,
              "titulo": "Aceite integrado do fechamento da entrega 1",
              "url": "tecnico/entrega-1.html#E1-99",
              "papel": "aceite",
              "escopo": "Validação do fluxo de compras existente"
            }
          ]
        },
        {
          "texto": "Confirmar se Mostrar períodos encerrados atende a Arquivados e o que seria a nova aba Compras.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E6-02",
              "entrega": 6,
              "titulo": "Arquivamento e complementos do fluxo de compras",
              "url": "tecnico/entrega-6.html#E6-02",
              "papel": "execução",
              "escopo": "Arquivamento e complementos do fluxo de compras"
            }
          ]
        }
      ],
      "notasTecnicas": [
        "Revisão técnica de 16/10: conciliar a transição dos estágios no encerramento de períodos. O código atual e o descritivo inicial divergem; ver E1-05 antes de alterar a regra."
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
          "situacao": "Pendente",
          "cobranca": "Aditivo",
          "motivoCobranca": "Novo processo de gestão de comissões, representantes e reuniões, não descrito no relatório original de visita. Recomenda-se um pacote único para as quatro comissões."
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
      "resumo": "Cronograma na entrega 4; bloqueio manual a validar. A automação de feriados é recomendada como aditivo, após conferir a anotação FEITO.",
      "partes": [
        {
          "texto": "Criação e importação do cronograma implementadas no PR 9.",
          "entrega": 4,
          "situacao": "Na PR",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E4-99",
              "entrega": 4,
              "titulo": "Revisão final e integração da entrega 4",
              "url": "tecnico/entrega-4.html#E4-99",
              "papel": "aceite",
              "escopo": "Revisão final e integração da entrega 4"
            }
          ]
        },
        {
          "texto": "Confirmar o bloqueio manual indicado como FEITO e o que foi efetivamente realizado.",
          "entrega": null,
          "situacao": "Validar",
          "cobranca": "Pedido inicial",
          "planosTecnicos": [
            {
              "id": "E8-02",
              "entrega": 8,
              "titulo": "Escolha de sala disponível e bloqueio manual",
              "url": "tecnico/entrega-8.html#E8-02",
              "papel": "execução",
              "escopo": "Escolha de sala disponível e bloqueio manual"
            }
          ]
        },
        {
          "texto": "Implementar calendário e bloqueio automático de feriados integrado à disponibilidade e às reservas recorrentes.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo",
          "motivoCobranca": "Recomendação condicionada: automação específica não descrita no relatório original. Antes de orçar, esclarecer a anotação FEITO e confirmar que não foi entregue ou paga anteriormente. A correção de um bloqueio já contratado continua no pedido inicial."
        }
      ]
    },
    {
      "id": "AD-01",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Disciplinas",
      "titulo": "Docente responsável no cadastro da disciplina",
      "pedido": "Seguem demais ajustes a serem efetivados no SIGLES:\n\nAlém das alterações e inclusões constantes no Relatório da Visita Técnica, realizada no dia 20/08/2026, solicito a inclusão das seguintes adições de funcionalidades no SIGLES:\n\n- No cadastro das disciplinas, opção para cadastrar o nome do(s) docente(s) responsável (eis);",
      "status": "Parcial",
      "resumo": "O responsável por ano/semestre já existe na entrega 2. Confirmar se o novo pedido exige vários responsáveis simultâneos.",
      "referencias": [
        {
          "paragrafo": 1,
          "texto": "Seguem demais ajustes a serem efetivados no SIGLES:"
        },
        {
          "paragrafo": 3,
          "texto": "Além das alterações e inclusões constantes no Relatório da Visita Técnica, realizada no dia 20/08/2026, solicito a inclusão das seguintes adições de funcionalidades no SIGLES:"
        },
        {
          "paragrafo": 5,
          "texto": "- No cadastro das disciplinas, opção para cadastrar o nome do(s) docente(s) responsável (eis);"
        }
      ],
      "partes": [
        {
          "texto": "Cadastro do responsável por ano e semestre já implementado.",
          "entrega": 2,
          "situacao": "Entregue",
          "cobranca": "Aditivo"
        },
        {
          "texto": "Definir e implementar, se necessário, vários responsáveis simultâneos. Parte já entregue não exige refazer o mesmo recurso.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-02",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Disciplinas",
      "titulo": "Responsável na listagem principal",
      "pedido": "- Na tela inicial da lista de disciplinas, aparecer o nome do docente responsável, independente do docente constante no cronograma.",
      "status": "Pendente",
      "resumo": "Exibir o responsável na lista de disciplinas, independentemente de quem ministra as turmas. Sobrepõe parte de WI-14: acompanhar como um único desenvolvimento.",
      "referencias": [
        {
          "paragrafo": 6,
          "texto": "- Na tela inicial da lista de disciplinas, aparecer o nome do docente responsável, independente do docente constante no cronograma."
        }
      ],
      "partes": [
        {
          "texto": "Exibir o responsável na lista de disciplinas, independentemente de quem ministra as turmas. Sobrepõe parte de WI-14: acompanhar como um único desenvolvimento.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-03",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Plano de ensino editável no sistema",
      "pedido": "NA ABA DISCIPLINAS:\n\nNovo item: Planos de Ensino\n\nSeria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). \n\nModelo de Plano de Ensino: \n\nhttps://docs.google.com/document/d/1zwPWGK8jlGyrBVcIQMlZQaBrSdGY_tpF/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true",
      "status": "Pendente",
      "resumo": "Criar uma página editável conforme o modelo indicado, para consulta e atualização pelo docente. O cadastro atual de anexos não equivale a esse editor. Os campos do modelo externo precisam ser conferidos.",
      "referencias": [
        {
          "paragrafo": 8,
          "texto": "NA ABA DISCIPLINAS:"
        },
        {
          "paragrafo": 9,
          "texto": "Novo item: Planos de Ensino"
        },
        {
          "paragrafo": 10,
          "texto": "Seria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). "
        },
        {
          "paragrafo": 11,
          "texto": "Modelo de Plano de Ensino: "
        },
        {
          "paragrafo": 12,
          "texto": "https://docs.google.com/document/d/1zwPWGK8jlGyrBVcIQMlZQaBrSdGY_tpF/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true"
        }
      ],
      "partes": [
        {
          "texto": "Criar uma página editável conforme o modelo indicado, para consulta e atualização pelo docente. O cadastro atual de anexos não equivale a esse editor. Os campos do modelo externo precisam ser conferidos.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-04",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Cópia do plano para um novo ano",
      "pedido": "Seria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). ",
      "status": "Pendente",
      "resumo": "Permitir copiar o plano atual para criar uma nova versão, exigindo o ano a que a alteração se destina.",
      "referencias": [
        {
          "paragrafo": 10,
          "texto": "Seria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). "
        }
      ],
      "partes": [
        {
          "texto": "Permitir copiar o plano atual para criar uma nova versão, exigindo o ano a que a alteração se destina.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-05",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Filtro e impressão dos planos alterados",
      "pedido": "Seria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). ",
      "status": "Pendente",
      "resumo": "Identificar os planos alterados, filtrar somente eles e imprimir os formulários individualmente.",
      "referencias": [
        {
          "paragrafo": 10,
          "texto": "Seria possível que o plano de ensino fosse uma página editável do próprio sistema, no modelo do plano de ensino, em que o docente possa consultar, realizar a alterações e que possamos imprimir os formulários alterados individualmente ou filtrar apenas pelos que foram alterados (o sistema identificaria quais foram alterados, uma vez que para isso, o docente deverá fazer uma “cópia” da página atual, criando uma nova página, nos moldes do cronograma inserindo obrigatoriamente o ano para o qual a alteração está sendo feita). "
        }
      ],
      "partes": [
        {
          "texto": "Identificar os planos alterados, filtrar somente eles e imprimir os formulários individualmente.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-06",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Ano de referência",
      "pedido": "- Na tela de adição do plano de ensino, trocar data de referência por ano de referência, para facilitar o filtro. ",
      "status": "Pendente",
      "resumo": "Substituir a data de referência pelo ano e adequar os filtros.",
      "referencias": [
        {
          "paragrafo": 14,
          "texto": "- Na tela de adição do plano de ensino, trocar data de referência por ano de referência, para facilitar o filtro. "
        }
      ],
      "partes": [
        {
          "texto": "Substituir a data de referência pelo ano e adequar os filtros.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-07",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Período de atualização e autorização de exceções",
      "pedido": "- Findado o período de atualizações, os docentes somente visualizarão, TANTO eles, quanto demais usuários somente poderão alterar, se autorizado pelo ADM.\n\n- Os planos de anos futuros poderão ser alterados quantas vezes for necessário, dentro do período que estipularmos.",
      "status": "Pendente",
      "resumo": "Permitir alterações repetidas nos planos futuros durante o período definido; encerrado o prazo, liberar alteração apenas com autorização do administrador.",
      "referencias": [
        {
          "paragrafo": 15,
          "texto": "- Findado o período de atualizações, os docentes somente visualizarão, TANTO eles, quanto demais usuários somente poderão alterar, se autorizado pelo ADM."
        },
        {
          "paragrafo": 18,
          "texto": "- Os planos de anos futuros poderão ser alterados quantas vezes for necessário, dentro do período que estipularmos."
        }
      ],
      "partes": [
        {
          "texto": "Permitir alterações repetidas nos planos futuros durante o período definido; encerrado o prazo, liberar alteração apenas com autorização do administrador.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-08",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Consulta aos planos de outras disciplinas",
      "pedido": "- Os docentes poderão visualizar os planos de outras disciplinas que não estejam sob sua responsabilidade.",
      "status": "Pendente",
      "resumo": "Permitir que docentes consultem planos de disciplinas das quais não sejam responsáveis.",
      "referencias": [
        {
          "paragrafo": 16,
          "texto": "- Os docentes poderão visualizar os planos de outras disciplinas que não estejam sob sua responsabilidade."
        }
      ],
      "partes": [
        {
          "texto": "Permitir que docentes consultem planos de disciplinas das quais não sejam responsáveis.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-09",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Alteração somente de anos futuros",
      "pedido": "- Só poderão alterar os planos para anos futuros, de anos anteriores, apenas visualizar.",
      "status": "Pendente",
      "resumo": "Para usuários comuns, permitir edição somente de planos de anos futuros e manter anos anteriores para consulta.",
      "referencias": [
        {
          "paragrafo": 17,
          "texto": "- Só poderão alterar os planos para anos futuros, de anos anteriores, apenas visualizar."
        }
      ],
      "partes": [
        {
          "texto": "Para usuários comuns, permitir edição somente de planos de anos futuros e manter anos anteriores para consulta.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-10",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Edição irrestrita pelo administrador",
      "pedido": "- Os ADMs podem alterar tudo, quantas vezes for necessário.",
      "status": "Pendente",
      "resumo": "Permitir ao administrador alterar planos de qualquer ano, quantas vezes forem necessárias.",
      "referencias": [
        {
          "paragrafo": 19,
          "texto": "- Os ADMs podem alterar tudo, quantas vezes for necessário."
        }
      ],
      "partes": [
        {
          "texto": "Permitir ao administrador alterar planos de qualquer ano, quantas vezes forem necessárias.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-11",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Relatórios anuais de alterações e justificativas",
      "pedido": "- Poder imprimir relatórios, principalmente das alterações realizadas por ano, onde constem todas as alterações, conforme relatório da CG, e suas respectivas justificativas, individualmente; ",
      "status": "Pendente",
      "resumo": "Gerar e imprimir, individualmente, relatórios por ano com todas as alterações e justificativas, no formato do relatório da CG. O log da entrega 2 é uma base parcial, não o relatório novo completo.",
      "referencias": [
        {
          "paragrafo": 20,
          "texto": "- Poder imprimir relatórios, principalmente das alterações realizadas por ano, onde constem todas as alterações, conforme relatório da CG, e suas respectivas justificativas, individualmente; "
        }
      ],
      "partes": [
        {
          "texto": "Gerar e imprimir, individualmente, relatórios por ano com todas as alterações e justificativas, no formato do relatório da CG. O log da entrega 2 é uma base parcial, não o relatório novo completo.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-12",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Planos de ensino",
      "titulo": "Arquivo histórico dos planos",
      "pedido": "- Sistema deve manter arquivadas para visualizações, os PLEs de anos anteriores, podendo gerar relatórios e imprimir o plano.",
      "status": "Pendente",
      "resumo": "Manter versões de anos anteriores disponíveis para visualização, geração de relatórios e impressão.",
      "referencias": [
        {
          "paragrafo": 21,
          "texto": "- Sistema deve manter arquivadas para visualizações, os PLEs de anos anteriores, podendo gerar relatórios e imprimir o plano."
        }
      ],
      "partes": [
        {
          "texto": "Manter versões de anos anteriores disponíveis para visualização, geração de relatórios e impressão.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-13",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Acesso e cadastro de alunos externos",
      "pedido": "NOVA ABA – APROVEITAMENTO DE ESTUDOS – Alunos não usuários do Sistema:\n\n- O aluno deverá acessar o sistema para cadastrar (já temos um link de acesso para externos, para solicitar publicações, verificar se pode ser este mesmo acesso para as solicitações de aproveitamento de estudos;",
      "status": "Pendente",
      "resumo": "Criar o acesso de alunos não usuários para solicitar aproveitamento; avaliar o reaproveitamento do acesso externo de publicações.",
      "referencias": [
        {
          "paragrafo": 23,
          "texto": "NOVA ABA – APROVEITAMENTO DE ESTUDOS – Alunos não usuários do Sistema:"
        },
        {
          "paragrafo": 24,
          "texto": "- O aluno deverá acessar o sistema para cadastrar (já temos um link de acesso para externos, para solicitar publicações, verificar se pode ser este mesmo acesso para as solicitações de aproveitamento de estudos;"
        }
      ],
      "partes": [
        {
          "texto": "Criar o acesso de alunos não usuários para solicitar aproveitamento; avaliar o reaproveitamento do acesso externo de publicações.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-14",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Seleção da disciplina por código e nome",
      "pedido": "- Deve haver campos para indicar a disciplina para à qual o aluno solicita o aproveitamento de estudos, como o código e nome da disciplina, que poderá ser puxado da aba Disciplinas, para facilitar e agilizar, não precisa citar o semestre;",
      "status": "Pendente",
      "resumo": "Consultar a base de Disciplinas e preencher código e nome da disciplina pretendida, sem exigir semestre.",
      "referencias": [
        {
          "paragrafo": 25,
          "texto": "- Deve haver campos para indicar a disciplina para à qual o aluno solicita o aproveitamento de estudos, como o código e nome da disciplina, que poderá ser puxado da aba Disciplinas, para facilitar e agilizar, não precisa citar o semestre;"
        }
      ],
      "partes": [
        {
          "texto": "Consultar a base de Disciplinas e preencher código e nome da disciplina pretendida, sem exigir semestre.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-15",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Identificação do docente no ano corrente",
      "pedido": "- O sistema deverá puxar do cronograma atual, o nome do docente responsável pela disciplina, por meio do código dela, independentemente do semestre, porém, do ano corrente. (Muitas vezes ocorre divisão das turmas onde 2 ou mais docentes ministram aula, ou também pode acontecer de outro docente, diferente daquele citado na ementa, esteja ministrando a disciplina.",
      "status": "Definir",
      "resumo": "Definir qual docente recebe o pedido quando há vários docentes ou turmas no ano; buscar pelo código da disciplina no cronograma corrente, independentemente do semestre.",
      "referencias": [
        {
          "paragrafo": 26,
          "texto": "- O sistema deverá puxar do cronograma atual, o nome do docente responsável pela disciplina, por meio do código dela, independentemente do semestre, porém, do ano corrente. (Muitas vezes ocorre divisão das turmas onde 2 ou mais docentes ministram aula, ou também pode acontecer de outro docente, diferente daquele citado na ementa, esteja ministrando a disciplina."
        }
      ],
      "partes": [
        {
          "texto": "Definir qual docente recebe o pedido quando há vários docentes ou turmas no ano; buscar pelo código da disciplina no cronograma corrente, independentemente do semestre.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-16",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Documentação PDF e validação de envio",
      "pedido": "- O aluno deve inserir os documentos solicitados em PDF, clicando nos ícones, formulário de requerimento, histórico da(s) disciplina(s) cursada(s), ementa(s) da(s) disciplina(s) cursada(s), pois pode ser mais que uma, ou inserir todos os documentos em um único arquivo, clicando no ícone com o mesmo nome.\n\n- O sistema somente deixará salvar a solicitação, após o aluno inserir todos os documentos individualizados ou em um arquivo único.",
      "status": "Pendente",
      "resumo": "Aceitar requerimento, históricos e ementas em PDFs separados ou em um arquivo único; impedir salvar sem a documentação exigida.",
      "referencias": [
        {
          "paragrafo": 27,
          "texto": "- O aluno deve inserir os documentos solicitados em PDF, clicando nos ícones, formulário de requerimento, histórico da(s) disciplina(s) cursada(s), ementa(s) da(s) disciplina(s) cursada(s), pois pode ser mais que uma, ou inserir todos os documentos em um único arquivo, clicando no ícone com o mesmo nome."
        },
        {
          "paragrafo": 28,
          "texto": "- O sistema somente deixará salvar a solicitação, após o aluno inserir todos os documentos individualizados ou em um arquivo único."
        }
      ],
      "partes": [
        {
          "texto": "Aceitar requerimento, históricos e ementas em PDFs separados ou em um arquivo único; impedir salvar sem a documentação exigida.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-17",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Várias solicitações independentes por aluno",
      "pedido": "- O aluno pode inserir quantas solicitações quiser, clicando no botão “+”\n\nUm mesmo aluno pode inserir várias solicitações de aproveitamento, para um ou para vários docentes diferentes, espera-se que o sistema envie os pedidos em separados, da forma que foi cadastrado.",
      "status": "Pendente",
      "resumo": "Disponibilizar botão + para criar várias solicitações e encaminhá-las separadamente, inclusive para docentes diferentes.",
      "referencias": [
        {
          "paragrafo": 29,
          "texto": "- O aluno pode inserir quantas solicitações quiser, clicando no botão “+”"
        },
        {
          "paragrafo": 30,
          "texto": "Um mesmo aluno pode inserir várias solicitações de aproveitamento, para um ou para vários docentes diferentes, espera-se que o sistema envie os pedidos em separados, da forma que foi cadastrado."
        }
      ],
      "partes": [
        {
          "texto": "Disponibilizar botão + para criar várias solicitações e encaminhá-las separadamente, inclusive para docentes diferentes.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-18",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Aviso e consulta na triagem",
      "pedido": "- Após envio pelo aluno, o sistema me notifica de que existe solicitação de aproveitamento aguardando análise. Pode-se apenas visualizar os documentos dentro do sistema ou em uma aba separada, do mesmo modo que o plano de ensino.",
      "status": "Pendente",
      "resumo": "Notificar a secretaria sobre novos pedidos e permitir visualizar os documentos dentro do sistema ou em outra aba.",
      "referencias": [
        {
          "paragrafo": 31,
          "texto": "- Após envio pelo aluno, o sistema me notifica de que existe solicitação de aproveitamento aguardando análise. Pode-se apenas visualizar os documentos dentro do sistema ou em uma aba separada, do mesmo modo que o plano de ensino."
        }
      ],
      "partes": [
        {
          "texto": "Notificar a secretaria sobre novos pedidos e permitir visualizar os documentos dentro do sistema ou em outra aba.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-19",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Triagem com devolução justificada",
      "pedido": "- Após constatar se os arquivos estão ou não estão completos, deve haver duas possibilidades para meu encaminhamento: Devolver ao aluno para ajustes ou enviar para a análise do docente.\n\n- Deve haver um campo para eu explicar ao aluno o motivo da devolução.",
      "status": "Pendente",
      "resumo": "Permitir à secretaria devolver ao aluno ou encaminhar ao docente, com campo para explicar o motivo da devolução.",
      "referencias": [
        {
          "paragrafo": 32,
          "texto": "- Após constatar se os arquivos estão ou não estão completos, deve haver duas possibilidades para meu encaminhamento: Devolver ao aluno para ajustes ou enviar para a análise do docente."
        },
        {
          "paragrafo": 33,
          "texto": "- Deve haver um campo para eu explicar ao aluno o motivo da devolução."
        }
      ],
      "partes": [
        {
          "texto": "Permitir à secretaria devolver ao aluno ou encaminhar ao docente, com campo para explicar o motivo da devolução.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-20",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "E-mail ao aluno sobre devolução",
      "pedido": "- O sistema envia notificação ao solicitante de que há uma solicitação de aproveitamento de estudos devolvida para ajustes. Essa notificação deverá ocorrer no mesmo e-mail registrado pelo solicitante, no momento que acessou o sistema.",
      "status": "Pendente",
      "resumo": "Notificar a devolução para o e-mail informado pelo aluno no cadastro.",
      "referencias": [
        {
          "paragrafo": 34,
          "texto": "- O sistema envia notificação ao solicitante de que há uma solicitação de aproveitamento de estudos devolvida para ajustes. Essa notificação deverá ocorrer no mesmo e-mail registrado pelo solicitante, no momento que acessou o sistema."
        }
      ],
      "partes": [
        {
          "texto": "Notificar a devolução para o e-mail informado pelo aluno no cadastro.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-21",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Reenvio após ajustes",
      "pedido": "- Feitos os ajustes, o aluno reenvia a solicitação.\n\n- O sistema me notifica que a solicitação retornou para minha análise. ",
      "status": "Pendente",
      "resumo": "Permitir ao aluno corrigir e reenviar o pedido; notificar a secretaria de que ele voltou à análise.",
      "referencias": [
        {
          "paragrafo": 35,
          "texto": "- Feitos os ajustes, o aluno reenvia a solicitação."
        },
        {
          "paragrafo": 36,
          "texto": "- O sistema me notifica que a solicitação retornou para minha análise. "
        }
      ],
      "partes": [
        {
          "texto": "Permitir ao aluno corrigir e reenviar o pedido; notificar a secretaria de que ele voltou à análise.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-22",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Encaminhamento e notificação ao docente",
      "pedido": "- Estando tudo certinho, eu clico no botão “enviar p/ análise”.\n\n- O docente recebe a notificação de que há solicitação de aproveitamento de estudos aguardando a análise e manifestação dele.",
      "status": "Pendente",
      "resumo": "Criar a ação Enviar para análise e avisar o docente de que existe pedido aguardando parecer.",
      "referencias": [
        {
          "paragrafo": 37,
          "texto": "- Estando tudo certinho, eu clico no botão “enviar p/ análise”."
        },
        {
          "paragrafo": 38,
          "texto": "- O docente recebe a notificação de que há solicitação de aproveitamento de estudos aguardando a análise e manifestação dele."
        }
      ],
      "partes": [
        {
          "texto": "Criar a ação Enviar para análise e avisar o docente de que existe pedido aguardando parecer.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-23",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Visualização e impressão dos documentos pelo docente",
      "pedido": "- O docente pode visualizar os arquivos, em aba separada e também imprimir, caso prefira.",
      "status": "Pendente",
      "resumo": "Permitir ao docente abrir os documentos em outra aba e imprimir.",
      "referencias": [
        {
          "paragrafo": 39,
          "texto": "- O docente pode visualizar os arquivos, em aba separada e também imprimir, caso prefira."
        }
      ],
      "partes": [
        {
          "texto": "Permitir ao docente abrir os documentos em outra aba e imprimir.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-24",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Parecer por deferimento ou indeferimento",
      "pedido": "Deve haver 5 opções para que o docente emita seu parecer: \n\n- Deve haver um botão para que o docente possa apenas clicar  deferir ou não deferir a solicitação, após isso, “salvar e enviar”, para que o sistema possa encaminhar ao Serviço de Graduação. O sistema de me informar desse encaminhamento.",
      "status": "Pendente",
      "resumo": "Oferecer a primeira das cinco opções de parecer: deferir ou não deferir, salvar e enviar ao Serviço de Graduação, avisando a secretaria.",
      "referencias": [
        {
          "paragrafo": 40,
          "texto": "Deve haver 5 opções para que o docente emita seu parecer: "
        },
        {
          "paragrafo": 41,
          "texto": "- Deve haver um botão para que o docente possa apenas clicar  deferir ou não deferir a solicitação, após isso, “salvar e enviar”, para que o sistema possa encaminhar ao Serviço de Graduação. O sistema de me informar desse encaminhamento."
        }
      ],
      "partes": [
        {
          "texto": "Oferecer a primeira das cinco opções de parecer: deferir ou não deferir, salvar e enviar ao Serviço de Graduação, avisando a secretaria.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-25",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Parecer no formulário impresso",
      "pedido": "- O docente visualiza e/ou baixa os documentos, podendo escrever o parecer no próprio formulário impresso, inserindo-o novamente no sistema (deve haver um botão para a inserção) e clicando no botão “salvar e enviar”. ",
      "status": "Pendente",
      "resumo": "Permitir baixar ou imprimir o formulário, inserir o documento preenchido e usar Salvar e enviar.",
      "referencias": [
        {
          "paragrafo": 42,
          "texto": "- O docente visualiza e/ou baixa os documentos, podendo escrever o parecer no próprio formulário impresso, inserindo-o novamente no sistema (deve haver um botão para a inserção) e clicando no botão “salvar e enviar”. "
        }
      ],
      "partes": [
        {
          "texto": "Permitir baixar ou imprimir o formulário, inserir o documento preenchido e usar Salvar e enviar.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-26",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Envio de arquivo de parecer",
      "pedido": "- Caso o docente visualize os arquivos e queira somente inserir o arquivo com o parecer, deve haver o botão de inserção, e após, “salvar e enviar”",
      "status": "Pendente",
      "resumo": "Oferecer inserção de um arquivo próprio de parecer após a consulta dos documentos, com Salvar e enviar. Compartilha o mecanismo de anexos com AD-25.",
      "referencias": [
        {
          "paragrafo": 43,
          "texto": "- Caso o docente visualize os arquivos e queira somente inserir o arquivo com o parecer, deve haver o botão de inserção, e após, “salvar e enviar”"
        }
      ],
      "partes": [
        {
          "texto": "Oferecer inserção de um arquivo próprio de parecer após a consulta dos documentos, com Salvar e enviar. Compartilha o mecanismo de anexos com AD-25.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-27",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Parecer digitado na tela",
      "pedido": "- Deve haver espaço para que o docente escreva sua decisão – com pelo menos 250 letras, na própria tela inicial (após visualizar os arquivos), depois, “salvar e enviar”",
      "status": "Pendente",
      "resumo": "Disponibilizar campo que comporte pelo menos 250 caracteres para a decisão do docente e a ação Salvar e enviar.",
      "referencias": [
        {
          "paragrafo": 44,
          "texto": "- Deve haver espaço para que o docente escreva sua decisão – com pelo menos 250 letras, na própria tela inicial (após visualizar os arquivos), depois, “salvar e enviar”"
        }
      ],
      "partes": [
        {
          "texto": "Disponibilizar campo que comporte pelo menos 250 caracteres para a decisão do docente e a ação Salvar e enviar.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-28",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Devolução pelo docente e prova",
      "pedido": "- Deve ser possível ao docente devolver a solicitação para ajustes, inserção de documentos, ou para que o aluno possa realizar uma prova para comprovação dos estudos. Nesse caso, o sistema envia a notificação com o despacho do docente para o solicitante, com cópia para mim.",
      "status": "Pendente",
      "resumo": "Permitir devolução para ajustes, documentos ou realização de prova; enviar o despacho ao aluno com cópia para a secretaria.",
      "referencias": [
        {
          "paragrafo": 45,
          "texto": "- Deve ser possível ao docente devolver a solicitação para ajustes, inserção de documentos, ou para que o aluno possa realizar uma prova para comprovação dos estudos. Nesse caso, o sistema envia a notificação com o despacho do docente para o solicitante, com cópia para mim."
        }
      ],
      "partes": [
        {
          "texto": "Permitir devolução para ajustes, documentos ou realização de prova; enviar o despacho ao aluno com cópia para a secretaria.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-29",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Acesso do Serviço de Graduação por link",
      "pedido": "- Se possível, o Serviço de Graduação não precisar se cadastrar no sistema para acessar esses documentos, apenas abrindo o link do informe enviado pelo sistema, o Serviço vai diretamente na solicitação finalizada pelo docente, onde poderá baixar os arquivos, ou apenas visualizar. ",
      "status": "Definir",
      "resumo": "Avaliar e definir o acesso por link, sem cadastro, à solicitação finalizada, para consulta e download de arquivos. É uma possibilidade condicionada no documento.",
      "referencias": [
        {
          "paragrafo": 46,
          "texto": "- Se possível, o Serviço de Graduação não precisar se cadastrar no sistema para acessar esses documentos, apenas abrindo o link do informe enviado pelo sistema, o Serviço vai diretamente na solicitação finalizada pelo docente, onde poderá baixar os arquivos, ou apenas visualizar. "
        }
      ],
      "partes": [
        {
          "texto": "Avaliar e definir o acesso por link, sem cadastro, à solicitação finalizada, para consulta e download de arquivos. É uma possibilidade condicionada no documento.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-30",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Conclusão ao acessar os documentos",
      "pedido": "- O processo será considerado concluído quando o SVG clicar no link para acessar os documentos da solicitação, que deve aparecer como deferida ou não deferida (tudo deve ser o mais prático possível para o SVG e para o Departamento).",
      "status": "Pendente",
      "resumo": "Registrar o acesso do Serviço de Graduação ao link e concluir o processo com a indicação deferida ou não deferida.",
      "referencias": [
        {
          "paragrafo": 47,
          "texto": "- O processo será considerado concluído quando o SVG clicar no link para acessar os documentos da solicitação, que deve aparecer como deferida ou não deferida (tudo deve ser o mais prático possível para o SVG e para o Departamento)."
        }
      ],
      "partes": [
        {
          "texto": "Registrar o acesso do Serviço de Graduação ao link e concluir o processo com a indicação deferida ou não deferida.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-31",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Guarda dos documentos por dois anos",
      "pedido": " Todos os documentos devem ficar guardados, por pelo menos 2 anos.",
      "status": "Pendente",
      "resumo": "Manter todos os documentos do processo guardados por pelo menos dois anos.",
      "referencias": [
        {
          "paragrafo": 48,
          "texto": " Todos os documentos devem ficar guardados, por pelo menos 2 anos."
        }
      ],
      "partes": [
        {
          "texto": "Manter todos os documentos do processo guardados por pelo menos dois anos.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-32",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Aviso de conclusão",
      "pedido": "Na conclusão do processo, o sistema deve enviar notificação de conclusão da solicitação para o mim, com cópia para o solicitante.",
      "status": "Pendente",
      "resumo": "Notificar a secretaria da conclusão e enviar cópia ao solicitante.",
      "referencias": [
        {
          "paragrafo": 49,
          "texto": "Na conclusão do processo, o sistema deve enviar notificação de conclusão da solicitação para o mim, com cópia para o solicitante."
        }
      ],
      "partes": [
        {
          "texto": "Notificar a secretaria da conclusão e enviar cópia ao solicitante.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-33",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Aproveitamento de estudos",
      "titulo": "Relatórios e exportação Excel",
      "pedido": "- Poder filtrar e emitir relatórios com as informações que desejar: nome do aluno, nome do docente responsável, código da disciplina para à qual foi solicitado o aproveitamento, datas, deferidos e não deferidos; Baixar em excel.",
      "status": "Pendente",
      "resumo": "Filtrar e exportar aluno, docente responsável, código da disciplina, datas e resultado deferido/não deferido.",
      "referencias": [
        {
          "paragrafo": 50,
          "texto": "- Poder filtrar e emitir relatórios com as informações que desejar: nome do aluno, nome do docente responsável, código da disciplina para à qual foi solicitado o aproveitamento, datas, deferidos e não deferidos; Baixar em excel."
        }
      ],
      "partes": [
        {
          "texto": "Filtrar e exportar aluno, docente responsável, código da disciplina, datas e resultado deferido/não deferido.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-34",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Formulários de defesa dentro do sistema",
      "pedido": "Nova Aba - Atas de defesas:  Se conseguir fazer novos itens com os formulários específicos para cada tipo de defesa: TCC, Monografia, Estágios, e depois salvar em PDF editável.\n\nCaso seja possível incluir as atas como páginas do sistema, para baixar ou imprimir PDF, ficaria da seguinte forma:",
      "status": "Definir",
      "resumo": "Definir a solução preferencial: formulários próprios para TCC, Monografia e Estágios, com impressão/download e PDF editável. O fluxo de anexos AD-38 a AD-41 é a alternativa se os formulários não forem adotados.",
      "referencias": [
        {
          "paragrafo": 51,
          "texto": "Nova Aba - Atas de defesas:  Se conseguir fazer novos itens com os formulários específicos para cada tipo de defesa: TCC, Monografia, Estágios, e depois salvar em PDF editável."
        },
        {
          "paragrafo": 52,
          "texto": "Caso seja possível incluir as atas como páginas do sistema, para baixar ou imprimir PDF, ficaria da seguinte forma:"
        }
      ],
      "partes": [
        {
          "texto": "Definir a solução preferencial: formulários próprios para TCC, Monografia e Estágios, com impressão/download e PDF editável. O fluxo de anexos AD-38 a AD-41 é a alternativa se os formulários não forem adotados.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-35",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Preenchimento por aluno ou orientador e composição da banca",
      "pedido": "- Aluno (externo ao departamento) ou orientador acessa a página e escolhe o tipo de defesa que fará. Preenche os dados, com possibilidade de escrever ou selecionar do sistema os membros da banca (na maioria das vezes apenas o orientador é do departamento, os demais membros, são externos. ",
      "status": "Pendente",
      "resumo": "No fluxo com formulários, permitir ao aluno externo ou orientador escolher o tipo de defesa e cadastrar ou selecionar os membros internos e externos da banca.",
      "referencias": [
        {
          "paragrafo": 53,
          "texto": "- Aluno (externo ao departamento) ou orientador acessa a página e escolhe o tipo de defesa que fará. Preenche os dados, com possibilidade de escrever ou selecionar do sistema os membros da banca (na maioria das vezes apenas o orientador é do departamento, os demais membros, são externos. "
        }
      ],
      "partes": [
        {
          "texto": "No fluxo com formulários, permitir ao aluno externo ou orientador escolher o tipo de defesa e cadastrar ou selecionar os membros internos e externos da banca.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-36",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Impressão, inclusão e finalização da ata",
      "pedido": "Ao final da defesa, a ata pode ser impressa para que os membros externos assinem pessoalmente ou eletronicamente. De todo modo, a Ata final, deve ficar gravada no sistema, que também deve ter botão de “Inserir” e  de “Finalizar”. ",
      "status": "Pendente",
      "resumo": "Imprimir a ata para assinatura presencial ou eletrônica, guardar a versão final e disponibilizar Inserir e Finalizar. O texto não especifica uma integração de assinatura eletrônica.",
      "referencias": [
        {
          "paragrafo": 54,
          "texto": "Ao final da defesa, a ata pode ser impressa para que os membros externos assinem pessoalmente ou eletronicamente. De todo modo, a Ata final, deve ficar gravada no sistema, que também deve ter botão de “Inserir” e  de “Finalizar”. "
        }
      ],
      "partes": [
        {
          "texto": "Imprimir a ata para assinatura presencial ou eletrônica, guardar a versão final e disponibilizar Inserir e Finalizar. O texto não especifica uma integração de assinatura eletrônica.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-37",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Relatórios das atas",
      "pedido": "Poder emitir relatório das atas por: ano, mês, orientador (docente responsável), nome do aluno, curso do aluno.\n\n- Poder emitir relatório das atas por: ano, mês, orientador (docente responsável), nome do aluno, curso do aluno.",
      "status": "Pendente",
      "resumo": "Filtrar e emitir relatórios por ano, mês, orientador, aluno e curso. É o mesmo relatório nos dois caminhos de cadastro.",
      "referencias": [
        {
          "paragrafo": 55,
          "texto": "Poder emitir relatório das atas por: ano, mês, orientador (docente responsável), nome do aluno, curso do aluno."
        },
        {
          "paragrafo": 67,
          "texto": "- Poder emitir relatório das atas por: ano, mês, orientador (docente responsável), nome do aluno, curso do aluno."
        }
      ],
      "partes": [
        {
          "texto": "Filtrar e emitir relatórios por ano, mês, orientador, aluno e curso. É o mesmo relatório nos dois caminhos de cadastro.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-38",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Alternativa de cadastro por envio de arquivo",
      "pedido": "Esse encaminhamento abaixo ocorrerá no caso de não conseguir fazer os formulários no próprio sistema.\n\nNa página inicial deve haver o botão “incluir nova Ata”.\n\nEsta inclusão pode ser feita pelo docente/orientador, pelo aluno (Externo ao LES) ou pela secretaria (exceção).\n\nAbrindo a tela para que sejam inseridas as informações:",
      "status": "Definir",
      "resumo": "Se não houver formulários no sistema, oferecer Incluir nova Ata para docente/orientador, aluno externo ao LES e secretaria em exceção. Alternativa ao editor de AD-34, não uma segunda implementação obrigatória.",
      "referencias": [
        {
          "paragrafo": 56,
          "texto": "Esse encaminhamento abaixo ocorrerá no caso de não conseguir fazer os formulários no próprio sistema."
        },
        {
          "paragrafo": 57,
          "texto": "Na página inicial deve haver o botão “incluir nova Ata”."
        },
        {
          "paragrafo": 58,
          "texto": "Esta inclusão pode ser feita pelo docente/orientador, pelo aluno (Externo ao LES) ou pela secretaria (exceção)."
        },
        {
          "paragrafo": 59,
          "texto": "Abrindo a tela para que sejam inseridas as informações:"
        }
      ],
      "partes": [
        {
          "texto": "Se não houver formulários no sistema, oferecer Incluir nova Ata para docente/orientador, aluno externo ao LES e secretaria em exceção. Alternativa ao editor de AD-34, não uma segunda implementação obrigatória.",
          "entrega": null,
          "situacao": "Definir",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-39",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Dados do cadastro alternativo",
      "pedido": "- Docente e número USP (puxado do cronograma), ou deixando opção de digitação\n\n- Nome do aluno: Opção de digitar, \n\n- Número USP do aluno\n\n- Curso do aluno: (puxado da disciplina ou digitado)\n\n- Data, hora e local da realização (tem a lista de salas no sistema).",
      "status": "Pendente",
      "resumo": "No caminho de anexação, registrar docente e número USP, nome e número USP do aluno, curso, data, hora e local; consultar cronograma, disciplinas e salas, com digitação onde prevista.",
      "referencias": [
        {
          "paragrafo": 60,
          "texto": "- Docente e número USP (puxado do cronograma), ou deixando opção de digitação"
        },
        {
          "paragrafo": 61,
          "texto": "- Nome do aluno: Opção de digitar, "
        },
        {
          "paragrafo": 62,
          "texto": "- Número USP do aluno"
        },
        {
          "paragrafo": 63,
          "texto": "- Curso do aluno: (puxado da disciplina ou digitado)"
        },
        {
          "paragrafo": 64,
          "texto": "- Data, hora e local da realização (tem a lista de salas no sistema)."
        }
      ],
      "partes": [
        {
          "texto": "No caminho de anexação, registrar docente e número USP, nome e número USP do aluno, curso, data, hora e local; consultar cronograma, disciplinas e salas, com digitação onde prevista.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-40",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Upload da ata no cadastro alternativo",
      "pedido": "O docente ou aluno inclui o arquivo da ATA e salva. ",
      "status": "Pendente",
      "resumo": "Permitir ao docente ou aluno anexar o arquivo da ata e salvar no fluxo alternativo.",
      "referencias": [
        {
          "paragrafo": 65,
          "texto": "O docente ou aluno inclui o arquivo da ATA e salva. "
        }
      ],
      "partes": [
        {
          "texto": "Permitir ao docente ou aluno anexar o arquivo da ata e salvar no fluxo alternativo.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-41",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Quantidade, prazo e permissões após inclusão",
      "pedido": "Não há prazos nem limitações para a inclusão das atas, o docente pode incluir quantas precisar. Após a inserção, somente ADMs conseguem alterar, excluir.",
      "status": "Pendente",
      "resumo": "Permitir inclusões sem limite de quantidade ou prazo; após inserir, somente administradores podem alterar ou excluir.",
      "referencias": [
        {
          "paragrafo": 66,
          "texto": "Não há prazos nem limitações para a inclusão das atas, o docente pode incluir quantas precisar. Após a inserção, somente ADMs conseguem alterar, excluir."
        }
      ],
      "partes": [
        {
          "texto": "Permitir inclusões sem limite de quantidade ou prazo; após inserir, somente administradores podem alterar ou excluir.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-42",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Atas de defesa",
      "titulo": "Modelos por curso e formulários para download",
      "pedido": "ATAS DE DEFESAS \n\nTCC - ADM\n\nhttps://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/Form_Aval__ADM_2026.pdf\n\nTCC – Ciências Biológicas \n\nhttps://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/ANEXO_II_form_aval_TCC_CB_maio_23.pdf\n\nTCC – Ciências dos Alimentos\n\nhttps://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/formulario_avaliacao_TCC_2025_new.pdf\n\nTCC – Engenharia Agronômica\n\nhttps://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_agron_nov21.pdf\n\nTCC – Engenharia Florestal\n\nhttps://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_flor_nov21.pdf\n\nTCC – Gestão Ambiental\n\nhttps://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_gestao_nov21.pdf\n\nMonografia - Ciências Econômicas\n\nhttps://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/Form_Aval_C_ECON_2026.pdf\n\nFormulários de Avaliações de Estágios\n\nEstágio Profissionalizante – Ciências dos Alimentos \n\nhttps://docs.google.com/document/d/1HNyzQgJyt7NtBpNou9C11UZjPiGIB8MR/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true\n\nEstágio Profissionalizante demais cursos\n\nhttps://docs.google.com/document/d/1H0i0Hgr_7UngqDx7cNK1c6ZDuqSISrO8/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true\n\n Estágio Vivencial \n\nhttps://docs.google.com/document/d/1yihy2PXIPgFJ0D-gW8UUy862ODSS6K27/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true\n\nTodos os formulários poderão ser impressos ou baixados para edição, caso o docente prefira não digitar diretamente no Sistema.",
      "status": "Pendente",
      "resumo": "Usar os dez modelos de TCC, Monografia e Estágios referenciados no documento. Permitir imprimir ou baixar para edição externa, conforme a preferência do docente. Os links originais estão nas referências.",
      "referencias": [
        {
          "paragrafo": 70,
          "texto": "ATAS DE DEFESAS "
        },
        {
          "paragrafo": 72,
          "texto": "TCC - ADM"
        },
        {
          "paragrafo": 73,
          "texto": "https://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/Form_Aval__ADM_2026.pdf"
        },
        {
          "paragrafo": 75,
          "texto": "TCC – Ciências Biológicas "
        },
        {
          "paragrafo": 76,
          "texto": "https://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/ANEXO_II_form_aval_TCC_CB_maio_23.pdf"
        },
        {
          "paragrafo": 77,
          "texto": "TCC – Ciências dos Alimentos"
        },
        {
          "paragrafo": 78,
          "texto": "https://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/formulario_avaliacao_TCC_2025_new.pdf"
        },
        {
          "paragrafo": 80,
          "texto": "TCC – Engenharia Agronômica"
        },
        {
          "paragrafo": 81,
          "texto": "https://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_agron_nov21.pdf"
        },
        {
          "paragrafo": 83,
          "texto": "TCC – Engenharia Florestal"
        },
        {
          "paragrafo": 84,
          "texto": "https://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_flor_nov21.pdf"
        },
        {
          "paragrafo": 86,
          "texto": "TCC – Gestão Ambiental"
        },
        {
          "paragrafo": 87,
          "texto": "https://www.esalq.usp.br/graduacao/sites/default/files/tcc_form_aval_gestao_nov21.pdf"
        },
        {
          "paragrafo": 89,
          "texto": "Monografia - Ciências Econômicas"
        },
        {
          "paragrafo": 90,
          "texto": "https://www.esalq.usp.br/graduacao/wp-content/uploads/2026/08/Form_Aval_C_ECON_2026.pdf"
        },
        {
          "paragrafo": 92,
          "texto": "Formulários de Avaliações de Estágios"
        },
        {
          "paragrafo": 93,
          "texto": "Estágio Profissionalizante – Ciências dos Alimentos "
        },
        {
          "paragrafo": 94,
          "texto": "https://docs.google.com/document/d/1HNyzQgJyt7NtBpNou9C11UZjPiGIB8MR/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true"
        },
        {
          "paragrafo": 95,
          "texto": "Estágio Profissionalizante demais cursos"
        },
        {
          "paragrafo": 96,
          "texto": "https://docs.google.com/document/d/1H0i0Hgr_7UngqDx7cNK1c6ZDuqSISrO8/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true"
        },
        {
          "paragrafo": 97,
          "texto": " Estágio Vivencial "
        },
        {
          "paragrafo": 98,
          "texto": "https://docs.google.com/document/d/1yihy2PXIPgFJ0D-gW8UUy862ODSS6K27/edit?usp=sharing&ouid=107240220449817109273&rtpof=true&sd=true"
        },
        {
          "paragrafo": 100,
          "texto": "Todos os formulários poderão ser impressos ou baixados para edição, caso o docente prefira não digitar diretamente no Sistema."
        }
      ],
      "partes": [
        {
          "texto": "Usar os dez modelos de TCC, Monografia e Estágios referenciados no documento. Permitir imprimir ou baixar para edição externa, conforme a preferência do docente. Os links originais estão nas referências.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-43",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Nova aba baseada no formulário atual",
      "pedido": "Nova Aba - Viagens Didáticas \n\n- Criar a aba com base no formulário existente;\n\n- Demais itens, conforme o formulário - https://forms.gle/VqCjaG8mJW9dBAX39",
      "status": "Pendente",
      "resumo": "Criar a tela de solicitações conforme o formulário indicado no documento. Os demais campos do formulário externo precisam ser conferidos antes da implementação.",
      "referencias": [
        {
          "paragrafo": 102,
          "texto": "Nova Aba - Viagens Didáticas "
        },
        {
          "paragrafo": 103,
          "texto": "- Criar a aba com base no formulário existente;"
        },
        {
          "paragrafo": 108,
          "texto": "- Demais itens, conforme o formulário - https://forms.gle/VqCjaG8mJW9dBAX39"
        }
      ],
      "partes": [
        {
          "texto": "Criar a tela de solicitações conforme o formulário indicado no documento. Os demais campos do formulário externo precisam ser conferidos antes da implementação.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-44",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Período para inclusão das solicitações",
      "pedido": "- Item com datas para que eu possa cadastrar o período das inserções;",
      "status": "Pendente",
      "resumo": "Permitir à secretaria cadastrar as datas que delimitam o período de inserção.",
      "referencias": [
        {
          "paragrafo": 104,
          "texto": "- Item com datas para que eu possa cadastrar o período das inserções;"
        }
      ],
      "partes": [
        {
          "texto": "Permitir à secretaria cadastrar as datas que delimitam o período de inserção.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-45",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Docente, disciplina e contato",
      "pedido": "- Solicitante pode selecionar do sistema o docente responsável (solicitante), \n\n- Código e nome da disciplina. \n\n- Telefone de contato.",
      "status": "Pendente",
      "resumo": "Selecionar o docente responsável/solicitante e registrar código e nome da disciplina e telefone de contato.",
      "referencias": [
        {
          "paragrafo": 105,
          "texto": "- Solicitante pode selecionar do sistema o docente responsável (solicitante), "
        },
        {
          "paragrafo": 106,
          "texto": "- Código e nome da disciplina. "
        },
        {
          "paragrafo": 107,
          "texto": "- Telefone de contato."
        }
      ],
      "partes": [
        {
          "texto": "Selecionar o docente responsável/solicitante e registrar código e nome da disciplina e telefone de contato.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-46",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Notificação de cada solicitação",
      "pedido": "- Sistema deve me notificar todas as solicitações que chegarem;",
      "status": "Pendente",
      "resumo": "Notificar a secretaria sobre todas as novas solicitações recebidas.",
      "referencias": [
        {
          "paragrafo": 109,
          "texto": "- Sistema deve me notificar todas as solicitações que chegarem;"
        }
      ],
      "partes": [
        {
          "texto": "Notificar a secretaria sobre todas as novas solicitações recebidas.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-47",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Relatórios por período e docente",
      "pedido": "- Poder baixar relatórios por períodos e por docentes (solicitante). ",
      "status": "Pendente",
      "resumo": "Filtrar e baixar relatórios por período e por docente solicitante.",
      "referencias": [
        {
          "paragrafo": 110,
          "texto": "- Poder baixar relatórios por períodos e por docentes (solicitante). "
        }
      ],
      "partes": [
        {
          "texto": "Filtrar e baixar relatórios por período e por docente solicitante.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    },
    {
      "id": "AD-48",
      "fonte": "Adicional",
      "documento": "Adiçoes do SIGLES.docx",
      "tela": "Viagens didáticas",
      "titulo": "Download da solicitação completa",
      "pedido": "- Poder baixar a solicitação completa, isoladamente ou todas do período.",
      "status": "Pendente",
      "resumo": "Baixar uma solicitação completa individualmente ou todas as solicitações de um período.",
      "referencias": [
        {
          "paragrafo": 111,
          "texto": "- Poder baixar a solicitação completa, isoladamente ou todas do período."
        }
      ],
      "partes": [
        {
          "texto": "Baixar uma solicitação completa individualmente ou todas as solicitações de um período.",
          "entrega": null,
          "situacao": "Pendente",
          "cobranca": "Aditivo"
        }
      ]
    }
  ],
  "planejamentoTecnico": {
    "url": "tecnico/index.html",
    "data": "16/10/2026",
    "status": "Revisão técnica e documental concluída; decisões de negócio e execução pendentes",
    "revisao": "02"
  }
};
