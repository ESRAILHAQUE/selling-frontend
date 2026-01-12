import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cart/', '/checkout/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/cart/', '/checkout/', '/api/'],
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://usamarketsmm.com/sitemap.xml',
  }
}
