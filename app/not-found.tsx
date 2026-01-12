import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | USA Markets SMM",
  description:
    "The page you're looking for doesn't exist. Browse our verified accounts including Gmail, PayPal, Facebook, and more.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Error Code */}
        <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might
          have been removed, had its name changed, or is temporarily
          unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Go to Homepage
          </Link>

          <Link
            href="/shop"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Browse Products
          </Link>
        </div>

        {/* Popular Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Popular Products
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <Link
              href="/product/buy-gmail-accounts"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy Gmail Accounts
            </Link>
            <Link
              href="/product/buy-verified-paypal-accounts"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy PayPal Accounts
            </Link>
            <Link
              href="/product/buy-facebook-ads-accounts"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy Facebook Ads Accounts
            </Link>
            <Link
              href="/product/buy-instagram-accounts"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy Instagram Accounts
            </Link>
            <Link
              href="/product/buy-verified-cash-app-account"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy Cash App Accounts
            </Link>
            <Link
              href="/product/buy-google-ads-account"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              → Buy Google Ads Account
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-sm text-gray-600">
          <p className="mb-2">Need help? Contact us:</p>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@usamarketsmm.com"
              className="text-blue-600 hover:underline"
            >
              hello@usamarketsmm.com
            </a>
          </p>
          <p>
            Telegram:{" "}
            <a
              href="https://t.me/Usamarketsmm"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Usamarketsmm
            </a>
          </p>
          <p>WhatsApp: +1(712)298-2593</p>
        </div>
      </div>
    </div>
  );
}
