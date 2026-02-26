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
    "priceRange": "$6 - $4900",
    "paymentAccepted": "Bitcoin, Ethereum, Litecoin, Solana, USDT",
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
                "@type": "Service",
                "name": "Gmail Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Yahoo Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
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
                "@type": "Service",
                "name": "PayPal Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
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
                "@type": "Service",
                "name": "Facebook Accounts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
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
