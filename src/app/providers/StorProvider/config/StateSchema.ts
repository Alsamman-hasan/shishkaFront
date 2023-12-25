import {
  UnknownAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  Store,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { createReducerManager } from './reducerManager';
import { CartSchema } from '@/entities/Cart';
import { FavoritesSchema } from '@/entities/Favorites';
import { OrdersSchema } from '@/entities/Orders';
import { ProductDetailsSchema, ProductSchema } from '@/entities/Products';
import { ProfileSchema } from '@/entities/UserProfile';
import { AuthDataSchema } from '@/entities/authData';
import { CatalogMenuSchema } from '@/features/CatalogMenuHeader';
import { PartnershipSchema } from '@/features/Partnership';
import { SignInSchema } from '@/features/SignIn';
import { SignUpSchema } from '@/features/SignUp';
import { CheckoutSchema } from '@/pages/CheckoutPage';
import { CatalogsSchema } from '@/pages/MainCatalogsPage';
import { MainPageSchema } from '@/pages/MainPage';
import { ProductsPageSchema } from '@/pages/ProductsPage';
import { ShopsPageSchema } from '@/pages/ShopsPage';
import { SubCatalogsSchema } from '@/pages/SubCatalogsPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  authData: AuthDataSchema;
  catalogs: CatalogsSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  subCatalog: SubCatalogsSchema;
  product: ProductSchema;
  mainPage: MainPageSchema;
  carts: CartSchema;
  favorites: FavoritesSchema;
  profileData: ProfileSchema;

  // async reducers
  productsPage?: ProductsPageSchema;
  orders?: OrdersSchema;
  SignUp?: SignUpSchema;
  SignIn?: SignInSchema;
  CatalogMenu?: CatalogMenuSchema;
  Partnership?: PartnershipSchema;
  Checkout?: CheckoutSchema;
  productDetails?: ProductDetailsSchema;
  shops?: ShopsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

export type TStore = {
  reducerManager: ReturnType<typeof createReducerManager>;
} & Store;
