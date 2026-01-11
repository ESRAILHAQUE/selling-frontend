import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/components/common/Logo';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px]">
        {/* Background Image */}
        <Image
          src="/images/hero/hero-image.png"
          alt="USAMARKETSMM - Global IT Shop & Service Agency"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Left Side - Text Content */}
            <div className="text-white">
              {/* Logo Banner */}
              <div className="inline-block mb-4 sm:mb-6">
                <div className="bg-red-600 border-2 border-dashed border-white px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2">
                  <Logo size="sm" showText={false} className="text-white" />
                  <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                    USAMARKETSMM
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-4 sm:mb-6">
                GLOBAL IT SHOP &<br />
                <span className="ml-0 sm:ml-4">SERVICE AGENCY</span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                As your trusted IT company, we provide our IT services worldwide with utmost care and Selling some Digital Account. Our main goal is to work according to the needs of our customers and fulfill them accurately.
              </p>

              {/* See Service Button */}
              <Link
                href="/shop"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors shadow-lg text-sm sm:text-base"
              >
                See Service
              </Link>
            </div>

            {/* Right Side - Image (already in background) */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center pointer-events-none">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors pointer-events-auto"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors pointer-events-auto"
              aria-label="Next"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
