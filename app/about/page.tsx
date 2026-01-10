import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">About Us</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Usamarketsmm
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for verified accounts and digital services
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              At Usamarketsmm, we are fully dedicated to providing you with the best solutions for your business. Our team is committed to finding the right solutions for your unique needs, troubleshooting any issues that may arise, and ensuring that you have everything you need to succeed.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We understand that every business is different, and we take the time to understand your specific requirements and challenges. Our goal is to provide you with effective solutions that help you achieve your business objectives, and we are always here to support you every step of the way.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-base sm:text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>100% verified accounts with full documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>30 days warranty on all products</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>24/7 customer support via Email, Telegram, and WhatsApp</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Fast delivery within 24-48 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>100% cash-back guarantee</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                <span>Secure payment methods including cryptocurrency</span>
              </li>
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              We prioritize your interests and work tirelessly to ensure your satisfaction. We are always available to contact support for any problem or information. Our team members are always ready to talk with you and will try to fix your problems.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Whether you need email accounts, social media accounts, bank accounts, or any other digital services, we are here to help you grow your business with reliable and verified solutions.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
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
              >
                Email Us
              </a>
              <a
                href="https://t.me/Usamarketsmm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/17122982593"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

