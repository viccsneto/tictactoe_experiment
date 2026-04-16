'use strict';

describe('visual marker mapping', () => {
  test('maps X to cat emoji', () => {
    expect(toVisualMarker('X')).toBe('🐱');
  });

  test('maps O to dog emoji', () => {
    expect(toVisualMarker('O')).toBe('🐶');
  });

  test('keeps unknown markers unchanged', () => {
    expect(toVisualMarker('')).toBe('');
  });
});

describe('status text formatting', () => {
  test('turn status uses cat emoji for X', () => {
    expect(formatTurnStatus('X')).toBe("Player 🐱's turn");
  });

  test('turn status uses dog emoji for O', () => {
    expect(formatTurnStatus('O')).toBe("Player 🐶's turn");
  });

  test('winner status uses cat emoji for X', () => {
    expect(formatWinnerStatus('X')).toBe('Player 🐱 wins!');
  });

  test('winner status uses dog emoji for O', () => {
    expect(formatWinnerStatus('O')).toBe('Player 🐶 wins!');
  });
});
