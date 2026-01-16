import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-12 sm:h-16 w-auto',
    md: 'h-16 sm:h-20 lg:h-24 w-auto',
    lg: 'h-24 sm:h-32 lg:h-40 w-auto'
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative">
        <Image
          src="/logo/logo.png"
          alt="USA Markets SMM - Global IT Shop & Service Agency"
          width={size === 'sm' ? 200 : size === 'md' ? 250 : 350}
          height={size === 'sm' ? 64 : size === 'md' ? 96 : 160}
          className={`${sizeClasses[size]} brightness-110 contrast-105 drop-shadow-lg`}
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
    </Link>
  );
}

