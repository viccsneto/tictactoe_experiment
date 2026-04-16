'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

const cells      = document.querySelectorAll('.cell');
const status     = document.getElementById('status');
const restartBtn = document.getElementById('restart');
const resetScoreBtn = document.getElementById('reset-score');
const scoreCatEl = document.getElementById('score-cat');
const scoreDogEl = document.getElementById('score-dog');

let state = createInitialState();
let scores = loadScores();

function loadScores() {
  try {
    const saved = localStorage.getItem('tictactoe-scores');
    return saved ? JSON.parse(saved) : { '🐱': 0, '🐶': 0 };
  } catch (e) {
    console.warn('localStorage not available, using in-memory scores:', e);
    alert('Pontuação não pode ser salva permanentemente. Os dados serão perdidos ao recarregar a página.');
    return { '🐱': 0, '🐶': 0 };
  }
}

function saveScores() {
  try {
    localStorage.setItem('tictactoe-scores', JSON.stringify(scores));
  } catch (e) {
    console.warn('Failed to save scores to localStorage:', e);
    alert('Erro ao salvar pontuação. Os dados podem ser perdidos.');
  }
}

function updateScoreDisplay() {
  scoreCatEl.textContent = scores['🐱'];
  scoreDogEl.textContent = scores['🐶'];
}

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i];
    cell.className   = 'cell' + (state.board[i] ? ` ${state.board[i] === '🐱' ? 'x' : 'o'}` : '');
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
      scores[result.winner]++;
      saveScores();
      updateScoreDisplay();
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

function resetScore() {
  scores = { '🐱': 0, '🐶': 0 };
  saveScores();
  updateScoreDisplay();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
resetScoreBtn.addEventListener('click', resetScore);

// Initial render
render();
updateScoreDisplay();
setStatus(`Player ${state.current}'s turn`);
