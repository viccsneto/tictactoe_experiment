# Proof of Mastery: Score System (REACTO)

> Explain it to prove you own it.

**Hard rule**: Document YOUR understanding, not AI's. Write in your own words.

---

## R — The Problem

Implementar um sistema de pontuação que:
- Rastreie vitórias do Gato (🐱 = X) e Cachorro (🐶 = O)
- Persista dados entre refreshes da página
- Não interfira com a lógica principal do jogo
- Permita reset de placares

---

## E — Examples

**Input**: Usuário joga 3 partidas:
1. Gato vence → Score: Cat 1, Dog 0
2. Cachorro vence → Score: Cat 1, Dog 1  
3. Empate → Score: Cat 1, Dog 1 (sem mudança)
4. Refresh página → Score persiste: Cat 1, Dog 1 ✓

---

## A — Approach

### Por que localStorage foi escolhido?

A escolha de localStorage serve para aplicação simples do jogo (apenas um jogo rodando). Todavia, foi observado que localStorage não resolve para alguns cenários, como dois jogos ao mesmo e também de manipulação dos valores de scores gerados no tabuleiro. Como escolha, seria aconselhado a substituição pelo indexedDB para trabalhar com os dados sem precisar ter problema com concorrência e segurança (acesso indevido dos valores do scores).

### Por que scores ficam em script.js e não em game.js?

Você reconheceu que scores **deveria** estar em game.js (regra de negócio), mas deixou em script.js. Explique:
- Qual foi o trade-off dessa decisão?
- O que facilitou? O que complicou?
- Se refizesse hoje, mudaria?

Foi observado que deveria que scores é uma regra de negócio que deveria estar na parte de model da aplicação: game.js. Pensando que por facilidade de trabalhar próximo ao controller (script.js) seria viável essa escolha. Porém, observou-se que com a substituição, torna mais adequado seguindo a arquitetura MVC, além de facilitar o entendimento do código. Se manter em script.js torna alvo de acesso inadequado de outro jogador para manipular o localStorage. Com isso, realizar então a modificação do código de acréscimo e inicialização do sistema de scores no lado do model (game.js).

---

## C — Critical: Decisões & Trade-offs

### 1. Separação de Responsabilidades
- **Decisão**: Scores em script.js (Controller/View)
- **Alternativa**: Scores em game.js (Model)
- **Trade-off**: Consciente de que priorizar "facilidade visual" tinha custo de design, é necessário seguir o modelo MVC e realizar a clareza da estrutura do código. 

### 2. Draws (Empates)
- **Decisão**: Empates NÃO incrementam scores
- **Raciocínio**: Como boa prática, empate não se deve contabilizar pelo objetivo principal ser de contabilização apenas de vitórias. Como jogo padrão, empate não é considerado vitória de ambos, mas uma derrota de ambos.

### 3. Persistência
- **localStorage** foi escolhido por: Facilidade e atende ao caso simples de armazenar os scores dos jogadores em interações simples.
- **Limitações identificadas**: Como limitação, o localStorage tem limite de 5MB de armazenamento - o que torna inviável para muitos jogos, ou aplicação de novos armazenamentos de informações do jogo -. Outro ponto fundamento seria a sincronização entre abas, tendo em vista que localStorage não trabalha com concorrência entre envio de informações sobre o mesmo arquivo, o que pode ocorrer problemas de sobreescrever valores de scores errados. E por último, a facilidade de acesso ao localStorage - manipulabilidade - permite trapacear apenas acessando o código e adicionando um valor para o jogador.
- **Alternativas melhores**: IndexedDB é uma das melhores alternativas pela alta capacidade de armazenamento, estruturamento dos dados, lidar bem com acesso mútuo de informações e também de restrição de acesso aos usuários. Também foi pensado em navigator.locks e BroadcastChannel que funcionam como mutex. 

### 4. Segurança & Integridade
- **Vulnerabilidade**: Usuário pode editar localStorage via DevTools
- **Seu hash proposal**: Hash embora seja um limitador de acessos, tendo em vista de hash ser gerado automaticamente. Ainda não limita o acesso completo por utilizar localStorage como meio - vulnerável de acesso -.
- **Solução simples adicionada**: Para validação de scores, podemos adicionar uma validação limitando para valores menos que 0. Quanto para resolver manipulação dos scores, podemos adicionar indexedDB para limitar o acesso de multithreads, como adicionar novos parâmetros de limitação, como resultados de cada partida para validação.

