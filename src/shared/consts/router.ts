export enum AppRoutes {
  MAIN = 'main',
  SIGNUP = 'SignUp',
  SIGNIN = 'SignIn',
  PROFILE = 'Profile',
  CATALOG = 'catalog',
  SUBCATALOG = 'sub_catalog',
  PRODUCTS_CATALOG = 'products_catalog',
  CARTS = 'carts',
  PROMOTIONS = 'promotions',
  SHOPS = 'shops',
  DELIVERY = 'delivery',
  PARTNERSHIP = 'partnership',
  BLOG = 'blog',
  BLOG_DETAILS = 'blog_details',
  CHECKOUT_CARTS = 'checkout_carts',
  FAVORITES = 'favorites',
  PRODUCT_DETAILS = 'product_details',
  // last
  NOTFOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSignUp = () => '/signUp';
export const getRouteSignIn = () => '/signIn';
export const getRouteProfile = () => '/profile';
export const getRouteCatalog = () => '/catalog/';
export const getRouteCarts = () => '/carts';
export const getRouteCheckoutCarts = () => '/carts/checkout';
export const getRouteFavorites = () => '/favorites';
export const getRouteDelivery = () => '/delivery';
export const getRoutePromotions = () => '/promotions';
export const getRouteShops = () => '/shops';
export const getRoutePartnership = () => '/partnership';
export const getRouteBlog = () => '/blog/';
export const getRouteBlogDetails = (id: string) => `/blog/${id}`;
export const getRouteProductDetails = (id: string) =>
  `/product/productId/${id}`;
export const getRouteSubCatalog = (id?: string) => {
  if (id) return `/catalog/sub/?categoryId=${id}`;

  return '/catalog/sub/';
};

export const getRouteProductsCatalog = (id: string) =>
  `/catalog/products/${id}/`;
