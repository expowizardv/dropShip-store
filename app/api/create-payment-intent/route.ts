import { NextResponse } from 'next/server';
import { STRIPE_CONFIG } from '@/lib/config/stripe';

export async function POST(request: Request) {
  if (!STRIPE_CONFIG.secretKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured' },
      { status: 500 }
    );
  }

  try {
    const { amount } = await request.json();

    // When implementing Stripe, you'll create a payment intent here
    // const stripe = require('stripe')(STRIPE_CONFIG.secretKey);
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount,
    //   currency: STRIPE_CONFIG.currency,
    // });

    // For now, return a mock response
    return NextResponse.json({
      clientSecret: 'mock_client_secret',
      amount,
      currency: STRIPE_CONFIG.currency
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}