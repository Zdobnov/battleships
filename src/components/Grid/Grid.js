import "./Grid.scss";

const Grid = ({ grid }) => (
  <table>
    <tbody>
      {grid.map((row, i) => (
        <tr key={i}>
          {row.map((col, j) => (
            <td key={j} className={`${col.ship?.isAlive ? 'ship' : ''}`}>
              {col.ship?.id}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
