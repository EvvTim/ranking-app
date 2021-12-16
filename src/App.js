import './App.css';

import React, { useState } from 'react';
import Table from './Table/Table';
import players from './data/players';

const App = () => {
  const [playersData] = useState([...players]);
  return (
    <div className="app">
      <Table data={playersData} rowsPerPage={4} />
    </div>
  );
};

export default App;
