export interface SignInSchema {
  email?: string;
  phone?: string;
  password: string;
  isLoading: boolean;
  newsMailings: boolean;
  dataProcessing: boolean;
  error?: string;
}
