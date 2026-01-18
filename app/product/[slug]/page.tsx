import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductDetails from "@/components/common/ProductDetails";
import RelatedProducts from "@/components/common/RelatedProducts";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import ProductSchema from "@/components/common/ProductSchema";
import { getProductBySlug, getAllProductSlugs, getProductShortDescription } from "@/lib/data/products-list";
import { getMetaDescription } from "@/lib/data/meta-descriptions";
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

  // Get optimized meta description (doesn't load full description)
  const metaDescription = getMetaDescription(slug, product.title);

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

  // Get short description for product
  const shortDescription = getProductShortDescription(slug);
  const productWithDescription = { ...product, shortDescription };

  // Get meta description for structured data
  const productMetaDescription = getMetaDescription(slug, product.title);

  // Create breadcrumb items from product breadcrumbs
  const breadcrumbItems = product.breadcrumbs.slice(1).map((crumb, index) => ({
    label: crumb,
    href: index === product.breadcrumbs.length - 2 ? undefined : `/shop`
  }));

  return (
    <>
      {/* Product Schema for SEO */}
      <ProductSchema
        name={product.title}
        description={productMetaDescription}
        image={product.imagePath || "/images/products/default.jpg"}
        price={product.priceRange}
        slug={slug}
        category={product.category}
      />

      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main id="main-content" tabIndex={-1}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          {/* Breadcrumbs with Schema */}
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <ProductDetails product={productWithDescription} />
        <RelatedProducts />
        </main>
        <Footer />
      </div>
    </>
  );
}
