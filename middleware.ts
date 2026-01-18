import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Get User-Agent to detect bots
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of search engine bots to allow without processing
  const botPatterns = [
    'Googlebot',
    'Bingbot',
    'Slurp', // Yahoo
    'DuckDuckBot',
    'Baiduspider',
    'YandexBot',
    'Sogou',
    'Exabot',
    'facebot', // Facebook
    'ia_archiver', // Alexa
  ];

  // Check if request is from a search engine bot
  const isBot = botPatterns.some(pattern => 
    userAgent.toLowerCase().includes(pattern.toLowerCase())
  );

  // Allow all bots without any checks (for SEO)
  if (isBot) {
    return NextResponse.next();
  }

  // For regular users, skip geolocation check as country restriction is removed
  // This improves performance and prevents indexing issues
  
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

