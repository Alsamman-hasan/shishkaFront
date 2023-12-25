export interface Image {
  url: string;
  orientation: string;
}

export interface Result {
  groupId: string;
  id: string;
  barCode: string;
  brand?: string;
  code: string;
  color?: string[];
  created: string;
  description: string;
  discountPrice: number;
  externalCode: string;
  hidden: boolean;
  label: string[];
  name: string;
  nicotine?: string;
  qty: number;
  sellingPrice: number;
  strength?: number[];
  tobacco?: boolean;
  updated: string;
  volume?: number[];
  category: string;
  categoryId: number;
  group: string;
  images?: Image[];
}
