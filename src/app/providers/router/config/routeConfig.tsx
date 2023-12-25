import { BlogDetailsPage } from '@/pages/BlogDetailsPage';
import { BlogPage } from '@/pages/BlogPage';
import { CartPage } from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import { DeliveryPage } from '@/pages/DeliveryPage';
import { FavoritesPage } from '@/pages/FavoritesPage';
import { MainCatalogsPage } from '@/pages/MainCatalogsPage';
import { MainPage } from '@/pages/MainPage';
import { NotfoundPage } from '@/pages/NotFoundPage';
import { PartnershipPage } from '@/pages/PartnershipPage';
import { ProductDetailsPage } from '@/pages/ProductDetailsPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { PromotionsPage } from '@/pages/PromotionsPage';
import { ShopsPage } from '@/pages/ShopsPage';
import { SignInPage } from '@/pages/SignInPage';
import { SignUpPage } from '@/pages/SignUpPage';
import { SubCatalogsPage } from '@/pages/SubCatalogsPage';
import {
  AppRoutes,
  getRouteCatalog,
  getRouteMain,
  getRouteProfile,
  getRouteSignIn,
  getRouteSignUp,
  getRouteSubCatalog,
  getRouteProductsCatalog,
  getRouteCarts,
  getRouteBlog,
  getRouteDelivery,
  getRoutePartnership,
  getRouteBlogDetails,
  getRoutePromotions,
  getRouteCheckoutCarts,
  getRouteFavorites,
  getRouteShops,
  getRouteProductDetails,
} from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    authOnly: false,
    element: <MainPage />,
    path: getRouteMain(),
  },

  [AppRoutes.SIGNUP]: {
    authOnly: false,
    element: <SignUpPage />,
    path: getRouteSignUp(),
  },

  [AppRoutes.SIGNIN]: {
    authOnly: false,
    element: <SignInPage />,
    path: getRouteSignIn(),
  },

  [AppRoutes.PROFILE]: {
    authOnly: true,
    element: <ProfilePage />,
    path: getRouteProfile(),
  },

  [AppRoutes.CATALOG]: {
    authOnly: false,
    element: <MainCatalogsPage />,
    path: getRouteCatalog(),
  },

  [AppRoutes.SUBCATALOG]: {
    authOnly: false,
    element: <SubCatalogsPage />,
    path: getRouteSubCatalog(),
  },
  [AppRoutes.PRODUCTS_CATALOG]: {
    authOnly: false,
    element: <ProductsPage />,
    path: getRouteProductsCatalog(':id'),
  },

  [AppRoutes.CARTS]: {
    authOnly: true,
    element: <CartPage />,
    path: getRouteCarts(),
  },

  [AppRoutes.CHECKOUT_CARTS]: {
    authOnly: true,
    element: <CheckoutPage />,
    path: getRouteCheckoutCarts(),
  },

  [AppRoutes.FAVORITES]: {
    authOnly: true,
    element: <FavoritesPage />,
    path: getRouteFavorites(),
  },

  [AppRoutes.PROMOTIONS]: {
    authOnly: false,
    element: <PromotionsPage />,
    path: getRoutePromotions(),
  },

  [AppRoutes.SHOPS]: {
    authOnly: false,
    element: <ShopsPage />,
    path: getRouteShops(),
  },

  [AppRoutes.DELIVERY]: {
    authOnly: false,
    element: <DeliveryPage />,
    path: getRouteDelivery(),
  },

  [AppRoutes.PARTNERSHIP]: {
    authOnly: false,
    element: <PartnershipPage />,
    path: getRoutePartnership(),
  },

  [AppRoutes.BLOG]: {
    authOnly: false,
    element: <BlogPage />,
    path: getRouteBlog(),
  },

  [AppRoutes.BLOG_DETAILS]: {
    authOnly: false,
    element: <BlogDetailsPage />,
    path: getRouteBlogDetails(':id'),
  },

  [AppRoutes.PRODUCT_DETAILS]: {
    authOnly: false,
    element: <ProductDetailsPage />,
    path: getRouteProductDetails(':id'),
  },
  // last
  [AppRoutes.NOTFOUND]: {
    element: <NotfoundPage />,
    path: '*',
  },
};
