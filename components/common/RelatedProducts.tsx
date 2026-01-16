import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug } from '@/lib/data/products-list';

const relatedProductSlugs = [
  'buy-twitter-accounts',
  'buy-old-yahoo-account',
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
              <div className="relative w-full aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                <Image
                  src={product.imagePath}
                  alt={`${product.title} - Premium verified accounts with instant delivery and 30-day warranty`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>

                {/* Price */}
                <p className="text-lg font-bold text-gray-900 mb-4">
                  ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
                </p>

                {/* Select Options Button */}
                <Link
                  href={`/product/${product.slug}`}
                  className="btn-primary block w-full text-white text-center font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
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

