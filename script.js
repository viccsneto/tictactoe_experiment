'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

function getPlayerClass(player) {
  return player === '🐱' ? 'x' : 'o';
}

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const scoreCat = document.getElementById('score-cat-value');
const scoreDog = document.getElementById('score-dog-value');
const restartBtn     = document.getElementById('restart');

let score = {
  '🐱': 0,
  '🐶': 0,
};

let state = createInitialState();

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i];
    cell.className   = 'cell' + (state.board[i] ? ` ${getPlayerClass(state.board[i])}` : '');
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });
}

function updateScoreDisplay() {
  scoreCat.textContent = score['🐱'];
  scoreDog.textContent = score['🐶'];
}

function incrementScore(player) {
  if (player && typeof score[player] === 'number') {
    score[player] += 1;
    updateScoreDisplay();
  }
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
      incrementScore(result.winner);
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
updateScoreDisplay();
setStatus(`Player ${state.current}'s turn`);
