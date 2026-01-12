import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/common/ProductDetails";
import RelatedProducts from "@/components/common/RelatedProducts";
import { getProductBySlug, getAllProductSlugs } from "@/lib/data/products-list";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  // Extract first 160 characters for meta description
  const metaDescription = product.description.slice(0, 160).trim() + "...";

  return {
    title: `${product.title} | USA Markets SMM - Premium ${product.category}`,
    description: metaDescription,
    keywords: [
      product.title.toLowerCase(),
      `buy ${product.title.toLowerCase()}`,
      `${product.category.toLowerCase()}`,
      "verified accounts",
      "pva accounts",
      "bulk accounts",
      "usa accounts",
      "cheap accounts",
      "instant delivery",
      product.title.toLowerCase() + " for sale",
    ].join(", "),
    authors: [{ name: "USA Markets SMM" }],
    openGraph: {
      title: `${product.title} | USA Markets SMM`,
      description: metaDescription,
      url: `https://usamarketsmm.com/product/${slug}`,
      siteName: "USA Markets SMM",
      images: [
        {
          url: product.imagePath || "/images/products/default.jpg",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | USA Markets SMM`,
      description: metaDescription,
      images: [product.imagePath || "/images/products/default.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://usamarketsmm.com/product/${slug}`,
    },
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Structured Data (JSON-LD) for Google Rich Snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description.slice(0, 200),
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.priceRange.min,
      highPrice: product.priceRange.max,
      offerCount: product.options.length,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "USA Markets SMM",
        url: "https://usamarketsmm.com",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Breadcrumb Schema for Navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: product.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb,
      item:
        index === 0
          ? "https://usamarketsmm.com"
          : index === product.breadcrumbs.length - 1
          ? `https://usamarketsmm.com/product/${slug}`
          : `https://usamarketsmm.com/category/${crumb
              .toLowerCase()
              .replace(/ /g, "-")}`,
    })),
  };

  return (
    <>
      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ProductDetails product={product} />
        <RelatedProducts />
        <Footer />
      </div>
    </>
  );
}
