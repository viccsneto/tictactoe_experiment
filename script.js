'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const scoreX   = document.getElementById('scoreX');
const scoreO   = document.getElementById('scoreO');

const SYMBOLS = {
  X: '🐱',
  O: '🐶',
  '': '',
};

let state = createInitialState();

function displaySymbol(symbol) {
  return SYMBOLS[symbol] ?? symbol;
}

function render() {
  cells.forEach((cell, i) => {
    const symbol = state.board[i];
    cell.textContent = displaySymbol(symbol);
    cell.className   = 'cell' + (symbol ? ` ${symbol.toLowerCase()}` : '');
    cell.disabled    = symbol !== '' || state.gameOver;
  });
  scoreX.textContent = state.scoreX;
  scoreO.textContent = state.scoreO;
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
      if (result.winner === 'X') state.scoreX++;
      else if (result.winner === 'O') state.scoreO++;
      result.combo.forEach(i => cells[i].classList.add('winning'));
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
  const currentScoreX = state.scoreX;
  const currentScoreO = state.scoreO;
  state = createInitialState();
  state.scoreX = currentScoreX;
  state.scoreO = currentScoreO;
  render();
  setStatus(`Player ${displaySymbol(state.current)}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${displaySymbol(state.current)}'s turn`);
