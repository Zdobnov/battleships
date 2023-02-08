import React, { useState } from "react";

import Wrapper from './components/Wrapper/Wrapper';
import Grid from './components/Grid/Grid';
import placeShips from './utils/placeShips';
import generateGrid from './utils/generateGrid';

import "./App.scss";

// SHIPS
const ships = [{
  id: 1,
  size: 5,
  isAlive: true,
}, {
  id: 2,
  size: 4,
  isAlive: true,
}, {
  id: 3,
  size: 4,
  isAlive: true,
}];

const App = () => {
  const [playerGrid, setPlayerGrid] = useState(placeShips(generateGrid(), ships));
  const [opponentGrid, setOpponentGrid] = useState(placeShips(generateGrid(), ships));
  // const [shots, setShots] = useState([]);
  // const [result, setResult] = useState("");

  const handleShot = (coord) => {};

  return (
    <Wrapper>
      <h1 className="title">
        Battleships Game
      </h1>
      <p>
        Shots: {/*shots.join(", ")*/}
      </p>
      <p>
        Result: {/*result*/}
      </p>
      <label>
        Enter coordinate:
        <input
          type="text"
          // onChange={((e) => handleShot(e.target.value))}
        />
      </label>
      <main className="main">
        <div className="field">
          <h3>Player</h3>
          <Grid grid={playerGrid} />
        </div>
        <div className="field">
          <h3>Opponent</h3>
          <Grid grid={opponentGrid} />
        </div>
      </main>
    </Wrapper>
  );
};

export default App;
