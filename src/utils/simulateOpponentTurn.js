const simulateOpponentTurn = playerGrid => {
  let coordinates = null;

  while (!coordinates) {
    let col = Math.floor(Math.random() * 10);
    let row = Math.floor(Math.random() * 10);

    if (playerGrid[col][row].ship?.miss === true || playerGrid[col][row].ship?.isAlive === false) {
      continue;
    }

    coordinates = [col, row];
  }

  return coordinates;
};

export default simulateOpponentTurn;