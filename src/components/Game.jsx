import Square from "./Square";

const Game = ({ board, updateBoard }) => {
  return ( 
    <section className="game">
    {
      board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={() => updateBoard(index)}
          >
            {board[index]}
          </Square>
        )
      })
    }
  </section>

   );
}
 
export default Game;