interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: {
    min: number;
    max: number;
  };
  slug: string;
  category?: string;
  inStock?: boolean;
}

export default function ProductSchema({
  name,
  description,
  image,
  price,
  slug,
  category = "Digital Products",
  inStock = true,
}: ProductSchemaProps) {
  const productUrl = `https://usamarketsmm.com/${slug}`;
  const imageUrl = `https://usamarketsmm.com${image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "USA Markets SMM"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": productUrl,
      "priceCurrency": "USD",
      "lowPrice": price.min.toString(),
      "highPrice": price.max.toString(),
      "availability": inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      "priceValidUntil": new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      ).toISOString().split('T')[0],
      "seller": {
        "@type": "Organization",
        "name": "USA Markets SMM"
      }
    },
    "category": category,
    "sku": slug,
    "url": productUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
