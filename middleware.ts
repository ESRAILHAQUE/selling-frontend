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

  // Block Bangladesh (BD)
  if (country === 'BD') {
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Restricted</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .container {
            text-align: center;
            padding: 2rem;
            max-width: 600px;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Access Restricted</h1>
          <p>Sorry, access to this website is not available from your location.</p>
        </div>
      </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    );
  }

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

