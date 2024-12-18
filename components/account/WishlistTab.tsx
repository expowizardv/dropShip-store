"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useWishlist } from "@/lib/hooks/useWishlist";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils/product";

export function WishlistTab() {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-medium mb-2">Tu lista de deseos está vacía</h3>
        <p className="text-gray-600">
          Guarda tus productos favoritos para comprarlos más tarde
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Mi Lista de Deseos</h2>
        <Button variant="outline">
          <Heart className="h-4 w-4 mr-2" />
          {items.length} productos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-lg font-bold mb-4">{formatPrice(item.price)}</p>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1"
                    onClick={() => {
                      addItem({
                        id: item.id,
                        name: item.name,
                        price: item.price
                      });
                      removeItem(item.id);
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Añadir al Carrito
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-red-500 hover:text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}