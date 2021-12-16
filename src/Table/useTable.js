// calculate number of page
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

export default useTable;
