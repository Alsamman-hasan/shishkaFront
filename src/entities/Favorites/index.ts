export { removeAllLikesReq } from './model/services/removeAllLikes';

export { fetchFavorites } from './model/services/fetchFavorites';
export { favoritesActions } from './model/slice/favoriteSlice';
export { favoritesReducer } from './model/slice/favoriteSlice';
export type { FavoritesSchema } from './model/types/favoritesTypes';
export {
  getFavoriteData,
  getFavoriteError,
  getFavoriteIsLoading,
  getSort,
  getFavCartLength,
} from './model/selectors/getFavoritesData';
