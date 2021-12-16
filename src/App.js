import './App.css';

import React from 'react';
import Table from './Table/Table';
import useSort from './hooks/useSort';

const App = () => {
  const { playersData, sortByPointsHandler, sortByNameHandler, sortByName, sortByPoints } =
    useSort();

  return (
    <div className="app">
      <Table
        data={playersData}
        rowsPerPage={5}
        sortByName={() => sortByNameHandler()}
        sortByPoints={() => sortByPointsHandler()}
        pointsCellArrow={sortByPoints ? '↑' : '↓'}
        nameCellArrow={sortByName ? '↑' : '↓'}
      />
    </div>
  );
};

export default App;
