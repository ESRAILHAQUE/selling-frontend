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
      { label: 'Buy Gmail Accounts', href: '/product/buy-gmail-accounts' },
      { label: 'Buy Old Gmail Accounts', href: '/product/buy-old-gmail-accounts' },
      { label: 'Buy Social Security Number', href: '/product/buy-social-security-number' }
    ]
  },
  {
    label: 'Social Accounts',
    dropdown: [
      { label: 'Buy Facebook Ads Accounts', href: '/product/buy-facebook-ads-accounts' },
      { label: 'Buy USA Facebook Accounts', href: '/product/buy-usa-facebook-accounts' },
      { label: 'Buy Facebook Account With 5000 Friends', href: '/product/buy-facebook-account-with-5000-friends' },
      { label: 'Buy LinkedIn Account', href: '/product/buy-linkedin-account' },
      { label: 'Buy Twitter Accounts', href: '/product/buy-twitter-accounts' },
      { label: 'Buy Instagram Accounts', href: '/product/buy-instagram-accounts' },
      { label: 'Buy SendGrid accounts', href: '/product/buy-sendgrid-accounts' },
      { label: 'Buy Soundcloud Accounts', href: '/product/buy-soundcloud-accounts' },
      { label: 'Buy naver account', href: '/product/buy-naver-account' }
    ]
  },
  {
    label: 'Bank account',
    dropdown: [
      { label: 'Buy Verified PayPal Accounts', href: '/product/buy-verified-paypal-accounts' },
      { label: 'Buy Verified Payoneer Accounts', href: '/product/buy-verified-payoneer-accounts' },
      { label: 'Buy Verified Cash App Account', href: '/product/buy-verified-cash-app-account' },
      { label: 'Buy Chime Bank Accounts', href: '/product/buy-chime-bank-accounts' },
      { label: 'Buy Verified OnlyFans Accounts', href: '/product/buy-verified-onlyfans-accounts' },
      { label: 'Buy Verified Skrill Accounts', href: '/product/buy-verified-skrill-accounts' },
      { label: 'Buy Verified Bluebird Accounts', href: '/product/buy-verified-bluebird-accounts' },
      { label: 'Buy Verified Luno Account', href: '/product/buy-verified-luno-account' },
      { label: 'Buy Verified Bank of America', href: '/product/buy-verified-bank-of-america' },
      { label: 'Buy Verified Wells Fargo Account', href: '/product/buy-verified-wells-fargo-account' },
      { label: 'Buy Verified Chase Bank Account', href: '/product/buy-verified-chase-bank-account' }
    ]
  },
  {
    label: 'Premium Banking',
    dropdown: [
      { label: 'Buy Verified Paxful Accounts', href: '/product/buy-verified-paxful-accounts' },
      { label: 'Buy Verified Apple Pay Accounts', href: '/product/buy-verified-apple-pay-accounts' },
      { label: 'Buy Verified Alipay Accounts', href: '/product/buy-verified-alipay-accounts' },
      { label: 'Buy Verified Moonpay Accounts', href: '/product/buy-verified-moonpay-accounts' },
      { label: 'Buy Verified RedotPay Accounts', href: '/product/buy-verified-redotpay-accounts' },
      { label: 'Buy Verified Bittrex Account', href: '/product/buy-verified-bittrex-account' },
      { label: 'Buy Verified Revolut Accounts', href: '/product/buy-verified-revolut-accounts' },
      { label: 'Buy Verified Advcash Account', href: '/product/buy-verified-advcash-account' },
      { label: 'Buy Verified 2CheckOut Account', href: '/product/buy-verified-2checkout-account' },
      { label: 'Buy Verified TransferWise Account', href: '/product/buy-verified-transferwise-account' },
      { label: 'Buy Verified Perfect Money Account', href: '/product/buy-verified-perfect-money-account' },
      { label: 'Buy Verified Webmoney Account', href: '/product/buy-verified-webmoney-account' }
    ]
  },
  {
    label: 'Google',
    dropdown: [
      { label: 'Buy Google Voice Accounts', href: '/product/buy-google-voice-accounts' },
      { label: 'Buy Google Ads Account', href: '/product/buy-google-ads-account' },
      { label: 'Buy Verified Coinbase Accounts', href: '/product/buy-verified-coinbase-accounts' },
      { label: 'Buy Verified Binance Accounts', href: '/product/buy-verified-binance-accounts' }
    ]
  },
  {
    label: 'Reviews',
    dropdown: [
      { label: 'Buy Google reviews', href: '/product/buy-google-reviews' },
      { label: 'Buy Google Business Reviews', href: '/product/buy-google-business-reviews' },
      { label: 'Buy Google 5 Star Reviews', href: '/product/buy-google-5-star-reviews' },
      { label: 'Buy TrustPilot Reviews', href: '/product/buy-trustpilot-reviews' }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner - Services Scrolling */}
      <div className="bg-purple-800 py-3 sm:py-4 overflow-hidden relative">
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12 animate-scroll">
          {/* Duplicate set for seamless scrolling */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-6 sm:gap-8 lg:gap-12 flex-shrink-0">
              {/* Seo Service - Pink */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <span className="text-pink-500 font-semibold text-sm sm:text-base whitespace-nowrap">Seo Service</span>
              </div>

              {/* Review Service - White */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">Review Service</span>
              </div>

              {/* Marketing Service - Pink */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <span className="text-pink-500 font-semibold text-sm sm:text-base whitespace-nowrap">Marketing Service</span>
              </div>

              {/* Social Account - White */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">Social Account</span>
              </div>

              {/* Web Development Service - Pink */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="text-pink-500 font-semibold text-sm sm:text-base whitespace-nowrap">Web Development Service</span>
              </div>

              {/* Copy Past and Writing - White */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">Copy Past and Writing</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Header - Dark Purple */}
      <div className="bg-purple-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">USAMARKETSMM</h1>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-base font-semibold transition-colors"
              >
                LOGIN
              </Link>
              <Link href="/cart" className="relative">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
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
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-12">
            <ul className="flex items-center space-x-4 xl:space-x-6 w-full">
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
                      className="flex items-center gap-1 hover:text-green-200 transition-colors text-sm xl:text-base py-3"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1 cursor-pointer hover:text-green-200 transition-colors text-sm xl:text-base py-3">
                      {item.label}
                      {item.dropdown && (
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  )}

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && openDropdown === item.label && (
                    <div 
                      className="absolute top-full left-0 pt-2 bg-white shadow-xl rounded-sm min-w-[250px] py-2 z-50"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 transition-colors text-sm"
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

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between h-12">
              <div className="flex-1"></div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Sidebar */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-green-600 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="p-4 border-b border-green-500 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="overflow-y-auto h-[calc(100vh-64px)] pb-4">
                <ul className="space-y-1 mt-2">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 hover:bg-green-700 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => setMobileDropdownOpen(mobileDropdownOpen === item.label ? null : item.label)}
                            className="w-full flex items-center justify-between px-4 py-2 hover:bg-green-700 transition-colors text-left"
                          >
                            <span>{item.label}</span>
                            <svg
                              className={`w-4 h-4 transition-transform ${mobileDropdownOpen === item.label ? 'rotate-180' : ''}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {item.dropdown && mobileDropdownOpen === item.label && (
                            <ul className="bg-green-700 pl-4">
                              {item.dropdown.map((dropdownItem) => (
                                <li key={dropdownItem.label}>
                                  <Link
                                    href={dropdownItem.href}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileDropdownOpen(null);
                                    }}
                                    className="block px-4 py-2 hover:bg-green-600 transition-colors text-sm"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
