import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/data/products-list';

const relatedProductSlugs = [
  'buy-twitter-accounts',
  'buy-social-security-number',
  'buy-old-gmail-accounts',
  'buy-usa-facebook-accounts'
];

const relatedProducts = relatedProductSlugs
  .map(slug => getProductBySlug(slug))
  .filter(Boolean) as Array<NonNullable<ReturnType<typeof getProductBySlug>>>;

export default function RelatedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="relative h-48 w-full bg-gradient-to-br from-purple-600 to-blue-600">
                <Image
                  src={product.imagePath}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
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

