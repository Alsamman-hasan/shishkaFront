import { Dayjs } from 'dayjs';

export interface CheckoutSchema {
  isLoading: boolean;
  error?: string;
  fullName: string;
  mobile?: string;
  birthday: Dayjs | null;
  city: string;
  dataProcessing?: boolean;
  store: string;
  successCheckout: boolean;
  checkoutLoading: boolean;
}
