export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "USA Markets SMM",
    "alternateName": "USAMARKETSMM",
    "url": "https://usamarketsmm.com",
    "logo": "https://usamarketsmm.com/logo/logo.png",
    "description": "Global IT Shop & Service Agency providing verified digital accounts including Gmail, PayPal, social media, and bank accounts with instant delivery and 30-day warranty.",
    "email": "hello@usamarketsmm.com",
    "telephone": "+1-712-298-2593",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://t.me/usamarketsmm",
      "https://facebook.com/usamarketsmm",
      "https://twitter.com/usamarketsmm"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$6 - $4900",
    "paymentAccepted": "Credit Card, Cryptocurrency, PayPal, Bank Transfer",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Accounts & Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Email Accounts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Gmail Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Yahoo Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Outlook Accounts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Payment Accounts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "PayPal Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cash App Accounts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Social Media Accounts",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Facebook Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Instagram Accounts"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
