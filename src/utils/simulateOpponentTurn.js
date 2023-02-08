const simulateOpponentTurn = playerGrid => {
  let coordinates = null;

  while (!coordinates) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    if (!playerGrid[col, row].ship || !playerGrid[col, row].ship.isAlive) {
      coordinates = [col, row];
    }
  }

  return coordinates;
};

export default simulateOpponentTurn;