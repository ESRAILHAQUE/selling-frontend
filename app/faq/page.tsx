import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import FAQSchema from '@/components/common/FAQSchema';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | USA Markets SMM',
  description: 'Find answers to common questions about buying verified accounts from USA Markets SMM. Learn about payment methods, delivery times, warranties, and account verification.',
  openGraph: {
    title: 'Frequently Asked Questions - USA Markets SMM',
    description: 'Get answers to your questions about our verified accounts and services.',
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Bitcoin, Ethereum, USDT, and any other cryptocurrency coins. We also accept PayPal FNF, Payoneer, Perfect Money, and Cash App. All payments are processed securely.'
    },
    {
      question: 'Do you offer a warranty on your products?',
      answer: 'Yes, we offer a 30-day warranty on all our products. If you are not completely satisfied with your purchase, you will get a free replacement within 30 days. However, this warranty does not cover damages caused by misuse or improper care.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary depending on the product. Most accounts are delivered within 24 hours of payment confirmation. Some premium accounts may take up to 48 hours. You will receive delivery details via email or Telegram.'
    },
    {
      question: 'Are the accounts verified?',
      answer: 'Yes, all our accounts are 100% verified. We provide phone-verified accounts from USA, UK, CA, and other countries. All accounts are tested and ready to use immediately after delivery.'
    },
    {
      question: 'What if I have issues with my account?',
      answer: 'We offer 24/7 customer support. If you encounter any issues with your account, please contact us via Email (hello@usamarketsmm.com), Telegram (@Usamarketsmm), or WhatsApp (+1(712)298-2593). We will respond within 24 hours and work to resolve your issue.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'We offer a 100% cash-back guarantee. If you are not satisfied with your purchase and the issue cannot be resolved through replacement, we will provide a full refund. Please contact our support team for refund requests.'
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order by visiting our shop page, selecting the product you want, choosing your preferred option, and adding it to your cart. Then proceed to checkout. Alternatively, you can contact us directly via Telegram or WhatsApp to place an order.'
    },
    {
      question: 'Are the accounts safe to use?',
      answer: 'Yes, all our accounts are 100% safe and reliable. We ensure that all accounts are verified, active, and in good standing. We never share your information with third parties and maintain strict confidentiality.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'For most orders, you only need to provide your email address for delivery. Some premium accounts may require additional verification. We will guide you through the process if any additional information is needed.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer discounts on bulk orders. The more accounts you purchase, the better the price. Please contact us via Telegram or WhatsApp to discuss bulk pricing for your specific needs.'
    }
  ];

  return (
    <>
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={faqs} />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Breadcrumbs with Schema */}
          <Breadcrumbs
            items={[
              { label: "FAQ", href: "/faq" }
            ]}
          />

        {/* Page Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and policies. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 bg-blue-50 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 text-center">
            Our support team is available 24/7 to help you with any questions or concerns.
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

      <Footer />
      </div>
    </>
  );
}

