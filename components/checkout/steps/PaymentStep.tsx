"use client";

import { useCart } from "@/lib/hooks/useCart";
import { useCheckout } from "@/lib/hooks/useCheckout";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";

export function PaymentStep() {
  const { items } = useCart();
  const { shippingData } = useCheckout();

  return (
    <>
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Método de pago</h2>
          <PaymentForm shippingData={shippingData} />
        </div>
      </div>
      <div className="lg:col-span-1">
        <OrderSummary items={items} />
      </div>
    </>
  );
}