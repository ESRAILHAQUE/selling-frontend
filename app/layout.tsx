import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/common/FloatingChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usamarketsmm.com'),
  title: {
    default: "Global Digital Accounts & IT Services | Marketplace",
    template: "%s | USA Markets SMM"
  },
  description: "Discover trusted digital solutions at USAMARKETSMM — from verified social/email accounts to bank & SEO services. Enjoy secure purchases, dedicated support, and quality-driven service worldwide.",
  keywords: [
    "global IT services",
    "buy paypal account",
    "buy payoneer account",
    "buy bank accounts",
    "buy facebook account",
    "verified social accounts",
    "email accounts for sale",
    "premium bank accounts",
    "SEO services",
    "marketing services",
    "review service",
    "safe digital services",
    "online digital marketplace",
    "secure digital accounts",
    "IT support worldwide",
    "buy gmail accounts",
    "buy instagram accounts",
    "buy twitter accounts",
    "buy verified accounts",
    "pva accounts",
    "bulk accounts"
  ],
  authors: [{ name: "USA Markets SMM" }],
  creator: "USA Markets SMM",
  publisher: "USA Markets SMM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://usamarketsmm.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usamarketsmm.com',
    title: 'Global Digital Accounts & IT Services | Marketplace',
    description: 'Discover trusted digital solutions at USAMARKETSMM — from verified social/email accounts to bank & SEO services. Enjoy secure purchases, dedicated support, and quality-driven service worldwide.',
    siteName: 'USA Markets SMM',
    images: [
      {
        url: '/images/hero/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'USA Markets SMM - Verified Digital Accounts Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Digital Accounts & IT Services | Marketplace',
    description: 'Discover trusted digital solutions at USAMARKETSMM — from verified social/email accounts to bank & SEO services. Enjoy secure purchases, dedicated support, and quality-driven service worldwide.',
    images: ['/images/hero/hero-image.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
