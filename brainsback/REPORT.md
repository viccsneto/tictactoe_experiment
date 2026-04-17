# Implementation Report

> A concise summary for the reviewer.

**Reviewer note**: If a PR modifies `brainsback/TODO.md` or `brainsback/REACTO.md`, assume this is expected and that those files were modified by the human developer.
If present, use `.github/agents/brainsback-reviewer.md` as the review rubric.

## Snapshot
- **Change**: Added a win score system for cat (🐱) and dog (🐶), keeping score across rounds and displaying it in the main UI.
- **Status**: Done

## The Changes
- [x] Added player/icon mapping in `game.js`:
	- `PLAYER_X_ICON = '🐱'`
	- `PLAYER_O_ICON = '🐶'`
	- `getPlayerIcon(player)` helper to convert logical marks (`X`/`O`) into UI emojis.
- [x] Added score helpers in `game.js`:
	- `createInitialScore()` returns `{ X: 0, O: 0 }`
	- `addWin(score, winner)` returns a new score with the winner incremented.
- [x] Kept core board logic stable (`X`/`O` internally) to avoid regressions in winner detection and move validation.
- [x] Updated UI rendering in `script.js`:
	- Board cells now display emoji icons via `getPlayerIcon`.
	- Status messages now show emoji icons for turn/winner text.
	- Score is stored in memory and updated after each winning round.
- [x] Updated `index.html` to display a scoreboard for:
	- `🐱 Gato`
	- `🐶 Cachorro`
- [x] Updated initial static status text in `index.html` to `Player 🐱's turn`.
- [x] Updated tests in `tests/game.test.js`:
	- Added coverage for `getPlayerIcon('X') -> 🐱` and `getPlayerIcon('O') -> 🐶`.
	- Added assertions for exported icon constants.
	- Added coverage for score helpers (`createInitialScore`, `addWin`).

## Testing Strategy
_How we ensured it works._

- Checked diagnostics in changed files (`game.js`, `script.js`, `index.html`, `tests/game.test.js`) and found no syntax/lint problems.
- Added direct unit coverage for icon mapping behavior in `tests/game.test.js`.
- Existing game-rule tests remain valid and continue validating win/draw/turn logic based on internal marks.

## Risks & Follow-up
- [ ] Browser test runner was not executed in this run; run `tests.html` to fully confirm all test cases in the intended environment.
- [ ] If future tasks require internal storage as emojis (not only display), test helpers that rely on 9-char board strings must be refactored.

---
**Note**: Usually filled by the AI.