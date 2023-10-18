import { PLAYER } from "../constants";
import Square from "./Square";

const Turn = ({ player }) => {
  return (
    <section className="turn">
      <Square isSelected={player === PLAYER.x}>{PLAYER.x}</Square>
      <Square isSelected={player === PLAYER.o}>{PLAYER.o}</Square>
    </section>
  );
}

export default Turn;