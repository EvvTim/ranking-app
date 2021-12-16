// calculate number of page
import { useEffect, useState } from 'react';

const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const numberOfPages = Math.ceil(data.length / rowsPerPage);

  for (let i = 1; i <= numberOfPages; i += 1) {
    range.push(i);
  }

  return range;
};

// calculate rows per page
const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

// hook
const useTable = (data, page, rowsPerPage) => {
  const [tableRage, setTableRange] = useState([]);
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const rows = sliceData(data, page, rowsPerPage);
    setTableRows([...rows]);
  }, [data, page, setTableRows, setTableRange]);

  return {
    tableRows,
    range: tableRage
  };
};

export default useTable;
