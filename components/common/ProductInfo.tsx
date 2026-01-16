'use client';

interface ProductOption {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

interface Product {
  slug: string;
  title: string;
  categories: string[];
  priceRange: { min: number; max: number };
  serviceDetails: string[];
  options: ProductOption[];
  imagePath: string;
  shortDescription?: string;
}

interface ProductInfoProps {
  product: Product;
  selectedOption: ProductOption | null;
  setSelectedOption: (option: ProductOption | null) => void;
  quantity: number;
  setQuantity: (qty: number) => void;
}

export default function ProductInfo({
  product,
  selectedOption,
  setSelectedOption,
  quantity,
  setQuantity
}: ProductInfoProps) {
  const handleAddToCart = () => {
    if (!selectedOption) {
      alert('Please select an option');
      return;
    }
    
    // Get current cart from localStorage
    const currentCart = localStorage.getItem('cart');
    const cartItems = currentCart ? JSON.parse(currentCart) : [];
    
    // Create cart item
    const cartItem = {
      id: `${product.slug}-${selectedOption.id}-${Date.now()}`,
      productSlug: product.slug,
      productTitle: product.title,
      optionName: selectedOption.name,
      price: selectedOption.price,
      originalPrice: selectedOption.originalPrice,
      quantity: quantity,
      imageUrl: product.imagePath
    };
    
    // Add to cart
    cartItems.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    // Dispatch custom event to update cart count in navbar
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cartUpdated'));
    }
    
    // Navigate to cart page
    window.location.href = '/cart';
  };

  return (
    <div>
      {/* Categories */}
      <div className="mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-gray-600">
          {product.categories.join(', ')}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{product.title}</h1>

      {/* Price Range */}
      <div className="mb-4 sm:mb-6">
        <div className="text-xl sm:text-2xl font-bold text-gray-900">
          ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
        </div>
        <div className="text-xs sm:text-sm text-gray-600">
          Price range: ${product.priceRange.min.toFixed(2)} through ${product.priceRange.max.toFixed(2)}
        </div>
      </div>

      {/* Short Description */}
      {product.shortDescription && (
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      )}

      {/* Service Details */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Our Service Details:-</h3>
        <ul className="space-y-1.5 sm:space-y-2">
          {product.serviceDetails.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
              <span className="text-green-600 font-bold flex-shrink-0">==➤</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info Section */}
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm sm:text-base text-green-600 font-semibold mb-2">For More Information Just Contact Now</h3>
        <p className="text-xs sm:text-sm text-purple-600 font-semibold mb-2 sm:mb-3">Contact us/24 Hours Reply</p>
        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
          <p>
            <span className="text-black">Email:</span>{' '}
            <a href="mailto:hello@usamarketsmm.com" className="text-purple-600 hover:underline break-all">
              hello@usamarketsmm.com
            </a>
          </p>
          <p>
            <span className="text-black">Website:</span>{' '}
            <a href="https://usamarketsmm.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
              https://usamarketsmm.com
            </a>
          </p>
          <p>
            <span className="text-black">Telegram:</span>{' '}
            <a href="https://t.me/Usamarketsmm" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline break-all">
              @Usamarketsmm
            </a>
          </p>
          <p>
            <span className="text-black">WhatsApp:</span>{' '}
            <a href="https://wa.me/17122982593" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline break-all">
              +1(712)298-2593
            </a>
          </p>
        </div>
      </div>

      {/* Product Options Dropdown */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          {product.title}
        </label>
        <select
          value={selectedOption?.id || ''}
          onChange={(e) => {
            const option = product.options.find(opt => opt.id === e.target.value);
            setSelectedOption(option || null);
          }}
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose an option</option>
          {product.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Display (when option selected) */}
      {selectedOption && (
        <div className="mb-3 sm:mb-4">
          {selectedOption.originalPrice && (
            <span className="text-base sm:text-lg text-gray-500 line-through mr-2">
              ${selectedOption.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-xl sm:text-2xl font-bold text-gray-900">
            ${selectedOption.price.toFixed(2)}
          </span>
        </div>
      )}

      {/* Quantity and Add to Cart */}
      <div className="mb-3 sm:mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <label className="text-xs sm:text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val && val > 0) {
                setQuantity(val);
              } else if (e.target.value === '') {
                setQuantity(1);
              }
            }}
            onBlur={(e) => {
              if (!e.target.value || parseInt(e.target.value) < 1) {
                setQuantity(1);
              }
            }}
            className="w-16 sm:w-20 px-2 sm:px-3 py-2 text-sm sm:text-base text-gray-900 bg-white border border-gray-300 rounded-lg text-center"
          />
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="btn-primary w-full text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg mb-3 sm:mb-4 text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
      >
        Add to cart
      </button>
    </div>
  );
}

