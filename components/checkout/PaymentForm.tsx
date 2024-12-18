"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PaymentService } from "@/lib/services/payment";
import { useCart } from "@/lib/hooks/useCart";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import type { ShippingFormData } from "@/lib/types/checkout";

const paymentSchema = z.object({
  cardNumber: z.string().min(16, "Número de tarjeta inválido"),
  cardName: z.string().min(2, "Nombre inválido"),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Formato inválido (MM/YY)"),
  cvc: z.string().min(3, "CVC inválido"),
});

interface PaymentFormProps {
  shippingData: ShippingFormData | null;
}

export function PaymentForm({ shippingData }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: z.infer<typeof paymentSchema>) => {
    if (!shippingData) {
      toast.error("Por favor, completa los datos de envío primero");
      return;
    }

    try {
      setIsProcessing(true);
      const session = await PaymentService.createCheckoutSession(items);
      
      if (session.url) {
        clearCart();
        if (session.url.startsWith('/')) {
          router.push(session.url);
        } else {
          window.location.href = session.url;
        }
      } else {
        throw new Error("No se pudo crear la sesión de pago");
      }
    } catch (error) {
      toast.error("Error al procesar el pago. Por favor, verifica tus datos e inténtalo de nuevo.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <RadioGroup
        defaultValue={paymentMethod}
        onValueChange={setPaymentMethod}
        className="mb-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="card" id="card" />
          <Label htmlFor="card">Tarjeta de crédito/débito</Label>
        </div>
      </RadioGroup>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Número de tarjeta</Label>
          <Input
            {...register("cardNumber")}
            placeholder="1234 5678 9012 3456"
            maxLength={16}
          />
          {errors.cardNumber && (
            <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cardName">Nombre en la tarjeta</Label>
          <Input
            {...register("cardName")}
            placeholder="NOMBRE APELLIDOS"
          />
          {errors.cardName && (
            <p className="text-sm text-red-500">{errors.cardName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Fecha de caducidad</Label>
            <Input
              {...register("expiry")}
              placeholder="MM/YY"
              maxLength={5}
            />
            {errors.expiry && (
              <p className="text-sm text-red-500">{errors.expiry.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input
              {...register("cvc")}
              type="password"
              maxLength={4}
              placeholder="123"
            />
            {errors.cvc && (
              <p className="text-sm text-red-500">{errors.cvc.message}</p>
            )}
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isProcessing}
      >
        {isProcessing ? "Procesando pago..." : "Pagar ahora"}
      </Button>
    </form>
  );
}