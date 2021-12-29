import React, { useState } from 'react';
import uniqid from 'uniqid';
import useTable from '../hooks/useTable';
import TablePages from './TablePages';
import useSort from '../hooks/useSort';
import useSortByName from '../hooks/useSortByName';
import useSortByPoints from '../hooks/useSortByPoints';
import useSortByPosition from '../hooks/useSortByPosition';
import chooseSort from './chooseSort';
import addArrow from './addArrow';

const Table = ({ data, rowsPerPage }) => {
  const [sortFlag, setSortFlag] = useState('');
  const [page, setPage] = useState(1);

  const {
    sortByPositionHandler,
    sortByPointsHandler,
    sortByNameHandler,
    sortByName,
    sortByPoints,
    sortByPosition
  } = useSort(data);

  const sortByNameData = useSortByName(sortByName, data);
  const sortByPointsData = useSortByPoints(sortByPoints, data);
  const sortByPositionData = useSortByPosition(sortByPosition, data);
  const sortData = chooseSort(sortFlag, sortByNameData, sortByPointsData, sortByPositionData, data);
  const { tableRows, range } = useTable(sortData, page, rowsPerPage);

  return (
    <section className="table-section">
      <table>
        <thead>
          <tr>
            <th
              className="header-position-cell"
              onClick={() => {
                sortByPositionHandler();
                setSortFlag('position');
              }}>
              <span>#</span>
              <span className="arrow">{addArrow(sortByPosition)}</span>
            </th>
            <th
              onClick={() => {
                sortByNameHandler();
                setSortFlag('name');
              }}
              className="header-name-cell">
              <span>Name</span> <span className="arrow">{addArrow(sortByName)}</span>
            </th>
            <th
              onClick={() => {
                sortByPointsHandler();
                setSortFlag('points');
              }}
              className="header-points-cell">
              <span>Points</span>
              <span className="arrow">{addArrow(sortByPoints)}</span>
            </th>
            <th className="header-color-cell">Color</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((el) => (
            <tr key={uniqid()}>
              <td className="position-cell">{el.position}</td>
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
