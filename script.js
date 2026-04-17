"use strict";

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState, replaceSymbol, replaceSymbols
// are provided by game.js, loaded before this script.

const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const xWinsEl = document.getElementById("x-wins");
const oWinsEl = document.getElementById("o-wins");

const X_SYMBOL = "😺";
const O_SYMBOL = "🐶";

let state = createInitialState();
let xWins = 0;
let oWins = 0;

function render() {
  cells.forEach((cell, i) => {
    cell.textContent = state.board[i]
      ? replaceSymbol(state.board[i], X_SYMBOL, O_SYMBOL)
      : "";
    cell.className =
      "cell" + (state.board[i] ? ` ${state.board[i].toLowerCase()}` : "");
    cell.disabled = state.board[i] !== "" || state.gameOver;
  });
}

function updateScoreboard() {
  xWinsEl.textContent = xWins;
  oWinsEl.textContent = oWins;
}

function setStatus(msg, cls = "") {
  status.textContent = msg;
  status.className = "status" + (cls ? ` ${cls}` : "");
}

function handleClick(e) {
  const idx = Number(e.currentTarget.dataset.index);
  if (state.board[idx] || state.gameOver) return;

  const nextBoard = applyMove(state.board, idx, state.current);
  if (!nextBoard) return;
  state.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add("placed");

  const result = checkWinner(state.board);

  if (result) {
    state.gameOver = true;
    if (result.winner) {
      result.combo.forEach((i) => cells[i].classList.add("winning"));
      if (result.winner === "X") xWins++;
      if (result.winner === "O") oWins++;
      updateScoreboard();
      setStatus(
        `Player ${replaceSymbol(result.winner, X_SYMBOL, O_SYMBOL)} wins!`,
        "win",
      );
    } else {
      setStatus("It's a draw!", "draw");
    }
    // Disable all cells
    cells.forEach((c) => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(
    `Player ${replaceSymbol(state.current, X_SYMBOL, O_SYMBOL)}'s turn`,
  );
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(
    `Player ${replaceSymbol(state.current, X_SYMBOL, O_SYMBOL)}'s turn`,
  );
}

cells.forEach((cell) => cell.addEventListener("click", handleClick));
restartBtn.addEventListener("click", restartGame);

// Initial render
render();
updateScoreboard();
setStatus(`Player ${replaceSymbol(state.current, X_SYMBOL, O_SYMBOL)}'s turn`);
