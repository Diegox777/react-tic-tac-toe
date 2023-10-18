import confetti from "canvas-confetti";
import { useState } from "react";
import { PLAYER, WINNER } from "./constants";
import { checkEndGame, checkWinner } from "./utils/board";
import WinnerModal from "./components/WinnerModal";
import Turn from "./components/Turn";
import Game from "./components/Game";


function App() {
  // don't initialize the state inside an if, loop, etc 
  // the state initialization only occurs one time

  const [board, setBoard] = useState(() => {
    const savedGame = localStorage.getItem('board');
    return savedGame ? JSON.parse(savedGame) : Array(9).fill(null);
  });

  const [player, setPlayer] = useState(() => {
    const savedPlayerTurn = localStorage.getItem('player');
    return savedPlayerTurn ? JSON.parse(savedPlayerTurn) : PLAYER.x;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const nextPlayer = player === PLAYER.x ? PLAYER.o : PLAYER.x;
    let newBoard = [...board];
    newBoard[index] = player;
    
    // this is async 
    setPlayer(nextPlayer);    
    setBoard(newBoard);

    localStorage.setItem('board', JSON.stringify(newBoard));
    localStorage.setItem('player', JSON.stringify(nextPlayer));

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(WINNER.draw)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer(PLAYER.x);
    setWinner(null);

    localStorage.removeItem('board');
    localStorage.removeItem('player');
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>RESET GAME</button>
      <Game board={board} updateBoard={updateBoard} />      
      <Turn player={player} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
