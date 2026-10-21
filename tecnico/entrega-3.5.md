# Entrega 3.5 — Agenda, proteção das salas e estabilidade

**Atualizado em 21/10/2026 · Publicado em produção — v1.3.3; dados legados aguardam coordenação.**

[Índice](README.md) · [Decisões](INTEGRACAO_E_DECISOES.md) · [Cobertura](COBERTURA_E_CONFERENCIA.md)

## Entrada, resultado e situação

- Entrada: FECHO-3: Entrega 3 publicada.
- Situação: Publicado em produção — v1.3.3; dados legados aguardam coordenação.
- Preservar a base cumulativa e todos os controles já publicados.

## Situação dos dados antigos

Dados legados: 25 cruzamentos reserva/aula foram resolvidos por 23 remanejamentos autorizados. Restam 172 pares de ocorrências acadêmicas preexistentes para a coordenação: 21 entre disciplinas diferentes e 151 para confirmar identificação/compartilhamento. São alertas de dados antigos, não 172 novos agendamentos. Não remanejar automaticamente.

<a id="E3.5-01"></a>

## E3.5-01 — Bloqueio de reservas e concorrência por sala

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Criar, editar e reativar reservas verifica reservas, repetições, exceções e aulas da mesma sala, usando o ID do cadastro.
- Sobreposição parcial ou total é recusada; intervalos consecutivos são permitidos (04h30–05h30 pode anteceder 05h30–06h30).
- Revalidação dentro da transação com bloqueio das salas em ordem; tentativas simultâneas incompatíveis produzem uma gravação e um conflito.
- Datas brasileiras, limites inválidos e eventos que começam antes da janela consultada são tratados de forma consistente.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

### Rastreio dos pedidos

- VS-01:6 — Reservas, recorrências, disponibilidade, permissões de edição, bloqueio entre aulas e reservas, concorrência, consulta/edição da Agenda, Relatório de reservas e ajustes de login/sessão publicados na Entrega 3.5 (v1.3.1/v1.3.2/v1.3.3). · Entregue.

<a id="E3.5-02"></a>

## E3.5-02 — Recorrências e preservação de exceções

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Última data da série incluída; editar/dividir/inativar uma ocorrência, futuras ou série preserva as ocorrências e exceções aplicáveis.
- Troca de sala de apenas um dia usa exceção nativa; cancelar a confirmação não salva. Séries que se sobrepõem internamente não podem ser reativadas.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

### Rastreio dos pedidos

- WI-03:1 — Editar uma ocorrência preservando sala, outras ocorrências e a validação dos conflitos. · Entregue.
- WI-03:2 — Corrigir a diferença entre os campos de data usados na checagem de conflito e na gravação. · Entregue.
- WI-03:3 — Alterações e inativações desta ocorrência, futuras ou série, preservando exceções e sem salvar ao cancelar. · Entregue.
- WI-18:3 — Última data incluída, repetições protegidas e alteração de uma ocorrência preservando as demais. · Entregue.
- WI-18:4 — Inativar apenas uma ocorrência ou alterar sua sala sem apagar as demais ocorrências da série. · Entregue.

### Pendências detalhadas

- ER04 — Editar um evento sem perder a sala e sem conflito indevido com a própria reserva. **Entrega 3.5 — produção**: edição preserva a sala e usa as mesmas datas na checagem e gravação.
- ER05 — Editar eventos recorrentes corretamente. **Entrega 3.5 — produção**: edição/divisão/inativação de série ou ocorrência com preservação de exceções.
- AG01 — A recorrência incluir e apresentar corretamente a última data prevista. **Entrega 3.5 — produção**: última data incluída e conferida nas recorrências.
- AG03 — Excluir apenas um dia de uma reserva recorrente. **Entrega 3.5 — produção**: inativar uma ocorrência preserva as demais.
- AG03.1 — Trocar a sala somente em um dia de uma reserva recorrente, preservando os demais. **Entrega 3.5 — produção**: troca de sala de uma ocorrência por exceção nativa.

### Documentos originais (rastreio preservado)

**DI04 — Documento inicial SINGLES — ERROS / AGENDA — parágrafo 15**

> Ao editar uma informação em um evento já cadastrado, o sistema altera o que queremos, mas a sala some, ou seja, não dá para alterar o evento, o sistema obriga a criar outro em outra sala. 25/03/2026 - agora nem conseguimos alterar, pois o sistema apresenta a mensagem que a sala já está reservada.

**DI05 — Documento inicial SINGLES — ERROS / AGENDA — parágrafo 17**

> 26/03 - Sanada a questão de alteração do evento. Apenas para os eventos recorrentes não está sendo possível realizar alterações. Como não estava no escopo, ficará para depois. - URGENTE

**DI51 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 130**

> Na função “novo evento” está com erro ao efetuar reserva com recorrência, não aparece a última data.

**DI53 — Documento inicial SINGLES — AGENDA / Calendário — parágrafo 132**

