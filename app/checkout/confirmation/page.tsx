'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Order {
  id: string;
  items: any[];
  customer: any;
  subtotal: number;
  discount: number;
  total: number;
  date: string;
  status: string;
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    if (orderId) {
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      const foundOrder = orders.find((o: Order) => o.id === orderId);
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, [orderId, router]);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">Thank you for your order. We've received your order and will begin processing it right away.</p>
        </div>

        {/* Order Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Order Number</h3>
                <p className="text-lg font-bold text-gray-900">{order.id}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Order Date</h3>
                <p className="text-gray-900">{new Date(order.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Order Status</h3>
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold capitalize">
                  {order.status}
                </span>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <div>
                      <p className="font-semibold text-gray-900">{item.productTitle}</p>
                      <p className="text-sm text-gray-600">{item.optionName} × {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${order.subtotal.toFixed(2)}</span>
                </div>
                {order.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span className="font-semibold">-${order.discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Name</h3>
                <p className="text-gray-900">{order.customer.firstName} {order.customer.lastName}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                <p className="text-gray-900">{order.customer.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
                <p className="text-gray-900">{order.customer.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Address</h3>
                <p className="text-gray-900">
                  {order.customer.address}, {order.customer.city}, {order.customer.state} {order.customer.zipCode}
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">What's Next?</h2>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                <div>
                  <p className="font-semibold">Payment Instructions</p>
                  <p className="text-sm">You will receive payment instructions via email within 24 hours. Please complete the payment to confirm your order.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                <div>
                  <p className="font-semibold">Order Processing</p>
                  <p className="text-sm">Once payment is confirmed, we will begin processing your order immediately.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                <div>
                  <p className="font-semibold">Delivery</p>
                  <p className="text-sm">You will receive your order details via email within 24-48 hours after payment confirmation.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about your order, please don't hesitate to contact us. We're here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@usamarketsmm.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Email Us
              </a>
              <a
                href="https://t.me/Usamarketsmm"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/17122982593"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">Loading...</div>
        </div>
        <Footer />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

