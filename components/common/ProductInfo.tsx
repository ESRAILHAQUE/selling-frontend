'use client';

interface ProductOption {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
}

interface Product {
  title: string;
  categories: string[];
  priceRange: { min: number; max: number };
  serviceDetails: string[];
  options: ProductOption[];
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
    // Add to cart logic here
    console.log('Added to cart:', { option: selectedOption, quantity });
  };

  return (
    <div>
      {/* Categories */}
      <div className="mb-4">
        <span className="text-sm text-gray-600">
          {product.categories.join(', ')}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

      {/* Price Range */}
      <div className="mb-6">
        <div className="text-2xl font-bold text-gray-900">
          ${product.priceRange.min.toFixed(2)} – ${product.priceRange.max.toFixed(2)}
        </div>
        <div className="text-sm text-gray-600">
          Price range: ${product.priceRange.min.toFixed(2)} through ${product.priceRange.max.toFixed(2)}
        </div>
      </div>

      {/* Service Details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Service Details:-</h3>
        <ul className="space-y-2">
          {product.serviceDetails.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-600 font-bold">==➤</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info Section */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-green-600 font-semibold mb-2">For More Information Just Contact Now</h3>
        <p className="text-purple-600 font-semibold mb-3">Contact us/24 Hours Reply</p>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-black">Skype:</span>{' '}
            <span className="text-red-600">usatopseller</span>
          </p>
          <p>
            <span className="text-black">Telegram:</span>{' '}
            <span className="text-red-600">@usatopseller</span>
          </p>
          <p>
            <span className="text-black">WhatsApp:</span>{' '}
            <span className="text-purple-600">+1(678) 609-3906</span>
          </p>
          <p>
            <span className="text-black">Email:</span>{' '}
            <span className="text-purple-600">usatopseller420@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Product Options Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {product.title}
        </label>
        <select
          value={selectedOption?.id || ''}
          onChange={(e) => {
            const option = product.options.find(opt => opt.id === e.target.value);
            setSelectedOption(option || null);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        <div className="mb-4">
          {selectedOption.originalPrice && (
            <span className="text-lg text-gray-500 line-through mr-2">
              ${selectedOption.originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-bold text-gray-900">
            ${selectedOption.price.toFixed(2)}
          </span>
        </div>
      )}

      {/* Quantity and Add to Cart */}
      <div className="mb-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center"
          />
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-4"
      >
        Add to cart
      </button>

      {/* Product Meta */}
      <div className="text-sm text-gray-600 space-y-1">
        <p>SKU: N/A</p>
        <p>
          Categories:{' '}
          {product.categories.map((cat, index) => (
            <span key={index}>
              {index > 0 && ', '}
              <a href="#" className="text-blue-600 hover:underline">{cat}</a>
            </span>
          ))}
        </p>
        <p>
          Tag: <a href="#" className="text-blue-600 hover:underline">{product.title}</a>
        </p>
      </div>
    </div>
  );
}

