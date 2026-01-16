'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PromotionalImageProps {
  productTitle: string;
  imagePath: string;
}

export default function PromotionalImage({ productTitle, imagePath }: PromotionalImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden aspect-square bg-gray-100">
      {!imageError ? (
        <Image
          src={imagePath}
          alt={`${productTitle} - Premium verified account with 100% delivery guarantee and 30-day replacement warranty`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover"
          quality={85}
          priority
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-700">{productTitle}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

