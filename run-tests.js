const testsToRun = [];

function describe(name, fn) {
  testsToRun.push({ type: 'suite', name });
  fn();
}

function test(name, fn) {
  testsToRun.push({ type: 'test', name, fn });
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) throw new Error(`Expected ${expected} but got ${actual}`);
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
    },
    toHaveLength(expected) {
      if (!actual || actual.length !== expected) throw new Error(`Expected length ${expected} but got ${actual ? actual.length : actual}`);
    },
    toBeGreaterThanOrEqual(expected) {
      if (actual < expected) throw new Error(`Expected >= ${expected} but got ${actual}`);
    },
    toBeLessThanOrEqual(expected) {
      if (actual > expected) throw new Error(`Expected <= ${expected} but got ${actual}`);
    },
    toBeNull() {
      if (actual !== null) throw new Error(`Expected null but got ${actual}`);
    },
    not: {
      toBe(expected) {
        if (actual === expected) throw new Error(`Expected not ${expected}`);
      },
      toBeNull() {
        if (actual === null) throw new Error(`Expected not null`);
      }
    }
  };
}

// Make functions global
global.describe = describe;
global.test = test;
global.expect = expect;

// Load game.js
const gameModule = require('./game.js');
Object.assign(global, gameModule);

// Load tests
require('./tests/game.test.js');

// Run tests
let passedCount = 0;
let failedCount = 0;

for (const item of testsToRun) {
  if (item.type === 'suite') {
    console.log(`\n${item.name}`);
  } else if (item.type === 'test') {
    try {
      item.fn();
      console.log(`  ✅ ${item.name}`);
      passedCount++;
    } catch (err) {
      console.log(`  ❌ ${item.name} - ${err.message}`);
      failedCount++;
    }
  }
}

console.log(`\n\nTests: ${passedCount} passed, ${failedCount} failed out of ${passedCount + failedCount}`);
process.exit(failedCount > 0 ? 1 : 0);
