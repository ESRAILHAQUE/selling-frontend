import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Returns Policy - 30 Days Warranty | USA Markets SMM',
  description: 'USA Markets SMM offers a 30-day warranty and 100% cash-back guarantee on all verified accounts. Read our refund and returns policy for complete details on replacements and refunds.',
  openGraph: {
    title: 'Refund & Returns Policy - USA Markets SMM',
    description: '30-day warranty with 100% money-back guarantee on all verified accounts.',
  },
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs with Schema */}
        <Breadcrumbs
          items={[
            { label: "Refund Policy", href: "/refund" }
          ]}
        />

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Refund and Returns Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">30 Days Warranty</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a 30-day warranty on all our products. This means that if you are not completely satisfied with your purchase, you will get a free replacement within 30 days of purchase.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, this warranty does not cover damages caused by misuse or improper care of the product.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a 100% cash-back guarantee. If you are not satisfied with your purchase and the issue cannot be resolved through replacement, we will provide a full refund.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund, please contact us within 30 days of purchase with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your order number or transaction ID</li>
              <li>Reason for refund request</li>
              <li>Any relevant documentation or screenshots</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
              <li>Contact our support team via Email, Telegram, or WhatsApp</li>
              <li>Provide your order details and reason for refund</li>
              <li>Our team will review your request within 24-48 hours</li>
              <li>If approved, refund will be processed within 5-7 business days</li>
              <li>Refund will be issued to the original payment method</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Items</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following items are not eligible for refund:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Products that have been used or modified</li>
              <li>Products damaged due to misuse or improper care</li>
              <li>Digital products that have been delivered and activated</li>
              <li>Services that have been completed</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For refund requests or questions about our policy, please contact us:
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

