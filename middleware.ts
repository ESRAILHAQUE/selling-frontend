import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simply allow all requests without any processing
  // Removed geolocation and all restrictions for better performance and SEO
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon.svg (favicon)
     * - images (static images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|images).*)',
  ],
};

