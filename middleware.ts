import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = ['/login', '/public-page']; // pages that do not require auth

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Validate token
  const token = request.cookies.get('app_token')?.value || null;

  const isValid = validateTokenSync(token); // sync simple validation here, or use static token in dev

  if (!isValid) {
    // Redirect to login if not valid
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Simple synchronous validation for middleware (no await allowed)
function validateTokenSync(token: string | null): boolean {
  if (!token) return false;

  if (process.env.NODE_ENV === 'development') {
    return token === 'dev-static-token';
  }

  // In production → ideally validate JWT format here (regex check / expiry)
  // You CANNOT call external API here — middleware is synchronous
  // For advanced use → use JWT lib that works in middleware
  return true; // replace with actual JWT parsing logic
}

export const config = {
  matcher: [
    /*
      Run middleware on all routes EXCEPT:
      - /login
      - /_next/ (static files)
      - /favicon.ico
      - /api/ (optional: allow public API access)
    */
    '/((?!_next/static|_next/image|favicon.ico|loan_dna.png|api|login).*)',
  ],
};
