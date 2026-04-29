'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');

let state = createInitialState();

// Score tracking (persists across rounds)
let scores = {
  'X': 0,
  'O': 0
};

// Map player symbols to display symbols
const DISPLAY_SYMBOLS = {
  'X': '🐱',
  'O': '🐶'
};

function getDisplaySymbol(symbol) {
  return DISPLAY_SYMBOLS[symbol] || symbol;
}

function renderScores() {
  scoreXElement.textContent = scores['X'];
  scoreOElement.textContent = scores['O'];
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = getDisplaySymbol(state.board[i]);
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
      // Increment score for the winner
      scores[result.winner]++;
      renderScores();
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${getDisplaySymbol(result.winner)} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${getDisplaySymbol(state.current)}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${getDisplaySymbol(state.current)}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
renderScores();
setStatus(`Player ${getDisplaySymbol(state.current)}'s turn`);