---

## T — Testing: Cenários Validados

### ✅ Testado:
- [X] Cat vence → score incrementa
- [X] Dog vence → score incrementa
- [X] Empate → sem mudança
- [X] Refresh página → scores persistem
- [X] Todos 31 unit tests ainda passam
- [X] UI scorecard atualiza em tempo real

### ⚠️ NÃO Testado (Gaps):
- [X] Corromper localStorage durante partida
- [X] Múltiplas abas jogando simultaneamente
- [X] localStorage cheio (exceção)
- [X] Reset enquanto partida em andamento
- [X] Navegação privada (localStorage não funciona)

### Race Condition: Múltiplas Abas
**Problema identificado**: Se Aba A e Aba B ganham no mesmo tempo:
- Aba A salva `{cat: 1, dog: 0}`
- Aba B carrega `{cat: 0, dog: 0}` (desatualizado)
- Aba B salva `{cat: 0, dog: 1}`
- **Resultado**: Vitória de A é perdida!

**Solução para evitar** (explique):
[Você mencionou BroadcastChannel e navigator.locks. Como implementaria?]
Utilizando o BroadcastChannel e navigator.locks, utilizaria da mesma maneira que fosse utilizar o mutex. Limitando o acesso por com uma thread travando o mutex para realizar apenas uma das abas, se caso já tiver realizado a modificação no valor de scores no localStorage, ele libera a modificação da outra aba finalizada e adiciona com o valor do anterior (além de lockar o mutex), e por fim liberar o mutex para assim a próxima aba que irá salvar os scores.
---

## O — Optimization & Learnings

### Complexidade Atual
- `loadScores()`: O(1) - localStorage.getItem é O(1)
- `saveScores()`: O(1) - localStorage.setItem é O(1)
- `updateScoreDisplay()`: O(1) - atualiza 2 elementos do DOM
- **Complexidade geral**: O(1) por operação ✓

### Limitações Atuais
1. localStorage: ~5MB limit, limitado para apenas scores, caso implemente mais de uma informação, como quem ganhou nas outras partidas, acabará com o espaço mínimo limite.
2. Sem histórico de partidas
3. Sem sincronização entre abas
4. Sem validação forte de integridade

### Se Refizesse Hoje
**Prioridade #1**:
- [X] Migrar para IndexedDB
- [ ] Adicionar validação de scores impossíveis
- [ ] Implementar BroadcastChannel para sincronização
- [ ] Outra: ___

### Escalabilidade Futura
**Se precisasse armazenar histórico completo** (100 partidas com: timestamp, duração, vencedor):
- Estrutura de dados: [Como estruturaria o JSON?]
- Storage: localStorage (5MB) seria suficiente?
- Índices: Como buscaria a partida #50 rapidamente?
- Backup: Como faria export para o usuário?

Migrar para IndexedDB resolveria o principal problema de estrutura do JSON com localStorage, tendo em vista que trabalha especificamente com estrutura de dados, manipulação mais ágeis e seguras. Além de resolver o principal problema do localStorage em tamanho de 5MB, caso implementasse timestamp, duração e vencedor por roda. Com isso, um banco de dados com o armazenamento das partidas seria totalmente plausível e fácil de buscar por partidas por índices, ou views ou chaves, facilitando encontrar, por exemplo, a partida #50 rapidamente. E para buscar, da mesma maneira que o localStorage, ele também pode permanecer ao lado do usuário, sem necessidade conexão online, o que permite exportar as informações do usuário e continuar a contagem dos scores ou acessar as partidas realizadas. Assim como em banco de dados, realizando o filtro/busca dos dados, seria capaz de retornar as informações ao usuário.

---

## Conclusão: Grande Lição Aprendida

Em uma frase, qual foi a **maior lição técnica** desta implementação?

Como grande lição técnica, pude perceber que as soluções mais simples nem sempre serão o melhor caminho. Ainda podemos encontrar desvantagens e vulnerabilidades que não encontramos normalmente. Basta pensar mais nas possibilidades e inovar, que será possível melhorar a holísticas na área.

---

**⚠️ HUMAN ONLY**: Este arquivo documenta SUA mastery da feature. Complete com suas próprias palavras e reflexões.
