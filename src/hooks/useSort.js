import { useState } from 'react';

const useSort = () => {
  const [sortByName, setSortByName] = useState(false);
  const [sortByPoints, setSortByPoints] = useState(false);

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
