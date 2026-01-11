import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Get IP address from request headers
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             request.headers.get('cf-connecting-ip') ||
             'unknown';

  // Get country from headers (Vercel, Cloudflare, or other providers)
  let country = request.headers.get('x-vercel-ip-country') ||
                request.headers.get('cf-ipcountry') ||
                request.headers.get('x-country-code') ||
                null;

  // If country is not available from headers, try IP geolocation API
  if (!country && ip !== 'unknown' && !ip.includes('127.0.0.1') && !ip.includes('::1')) {
    try {
      // Using ipapi.co free tier (1000 requests/day)
      const geoResponse = await fetch(`https://ipapi.co/${ip}/country_code/`, {
        headers: {
          'User-Agent': 'Mozilla/5.0'
        },
        // Add timeout to prevent blocking
        signal: AbortSignal.timeout(2000)
      });
      
      if (geoResponse.ok) {
        const countryCode = (await geoResponse.text()).trim();
        if (countryCode && countryCode.length === 2) {
          country = countryCode;
        }
      }
    } catch (error) {
      // If geolocation fails, allow access (fail open)
      console.error('Geolocation check failed:', error);
    }
  }

  // Country restriction removed - all countries allowed

  // If country is not available, try to detect via IP geolocation API
  // This is a fallback for non-Vercel deployments
  if (!country && ip !== 'unknown') {
    // For production, you might want to use a geolocation service
    // For now, we'll allow access if country can't be determined
    // You can uncomment and use an API like ipapi.co or similar:
    /*
    try {
      const geoResponse = await fetch(`https://ipapi.co/${ip}/country_code/`);
      const countryCode = await geoResponse.text();
      if (countryCode.trim() === 'BD') {
        return new NextResponse('Access Restricted', { status: 403 });
      }
    } catch (error) {
      // Allow access if geolocation fails
    }
    */
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

