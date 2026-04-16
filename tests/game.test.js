'use strict';

// ---------------------------------------------------------------------------
// WINNING_COMBOS
// ---------------------------------------------------------------------------

describe('WINNING_COMBOS', () => {
  test('has exactly 8 combos', () => {
    expect(WINNING_COMBOS).toHaveLength(8);
  });

  test('every combo contains exactly 3 unique indices in range 0-8', () => {
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

// ---------------------------------------------------------------------------
// createInitialState
// ---------------------------------------------------------------------------

describe('createInitialState', () => {
  test('returns a board of 9 empty strings', () => {
    const { board } = createInitialState();
    expect(board).toHaveLength(9);
    expect(board.every(c => c === '')).toBe(true);
  });

  test('first player is X', () => {
    expect(createInitialState().current).toBe('🐱');
  });

  test('gameOver is false', () => {
    expect(createInitialState().gameOver).toBe(false);
  });

  test('each call returns a distinct board array', () => {
    const s1 = createInitialState();
    const s2 = createInitialState();
    expect(s1.board).not.toBe(s2.board);
  });
});

// ---------------------------------------------------------------------------
// getNextPlayer
// ---------------------------------------------------------------------------

describe('getNextPlayer', () => {
  test('X -> O', () => {
    expect(getNextPlayer('🐱')).toBe('🐶');
  });

  test('O -> X', () => {
    expect(getNextPlayer('🐶')).toBe('🐱');
  });
});

// ---------------------------------------------------------------------------
// applyMove
// ---------------------------------------------------------------------------

describe('applyMove', () => {
  test('places the player mark on the correct cell', () => {
    const board = Array(9).fill('');
    const next = applyMove(board, 4, '🐱');
    expect(next[4]).toBe('🐱');
  });

  test('does not mutate the original board', () => {
    const board = Array(9).fill('');
    applyMove(board, 0, '🐱');
    expect(board[0]).toBe('');
  });

  test('returns null when cell is already occupied', () => {
    const board = ['🐱', '', '', '', '', '', '', '', ''];
    expect(applyMove(board, 0, '🐶')).toBeNull();
  });

  test('returns null for index below 0', () => {
    expect(applyMove(Array(9).fill(''), -1, '🐱')).toBeNull();
  });

  test('returns null for index above 8', () => {
    expect(applyMove(Array(9).fill(''), 9, '🐱')).toBeNull();
  });

  test('all other cells remain unchanged', () => {
    const board = Array(9).fill('');
    const next = applyMove(board, 3, '🐶');
    next.forEach((cell, i) => {
      if (i !== 3) expect(cell).toBe('');
    });
  });
});

// ---------------------------------------------------------------------------
// checkWinner
// ---------------------------------------------------------------------------

describe('checkWinner — in-progress games return null', () => {
  test('empty board', () => {
    expect(checkWinner(Array(9).fill(''))).toBeNull();
  });

  test('one move played', () => {
    const board = ['🐱', '', '', '', '', '', '', '', ''];
    expect(checkWinner(board)).toBeNull();
  });

  test('no winner yet with several moves', () => {
    const board = ['🐱', '🐶', '', '🐶', '', '', '', '', ''];
    expect(checkWinner(board)).toBeNull();
  });
});

describe('checkWinner — X wins', () => {
  test('top row', () => {
    const board = ['🐱', '🐱', '🐱', '🐶', '🐶', '', '', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([0, 1, 2]);
  });

  test('middle row', () => {
    //   🐶      <- 0-2
    // 🐱 🐱 🐱    <- 3-5
    //   🐶      <- 6-8
    const board = ['', '🐶', '', '🐱', '🐱', '🐱', '🐶', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([3, 4, 5]);
  });

  test('bottom row', () => {
    const board = ['', '', '', '', '', '', '🐱', '🐱', '🐱'];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([6, 7, 8]);
  });

  test('left column', () => {
    const board = ['🐱', '', '', '🐱', '', '', '🐱', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([0, 3, 6]);
  });

  test('middle column', () => {
    const board = ['', '🐱', '', '', '🐱', '', '', '🐱', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([1, 4, 7]);
  });

  test('right column', () => {
    const board = ['', '', '🐱', '', '', '🐱', '', '', '🐱'];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([2, 5, 8]);
  });

  test('main diagonal (top-left to bottom-right)', () => {
    const board = ['🐱', '', '', '', '🐱', '', '', '', '🐱'];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([0, 4, 8]);
  });

  test('anti-diagonal (top-right to bottom-left)', () => {
    const board = ['', '', '🐱', '', '🐱', '', '🐱', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐱');
    expect(result.combo).toEqual([2, 4, 6]);
  });
});

describe('checkWinner — O wins', () => {
  test('top row', () => {
    const board = ['🐶', '🐶', '🐶', '', '', '', '', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐶');
    expect(result.combo).toEqual([0, 1, 2]);
  });

  test('left column', () => {
    const board = ['🐶', '', '', '🐶', '', '', '🐶', '', ''];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBe('🐶');
    expect(result.combo).toEqual([0, 3, 6]);
  });
});

describe('checkWinner — draw', () => {
  test('full board with no winner returns { winner: null, combo: [] }', () => {
    // 🐱 🐶 🐱
    // 🐶 🐶 🐱
    // 🐱 🐱 🐶  — no three in a row
    const board = ['🐱', '🐶', '🐱', '🐶', '🐶', '🐱', '🐱', '🐱', '🐶'];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBeNull();
    expect(result.combo).toEqual([]);
  });

  test('another valid draw board', () => {
    // 🐶 🐱 🐶
    // 🐶 🐱 🐱
    // 🐱 🐶 🐱
    const board = ['🐶', '🐱', '🐶', '🐶', '🐱', '🐱', '🐱', '🐶', '🐱'];
    const result = checkWinner(board);
    expect(result).not.toBeNull();
    expect(result.winner).toBeNull();
    expect(result.combo).toEqual([]);
  });
});

describe('checkWinner — result shape', () => {
  test('winning result has winner string and combo array', () => {
    const b = Array(9).fill('');
    b[0] = 'X'; b[1] = 'X'; b[2] = 'X';
    const result = checkWinner(b);
    expect(typeof result.winner).toBe('string');
    expect(Array.isArray(result.combo)).toBe(true);
    expect(result.combo).toHaveLength(3);
  });

  test('combo indices are valid board positions', () => {
    const b = Array(9).fill('');
    b[0] = 'O'; b[1] = 'O'; b[2] = 'O';
    const { combo } = checkWinner(b);
    combo.forEach(i => {
      expect(i).toBeGreaterThanOrEqual(0);
      expect(i).toBeLessThanOrEqual(8);
    });
  });
});
