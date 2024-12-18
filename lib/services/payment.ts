import type { CartItem } from '@/lib/hooks/useCart';
import { toast } from "sonner";

export interface PaymentIntent {
  clientSecret: string;
  amount: number;
  currency: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
}

export class PaymentService {
  static async createCheckoutSession(items: CartItem[]): Promise<CheckoutSession> {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Error al procesar el pago');
      }

      const session = await response.json();
      
      if (!session.url) {
        throw new Error('Error al crear la sesión de pago');
      }

      return session;
    } catch (error) {
      console.error('Error in createCheckoutSession:', error);
      toast.error("Error al procesar el pago. Por favor, inténtalo de nuevo.");
      throw error;
    }
  }
}