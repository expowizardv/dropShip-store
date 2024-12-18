// Componente para las opciones del producto
"use client";

import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ProductSize, ProductColor } from "@/lib/config/product";

interface ProductOptionsProps {
  sizes: ProductSize[];
  colors: ProductColor[];
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
}

export function ProductOptions({
  sizes,
  colors,
  onSizeChange,
  onColorChange,
}: ProductOptionsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Talla</label>
        <Select onValueChange={onSizeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona una talla" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size.eu} value={size.eu.toString()}>
                EU {size.eu} | US {size.us} | UK {size.uk}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Color</label>
        <Select onValueChange={onColorChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un color" />
          </SelectTrigger>
          <SelectContent>
            {colors.map((color) => (
              <SelectItem key={color.value} value={color.value}>
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}