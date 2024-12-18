// Utilidades para productos
import type { Product } from "@/lib/types/product";
import {
  PRODUCT_SIZES,
  PRODUCT_COLORS,
  PRODUCT_FEATURES,
  DEFAULT_SIZES,
  DEFAULT_COLORS,
  DEFAULT_FEATURES,
} from "@/lib/config/product";

export function getProductSizes(productId: number) {
  return PRODUCT_SIZES[productId] || DEFAULT_SIZES;
}

export function getProductColors(productId: number) {
  return PRODUCT_COLORS[productId] || DEFAULT_COLORS;
}

export function getProductFeatures(productId: number) {
  return PRODUCT_FEATURES[productId] || DEFAULT_FEATURES;
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function calculateDiscount(price: number, originalPrice: number) {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}