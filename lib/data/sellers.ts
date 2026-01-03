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

export const sellers: Seller[] = [
  {
    id: '1',
    name: 'TechGear Pro',
    rank: 1,
    totalSales: 125430,
    products: 245,
    rating: 4.9,
    reviews: 12345,
    category: 'Electronics',
    imageUrl: '/images/products/imgi_6_Michelle-Clark-3.webp',
    monthlyRevenue: 2450000
  },
  {
    id: '2',
    name: 'AudioMax',
    rank: 2,
    totalSales: 98760,
    products: 189,
    rating: 4.8,
    reviews: 9876,
    category: 'Audio',
    imageUrl: '/images/products/imgi_3_sksk999rrr.jpg',
    monthlyRevenue: 1890000
  },
  {
    id: '3',
    name: 'FitTech Solutions',
    rank: 3,
    totalSales: 87650,
    products: 156,
    rating: 4.7,
    reviews: 8765,
    category: 'Wearables',
    imageUrl: '/images/products/imgi_4_shaaasha483-1.jpg',
    monthlyRevenue: 1650000
  },
  {
    id: '4',
    name: 'GameZone',
    rank: 4,
    totalSales: 76540,
    products: 134,
    rating: 4.8,
    reviews: 7654,
    category: 'Gaming',
    imageUrl: '/images/products/imgi_5_handsom4628-1.jpg',
    monthlyRevenue: 1450000
  },
  {
    id: '5',
    name: 'PhotoMaster',
    rank: 5,
    totalSales: 65430,
    products: 98,
    rating: 4.9,
    reviews: 6543,
    category: 'Photography',
    imageUrl: '/images/products/imgi_17_processed-3dc74718-f239-4d8d-8c5d-76a8588e7764_ASyv2CNy-1.jpg',
    monthlyRevenue: 1250000
  },
  {
    id: '6',
    name: 'ComfortWorks',
    rank: 6,
    totalSales: 54320,
    products: 87,
    rating: 4.6,
    reviews: 5432,
    category: 'Furniture',
    imageUrl: '/images/products/imgi_2_call-back_img.jpg',
    monthlyRevenue: 980000
  },
  {
    id: '7',
    name: 'PowerUp Tech',
    rank: 7,
    totalSales: 43210,
    products: 156,
    rating: 4.5,
    reviews: 4321,
    category: 'Accessories',
    imageUrl: '/images/products/imgi_2_call-back_img.jpg',
    monthlyRevenue: 870000
  },
  {
    id: '8',
    name: 'DisplayTech',
    rank: 8,
    totalSales: 32100,
    products: 67,
    rating: 4.8,
    reviews: 3210,
    category: 'Electronics',
    imageUrl: '/images/products/imgi_3_sksk999rrr.jpg',
    monthlyRevenue: 760000
  },
  {
    id: '9',
    name: 'ErgoDesk',
    rank: 9,
    totalSales: 29870,
    products: 89,
    rating: 4.4,
    reviews: 2987,
    category: 'Furniture',
    imageUrl: '/images/products/imgi_4_shaaasha483-1.jpg',
    monthlyRevenue: 650000
  },
  {
    id: '10',
    name: 'ConnectPro',
    rank: 10,
    totalSales: 27650,
    products: 123,
    rating: 4.6,
    reviews: 2765,
    category: 'Accessories',
    imageUrl: '/images/products/imgi_4_shaaasha483-1.jpg',
    monthlyRevenue: 540000
  },
  {
    id: '11',
    name: 'VideoTech',
    rank: 11,
    totalSales: 25430,
    products: 78,
    rating: 4.5,
    reviews: 2543,
    category: 'Electronics',
    imageUrl: '/images/products/imgi_5_handsom4628-1.jpg',
    monthlyRevenue: 480000
  },
  {
    id: '12',
    name: 'StoragePro',
    rank: 12,
    totalSales: 23210,
    products: 145,
    rating: 4.8,
    reviews: 2321,
    category: 'Storage',
    imageUrl: '/images/products/imgi_3_sksk999rrr.jpg',
    monthlyRevenue: 420000
  },
  {
    id: '13',
    name: 'ProtectCase',
    rank: 13,
    totalSales: 21980,
    products: 234,
    rating: 4.3,
    reviews: 2198,
    category: 'Accessories',
    imageUrl: '/images/products/imgi_4_shaaasha483-1.jpg',
    monthlyRevenue: 380000
  },
  {
    id: '14',
    name: 'LightWorks',
    rank: 14,
    totalSales: 20760,
    products: 56,
    rating: 4.4,
    reviews: 2076,
    category: 'Furniture',
    imageUrl: '/images/products/imgi_5_handsom4628-1.jpg',
    monthlyRevenue: 340000
  },
  {
    id: '15',
    name: 'OrganizePro',
    rank: 15,
    totalSales: 19540,
    products: 112,
    rating: 4.2,
    reviews: 1954,
    category: 'Accessories',
    imageUrl: '/images/products/imgi_6_Michelle-Clark-3.webp',
    monthlyRevenue: 300000
  }
];

