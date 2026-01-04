'use client';

interface Product {
  title?: string;
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
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-semibold text-gray-900 w-1/3">Buy Gmail Accounts</td>
                  <td className="py-3 px-4 text-gray-700">
                    05 Gmail Accounts, 20 Gmail Accounts, 50 Gmail Accounts, 100 Gmail Accounts, 200 Gmail Accounts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div className="text-gray-700">
            <p className="mb-4">There are no reviews yet.</p>
            <h3 className="text-xl font-bold mb-2">
              Be the first to review "{product.title || 'Buy Google Ads Account'}"
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            
            <form className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your rating *
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your review *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                  placeholder=""
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span>Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

