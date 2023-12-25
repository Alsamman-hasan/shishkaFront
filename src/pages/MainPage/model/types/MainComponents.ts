export interface SliderItems {
  id: number;
  Img: string;
  title: string;
  description: string;
}

export interface MainPageSchema {
  isLoading: boolean;
  error?: string;
  catalogs: Catalogs[];
}
