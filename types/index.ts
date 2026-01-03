// Common types used across the application

export interface Product {
  id: string;
  name: string;
  price: number;
  seller: string;
  category: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  sales: number;
  description: string;
}

export interface Seller {
  id: string;
  name: string;
  rank: number;
  totalSales: number;
  products: number;
  rating: number;
  reviews: number;
  category: string;
  imageUrl: string;
  monthlyRevenue: number;
}

export interface Stat {
  id: string;
  label: string;
  primaryValue: string;
  secondaryValue: string;
  iconColor: string;
  iconType: 'services' | 'rating' | 'customer' | 'team';
}

export interface Testimonial {
  id: string;
  name: string;
  title?: string;
  text: string;
  rating: number;
  imageUrl: string;
}

