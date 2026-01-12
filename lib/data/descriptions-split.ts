// Auto-generated index for product descriptions
// Each product description is in a separate file for optimal code splitting

/**
 * Dynamically import a product description
 * This enables true lazy loading - only the needed description loads
 */
export async function getProductDescription(slug: string): Promise<string> {
  try {
    // Dynamic import enables code splitting
    const module = await import(`./descriptions/${slug}`);
    return module.description || '';
  } catch (error) {
    console.warn(`Description not found for: ${slug}`);
    return '';
  }
}

/**
 * Synchronous version for server-side rendering
 * Note: This returns an empty string initially to prevent blocking
 * The actual description will be loaded async on the client
 */
export function getProductDescriptionSync(slug: string): string {
  // Return empty string to prevent blocking during SSR
  // Description will be loaded on the client side
  return '';
}

/**
 * Check if a description exists
 * Note: This is a simple check - just try to load and catch error
 */
export function hasDescription(slug: string): boolean {
  // Since we're doing dynamic imports, we'll just assume it exists
  // and let the getProductDescription function handle errors
  return availableProducts.includes(slug);
}

/**
 * List of all available product slugs
 */
export const availableProducts = [
  "buy-gmail-accounts",
  "buy-old-gmail-accounts",
  "buy-social-security-number",
  "buy-facebook-ads-accounts",
  "buy-usa-facebook-accounts",
  "buy-facebook-account-with-5000-friends",
  "buy-linkedin-account",
  "buy-twitter-accounts",
  "buy-instagram-accounts",
  "buy-sendgrid-accounts",
  "buy-verified-paypal-accounts",
  "buy-verified-payoneer-accounts",
  "buy-verified-cash-app-account",
  "buy-chime-bank-accounts",
  "buy-verified-onlyfans-accounts",
  "buy-verified-skrill-accounts",
  "buy-verified-bluebird-accounts",
  "buy-verified-luno-account",
  "buy-verified-bank-of-america",
  "buy-verified-wells-fargo-account",
  "buy-verified-chase-bank-account",
  "buy-verified-paxful-accounts",
  "buy-verified-apple-pay-accounts",
  "buy-verified-alipay-accounts",
  "buy-verified-moonpay-accounts",
  "buy-verified-redotpay-accounts",
  "buy-verified-bittrex-account",
  "buy-verified-revolut-accounts",
  "buy-verified-advcash-account",
  "buy-verified-2checkout-account",
  "buy-verified-transferwise-account",
  "buy-verified-perfect-money-account",
  "buy-verified-webmoney-account",
  "buy-google-voice-accounts",
  "buy-google-ads-account",
  "buy-verified-coinbase-accounts",
  "buy-verified-binance-accounts",
  "buy-google-reviews",
  "buy-google-business-reviews",
  "buy-google-5-star-reviews",
  "buy-trustpilot-reviews",
  "buy-soundcloud-accounts"
];
