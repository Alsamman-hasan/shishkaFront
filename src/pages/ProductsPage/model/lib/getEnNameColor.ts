import { ColorsRus } from '../types/productsPage';

export const enNamesColor = (color: ColorsRus) => {
  switch (color) {
    case 'Синий':
      return 'blue';
    case 'Красный':
      return 'red';
    case 'Желтый':
      return 'yellow ';
    default:
      return '';
  }
};
