import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">Privacy Policy</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Usamarketsmm, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Account information and preferences</li>
              <li>Communication records when you contact us</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and our services</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send you promotional communications (with your consent)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Email: <a href="mailto:hello@usamarketsmm.com" className="text-blue-600 hover:underline">hello@usamarketsmm.com</a></li>
              <li>Telegram: <a href="https://t.me/Usamarketsmm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@Usamarketsmm</a></li>
              <li>WhatsApp: <a href="https://wa.me/17122982593" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">+1(712)298-2593</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

