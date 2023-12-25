import { Dayjs } from 'dayjs';

export type ActiveTab = 'Personal' | 'Order';

export interface ErorrObj {
  code: string;
  message: string;
}

export interface Passwords {
  oldPassword?: string;
  newPassword?: string;
}
export interface Profile {
  email?: string;
  mobile?: string;
  id?: string;
  birthday?: Dayjs | null;
  card_code?: string;
  name?: string;
  sex?: string;
  city?: string;
  error?: ErorrObj;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  isUpdateLoading: boolean;
  isLoadingPassword: boolean;
  error?: string;
  passwordError?: string;
  readonly?: boolean;
  passwords?: Passwords;
  isPasswordChanged?: boolean;
}
