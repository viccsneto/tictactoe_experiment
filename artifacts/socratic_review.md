# Socratic Review

## Overview
- Projeto: Tic-Tac-Toe com emojis 🐱 e 🐶 e sistema de pontuação.
- Status: Revisão socrática concluída.
- Consentimento confirmado em `artifacts/consentimento.md`.

## Perfil do desenvolvedor
- Experiência em programação: 6 anos.
- Assistentes de código usados: ChatGPT e GitHub Copilot no VS Code.
- Programou tic-tac-toe antes: não.
- Modelo / ferramenta usada: GitHub Copilot (VS Code free usage).

## Parte A — Tarefa 1 (Emojis)

### Perguntas e respostas
1. O que foi implementado na Tarefa 1?
   - Substituição dos símbolos X e O pelos emojis de cachorro e gato.

2. Explicação de módulos
   - O desenvolvedor reconheceu que não sabia exatamente como os dois arquivos JS interagiam, apenas que havia dois principais.

3. Autonomia na depuração
   - Resposta: capaz, mas demoraria mais que o normal.

4. Justificativa da lógica
   - Resposta: não completamente, mas entendeu como a implementação chegava à solução.

5. Capacidade de onboarding
   - Resposta: não totalmente; conseguiria apenas de forma superficial.

6. Sustentabilidade sem IA
   - Resposta: sim.

7. Satisfação com o resultado
   - Mais do que o esperado; achava que iria encontrar mais problemas.

### Debate socrático
1. Por que foi necessário criar `getPlayerClass()`?
   - Resposta correta: porque `.x`/`.o` no CSS permaneceram e era necessário mapear os emojis para essas classes.

2. Por que `boardFrom()` precisou mudar para `Array.from()`?
   - Resposta correta: `split('')` divide emojis em caracteres inválidos; `Array.from()` respeita os pontos de código Unicode.

### Avaliação da Tarefa 1
- O desenvolvedor demonstrou boa compreensão das decisões principais.
- Há confiança funcional razoável, mas ainda há alguma insegurança sobre o entendimento completo do fluxo.

## Parte B — Tarefa 2 (Pontuação)

### Perguntas e respostas
1. O que foi implementado na Tarefa 2?
   - Display de resultados do jogo / placar.

2. Explicação de módulos
   - Resposta: não.

3. Autonomia na depuração
   - Resposta: sim, mas demoraria.

4. Justificativa da lógica
   - Resposta: sim, pois era o que esperava que fosse implementado.

5. Capacidade de onboarding
   - Resposta: semelhante à Tarefa 1, de forma rasa.

6. Sustentabilidade sem IA
   - Resposta: sim.

7. Satisfação com o resultado
   - Resposta: não tão satisfeita quanto na Tarefa 1; sentiu-se menos envolvido.

### Debate socrático
1. Por que o placar foi implementado com estado de `scores` no `state`?
   - Resposta correta: porque o placar só precisa ser atualizado ao fim de um jogo, não a cada render.

2. Como validar que `restartGame()` preserva a pontuação?
   - Resposta correta: sabe que `restartGame()` salva o score antes, chama `createInitialState()`, e restaura o score depois.

### Avaliação da Tarefa 2
- O desenvolvedor demonstrou compreensão funcional mínima, mas reconheceu que se sentiu menos envolvido.
- A lógica de preservação do score foi claramente entendida.

## Reflexão final
- A Tarefa 1 foi mais envolvente e trouxe maior controle mental.
- A Tarefa 2 foi menos satisfatória e o usuário sentiu-se menos presente no processo.

## Consentimento
- O arquivo `artifacts/consentimento.md` está preenchido e contém matrícula, nome e consentimento explícito.
