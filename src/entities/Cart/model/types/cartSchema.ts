export interface Image {
  url: string;
  orientation: string;
}

export interface Cart {
  cartId: string;
  discountPrice: number;
  id: string;
  qty: number;
  sum: number;
  images: Image[];
  name: string;
  sellingPrice: number;
}

export interface CartRequestResult {
  sum: number;
  savings: number;
  totalCoast: number;
  items: Cart[];
}

export interface ResUpdateCart {
  cartId: string;
  productId: string;
  qty: number;
}

export interface CartUpdated {
  productId: string;
  qty: number;
}

export interface CartSchema {
  isLoading: boolean;
  error?: string;
  removeError?: string;
  carts?: Cart[];
  sum?: number;
  savings?: number;
  totalCoast?: number;
  updateCart: CartUpdated;
  isUpdateLoading: boolean;
  isRemoveLoading: boolean;
  deletedCartID: string;
}
