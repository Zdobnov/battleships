import { useEffect, useState } from "react";

import Wrapper from './components/Wrapper/Wrapper';
import Grid from './components/Grid/Grid';
import placeShips from './utils/placeShips';
import generateGrid from './utils/generateGrid';
import simulateOpponentTurn from "./utils/simulateOpponentTurn";

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

const health = ships.reduce((acc, current) => {
  return acc + current.size;
}, 0);

// ABC TO NUMBER
const abc = {
  'A': 0,
  'B': 1,
  'C': 2,
  'D': 3,
  'E': 4,
  'F': 5,
  'G': 6,
  'H': 7,
  'I': 8,
  'J': 9,
};

const App = () => {
  const [ playerGrid, setPlayerGrid ] = useState(placeShips(generateGrid(), ships));
  const [ opponentGrid, setOpponentGrid ] = useState(placeShips(generateGrid(), ships));
  const [ isPlayerTurn, setPlayerTurn ] = useState(true);
  const [ playerHealth, setPlayerHealth ] = useState(health);
  const [ opponentHealth, setOpponentHealth ] = useState(health);
  const [ coordinates, setCoordinates ] = useState('');
  const [ winner, setWinner ] = useState('');
  const [ error, setError ] = useState(false);

  useEffect(() => {
    if(!isPlayerTurn) {
      setTimeout(() => {
        makeShot(simulateOpponentTurn(playerGrid));
      }, 1000);
    }
  }, [isPlayerTurn]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      playerHealth === 0 ? setWinner('Opponent') : setWinner('Player');
    }
  }, [playerHealth, opponentHealth]);

  const handleChange = event => setCoordinates(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    if (!/^[A-Ia-i]{1}\d{1,2}/g.test(coordinates)) {
      setError(true);
      return;
    }

    const col = coordinates[0].toUpperCase();
    const row = +coordinates.slice(1);

    if (row > 10) {
      setError(true);
      return;
    }

    makeShot([abc[col], ( row - 1 )]);
    setCoordinates('');
  };

  const makeShot = ([ col, row ]) => {
    const newGrid = isPlayerTurn ? [...opponentGrid] : [...playerGrid];

    if (newGrid[col][row].ship) {
      if (newGrid[col][row].ship.miss || !newGrid[col][row].ship.isAlive) {
        setError(true);

        return;
      }

      newGrid[col][row].ship = {
        ...newGrid[col][row].ship,
        isAlive: false,
      }
      isPlayerTurn ? setOpponentHealth(opponentHealth - 1) : setPlayerHealth(playerHealth - 1);
    } else {
      newGrid[col][row].ship = {
        ...newGrid[col][row].ship,
        miss: true,
      };
    }

    isPlayerTurn ?
      (() => {
        setOpponentGrid(newGrid);
        setPlayerTurn(false);
      })() :
      (() => {
        setPlayerGrid(newGrid);
        setPlayerTurn(true);
      })();
    setError('');
  };

  return (
    <Wrapper>
      <h1 className="title">
        Battleships Game
      </h1>
      <p>
        Turn: <b>{isPlayerTurn ? "Player" : 'Opponent'}</b>
      </p>
      <form onSubmit={handleSubmit}>
        Enter coordinate:
        <input
          type="text"
          onChange={handleChange}
          placeholder="E.g. C4"
          value={coordinates}
          disabled={winner || !isPlayerTurn}
          autoFocus
        />
        {error && !winner && (
          <span className="error">
            Wrong tile!
          </span>
        )}
      </form>
      <main className="main">
        <div className="field">
          <h3>
            <span className="winner">
              {winner === 'Player' && 'WINNER - '}
            </span>
            Player (HP: {playerHealth})
          </h3>
          <Grid grid={playerGrid} />
        </div>
        <div className="field">
          <h3>
            <span className="winner">
              {winner === 'Opponent' && 'WINNER - '}
            </span>
            Opponent (HP: {opponentHealth})
          </h3>
          <Grid grid={opponentGrid} />
        </div>
      </main>
    </Wrapper>
  );
};

export default App;
