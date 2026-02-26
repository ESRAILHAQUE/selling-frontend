import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANONICAL_HOST = 'usamarketsmm.com';
const CANONICAL_URL = `https://${CANONICAL_HOST}`;

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = url.hostname;
  const path = url.pathname + url.search;

  // Only apply redirects for production domain (not localhost / dev)
  if (host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`) {
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
  }

  // 3. Redirect legacy product URLs /product/[slug] -> /[slug]
  if (url.pathname.startsWith('/product/')) {
    const slug = url.pathname.replace('/product/', '');
    if (slug) {
      const redirectTarget = new URL(`/${slug}${url.search}`, url.origin);
      return NextResponse.redirect(redirectTarget, 301);
    }
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

