// Stripe configuration
export const STRIPE_CONFIG = {
  // Replace these with your actual Stripe keys when implementing
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  
  // Payment configuration
  currency: 'eur',
  paymentMethods: ['card'],
  
  // Shipping configuration (example)
  shipping: {
    countries: ['ES', 'PT', 'FR', 'IT', 'DE'],
    rates: [
      { id: 'standard', name: 'Standard', price: 4.99 },
      { id: 'express', name: 'Express', price: 9.99 }
    ]
  }
};