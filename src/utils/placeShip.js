// PLACE ONE SHIP ON GRID
const placeShip = (grid, ship) => {
  let newGrid = [...grid];
  let placed = false;
  let shipPositions = [];

  while (!placed) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    let direction = Math.floor(Math.random() * 2) ? 'horizontal' : 'vertical';

    if (direction === 'horizontal') {
      let canPlace = true;
  
      for (let i = col; i < col + ship.size; i++) {
        if (i + ship.size > 10 || newGrid[row][i].ship) {
          canPlace = false;
          break;
        }
      }

      if (canPlace) {
        for (let i = col; i < col + ship.size; i++) {
          newGrid[row][i].ship = ship.id;
          shipPositions.push([row, i, ship]);
        }
        placed = true;
      }
    } else {
      let canPlace = true;

      for (let i = row; i < row + ship.size; i++) {
        if (i + ship.size > 10 || newGrid[i][col].ship) {
          canPlace = false;
          break;
        }
      }
      if (canPlace) {
        for (let i = row; i < row + ship.size; i++) {
          newGrid[i][col].ship = ship.id;
          shipPositions.push([i, col, ship]);
        }
        placed = true;
      }
    }
  }

  return shipPositions;
};

export default placeShip;