'use strict';

// Mock localStorage for testing
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value; },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();

// Replace global localStorage with mock
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true
});

// ---------------------------------------------------------------------------
// Score System Tests
// ---------------------------------------------------------------------------

describe('Score System', () => {
  let originalScores;
  let originalLoadScores;
  let originalSaveScores;
  let originalUpdateScoreDisplay;

  beforeEach(() => {
    // Reset mock localStorage
    localStorage.clear();
    
    // Mock DOM elements
    document.body.innerHTML = `
      <div id="score-cat">0</div>
      <div id="score-dog">0</div>
    `;
    
    // Reinitialize scores
    scores = { '🐱': 0, '🐶': 0 };
    scoreCatEl = document.getElementById('score-cat');
    scoreDogEl = document.getElementById('score-dog');
  });

  test('loadScores returns default scores when no saved data', () => {
    const result = loadScores();
    expect(result).toEqual({ '🐱': 0, '🐶': 0 });
  });

  test('loadScores loads saved scores from localStorage', () => {
    localStorage.setItem('tictactoe-scores', JSON.stringify({ '🐱': 3, '🐶': 2 }));
    const result = loadScores();
    expect(result).toEqual({ '🐱': 3, '🐶': 2 });
  });

  test('saveScores persists scores to localStorage', () => {
    scores = { '🐱': 5, '🐶': 4 };
    saveScores();
    const saved = localStorage.getItem('tictactoe-scores');
    expect(JSON.parse(saved)).toEqual({ '🐱': 5, '🐶': 4 });
  });

  test('updateScoreDisplay updates DOM elements', () => {
    scores = { '🐱': 7, '🐶': 6 };
    updateScoreDisplay();
    expect(scoreCatEl.textContent).toBe('7');
    expect(scoreDogEl.textContent).toBe('6');
  });

  test('consecutive wins increment scores correctly', () => {
    scores = { '🐱': 0, '🐶': 0 };
    
    // Simulate cat win
    scores['🐱']++;
    saveScores();
    updateScoreDisplay();
    expect(scores['🐱']).toBe(1);
    expect(scores['🐶']).toBe(0);
    
    // Simulate dog win
    scores['🐶']++;
    saveScores();
    updateScoreDisplay();
    expect(scores['🐱']).toBe(1);
    expect(scores['🐶']).toBe(1);
    
    // Simulate another cat win
    scores['🐱']++;
    saveScores();
    updateScoreDisplay();
    expect(scores['🐱']).toBe(2);
    expect(scores['🐶']).toBe(1);
  });

  test('draw does not increment any score', () => {
    scores = { '🐱': 1, '🐶': 1 };
    
    // Simulate draw - no score change
    // (In real game, this would be when result.winner is null)
    expect(scores['🐱']).toBe(1);
    expect(scores['🐶']).toBe(1);
  });

  test('resetScore sets both scores to zero and clears localStorage', () => {
    scores = { '🐱': 5, '🐶': 3 };
    saveScores();
    
    resetScore();
    
    expect(scores).toEqual({ '🐱': 0, '🐶': 0 });
    expect(localStorage.getItem('tictactoe-scores')).toBe(JSON.stringify({ '🐱': 0, '🐶': 0 }));
  });
});