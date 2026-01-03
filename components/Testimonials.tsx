'use client';

import { useState } from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="text-7xl text-blue-300 font-serif leading-none" style={{ fontFamily: 'serif' }}>"</div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed text-center">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Reviewer Profile */}
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                {testimonial.title && (
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

