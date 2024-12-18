"use client";

import { useCart } from "@/lib/hooks/useCart";
import { useCheckout } from "@/lib/hooks/useCheckout";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { OrderSummary } from "@/components/checkout/OrderSummary";
import type { ShippingFormData } from "@/lib/types/checkout";

export function ShippingStep() {
  const { items } = useCart();
  const { setStep, setShippingData } = useCheckout();

  const handleSubmit = (data: ShippingFormData) => {
    setShippingData(data);
    setStep('payment');
  };

  return (
    <>
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Datos de envío</h2>
          <ShippingForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="lg:col-span-1">
        <OrderSummary items={items} />
      </div>
    </>
  );
}