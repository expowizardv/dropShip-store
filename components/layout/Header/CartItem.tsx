"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils/product";
import type { CartItem as CartItemType } from "@/lib/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="py-4 border-b">
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-medium flex-1 pr-4">{item.name}</h4>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-2">
        <p className="font-medium">{formatPrice(item.price)}</p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}