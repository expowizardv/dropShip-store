"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateDiscountCode } from "@/lib/utils/discount";
import { toast } from "sonner";
import { EmailPopupForm } from "./EmailPopupForm";

interface EmailPopupContentProps {
  onClose: () => void;
}

export function EmailPopupContent({ onClose }: EmailPopupContentProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (email: string) => {
    setIsSubmitting(true);

    try {
      const discountCode = generateDiscountCode(email);
      
      // Here you would typically save the email to your database
      // await saveEmailToDatabase(email, discountCode);
      
      toast.success(
        <div className="space-y-2">
          <p>¡Gracias por suscribirte!</p>
          <p className="font-mono text-sm">Tu código de descuento: {discountCode}</p>
          <p className="text-sm">Válido para un 5% de descuento en tu próxima compra</p>
        </div>,
        {
          duration: 10000,
        }
      );
      
      onClose();
    } catch (error) {
      toast.error("No se pudo generar el código. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center p-6">
      <p className="text-gray-600 mb-6">
        Suscríbete a nuestra newsletter y recibe un código de descuento del 5% para tu primera compra.
      </p>
      
      <EmailPopupForm 
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      
      <p id="email-terms" className="text-xs text-gray-500 mt-4">
        Al suscribirte, aceptas recibir emails de marketing. Puedes darte de baja en cualquier momento.
      </p>
    </div>
  );
}