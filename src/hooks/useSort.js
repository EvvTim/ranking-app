import { useState } from 'react';

const useSort = () => {
  const [sortByName, setSortByName] = useState(true);
  const [sortByPoints, setSortByPoints] = useState(true);

  const sortByPointsHandler = () => {
    setSortByPoints(!sortByPoints);
  };

  const sortByNameHandler = () => {
    setSortByName(!sortByName);
  };

  return {
    sortByPointsHandler,
    sortByNameHandler,
    sortByName,
    sortByPoints
  };
};

export default useSort;
