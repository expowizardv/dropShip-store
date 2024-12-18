"use client";

import { create } from 'zustand';
import type { CheckoutState, ShippingFormData, PaymentFormData } from '@/lib/types/checkout';

interface CheckoutStore extends CheckoutState {
  setStep: (step: CheckoutState['step']) => void;
  setShippingData: (data: ShippingFormData) => void;
  setPaymentData: (data: PaymentFormData) => void;
  reset: () => void;
}

const initialState: CheckoutState = {
  step: 'shipping',
  shippingData: null,
  paymentData: null,
};

export const useCheckout = create<CheckoutStore>((set) => ({
  ...initialState,
  setStep: (step) => set({ step }),
  setShippingData: (shippingData) => set({ shippingData }),
  setPaymentData: (paymentData) => set({ paymentData }),
  reset: () => set(initialState),
}));