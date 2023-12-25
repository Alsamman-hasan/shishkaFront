export interface BlogsSchema {
  isLoading: boolean;
  error?: string;
  // eslint-disable-next-line no-use-before-define
  catalogs: Blogs[];
}

export interface Blogs {
  category: string;
  groups?: Groups[];
  categoryId: string;
  img?: React.FC<React.SVGProps<SVGSVGElement>> | null;
}
