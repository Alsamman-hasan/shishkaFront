import { Colors } from '../types/productsPage';

export const russianNamesColor = (color: Colors) => {
  switch (color) {
    case 'blue':
      return 'Синий';
    case 'red':
      return 'Красный';
    case 'yellow':
      return 'Желтый';
    default:
      return '';
  }
};
