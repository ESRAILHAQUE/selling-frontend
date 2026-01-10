'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '@/lib/data/testimonials';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const gap = 24; // 1.5rem = 24px
      const cardWidth = (containerWidth - 2 * gap) / 3;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(Math.max(0, newIndex), testimonials.length - 1));
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontally Scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab select-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow w-[calc(100vw-2rem)] sm:w-[calc((100vw-4rem-1rem)/2)] lg:w-[calc((100vw-8rem-3rem)/3)] min-w-[280px] max-w-[100%] sm:max-w-[400px]"
            >
                {/* Quote Icon - Light Purple */}
              <div className="flex justify-center mb-4">
                  <div className="text-7xl text-purple-300 font-serif leading-none" style={{ fontFamily: 'serif' }}>"</div>
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
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const containerWidth = scrollRef.current.offsetWidth;
                  const gap = 24;
                  const cardWidth = (containerWidth - 2 * gap) / 3;
                  scrollRef.current.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: 'smooth'
                  });
                }
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
