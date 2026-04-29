'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const scoreXEl = document.getElementById('score-x');
const scoreOEl = document.getElementById('score-o');

const PLAYER_EMOJI = {
  X: '🐱',
  O: '🐶',
};

function getPlayerLabel(player) {
  return PLAYER_EMOJI[player] || '';
}

const scores = {
  X: 0,
  O: 0,
};

let state = createInitialState();

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = getPlayerLabel(state.board[i]);
    cell.className   = 'cell' + (state.board[i] ? ` ${state.board[i].toLowerCase()}` : '');
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function updateScoreboard() {
  if (scoreXEl) scoreXEl.textContent = String(scores.X);
  if (scoreOEl) scoreOEl.textContent = String(scores.O);
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
      scores[result.winner] += 1;
      updateScoreboard();
      setStatus(`Player ${getPlayerLabel(result.winner)} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${getPlayerLabel(state.current)}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${getPlayerLabel(state.current)}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${getPlayerLabel(state.current)}'s turn`);
updateScoreboard();
