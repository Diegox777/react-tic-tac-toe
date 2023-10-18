import { WINNER } from "../constants";
import Square from "./Square";

const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return null;
  const winnerText = winner === WINNER.draw ? "Draw" : `The winner is:`

  return (
    <section className="winner">
      <div className="text">
        <h2>
          {
            winnerText
          }
        </h2>
        <header className="win">
          {winner !== WINNER.draw && <Square>{winner}</Square>}
        </header>
        <footer>
          <button onClick={resetGame}>RESTART</button>
        </footer>
      </div>
    </section>
  );

}

export default WinnerModal;