export {
  getProductDetailsCategory,
  getProductDetailsIsLoading,
} from './model/selectors/getProductDetailsData/getProductDetailsData';
export { getProductDetailsName } from './model/selectors/getProductDetailsData/getProductDetailsData';
export { productDetailsReducer } from './model/slice/productDetailsSlice';
export { ProductDetails } from './ui/ProductDetails/ProductDetails';
export { fetchProductDetails } from './model/services/fetchProductDetails/fetchProductDetails';
export { ProductSkeleton } from './ui/ProductSkeleton/ProductSkeleton';
export { ProductCard } from './ui/ProductCard/ProductCard';
export type { ProductSchema, Categories } from './model/types/productType';
export type { ProductDetailsSchema } from './model/types/productDetailsType';
export {
  getSelectGroup,
  getSelectCategoryName,
} from './model/selectors/getCategoryInfo/getCategoryInfo';
export { productActions, productReducer } from './model/slice/productSlice';
