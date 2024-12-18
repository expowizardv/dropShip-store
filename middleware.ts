import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Check for authentication using session/token from cookies or headers
  const isAuthenticated = false; // Replace with actual auth check

  // Protect routes that require authentication
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/account')) {
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectedFrom', request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/account/:path*',
    '/api/protected/:path*',
  ],
};