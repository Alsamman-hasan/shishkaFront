export const sortValue = (sort: Sorts) => {
  switch (sort) {
    case 'new':
      return 'Сначала новые';
      break;
    case 'old':
      return 'Сначала старые';
      break;
    case 'expensive':
      return 'Сначала с большей суммой';
      break;
    case 'cheap':
      return 'Сначала с меньшей суммой';
      break;
    default:
      return sort;
  }
};
