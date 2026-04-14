# Relatório de Revisão Socrática

**Participante:** Ana Clara Pinho Galvão  
**Matrícula:** 2220505  
**Data:** 2026-04-14  
**Modelo de IA utilizado:** Claude Sonnet 4.6  

---

## Perfil do Desenvolvedor

| Pergunta | Resposta |
|---|---|
| Tempo de experiência em programação | 3 anos, com 1 ano de estágio |
| Já usou assistentes de código? | Sim — GitHub Copilot |
| Já programou tic-tac-toe antes? | Não, talvez no início da faculdade, mas não se recorda |
| Modelo LLM utilizado no experimento | Claude (Sonnet 4.6) |

---

## Parte A — Revisão da Tarefa 1 (Emojis)

### Perguntas Reflexivas

**1. O que foi implementado na Tarefa 1?**  
> Troca de símbolos por emojis dos jogadores.

**Avaliação:** Correto e conciso. A implementação substituiu `X` por 🐱 e `O` por 🐶 na camada de exibição, preservando os identificadores internos.

---

**2. Consegue explicar como os componentes interagem sem olhar o código?**  
> Lembra que foi `game.js` para criar o dicionário e a função, e o `script.js` para quando mostrar a lógica.

**Avaliação:** Correto. `PLAYER_SYMBOLS` e `getPlayerSymbol()` em `game.js`; `script.js` consome a função nos 4 pontos de exibição.

---

**3. Conseguiria depurar um erro crítico às 2h sem IA?**  
> Sim, como a solução tem poucos arquivos.

**Avaliação:** Razoável. O escopo reduzido da mudança (2 arquivos, função simples) justifica a confiança.

---

**4. Compreende a razão por trás da escolha de implementação?**  
> Sim, a motivação maior foi boas práticas de engenharia de software.

**Avaliação:** Correto. A separação entre identificador interno e representação visual é um princípio de design explicitamente considerado.

---

**5. Conseguiria fazer onboarding de um novo desenvolvedor?**  
> Sim.

---

**6. O código seria mantível sem IA?**  
> Sim.

---

**7. Ficou satisfeita com o resultado?**  
> Sim.

---

### Debate Socrático da Tarefa 1

**Pergunta 1:** A função `getPlayerSymbol` retorna `PLAYER_SYMBOLS[player] || player`. O que acontece se você passar um valor que não existe no dicionário? Esse comportamento é intencional?

> Vai retornar `'Z'`, pois se não for os símbolos já mapeados, é algo novo e não quero quebrar o código. Então sim, intencional, por isso tem o `||`.

**Avaliação:** ✅ Resposta correta e completa. A participante identificou o fallback defensivo e sua intenção — evitar quebra do código para valores inesperados. Demonstra compreensão do comportamento do operador `||` como guarda de segurança.

---

**Pergunta 2:** A lógica interna do jogo continua usando `'X'` e `'O'` como identificadores no tabuleiro. Quais seriam as consequências de ter feito o contrário — usar os emojis diretamente como valores no `board`?

> Iria alterar mais linhas de código e se amanhã quisesse mudar os valores de novo para outros emojis, a mudança sempre seria relativamente grande.

**Avaliação:** ✅ Resposta correta. Além disso, os testes continuariam passando sem modificação justamente por essa separação — eles testam a lógica com `'X'` e `'O'`, que não mudou. A participante demonstra entender o trade-off de manutenibilidade.

---

## Parte B — Revisão da Tarefa 2 (Score)

### Perguntas Reflexivas

**1. O que foi implementado na Tarefa 2?**  
> Foi implementado o placar do jogo.

**Avaliação:** Correto. Placar acumulado por sessão, exibido na UI, atualizado a cada vitória.

---

**2. Consegue explicar como os componentes interagem sem olhar o código?**  
> Muda o `index.html` porque mexemos exatamente na interface e o `script` para ver quando ganhar e mudar o score.

**Avaliação:** Correto. `index.html` recebeu o bloco `.scoreboard`; `script.js` acrescentou `score`, `updateScoreboard()` e o incremento em `handleClick`.

---

**3. Conseguiria depurar um erro crítico às 2h sem IA?**  
> Sim.

---

**4. Compreende a razão por trás da escolha de implementação?**  
> Entende as noções de quando é necessário fazer o update e porque não ficar chamando.

**Avaliação:** Correto. `updateScoreboard()` é chamada uma única vez — no momento da vitória — evitando atualizações desnecessárias do DOM.

---

**5. Conseguiria fazer onboarding de um novo desenvolvedor?**  
> Sim.

---

**6. O código seria mantível sem IA?**  
> Sim.

---

**7. Ficou satisfeita com o resultado?**  
> Sim.

---

### Debate Socrático da Tarefa 2

**Pergunta 1:** O objeto `score` foi declarado fora do `state`. O que aconteceria se ele estivesse dentro do `createInitialState()`, junto com `board`, `current` e `gameOver`?

> Quando resetasse o state, o score iria zerar, porque seria resetado junto com o state.

**Avaliação:** ✅ Resposta correta e precisa. A participante identifica a decisão arquitetural central — separar o estado de uma partida (vida curta) do placar da sessão (vida longa).

---

**Pergunta 2:** Hoje não existe botão para zerar o placar. Se você precisasse adicionar essa funcionalidade amanhã, o que mudaria no código?

> Adicionaria um botão que, ao clicar, iria atualizar o score para 0 a 0.

**Avaliação:** ✅ Correto. Especificamente: botão no `index.html`, event listener no `script.js` que executa `score.X = 0; score.O = 0;` e chama `updateScoreboard()`. A participante demonstra entender a estrutura suficientemente para estendê-la.

---

## Reflexão Comparativa Final

**Como você se sente em relação à implementação da Tarefa 1 comparada à Tarefa 2? Cite prós e contras de cada uma.**

> Tarefa 1 tive mais controle do que estava sendo feito, e havia uma metodologia ativa de aprendizado. A segunda não — depende do desenvolvedor ter responsabilidade pelo seu código.

**Avaliação:** Reflexão precisa e alinhada com o objetivo do experimento. A participante identificou o papel do pipeline MasteryAware como indutor de engajamento ativo, e reconheceu que a ausência de estrutura na Tarefa 2 transfere a responsabilidade inteiramente ao desenvolvedor — o que é exatamente a variável que o experimento busca medir.

---

## Conclusão

A participante demonstrou domínio consistente sobre ambas as implementações: identificou os componentes alterados, compreendeu as decisões de design, e respondeu corretamente às questões técnicas do debate socrático. O nível de compreensão observado é compatível com 3 anos de experiência e sugere baixo débito cognitivo na Tarefa 1 (pipeline ativo) em comparação com a Tarefa 2 (livre).
