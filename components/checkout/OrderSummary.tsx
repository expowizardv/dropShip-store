"use client";

import { formatPrice } from "@/lib/utils/product";
import type { CartItem } from "@/lib/hooks/useCart";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  items: CartItem[];
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 100 ? 0 : 4.99;
  const total = subtotal + shipping;

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Resumen del pedido</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      <Separator className="my-6" />
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Envío</span>
          <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
        </div>

        {shipping > 0 && (
          <p className="text-sm text-gray-500">
            Envío gratis en pedidos superiores a {formatPrice(100)}
          </p>
        )}
      </div>

      <Separator className="my-6" />
      
      <div className="flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </Card>
  );
}