import { SortTypes } from '@/features/ProductSort';

export interface FavoritesSchema {
  isLoading: boolean;
  data?: Product[];
  error?: string;
  sort: SortTypes;
}
