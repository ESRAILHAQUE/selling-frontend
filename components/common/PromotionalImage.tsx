import Image from 'next/image';

interface PromotionalImageProps {
  productTitle: string;
}

export default function PromotionalImage({ productTitle }: PromotionalImageProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image
        src="/images/products/imgi_2_call-back_img.jpg"
        alt={productTitle}
        width={600}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}

