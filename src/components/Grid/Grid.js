import "./Grid.scss";

const Grid = ({ grid }) => (
  <table>
    <tbody>
      {grid.map((row, i) => (
        <tr key={i}>
          {row.map((col, j) => (
            <td
              key={j}
              className={`${col.ship?.isAlive === true ? 'ship' : ''} ${col.ship?.isAlive === false ? 'hit' : ''} ${col.ship?.miss === true ? 'miss' : ''}`}
            >
              {col.ship?.id}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
