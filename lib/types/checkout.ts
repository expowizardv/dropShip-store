// Types for the checkout flow
export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvc: string;
}

export interface CheckoutData {
  shipping: ShippingFormData;
  payment: PaymentFormData;
}

export type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

export interface CheckoutState {
  step: CheckoutStep;
  shippingData: ShippingFormData | null;
  paymentData: PaymentFormData | null;
}