"use client";

import { Progress } from "@/components/ui/progress";
import { useCheckout } from "@/lib/hooks/useCheckout";

export function CheckoutProgress() {
  const { step } = useCheckout();
  
  const progress = {
    shipping: 33,
    payment: 66,
    confirmation: 100,
  }[step];

  return (
    <div className="space-y-2">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between text-sm text-gray-500">
        <span>Envío</span>
        <span>Pago</span>
        <span>Confirmación</span>
      </div>
    </div>
  );
}