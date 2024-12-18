"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailPopupFormProps {
  onSubmit: (email: string) => Promise<void>;
  isSubmitting: boolean;
}

export function EmailPopupForm({ onSubmit, isSubmitting }: EmailPopupFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="subscribe-email">Email</Label>
        <Input
          id="subscribe-email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby="email-terms"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Procesando..." : "Obtener descuento"}
      </Button>
    </form>
  );
}