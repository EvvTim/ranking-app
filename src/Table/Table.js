import React, { useState } from 'react';
import uniqid from 'uniqid';
import useTable from '../hooks/useTable';
import TablePages from './TablePages';

const Table = ({ data, rowsPerPage, sortByName, sortByPoints, nameCellArrow, pointsCellArrow }) => {
  const [page, setPage] = useState(1);
  const { tableRows, range } = useTable(data, page, rowsPerPage);

  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th onClick={sortByName} className="header-name-cell">
              <span>Name</span> <span className="arrow">{nameCellArrow}</span>
            </th>
            <th onClick={sortByPoints} className="header-points-cell">
              <span>Points</span>
              <span className="arrow">{pointsCellArrow}</span>
            </th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((el) => (
            <tr key={uniqid()}>
              <td className="name-cell">{el.name}</td>
              <td className="points-cell">{el.points}</td>
              <td className="color-cell" style={{ backgroundColor: el.color }} />
            </tr>
          ))}
        </tbody>
      </table>
      <TablePages rage={range} tableRows={tableRows} setPage={setPage} page={page} />
    </section>
  );
};

export default Table;
