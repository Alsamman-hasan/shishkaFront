import {
  getRouteBlog,
  getRouteCatalog,
  getRouteDelivery,
  getRoutePartnership,
  getRoutePromotions,
  getRouteShops,
} from '@/shared/consts/router';

export const firstHeaderItems = [
  { link: getRouteCatalog(), title: 'Каталог' },
  { link: getRoutePromotions(), title: 'Акции' },
  { link: getRouteShops(), title: 'Магазины' },
  { link: getRouteDelivery(), title: 'О доставке' },
  { link: getRoutePartnership(), title: 'Сотрудничество' },
  { link: getRouteBlog(), title: 'Блог' },
];
