"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductImage } from "./ProductImage";
import { ProductOptions } from "./ProductOptions";
import { useCart } from "@/lib/hooks/useCart";
import { useWishlist } from "@/lib/hooks/useWishlist";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types/product";
import {
  getProductSizes,
  getProductColors,
  getProductFeatures,
  formatPrice,
  calculateDiscount,
} from "@/lib/utils/product";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  const sizes = getProductSizes(product.id);
  const colors = getProductColors(product.id);
  const features = getProductFeatures(product.id);
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor, selecciona una talla y un color");
      return;
    }
    addItem(product);
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImage
          src={product.image}
          alt={product.name}
          isOnSale={product.isOnSale}
          isNew={product.isNew}
        />

        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-red-500">
                      -{calculateDiscount(product.price, product.originalPrice)}%
                    </span>
                  </>
                )}
              </div>
            </div>
            <Button
              variant={isWishlisted ? "secondary" : "outline"}
              size="icon"
              onClick={toggleWishlist}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
          </div>

          <ProductOptions
            sizes={sizes}
            colors={colors}
            onSizeChange={setSelectedSize}
            onColorChange={setSelectedColor}
          />

          <Button
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </Button>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Características</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}