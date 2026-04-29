'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState, updateScore
// are provided by game.js, loaded before this script.

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');
const catScore = document.getElementById('cat-score');
const dogScore = document.getElementById('dog-score');
const resetScoresBtn = document.getElementById('reset-scores');

let state = createInitialState();

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i];
    let cssClass = 'cell';
    if (state.board[i] === '😺') cssClass += ' x';
    else if (state.board[i] === '🐶') cssClass += ' o';
    cell.className   = cssClass;
    cell.disabled    = state.board[i] !== '' || state.gameOver;
  });

  // Update scoreboard
  catScore.textContent = state.catScore;
  dogScore.textContent = state.dogScore;
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
      // Update score
      state = updateScore(state, result.winner);
      render(); // Re-render to update scoreboard

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
  // Preserve current scores when starting a new game
  const currentCatScore = state.catScore;
  const currentDogScore = state.dogScore;
  
  state = createInitialState();
  state.catScore = currentCatScore;
  state.dogScore = currentDogScore;
  
  render();
  setStatus(`Player ${state.current}'s turn`);
}

function resetScores() {
  state.catScore = 0;
  state.dogScore = 0;
  render();
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
resetScoresBtn.addEventListener('click', resetScores);

// Initial render
render();
setStatus(`Player ${state.current}'s turn`);
