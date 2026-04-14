# Implementation Report

> A concise summary for the reviewer.

**Reviewer note**: If a PR modifies `brainsback/TODO.md` or `brainsback/REACTO.md`, assume this is expected and that those files were modified by the human developer.
If present, use `.github/agents/brainsback-reviewer.md` as the review rubric.

## Snapshot

- **Change**: Added scoreboard to track wins for both players, alongside symbol replacement and UI fixes.
- **Status**: Implementation complete, ready for testing.

## The Changes

- **index.html**: Added scoreboard div with win counters for each player.
- **style.css**: Updated scoreboard styles for the new layout.
- **script.js**: Added win counters (xWins, oWins), updateScoreboard function, and logic to increment wins on victory. Updated initial render to show scoreboard.
- **game.js**: Updated `replaceSymbol(symbol, xSymbol, oSymbol)` and `replaceSymbols(board, xSymbol, oSymbol)` to take symbol parameters instead of hardcoding emojis.
- **script.js**: Added constants `X_SYMBOL = '😺'` and `O_SYMBOL = '🐶'`, updated all calls to `replaceSymbol` and `setStatus` to pass these symbols. Added missing `restartGame` function and event listeners. Removed duplicate render/setStatus calls in `handleClick`.
- **tests/game.test.js**: Updated test cases for `replaceSymbol` and `replaceSymbols` to pass symbol parameters.

## Testing Strategy

- Updated unit tests to verify the new function signatures work correctly.
- Manual testing: Open `index.html` to ensure symbols display properly, new game button resets the game, and player turn status shows emojis.

## Risks & Follow-up

- Symbols are still hardcoded in `script.js`; consider making them configurable via UI or config.
- No new dependencies added.
- All existing tests pass with updated signatures.

---

**Note**: Usually filled by the AI.
