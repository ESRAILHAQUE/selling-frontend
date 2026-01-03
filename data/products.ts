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

export const products: Product[] = [
    {
        id: '1',
        name: 'Premium Wireless Headphones',
        price: 199.99,
        seller: 'TechGear Pro',
        category: 'Electronics',
        rating: 4.8,
        reviews: 1245,
        imageUrl: '/imgi_3_sksk999rrr.jpg',
        sales: 15230,
        description: 'High-quality wireless headphones with noise cancellation'
    },
    {
        id: '2',
        name: 'Smart Fitness Watch',
        price: 299.99,
        seller: 'FitTech Solutions',
        category: 'Wearables',
        rating: 4.7,
        reviews: 892,
        imageUrl: '/imgi_4_shaaasha483-1.jpg',
        sales: 11200,
        description: 'Advanced fitness tracking with heart rate monitoring'
    },
    {
        id: '3',
        name: 'Professional Camera Lens',
        price: 899.99,
        seller: 'PhotoMaster',
        category: 'Photography',
        rating: 4.9,
        reviews: 456,
        imageUrl: '/imgi_5_handsom4628-1.jpg',
        sales: 3450,
        description: 'Professional-grade camera lens for stunning photos'
    },
    {
        id: '4',
        name: 'Ergonomic Office Chair',
        price: 349.99,
        seller: 'ComfortWorks',
        category: 'Furniture',
        rating: 4.6,
        reviews: 678,
        imageUrl: '/imgi_6_Michelle-Clark-3.webp',
        sales: 8900,
        description: 'Comfortable office chair with lumbar support'
    },
    {
        id: '5',
        name: 'Portable Power Bank',
        price: 49.99,
        seller: 'PowerUp Tech',
        category: 'Accessories',
        rating: 4.5,
        reviews: 2341,
        imageUrl: '/imgi_17_processed-3dc74718-f239-4d8d-8c5d-76a8588e7764_ASyv2CNy-1.jpg',
        sales: 25600,
        description: 'High-capacity portable charger for all devices'
    },
    {
        id: '6',
        name: 'Gaming Mechanical Keyboard',
        price: 149.99,
        seller: 'GameZone',
        category: 'Gaming',
        rating: 4.7,
        reviews: 1123,
        imageUrl: '/imgi_2_call-back_img.jpg',
        sales: 13400,
        description: 'RGB backlit mechanical keyboard for gamers'
    },
    {
        id: '7',
        name: 'Wireless Mouse',
        price: 79.99,
        seller: 'TechGear Pro',
        category: 'Electronics',
        rating: 4.6,
        reviews: 987,
        imageUrl: '/imgi_23_call-back_img-600x541.jpg',
        sales: 18700,
        description: 'Ergonomic wireless mouse with precision tracking'
    },
    {
        id: '8',
        name: '4K Monitor',
        price: 449.99,
        seller: 'DisplayTech',
        category: 'Electronics',
        rating: 4.8,
        reviews: 567,
        imageUrl: '/imgi_25_sksk999rrr-300x286.jpg',
        sales: 7200,
        description: 'Ultra HD 4K monitor for professional work'
    },
    {
        id: '9',
        name: 'Bluetooth Speaker',
        price: 129.99,
        seller: 'AudioMax',
        category: 'Audio',
        rating: 4.5,
        reviews: 1456,
        imageUrl: '/imgi_26_shaaasha483-1-300x282.jpg',
        sales: 16300,
        description: 'Portable Bluetooth speaker with rich bass'
    },
    {
        id: '10',
        name: 'Laptop Stand',
        price: 59.99,
        seller: 'ErgoDesk',
        category: 'Accessories',
        rating: 4.4,
        reviews: 234,
        imageUrl: '/imgi_27_shaaasha483-1-600x565.jpg',
        sales: 9800,
        description: 'Adjustable aluminum laptop stand'
    },
    {
        id: '11',
        name: 'USB-C Hub',
        price: 89.99,
        seller: 'ConnectPro',
        category: 'Accessories',
        rating: 4.6,
        reviews: 789,
        imageUrl: '/imgi_28_handsom4628-1-200x300.jpg',
        sales: 11200,
        description: 'Multi-port USB-C hub for laptops'
    },
    {
        id: '12',
        name: 'Wireless Earbuds',
        price: 179.99,
        seller: 'AudioMax',
        category: 'Audio',
        rating: 4.7,
        reviews: 2134,
        imageUrl: '/imgi_3_sksk999rrr.jpg',
        sales: 28900,
        description: 'True wireless earbuds with active noise cancellation'
    },
    {
        id: '13',
        name: 'Tablet Stand',
        price: 39.99,
        seller: 'ErgoDesk',
        category: 'Accessories',
        rating: 4.3,
        reviews: 456,
        imageUrl: '/imgi_4_shaaasha483-1.jpg',
        sales: 6700,
        description: 'Adjustable stand for tablets and phones'
    },
    {
        id: '14',
        name: 'Webcam HD',
        price: 99.99,
        seller: 'VideoTech',
        category: 'Electronics',
        rating: 4.5,
        reviews: 1234,
        imageUrl: '/imgi_5_handsom4628-1.jpg',
        sales: 14500,
        description: 'Full HD webcam for video calls'
    },
    {
        id: '15',
        name: 'Desk Lamp',
        price: 69.99,
        seller: 'LightWorks',
        category: 'Furniture',
        rating: 4.4,
        reviews: 567,
        imageUrl: '/imgi_6_Michelle-Clark-3.webp',
        sales: 8900,
        description: 'LED desk lamp with adjustable brightness'
    },
    {
        id: '16',
        name: 'External SSD',
        price: 199.99,
        seller: 'StoragePro',
        category: 'Storage',
        rating: 4.8,
        reviews: 890,
        imageUrl: '/imgi_17_processed-3dc74718-f239-4d8d-8c5d-76a8588e7764_ASyv2CNy-1.jpg',
        sales: 10200,
        description: 'Fast external SSD with USB-C connection'
    },
    {
        id: '17',
        name: 'Phone Case',
        price: 29.99,
        seller: 'ProtectCase',
        category: 'Accessories',
        rating: 4.3,
        reviews: 3456,
        imageUrl: '/imgi_2_call-back_img.jpg',
        sales: 45600,
        description: 'Durable protective case for smartphones'
    },
    {
        id: '18',
        name: 'Cable Organizer',
        price: 19.99,
        seller: 'OrganizePro',
        category: 'Accessories',
        rating: 4.2,
        reviews: 1234,
        imageUrl: '/imgi_23_call-back_img-600x541.jpg',
        sales: 18900,
        description: 'Cable management system for desk'
    },
    {
        id: '19',
        name: 'Monitor Arm',
        price: 129.99,
        seller: 'ErgoDesk',
        category: 'Furniture',
        rating: 4.6,
        reviews: 678,
        imageUrl: '/imgi_25_sksk999rrr-300x286.jpg',
        sales: 5600,
        description: 'Adjustable monitor arm mount'
    },
    {
        id: '20',
        name: 'Wireless Charger',
        price: 49.99,
        seller: 'PowerUp Tech',
        category: 'Accessories',
        rating: 4.5,
        reviews: 2345,
        imageUrl: '/imgi_26_shaaasha483-1-300x282.jpg',
        sales: 32100,
        description: 'Fast wireless charging pad'
    },
    {
        id: '21',
        name: 'Noise Cancelling Headphones',
        price: 249.99,
        seller: 'AudioMax',
        category: 'Audio',
        rating: 4.8,
        reviews: 1789,
        imageUrl: '/imgi_27_shaaasha483-1-600x565.jpg',
        sales: 15600,
        description: 'Premium noise cancelling over-ear headphones'
    },
    {
        id: '22',
        name: 'Gaming Mouse Pad',
        price: 34.99,
        seller: 'GameZone',
        category: 'Gaming',
        rating: 4.4,
        reviews: 987,
        imageUrl: '/imgi_28_handsom4628-1-200x300.jpg',
        sales: 12300,
        description: 'Large RGB gaming mouse pad'
    },
    {
        id: '23',
        name: 'USB Flash Drive',
        price: 24.99,
        seller: 'StoragePro',
        category: 'Storage',
        rating: 4.3,
        reviews: 2345,
        imageUrl: '/imgi_3_sksk999rrr.jpg',
        sales: 28900,
        description: 'High-speed USB 3.0 flash drive'
    },
    {
        id: '24',
        name: 'Laptop Sleeve',
        price: 44.99,
        seller: 'ProtectCase',
        category: 'Accessories',
        rating: 4.4,
        reviews: 1234,
        imageUrl: '/imgi_4_shaaasha483-1.jpg',
        sales: 16700,
        description: 'Protective laptop sleeve with padding'
    },
    {
        id: '25',
        name: 'HDMI Cable',
        price: 19.99,
        seller: 'ConnectPro',
        category: 'Accessories',
        rating: 4.2,
        reviews: 3456,
        imageUrl: '/imgi_5_handsom4628-1.jpg',
        sales: 45600,
        description: 'High-speed HDMI 2.0 cable'
    },
    {
        id: '26',
        name: 'Keyboard Wrist Rest',
        price: 29.99,
        seller: 'ErgoDesk',
        category: 'Accessories',
        rating: 4.3,
        reviews: 789,
        imageUrl: '/imgi_6_Michelle-Clark-3.webp',
        sales: 9800,
        description: 'Ergonomic gel wrist rest for keyboards'
    },
    {
        id: '27',
        name: 'Microphone USB',
        price: 79.99,
        seller: 'AudioMax',
        category: 'Audio',
        rating: 4.6,
        reviews: 567,
        imageUrl: '/imgi_17_processed-3dc74718-f239-4d8d-8c5d-76a8588e7764_ASyv2CNy-1.jpg',
        sales: 8900,
        description: 'USB condenser microphone for streaming'
    },
    {
        id: '28',
        name: 'Ring Light',
        price: 59.99,
        seller: 'VideoTech',
        category: 'Accessories',
        rating: 4.5,
        reviews: 1234,
        imageUrl: '/imgi_2_call-back_img.jpg',
        sales: 11200,
        description: 'LED ring light for video calls'
    },
    {
        id: '29',
        name: 'Desk Mat',
        price: 39.99,
        seller: 'ErgoDesk',
        category: 'Accessories',
        rating: 4.4,
        reviews: 890,
        imageUrl: '/imgi_23_call-back_img-600x541.jpg',
        sales: 13400,
        description: 'Large desk mat with mouse pad area'
    },
    {
        id: '30',
        name: 'Laptop Cooling Pad',
        price: 49.99,
        seller: 'CoolTech',
        category: 'Accessories',
        rating: 4.3,
        reviews: 678,
        imageUrl: '/imgi_25_sksk999rrr-300x286.jpg',
        sales: 7600,
        description: 'USB-powered laptop cooling pad'
    }
];

