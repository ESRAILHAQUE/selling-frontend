import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceFeature from '@/components/ServiceFeature';
import CallToActionShop from '@/components/CallToActionShop';
import StatsCard from '@/components/StatsCard';
import ProductCard from '@/components/ProductCard';
import SellerRanking from '@/components/SellerRanking';
import Footer from '@/components/Footer';
import { stats } from '@/data/stats';
import { products } from '@/data/products';
import { sellers } from '@/data/sellers';

export default function Home() {
  // Get top products (first 12)
  const topProducts = products.slice(0, 12);
  
  // Get top sellers (first 10)
  const topSellers = sellers.slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Service Feature Section */}
      <ServiceFeature />
      
      {/* Call to Action Shop Section */}
      <CallToActionShop />
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Platform Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatsCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <a
              href="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Sellers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Top Sellers
            </h2>
            <a
              href="/sellers"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              View All
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="space-y-4">
            {topSellers.map((seller) => (
              <SellerRanking key={seller.id} seller={seller} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sellers and buyers in our marketplace. Start exploring premium products today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Browse Products
            </a>
            <a
              href="/sellers"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Become a Seller
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
