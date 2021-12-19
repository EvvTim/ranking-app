import './App.css';

import React from 'react';
import Table from './Table/Table';
import useSort from './hooks/useSort';
import SearchBar from './SearchBar/SearchBar';
import useSearch from './hooks/useSearch';
import useData from './hooks/useData';

const App = () => {
  const { data } = useData();
  const { sortByPointsHandler, sortByNameHandler, sortByName, sortByPoints } = useSort(data);
  const { handleSearch, filter } = useSearch(data);

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
