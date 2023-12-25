import { hTypes } from '@/shared/ui/Htage/Htage';

export interface PromotionsItems {
  id: number;
  bg: string;
  img?: string;
  title: string;
  subTitle: string;
  hasBtn?: boolean;
  card?: boolean;
  titleType: hTypes;
  bgCard3?: boolean;
  bgCard2?: boolean;
  bgCard4?: boolean;
}
