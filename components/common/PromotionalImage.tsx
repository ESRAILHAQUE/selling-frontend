import Image from 'next/image';

interface PromotionalImageProps {
  productTitle: string;
  imagePath: string;
}

export default function PromotionalImage({ productTitle, imagePath }: PromotionalImageProps) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image
        src={imagePath}
        alt={productTitle}
        width={600}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}

