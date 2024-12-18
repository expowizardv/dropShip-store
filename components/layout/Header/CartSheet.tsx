"use client";

import { useCart } from "@/lib/hooks/useCart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingBag } from "lucide-react";
import { CartItem } from "./CartItem";
import { CartFooter } from "./CartFooter";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function CartSheet() {
  const { items } = useCart();

  return (
    <>
      <SheetHeader>
        <SheetTitle>Tu carrito</SheetTitle>
      </SheetHeader>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500">Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <ScrollArea className="flex-1 -mx-6 px-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ScrollArea>
          <CartFooter items={items} />
        </div>
      )}
    </>
  );
}