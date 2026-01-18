'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://usamarketsmm.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href && { "item": `https://usamarketsmm.com${item.href}` })
      }))
    ]
  };

  return (
    <>
      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-2 sm:mb-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {/* Home Link */}
          <li className="flex items-center">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              aria-label="Go to homepage"
            >
              Home
            </Link>
          </li>

          {/* Breadcrumb Items */}
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-2">
                {/* Separator */}
                <span className="text-gray-400" aria-hidden="true">›</span>

                {/* Breadcrumb Link or Text */}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-800 transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`${
                      isLast
                        ? 'text-gray-900 font-semibold'
                        : 'text-blue-600 hover:text-blue-800'
                    }`}
                    {...(isLast && { 'aria-current': 'page' })}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
