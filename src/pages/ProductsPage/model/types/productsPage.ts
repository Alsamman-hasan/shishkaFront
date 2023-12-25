import { CheckBoxesType } from '@/features/ProductFilters';
import { SortTypes } from '@/features/ProductSort';

export type Colors = 'red' | 'yellow' | 'blue';
export type ColorsRus = 'Желтый' | 'Красный' | 'Синий';
export interface DataFilter {
  priceMax?: number | '';
  priceMin?: number | '';
  brand?: string[];
  color?: string[];
  nicotine?: string;
  strength?: number[];
  volume?: number[];
  tobacco?: boolean;
  search?: string;
}

export interface Image {
  url: string;
  orientation: string;
}

export interface ProductFilter {
  brand: string[];
  color: string[];
  strength: number[];
  volume: number[];
  price: number[];
}

export interface ProductsPageSchema {
  isLoading: boolean;
  error?: string;
  dataFilter?: DataFilter;
  brands: CheckBoxesType[];
  sizeList: CheckBoxesType[];
  colors: CheckBoxesType[];
  strength: CheckBoxesType[];
  view: ProductView;
  sortItems: SelectItems<SortTypes>[];
  orderBy: SortTypes;
  productsData?: Product[];
  page: number;
  step: number;
  search?: string;
  groupId: string;
  total?: number;
  found?: number;
  pages?: number;
  filters?: ProductFilter;
}

export interface ProductResult {
  found: number;
  page: number;
  step: number;
  total: number;
  pages: number;
  filters: ProductFilter;
  items: Product[];
}
