import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: 'About USA Markets SMM - Your Trusted Verified Accounts Provider Since 2018',
  description: 'Learn about USA Markets SMM, a trusted provider of verified accounts since 2018. We offer 100% verified digital accounts with 30-day warranty, 24/7 support, and fast delivery to over 10,000 satisfied customers worldwide.',
  keywords: [
    'about usa markets smm',
    'verified accounts provider',
    'trusted account seller',
    'digital accounts company',
    'usa markets smm history',
    'verified accounts service',
    '24/7 customer support',
    'buy verified accounts'
  ],
  openGraph: {
    title: 'About USA Markets SMM - Trusted Since 2018',
    description: 'Your trusted provider of verified accounts with 30-day warranty and 24/7 support.',
    url: 'https://usamarketsmm.com/about',
    siteName: 'USA Markets SMM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About USA Markets SMM',
    description: 'Trusted verified accounts provider since 2018 with 10,000+ satisfied customers.',
  },
  alternates: {
    canonical: 'https://usamarketsmm.com/about',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
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
        "name": "About Us",
        "item": "https://usamarketsmm.com/about"
      }
    ]
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About USA Markets SMM",
    "description": "Learn about USA Markets SMM, a trusted provider of verified accounts since 2018",
    "url": "https://usamarketsmm.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "USA Markets SMM",
      "foundingDate": "2018",
      "description": "Trusted provider of verified digital accounts and services",
      "url": "https://usamarketsmm.com",
      "email": "hello@usamarketsmm.com",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1250"
      }
    }
  };

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* AboutPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">About Us</span>
          </nav>

          {/* Page Header */}
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About USA Markets SMM - Your Trusted Verified Accounts Provider
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Since 2018, we have been the trusted partner for verified accounts and digital services, serving over 10,000 satisfied customers worldwide with premium quality products and exceptional customer support.
            </p>
          </header>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            {/* Mission Section */}
            <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                At USA Markets SMM, we are fully dedicated to providing you with the best verified digital account solutions for your business. Our experienced team is committed to finding the right solutions for your unique needs, troubleshooting any issues that may arise, and ensuring that you have everything you need to succeed in the digital marketplace.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We understand that every business is different, and we take the time to understand your specific requirements and challenges. Our goal is to provide you with effective, reliable, and secure solutions that help you achieve your business objectives, and we are always here to support you every step of the way with our 24/7 customer service.
              </p>
            </section>

            {/* What We Offer */}
            <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>100% verified accounts with full documentation and recovery information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>30 days warranty on all products with free replacement guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>24/7 customer support via Email, Telegram, and WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>Fast delivery within 24-48 hours, often instant for popular products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>100% cash-back guarantee if issues cannot be resolved</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold flex-shrink-0" aria-hidden="true">✓</span>
                  <span>Secure payment methods including cryptocurrency, PayPal, and more</span>
                </li>
              </ul>
            </section>

            {/* Our Commitment */}
            <section className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                We prioritize your interests and work tirelessly to ensure your complete satisfaction. We are always available to provide support for any problem or information you need. Our dedicated team members are always ready to talk with you and will work diligently to fix your problems quickly and professionally.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Whether you need Gmail accounts, PayPal accounts, social media accounts, bank accounts, or any other digital services, we are here to help you grow your business with reliable, verified, and secure solutions that you can trust.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 text-center">
                Have questions or need assistance? We're here to help 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:hello@usamarketsmm.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Send us an email"
                >
                  Email Us
                </a>
                <a
                  href="https://t.me/Usamarketsmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Contact us on Telegram"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/17122982593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  aria-label="Contact us on WhatsApp"
                >
                  WhatsApp
                </a>
              </div>
            </section>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

