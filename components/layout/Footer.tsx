'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* 30 Days Warranty Section */}
          <div>
            <h3 className="text-cyan-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4">30 Days Warranty</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-white">
              We offer 30 days warranty for our all products. This means that if you are not completely satisfied with your purchase, you will get free replacement within 30 days. But this warranty does not cover damages caused by misuse or improper care.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-cyan-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Useful Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white">
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
            <h3 className="text-cyan-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Payment</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white">
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
            <h3 className="text-cyan-400 text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact us</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-orange-400">Contact us/24 Hours Reply</p>
              <p>
                <span className="text-purple-400">Email:</span>{' '}
                <a href="mailto:hello@usamarketsmm.com" className="text-white hover:text-cyan-400 break-all">
                  hello@usamarketsmm.com
                </a>
              </p>
              <p>
                <span className="text-blue-400">Website:</span>{' '}
                <a href="https://usamarketsmm.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 break-all">
                  https://usamarketsmm.com
                </a>
              </p>
              <p>
                <span className="text-green-400">Telegram:</span>{' '}
                <a href="https://t.me/Usamarketsmm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400">
                  @Usamarketsmm
                </a>
              </p>
              <p>
                <span className="text-orange-400">WhatsApp:</span>{' '}
                <a href="https://wa.me/17122982593" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 break-all">
                  +1(712)298-2593
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
