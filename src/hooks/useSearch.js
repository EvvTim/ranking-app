import { useState } from 'react';

const useSearch = (data) => {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filter = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return {
    handleSearch,
    filter
  };
};

export default useSearch;
