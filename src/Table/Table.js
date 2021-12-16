import React, { useState } from 'react';
import uniqid from 'uniqid';
import useTable from './useTable';
import TablePages from './TablePages';

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { tableRows, range } = useTable(data, page, rowsPerPage);

  return (
    <>
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
              <td>{el.name}</td>
              <td>{el.points}</td>
              <td style={{ backgroundColor: el.color }} />
            </tr>
          ))}
        </tbody>
      </table>
      <TablePages rage={range} tableRows={tableRows} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
