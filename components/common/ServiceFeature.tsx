interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: '1',
    title: '100% Safe',
    description: 'We offer a 100% safe and secure service that is perfect for anyone looking to get the most out of their online experience. We always try to give good quality service to our client. So it,s totally safe & there is no chance for the account to be hacked and banned.',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: '2',
    title: 'High-Quality Services',
    description: 'We provide all the services as soon as possible to our clients. We provide the best quality service. We also offer a 100% satisfaction guarantee, so you can be sure you\'re getting the best service possible. You will receive service within 24 hours after confirm order.',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    id: '3',
    title: '24x7 Support',
    description: 'We offer 24/7 support to our clients. We are always here for you. So Contact us via Skype, WhatsApp, Telegram or Email for the platform according to your needs and growth plan. Our team members are always ready to talk with you & will try to fix your problems.',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: '4',
    title: 'Real Users No Bots',
    description: 'Our real users are the backbone of our community. They are the ones who contribute the most to our site, and they are the ones who keep coming back. Without them, we would be nothing',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: '5',
    title: 'Guaranteed Delivery',
    description: 'We will deliver your product within the specified time frame or we will refund your purchase. This guarantee gives you the peace of mind that your purchase will arrive on time, every time.',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: '6',
    title: 'Any Time Replace',
    description: 'If you\'re not happy with a product you purchased from us, we\'ll replace it free of charge. Simply return the item to us within 30 days of purchase, and we\'ll send you a replacement.',
    icon: (
      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    )
  }
];

export default function ServiceFeature() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Service Feature</h2>
          {/* Separator with three dots and line */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <div className="w-12 sm:w-16 h-0.5 bg-orange-500"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center p-4 sm:p-6 rounded-lg hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-400 bg-gray-50 group-hover:border-orange-500 group-hover:bg-orange-50 transition-all duration-300">
                  <div className="group-hover:text-orange-500 transition-colors duration-300 scale-75 sm:scale-90 lg:scale-100">
                    {feature.icon}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

