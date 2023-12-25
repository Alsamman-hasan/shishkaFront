export type Tabs =
  | 'Все'
  | 'Нижний Новгород'
  | 'п. Новинки'
  | 'Кстово'
  | 'Лысково'
  | 'Новосмолинский'
  | 'Богородск'
  | 'Балахна'
  | 'Вязники'
  | 'Павлово'
  | 'Заволжье'
  | 'Городец'
  | 'Киров'
  | 'Мулино'
  | 'Гороховец';

export interface ShopeCity {
  id: number;
  title: Tabs;
}
export interface ShopsStores {
  id: number;
  timing: string;
  city: Tabs;
  phone: string;
  title: string;
  street: string;
  one: string;
  two: string;
  three: string;
  geometry: number[];
}

export interface ShopsPageSchema {
  selectShop: ShopeCity;
  cities: ShopeCity[];
  stores: ShopsStores[];
}
