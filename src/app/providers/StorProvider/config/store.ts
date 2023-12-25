import {
  UnknownAction,
  // AnyAction,
  // CombinedState,
  configureStore,
  // PreloadedState,
  Reducer,
  ReducersMapObject,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg, TStore } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { cartReducer } from '@/entities/Cart';
import { favoritesReducer } from '@/entities/Favorites';
import { productReducer } from '@/entities/Products';
import { profileReducer } from '@/entities/UserProfile';
import { authDataReducer } from '@/entities/authData';
import { catalogsReducer } from '@/pages/MainCatalogsPage';
import { mainReducer } from '@/pages/MainPage';
import { subCatalogsReducer } from '@/pages/SubCatalogsPage';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    authData: authDataReducer,
    carts: cartReducer,
    catalogs: catalogsReducer,
    favorites: favoritesReducer,
    mainPage: mainReducer,
    product: productReducer,
    profileData: profileReducer,
    subCatalog: subCatalogsReducer,

    // last
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);
  const extraArg: ThunkExtraArg = {
    api: $api,
  };
  const store = configureStore({
    devTools: __IS_DEV__,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
    preloadedState: initialState,
    reducer: reducerManager.reduce as Reducer<StateSchema>,
  }) as TStore;

  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ThunkDispatch<
  StateSchema,
  ThunkExtraArg,
  UnknownAction
>;
