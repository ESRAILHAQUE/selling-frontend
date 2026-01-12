// Product data for all dropdown menu items
// Descriptions are loaded lazily on the client to improve performance

export interface ProductData {
  slug: string;
  title: string;
  category: string;
  categories: string[];
  priceRange: { min: number; max: number };
  breadcrumbs: string[];
  serviceDetails: string[];
  options: Array<{
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
  }>;
  description: string;
  imagePath: string;
}

// Helper function to generate product data
function createProduct(
  slug: string,
  title: string,
  category: string,
  categories: string[],
  priceRange: { min: number; max: number },
  options: Array<{
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
  }>
): ProductData {
  return {
    slug,
    title,
    category,
    categories,
    priceRange,
    breadcrumbs: ["Home", category, title],
    serviceDetails: [
      "100% verified account",
      "Replacement guaranteed",
      "Reliable and cheap price",
      "Accounts older than 2-12 years.",
      "Good, strong, active good account",
      "Best quality account",
      "24 hours customer support",
      "Phone Verified account USA, UK, CA etc.",
      "Fast delivery",
      "100% cash-back guarantee",
    ],
    options,
    imagePath: `/images/products/${slug}.jpg`,
    // Empty description - will be loaded lazily on client
    description: "",
  };
}

// All products from dropdown menus
export const productsData: Record<string, ProductData> = {
  // Email Accounts
  "buy-gmail-accounts": {
    slug: "buy-gmail-accounts",
    title: "Buy Gmail Accounts",
    category: "Email Accounts",
    categories: ["Email Accounts"],
    priceRange: { min: 15, max: 250 },
    breadcrumbs: ["Home", "Email Accounts", "Buy Gmail Accounts"],
    serviceDetails: [
      "100% verified Gmail account",
      "Replacement guaranteed within 30 days",
      "Reliable and cheap price",
      "Accounts older than 2-12 years available",
      "Good, strong, active Gmail accounts",
      "Best quality PVA Gmail accounts",
      "24 hours customer support",
      "Phone Verified accounts from USA, UK, CA etc.",
      "Fast delivery within 24 hours",
      "100% cash-back guarantee",
    ],
    options: [
      { id: "1", name: "05 Gmail Accounts", price: 15 },
      { id: "2", name: "20 Gmail Accounts", price: 50 },
      { id: "3", name: "50 Gmail Accounts", price: 100 },
      { id: "4", name: "100 Gmail Accounts", price: 180 },
      { id: "5", name: "200 Gmail Accounts", price: 250 },
    ],
    imagePath: "/images/products/buy-gmail-accounts.jpg",
    // Empty description - will be loaded lazily on client
    description: "",
  },
  "buy-old-gmail-accounts": createProduct(
    "buy-old-gmail-accounts",
    "Buy Old Gmail Accounts",
    "Email Accounts",
    ["Email Accounts"],
    { min: 20, max: 300 },
    [
      { id: "1", name: "05 Old Gmail Accounts", price: 20 },
      { id: "2", name: "20 Old Gmail Accounts", price: 60 },
      { id: "3", name: "50 Old Gmail Accounts", price: 120 },
      { id: "4", name: "100 Old Gmail Accounts", price: 220 },
      { id: "5", name: "200 Old Gmail Accounts", price: 300 },
    ]
  ),
  "buy-social-security-number": createProduct(
    "buy-social-security-number",
    "Buy Social Security Number",
    "Email Accounts",
    ["Email Accounts"],
    { min: 5, max: 500 },
    [
      { id: "1", name: "Single SSN", price: 5 },
      { id: "2", name: "5 SSN Package", price: 20 },
      { id: "3", name: "10 SSN Package", price: 35 },
      { id: "4", name: "20 SSN Package", price: 150 },
      { id: "5", name: "50 SSN Package", price: 500 },
    ]
  ),
  // Social Accounts
  "buy-facebook-ads-accounts": createProduct(
    "buy-facebook-ads-accounts",
    "Buy Facebook Ads Accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 60, max: 3000 },
    [
      { id: "1", name: "Basic Facebook Ads Account", price: 60 },
      { id: "2", name: "Premium Facebook Ads Account", price: 150 },
      { id: "3", name: "Business Facebook Ads Account", price: 500 },
      { id: "4", name: "Enterprise Facebook Ads Account", price: 1500 },
      { id: "5", name: "VIP Facebook Ads Account", price: 3000 },
    ]
  ),
  "buy-usa-facebook-accounts": createProduct(
    "buy-usa-facebook-accounts",
    "Buy USA Facebook Accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 60, max: 3000 },
    [
      { id: "1", name: "Single USA Facebook Account", price: 60 },
      { id: "2", name: "5 USA Facebook Accounts", price: 250 },
      { id: "3", name: "10 USA Facebook Accounts", price: 450 },
      { id: "4", name: "20 USA Facebook Accounts", price: 1500 },
      { id: "5", name: "50 USA Facebook Accounts", price: 3000 },
    ]
  ),
  "buy-facebook-account-with-5000-friends": createProduct(
    "buy-facebook-account-with-5000-friends",
    "Buy Facebook Account With 5000 Friends",
    "Social Accounts",
    ["Social Accounts"],
    { min: 100, max: 500 },
    [
      { id: "1", name: "Facebook Account with 5000 Friends", price: 100 },
      { id: "2", name: "Facebook Account with 10000 Friends", price: 200 },
      { id: "3", name: "Facebook Account with 20000 Friends", price: 350 },
      { id: "4", name: "Facebook Account with 50000 Friends", price: 500 },
    ]
  ),
  "buy-linkedin-account": createProduct(
    "buy-linkedin-account",
    "Buy LinkedIn Account",
    "Social Accounts",
    ["Social Accounts"],
    { min: 50, max: 500 },
    [
      { id: "1", name: "Basic LinkedIn Account", price: 50 },
      { id: "2", name: "Premium LinkedIn Account", price: 150 },
      { id: "3", name: "Business LinkedIn Account", price: 300 },
      { id: "4", name: "Enterprise LinkedIn Account", price: 500 },
    ]
  ),
  "buy-twitter-accounts": createProduct(
    "buy-twitter-accounts",
    "Buy Twitter Accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 25, max: 650 },
    [
      { id: "1", name: "Single Twitter Account", price: 25 },
      { id: "2", name: "5 Twitter Accounts", price: 100 },
      { id: "3", name: "10 Twitter Accounts", price: 200 },
      { id: "4", name: "20 Twitter Accounts", price: 400 },
      { id: "5", name: "50 Twitter Accounts", price: 650 },
    ]
  ),
  "buy-instagram-accounts": createProduct(
    "buy-instagram-accounts",
    "Buy Instagram Accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 40, max: 800 },
    [
      { id: "1", name: "Single Instagram Account", price: 40 },
      { id: "2", name: "5 Instagram Accounts", price: 150 },
      { id: "3", name: "10 Instagram Accounts", price: 300 },
      { id: "4", name: "20 Instagram Accounts", price: 550 },
      { id: "5", name: "50 Instagram Accounts", price: 800 },
    ]
  ),
  "buy-sendgrid-accounts": createProduct(
    "buy-sendgrid-accounts",
    "Buy SendGrid accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 80, max: 600 },
    [
      { id: "1", name: "Basic SendGrid Account", price: 80 },
      { id: "2", name: "Pro SendGrid Account", price: 200 },
      { id: "3", name: "Premium SendGrid Account", price: 400 },
      { id: "4", name: "Enterprise SendGrid Account", price: 600 },
    ]
  ),
  "buy-soundcloud-accounts": createProduct(
    "buy-soundcloud-accounts",
    "Buy Soundcloud Accounts",
    "Social Accounts",
    ["Social Accounts"],
    { min: 30, max: 400 },
    [
      { id: "1", name: "Single Soundcloud Account", price: 30 },
      { id: "2", name: "5 Soundcloud Accounts", price: 120 },
      { id: "3", name: "10 Soundcloud Accounts", price: 250 },
      { id: "4", name: "20 Soundcloud Accounts", price: 400 },
    ]
  ),
  "buy-naver-account": createProduct(
    "buy-naver-account",
    "Buy naver account",
    "Social Accounts",
    ["Social Accounts"],
    { min: 45, max: 350 },
    [
      { id: "1", name: "Single Naver Account", price: 45 },
      { id: "2", name: "5 Naver Accounts", price: 180 },
      { id: "3", name: "10 Naver Accounts", price: 280 },
      { id: "4", name: "20 Naver Accounts", price: 350 },
    ]
  ),
  // Bank Accounts
  "buy-verified-paypal-accounts": createProduct(
    "buy-verified-paypal-accounts",
    "Buy Verified PayPal Accounts",
    "Bank account",
    ["Bank account"],
    { min: 150, max: 2000 },
    [
      { id: "1", name: "Basic PayPal Account", price: 150 },
      { id: "2", name: "Verified PayPal Account", price: 300 },
      { id: "3", name: "Business PayPal Account", price: 600 },
      { id: "4", name: "Premium PayPal Account", price: 1200 },
      { id: "5", name: "Enterprise PayPal Account", price: 2000 },
    ]
  ),
  "buy-verified-payoneer-accounts": createProduct(
    "buy-verified-payoneer-accounts",
    "Buy Verified Payoneer Accounts",
    "Bank account",
    ["Bank account"],
    { min: 120, max: 1500 },
    [
      { id: "1", name: "Basic Payoneer Account", price: 120 },
      { id: "2", name: "Verified Payoneer Account", price: 250 },
      { id: "3", name: "Business Payoneer Account", price: 500 },
      { id: "4", name: "Premium Payoneer Account", price: 1000 },
      { id: "5", name: "Enterprise Payoneer Account", price: 1500 },
    ]
  ),
  "buy-verified-cash-app-account": createProduct(
    "buy-verified-cash-app-account",
    "Buy Verified Cash App Account",
    "Bank account",
    ["Bank account"],
    { min: 100, max: 800 },
    [
      { id: "1", name: "Basic Cash App Account", price: 100 },
      { id: "2", name: "Verified Cash App Account", price: 200 },
      { id: "3", name: "Premium Cash App Account", price: 400 },
      { id: "4", name: "Business Cash App Account", price: 800 },
    ]
  ),
  "buy-chime-bank-accounts": createProduct(
    "buy-chime-bank-accounts",
    "Buy Chime Bank Accounts",
    "Bank account",
    ["Bank account"],
    { min: 80, max: 600 },
    [
      { id: "1", name: "Basic Chime Account", price: 80 },
      { id: "2", name: "Verified Chime Account", price: 180 },
      { id: "3", name: "Premium Chime Account", price: 350 },
      { id: "4", name: "Business Chime Account", price: 600 },
    ]
  ),
  "buy-verified-onlyfans-accounts": createProduct(
    "buy-verified-onlyfans-accounts",
    "Buy Verified OnlyFans Accounts",
    "Bank account",
    ["Bank account"],
    { min: 200, max: 1500 },
    [
      { id: "1", name: "Basic OnlyFans Account", price: 200 },
      { id: "2", name: "Verified OnlyFans Account", price: 400 },
      { id: "3", name: "Premium OnlyFans Account", price: 800 },
      { id: "4", name: "VIP OnlyFans Account", price: 1500 },
    ]
  ),
  "buy-verified-skrill-accounts": createProduct(
    "buy-verified-skrill-accounts",
    "Buy Verified Skrill Accounts",
    "Bank account",
    ["Bank account"],
    { min: 130, max: 1200 },
    [
      { id: "1", name: "Basic Skrill Account", price: 130 },
      { id: "2", name: "Verified Skrill Account", price: 280 },
      { id: "3", name: "Premium Skrill Account", price: 600 },
      { id: "4", name: "Business Skrill Account", price: 1200 },
    ]
  ),
  "buy-verified-bluebird-accounts": createProduct(
    "buy-verified-bluebird-accounts",
    "Buy Verified Bluebird Accounts",
    "Bank account",
    ["Bank account"],
    { min: 90, max: 700 },
    [
      { id: "1", name: "Basic Bluebird Account", price: 90 },
      { id: "2", name: "Verified Bluebird Account", price: 200 },
      { id: "3", name: "Premium Bluebird Account", price: 400 },
      { id: "4", name: "Business Bluebird Account", price: 700 },
    ]
  ),
  "buy-verified-luno-account": createProduct(
    "buy-verified-luno-account",
    "Buy Verified Luno Account",
    "Bank account",
    ["Bank account"],
    { min: 110, max: 900 },
    [
      { id: "1", name: "Basic Luno Account", price: 110 },
      { id: "2", name: "Verified Luno Account", price: 250 },
      { id: "3", name: "Premium Luno Account", price: 500 },
      { id: "4", name: "Business Luno Account", price: 900 },
    ]
  ),
  "buy-verified-bank-of-america": createProduct(
    "buy-verified-bank-of-america",
    "Buy Verified Bank of America",
    "Bank account",
    ["Bank account"],
    { min: 300, max: 2500 },
    [
      { id: "1", name: "Basic Bank of America Account", price: 300 },
      { id: "2", name: "Verified Bank of America Account", price: 600 },
      { id: "3", name: "Premium Bank of America Account", price: 1200 },
      { id: "4", name: "Business Bank of America Account", price: 2500 },
    ]
  ),
  "buy-verified-wells-fargo-account": createProduct(
    "buy-verified-wells-fargo-account",
    "Buy Verified Wells Fargo Account",
    "Bank account",
    ["Bank account"],
    { min: 280, max: 2200 },
    [
      { id: "1", name: "Basic Wells Fargo Account", price: 280 },
      { id: "2", name: "Verified Wells Fargo Account", price: 550 },
      { id: "3", name: "Premium Wells Fargo Account", price: 1100 },
      { id: "4", name: "Business Wells Fargo Account", price: 2200 },
    ]
  ),
  "buy-verified-chase-bank-account": createProduct(
    "buy-verified-chase-bank-account",
    "Buy Verified Chase Bank Account",
    "Bank account",
    ["Bank account"],
    { min: 320, max: 2800 },
    [
      { id: "1", name: "Basic Chase Bank Account", price: 320 },
      { id: "2", name: "Verified Chase Bank Account", price: 650 },
      { id: "3", name: "Premium Chase Bank Account", price: 1300 },
      { id: "4", name: "Business Chase Bank Account", price: 2800 },
    ]
  ),
  // Premium Banking
  "buy-verified-paxful-accounts": createProduct(
    "buy-verified-paxful-accounts",
    "Buy Verified Paxful Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 180, max: 1500 },
    [
      { id: "1", name: "Basic Paxful Account", price: 180 },
      { id: "2", name: "Verified Paxful Account", price: 400 },
      { id: "3", name: "Premium Paxful Account", price: 800 },
      { id: "4", name: "Business Paxful Account", price: 1500 },
    ]
  ),
  "buy-verified-apple-pay-accounts": createProduct(
    "buy-verified-apple-pay-accounts",
    "Buy Verified Apple Pay Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 200, max: 1800 },
    [
      { id: "1", name: "Basic Apple Pay Account", price: 200 },
      { id: "2", name: "Verified Apple Pay Account", price: 450 },
      { id: "3", name: "Premium Apple Pay Account", price: 900 },
      { id: "4", name: "Business Apple Pay Account", price: 1800 },
    ]
  ),
  "buy-verified-alipay-accounts": createProduct(
    "buy-verified-alipay-accounts",
    "Buy Verified Alipay Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 160, max: 1400 },
    [
      { id: "1", name: "Basic Alipay Account", price: 160 },
      { id: "2", name: "Verified Alipay Account", price: 350 },
      { id: "3", name: "Premium Alipay Account", price: 700 },
      { id: "4", name: "Business Alipay Account", price: 1400 },
    ]
  ),
  "buy-verified-moonpay-accounts": createProduct(
    "buy-verified-moonpay-accounts",
    "Buy Verified Moonpay Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 140, max: 1200 },
    [
      { id: "1", name: "Basic Moonpay Account", price: 140 },
      { id: "2", name: "Verified Moonpay Account", price: 300 },
      { id: "3", name: "Premium Moonpay Account", price: 600 },
      { id: "4", name: "Business Moonpay Account", price: 1200 },
    ]
  ),
  "buy-verified-redotpay-accounts": createProduct(
    "buy-verified-redotpay-accounts",
    "Buy Verified RedotPay Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 170, max: 1300 },
    [
      { id: "1", name: "Basic RedotPay Account", price: 170 },
      { id: "2", name: "Verified RedotPay Account", price: 380 },
      { id: "3", name: "Premium RedotPay Account", price: 750 },
      { id: "4", name: "Business RedotPay Account", price: 1300 },
    ]
  ),
  "buy-verified-bittrex-account": createProduct(
    "buy-verified-bittrex-account",
    "Buy Verified Bittrex Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 190, max: 1600 },
    [
      { id: "1", name: "Basic Bittrex Account", price: 190 },
      { id: "2", name: "Verified Bittrex Account", price: 420 },
      { id: "3", name: "Premium Bittrex Account", price: 850 },
      { id: "4", name: "Business Bittrex Account", price: 1600 },
    ]
  ),
  "buy-verified-revolut-accounts": createProduct(
    "buy-verified-revolut-accounts",
    "Buy Verified Revolut Accounts",
    "Premium Banking",
    ["Premium Banking"],
    { min: 210, max: 1700 },
    [
      { id: "1", name: "Basic Revolut Account", price: 210 },
      { id: "2", name: "Verified Revolut Account", price: 480 },
      { id: "3", name: "Premium Revolut Account", price: 950 },
      { id: "4", name: "Business Revolut Account", price: 1700 },
    ]
  ),
  "buy-verified-advcash-account": createProduct(
    "buy-verified-advcash-account",
    "Buy Verified Advcash Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 150, max: 1100 },
    [
      { id: "1", name: "Basic Advcash Account", price: 150 },
      { id: "2", name: "Verified Advcash Account", price: 320 },
      { id: "3", name: "Premium Advcash Account", price: 650 },
      { id: "4", name: "Business Advcash Account", price: 1100 },
    ]
  ),
  "buy-verified-2checkout-account": createProduct(
    "buy-verified-2checkout-account",
    "Buy Verified 2CheckOut Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 220, max: 1900 },
    [
      { id: "1", name: "Basic 2CheckOut Account", price: 220 },
      { id: "2", name: "Verified 2CheckOut Account", price: 500 },
      { id: "3", name: "Premium 2CheckOut Account", price: 1000 },
      { id: "4", name: "Business 2CheckOut Account", price: 1900 },
    ]
  ),
  "buy-verified-transferwise-account": createProduct(
    "buy-verified-transferwise-account",
    "Buy Verified TransferWise Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 230, max: 2000 },
    [
      { id: "1", name: "Basic TransferWise Account", price: 230 },
      { id: "2", name: "Verified TransferWise Account", price: 520 },
      { id: "3", name: "Premium TransferWise Account", price: 1050 },
      { id: "4", name: "Business TransferWise Account", price: 2000 },
    ]
  ),
  "buy-verified-perfect-money-account": createProduct(
    "buy-verified-perfect-money-account",
    "Buy Verified Perfect Money Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 100, max: 800 },
    [
      { id: "1", name: "Basic Perfect Money Account", price: 100 },
      { id: "2", name: "Verified Perfect Money Account", price: 250 },
      { id: "3", name: "Premium Perfect Money Account", price: 500 },
      { id: "4", name: "Business Perfect Money Account", price: 800 },
    ]
  ),
  "buy-verified-webmoney-account": createProduct(
    "buy-verified-webmoney-account",
    "Buy Verified Webmoney Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 110, max: 850 },
    [
      { id: "1", name: "Basic Webmoney Account", price: 110 },
      { id: "2", name: "Verified Webmoney Account", price: 270 },
      { id: "3", name: "Premium Webmoney Account", price: 550 },
      { id: "4", name: "Business Webmoney Account", price: 850 },
    ]
  ),
  // Google
  "buy-google-voice-accounts": createProduct(
    "buy-google-voice-accounts",
    "Buy Google Voice Accounts",
    "Google",
    ["Google"],
    { min: 50, max: 400 },
    [
      { id: "1", name: "Single Google Voice Account", price: 50 },
      { id: "2", name: "5 Google Voice Accounts", price: 200 },
      { id: "3", name: "10 Google Voice Accounts", price: 350 },
      { id: "4", name: "20 Google Voice Accounts", price: 400 },
    ]
  ),
  "buy-google-ads-account": createProduct(
    "buy-google-ads-account",
    "Buy Google Ads Account",
    "Google",
    ["Google", "Social Accounts"],
    { min: 100, max: 500 },
    [
      {
        id: "1",
        name: "Adwords With $500 Balance",
        price: 500,
        originalPrice: 600,
      },
      {
        id: "2",
        name: "Adwords With $1000 Balance",
        price: 1000,
        originalPrice: 1200,
      },
      {
        id: "3",
        name: "Adwords With $2000 Balance",
        price: 2000,
        originalPrice: 2500,
      },
    ]
  ),
  "buy-verified-coinbase-accounts": createProduct(
    "buy-verified-coinbase-accounts",
    "Buy Verified Coinbase Accounts",
    "Google",
    ["Google"],
    { min: 250, max: 2000 },
    [
      { id: "1", name: "Basic Coinbase Account", price: 250 },
      { id: "2", name: "Verified Coinbase Account", price: 500 },
      { id: "3", name: "Premium Coinbase Account", price: 1000 },
      { id: "4", name: "Business Coinbase Account", price: 2000 },
    ]
  ),
  "buy-verified-binance-accounts": createProduct(
    "buy-verified-binance-accounts",
    "Buy Verified Binance Accounts",
    "Google",
    ["Google"],
    { min: 300, max: 2500 },
    [
      { id: "1", name: "Basic Binance Account", price: 300 },
      { id: "2", name: "Verified Binance Account", price: 600 },
      { id: "3", name: "Premium Binance Account", price: 1200 },
      { id: "4", name: "Business Binance Account", price: 2500 },
    ]
  ),
  // Reviews
  "buy-google-reviews": createProduct(
    "buy-google-reviews",
    "Buy Google reviews",
    "Reviews",
    ["Reviews"],
    { min: 20, max: 500 },
    [
      { id: "1", name: "10 Google Reviews", price: 20 },
      { id: "2", name: "25 Google Reviews", price: 50 },
      { id: "3", name: "50 Google Reviews", price: 150 },
      { id: "4", name: "100 Google Reviews", price: 300 },
      { id: "5", name: "200 Google Reviews", price: 500 },
    ]
  ),
  "buy-google-business-reviews": createProduct(
    "buy-google-business-reviews",
    "Buy Google Business Reviews",
    "Reviews",
    ["Reviews"],
    { min: 25, max: 600 },
    [
      { id: "1", name: "10 Google Business Reviews", price: 25 },
      { id: "2", name: "25 Google Business Reviews", price: 60 },
      { id: "3", name: "50 Google Business Reviews", price: 180 },
      { id: "4", name: "100 Google Business Reviews", price: 350 },
      { id: "5", name: "200 Google Business Reviews", price: 600 },
    ]
  ),
  "buy-google-5-star-reviews": createProduct(
    "buy-google-5-star-reviews",
    "Buy Google 5 Star Reviews",
    "Reviews",
    ["Reviews"],
    { min: 30, max: 700 },
    [
      { id: "1", name: "10 Google 5 Star Reviews", price: 30 },
      { id: "2", name: "25 Google 5 Star Reviews", price: 70 },
      { id: "3", name: "50 Google 5 Star Reviews", price: 200 },
      { id: "4", name: "100 Google 5 Star Reviews", price: 400 },
      { id: "5", name: "200 Google 5 Star Reviews", price: 700 },
    ]
  ),
  "buy-trustpilot-reviews": createProduct(
    "buy-trustpilot-reviews",
    "Buy TrustPilot Reviews",
    "Reviews",
    ["Reviews"],
    { min: 35, max: 800 },
    [
      { id: "1", name: "10 TrustPilot Reviews", price: 35 },
      { id: "2", name: "25 TrustPilot Reviews", price: 80 },
      { id: "3", name: "50 TrustPilot Reviews", price: 220 },
      { id: "4", name: "100 TrustPilot Reviews", price: 450 },
      { id: "5", name: "200 TrustPilot Reviews", price: 800 },
    ]
  ),
};

// Get product by slug
export function getProductBySlug(slug: string): ProductData | null {
  return productsData[slug] || null;
}

// Get all product slugs
export function getAllProductSlugs(): string[] {
  return Object.keys(productsData);
}
