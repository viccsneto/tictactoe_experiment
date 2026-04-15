'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const resetScoreBtn  = document.getElementById('resetScore');
const catScoreEl = document.getElementById('catScore');
const dogScoreEl = document.getElementById('dogScore');

let state = createInitialState();

// Score management
let scores = {
  cat: 0,  // X player (cat)
  dog: 0   // O player (dog)
};

/**
 * Load scores from localStorage
 */
function loadScores() {
  const saved = localStorage.getItem('tictactoe_scores');
  if (saved) {
    scores = JSON.parse(saved);
    updateScoreDisplay();
  }
}

/**
 * Save scores to localStorage
 */
function saveScores() {
  localStorage.setItem('tictactoe_scores', JSON.stringify(scores));
}

/**
 * Update the score display on the page
 */
function updateScoreDisplay() {
  catScoreEl.textContent = scores.cat;
  dogScoreEl.textContent = scores.dog;
}

/**
 * Maps internal game symbols (X, O) to display symbols (emojis).
 * X -> 😺 (cat face)
 * O -> 🐶 (dog face)
 */
function getDisplaySymbol(symbol) {
  if (symbol === 'X') return '😺';
  if (symbol === 'O') return '🐶';
  return symbol;
}

function render() {
  cells.forEach((cell, i) => {
    const displaySymbol = getDisplaySymbol(state.board[i]);
    cell.textContent = displaySymbol;
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
      const displaySymbol = getDisplaySymbol(result.winner);
      setStatus(`Player ${displaySymbol} wins!`, 'win');
      
      // Update score
      if (result.winner === 'X') {
        scores.cat++;
      } else if (result.winner === 'O') {
        scores.dog++;
      }
      saveScores();
      updateScoreDisplay();
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  const displaySymbol = getDisplaySymbol(state.current);
  setStatus(`Player ${displaySymbol}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  const initialSymbol = getDisplaySymbol(state.current);
  setStatus(`Player ${initialSymbol}'s turn`);
}

function resetScores() {
  if (confirm('Are you sure you want to reset all scores?')) {
    scores = { cat: 0, dog: 0 };
    saveScores();
    updateScoreDisplay();
  }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
resetScoreBtn.addEventListener('click', resetScores);

// Initial render and load data
loadScores();
render();
const initialSymbol = getDisplaySymbol(state.current);
setStatus(`Player ${initialSymbol}'s turn`);
