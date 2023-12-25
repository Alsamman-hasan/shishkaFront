export interface ordersList {
  id: string;
  created: string;
  status: string;
  name: string;
}
export interface Image {
  url: string;
  orientation: string;
}
export interface Item {
  orderId: string;
  id: string;
  name: string;
  sellingPrice: number;
  discountPrice: number;
  qty: number;
  sum: number;
  images: Image[];
}

export interface ItemsId {
  orderId: string;
  productId: string;
  qty: string;
}
export interface OrderDetails {
  sum: number;
  savings: number;
  totalCoast: number;
  items: Item[];
  itemsId: ItemsId[];
}

export type Statuses = 'active' | 'cancelled' | 'completed' | 'all';
export interface OrdersSchema {
  isLoading: boolean;
  isLoadingDetails: boolean;
  error?: string;
  errorDetails?: string;
  sort: Sorts;
  page?: number;
  step: number;
  pages?: number;
  status: Statuses;
  orders?: ordersList[];
  orderDetails?: OrderDetails;
  selectOrderId: string;
}
