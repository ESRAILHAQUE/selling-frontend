import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'usamarketsmm.com';
const CANONICAL_URL = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = url.hostname;
  const path = url.pathname + url.search;

  // Only apply redirects for production domain (not localhost)
  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) {
    return NextResponse.next();
  }

  // 1. Redirect www to non-www (canonical)
  if (host === `www.${CANONICAL_HOST}`) {
    const redirectUrl = new URL(path, CANONICAL_URL);
    return NextResponse.redirect(redirectUrl, 301);
  }

  // 2. Redirect http to https
  if (url.protocol === 'http:') {
    const redirectUrl = new URL(path, CANONICAL_URL);
    return NextResponse.redirect(redirectUrl, 301);
  }

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

