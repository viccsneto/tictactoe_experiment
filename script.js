'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');

let state = createInitialState();

const PLAYER_VISUAL_MAP = {
  X: '🐱',
  O: '🐶',
};

function toVisualMarker(marker) {
  return PLAYER_VISUAL_MAP[marker] || marker;
}

function formatTurnStatus(player) {
  return `Player ${toVisualMarker(player)}'s turn`;
}

function formatWinnerStatus(player) {
  return `Player ${toVisualMarker(player)} wins!`;
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = toVisualMarker(state.board[i]);
    cell.className   = 'cell' + (state.board[i] ? ` ${state.board[i].toLowerCase()}` : '');
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function handleClick(e) {
  const idx = Number(e.currentTarget.dataset.index);
  if (state.board[idx] || state.gameOver) return;

  const nextBoard = applyMove(state.board, idx, state.current);
  if (!nextBoard) return;
  state.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add('placed');

  const result = checkWinner(state.board);

  if (result) {
    state.gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(formatWinnerStatus(result.winner), 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(formatTurnStatus(state.current));
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(formatTurnStatus(state.current));
}

if (cells.length && status && restartBtn) {
  cells.forEach(cell => cell.addEventListener('click', handleClick));
  restartBtn.addEventListener('click', restartGame);

  // Initial render
  render();
  setStatus(formatTurnStatus(state.current));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    toVisualMarker,
    formatTurnStatus,
    formatWinnerStatus,
  };
}
