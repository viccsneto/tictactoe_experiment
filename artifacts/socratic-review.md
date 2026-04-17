# Revisão Socrática - TicTacToe Experiment

## Resumo da Revisão
Esta revisão socrática foi realizada para avaliar o domínio do desenvolvedor sobre as implementações das Tarefas 1 e 2 do projeto TicTacToe. O foco foi testar o entendimento do código, lógica de funcionamento e decisões de design.

## Perguntas e Respostas
1. **Por que `createInitialState()` precisa retornar `scores` junto com `board`, `current` e `gameOver`?**
   - **Resposta do Desenvolvedor:** Essa função define a estrutura do estado da aplicação, retornando o score, garante que o jogo carregue as pontuações iniciais dos jogadores para que não tenham erros.
   - **Avaliação:** Correta. A função estabelece o estado completo, incluindo scores zerados, evitando erros de referência.

2. **Como `restartGame()` garante que o placar não seja zerado quando um novo jogo começa?**
   - **Resposta do Desenvolvedor:** O valor do score ainda fica salvo por conta do state.scores que é utilizado antes de ser chamado o método que resetaria o tabuleiro.
   - **Avaliação:** Correta. O código salva `currentScores = state.scores` antes de recriar o estado e o restaura.

3. **O que acontece com `state.scores` quando o resultado do jogo é empate (`winner === null`)?**
   - **Resposta do Desenvolvedor:** Não acontece nada, nenhum dos jogadores ganha o ponto, pois ninguém venceu a partida.
   - **Avaliação:** Correta. `updateScores` só incrementa se `winner` for truthy.

4. **Qual teste garante que o placar do vencedor realmente aumenta?**
   - **Resposta do Desenvolvedor:** UpdateScores, onde ocorre alguns casos de pontuação, vitória do gato, do cachorro ou caso de velha.
   - **Avaliação:** Refere-se aos testes de `updateScores`, que cobrem incrementos para 🐱 e 🐶, e ausência de incremento para draw.

5. **Você quer que eu adicione um teste adicional para verificar o comportamento de reinício do placar após uma vitória?**
   - **Resposta do Desenvolvedor:** Pode adicionar.
   - **Avaliação:** Teste adicional adicionado para verificar persistência de scores em múltiplas atualizações.

## Conclusão da Revisão
O desenvolvedor demonstrou bom entendimento da lógica implementada, respondendo corretamente às perguntas sobre estado, persistência de scores e comportamento em diferentes cenários. Pequenos erros de digitação não afetam o domínio técnico.

**Status:** Domínio demonstrado. Pronto para prosseguir.