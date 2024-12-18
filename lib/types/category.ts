export type CategorySlug = keyof typeof import('../constants/categories').CATEGORY_DETAILS;

export interface CategoryDetails {
  title: string;
  description: string;
}

export interface MainCategory {
  name: string;
  href: string;
}