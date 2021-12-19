import { useEffect, useState } from 'react';

const useSort = (data) => {
  const [playersData, setPlayersData] = useState([data]);
  const [sortByName, setSortByName] = useState(false);
  const [sortByPoints, setSortByPoints] = useState(true);

  const sortByPointsHandler = () => {
    setSortByPoints(!sortByPoints);
  };

  const sortByNameHandler = () => {
    setSortByName(!sortByName);
  };

  useEffect(() => {
    if (sortByName) {
      setPlayersData([...data.sort((a, b) => a.name.localeCompare(b.name))]);
    } else if (!sortByName) {
      setPlayersData([...data.sort((a, b) => b.name.localeCompare(a.name))]);
    }
  }, [sortByName]);

  useEffect(() => {
    if (sortByPoints) {
      setPlayersData([...data.sort((a, b) => a.points - b.points).reverse()]);
    } else if (!sortByPoints) {
      setPlayersData([...data.sort((a, b) => a.points - b.points)]);
    }
  }, [sortByPoints]);

  return {
    playersData,
    sortByPointsHandler,
    sortByNameHandler,
    sortByName,
    sortByPoints
  };
};

export default useSort;
