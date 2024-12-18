"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/useCart";
import { useCheckout } from "@/lib/hooks/useCheckout";

export function ConfirmationStep() {
  const router = useRouter();
  const { clearCart } = useCart();
  const { reset } = useCheckout();

  useEffect(() => {
    clearCart();
    reset();
  }, [clearCart, reset]);

  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">¡Pedido completado!</h2>
        <p className="text-gray-600 mb-8">
          Gracias por tu compra. Recibirás un email con los detalles de tu pedido.
        </p>
        <Button
          onClick={() => router.push("/")}
          className="min-w-[200px]"
        >
          Volver a la tienda
        </Button>
      </div>
    </div>
  );
}