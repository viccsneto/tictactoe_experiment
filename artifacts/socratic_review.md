# Revisão Socrática

**Modelo da IA:** GPT-5.4 mini

## Verificação inicial
As duas tarefas foram encontradas no código antes da revisão:
- Tarefa 1: troca de X/O por 🐱/🐶 na lógica, interface e testes.
- Tarefa 2: scoreboard para contabilizar vitórias de 🐱 e 🐶.

## Perfil do desenvolvedor
1. **Quanto tempo de experiência em programação você tem?**
   - Resposta: 6 anos
   - Avaliação: resposta plausível e compatível com a familiaridade demonstrada ao longo da revisão.

2. **Já usou assistentes de código antes? Qual(is)?**
   - Resposta: Sim, Copilot, Claude, Gemini, além de IDEs com agentes embutidos como Windsurf e Cursor.
   - Avaliação: indica experiência prévia com ferramentas de apoio de IA.

3. **Já tinha programado tic-tac-toe antes?**
   - Resposta: Já, ainda quando era iniciante.
   - Avaliação: coerente com o tipo de funcionalidade e com a familiaridade declarada.

4. **Que modelo LLM você utilizou durante o processo?**
   - Resposta: Automático, porém prioritariamente GPT 5.2 codex.
   - Avaliação: resposta direta, sem inconsistência aparente com o fluxo da sessão.

## Parte A - Tarefa 1 (Emojis)
1. **O que foi implementado na Tarefa 1?**
   - Resposta: Foi trocado os players X e O por cachorro e gato.
   - Avaliação técnica: correto no alto nível. O código realmente passou a usar 🐱 e 🐶 no estado, na renderização, nos testes e no texto inicial da interface.

2. **Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?**
   - Resposta: Não consigo.
   - Avaliação técnica: resposta honesta; a implementação ficou um pouco mais distribuída entre `game.js`, `script.js`, `style.css`, `index.html` e testes.

3. **Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?**
   - Resposta: Se eu não estiver extremamente cansado, consigo, se não precisaria de IA.
   - Avaliação técnica: indica autonomia parcial, mas não confiança plena.

4. **Você compreende a razão fundamental por trás desta escolha específica de implementação, o porquê de ser assim e não de outra forma?**
   - Resposta: A implementação atual da aplicação é uma padrão de aplicações web, de facil uso e contribuição. Além disso é normal o uso de javascript para gestão a iteração das paginas web e css para estilização e html para ditar a formatação hierarquica da pagina.
   - Avaliação técnica: resposta genérica. Não explica a decisão específica da solução, mas demonstra entendimento de divisão básica entre HTML, CSS e JS.

5. **Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna desta funcionalidade sem que ele precise ler cada linha gerada pela IA?**
   - Resposta: De forma geral sim, porém não detalhadamente função por função.
   - Avaliação técnica: aceitável para onboarding em nível alto, mas não para transferência completa de conhecimento.

6. **O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?**
   - Resposta: Sim.
   - Avaliação técnica: compatível com o nível de alteração feito, embora a resposta anterior mostre limitação em detalhes.

7. **Você ficou satisfeito(a) com o resultado?**
   - Resposta: Sim, tendo em vista o tempo gasto e o retorno entregado.
   - Avaliação técnica: resposta coerente com uma alteração pequena e objetiva.

### Debate socrático da Tarefa 1
1. **Na implementação atual, onde a vitória é detectada de fato: no DOM ou no array `state.board`? Explique por quê.**
   - Resposta: No array, pois ele é mantido em memoria.
   - Avaliação técnica: correto no essencial. Em `script.js`, `checkWinner(state.board)` usa o estado em memória, não o DOM. A justificativa “em memória” é incompleta, mas a conclusão está certa.

2. **Por que o helper `boardFrom` nos testes ainda aceita `X` e `O`, mesmo depois da troca para 🐱 e 🐶?**
   - Resposta: Não sei.
   - Avaliação técnica: o helper foi mantido como compatibilidade para deixar os testes legados e algumas cadeias de texto mais fáceis de ler. O código em [tests/game.test.js](tests/game.test.js) traduz `X` para 🐱 e `O` para 🐶, então o teste continua expressivo sem obrigar tudo a usar emojis literais.

## Parte B - Tarefa 2 (Scoreboard)
1. **O que foi implementado na Tarefa 2?**
   - Resposta: Scoreboard de vitorias.
   - Avaliação técnica: correto. O placar foi adicionado na UI e conectado ao fluxo de vitória.

2. **Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?**
   - Resposta: Não.
   - Avaliação técnica: resposta consistente com o fato de o placar ter sido adicionado como estado separado e renderizado por `script.js`.

3. **Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?**
   - Resposta: Não.
   - Avaliação técnica: resposta direta; sinaliza dependência alta de assistência para essa parte.

4. **Você compreende a razão fundamental por trás desta escolha específica de implementação, o porquê de ser assim e não de outra forma?**
   - Resposta: Não.
   - Avaliação técnica: indica que a justificativa arquitetural do placar não foi internalizada.

5. **Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna desta funcionalidade sem que ele precise ler cada linha gerada pela IA?**
   - Resposta: Não.
   - Avaliação técnica: consistente com a resposta anterior; a compreensão ficou superficial.

6. **O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?**
   - Resposta: Sim.
   - Avaliação técnica: há tensão entre essa resposta e as respostas anteriores, que indicam pouca confiança na explicação da funcionalidade.

7. **Você ficou satisfeito(a) com o resultado?**
   - Resposta: Não, a retenção de conhecimento foi baixo.
   - Avaliação técnica: resposta coerente com a baixa confiança nas perguntas anteriores.

### Debate socrático da Tarefa 2
1. **Por que o placar foi implementado como estado separado do tabuleiro, em vez de ser derivado diretamente do `board` a cada renderização?**
   - Resposta: para o desacomplamento da aplicação.
   - Avaliação técnica: a ideia está correta. O código em `script.js` mantém `score` separado de `state.board`, o que evita recalcular vitórias passadas e facilita persistência entre partidas.

2. **Por que o botão de novo jogo reinicia o tabuleiro, mas não zera o placar?**
   - Resposta: pois a função de update não é chamada.
   - Avaliação técnica: correto. Em `restartGame()` o estado do tabuleiro é recriado com `createInitialState()`, mas o placar não é reinicializado; ele só muda quando `updateScore(score, result.winner)` é chamado após uma vitória.

## Reflexão comparativa final
- Resposta: Tarefa 1 eu estava mais conciente das alterações, por mais que seja uma tarefa mais simples. Ja na tarefa 2 nao.
- Avaliação técnica: a comparação é coerente com a revisão. A Tarefa 1 ficou mais simples e rastreável; a Tarefa 2 exigiu mais coordenação entre estado, UI e persistência do placar.
