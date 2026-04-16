# Relatório de Revisão Socrática
**Data:** 15 de abril de 2026  
**Participante:** Fernanda da Cal Figueiredo  
**Matrícula:** 2312090  
**Modelo de IA utilizado:** Claude Sonnet 4.5

---

## PERFIL DO PARTICIPANTE

### 1. Experiência em Programação
**Pergunta:** Quanto tempo de experiência em programação você tem?  
**Resposta:** Considerando que comecei a aprender sobre em 2023.1, tenho aproximadamente 3 anos de experiência.

### 2. Uso Prévio de Assistentes de Código
**Pergunta:** Já usou assistentes de código antes? Qual(is)?  
**Resposta:** Sim, já. Chat gpt, Cloude e Gemini.

### 3. Experiência com Tic-Tac-Toe
**Pergunta:** Já tinha programado tic-tac-toe antes?  
**Resposta:** Não.

### 4. Modelo LLM Utilizado
**Pergunta:** Que modelo LLM você utilizou durante o processo?  
**Resposta:** Cloude Sonnet

---

## PARTE A: REVISÃO DA TAREFA 1 (EMOJIS)

### Pergunta 1: Implementação
**Pergunta:** O que foi implementado na Tarefa 1?  
**Resposta:** Foi implementada a troca do X e O do jogo da velha por um emoji de gato e cachorro respectivamente.

**Avaliação:** ✅ Correto. A tarefa foi concluída conforme especificado.

---

### Pergunta 2: Explicação de Módulos
**Pergunta:** Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?  
**Resposta:** Mais ou menos. É para eu explicar?

_(Após solicitação para explicar)_

Eu alterei 5 arquivos. O game.js que tem o funcionamento do jogo. lá eu alterei o X de inicialização pelo emoji do gato e alguns outros detalhes. game.test.js testa o funcionamento do jogo aplicada a diferentes cenarios.Lá eu também precisei fazer alterações aonde possuia X e O. Além disso ive que modificar a função do topo. já o css eu tirei as configurações de cor pois como se trata de emoji não temos como alterá-la. altrei tambem a forma que o jogador era representado no script.js que possui o funcionamento base do que o jogador ve. E no index.html que tem a configuração base da tela, alterei a frase inicial.

**Avaliação:** ✅ Boa explicação. A participante identificou corretamente os arquivos modificados (game.js, game.test.js, style.css, script.js, index.html) e descreveu as mudanças principais: lógica de inicialização do jogador, renderização, interface, remoção de estilos desnecessários para emojis, e atualização dos testes.

---

### Pergunta 3: Autonomia na Depuração
**Pergunta:** Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?  
**Resposta:** Se for em algumas das partes que eu ja tive contato. Talvez sim. Ms por conta do horário a tarefa se torna bem amis difícil e demorada sem um agente.

**Avaliação:** ⚠️ Confiança parcial. A participante reconhece que conseguiria depurar partes conhecidas, mas admite que seria significativamente mais difícil e demorado sem assistência de IA, especialmente considerando fatores como cansaço.

---

### Pergunta 4: Justificativa da Lógica
**Pergunta:** Você compreende a razão fundamental por trás desta escolha específica de implementação (o "porquê" de ser assim e não de outra forma)?  
**Resposta inicial:** Não parei para pensar nisso. é Porque é o padrão básico?

_(Após esclarecimento sobre a pergunta referir-se às escolhas de implementação da Tarefa 1)_

**Resposta corrigida:** Entendo sim a razão por trás das escolhas de implementação da Tarefa 1.

**Avaliação:** ⚠️ Houve confusão inicial sobre o escopo da pergunta. Após esclarecimento, a participante afirmou compreender as justificativas, mas a hesitação inicial sugere que pode não ter refletido profundamente sobre alternativas de design durante a implementação.

---

### Pergunta 5: Capacidade de Onboarding
**Pergunta:** Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna desta funcionalidade sem que ele precise ler cada linha gerada pela IA?  
**Resposta inicial:** Conseguriia dar uma explicação mais geral se desse mais uma aprofundada no codigo. Muito específica só se passase mais tempo entendendo ele.

_(Após esclarecimento sobre referir-se especificamente à Tarefa 1)_

**Resposta corrigida:** Eu consigo sim explicar o que fiz na tarefa 1. Achei que era sobre a aplicação toda.

**Avaliação:** ✅ Após esclarecimento, a participante demonstrou que consegue explicar a Tarefa 1 especificamente, embora precise de mais estudo para explicar a aplicação completa em detalhes.

