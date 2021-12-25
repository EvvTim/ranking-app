const chooseSort = (flag, sortByNameData, sortByPointsData, sortByPositionData, data) => {
  switch (flag) {
    case 'name':
      return sortByNameData;
    case 'points':
      return sortByPointsData;
    case 'position':
      return sortByPositionData;
    default:
      return data;
  }
};

export default chooseSort;
