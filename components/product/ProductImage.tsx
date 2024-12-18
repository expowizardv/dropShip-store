// Componente para la imagen del producto
"use client";

import { Badge } from "@/components/ui/badge";

interface ProductImageProps {
  src: string;
  alt: string;
  isOnSale?: boolean;
  isNew?: boolean;
}

export function ProductImage({ src, alt, isOnSale, isNew }: ProductImageProps) {
  return (
    <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
      {isOnSale && (
        <Badge variant="destructive" className="absolute top-4 right-4">
          Oferta
        </Badge>
      )}
      {isNew && (
        <Badge variant="secondary" className="absolute top-4 left-4">
          Nuevo
        </Badge>
      )}
    </div>
  );
}