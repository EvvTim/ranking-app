// calculate number of page
const calculateRange = (data, rowsPerPage) => {
  const range = [];
  const numberOfPages = Math.ceil(data.length / rowsPerPage);

  for (let i = 1; i <= numberOfPages; i += 1) {
    range.push(i);
  }

  return range;
};

export default useTable;
