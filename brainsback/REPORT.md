# Implementation Report

> A concise summary for the reviewer.

**Reviewer note**: If a PR modifies `brainsback/TODO.md` or `brainsback/REACTO.md`, assume this is expected and that those files were modified by the human developer.
If present, use `.github/agents/brainsback-reviewer.md` as the review rubric.

## Snapshot
- **Change**: Adicao de scoreboard para contabilizar vitorias de 🐱 e 🐶, com UI, logica e testes atualizados.
- **Status**: Concluido com validacao automatica e manual.

## The Changes
- Atualizado `game.js` para iniciar com 🐱, alternar jogadores entre 🐱 e 🐶, e exportar constantes `CAT_FACE` e `DOG_FACE`.
- Adicionados helpers de placar em `game.js` para criar o estado inicial e incrementar vitorias por jogador.
- Atualizado `script.js` para mapear simbolos em classes CSS estaveis (`cat` e `dog`) ao renderizar celulas.
- Atualizado `script.js` para renderizar e atualizar o scoreboard a cada vitoria.
- Adicionado scoreboard em `index.html` com contadores separados para cat e dog.
- Atualizado `style.css` para usar `.cell.cat` e `.cell.dog` (mantendo as cores anteriores de cada jogador).
- Atualizado `index.html` no status inicial para exibir "Player 🐱's turn".
- Atualizado `tests/game.test.js` para validar fluxo com 🐱/🐶, incluir testes do placar e adaptar o helper `boardFrom` para converter tokens legados `X`/`O` em emojis.

## Testing Strategy
_How we ensured it works._
- Execucao do runner em `tests.html` e validacao visual dos resultados.
- Resultado: 35 testes passaram, 0 falhas.
- Validacao manual no jogo real: uma vitoria do gato incrementou o placar para 1 e o valor persistiu apos iniciar um novo jogo.

## Risks & Follow-up
- [ ] 

---
**Note**: Usually filled by the AI.