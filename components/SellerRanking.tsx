import Image from 'next/image';
import { Seller } from '@/data/sellers';

interface SellerRankingProps {
  seller: Seller;
}

export default function SellerRanking({ seller }: SellerRankingProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            #{seller.rank}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden">
            <Image
              src={seller.imageUrl}
              alt={seller.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{seller.name}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 text-yellow-400 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              {seller.rating} ({seller.reviews.toLocaleString()})
            </span>
            <span>{seller.products} products</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">{seller.category}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600">${(seller.monthlyRevenue / 1000).toFixed(0)}K</p>
          <p className="text-xs text-gray-500">monthly revenue</p>
          <p className="text-sm text-gray-600 mt-1">{seller.totalSales.toLocaleString()} total sales</p>
        </div>
      </div>
    </div>
  );
}

