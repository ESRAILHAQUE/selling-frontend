import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get IP from headers
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown';

  // Get country from headers first (fastest)
  const countryFromHeader = request.headers.get('x-vercel-ip-country') ||
                            request.headers.get('cf-ipcountry') ||
                            null;

  if (countryFromHeader) {
    return NextResponse.json({ 
      country: countryFromHeader,
      blocked: countryFromHeader === 'BD',
      ip 
    });
  }

  // Fallback: Use IP geolocation API (only if headers don't provide country)
  // Note: This requires a geolocation service API key for production
  // You can use services like ipapi.co, ipgeolocation.io, etc.
  try {
    // Example using ipapi.co (free tier available)
    // Uncomment and add your API key if needed:
    /*
    const geoResponse = await fetch(`https://ipapi.co/${ip}/country_code/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    
    if (geoResponse.ok) {
      const countryCode = (await geoResponse.text()).trim();
      return NextResponse.json({ 
        country: countryCode,
        blocked: countryCode === 'BD',
        ip 
      });
    }
    */
  } catch (error) {
    console.error('Geolocation error:', error);
  }

  // If we can't determine country, allow access (fail open)
  return NextResponse.json({ 
    country: null,
    blocked: false,
    ip,
    message: 'Could not determine location'
  });
}

