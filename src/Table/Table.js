import React, { useState } from 'react';
import uniqid from 'uniqid';
import useTable from './useTable';
import TablePages from './TablePages';

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { tableRows, range } = useTable(data, page, rowsPerPage);

  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
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
