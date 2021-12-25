import { useEffect, useState } from 'react';

const useSortByPoints = (sortByPoints, data) => {
  const [sortByPointsData, setSortByPointsData] = useState([data]);

  useEffect(() => {
    if (sortByPoints) {
      setSortByPointsData([...data].sort((a, b) => a.points - b.points).reverse());
    } else if (!sortByPoints) {
      setSortByPointsData([...data].sort((a, b) => a.points - b.points));
    }
  }, [sortByPoints, data]);

  return sortByPointsData;
};

export default useSortByPoints;
