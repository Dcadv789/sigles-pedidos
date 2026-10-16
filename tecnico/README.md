# SIGLES — Ordem de implementação e planos técnicos

**Data:** 16/10/2026. **Status:** oito planos concluídos para revisão; nenhuma implementação funcional iniciada.

[Revisar na página](https://dcadv789.github.io/sigles-pedidos/tecnico/)

Primeiro fechar as entregas 1 a 4; depois executar 5, 6, 7 e 8. Cada arquivo contém diagnóstico, arquivos/linhas conferidos, passos de alteração, dados, dependências, decisões e testes de aceite por item. Aditivos continuam fora.

| Ordem | Plano | Itens | Etapa |
|---|---|---:|---|
| 1 | [Entrega 1 — Cadastros, usuários e compras](entrega-01.md) | 6 | Fechamento de entrega existente |
| 2 | [Entrega 2 — Disciplinas, relatórios, planos e login](entrega-02.md) | 4 | Fechamento de entrega existente |
| 3 | [Entrega 3 — Ordens de serviço, orçamentos e aniversários](entrega-03.md) | 5 | Fechamento e homologação |
| 4 | [Entrega 4 — Integração e conclusão dos cronogramas](entrega-04.md) | 7 | Integração da PR 9 e homologação |
| 5 | [Entrega 5 — Usabilidade, cadastros e acesso](entrega-05.md) | 4 | Escopo inicial restante |
| 6 | [Entrega 6 — Fornecedores e operação administrativa](entrega-06.md) | 4 | Escopo inicial restante |
| 7 | [Entrega 7 — Complementos acadêmicos e consolidações](entrega-07.md) | 4 | Escopo inicial restante |
| 8 | [Entrega 8 — Agenda, reservas externas, integrações e estudos](entrega-08.md) | 8 | Escopo inicial restante |

## Como tratar os fechamentos sem duplicar o plano anterior

Datas de compras, ordenação de usuários e antecedência por perfil são fechadas na entrega 1. Colunas/Excel de Disciplinas e Crédito no relatório são fechados na 2. Seguidores, responsáveis e complementos de OS são fechados na 3. Exportação de cursos e filtros incompletos da PR são fechados na 4. Os respectivos grupos macro de 5 a 8 agora apontam para esses planos; o mesmo resultado não será implementado duas vezes.

Os percentuais 15/15/20/50 continuam como referência do planejamento macro original, não como uma medição recalculada após antecipar essas pendências. Conferir a distribuição de esforço depois do fechamento das regras.

## Achados técnicos prioritários

1. PR 9 antiga e conflitante: preservar os hotfixes da dev e reaplicar apenas o incremento de cronogramas (E4-01).
2. Seguidores: lista vazia não é persistida na edição e há corrida possível entre padrões e dados da OS (E3-01).
3. Aviso de contratos/férias: janela fixa de 30 dias e perfis fixos, apesar do parâmetro por perfil (E1-04).
4. Encerramento de períodos: conciliar a matriz do texto inicial com o código que expira solicitações em andamento (E1-05).
5. Migration de sala_aula: rever o critério e a reversão que limpa flags indiscriminadamente (E4-06).

## Regras de execução

- Preservar Symfony 6.3, PHP 8.2, MariaDB, Twig, jQuery e DataTables; seguir o CRUD existente, sem nova stack, REST, Symfony Form novo ou camada Service por conveniência.
- Escrita de dados exclusivamente em esalq_sistema_des. A restrição de não escrever em produção continua válida. O workflow de produção executa migrations e não deve ser acionado enquanto essa restrição vigorar.
- Trabalhar em checkout limpo com branch codex/, mantendo as alterações locais de Cronograma do usuário. Não usar reset/checkout de arquivos para descartar trabalho existente.
- Novas ações internas devem validar ACL modular no servidor e no Twig. Rotas AJAX expostas, payload e toast/406 seguem o padrão atual; permissões da sessão exigem novo login para validação.
- SQL tocado usa parâmetros. Não interpolar valores da requisição; não refatorar a segurança inteira nem o CSRF de todos os módulos.
- Não alterar o bug conhecido de GAM/ROLE_ROOT por iniciativa própria. Conferir o código real GOÇ no módulo de orçamento e não copiar a ausência de ACL de PublicacaoController.
- Não commitar .env, .env.local, senhas, backups de ambiente, vendor/ ou uploads/. Referências de código deste plano apontam a commits fixos e podem exigir acesso ao GitHub.
- Criar migrations somente na implementação, após fechar a regra. Preservar migrations executadas e usar compensação seletiva de dados, não um down amplo que apague histórico.
- Os comandos e testes abaixo são planejados. Não foram executados testes funcionais do sistema, migrations, merge da PR ou deploy do SIGLES nesta etapa.

## Base da leitura

- dev: 3ed9a38415417b8a4ead22ecd472f758b3506db1
- PR 9: 13f5075b4685f7a26008e63810d38bd8516f558f; aberta e conflitante em 16/10/2026.
- Alterações locais do usuário foram preservadas.
- As evidências de código sustentam o plano, mas não substituem o teste funcional de cada cenário.
