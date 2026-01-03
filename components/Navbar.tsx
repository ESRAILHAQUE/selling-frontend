'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Email Accounts',
    dropdown: [
      { label: 'Buy Gmail Accounts', href: '/product-category/email-accounts/buy-gmail-accounts' },
      { label: 'Buy Old Gmail Accounts', href: '/product-category/email-accounts/buy-old-gmail-accounts' },
      { label: 'Buy Social Security Number', href: '/product-category/email-accounts/buy-social-security-number' }
    ]
  },
  {
    label: 'Social Accounts',
    dropdown: [
      { label: 'Buy Facebook Ads Accounts', href: '/product-category/social-accounts/buy-facebook-ads-accounts' },
      { label: 'Buy USA Facebook Accounts', href: '/product-category/social-accounts/buy-usa-facebook-accounts' },
      { label: 'Buy Facebook Account With 5000 Friends', href: '/product-category/social-accounts/buy-facebook-account-with-5000-friends' },
      { label: 'Buy LinkedIn Account', href: '/product-category/social-accounts/buy-linkedin-account' },
      { label: 'Buy Twitter Accounts', href: '/product-category/social-accounts/buy-twitter-accounts' },
      { label: 'Buy Instagram Accounts', href: '/product-category/social-accounts/buy-instagram-accounts' },
      { label: 'Buy SendGrid accounts', href: '/product-category/social-accounts/buy-sendgrid-accounts' },
      { label: 'Buy Soundcloud Accounts', href: '/product-category/social-accounts/buy-soundcloud-accounts' },
      { label: 'Buy naver account', href: '/product-category/social-accounts/buy-naver-account' }
    ]
  },
  {
    label: 'Bank account',
    dropdown: [
      { label: 'Buy Verified PayPal Accounts', href: '/product-category/bank-account/buy-verified-paypal-accounts' },
      { label: 'Buy Verified Payoneer Accounts', href: '/product-category/bank-account/buy-verified-payoneer-accounts' },
      { label: 'Buy Verified Cash App Account', href: '/product-category/bank-account/buy-verified-cash-app-account' },
      { label: 'Buy Chime Bank Accounts', href: '/product-category/bank-account/buy-chime-bank-accounts' },
      { label: 'Buy Verified OnlyFans Accounts', href: '/product-category/bank-account/buy-verified-onlyfans-accounts' },
      { label: 'Buy Verified Skrill Accounts', href: '/product-category/bank-account/buy-verified-skrill-accounts' },
      { label: 'Buy Verified Bluebird Accounts', href: '/product-category/bank-account/buy-verified-bluebird-accounts' },
      { label: 'Buy Verified Luno Account', href: '/product-category/bank-account/buy-verified-luno-account' },
      { label: 'Buy Verified Bank of America', href: '/product-category/bank-account/buy-verified-bank-of-america' },
      { label: 'Buy Verified Wells Fargo Account', href: '/product-category/bank-account/buy-verified-wells-fargo-account' },
      { label: 'Buy Verified Chase Bank Account', href: '/product-category/bank-account/buy-verified-chase-bank-account' }
    ]
  },
  {
    label: 'Premium Banking',
    dropdown: [
      { label: 'Buy Verified Paxful Accounts', href: '/product-category/premium-banking/buy-verified-paxful-accounts' },
      { label: 'Buy Verified Apple Pay Accounts', href: '/product-category/premium-banking/buy-verified-apple-pay-accounts' },
      { label: 'Buy Verified Alipay Accounts', href: '/product-category/premium-banking/buy-verified-alipay-accounts' },
      { label: 'Buy Verified Moonpay Accounts', href: '/product-category/premium-banking/buy-verified-moonpay-accounts' },
      { label: 'Buy Verified RedotPay Accounts', href: '/product-category/premium-banking/buy-verified-redotpay-accounts' },
      { label: 'Buy Verified Bittrex Account', href: '/product-category/premium-banking/buy-verified-bittrex-account' },
      { label: 'Buy Verified Revolut Accounts', href: '/product-category/premium-banking/buy-verified-revolut-accounts' },
      { label: 'Buy Verified Advcash Account', href: '/product-category/premium-banking/buy-verified-advcash-account' },
      { label: 'Buy Verified 2CheckOut Account', href: '/product-category/premium-banking/buy-verified-2checkout-account' },
      { label: 'Buy Verified TransferWise Account', href: '/product-category/premium-banking/buy-verified-transferwise-account' },
      { label: 'Buy Verified Perfect Money Account', href: '/product-category/premium-banking/buy-verified-perfect-money-account' },
      { label: 'Buy Verified Webmoney Account', href: '/product-category/premium-banking/buy-verified-webmoney-account' }
    ]
  },
  {
    label: 'Google',
    dropdown: [
      { label: 'Buy Google Voice Accounts', href: '/product-category/google/buy-google-voice-accounts' },
      { label: 'Buy Google Ads Account', href: '/product-category/google/buy-google-ads-account' },
      { label: 'Buy Verified Coinbase Accounts', href: '/product-category/google/buy-verified-coinbase-accounts' },
      { label: 'Buy Verified Binance Accounts', href: '/product-category/google/buy-verified-binance-accounts' }
    ]
  },
  {
    label: 'Reviews',
    dropdown: [
      { label: 'Buy Google reviews', href: '/product-category/reviews/buy-google-reviews' },
      { label: 'Buy Google Business Reviews', href: '/product-category/reviews/buy-google-business-reviews' },
      { label: 'Buy Google 5 Star Reviews', href: '/product-category/reviews/buy-google-5-star-reviews' },
      { label: 'Buy TrustPilot Reviews', href: '/product-category/reviews/buy-trustpilot-reviews' }
    ]
  },
  {
    label: 'Contact Us',
    dropdown: [
      { label: 'Shop', href: '/shop' }
    ]
  }
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner - Scrolling */}
      <div className="bg-green-600 text-white py-2 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-scroll">
          <span className="inline-block px-4">
            Welcome to our Shop. We always try to provide 100% safe and reliable service to our client. usatopseller.com is on of the best quality service provider website at the cheapest price. So if you are interested about our any service, Order Now
          </span>
          <span className="inline-block px-4">
            Welcome to our Shop. We always try to provide 100% safe and reliable service to our client. usatopseller.com is on of the best quality service provider website at the cheapest price. So if you are interested about our any service, Order Now
          </span>
        </div>
      </div>

      {/* Main Header - Dark Purple */}
      <div className="bg-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl sm:text-3xl font-bold">USA TOP SELLER</h1>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                LOGIN
              </Link>
              <Link href="/cart" className="relative">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Green */}
      <nav className="bg-green-600 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-12">
            <ul className="flex items-center space-x-6 w-full">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 hover:text-green-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 cursor-pointer hover:text-green-200 transition-colors">
                      {item.label}
                      {item.dropdown && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg min-w-[250px] py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
