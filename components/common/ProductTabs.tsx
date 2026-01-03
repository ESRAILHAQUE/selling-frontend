'use client';

interface Product {
  description: string;
}

interface ProductTabsProps {
  product: Product;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProductTabs({ product, activeTab, setActiveTab }: ProductTabsProps) {
  const formatDescription = (text: string) => {
    // Split by double newlines to get sections
    const sections = text.split(/\n\n+/);
    
    return sections.map((section, index) => {
      const trimmed = section.trim();
      if (!trimmed) return null;
      
      // Check if it's a heading (usually first line and shorter)
      const lines = trimmed.split('\n');
      const firstLine = lines[0].trim();
      
      // If first line looks like a heading (short, no period, or ends with ?)
      if (firstLine.length < 100 && (firstLine.endsWith('?') || firstLine.endsWith('Account') || firstLine.includes('Google'))) {
        const content = lines.slice(1).join('\n').trim();
        
        if (index === 0) {
          return (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-bold text-green-600 mb-4">{firstLine}</h2>
              {content && <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>}
            </div>
          );
        }
        
        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{firstLine}</h3>
            {content && <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>}
          </div>
        );
      }
      
      // Regular paragraph
      return (
        <div key={index} className="mb-4">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{trimmed}</p>
        </div>
      );
    }).filter(Boolean);
  };

  return (
    <div className="mb-12">
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'description'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('additional')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'additional'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Additional information
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'reviews'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Reviews (0)
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="prose max-w-none">
        {activeTab === 'description' && (
          <div className="text-gray-700">
            {formatDescription(product.description)}
          </div>
        )}
        
        {activeTab === 'additional' && (
          <div className="text-gray-700">
            <p>Additional information will be displayed here.</p>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="text-gray-700">
            <p>No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
    </div>
  );
}

