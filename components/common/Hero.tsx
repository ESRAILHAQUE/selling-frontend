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
          alt="USA Markets SMM - Premium verified digital accounts marketplace with instant delivery and 30-day warranty"
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
                <div className="px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2" style={{ backgroundColor: '#105495', border: '2px dashed white' }}>
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
                className="inline-block text-white font-bold uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors shadow-lg text-sm sm:text-base bg-[#105495] hover:bg-[#0d4375]"
              >
                See Service
              </Link>
            </div>

            {/* Right Side - Image (already in background) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
