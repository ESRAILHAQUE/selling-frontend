import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingChat from "@/components/common/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usamarketsmm.com'),
  title: {
    default: "USAMARKETSMM - Global IT Shop & Service Agency",
    template: "%s | USA Markets SMM"
  },
  description: "As your trusted IT company, we provide our IT services worldwide with utmost care and Selling some Digital Account. Our main goal is to work according to the needs of our customers and fulfill them accurately.",
  keywords: ["buy accounts", "verified accounts", "gmail accounts", "paypal accounts", "social media accounts", "pva accounts", "bulk accounts", "cheap accounts", "digital services"],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usamarketsmm.com',
    title: 'USAMARKETSMM - Global IT Shop & Service Agency',
    description: 'As your trusted IT company, we provide our IT services worldwide with utmost care and Selling some Digital Account.',
    siteName: 'USA Markets SMM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USAMARKETSMM - Global IT Shop & Service Agency',
    description: 'As your trusted IT company, we provide our IT services worldwide with utmost care and Selling some Digital Account.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
