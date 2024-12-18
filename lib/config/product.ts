// Configuración de productos
// Este archivo contiene todas las configuraciones relacionadas con productos

export interface ProductSize {
  eu: number;
  us?: number;
  uk?: number;
}

export interface ProductColor {
  name: string;
  value: string;
  hex: string;
}

// Configuración de tallas por producto
export const PRODUCT_SIZES: Record<number, ProductSize[]> = {
  1: [
    { eu: 36, us: 4, uk: 3.5 },
    { eu: 37, us: 5, uk: 4.5 },
    { eu: 38, us: 6, uk: 5.5 },
    // ... más tallas
  ],
  // ... más productos
};

// Configuración de colores por producto
export const PRODUCT_COLORS: Record<number, ProductColor[]> = {
  1: [
    { name: "Negro", value: "black", hex: "#000000" },
    { name: "Rojo", value: "red", hex: "#FF0000" },
    { name: "Blanco", value: "white", hex: "#FFFFFF" },
  ],
  // ... más productos
};

// Características por producto
export const PRODUCT_FEATURES: Record<number, string[]> = {
  1: [
    "Material premium de cuero",
    "Suela Air visible",
    "Diseño retro original",
  ],
  // ... más productos
};

// Valores por defecto
export const DEFAULT_SIZES: ProductSize[] = [
  { eu: 36, us: 4, uk: 3.5 },
  { eu: 37, us: 5, uk: 4.5 },
  // ... más tallas
];

export const DEFAULT_COLORS: ProductColor[] = [
  { name: "Negro", value: "black", hex: "#000000" },
  { name: "Blanco", value: "white", hex: "#FFFFFF" },
  { name: "Gris", value: "gray", hex: "#808080" },
];

export const DEFAULT_FEATURES = [
  "Material de alta calidad",
  "Diseño exclusivo",
  "Suela antideslizante",
];