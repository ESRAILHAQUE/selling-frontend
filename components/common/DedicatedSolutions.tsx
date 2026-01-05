import Image from 'next/image';
import Link from 'next/link';

export default function DedicatedSolutions() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Orange Line */}
            <div className="w-12 sm:w-16 h-1 bg-orange-500 mb-3 sm:mb-4"></div>
            
            {/* Header */}
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
              For Growing Your Business
            </p>
            
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              We Are Fully Dedicated For Your Best Solutions
            </h2>
            
            {/* Body Paragraph */}
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
              We are fully dedicated to providing you with the best solutions for your business. Our team is committed to finding the right solutions for your unique needs, troubleshooting any issues that may arise, and ensuring that you have everything you need to succeed. We understand that every business is different, and we take the time to understand your specific requirements and challenges. Our goal is to provide you with effective solutions that help you achieve your business objectives, and we are always here to support you every step of the way. We prioritize your interests and work tirelessly to ensure your satisfaction.
            </p>
            
            {/* Secondary Text */}
            <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8">
              We are always available here contact support for any problem or information.
            </p>
            
            {/* Call-to-Action Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-colors shadow-lg hover:shadow-xl"
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
              ABOUT US
            </Link>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/images/hero/imgi_1_04194f17ef59ef1e04194f17ef59ef1eHomePage-scaled.jpg"
              alt="Business solutions and dedication"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

