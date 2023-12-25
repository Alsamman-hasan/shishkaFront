interface Errors {
  hasError?: boolean;
  errorMessage?: string;
}
interface Emailes extends Errors {
  email: string;
}

export interface PartnershipRespose {
  id: string;
  card_code?: string;
  city?: string;
  email?: string;
  gender?: string;
  mobile?: string;
  name: string;
  aboutMe: string;
  titleOrganization: string;
}
export interface PartnershipSchema {
  email: Emailes;
  mobile?: string;
  city: string;
  isLoading: boolean;
  newsMailings: boolean;
  error?: string;
  hasDispatch: boolean;
  aboutMe: string;
  titleOrganization: string;
}
