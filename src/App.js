import './App.css';

import React from 'react';
import Table from './Table/Table';
import useSort from './hooks/useSort';
import SearchBar from './SearchBar/SearchBar';
import useSearch from './hooks/useSearch';

const App = () => {
  const { playersData, sortByPointsHandler, sortByNameHandler, sortByName, sortByPoints } =
    useSort();
  const { handleSearch, filter } = useSearch(playersData);
  console.log('filter', filter);

  return (
    <div className="app">
      <SearchBar handleChange={handleSearch} />
      <Table
        data={filter}
        rowsPerPage={10}
        sortByName={sortByNameHandler}
        sortByPoints={sortByPointsHandler}
        pointsCellArrow={sortByPoints ? '↑' : '↓'}
        nameCellArrow={sortByName ? '↑' : '↓'}
      />
    </div>
  );
};

export default App;
