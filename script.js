'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const catScoreEl = document.getElementById('cat-score');
const dogScoreEl = document.getElementById('dog-score');

let state = createInitialState();

// Score tracking
let catScore = 0;
let dogScore = 0;

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = displaySymbol(state.board[i]);
    cell.className   = 'cell' + (state.board[i] ? ` ${state.board[i].toLowerCase()}` : '');
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });
}

function updateScore() {
  if (catScoreEl) catScoreEl.textContent = catScore;
  if (dogScoreEl) dogScoreEl.textContent = dogScore;
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
      // Increment score based on winner
      if (result.winner === 'X') {
        catScore++;
      } else {
        dogScore++;
      }
      updateScore();
      setStatus(`Player ${displaySymbol(result.winner)} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${displaySymbol(state.current)}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${displaySymbol(state.current)}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${displaySymbol(state.current)}'s turn`);
