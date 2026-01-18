import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/lib/data/products-list";
import type { Metadata } from "next";

// SEO Metadata for Shop Page
export const metadata: Metadata = {
  title: "Shop Verified Digital Accounts",
  description:
    "Browse premium verified accounts: Gmail, PayPal, Facebook, Instagram, Bank accounts & more. 100% verified, instant delivery, 30-day warranty, secure checkout.",
  keywords: [
    "buy verified accounts",
    "shop digital accounts",
    "gmail accounts",
    "paypal accounts",
    "facebook accounts",
    "instagram accounts",
    "bank accounts for sale",
    "verified social media accounts",
    "pva accounts for sale",
    "bulk accounts",
    "buy gmail accounts",
    "buy paypal accounts",
    "buy facebook accounts",
    "buy instagram accounts",
    "cheap verified accounts",
    "social media accounts",
    "verified digital accounts",
  ],
  openGraph: {
    title: "Shop Verified Digital Accounts | USA Markets SMM",
    description:
      "Browse premium verified accounts with instant delivery and 30-day warranty. Trusted by 10,000+ customers worldwide.",
    url: "https://usamarketsmm.com/shop",
    siteName: "USA Markets SMM",
    type: "website",
    images: [
      {
        url: "https://usamarketsmm.com/images/hero/hero-image.png",
        width: 1200,
        height: 630,
        alt: "USA Markets SMM - Verified Accounts Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Verified Digital Accounts | USA Markets SMM",
    description:
      "Browse premium verified accounts with instant delivery and 30-day warranty.",
  },
  alternates: {
    canonical: "https://usamarketsmm.com/shop",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShopPage() {
  const products = Object.values(productsData);

  // ItemList Schema for Product Catalog
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://usamarketsmm.com/product/${product.slug}`,
      name: product.title,
    })),
  };

  return (
    <>
      {/* Product Catalog Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Breadcrumbs with Schema */}
            <Breadcrumbs
              items={[
                { label: "Shop", href: "/shop" }
              ]}
            />

            {/* Page Header */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Buy Verified Accounts - Premium PVA Accounts Shop
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
                Browse our complete collection of 40+ verified accounts
                including Gmail, PayPal, Facebook, Instagram, LinkedIn, Bank
                accounts and more. All products come with 100% verification,
                instant delivery, 30-day warranty, and 24/7 customer support.
                Trusted by over 10,000 satisfied customers worldwide.
              </p>
            </div>

            {/* Products Grid */}
            <section aria-label="Product catalog">
              <div
                className="grid grid-cols-1 
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {products.map((product) => (
                  <article
                    key={product.slug}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    itemScope
                    itemType="https://schema.org/Product">
                    {/* Product Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-white">
                      <Image
                        src={product.imagePath}
                        alt={`${product.title} - Buy verified ${product.category} accounts at USA Markets SMM`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover"
                        loading="lazy"
                        quality={85}
                        itemProp="image"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6">
                      <p
                        className="text-xs text-gray-500 mb-2"
                        itemProp="category">
                        {product.category}
                      </p>
                      <h2
                        className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2"
                        itemProp="name">
                        {product.title}
                      </h2>

                      {/* Price Range */}
                      <div
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/AggregateOffer">
                        <meta itemProp="priceCurrency" content="USD" />
                        <meta
                          itemProp="lowPrice"
                          content={product.priceRange.min.toString()}
                        />
                        <meta
                          itemProp="highPrice"
                          content={product.priceRange.max.toString()}
                        />
                        <p className="text-xl font-bold text-blue-600 mb-4">
                          ${product.priceRange.min.toFixed(2)} – $
                          {product.priceRange.max.toFixed(2)}
                        </p>
                      </div>

                      {/* View Product Button */}
                      <Link
                        href={`/product/${product.slug}`}
                        className="btn-primary block w-full text-white text-center font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                        aria-label={`View details for ${product.title}`}>
                        View Product
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty State (shouldn't show, but just in case) */}
              {products.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    No products available at the moment.
                  </p>
                </div>
              )}
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
