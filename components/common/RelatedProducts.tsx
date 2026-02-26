import Image from 'next/image';
import Link from 'next/link';
import { getAllProductSlugs, getProductBySlug } from '@/lib/data/products-list';

interface RelatedProductsProps {
  currentSlug: string;
  category: string;
}

export default function RelatedProducts({ currentSlug, category }: RelatedProductsProps) {
  const allSlugs = getAllProductSlugs();

  // Find products in the same category, excluding the current product
  const relatedProducts = allSlugs
    .filter(slug => slug !== currentSlug)
    .map(slug => getProductBySlug(slug))
    .filter(p => p && p.category === category)
    .slice(0, 4) as Array<NonNullable<ReturnType<typeof getProductBySlug>>>;

  // Fallback: if not enough same-category products, fill with any other products
  const fallbackProducts = relatedProducts.length < 4
    ? allSlugs
        .filter(slug => slug !== currentSlug && !relatedProducts.find(p => p.slug === slug))
        .map(slug => getProductBySlug(slug))
        .filter(Boolean)
        .slice(0, 4 - relatedProducts.length) as Array<NonNullable<ReturnType<typeof getProductBySlug>>>
    : [];

  const products = [...relatedProducts, ...fallbackProducts];

  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Related products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
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

              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>

                <p className="text-lg font-bold text-gray-900 mb-4">
                  ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
                </p>

                <Link
                  href={`/${product.slug}`}
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
