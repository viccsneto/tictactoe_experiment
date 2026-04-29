# Proof of Mastery (REACTO)

> Explain it to prove you own it.

**Hard rule**: AI agents must not edit this file and must not draft paste-ready content for it.

## R — The Problem

The agent had to make a swap between the current letters used in the game for the presented emojis (cat for X, dog for O)

## E — Examples

- **Input**: X

  **Output**: 😺

- **Input**: O

  **Output**: 🐶

## A — Approach

The agent implemented a map where when the cell is going to be rendered, it swaps the respective character by the emoji in the mapping.

## C — Code

In game.js:

'''
function displayMark(mark) {
  return mark === 'X' ? '😺' : mark === 'O' ? '🐶' : '';
}
'''

'''
module.exports = { WINNING_COMBOS, createInitialState, getNextPlayer, applyMove, checkWinner, displayMark };
'''

In script.js:

'''
setStatus(`Player ${displayMark(state.current)}'s turn`);
'''

## T — Tests

The agent made a test where checks if using the specific character is shown the mapped version for that character.

'''
describe('displayMark', () => {
  test('returns a cat face for X', () => {
    expect(displayMark('X')).toBe('😺');
  });

  test('returns a dog face for O', () => {
    expect(displayMark('O')).toBe('🐶');
  });

  test('returns an empty string for unknown marks', () => {
    expect(displayMark('')).toBe('');
    expect(displayMark('Z')).toBe('');
  });
});

'''

## O — Optimization

O(1)