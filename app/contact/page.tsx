import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: 'Contact Us - USA Markets SMM | 24/7 Customer Support',
  description: 'Contact USA Markets SMM for verified accounts and digital services. Available 24/7 via Email, Telegram, and WhatsApp. Get instant support for all your account needs.',
  keywords: [
    'contact usa markets smm',
    'customer support',
    'verified accounts support',
    'buy accounts contact',
    'account seller contact',
    '24/7 support',
    'telegram support',
    'whatsapp support'
  ],
  openGraph: {
    title: 'Contact USA Markets SMM | 24/7 Support',
    description: 'Get in touch with us 24/7 via Email, Telegram, or WhatsApp for all your verified account needs.',
    url: 'https://usamarketsmm.com/contact',
    siteName: 'USA Markets SMM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact USA Markets SMM',
    description: '24/7 customer support via Email, Telegram, and WhatsApp.',
  },
  alternates: {
    canonical: 'https://usamarketsmm.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://usamarketsmm.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://usamarketsmm.com/contact"
      }
    ]
  };

  // LocalBusiness Schema for Contact Page
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "USA Markets SMM",
    "alternateName": "USAMARKETSMM",
    "image": "https://usamarketsmm.com/logo.png",
    "url": "https://usamarketsmm.com",
    "telephone": "+1-712-298-2593",
    "email": "hello@usamarketsmm.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://t.me/Usamarketsmm",
      "https://wa.me/17122982593"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };
  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* LocalBusiness Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">Contact Us</span>
          </nav>

          {/* Page Header */}
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Contact USA Markets SMM - 24/7 Customer Support
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Get in touch with us 24/7 for any questions, support, or inquiries about our verified accounts and digital services. Our dedicated team responds within 24 hours.
            </p>
          </header>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:hello@usamarketsmm.com" className="text-blue-600 hover:underline break-all">
                hello@usamarketsmm.com
              </a>
              <p className="text-sm text-gray-600 mt-2">24 Hours Reply</p>
            </div>

            {/* Website */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Website</h3>
              <a href="https://usamarketsmm.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                https://usamarketsmm.com
              </a>
            </div>

            {/* Telegram */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telegram</h3>
              <a href="https://t.me/Usamarketsmm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                @Usamarketsmm
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/17122982593" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                +1(712)298-2593
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Send us a Message</h2>
            <p className="text-gray-600 mb-6 text-center">
              For the fastest response, please contact us directly via Email, Telegram, or WhatsApp using the links above.
            </p>
            <div className="text-center">
              <p className="text-gray-700 mb-4">Contact us/24 Hours Reply</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@usamarketsmm.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Email Us
                </a>
                <a
                  href="https://t.me/Usamarketsmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/17122982593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  </>
  );
}
