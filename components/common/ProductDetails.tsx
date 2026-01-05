'use client';

import { useState } from 'react';
import PromotionalImage from '@/components/common/PromotionalImage';
import ProductInfo from '@/components/common/ProductInfo';
import ProductTabs from '@/components/common/ProductTabs';

interface ProductOption {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

interface Product {
  slug: string;
  title: string;
  category: string;
  categories: string[];
  priceRange: { min: number; max: number };
  breadcrumbs: string[];
  serviceDetails: string[];
  options: ProductOption[];
  description: string;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedOption, setSelectedOption] = useState<ProductOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Breadcrumbs */}
      <div className="mb-4 sm:mb-6">
        <nav className="text-xs sm:text-sm text-gray-600">
          {product.breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-1 sm:mx-2">/</span>}
              <span className={index === product.breadcrumbs.length - 1 ? 'text-gray-900 font-semibold' : 'hover:text-blue-600'}>
                {crumb}
              </span>
            </span>
          ))}
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
        {/* Left Side - Promotional Image */}
        <div>
          <PromotionalImage productTitle={product.title} />
        </div>

        {/* Right Side - Product Info */}
        <div>
          <ProductInfo
            product={product}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>

      {/* Product Tabs */}
      <ProductTabs
        product={{ ...product, title: product.title }}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

