**Modelo da IA:** GitHub Copilot (VS Code free usage)

**Transcrição:**
**Usuário:** Quero iniciar a revisão socrática.
**Copilot:** Vamos iniciar a revisão socrática. Pergunta 1: Quanto tempo de experiência em programação você tem?
**Usuário:** 6 anos
**Copilot:** 2. Já usou assistentes de código antes? Qual(is)?
**Usuário:** Não diretamente na IDE, mas para ajudar no processo usei o chat GPT
**Copilot:** 3. Já tinha programado tic-tac-toe antes?
**Usuário:** Nao
**Copilot:** 4. Que modelo LLM você utilizou durante o processo (e.g., Claude Haiku, Gemini 3.1 Pro (preview))?
**Usuário:** Copilot do vs code (free usage)
**Copilot:** Parte A — Tarefa 1. 1. O que foi implementado na Tarefa 1?
**Usuário:** Substituição dos simbolos X e O pelos emojis de cachorro e gato
**Copilot:** 2. Explicação de Módulos: Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?
**Usuário:** Tem dois .js principais que fazem a manipulação do jogo, mas não sei o que cada um faz individualmente nem como se interagem
**Copilot:** 3. Autonomia na Depuração: Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?
**Usuário:** Capaz sim, mas sinto que demoraria para faze-lo mais que o normal
**Copilot:** 4. Justificativa da Lógica: Você compreende a razão fundamental por trás desta escolha específica de implementação (o "porquê" de ser assim e não de outra forma)?
**Usuário:** Não exatamente, mas entendi como ela estava fazendo a implementação e como cada codigo contribuia para chegar na soluçao almejada
**Copilot:** 5. Capacidade de Onboarding: Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna desta funcionalidade sem que ele precise ler cada linha gerada pela IA?
**Usuário:** Provavelmente não e se conseguisse muito rasamente
**Copilot:** 6. Sustentabilidade sem IA: O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?
**Usuário:** Acho que sim
**Copilot:** 7. Você ficou satisfeito(a) com o resultado?
**Usuário:** Mais do que o esperado. Achava que ia passar por mais problemas
**Copilot:** Debate Socrático Tarefa 1: Por que foi necessário criar `getPlayerClass()`?
**Usuário:** As classes .x e .o no css não foram mudadas mas o conteudo interno do tabuleiro foi aslterado para emojis. Para que o codigo ainda mudasse corretamente o css para as classes corretas foi necessario essa nova função
**Copilot:** Debate Socrático Tarefa 1: Por que `boardFrom()` precisou mudar para `Array.from()`?
**Usuário:** O codigo iria dividir o emoji em dois caracteres distintos que não corespondem ao emoji.
**Copilot:** Parte B — Tarefa 2. 1. O que foi implementado na Tarefa 2?
**Usuário:** Um display dos resultados do jogo
**Copilot:** 2. Explicação de Módulos: Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?
**Usuário:** Não
**Copilot:** 3. Autonomia na Depuração: Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?
**Usuário:** Acho que sim, só demoraria
**Copilot:** 4. Justificativa da Lógica: Você compreende a razão fundamental por trás desta escolha de implementação do placar — por que ele foi feito com estado interno e atualização DOM explícita ao invés de usar outro mecanismo, como recalcular o total a partir do histórico do jogo?
**Usuário:** Sim, pois é como eu imaginei que seria implementado
**Copilot:** 5. Capacidade de Onboarding: Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna da funcionalidade de placar sem que ele precise ler cada linha gerada pela IA?
**Usuário:** Mesmo caso da atividade 1, se sim muito rasamente
**Copilot:** 6. Sustentabilidade sem IA: O código dessa funcionalidade de placar continuaria sendo mantível por você se as ferramentas de IA deixassem de existir hoje?
**Usuário:** Sim
**Copilot:** 7. Você ficou satisfeito(a) com o resultado da implementação do placar?
**Usuário:** Não, os testes não conseguiram identificar os erros que encontrei manualmente e que eram para estar sendo testados
**Copilot:** Ajustei o ambiente e os testes para usar o DOM real e cobrir `restartGame()` preservando o placar.
**Usuário:** ok podemos continuar a revisão socrática?
**Copilot:** Vamos continuar com a revisão socrática. Pergunta Socrática 1 sobre o placar: por que o placar foi implementado com um estado de `scores` mantido em `state` e atualizado apenas quando um jogo acaba?
**Usuário:** Pois a renderização não muda toda vez o score, somente quando um jogo acaba que é necessario atualizalo
**Copilot:** Pergunta Socrática 2: como você validaria que a pontuação é realmente preservada entre rodadas no código atual, e qual parte do fluxo pode falhar se `restartGame()` não tratar corretamente esse estado?
**Usuário:** restartGame salva numa variavel local o score e depois chama a função initial state que altera o score para 0 e depois re altera essa variavel para o score correto
**Copilot:** Como você se sente com relação à implementação da Tarefa 1 em comparação com a Tarefa 2? Cite prós e contras de cada um.
**Usuário:** Durante a tarefa 1 senti muito mais sobre controle e entendendo o que estava sendo feito, mas demorou mais. Durante a tarefa 2 os resultados não foram tao bons e me senti menos involvido no processo
