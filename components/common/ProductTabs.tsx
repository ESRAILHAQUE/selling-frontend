'use client';

import { useState, useEffect } from 'react';

interface Product {
  title?: string;
  description: string;
  slug?: string;
}

interface Review {
  id: string;
  rating: number;
  review: string;
  name: string;
  email: string;
  date: string;
}

interface ProductTabsProps {
  product: Product;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProductTabs({ product, activeTab, setActiveTab }: ProductTabsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load reviews from localStorage
    const productSlug = product.slug || 'default';
    const storedReviews = localStorage.getItem(`reviews-${productSlug}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, [product.slug]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    if (!rating || !reviewText || !reviewName || !reviewEmail) {
      alert('Please fill in all required fields and select a rating.');
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      rating,
      review: reviewText,
      name: reviewName,
      email: reviewEmail,
      date: new Date().toISOString()
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Save to localStorage
    const productSlug = product.slug || 'default';
    localStorage.setItem(`reviews-${productSlug}`, JSON.stringify(updatedReviews));

    // Save user info if checkbox is checked
    if (saveInfo) {
      localStorage.setItem('reviewUserInfo', JSON.stringify({ name: reviewName, email: reviewEmail }));
    }

    // Reset form
    setRating(0);
    setReviewText('');
    setReviewName('');
    setReviewEmail('');
    setSaveInfo(false);
    setSubmitted(true);

    // Update reviews count in tab
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // Load saved user info
  useEffect(() => {
    const savedInfo = localStorage.getItem('reviewUserInfo');
    if (savedInfo) {
      const { name, email } = JSON.parse(savedInfo);
      setReviewName(name);
      setReviewEmail(email);
    }
  }, []);
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
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('additional')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'additional'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Additional information
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            Reviews ({reviews.length})
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
            {/* Existing Reviews */}
            {reviews.length > 0 && (
              <div className="mb-8 space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900 mb-2">{review.name}</p>
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">Thank you for your review!</p>
                <p className="text-green-600 text-sm mt-1">Your review will be displayed shortly.</p>
              </div>
            )}

            {/* Review Form */}
            {reviews.length === 0 && !submitted && (
              <p className="mb-4">There are no reviews yet.</p>
            )}
            <h3 className="text-xl font-bold mb-2">
              {reviews.length === 0 ? 'Be the first to review' : 'Add a review'} "{product.title || 'Buy Google Ads Account'}"
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>

            <form onSubmit={handleSubmitReview} className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your rating *
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none transition-colors"
                    >
                      <svg
                        className={`w-6 h-6 ${star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        fill={star <= (hoverRating || rating) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
                {rating === 0 && (
                  <p className="text-red-500 text-xs mt-1">Please select a rating</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your review *
                </label>
                <textarea
                  rows={6}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
                  placeholder="Write your review here..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={reviewEmail}
                    onChange={(e) => setReviewEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
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

