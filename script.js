'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const catScore = document.getElementById('catScore');
const dogScore = document.getElementById('dogScore');
const restartBtn     = document.getElementById('restart');

let state = createInitialState();
let score = createInitialScore();

function getSymbolClass(symbol) {
  if (symbol === CAT_FACE) return 'cat';
  if (symbol === DOG_FACE) return 'dog';
  return '';
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i];
    cell.className   = 'cell' + (state.board[i] ? ` ${getSymbolClass(state.board[i])}` : '');
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });
}

function setStatus(msg, cls = '') {
  status.textContent = msg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function renderScoreboard() {
  catScore.textContent = score.cat;
  dogScore.textContent = score.dog;
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
      score = updateScore(score, result.winner);
      renderScoreboard();
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${result.winner} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${state.current}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${state.current}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
renderScoreboard();
setStatus(`Player ${state.current}'s turn`);
