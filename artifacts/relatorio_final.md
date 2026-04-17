# Relatório Final - Experimento TicTacToe com IA Generativa

## Informações do Participante
- **Nome Completo:** Raphael Terencio Soares
- **Matrícula:** 2111533
- **Modelo LLM Utilizado:** Grok Code Fast 1

## Resumo das Implementações

### Tarefa 1: Substituição de X e O por Emojis (🐱 e 🐶)
- **Descrição:** Substituí os marcadores 'X' e 'O' por emojis de gato (🐱) e cachorro (🐶) no jogo da velha.
- **Alterações Realizadas:**
  - `game.js`: Atualizei `createInitialState` para iniciar com '🐱', `getNextPlayer` para alternar entre '🐱' e '🐶', e comentários.
  - `script.js`: Adicionei `getPlayerClass` para mapear emojis a classes CSS.
  - `index.html`: Atualizei texto de status para '🐱'.
  - `tests/game.test.js`: Atualizei todos os testes para usar emojis, removendo `boardFrom` e usando arrays diretos para compatibilidade com UTF-16.
- **Desafios:** Problemas com emojis em JS (split não funciona corretamente), causando falhas em testes que foram corrigidas.
- **Validação:** Todos os 31 testes passaram após correções.

### Tarefa 2: Implementação do Placar de Vitórias
- **Descrição:** Adicionei um placar na tela para contar vitórias de cada jogador.
- **Alterações Realizadas:**
  - `script.js`: Adicionei objeto `score` para armazenar contagens, funções `incrementScore` e `updateScoreDisplay`, integração em `handleClick` para incrementar na vitória.
  - `index.html`: Adicionei seção `<div class="scoreboard">` com spans para valores.
- **Desafios:** Nenhum problema significativo; implementação direta.
- **Validação:** Testes manuais confirmaram incremento correto em vitórias, persistência entre jogos e reset do tabuleiro sem zerar placar.

## Lições Aprendidas
- **Tarefa 1:** Emojis comportam-se diferentemente de caracteres simples em JS (ex.: split quebra emojis); importância de testes automatizados para detectar problemas.
- **Tarefa 2:** Separação de responsabilidades (estado do placar independente do jogo); trade-offs entre armazenamento em memória vs. localStorage.
- **Geral:** Uso de IA (GitHub Copilot) acelera implementação, mas requer validação humana; pipeline de domínio ajudou a estruturar Task 1.

## Reflexões sobre o Uso de IA Generativa
- **Benefícios:** Aceleração no código inicial, sugestões rápidas para correções (ex.: testes falhando).
- **Limitações:** IA não detectou problemas com emojis automaticamente; necessitou intervenção manual para debugging.
- **Débito Cognitivo:** Uso de IA pode levar a menos compreensão profunda se não refletir; pipeline forçado reflexão.
- **Recomendações:** Combinar IA com testes rigorosos e revisão socrática para mitigar débitos.

## Conclusão
As tarefas foram implementadas com sucesso, demonstrando domínio do código e reflexão crítica. O experimento destacou a importância de validação e separação de concerns em desenvolvimento com IA.