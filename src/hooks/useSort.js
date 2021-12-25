import { useState } from 'react';

const useSort = () => {
  const [sortByName, setSortByName] = useState(true);
  const [sortByPoints, setSortByPoints] = useState(true);
  const [sortByPosition, setSortByPosition] = useState(true);

  const sortByPointsHandler = () => {
    setSortByPoints(!sortByPoints);
  };

  const sortByNameHandler = () => {
    setSortByName(!sortByName);
  };

  const sortByPositionHandler = () => {
    setSortByPosition(!sortByPosition);
  };

  return {
    sortByPositionHandler,
    sortByPointsHandler,
    sortByNameHandler,
    sortByName,
    sortByPoints,
    sortByPosition
  };
};

export default useSort;
