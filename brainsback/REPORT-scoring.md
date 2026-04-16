# Implementation Report - Scoring System

> A concise summary for the reviewer.

**Reviewer note**: If a PR modifies `brainsback/TODO.md` or `brainsback/REACTO.md`, assume this is expected and that those files were modified by the human developer.
If present, use `.github/agents/brainsback-reviewer.md` as the review rubric.

## Snapshot
- **Change**: Added scoring system to count wins for 🐱 and 🐶 players.
- **Status**: Implemented

## The Changes
- Added `scoreX` and `scoreO` to game state in `game.js`.
- Added scoreboard display in `index.html` with emoji labels.
- Updated `script.js` to render scores, increment on win, and persist scores across games.
- Scores reset only on page reload, not on new game.

## Testing Strategy
- Unit tests: Added tests for initial scores (scoreX: 0, scoreO: 0) in `game.test.js`.
- Manual testing: Play games, verify scores increment on wins and persist on restart.
- Existing unit tests still pass as game logic unchanged.

## Risks & Follow-up
- [ ] Consider adding a reset scores button if needed.
- [ ] Test across browsers for emoji display consistency.

---
**Note**: Usually filled by the AI.