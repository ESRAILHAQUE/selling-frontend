import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing Tips & Guides | USA Markets SMM',
  description: 'Read our blog for expert tips on digital marketing, social media strategies, email marketing, and guides on using verified accounts for business growth.',
  keywords: [
    'digital marketing blog',
    'social media tips',
    'email marketing guide',
    'instagram marketing',
    'business growth',
    'verified accounts guide',
    'marketing strategies',
    'seo tips'
  ],
  openGraph: {
    title: 'Blog - Digital Marketing Tips & Guides',
    description: 'Expert articles on digital marketing, social media, and business growth strategies.',
    url: 'https://usamarketsmm.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Digital Marketing Tips & Guides',
    description: 'Expert articles on digital marketing, social media, and business growth strategies.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
