'use strict';

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],            // diagonals
];

const DISPLAY_SYMBOLS = {
  X: '🐱',
  O: '🐶',
};

const INITIAL_SCORE = {
  X: 0,
  O: 0,
};

/**
 * Returns the initial game state.
 */
function createInitialState() {
  return {
    board:   Array(9).fill(''),
    current: 'X',
    gameOver: false,
  };
}

/**
 * Returns the next player given the current one.
 * @param {'X'|'O'} current
 * @returns {'X'|'O'}
 */
function getNextPlayer(current) {
  return current === 'X' ? 'O' : 'X';
}

/**
 * Maps an internal player mark to the symbol shown in the UI.
 * @param {'X'|'O'|string} mark
 * @returns {string}
 */
function getDisplaySymbol(mark) {
  return DISPLAY_SYMBOLS[mark] || mark;
}

/**
 * Returns the initial scoreboard state.
 */
function createInitialScore() {
  return { ...INITIAL_SCORE };
}

/**
 * Returns a new scoreboard with one extra win for the provided winner.
 * @param {{ X: number, O: number }} score
 * @param {'X'|'O'} winner
 * @returns {{ X: number, O: number }}
 */
function applyWinToScore(score, winner) {
  return {
    ...score,
    [winner]: score[winner] + 1,
  };
}

/**
 * Returns a new board with the move applied, or null if the move is invalid.
 * @param {string[]} board
 * @param {number}   index  0-8
 * @param {'X'|'O'} player
 * @returns {string[]|null}
 */
function applyMove(board, index, player) {
  if (index < 0 || index > 8) return null;
  if (board[index] !== '')    return null;
  const next = board.slice();
  next[index] = player;
  return next;
}

/**
 * Checks the board for a winner or draw.
 * @param {string[]} board
 * @returns {{ winner: string, combo: number[] }|{ winner: null, combo: [] }|null}
 *   - Object with winner ('X'|'O') and winning combo indices if someone won.
 *   - Object with winner null and empty combo if the board is full (draw).
 *   - null if the game is still in progress.
 */
function checkWinner(board) {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combo };
    }
  }
  if (board.every(cell => cell !== '')) return { winner: null, combo: [] };
  return null;
}

// Allow require() in Node.js (Jest) while remaining a plain script in the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    WINNING_COMBOS,
    DISPLAY_SYMBOLS,
    INITIAL_SCORE,
    createInitialState,
    getNextPlayer,
    getDisplaySymbol,
    createInitialScore,
    applyWinToScore,
    applyMove,
    checkWinner,
  };
}