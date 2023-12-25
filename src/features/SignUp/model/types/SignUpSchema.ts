import { Dayjs } from 'dayjs';

interface Errors {
  hasError?: boolean;
  errorMessage?: string;
}
interface Emailes extends Errors {
  email: string;
}

interface Passwords extends Errors {
  password: string;
}

interface Names extends Errors {
  fullName: string;
}

export type Sex = 'male' | 'female' | null;

export interface SignUpRespose {
  id: string;
  birthday?: Dayjs | null;
  card_code?: string;
  city?: string;
  email?: string;
  gender?: string;
  mobile?: string;
  name: string;
  password: string;
  sex: string;
}
export interface SignUpSchema {
  email: Emailes;
  fullName: Names;
  mobile?: string;
  birthday: Dayjs | null;
  city: string;
  password: Passwords;
  isLoading: boolean;
  newsMailings: boolean;
  dataProcessing: boolean;
  sex: string;
  error?: string;
  hasDispatch: boolean;
}
