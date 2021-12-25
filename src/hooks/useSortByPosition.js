import { useEffect, useState } from 'react';

const useSortByPosition = (sortByPosition, data) => {
  const [sortByPositionData, setSortByPositionData] = useState([data]);

  useEffect(() => {
    if (sortByPosition) {
      setSortByPositionData([...data].sort((a, b) => a.position - b.position).reverse());
    } else if (!sortByPosition) {
      setSortByPositionData([...data].sort((a, b) => a.position - b.position));
    }
  }, [sortByPosition, data]);

  return sortByPositionData;
};

export default useSortByPosition;
