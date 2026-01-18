'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

interface CartItem {
  id: string;
  productSlug: string;
  productTitle: string;
  optionName: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  imageUrl: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  notes: string;
}

// Payment method configurations with addresses
const paymentMethods = {
  btc: {
    name: 'Bitcoin',
    symbol: 'BTC',
    network: 'Bitcoin Network',
    address: '1718cLdXHN5crnKEXmvnwC7epTkpysiqCz',
    color: 'from-orange-400 to-orange-600',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-600',
    description: 'Send Bitcoin to this address',
    icon: 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/btc.svg'
  },
  sol: {
    name: 'Solana',
    symbol: 'SOL',
    network: 'Solana Network',
    address: 'AYu2uyYtVQsabyZutN1yMvkXBY3fKMotqNYFPEFzEdX',
    color: 'from-purple-400 to-purple-600',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-600',
    description: 'Send Solana to this address',
    icon: 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/sol.svg'
  },
  eth: {
    name: 'Ethereum',
    symbol: 'ETH',
    network: 'Ethereum (ERC20)',
    address: '0x7d2ea188ae93426b21d97b9cb4657274fb3d82a4',
    color: 'from-blue-400 to-blue-600',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-600',
    description: 'Send Ethereum (ERC20) to this address',
    icon: 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/eth.svg'
  },
  ltc: {
    name: 'Litecoin',
    symbol: 'LTC',
    network: 'Litecoin Network',
    address: 'LWQH9p3CxfLrSCdy83Emp55f1iavRp4NMd',
    color: 'from-gray-400 to-gray-600',
    bgLight: 'bg-gray-50',
    borderColor: 'border-gray-500',
    textColor: 'text-gray-600',
    description: 'Send Litecoin to this address',
    icon: 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/ltc.svg'
  },
  usdt: {
    name: 'Tether',
    symbol: 'USDT',
    network: 'Tron (TRC20)',
    address: 'TQTNtQoJcoqRF6qQ1Tm83ZpofEt9UXwvLW',
    color: 'from-green-400 to-green-600',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-500',
    textColor: 'text-green-600',
    description: 'Send USDT via Tron Network (TRC20)',
    icon: 'https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.18.1/svg/color/usdt.svg'
  }
};

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        if (items.length === 0) {
          router.push('/cart');
          return;
        }
        setCartItems(items);
      } catch (e) {
        console.error('Error parsing cart:', e);
        router.push('/cart');
      }
    } else {
      router.push('/cart');
    }
    setLoading(false);
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const copyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    // Create order object
    const order = {
      id: `ORDER-${Date.now()}`,
      items: cartItems,
      customer: formData,
      subtotal: subtotal,
      discount: totalDiscount,
      total: total,
      date: new Date().toISOString(),
      status: 'pending'
    };

    // Save order to localStorage (in a real app, this would go to a backend)
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Clear cart immediately
    localStorage.removeItem('cart');
    // Update cart count in navbar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'));
    }

    // Redirect to order confirmation page
    setTimeout(() => {
      router.push(`/checkout/confirmation?orderId=${order.id}`);
    }, 100);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalDiscount = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const total = subtotal;

  if (loading) {
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

  if (cartItems.length === 0) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/cart" className="hover:text-blue-600">Cart</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">Checkout</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Please fill in your information to complete your order</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Information */}
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Billing Information</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.state ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.zipCode ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 text-gray-900 bg-white border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.country ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                    placeholder="Any special instructions or notes for your order..."
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                    <p className="text-sm text-gray-600">Select your preferred cryptocurrency</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {Object.entries(paymentMethods).map(([key, method]) => (
                    <label
                      key={key}
                      className={`relative flex flex-col p-3 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 ${
                        formData.paymentMethod === key
                          ? `${method.borderColor} ${method.bgLight} shadow-lg`
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={key}
                        checked={formData.paymentMethod === key}
                        onChange={handleInputChange}
                        className="absolute top-3 right-3"
                      />
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md p-1.5">
                          <img 
                            src={method.icon} 
                            alt={method.name}
                            className="w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base">{method.name}</p>
                          <p className="text-xs text-gray-500">{method.symbol}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">{method.network}</p>
                      {formData.paymentMethod === key && (
                        <div className="absolute -top-1.5 -right-1.5">
                          <div className={`w-5 h-5 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center shadow-lg`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </label>
                  ))}
                </div>

                {errors.paymentMethod && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-700 text-sm font-medium">{errors.paymentMethod}</p>
                  </div>
                )}

                {/* Payment Details Display */}
                {formData.paymentMethod && (
                  <div className={`mt-6 p-4 ${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].bgLight} rounded-xl border-2 ${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].borderColor}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg p-2 border-2 border-gray-100">
                        <img 
                          src={paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].icon}
                          alt={paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].name}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">
                          {paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].name} Payment
                        </h3>
                        <p className={`text-xs ${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].textColor} font-medium`}>
                          {paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].description}
                        </p>
                      </div>
                    </div>

                    {/* QR Code */}
                    <div className="flex justify-center mb-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-white">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].address}&margin=5`}
                          alt="Payment QR Code"
                          className="w-40 h-40"
                        />
                        <p className="text-center text-xs text-gray-500 mt-2">Scan with wallet</p>
                      </div>
                    </div>

                    {/* Network Information */}
                    <div className="mb-3 p-3 bg-white rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs font-semibold text-gray-700">Network</span>
                      </div>
                      <p className={`text-sm font-bold ${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].textColor}`}>
                        {paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].network}
                      </p>
                    </div>

                    {/* Wallet Address */}
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Wallet Address
                      </label>
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].address}
                            readOnly
                            className="w-full px-3 py-2.5 text-xs text-gray-900 bg-white border-2 border-gray-300 rounded-lg font-mono break-all"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => copyAddress(paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].address)}
                          className={`px-4 py-2.5 bg-gradient-to-br ${paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].color} hover:opacity-90 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 whitespace-nowrap`}
                        >
                          {copiedAddress ? (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="hidden sm:inline text-sm">Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span className="hidden sm:inline text-sm">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Important Instructions */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3">
                      <div className="flex gap-2">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm">⚠️ Important Instructions</h4>
                          <ul className="space-y-1.5 text-xs text-gray-700">
                            <li className="flex items-start gap-1.5">
                              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span><strong>Send exact amount</strong> to the address above</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span><strong>Verify network:</strong> {paymentMethods[formData.paymentMethod as keyof typeof paymentMethods].network}</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span><strong>Double-check address</strong> before sending</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span><strong>Processing:</strong> 1-2 hours after payment</span>
                            </li>
                          </ul>
                          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-xs text-red-800 font-semibold flex items-center gap-1.5">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                              </svg>
                              Wrong network = Lost funds!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-200 last:border-b-0">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.productTitle}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{item.productTitle}</p>
                        <p className="text-xs text-gray-600">{item.optionName}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-gray-900 mt-1">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {totalDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount:</span>
                      <span className="font-semibold">-${totalDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
                >
                  {submitting ? 'Processing...' : 'Place Order'}
                </button>

                {/* Security Features */}
                <div className="text-xs text-gray-600 space-y-2">
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30 Days Warranty
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% Verified Accounts
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast Delivery
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