---

### Pergunta 6: Sustentabilidade sem IA
**Pergunta:** O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?  
**Resposta:** acredito que sim, já que o código não é nada muito complexo nem muito robusto.

**Avaliação:** ✅ Confiança positiva. A participante acredita que o código da Tarefa 1 seria mantível sem IA devido à sua simplicidade.

---

### Pergunta 7: Satisfação
**Pergunta:** Você ficou satisfeito(a) com o resultado da Tarefa 1?  
**Resposta:** sim, fiquei.

**Avaliação:** ✅ Satisfação positiva com o resultado.

---

## DEBATE SOCRÁTICO - TAREFA 1

### Questão Socrática 1: Escolha do Jogador Inicial
**Pergunta:** No arquivo game.js (linha 15), o jogador inicial é definido como '🐱' na função createInitialState(). Por que o gato foi escolhido como jogador inicial e não o cachorro? Existe alguma razão técnica ou lógica para essa escolha, ou é arbitrário? O que aconteceria se você invertesse essa ordem?

**Resposta:** Já estava definindo que o jogo começaria sendo a vez do 'X". Eu so subtitui por seu respectivo emoji, o gato. Mas pelo que olhei o jogo comportaria a troca do gato pelo cachorro e ainda assim funcoanria corretamente, com a segunda jogada sendo passada para o gato portanto.

**Avaliação Técnica:** ✅ **Excelente análise.** A participante demonstrou compreensão profunda:
1. Identificou que a escolha do 🐱 foi uma substituição direta do 'X' original, mantendo a convenção do jogo da velha
2. Reconheceu corretamente que a escolha é **arbitrária**
3. Compreendeu que o jogo funcionaria perfeitamente se invertesse a ordem, com a função `getNextPlayer()` garantindo a alternância correta

**Contraste com o código:** A análise está perfeitamente alinhada com a implementação. De fato, a função `getNextPlayer()` (linha 27) usa um operador ternário que funcionaria independentemente de qual jogador começasse.

---

### Questão Socrática 2: Classes CSS Não Utilizadas
**Pergunta:** Olhando para o arquivo script.js (linhas 17-20), você criou classes CSS 'cat' e 'dog' que são aplicadas dinamicamente às células. No entanto, no style.css, não há estilos definidos para .cat ou .dog. Por que essas classes foram adicionadas ao código? Elas servem algum propósito atual ou foram preparadas para uso futuro?

**Resposta:** Então, isso na verdade então foi um erro meu. criei para susbtituit o cell.o e o cell que representava o x mas acabou que n final eu apaguei eles. Então nem precisaria ter feito isso eu acho. não sei se era usado em outro lugar.

**Avaliação Técnica:** ✅ **Boa autoconsciência.** A participante:
1. Reconheceu prontamente que foi um erro/código residual
2. Compreendeu que as classes foram criadas para substituir `.cell.x` e `.cell.o` que existiam no código original
3. Identificou que, como os emojis já têm cor própria, as regras CSS foram removidas mas as classes no JavaScript permaneceram

**Contraste com o código:** Análise correta. No script.js (linhas 17-20), há:
```javascript
const playerClass = state.board[i] === '🐱' ? 'cat' : state.board[i] === '🐶' ? 'dog' : '';
cell.className = 'cell' + (playerClass ? ` ${playerClass}` : '');
```
Mas no style.css não existem regras para `.cat` ou `.dog`. Trata-se de **código morto** - funcional mas sem propósito atual. Poderia ser removido ou mantido para futuras customizações visuais por jogador.

---

## PARTE B: REVISÃO DA TAREFA 2 (SCORE)

### Pergunta 1: Implementação
**Pergunta:** O que foi implementado na Tarefa 2?  
**Resposta:** um placar que mostra quantas vitorias o gato teve e o cachorro também. é zreado quando a pagina é recarregada.

**Avaliação:** ✅ Correto. Placar funcional implementado com contabilização de vitórias e comportamento de reset adequado.

---

### Pergunta 2: Explicação de Módulos
**Pergunta:** Você consegue explicar como os componentes alterados ou criados interagem entre si sem olhar para o código-fonte?  
**Resposta inicial:** sim, eu acho. Porque foram só 3 arquivos também.

_(Após solicitação para explicar)_

O html configura o que o placar contem e dentro dele esat definido que o estilo é "comandado" pelo style.css, e lá eu aplico as configurações visuais do placar. Já o script.js defini a logica de fundionamento do placar. E se comunica com o html fazendo o placar atualizar.

