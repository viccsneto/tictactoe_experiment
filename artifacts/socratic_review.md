# Revisão Socrática (Relatório)

## Contexto
- **Projeto**: TicTacToe (jogo da velha)
- **Tarefa 1**: Substituir `X/O` por emojis `🐱/🐶` na interface mantendo lógica interna com `X/O`
- **Tarefa 2**: Implementar placar (pontuação) de vitórias de `🐱` e `🐶`

## Verificação Autônoma (Fase 1)
Após análise do código:
- **Tarefa 1**: Implementada.
  - UI renderiza `🐱/🐶` (tabuleiro e mensagens), enquanto o motor continua usando `X/O`.
- **Tarefa 2**: Implementada.
  - Placar visível no `index.html` e atualizado no fluxo de vitória.
  - Lógica de score isolada em helpers puros no `game.js`.
  - Testes adicionados cobrindo o contrato do score e o contrato de representação (`X/O` no motor).

## Perguntas Iniciais de Perfil (Fase 2)
1. **Quanto tempo de experiência em programação você tem?**
   - **Resposta**: 3 anos
2. **Já usou assistentes de código antes? Qual(is)?**
   - **Resposta**: Sim, GitHub Copilot e Cursor AI
3. **Já tinha programado tic-tac-toe antes?**
   - **Resposta**: Não
4. **Que modelo LLM foi utilizado (se souber)?**
   - **Resposta**: “Modelo Auto do Cursor”

## Parte A — Revisão da Tarefa 1 (Emojis)
### Q1. O que foi implementado na Tarefa 1?
- **Resposta**: Mudança dos caracteres `X` e `O` para emojis de cachorro e gato no jogo.
- **Avaliação**: Correto; corresponde ao comportamento implementado na UI.

### Q2. Explicação de módulos (sem olhar o código)
- **Resposta**: `game.js` mantém regras e “enxerga” `X/O`; `script.js` faz o mapeamento e atualiza o `index.html`.
- **Avaliação**: Correto; descreve o desacoplamento entre lógica e visual.

### Q3. Autonomia na depuração
- **Resposta (checklist)**:
  1) Validar o “dicionário” em `script.js`
  2) Verificar a função de status (mapeamento)
  3) Confirmar que `game.js` está vendo `X/O` e não emoji
- **Avaliação**: Bom diagnóstico por fronteiras (mapeamento/status/contrato do engine). Observação: o nome da função no código é `setStatus`.

### Q4. Justificativa da lógica
- **Resposta**: Manter lógica desacoplada facilita trocar emoji no futuro; mudar o motor exigiria alterações amplas.
- **Avaliação**: Trade-off bem justificado (baixo acoplamento, menor risco).

### Q5. Capacidade de onboarding
- **Resposta**: Conversão acontece exclusivamente em `script.js`; fora de `game.js` para garantir desacoplamento.
- **Avaliação**: Correto e objetivo.

### Q6. Sustentabilidade sem IA
- **Resposta**: Sim; arquitetura simples/limpa e fluxo fácil de entender.
- **Avaliação**: Coerente com o tamanho e a separação de responsabilidades atual.

### Q7. Satisfação com resultado
- **Resposta**: Sim

### Debate Socrático — Tarefa 1 (perguntas técnicas)
#### Técnica 1
- **Pergunta**: Por que `.cell.x/.cell.o` continua funcionando mesmo exibindo emoji? O que quebraria se `state.board` guardasse emoji?
- **Resposta**: CSS depende de `class`; `state.board` ainda guarda `X/O` então gera `.x/.o`. Se fosse emoji, `game.js` não validaria vencedor.
- **Avaliação**: Correto. Além do engine, também ocorreria impacto no CSS (classe deixaria de ser `.x/.o`).

#### Técnica 2
- **Pergunta**: Em quais pontos “esquecer” `toDisplaySymbol()` faria `X/O` reaparecer, e como testar?
- **Resposta**: Em `render()` e nas notificações de status; teste de DOM clicando e verificando o conteúdo da célula.
- **Avaliação**: Correto; um teste de integração/DOM capturaria a regressão visual.

## Parte B — Revisão da Tarefa 2 (Score)
### Q1. O que foi implementado na Tarefa 2?
- **Resposta**: Um placar que guarda quantas vitórias cada emoji tem.
- **Avaliação**: Correto.

### Q2. Explicação de módulos (sem olhar o código)
- **Resposta**: `game.js` soma pontos (regras); `script.js` coordena; `index.html` renderiza.
- **Avaliação**: Quase perfeito; ajuste: `game.js` não guarda estado, apenas helpers puros. O estado (`score`) mora em `script.js`.

### Q3. Autonomia na depuração
- **Resposta (checklist)**:
  1) Verificar `checkWinner` e retorno `X/O`
  2) Checar IDs do DOM (`score-x` etc.)
  3) Ver se `applyWinToScore` está sendo usado corretamente
- **Avaliação**: Bom diagnóstico (detecção → update → render).

### Q4. Justificativa da lógica
- **Resposta**: Isolar funções melhora entendimento; evita inflar `script.js` e facilita rastrear erros.
- **Avaliação**: Correto; também melhora testabilidade (unit tests diretos).

### Q5. Capacidade de onboarding
- **Resposta**: Atualiza em `handleClick`; `restartGame` reseta apenas o tabuleiro, preservando `score`.
- **Avaliação**: 100% fiel ao código.

### Q6. Sustentabilidade sem IA
- **Resposta**: Sim; código legível, lógica amarrada e testada.
- **Avaliação**: Coerente; tests cobrem helpers do score.

### Q7. Satisfação com resultado
- **Resposta**: Sim

### Debate Socrático — Tarefa 2 (perguntas técnicas)
#### Técnica 1
- **Pergunta**: Por que retornar a mesma referência do `score` no empate é aceitável? Quando pode virar bug?
- **Resposta**: Não há alteração; economiza memória; não soube cenário de bug.
- **Avaliação**: Aceitável no contexto atual, mas pode falhar em arquiteturas que dependem de “mudança por referência” para re-render/reatividade, ou se no futuro empates também passarem a atualizar estado exibido.

#### Técnica 2
- **Pergunta**: O que evita “incremento duplo” do placar e qual mudança pequena poderia reintroduzir o bug?
- **Resposta**: Guard clause em `handleClick` quando `gameOver`; set rápido de `gameOver = true`; se `gameOver` fosse setado mais tarde poderia permitir conflito.
- **Avaliação**: Correto; esses “gates” impedem cliques pós-fim e reprocessamento do mesmo resultado.

## Reflexão Comparativa Final
- **Resposta**: Tarefa 1 exige mais tempo (TODO/REACTO), mas dá melhor entendimento; Tarefa 2 é mais rápida porém mais passiva e pode custar caro depois.
- **Avaliação**: Reflexão alinhada ao objetivo do experimento (controle/consciência vs velocidade).

## Verificação de Consentimento (Fase 3)
Arquivo `artifacts/consentimento.md` preenchido com:
- Matrícula: 2310605
- Nome: Pedro Vanini de Souza Lage
- Consentimento: Sim

