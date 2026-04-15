'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const catScoreEl = document.getElementById('score-cat');
const dogScoreEl = document.getElementById('score-dog');

let state = createInitialState();
const score = {
  [PLAYER_CAT]: 0,
  [PLAYER_DOG]: 0,
};

function renderScore() {
  if (catScoreEl) catScoreEl.textContent = String(score[PLAYER_CAT]);
  if (dogScoreEl) dogScoreEl.textContent = String(score[PLAYER_DOG]);
}

function playerCssClass(player) {
  if (player === PLAYER_CAT) return 'cat';
  if (player === PLAYER_DOG) return 'dog';
  return '';
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i];
    cell.className   = 'cell' + (state.board[i] ? ` ${playerCssClass(state.board[i])}` : '');
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
      score[result.winner] += 1;
      renderScore();
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`${result.winner} venceu!`, 'win');
    } else {
      setStatus('Empate!', 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Vez do ${state.current}`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Vez do ${state.current}`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
renderScore();
setStatus(`Vez do ${state.current}`);
