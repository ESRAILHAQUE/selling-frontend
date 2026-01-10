import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  const textSizes = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl lg:text-3xl',
    lg: 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'
  };

  return (
    <Link href="/" className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
            <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" stroke="white" strokeWidth="2" />
          
          {/* Globe/Network Icon */}
          <g transform="translate(50, 50)">
            {/* Globe Grid Lines */}
            <ellipse cx="0" cy="0" rx="25" ry="15" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
            <ellipse cx="0" cy="0" rx="15" ry="25" fill="none" stroke="white" strokeWidth="2" opacity="0.8" />
            <line x1="-25" y1="0" x2="25" y2="0" stroke="white" strokeWidth="2" opacity="0.8" />
            <line x1="0" y1="-25" x2="0" y2="25" stroke="white" strokeWidth="2" opacity="0.8" />
            
            {/* Connection Nodes */}
            <circle cx="-15" cy="-10" r="3" fill="white" />
            <circle cx="15" cy="-10" r="3" fill="white" />
            <circle cx="-15" cy="10" r="3" fill="white" />
            <circle cx="15" cy="10" r="3" fill="white" />
            <circle cx="0" cy="0" r="4" fill="white" />
            
            {/* Connection Lines */}
            <line x1="-15" y1="-10" x2="0" y2="0" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="15" y1="-10" x2="0" y2="0" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="-15" y1="10" x2="0" y2="0" stroke="white" strokeWidth="1.5" opacity="0.6" />
            <line x1="15" y1="10" x2="0" y2="0" stroke="white" strokeWidth="1.5" opacity="0.6" />
          </g>
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-white ${textSizes[size]} leading-tight`}>
            USAMARKETSMM
          </span>
          {size === 'lg' && (
            <span className="text-xs sm:text-sm text-white/80 font-medium">
              Global IT Shop & Service Agency
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

