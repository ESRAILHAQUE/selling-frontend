import Image from 'next/image';
import { Stat } from '@/lib/data/stats';

interface StatsCardProps {
  stat: Stat;
}

const getIconImage = (iconType: Stat['iconType']) => {
  switch (iconType) {
    case 'services':
      return '/images/stats/services-icon.png'; // First image - headset with speech bubble
    case 'rating':
      return '/images/stats/rating-icon.png'; // Second image - group with stars
    case 'customer':
      return '/images/stats/customer-icon.png'; // Third image - smiling person with stars
    case 'team':
      return '/images/stats/team-icon.png'; // Fourth image - group of people
    default:
      return null;
  }
};

export default function StatsCard({ stat }: StatsCardProps) {
  const iconImage = getIconImage(stat.iconType);

  return (
    <div className="text-center">
      {/* Circular Icon with Image */}
      <div className="flex justify-center mb-4">
        <div className={`w-20 h-20 sm:w-24 sm:h-24 ${stat.iconColor} rounded-full flex items-center justify-center shadow-lg overflow-hidden`}>
          {iconImage ? (
            <Image
              src={iconImage}
              alt={stat.label}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300" />
          )}
        </div>
      </div>
      
      {/* Numbers */}
      <div className="mb-2">
        <span className="text-2xl sm:text-3xl font-bold text-white">{stat.secondaryValue} </span>
        <span className="text-4xl sm:text-5xl font-bold text-white">{stat.primaryValue}</span>
        <span className="text-2xl sm:text-3xl font-bold text-white"> +</span>
      </div>
      
      {/* Label */}
      <p className="text-white text-sm sm:text-base">{stat.label}</p>
    </div>
  );
}