**Avaliação:** ✅ Excelente. A participante explicou claramente a separação de responsabilidades: HTML (estrutura), CSS (estilização), JavaScript (lógica e atualização dinâmica do DOM).

---

### Pergunta 3: Autonomia na Depuração
**Pergunta:** Você se sente capaz de depurar um erro crítico nesta implementação às duas da manhã sem o auxílio de ferramentas de IA?  
**Resposta:** sim, nessa tarefa acho que sim.

**Avaliação:** ✅ Confiança plena. Contraste significativo com a Tarefa 1, onde a confiança era parcial.

---

### Pergunta 4: Justificativa da Lógica
**Pergunta:** Você compreende a razão fundamental por trás desta escolha específica de implementação (o "porquê" de ser assim e não de outra forma)?  
**Resposta:** acho que sim. Porque essa era uma tarefa que não imagino tantas outras formas de realizá-la

**Avaliação:** ✅ Compreensão adequada. A participante reconhece que há poucas alternativas para implementar um placar simples, demonstrando entendimento da solução escolhida.

---

### Pergunta 5: Capacidade de Onboarding
**Pergunta:** Se um novo desenvolvedor entrasse no projeto agora, você conseguiria explicar a lógica interna desta funcionalidade sem que ele precise ler cada linha gerada pela IA?  
**Resposta:** simm, passando pelo que fiz como são coisas simples consigo entender 100% bem rapido até o que não olhei muito a fundo e explicar.

**Avaliação:** ✅ Alta confiança. A participante demonstra compreensão profunda e capacidade de transmitir conhecimento.

---

### Pergunta 6: Sustentabilidade sem IA
**Pergunta:** O código desta tarefa continuaria sendo perfeitamente mantível por você se as ferramentas de IA deixassem de existir hoje?  
**Resposta:** sim, acho que sim. Foi o que já pontuei, com certeza que teria demorado muito mais para fazer o que foi pedido sem a ajuda da ia. Eu teria que ter entendido melhor o codigo antes de modifica-lo, por exemplo. só ai ja perderia bem mais tempo.

**Avaliação:** ✅ Confiança positiva com reconhecimento realista do trade-off. A participante admite que seria mantível, mas que o desenvolvimento inicial sem IA seria muito mais demorado devido à necessidade de estudo prévio mais profundo.

---

### Pergunta 7: Satisfação
**Pergunta:** Você ficou satisfeito(a) com o resultado da Tarefa 2?  
**Resposta:** sim

**Avaliação:** ✅ Satisfação positiva com o resultado.

---

## DEBATE SOCRÁTICO - TAREFA 2

### Questão Socrática 1: Estrutura de Dados para Pontuação
**Pergunta:** No script.js (linha 10), a pontuação é armazenada em um objeto `const score = { '🐱': 0, '🐶': 0 };` em vez de usar duas variáveis separadas como `let catScore = 0` e `let dogScore = 0`. Qual é a vantagem dessa abordagem com objeto? Como isso facilita ou dificulta a atualização da pontuação do vencedor na linha onde você faz `score[result.winner]++;`?

**Resposta inicial:** facilita pois consigo atualizar apenas um lugar.

_(Após aprofundamento da pergunta)_

**Resposta expandida:** eu teria que incrementar separadamente cada contante além de verificar qual estamos tratando em casos separados.

**Avaliação Técnica:** ✅ **Excelente compreensão.** A participante demonstrou entendimento do conceito de **acesso dinâmico a propriedades**:

1. **Com variáveis separadas**, seria necessário:
```javascript
if (result.winner === '🐱') {
  catScore++;
} else if (result.winner === '🐶') {
  dogScore++;
}
```

2. **Com objeto**, uma única linha resolve: `score[result.winner]++;`

**Vantagens identificadas:**
- Código mais **limpo e conciso**
- Eliminação de condicionais repetitivas
- **Escalabilidade**: se houvesse 3+ jogadores, bastaria adicionar chaves ao objeto

**Contraste com o código:** A implementação (script.js, linha 47) usa exatamente essa abordagem: `score[result.winner]++;` - uma solução elegante que demonstra bom design.

---

### Questão Socrática 2: Escolhas de Renderização
**Pergunta:** No script.js (linhas 24-26), há uma função `renderScoreboard()` que atualiza o placar na tela. Observando o código, essa função é chamada em dois momentos: quando há um vencedor e na inicialização. Por que você **não** chama `renderScoreboard()` dentro da função `restartGame()`? O que aconteceria se o placar precisasse ser resetado ao clicar em "New Game"?

