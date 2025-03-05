import React from "react";
import Player from "./components/Player.jsx";
import GameBoard from './components/GameBoard.jsx';



function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol = "X" />
          <Player name="player 2" symbol = "O" />
        </ol>
        <GameBoard />
      </div>
      SCORE CARD
    </main>
  );
}

export default App;
