import { SortTypes } from '@/features/ProductSort';

export const getOrders = (sort: SortTypes) => {
  switch (sort) {
    case 'Высокий рейтинг':
      return 'ratingDesc';
    case 'Сначала дорогие':
      return 'priceAsc';
    default:
      return 'priceDesc';
  }
};
