import { WINNING_COMBINATIONS } from "../constants";

export const checkWinner = (board) => {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  // If no winner
  return null;
}

export const checkEndGame = board => {
  return !board.some(square => square === null);
}