import { useEffect, useState } from 'react';

const useSortByName = (sortByName, data) => {
  const [sortByNameData, setSortByNameData] = useState([data]);

  useEffect(() => {
    if (sortByName) {
      setSortByNameData([...data].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (!sortByName) {
      setSortByNameData([...data].sort((a, b) => b.name.localeCompare(a.name)));
    }
  }, [sortByName, data]);

  return sortByNameData;
};

export default useSortByName;
