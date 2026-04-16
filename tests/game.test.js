'use strict';

const CAT = '🐱';
const DOG = '🐶';

/** Build a board from a 9-char string (' ', 'X', 'O'). */
function boardFromLegacy(str) {
  return str.split('').map(c => {
    if (c === ' ') return '';
    if (c === 'X') return CAT;
    if (c === 'O') return DOG;
    return c;
  });
}

describe('WINNING_COMBOS', () => {
  test('has exactly 8 combos', () => {
    expect(WINNING_COMBOS).toHaveLength(8);
  });

  test('every combo contains 3 unique indices in range 0-8', () => {
    WINNING_COMBOS.forEach(combo => {
      expect(combo).toHaveLength(3);
      combo.forEach(i => {
        expect(i).toBeGreaterThanOrEqual(0);
        expect(i).toBeLessThanOrEqual(8);
      });
      expect(new Set(combo).size).toBe(3);
    });
  });
});

describe('createInitialState', () => {
  test('returns a board with 9 empty cells', () => {
    const { board } = createInitialState();
    expect(board).toHaveLength(9);
    expect(board.every(c => c === '')).toBe(true);
  });

  test('first player is cat', () => {
    expect(createInitialState().current).toBe(CAT);
  });

  test('gameOver starts false', () => {
    expect(createInitialState().gameOver).toBe(false);
  });
});

describe('getNextPlayer', () => {
  test('cat -> dog', () => {
    expect(getNextPlayer(CAT)).toBe(DOG);
  });

  test('dog -> cat', () => {
    expect(getNextPlayer(DOG)).toBe(CAT);
  });
});

describe('applyMove', () => {
  test('places cat marker in the requested position', () => {
    const board = Array(9).fill('');
    const next = applyMove(board, 4, CAT);
    expect(next[4]).toBe(CAT);
  });

  test('does not mutate original board', () => {
    const board = Array(9).fill('');
    applyMove(board, 0, CAT);
    expect(board[0]).toBe('');
  });

  test('returns null on occupied cell', () => {
    const board = boardFromLegacy('X        ');
    expect(applyMove(board, 0, DOG)).toBeNull();
  });

  test('returns null for invalid index', () => {
    expect(applyMove(Array(9).fill(''), -1, CAT)).toBeNull();
    expect(applyMove(Array(9).fill(''), 9, CAT)).toBeNull();
  });
});

describe('checkWinner', () => {
  test('returns null for in-progress game', () => {
    const board = boardFromLegacy('XOXOX    ');
    expect(checkWinner(board)).toBeNull();
  });

  test('detects cat win on top row', () => {
    const board = boardFromLegacy('XXXOO    ');
    const result = checkWinner(board);
    expect(result.winner).toBe(CAT);
    expect(result.combo).toEqual([0, 1, 2]);
  });

  test('detects cat win on main diagonal', () => {
    const board = Array(9).fill('');
    board[0] = CAT; board[4] = CAT; board[8] = CAT;
    board[1] = DOG; board[2] = DOG;
    const result = checkWinner(board);
    expect(result.winner).toBe(CAT);
    expect(result.combo).toEqual([0, 4, 8]);
  });

  test('detects dog win on left column', () => {
    const board = Array(9).fill('');
    board[0] = DOG; board[3] = DOG; board[6] = DOG;
    board[1] = CAT; board[2] = CAT;
    const result = checkWinner(board);
    expect(result.winner).toBe(DOG);
    expect(result.combo).toEqual([0, 3, 6]);
  });

  test('returns draw object when board is full with no winner', () => {
    const board = boardFromLegacy('XOXOOXXXO');
    const result = checkWinner(board);
    expect(result.winner).toBeNull();
    expect(result.combo).toEqual([]);
  });

  test('winning result shape is stable', () => {
    const board = boardFromLegacy('XXXOO    ');
    const result = checkWinner(board);
    expect(typeof result.winner).toBe('string');
    expect(Array.isArray(result.combo)).toBe(true);
    expect(result.combo).toHaveLength(3);
  });
});
