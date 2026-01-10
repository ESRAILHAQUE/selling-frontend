import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { productsData } from '@/lib/data/products-list';

export default function ShopPage() {
  const products = Object.values(productsData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Shop</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
            Browse our wide selection of verified accounts and services. All products come with 30 days warranty and 24/7 customer support.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative h-48 w-full bg-gradient-to-br from-purple-600 to-blue-600">
                <Image
                  src="/images/products/imgi_2_call-back_img.jpg"
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>
                
                {/* Price Range */}
                <p className="text-xl font-bold text-blue-600 mb-4">
                  ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
                </p>

                {/* View Product Button */}
                <Link
                  href={`/product/${product.slug}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (shouldn't show, but just in case) */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No products available at the moment.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

