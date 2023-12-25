export interface Groups {
  group: string;
  groupId: string;
}
export interface Categories {
  category: string;
  groups?: Groups[];
  categoryId: number;
}

export interface CategoryInfo {
  name: string;
  categoryId?: number;
  selectGroup: Groups;
}

export interface ProductCardProps {
  className?: string;
  card: Product;
  isLoading?: boolean;
}

export interface CardProps extends ProductCardProps {
  onAddToCart: (count: number, cardId: string) => void;
  onAddToFavorite: (cardId: string) => void;
}

export interface CartAddedRes {
  cartId: string;
  productId: string;
  qty: number;
}

export interface CardPayload {
  productId: string;
  qty: number;
}
export interface addToFavoritePayload {
  productId: string;
}

export interface ProductSchema {
  isLoading: boolean;
  error?: string;
  selectGroup?: Groups;
  categoryName?: string;
  productId?: string;
  isAddToCartLoading: boolean;
  isAddToCartError?: string;
}
