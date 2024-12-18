"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const shippingSchema = z.object({
  firstName: z.string().min(2, "El nombre es demasiado corto"),
  lastName: z.string().min(2, "El apellido es demasiado corto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido"),
  street: z.string().min(5, "Dirección inválida"),
  city: z.string().min(2, "Ciudad inválida"),
  postalCode: z.string().min(5, "Código postal inválido"),
  country: z.string().min(2, "País inválido"),
});

interface ShippingFormProps {
  onSubmit: (data: z.infer<typeof shippingSchema>) => void;
}

export function ShippingForm({ onSubmit }: ShippingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input {...register("firstName")} />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellidos</Label>
          <Input {...register("lastName")} />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input type="tel" {...register("phone")} />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="street">Dirección</Label>
        <Input {...register("street")} />
        {errors.street && (
          <p className="text-sm text-red-500">{errors.street.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">Ciudad</Label>
          <Input {...register("city")} />
          {errors.city && (
            <p className="text-sm text-red-500">{errors.city.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="postalCode">Código Postal</Label>
          <Input {...register("postalCode")} />
          {errors.postalCode && (
            <p className="text-sm text-red-500">{errors.postalCode.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">País</Label>
        <Select onValueChange={(value) => register("country").onChange({ target: { value } })}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona un país" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ES">España</SelectItem>
            <SelectItem value="PT">Portugal</SelectItem>
            <SelectItem value="FR">Francia</SelectItem>
            <SelectItem value="IT">Italia</SelectItem>
            <SelectItem value="DE">Alemania</SelectItem>
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-sm text-red-500">{errors.country.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Procesando..." : "Continuar al pago"}
      </Button>
    </form>
  );
}