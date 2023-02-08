import placeShip from "./placeShip";

const placeShips = (grid, ships) => {
  const newGrid = [...grid];

  return ships.reduce((acc, current) => {
    const shipPositions = placeShip(grid, current);
    
    shipPositions.map(([ col, row, ship ]) => {
      acc[col][row] = { ship };
    });

    return acc;
  }, newGrid);
};

export default placeShips;