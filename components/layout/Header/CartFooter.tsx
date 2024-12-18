"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils/product";
import { useRouter } from "next/navigation";
import type { CartItem } from "@/lib/hooks/useCart";
import { toast } from "sonner";

interface CartFooterProps {
  items: CartItem[];
}

export function CartFooter({ items }: CartFooterProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      router.push('/checkout');
    } catch (error) {
      toast.error("Error al procesar la compra. Por favor, inténtalo de nuevo.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="border-t pt-4 mt-4 pb-6">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Total</span>
        <span className="font-medium">{formatPrice(total)}</span>
      </div>
      <Button 
        className="w-full" 
        onClick={handleCheckout}
        disabled={isProcessing}
      >
        {isProcessing ? "Procesando..." : "Finalizar compra"}
      </Button>
    </div>
  );
}