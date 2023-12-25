declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare interface ErorrObj {
  code: string;
  message: string;
}

declare interface Iresponse<R> {
  result?: R;
  error?: ErorrObj;
}

interface Groups {
  group: string;
  groupId: string;
}

interface Catalogs {
  category: string;
  groups?: Groups[];
  categoryId: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>> | null;
}

type Sorts = 'new' | 'old' | 'expensive' | 'cheap' | undefined;

interface SelectItems<T extends string> {
  name: T;
  id: string | number;
}

interface AutocompleteUiItem<T extends string> {
  title: T;
  id: string | number;
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type ValueOf<T> = T[keyof T];
type ProductView = 'List' | 'Group';
interface Image {
  url: string;
  orientation: string;
}

interface Product {
  id: string;
  barCode: string;
  brand?: string | null;
  code: string;
  color?: string[] | null;
  created: string;
  description: string;
  discountPrice: number;
  externalCode: string;
  groupId: string;
  hidden: boolean;
  label: string[];
  name: string;
  nicotine?: string | null;
  qty: number;
  sellingPrice: number;
  strength?: number[] | null;
  tobacco?: boolean | null;
  updated: string;
  volume?: number[] | null;
  category: string;
  categoryId: number;
  group?: string | null;
  images?: Image[] | null;
  view?: ProductView;
  like: boolean;
}
