import Image from 'next/image';
import Link from 'next/link';

const relatedProducts = [
  {
    id: '1',
    title: 'Buy Twitter Accounts',
    category: 'Social Accounts',
    priceRange: { min: 25, max: 650 },
    slug: 'buy-twitter-accounts'
  },
  {
    id: '2',
    title: 'Buy Social Security Number',
    category: 'Social Accounts',
    priceRange: { min: 5, max: 500 },
    slug: 'buy-social-security-number'
  },
  {
    id: '3',
    title: 'Buy Old Gmail Accounts',
    category: 'Email Accounts',
    priceRange: { min: 15, max: 250 },
    slug: 'buy-old-gmail-accounts'
  },
  {
    id: '4',
    title: 'Buy USA Facebook Accounts',
    category: 'Social Accounts',
    priceRange: { min: 60, max: 3000 },
    slug: 'buy-usa-facebook-accounts'
  }
];

export default function RelatedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Promotional Image */}
              <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 p-6 text-white">
                {/* Sale Badge */}
                <div className="absolute top-2 left-2 bg-yellow-400 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                  Sale!
                </div>
                
                {/* 10% OFF */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm">
                    10%
                  </div>
                  <div className="bg-blue-500 p-1 rounded">
                    <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* 100% SATISFACTION */}
                <div className="flex justify-end mb-4">
                  <div className="bg-yellow-400 rounded-full p-2 border-2 border-yellow-300">
                    <div className="text-center">
                      <div className="text-sm font-bold text-black">100%</div>
                      <div className="text-xs font-semibold text-black">SATISFACTION</div>
                    </div>
                  </div>
                </div>

                {/* Order Now */}
                <div className="mb-4">
                  <button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded text-sm">
                    Order Now
                  </button>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-xs">
                  <div className="bg-white rounded p-2 flex items-center gap-2">
                    <div className="bg-green-500 p-1 rounded-full">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="text-green-600 font-semibold text-xs">WhatsApp: +1(712)298-2593</span>
                  </div>
                  <div className="bg-white rounded p-2 flex items-center gap-2">
                    <div className="bg-blue-500 p-1 rounded-full">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <span className="text-blue-600 font-semibold text-xs">Telegram: @Usamarketsmm</span>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mb-4">
                  ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
                </p>

                {/* Select Options Button */}
                <Link
                  href={`/product/${product.slug}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Select options
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

