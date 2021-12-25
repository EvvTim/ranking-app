import './App.css';

import React from 'react';
import Table from './Table/Table';
import SearchBar from './SearchBar/SearchBar';
import useSearch from './hooks/useSearch';
import useData from './hooks/useData';

const App = () => {
  const data = useData();
  const { handleSearch, filter } = useSearch(data);

  return (
    <div className="app">
      <SearchBar handleChange={handleSearch} />
      <Table data={filter} rowsPerPage={10} />
    </div>
  );
};

export default App;
