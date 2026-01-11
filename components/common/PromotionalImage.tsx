import Image from 'next/image';

interface PromotionalImageProps {
  productTitle: string;
  imagePath: string;
}

export default function PromotionalImage({ productTitle, imagePath }: PromotionalImageProps) {
  return (
    <div className="relative rounded-lg overflow-hidden aspect-square">
      <Image
        src={imagePath}
        alt={productTitle}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className="object-contain"
        quality={100}
        priority
      />
    </div>
  );
}

