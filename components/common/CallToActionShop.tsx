'use client';

import Link from 'next/link';

export default function CallToActionShop() {
  return (
    <section className="relative py-16 overflow-hidden pb-24 sm:pb-28 md:pb-32" style={{ backgroundColor: '#105495' }}>
      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 sm:h-24 md:h-28"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,50 C1300,35 1400,45 1440,50 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
            For Buying Our Products Go to Our Shop
          </h2>

          {/* Body Text */}
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white mb-6 sm:mb-8 lg:mb-10 leading-relaxed px-2">
            If you're looking for high-quality products that you can rely on, come to our shop. We have a wide selection of items to choose from, so you're sure to find what you need. Our products are made with care and attention to detail, so you can rest assured that you're getting the best possible value for your money. We're always happy to help you find the right product for your needs, so don't hesitate to ask if you need assistance. Come and visit us today, and see for yourself why we're the best place for all your shopping needs.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* VISIT SHOP Button */}
            <Link
              href="/shop"
              className="w-full sm:w-auto text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              style={{ backgroundColor: '#0d4375' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a3358'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0d4375'}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              VISIT SHOP
            </Link>

            {/* FAQ Button */}
            <Link
              href="/faq"
              className="w-full sm:w-auto text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
              style={{ backgroundColor: '#1565a0' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d4375'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1565a0'}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

