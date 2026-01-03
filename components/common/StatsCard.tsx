import { Stat } from '@/lib/data/stats';

interface StatsCardProps {
  stat: Stat;
}

const getIcon = (iconType: Stat['iconType']) => {
  switch (iconType) {
    case 'services':
      return (
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    case 'rating':
      return (
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19l1.5-3M16 19l-1.5-3M12 19l1.5-3" />
        </svg>
      );
    case 'customer':
      return (
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'team':
      return (
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function StatsCard({ stat }: StatsCardProps) {
  return (
    <div className="text-center">
      {/* Circular Icon */}
      <div className="flex justify-center mb-4">
        <div className={`w-20 h-20 ${stat.iconColor} rounded-full flex items-center justify-center shadow-lg`}>
          {getIcon(stat.iconType)}
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
