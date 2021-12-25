import React, { useState } from 'react';
import uniqid from 'uniqid';
import useTable from '../hooks/useTable';
import TablePages from './TablePages';
import useSort from '../hooks/useSort';
import useSortByName from '../hooks/useSortByName';
import useSortByPoints from '../hooks/useSortByPoints';

const Table = ({ data, rowsPerPage }) => {
  const [sortFlag, setSortFlag] = useState(false);
  const [page, setPage] = useState(1);

  const { sortByPointsHandler, sortByNameHandler, sortByName, sortByPoints } = useSort(data);
  const sortByNameData = useSortByName(sortByName, data);
  const sortByPointsData = useSortByPoints(sortByPoints, data);
  const { tableRows, range } = useTable(
    sortFlag ? sortByNameData : sortByPointsData,
    page,
    rowsPerPage
  );

  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th
              onClick={() => {
                sortByNameHandler();
                setSortFlag(true);
              }}
              className="header-name-cell">
              <span>Name</span> <span className="arrow">{sortByName ? '↑' : '↓'}</span>
            </th>
            <th
              onClick={() => {
                sortByPointsHandler();
                setSortFlag(false);
              }}
              className="header-points-cell">
              <span>Points</span>
              <span className="arrow">{sortByPoints ? '↑' : '↓'}</span>
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
