// GRID GENERATOR
const generateGrid = () => {
  let grid = [];

  for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
      row.push({ ship: null });
    }
    grid.push(row);
  }

  return grid;
};

export default generateGrid;