> Possibilidade de excluir ou alterar sala somente um dia na reserva com recorrência.

**RV51 — Relatório de visita, página 4 — Detalhamento técnico: 10-) alteração de agenda**

> As funcionalidades relacionadas às alterações de agenda também deverão ser revisadas.

**Dependências:** E3.5-01.

<a id="E3.5-03"></a>

## E3.5-03 — Agenda e Relatório de reservas

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Título, Novo evento à esquerda, filtros, calendários em português e legendas padronizados; Relatório de reservas também reorganizado.
- Salas ocupadas continuam visíveis em cinza, não selecionáveis, com o motivo do bloqueio ao passar o mouse.
- Eventos exibem balão de detalhes; clique abre consulta e a edição só é liberada pela ação Editar, com permissão. Fechamento sem recarga ou piscada de opacidade.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

### Pendências detalhadas

- AG02.2 — Apresentação das salas ocupadas no seletor do evento. **Definido e aplicado na Entrega 3.5**: manter ocupadas em cinza, bloqueadas e com motivo, conforme Daniel.

**Dependências:** E3.5-01.

<a id="E3.5-04"></a>

## E3.5-04 — Permissões da Agenda e configuração de perfis

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Edição de reservas respeita GDRA.alterar no servidor e na interface; padrão aprovado: somente Administrador.
- Configuração das permissões de perfis restrita ao Administrador. Ajustes ficam em Gestão de acessos → Perfis → Módulos; novo login renova a sessão.
- As demais permissões de visualizar/criar seguem a matriz existente; não declarar que todo perfil pode criar eventos.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

**Dependências:** E3.5-01.

<a id="E3.5-05"></a>

## E3.5-05 — Bloqueio acadêmico: aulas, cópia e importação

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Cadastro, edição individual/em lote, importação, reativação e cópia de cronogramas validam aula × aula e aula × reserva, com proteção concorrente e rollback.
- Compartilhamento só é reconhecido para a mesma disciplina do semestre, turma preenchida, tipo, sala, dia, período completo e horários, com docentes diferentes.
- Cópias repetidas não duplicam os vínculos de docentes. Dados antigos com ocupação inalterada podem receber ajustes de metadados sem remanejamento automático.
- Entrega 4 herdou a proteção e a conciliou com seu próprio fluxo XLSX/cópia antes do primeiro flush.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

**Dependências:** E3.5-01.

<a id="E3.5-06"></a>

## E3.5-06 — Diagnóstico e tratamento de conflitos antigos

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Aviso Conflitos de agenda identifica disciplinas, turmas, cronogramas e horários; distingue sobreposição entre atividades e confirmação de compartilhamento.
- Dados legados: 25 cruzamentos reserva/aula foram resolvidos por 23 remanejamentos autorizados. Restam 172 pares de ocorrências acadêmicas preexistentes para a coordenação: 21 entre disciplinas diferentes e 151 para confirmar identificação/compartilhamento. São alertas de dados antigos, não 172 novos agendamentos. Não remanejar automaticamente.
- Remanejamentos autorizados preservaram aulas, duração e dados das reservas; 22 exceções individuais mantiveram as demais datas das séries. Não confundir saneamento de reservas com saneamento de cadastros duplicados de salas (E8-03).

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

**Dependências:** E3.5-01.

<a id="E3.5-07"></a>

## E3.5-07 — Login e estabilidade da sessão

**Situação:** Entregue em produção — v1.3.3.

Publicado nas versões 1.3.1/1.3.2 e complemento 1.3.3; escopo urgente antecipado, sem cobrança ou duplicação na Entrega 8.

- Entrada: Entrega 3 publicada, regras e matriz aprovadas por Daniel.
- Saída: Funcionalidade publicada e rastreada na Entrega 3.5.
- Limite: Preservar dados legados que aguardam coordenação; complementos futuros reutilizam a proteção.

### Funções, correções ou próximos passos

- Login com ícone de perfil no cabeçalho, ícones nos campos, placeholders e rótulos acessíveis; cartão até 460 px, cantos de 8 px e campos/botão de 6 px.
- Limpeza das sessões alinhada ao agendamento do servidor, evitando erro intermitente de permissão.

### Evidências registradas

- PR #40 e complemento #46; produção pela PR #47.
- 94 testes unitários/174 asserções e 187 verificações de integração do complemento, registrados em 20/10.
- Publicação v1.3.3: 80 verificações HTTP de reservas e 22 acadêmicas em homologação; tag final e regressões registradas no STATUS_DEPLOY.
- Deploy produção: https://github.com/Dcadv789/sigles/actions/runs/39527259499

### Banco e reversão

Nenhuma migration nova. Esta atualização documental não executa aplicação, deploy nem comandos de banco.

**Dependências:** E3.5-01.

## FECHO-3.5 — Fechamento

**Publicado em produção — v1.3.3; dados legados aguardam coordenação.**

Nenhum aceite pendente foi marcado concluído apenas por esta revisão documental.