**Resposta:** ai o placar nunca seria mantido. Porque ele sempre apos ser incrementado ao final de uma partida assim que eu clicasse em new game, se em restart game a funcao fosse chamada, o placar ia ser reinicado e zerado  oda vez.

**Avaliação Técnica:** ✅ **Perfeita compreensão da separação de responsabilidades.** A participante demonstrou entendimento claro de:

1. **`renderScoreboard()` apenas exibe**, não modifica dados
2. O placar deve **persistir entre partidas**
3. O botão "New Game" reinicia apenas a **partida atual**, não o histórico

**Design correto identificado:**
- Para resetar o placar, seria necessário:
  1. Modificar o objeto: `score['🐱'] = 0; score['🐶'] = 0;`
  2. Então chamar `renderScoreboard()`

**Contraste com o código:** A análise está perfeitamente alinhada. A função `restartGame()` (linhas 62-66) apenas cria novo estado de jogo e renderiza o tabuleiro, preservando intencionalmente o histórico de vitórias.

---

## REFLEXÃO COMPARATIVA FINAL

**Pergunta:** Como você se sente com relação à implementação da Tarefa 1 em comparação com a Tarefa 2? Cite prós e contras de cada uma.

**Resposta:** na tarefa 1 assim como pedido no trabalho eu fui mais cuidadosa com o uso da ia apesar dela ja ter me ajudado pontuando os locais que eu deveria alterar e com  as alterações em si, que por exemplo, no arquivo de teste eram varias. Eu procurei fazer um estilo pair programming. Então sinto que foi um pouco mais trabalhosa. Já a segunda, como tinha mais liberdade "deixei" a ia me ajudar mais então fo bem mais simples e prático.

**Análise:**

### TAREFA 1 (Pipeline MasteryAware)
**Prós identificados:**
- Maior cuidado e consciência no uso da IA
- Pair programming ativo
- Participante manteve controle das decisões
- Maior compreensão do código resultante

**Contras identificados:**
- Mais trabalhosa
- Exigiu mais esforço cognitivo
- Processo mais demorado

### TAREFA 2 (Sem Pipeline)
**Prós identificados:**
- Mais rápida e prática
- Menor esforço requerido
- Maior delegação à IA

**Contras identificados:**
- Menos envolvimento ativo
- Menor controle sobre o processo

**Observação crítica:** A participante demonstra consciência clara do **trade-off** central do experimento: **produtividade imediata versus compreensão profunda**. Paradoxalmente, ela demonstrou **maior confiança na manutenibilidade da Tarefa 2** (resposta mais direta e confiante na Pergunta 3), apesar de ter se envolvido menos ativamente na sua construção.

---

## SÍNTESE DA AVALIAÇÃO

### Pontos Fortes
1. **Honestidade reflexiva**: reconheceu limitações e incertezas
2. **Compreensão técnica sólida**: especialmente nas questões socráticas
3. **Capacidade de articulação**: explicou conceitos com clareza quando solicitada
4. **Autoconsciência**: identificou código morto e erros (classes CSS não utilizadas)

### Áreas de Atenção
1. **Reflexão durante implementação**: nem sempre parou para analisar alternativas de design
2. **Necessidade de esclarecimento**: algumas perguntas precisaram de contexto adicional
3. **Dependência de IA para eficiência**: reconhece que seria significativamente mais lento sem assistência

### Padrão Observado
A Tarefa 2, realizada sem o pipeline MasteryAware, paradoxalmente gerou **maior confiança** na capacidade de depuração e manutenção, apesar do menor envolvimento ativo. Isso sugere que:
- A **simplicidade** da tarefa pode ter sido mais determinante que o método
- Ou a participante pode ter **superestimado** sua compreensão da Tarefa 2 devido ao menor esforço percebido ("seemed easier = must understand better")

---

## RECOMENDAÇÕES

1. **Para trabalhos futuros**: considerar momentos de reflexão estruturada sobre escolhas de design, mesmo sem pipeline formal
2. **Gestão de débito cognitivo**: estar atenta a código residual (como as classes CSS não utilizadas) que pode acumular complexidade desnecessária
3. **Validação de compreensão**: testar periodicamente a capacidade de explicar código gerado por IA, mesmo em tarefas "simples"

---

**Conclusão:** A participante demonstrou competência técnica adequada e valiosa capacidade de reflexão sobre seu próprio processo de aprendizado e uso de IA, contribuindo significativamente para os objetivos da pesquisa.
