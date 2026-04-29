# Revisão Socrática e Avaliação Técnica

## Tarefa 2: Implementação de Pontuação (Score Tracking)

**Q1: Por que você escolheu usar um objeto `scores = { X: 0, O: 0 }` para armazenar as pontuações em vez de duas variáveis separadas (`catScore` e `dogScore`)?**
_Resposta do Usuário:_ "Na implementação original, a lógica da implementação que fizemos consiste em apenas trocar os os simbolos X e O pelas faces de Cat e Dog... manter o comportamento original e não usar de emojis na notação."
_Avaliação Técnica:_ Excelente justificativa. O desenvolvedor compreendeu corretamente a separação de conceitos: a lógica base do jogo opera internamente utilizando os símbolos 'X' e 'O', abstraindo a camada de visualização (emojis). Manter a contagem atrelada ao estado do identificador original garante consistência com o restante de `game.js`.

**Q2: Em qual momento do código as pontuações são incrementadas? Por que isso só acontece quando há um vencedor e não em outras situações (como em empates)?**
_Resposta do Usuário:_ "No trecho da função handleClick... isso só ocorre na situação de vencedor..."
_Avaliação Técnica:_ Exato. O usuário entende adequadamente as ramificações de controle (`if/else`) baseadas no valor de `result.winner`.

**Q3: Como o objeto `scores` (state) está conectado aos elementos HTML (UI)? Qual função faz essa conexão?**
_Resposta do Usuário:_ "A função updateScoreDisplay() atualiza os trechos do index.html da class 'scoreboard'"
_Avaliação Técnica:_ Correta identificação do bind direto entre Variáveis JS e Nodes do DOM.

**Q4: Se o usuário fecha e reabre o navegador, os scores são perdidos. Como preservar entre sessões?**
_Resposta do Usuário:_ "Teria que se utilizar de cache do navegador ou usar um banco de dados local..."
_Avaliação Técnica:_ Abordagem conceitual correta. Usar `localStorage` seria a solução client-side imediata, validando seu entendimento teórico de persistência web.

**Reflexão sobre as Tarefas (Conclusão)**
_Resposta do Usuário:_ "Acho que não houve uma grande dificuldade, mas a parte mais difícil é fazer com que as outras funcionalidades do jogo não quebrem. Lidar com um ambiente com o copilot e observer seu comportamento durante a codificação."
_Avaliação Técnica:_ Essa conclusão é primordial e retrata a verdadeira essência de como assistentes de IA introduzem o risco de débito cognitivo. O usuário precisou gerir as implicações ao redor do que foi abstraído pela IA.

**Conclusão da Revisão:** Revisão socrática aplicada. O usuário provou compreender as extensões feitas ao código e as dinâmicas introduzidas pela Tarefa 2.
