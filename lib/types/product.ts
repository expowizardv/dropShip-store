// Tipos relacionados con productos
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  tags: string[];
  sizes?: number[];
  colors?: string[];
  features?: string[];
}

export interface ProductVariant {
  size: string;
  color: string;
  stock: number;
}

export interface ProductWithVariants extends Product {
  variants: ProductVariant[];
}