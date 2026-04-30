'use strict';

// ---------------------------------------------------------------------------
// Helpers for testing scoreboard
// ---------------------------------------------------------------------------

// Use browser's native localStorage
const testLocalStorage = typeof localStorage !== 'undefined' ? localStorage : mockStorage();

function mockStorage() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = String(value);
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      for (const key in store) {
        delete store[key];
      }
    }
  };
}

// Clear localStorage before running scoreboard tests
testLocalStorage.clear();

// ---------------------------------------------------------------------------
// createInitialScoreboard
// ---------------------------------------------------------------------------

describe('createInitialScoreboard', () => {
  test('returns scoreboard with all players at 0', () => {
    const sb = createInitialScoreboard();
    expect(sb['🐱']).toBe(0);
    expect(sb['🐶']).toBe(0);
    expect(sb['draws']).toBe(0);
  });

  test('each call returns a distinct object', () => {
    const sb1 = createInitialScoreboard();
    const sb2 = createInitialScoreboard();
    expect(sb1).not.toBe(sb2);
  });
});

// ---------------------------------------------------------------------------
// loadScoreboard
// ---------------------------------------------------------------------------

describe('loadScoreboard', () => {
  test('returns initial scoreboard if localStorage is empty', () => {
    testLocalStorage.clear();
    const sb = loadScoreboard();
    expect(sb['🐱']).toBe(0);
    expect(sb['🐶']).toBe(0);
    expect(sb['draws']).toBe(0);
  });

  test('returns loaded scoreboard from localStorage', () => {
    testLocalStorage.clear();
    const saved = { '🐱': 5, '🐶': 3, 'draws': 2 };
    testLocalStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    const sb = loadScoreboard();
    expect(sb['🐱']).toBe(5);
    expect(sb['🐶']).toBe(3);
    expect(sb['draws']).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// saveScoreboard
// ---------------------------------------------------------------------------

describe('saveScoreboard', () => {
  test('persists scoreboard to localStorage', () => {
    testLocalStorage.clear();
    const sb = { '🐱': 7, '🐶': 4, 'draws': 1 };
    saveScoreboard(sb);
    const retrieved = JSON.parse(testLocalStorage.getItem(STORAGE_KEY));
    expect(retrieved['🐱']).toBe(7);
    expect(retrieved['🐶']).toBe(4);
    expect(retrieved['draws']).toBe(1);
  });
});

// ---------------------------------------------------------------------------
// recordWin
// ---------------------------------------------------------------------------

describe('recordWin', () => {
  test('increments cat player wins', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordWin(sb, '🐱');
    expect(sb['🐱']).toBe(1);
  });

  test('increments dog player wins', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordWin(sb, '🐶');
    expect(sb['🐶']).toBe(1);
  });

  test('multiple wins accumulate', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordWin(sb, '🐱');
    recordWin(sb, '🐱');
    recordWin(sb, '🐶');
    recordWin(sb, '🐱');
    expect(sb['🐱']).toBe(3);
    expect(sb['🐶']).toBe(1);
  });

  test('persists wins to localStorage', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordWin(sb, '🐱');
    const retrieved = JSON.parse(testLocalStorage.getItem(STORAGE_KEY));
    expect(retrieved['🐱']).toBe(1);
  });

  test('ignores invalid players', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordWin(sb, 'invalid');
    expect(sb['🐱']).toBe(0);
    expect(sb['🐶']).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// recordDraw
// ---------------------------------------------------------------------------

describe('recordDraw', () => {
  test('increments draw count', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordDraw(sb);
    expect(sb['draws']).toBe(1);
  });

  test('multiple draws accumulate', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordDraw(sb);
    recordDraw(sb);
    recordDraw(sb);
    expect(sb['draws']).toBe(3);
  });

  test('persists draws to localStorage', () => {
    testLocalStorage.clear();
    const sb = createInitialScoreboard();
    recordDraw(sb);
    recordDraw(sb);
    const retrieved = JSON.parse(testLocalStorage.getItem(STORAGE_KEY));
    expect(retrieved['draws']).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// resetScoreboard
// ---------------------------------------------------------------------------

describe('resetScoreboard', () => {
  test('resets all scores to 0', () => {
    testLocalStorage.clear();
    const sb = { '🐱': 10, '🐶': 5, 'draws': 3 };
    saveScoreboard(sb);
    const reset = resetScoreboard();
    expect(reset['🐱']).toBe(0);
    expect(reset['🐶']).toBe(0);
    expect(reset['draws']).toBe(0);
  });

  test('persists reset state to localStorage', () => {
    testLocalStorage.clear();
    const sb = { '🐱': 10, '🐶': 5, 'draws': 3 };
    saveScoreboard(sb);
    resetScoreboard();
    const retrieved = JSON.parse(testLocalStorage.getItem(STORAGE_KEY));
    expect(retrieved['🐱']).toBe(0);
    expect(retrieved['🐶']).toBe(0);
    expect(retrieved['draws']).toBe(0);
  });
});

// ---------------------------------------------------------------------------
// Integration Tests
// ---------------------------------------------------------------------------

describe('Scoreboard Integration', () => {
  test('match sequence: cat wins, draw, dog wins', () => {
    testLocalStorage.clear();
    const sb = loadScoreboard();
    
    recordWin(sb, '🐱');
    expect(sb['🐱']).toBe(1);
    
    recordDraw(sb);
    expect(sb['draws']).toBe(1);
    
    recordWin(sb, '🐶');
    expect(sb['🐶']).toBe(1);
    
    // Verify persistence
    const loaded = loadScoreboard();
    expect(loaded['🐱']).toBe(1);
    expect(loaded['🐶']).toBe(1);
    expect(loaded['draws']).toBe(1);
  });

  test('scoreboard persists across load/save cycles', () => {
    testLocalStorage.clear();
    let sb = createInitialScoreboard();
    recordWin(sb, '🐱');
    recordWin(sb, '🐱');
    recordDraw(sb);
    
    // Simulate page reload
    sb = loadScoreboard();
    expect(sb['🐱']).toBe(2);
    expect(sb['draws']).toBe(1);
    
    recordWin(sb, '🐶');
    
    // Another reload
    sb = loadScoreboard();
    expect(sb['🐱']).toBe(2);
    expect(sb['🐶']).toBe(1);
    expect(sb['draws']).toBe(1);
  });
});
