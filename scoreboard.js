'use strict';

/**
 * Scoreboard management for tracking wins and draws across matches.
 * Persists data to localStorage.
 */

const STORAGE_KEY = 'tictactoe_scoreboard';

/**
 * Returns the initial scoreboard state.
 */
function createInitialScoreboard() {
  return {
    '🐱': 0,
    '🐶': 0,
    'draws': 0
  };
}

/**
 * Loads scoreboard from localStorage, or returns initial state if not found.
 */
function loadScoreboard() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return createInitialScoreboard();
}

/**
 * Saves scoreboard to localStorage.
 */
function saveScoreboard(scoreboard) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scoreboard));
}

/**
 * Records a win for the given player.
 */
function recordWin(scoreboard, player) {
  if (player === '🐱' || player === '🐶') {
    scoreboard[player]++;
    saveScoreboard(scoreboard);
  }
}

/**
 * Records a draw.
 */
function recordDraw(scoreboard) {
  scoreboard['draws']++;
  saveScoreboard(scoreboard);
}

/**
 * Renders the scoreboard on the DOM.
 */
function renderScoreboard(scoreboard) {
  const catScore = document.getElementById('cat-score');
  const dogScore = document.getElementById('dog-score');
  const drawScore = document.getElementById('draw-score');

  if (catScore) catScore.textContent = scoreboard['🐱'];
  if (dogScore) dogScore.textContent = scoreboard['🐶'];
  if (drawScore) drawScore.textContent = scoreboard['draws'];
}

/**
 * Resets scoreboard to initial state and updates localStorage.
 */
function resetScoreboard() {
  const initial = createInitialScoreboard();
  saveScoreboard(initial);
  renderScoreboard(initial);
  return initial;
}

// Allow require() in Node.js (Jest) while remaining a plain script in the browser.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    createInitialScoreboard, 
    loadScoreboard, 
    saveScoreboard, 
    recordWin, 
    recordDraw, 
    renderScoreboard,
    resetScoreboard,
    STORAGE_KEY 
  };
}
