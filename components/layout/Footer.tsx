'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 30 Days Warranty Section */}
          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">30 Days Warranty</h3>
            <p className="text-sm leading-relaxed text-white">
              We offer 30 days warranty for our all products. This means that if you are not completely satisfied with your purchase, you will get free replacement within 30 days. But this warranty does not cover damages caused by misuse or improper care.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-cyan-400 transition-colors">
                  Refund and Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-cyan-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Section */}
          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">Payment</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>Bitcoin:- Accept</li>
              <li>Ethereum:- Accept</li>
              <li>USDT:- Accept</li>
              <li>Any Cryptocurrency Coin:- Accept</li>
              <li>PayPal FNF / Payoneer:- Accept</li>
              <li>Perfect Money / Cash App:- Accept</li>
            </ul>
          </div>

          {/* Contact us Section */}
          <div>
            <h3 className="text-cyan-400 text-xl font-bold mb-4">Contact us</h3>
            <div className="space-y-2 text-sm">
              <p className="text-orange-400">Contact us/24 Hours Reply</p>
              <p>
                <span className="text-purple-400">Email:</span>{' '}
                <span className="text-white">usatopseller420@gmail.com</span>
              </p>
              <p>
                <span className="text-yellow-400">Skype:</span>{' '}
                <span className="text-white">usatopseller</span>
              </p>
              <p>
                <span className="text-green-400">Telegram:</span>{' '}
                <span className="text-white">@usatopseller</span>
              </p>
              <p>
                <span className="text-orange-400">WhatsApp:</span>{' '}
                <span className="text-white">+1(678) 609-3906</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Strip with Scroll to Top Button */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
