# Relatório da Revisão Socrática

## Perfil Inicial
- Experiência em programação: 4 anos aprendendo.
- Assistentes de IA usados: Claude Code e Copilot.
- Já programou Tic-Tac-Toe: Não.
- Modelo LLM usado: Claude Haiku (modelo automático no VSCode).

## Parte A: Revisão da Tarefa 1 (Emojis)
### Perguntas Reflexivas
1. **O que foi implementado na Tarefa 1?**  
   Resposta: Um dicionário e uma função em script.js para trocar a X pelo emoji de gato e a O pelo emoji de cachorro.

2. **Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?**  
   Resposta: A função displaySymbol troca a X ou a O pelo emoji, e a função se adiciona na parte onde se mostra um dos dois símbolos.

3. **Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?**  
   Resposta: Posso intentar provavelmente poderia com um pouco de dificuldades e ajuda de forums.

4. **Você compreende a razão fundamental por trás dessa escolha de implementação — isto é, por que usar um dicionário + função de exibição em vez de substituir diretamente `X`/`O` no estado do jogo?**  
   Resposta: Assim não trocamos a lógica do jogo e os testes não tem que ser modificados, a gente só troca a parte visual.

5. **Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna dessa funcionalidade sem que ele precise ler cada linha gerada pela IA?**  
   Resposta: Essa funcionalidade sim, mais coisas acho que não.

6. **O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?**  
   Resposta: Sim.

7. **Você ficou satisfeito(a) com o resultado?**  
   Resposta: Fiquei.

### Debate Socrático da Tarefa 1
1. **Pergunta socrática 1:** Se em vez de usar `displaySymbol(symbol)` você trocasse diretamente o valor do estado de `X` para `🐱` e `O` para `🐶`, o que poderia quebrar no restante do jogo?  
   Resposta: Os testes.  
   Avaliação: Correto, os testes unitários verificam `X`/`O` e falhariam se o estado fosse alterado.

2. **Pergunta socrática 2:** Qual é a vantagem de manter `X`/`O` no estado interno e só converter para emoji na renderização, em vez de alterar o estado do jogo para `🐱`/`🐶` diretamente?  
   Resposta: Não temos que trocar os testes.  
   Avaliação: Correto, evita mudanças desnecessárias nos testes e mantém a lógica pura.

## Parte B: Revisão da Tarefa 2 (Score)
### Perguntas Reflexivas
1. **O que foi implementado na Tarefa 2?**  
   Resposta: Implementar um score para gato e cachorro.

2. **Você consegue explicar como os componentes alterados ou criados para o score interagem entre si sem olhar para o código-fonte?**  
   Resposta: Não, só deixei fazer.

3. **Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?**  
   Resposta: Poderia tentar, acho que não é tão difícil, mas seria bem complicado.

4. **Você compreende a razão fundamental por trás dessa escolha específica de implementação do score — ou seja, por que você atualiza o estado do jogo e depois renderiza o placar na interface em vez de só calcular o resultado no momento em que ele é mostrado?**  
   Resposta: Não estou seguro, assim evita erros de cálculo e mostrar um valor que não é correto.

5. **Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna do score sem que ele precise ler cada linha gerada pela IA?**  
   Resposta: Depois de estudar o código, mas agora não.

6. **O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?**  
   Resposta: Depois de estudar sim, mas como já falei agora não.

7. **Você ficou satisfeito com o resultado da implementação do score?**  
   Resposta: Fiquei, funciona muito bem.

### Debate Socrático da Tarefa 2
1. **Pergunta socrática 1:** Como você garantiria que o score de `🐱` e `🐶` sempre permanece correto se a lógica de vitória mudar no futuro?  
   Resposta: Justamente se a condição mudasse, o score já está garantido, só tem que modificar os winning combos.  
   Avaliação: Correto, o score é atualizado baseado no resultado de `checkWinner`, que usa `WINNING_COMBOS`, então mudanças na lógica de vitória são isoladas.

2. **Pergunta socrática 2:** Se o score fosse atualizado em outro lugar errado do fluxo, por exemplo após `render()` ou fora do ramo `if (result.winner)`, o que poderia acontecer ao placar quando houver empate ou quando a partida reiniciar?  
   Resposta: Não se mostraria o resultado correto.  
   Avaliação: Correto, o score seria incrementado incorretamente, levando a valores errados no placar.

3. **Pergunta socrática 3:** Se alguém modificasse a função `restartGame()` para criar um novo estado sem preservar `scoreX`/`scoreO`, o que veríamos no placar depois de reiniciar a partida?  
   Resposta: Creio que só 0 no score de gato e cachorro, porque está no index.html, mas não mudaria depois de ganhar.  
   Avaliação: Correto, o placar voltaria a 0/0, perdendo o histórico.

## Reflexão Comparativa Final
**Pergunta:** Como você se sente com relação à implementação da Tarefa 1 em comparação da Tarefa 2, cite prós-e-contras de cada um.  
Resposta: Entendi muito mais a tarefa 1, pois tinha que planejar mesmo com ajuda da IA, mas com a dois nao entendi como foi a implemetacao, mas pude entender o codigo lendo-o. Mais foi muito mais rapido fazer a Tarefa 2 que 1