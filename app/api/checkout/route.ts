import { NextResponse } from 'next/server';
import type { CartItem } from '@/lib/hooks/useCart';

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid cart items' },
        { status: 400 }
      );
    }

    // For now, redirect to success page directly
    return NextResponse.json({
      url: '/checkout/success',
      id: 'mock_session_id'
    });
  } catch (error) {
    console.error('Error in checkout:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}