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
        <div className="relative z-10 container mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Left Side - Text Content */}
            <div className="text-white pl-4 sm:pl-6 lg:pl-8">
              {/* Logo Banner */}
              <div className="inline-block mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-red-600 border-2 border-dashed border-white px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2">
                  <Logo size="sm" showText={false} className="text-white" />
                  <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                    USAMARKETSMM
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                GLOBAL IT SHOP &<br />
                <span className="ml-0 sm:ml-4">SERVICE AGENCY</span>
              </h1>

              {/* Descriptive Paragraph */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
        </div>

        {/* Left Hover Zone with Arrow */}
        <div className="absolute top-0 left-0 w-20 sm:w-24 lg:w-32 h-full z-20 group/left">
          <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8 flex items-center pointer-events-none opacity-0 group-hover/left:opacity-100 transition-opacity duration-300">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg transition-colors pointer-events-auto"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Hover Zone with Arrow */}
        <div className="absolute top-0 right-0 w-20 sm:w-24 lg:w-32 h-full z-20 group/right">
          <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8 flex items-center pointer-events-none opacity-0 group-hover/right:opacity-100 transition-opacity duration-300">
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
