'use strict';

function clickCell(index) {
  document.querySelector(`.cell[data-index="${index}"]`).click();
}

function resetMatch() {
  window.__tictactoeTestHooks.resetScoreForTests();
  document.getElementById('restart').click();
}

function getScores() {
  return {
    cat: Number(document.getElementById('score-cat').textContent),
    dog: Number(document.getElementById('score-dog').textContent),
  };
}

describe('scoreboard', () => {
  test('dog win adds one point to the dog', () => {
    resetMatch();
    clickCell(0);
    clickCell(3);
    clickCell(1);
    clickCell(4);
    clickCell(8);
    clickCell(5);

    expect(getScores()).toEqual({ cat: 0, dog: 1 });
  });

  test('cat win adds one point to the cat', () => {
    resetMatch();
    clickCell(0);
    clickCell(3);
    clickCell(1);
    clickCell(4);
    clickCell(2);

    expect(getScores()).toEqual({ cat: 1, dog: 0 });
  });

  test('draw does not change either score', () => {
    resetMatch();
    clickCell(0);
    clickCell(1);
    clickCell(2);
    clickCell(4);
    clickCell(3);
    clickCell(5);
    clickCell(7);
    clickCell(6);
    clickCell(8);

    expect(getScores()).toEqual({ cat: 0, dog: 0 });
  });

  test('scores persist across new games', () => {
    resetMatch();
    clickCell(0);
    clickCell(3);
    clickCell(1);
    clickCell(4);
    clickCell(2);

    document.getElementById('restart').click();

    expect(getScores()).toEqual({ cat: 1, dog: 0 });
  });
});
