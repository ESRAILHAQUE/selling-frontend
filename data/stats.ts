export interface Stat {
  id: string;
  label: string;
  value: string;
  change: number;
  icon: string;
}

export const stats: Stat[] = [
  {
    id: '1',
    label: 'Total Sellers',
    value: '12,450',
    change: 12.5,
    icon: '👥'
  },
  {
    id: '2',
    label: 'Active Products',
    value: '156,789',
    change: 8.3,
    icon: '📦'
  },
  {
    id: '3',
    label: 'Total Revenue',
    value: '$45.2M',
    change: 15.7,
    icon: '💰'
  },
  {
    id: '4',
    label: 'Monthly Sales',
    value: '892,340',
    change: 9.2,
    icon: '📊'
  }
];

