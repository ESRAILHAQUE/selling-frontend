export interface Stat {
  id: string;
  label: string;
  primaryValue: string;
  secondaryValue: string;
  iconColor: string;
  iconType: 'services' | 'rating' | 'customer' | 'team';
}

export const stats: Stat[] = [
  {
    id: '1',
    label: 'Services Given',
    primaryValue: '40,249',
    secondaryValue: '10200',
    iconColor: 'bg-lime-500',
    iconType: 'services'
  },
  {
    id: '2',
    label: 'Clients Rating',
    primaryValue: '1,050',
    secondaryValue: '1000',
    iconColor: 'bg-pink-500',
    iconType: 'rating'
  },
  {
    id: '3',
    label: 'Happy Customer',
    primaryValue: '5,200',
    secondaryValue: '7405',
    iconColor: 'bg-purple-600',
    iconType: 'customer'
  },
  {
    id: '4',
    label: 'Team Members',
    primaryValue: '50',
    secondaryValue: '200',
    iconColor: 'bg-lime-500',
    iconType: 'team'
  }
];
