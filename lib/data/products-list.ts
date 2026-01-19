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
  shortDescription?: string;
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
    priceRange: { min: 6, max: 340 },
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
      { id: "1", name: "05 Gmail Accounts", price: 6 },
      { id: "2", name: "20 Gmail Accounts", price: 50 },
      { id: "3", name: "50 Gmail Accounts", price: 100 },
      { id: "4", name: "100 Gmail Accounts", price: 180 },
      { id: "5", name: "200 Gmail Accounts", price: 340 },
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
  "buy-old-yahoo-account": {
    slug: "buy-old-yahoo-account",
    title: "Buy Old Yahoo Account",
    category: "Email Accounts",
    categories: ["Email Accounts"],
    priceRange: { min: 8, max: 25 },
    breadcrumbs: ["Home", "Email Accounts", "Buy Old Yahoo Account"],
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
    options: [
      { id: "1", name: "05 Old Yahoo Accounts", price: 8 },
      { id: "2", name: "20 Old Yahoo Accounts", price: 12 },
      { id: "3", name: "50 Old Yahoo Accounts", price: 18 },
      { id: "4", name: "100 Old Yahoo Accounts", price: 22 },
      { id: "5", name: "200 Old Yahoo Accounts", price: 25 },
    ],
    imagePath: "/images/products/oldYahooAccount.jpg",
    description: "",
  },
  "buy-outlook-account": {
    slug: "buy-outlook-account",
    title: "Buy Outlook Account",
    category: "Email Accounts",
    categories: ["Email Accounts"],
    priceRange: { min: 16, max: 260 },
    breadcrumbs: ["Home", "Email Accounts", "Buy Outlook Account"],
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
    options: [
      { id: "1", name: "05 Outlook Accounts", price: 16 },
      { id: "2", name: "20 Outlook Accounts", price: 50 },
      { id: "3", name: "50 Outlook Accounts", price: 100 },
      { id: "4", name: "100 Outlook Accounts", price: 180 },
      { id: "5", name: "200 Outlook Accounts", price: 260 },
    ],
    imagePath: "/images/products/outlookAccount.jpg",
    description: "",
  },
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
    { min: 30, max: 250 },
    [
      { id: "1", name: "Basic LinkedIn Account", price: 30 },
      { id: "2", name: "Premium LinkedIn Account", price: 80 },
      { id: "3", name: "Business LinkedIn Account", price: 150 },
      { id: "4", name: "Enterprise LinkedIn Account", price: 250 },
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
    { min: 10, max: 300 },
    [
      { id: "1", name: "Single Naver Account", price: 10 },
      { id: "2", name: "5 Naver Accounts", price: 50 },
      { id: "3", name: "10 Naver Accounts", price: 150 },
      { id: "4", name: "20 Naver Accounts", price: 300 },
    ]
  ),
  // Bank Accounts
  "buy-verified-paypal-accounts": createProduct(
    "buy-verified-paypal-accounts",
    "Buy Verified PayPal Accounts",
    "Bank account",
    ["Bank account"],
    { min: 110, max: 150 },
    [
      { id: "1", name: "Basic PayPal Account", price: 110 },
      { id: "2", name: "Verified PayPal Account", price: 120 },
      { id: "3", name: "Business PayPal Account", price: 130 },
      { id: "4", name: "Premium PayPal Account", price: 140 },
      { id: "5", name: "Enterprise PayPal Account", price: 150 },
    ]
  ),
  "buy-verified-payoneer-accounts": createProduct(
    "buy-verified-payoneer-accounts",
    "Buy Verified Payoneer Accounts",
    "Bank account",
    ["Bank account"],
    { min: 120, max: 250 },
    [
      { id: "1", name: "Basic Payoneer Account", price: 120 },
      { id: "2", name: "Verified Payoneer Account", price: 160 },
      { id: "3", name: "Business Payoneer Account", price: 200 },
      { id: "4", name: "Premium Payoneer Account", price: 230 },
      { id: "5", name: "Enterprise Payoneer Account", price: 250 },
    ]
  ),
  "buy-verified-cash-app-account": createProduct(
    "buy-verified-cash-app-account",
    "Buy Verified Cash App Account",
    "Bank account",
    ["Bank account"],
    { min: 160, max: 450 },
    [
      { id: "1", name: "Basic Cash App Account", price: 160 },
      { id: "2", name: "Verified Cash App Account", price: 250 },
      { id: "3", name: "Premium Cash App Account", price: 350 },
      { id: "4", name: "Business Cash App Account", price: 450 },
    ]
  ),
  "buy-verified-wise-accounts": createProduct(
    "buy-verified-wise-accounts",
    "Buy Verified Wise Accounts",
    "Bank account",
    ["Bank account"],
    { min: 200, max: 380 },
    [
      { id: "1", name: "Basic Wise Account", price: 200 },
      { id: "2", name: "Verified Wise Account", price: 250 },
      { id: "3", name: "Premium Wise Account", price: 320 },
      { id: "4", name: "Business Wise Account", price: 380 },
    ]
  ),
  "buy-verified-stripe-accounts": createProduct(
    "buy-verified-stripe-accounts",
    "Buy Verified Stripe Accounts",
    "Bank account",
    ["Bank account"],
    { min: 370, max: 570 },
    [
      { id: "1", name: "Basic Stripe Account", price: 370 },
      { id: "2", name: "Verified Stripe Account", price: 440 },
      { id: "3", name: "Premium Stripe Account", price: 510 },
      { id: "4", name: "Business Stripe Account", price: 570 },
    ]
  ),
  "buy-chime-bank-accounts": createProduct(
    "buy-chime-bank-accounts",
    "Buy Chime Bank Accounts",
    "Bank account",
    ["Bank account"],
    { min: 100, max: 220 },
    [
      { id: "1", name: "Basic Chime Account", price: 100 },
      { id: "2", name: "Verified Chime Account", price: 140 },
      { id: "3", name: "Premium Chime Account", price: 180 },
      { id: "4", name: "Business Chime Account", price: 220 },
    ]
  ),
  "buy-verified-onlyfans-accounts": createProduct(
    "buy-verified-onlyfans-accounts",
    "Buy Verified OnlyFans Accounts",
    "Bank account",
    ["Bank account"],
    { min: 90, max: 360 },
    [
      { id: "1", name: "Basic OnlyFans Account", price: 90 },
      { id: "2", name: "Verified OnlyFans Account", price: 180 },
      { id: "3", name: "Premium OnlyFans Account", price: 270 },
      { id: "4", name: "VIP OnlyFans Account", price: 360 },
    ]
  ),
  "buy-verified-skrill-accounts": createProduct(
    "buy-verified-skrill-accounts",
    "Buy Verified Skrill Accounts",
    "Bank account",
    ["Bank account"],
    { min: 90, max: 800 },
    [
      { id: "1", name: "Basic Skrill Account", price: 90 },
      { id: "2", name: "Verified Skrill Account", price: 250 },
      { id: "3", name: "Premium Skrill Account", price: 500 },
      { id: "4", name: "Business Skrill Account", price: 800 },
    ]
  ),
  "buy-verified-go2bank-accounts": createProduct(
    "buy-verified-go2bank-accounts",
    "Buy Verified Go2Bank Accounts",
    "Bank account",
    ["Bank account"],
    { min: 50, max: 120 },
    [
      { id: "1", name: "Basic Go2Bank Account", price: 50 },
      { id: "2", name: "Verified Go2Bank Account", price: 70 },
      { id: "3", name: "Premium Go2Bank Account", price: 90 },
      { id: "4", name: "Business Go2Bank Account", price: 120 },
    ]
  ),
  "buy-verified-venmo-accounts": createProduct(
    "buy-verified-venmo-accounts",
    "Buy Verified Venmo Accounts",
    "Bank account",
    ["Bank account"],
    { min: 120, max: 250 },
    [
      { id: "1", name: "Basic Venmo Account", price: 120 },
      { id: "2", name: "Verified Venmo Account", price: 160 },
      { id: "3", name: "Premium Venmo Account", price: 200 },
      { id: "4", name: "Business Venmo Account", price: 250 },
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
    { min: 80, max: 1000 },
    [
      { id: "1", name: "Basic Chase Bank Account", price: 80 },
      { id: "2", name: "Verified Chase Bank Account", price: 300 },
      { id: "3", name: "Premium Chase Bank Account", price: 600 },
      { id: "4", name: "Business Chase Bank Account", price: 1000 },
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
    { min: 370, max: 470 },
    [
      { id: "1", name: "Basic Apple Pay Account", price: 370 },
      { id: "2", name: "Verified Apple Pay Account", price: 400 },
      { id: "3", name: "Premium Apple Pay Account", price: 440 },
      { id: "4", name: "Business Apple Pay Account", price: 470 },
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
    { min: 15, max: 400 },
    [
      { id: "1", name: "Single Google Voice Account", price: 15 },
      { id: "2", name: "5 Google Voice Accounts", price: 60 },
      { id: "3", name: "10 Google Voice Accounts", price: 200 },
      { id: "4", name: "20 Google Voice Accounts", price: 400 },
    ]
  ),
  "buy-google-ads-account": createProduct(
    "buy-google-ads-account",
    "Buy Google Ads Account",
    "Google",
    ["Google", "Social Accounts"],
    { min: 220, max: 320 },
    [
      {
        id: "1",
        name: "Adwords With $500 Balance",
        price: 220,
        originalPrice: 260,
      },
      {
        id: "2",
        name: "Adwords With $1000 Balance",
        price: 270,
        originalPrice: 320,
      },
      {
        id: "3",
        name: "Adwords With $2000 Balance",
        price: 320,
        originalPrice: 380,
      },
    ]
  ),
  "buy-verified-coinbase-accounts": createProduct(
    "buy-verified-coinbase-accounts",
    "Buy Verified Coinbase Accounts",
    "Google",
    ["Google"],
    { min: 180, max: 380 },
    [
      { id: "1", name: "Basic Coinbase Account", price: 180 },
      { id: "2", name: "Verified Coinbase Account", price: 250 },
      { id: "3", name: "Premium Coinbase Account", price: 320 },
      { id: "4", name: "Business Coinbase Account", price: 380 },
    ]
  ),
  "buy-verified-binance-accounts": createProduct(
    "buy-verified-binance-accounts",
    "Buy Verified Binance Accounts",
    "Google",
    ["Google"],
    { min: 200, max: 350 },
    [
      { id: "1", name: "Basic Binance Account", price: 200 },
      { id: "2", name: "Verified Binance Account", price: 250 },
      { id: "3", name: "Premium Binance Account", price: 300 },
      { id: "4", name: "Business Binance Account", price: 350 },
    ]
  ),
  "buy-verified-bybit-account": createProduct(
    "buy-verified-bybit-account",
    "Buy Verified Bybit Account",
    "Google",
    ["Google"],
    { min: 170, max: 270 },
    [
      { id: "1", name: "Basic Bybit Account", price: 170 },
      { id: "2", name: "Verified Bybit Account", price: 200 },
      { id: "3", name: "Premium Bybit Account", price: 240 },
      { id: "4", name: "Business Bybit Account", price: 270 },
    ]
  ),
  "buy-verified-crypto-com-account": createProduct(
    "buy-verified-crypto-com-account",
    "Buy Verified Crypto.com Account",
    "Google",
    ["Google"],
    { min: 220, max: 350 },
    [
      { id: "1", name: "Basic Crypto.com Account", price: 220 },
      { id: "2", name: "Verified Crypto.com Account", price: 270 },
      { id: "3", name: "Premium Crypto.com Account", price: 310 },
      { id: "4", name: "Business Crypto.com Account", price: 350 },
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
  "buy-walmart-seller-account": createProduct(
    "buy-walmart-seller-account",
    "Buy Walmart Seller Account",
    "Premium Banking",
    ["Premium Banking"],
    { min: 1900, max: 4900 },
    [
      { id: "1", name: "Basic Walmart Seller Account", price: 1900 },
      { id: "2", name: "Verified Walmart Seller Account", price: 2800 },
      { id: "3", name: "Premium Walmart Seller Account", price: 3800 },
      { id: "4", name: "Enterprise Walmart Seller Account", price: 4900 },
    ]
  ),
};

// Product-specific short descriptions
export const productShortDescriptions: Record<string, string> = {
  "buy-gmail-accounts": "Looking for high-quality, real, and active Gmail accounts? Our premium Gmail accounts come from USA and European phone-verified sources, including aged Gmail accounts at competitive prices. These accounts are more reliable, build trust, and work seamlessly for both personal and business purposes. Get instant delivery and enjoy the peace of mind that comes with fully verified accounts.",
  "buy-google-voice-accounts": "Get premium Google Voice accounts with US phone numbers for your business needs. Our verified accounts come with instant delivery, reliable service, and full access to call and SMS features. Perfect for businesses, marketers, and individuals who need a professional phone number with Google Voice capabilities.",
  "buy-naver-account": "Purchase verified Naver accounts for Korean market access and digital marketing. Our premium Naver accounts are fully verified, phone-authenticated, and ready for immediate use. Perfect for businesses targeting Korean audiences, SEO professionals, and marketers who need reliable Korean social media accounts. Get instant delivery and full account access with our trusted Naver account service.",
  "buy-linkedin-account": "Get premium LinkedIn accounts for professional networking and B2B marketing. Our verified LinkedIn accounts come with established profiles, professional connections, and full access to networking features. Perfect for sales professionals, recruiters, business developers, and marketers who need authentic LinkedIn presence. Build credibility and expand your professional network with our trusted LinkedIn account service.",
  "buy-old-yahoo-account": "Purchase aged Yahoo accounts with established history and proven credibility. Our premium old Yahoo accounts come from verified sources, ensuring reliable email deliverability and professional appearance. Perfect for email marketing, business communications, and online platforms. Get instant delivery and enjoy accounts that build trust and improve your communication effectiveness.",
  "buy-google-ads-account": "Get verified Google Ads accounts with pre-loaded balance for your advertising campaigns. Our premium Google Ads accounts come ready to use, fully verified, and approved for immediate advertising. Perfect for digital marketers, businesses, and agencies who need reliable Google Ads access. Start your campaigns instantly with our trusted Google Ads account service.",
  "buy-verified-binance-accounts": "Purchase KYC verified Binance accounts for cryptocurrency trading. Our premium Binance accounts are fully verified, compliant with regulations, and ready for immediate trading. Perfect for crypto traders, investors, and businesses who need reliable access to Binance exchange. Get instant delivery and full account access with trading capabilities.",
  "buy-verified-coinbase-accounts": "Get verified Coinbase accounts for secure cryptocurrency trading and investment. Our premium Coinbase accounts are fully KYC verified, bank-linked, and ready for immediate use. Perfect for crypto enthusiasts, investors, and businesses who need reliable Coinbase access. Start trading securely with our trusted Coinbase account service.",
  "buy-verified-paypal-accounts": "Purchase verified PayPal accounts for secure online payments and transactions. Our premium PayPal accounts are fully verified, bank-linked, and ready for immediate use. Perfect for e-commerce businesses, freelancers, and individuals who need reliable PayPal access. Get instant delivery and full payment processing capabilities.",
  "buy-verified-cash-app-account": "Get verified Cash App accounts for instant money transfers and payments. Our premium Cash App accounts are fully verified, bank-linked, and ready for immediate use. Perfect for businesses, freelancers, and individuals who need reliable Cash App access. Start sending and receiving money instantly with our trusted Cash App account service.",
  "buy-chime-bank-accounts": "Purchase verified Chime bank accounts for modern online banking. Our premium Chime accounts are fully verified, FDIC-insured, and ready for immediate use. Perfect for individuals and businesses who need reliable online banking with no hidden fees. Get instant delivery and full banking access with our trusted Chime account service.",
  "buy-verified-payoneer-accounts": "Get verified Payoneer accounts for global payments and freelancer payments. Our premium Payoneer accounts are fully verified, bank-linked, and ready for international transactions. Perfect for freelancers, businesses, and individuals who need reliable global payment solutions. Receive payments worldwide with our trusted Payoneer account service.",
  "buy-verified-skrill-accounts": "Purchase verified Skrill accounts for secure online payments and money transfers. Our premium Skrill accounts are fully verified, approved, and ready for immediate use. Perfect for online businesses, freelancers, and individuals who need reliable payment processing. Get instant delivery and full payment capabilities with our trusted Skrill account service.",
  "buy-verified-onlyfans-accounts": "Get verified OnlyFans accounts for content creation and monetization. Our premium OnlyFans accounts are fully verified, ready to use, and approved for content publishing. Perfect for content creators, influencers, and businesses who need reliable OnlyFans access. Start monetizing your content instantly with our trusted OnlyFans account service.",
  "buy-verified-chase-bank-account": "Purchase verified Chase Bank accounts for premium banking services. Our premium Chase accounts are fully verified, approved, and ready for immediate banking access. Perfect for businesses and individuals who need reliable Chase Bank services. Get instant delivery and full banking capabilities with our trusted Chase Bank account service.",
  "buy-verified-apple-pay-accounts": "Get verified Apple Pay accounts for secure contactless payments. Our premium Apple Pay accounts are fully verified, card-linked, and ready for immediate use. Perfect for businesses and individuals who need reliable Apple Pay access. Make secure payments instantly with our trusted Apple Pay account service.",
  "buy-verified-bybit-account": "Purchase verified Bybit accounts for cryptocurrency derivatives trading. Our premium Bybit accounts are fully KYC verified, approved, and ready for immediate trading. Perfect for crypto traders and investors who need reliable Bybit exchange access. Start trading derivatives instantly with our trusted Bybit account service.",
  "buy-verified-crypto-com-account": "Get verified Crypto.com accounts for cryptocurrency trading and card services. Our premium Crypto.com accounts are fully verified, approved, and ready for immediate use. Perfect for crypto enthusiasts who need reliable Crypto.com access. Start trading and earn rewards with our trusted Crypto.com account service.",
  "buy-verified-wise-accounts": "Purchase verified Wise (formerly TransferWise) accounts for low-cost international money transfers. Our premium Wise accounts are fully verified, approved, and ready for global transactions. Perfect for businesses and individuals who need reliable international payment solutions. Send money worldwide with low fees using our trusted Wise account service.",
  "buy-verified-stripe-accounts": "Get verified Stripe accounts for online payment processing and e-commerce. Our premium Stripe accounts are fully verified, approved, and ready for immediate payment processing. Perfect for online businesses, marketplaces, and SaaS companies who need reliable payment solutions. Start accepting payments instantly with our trusted Stripe account service.",
  "buy-verified-go2bank-accounts": "Purchase verified Go2Bank accounts for modern digital banking. Our premium Go2Bank accounts are fully verified, approved, and ready for immediate use. Perfect for individuals who need reliable online banking with early direct deposit and cashback rewards. Get instant delivery and full banking access with our trusted Go2Bank account service.",
  "buy-verified-venmo-accounts": "Get verified Venmo accounts for instant peer-to-peer payments. Our premium Venmo accounts are fully verified, bank-linked, and ready for immediate use. Perfect for individuals and businesses who need reliable Venmo payment access. Send and receive money instantly with our trusted Venmo account service.",
  "buy-walmart-seller-account": "Purchase Walmart Seller accounts for marketplace selling. Our premium Walmart Seller accounts are fully verified, approved, and ready for immediate use. Perfect for businesses and sellers who want to reach millions of customers on Walmart marketplace. Start selling on Walmart instantly with our trusted seller account service.",
  "buy-old-gmail-accounts": "Get aged Gmail accounts with established history for enhanced credibility. Our premium old Gmail accounts are perfect for email marketing, business communications, and building trust with recipients. These aged accounts offer better deliverability rates and professional appearance. Instant delivery with full access credentials.",
  "buy-outlook-account": "Purchase Outlook accounts for professional email communication and Microsoft 365 integration. Our premium Outlook accounts are fully verified and ready for immediate use. Perfect for businesses, professionals, and organizations who need reliable Microsoft email services. Get instant delivery with full account access.",
  "buy-facebook-ads-accounts": "Get verified Facebook Ads accounts for powerful social media advertising campaigns. Our premium Facebook Ads accounts are fully approved, ready to launch campaigns, and compliant with Facebook policies. Perfect for digital marketers, businesses, and agencies. Start advertising on Facebook instantly with our trusted accounts.",
  "buy-usa-facebook-accounts": "Purchase USA Facebook accounts with verified US profiles and phone numbers. Our premium USA Facebook accounts are perfect for targeting American audiences, running location-specific campaigns, and building authentic US presence. Get instant delivery with full account access and reliable service.",
  "buy-facebook-account-with-5000-friends": "Get established Facebook accounts with 5000 friends for instant social credibility. Our premium accounts come with real profiles, organic connections, and high engagement potential. Perfect for influencers, marketers, and businesses who need immediate social proof. Start leveraging your network instantly.",
  "buy-twitter-accounts": "Purchase verified Twitter (X) accounts for social media marketing and brand building. Our premium Twitter accounts are fully verified, aged, and ready for immediate use. Perfect for businesses, influencers, and marketers who need authentic Twitter presence. Get instant delivery with full account access.",
  "buy-instagram-accounts": "Get verified Instagram accounts for social media marketing and influencer campaigns. Our premium Instagram accounts come with real followers, high engagement, and authentic profiles. Perfect for brands, influencers, and marketers who need reliable Instagram presence. Start posting and growing your audience instantly.",
  "buy-sendgrid-accounts": "Purchase verified SendGrid accounts for professional email marketing campaigns. Our premium SendGrid accounts are fully approved, ready for bulk emailing, and compliant with email regulations. Perfect for businesses, marketers, and agencies who need reliable email delivery services. Start your campaigns instantly.",
  "buy-soundcloud-accounts": "Get verified SoundCloud accounts for music distribution and artist promotion. Our premium SoundCloud accounts are fully verified and ready for immediate use. Perfect for musicians, producers, and labels who need reliable music streaming presence. Upload and share your music instantly with our trusted accounts.",
  "buy-verified-bluebird-accounts": "Purchase verified Bluebird by American Express accounts for secure prepaid banking. Our premium Bluebird accounts are fully verified, approved, and ready for immediate use. Perfect for individuals who need reliable prepaid card services with no monthly fees. Get instant delivery and full banking access.",
  "buy-verified-bank-of-america": "Purchase verified Bank of America accounts for premium US banking services. Our premium Bank of America accounts are fully verified, approved, and ready for immediate banking access. Perfect for businesses and individuals who need reliable US banking. Get instant delivery with full account access.",
  "buy-verified-wells-fargo-account": "Get verified Wells Fargo accounts for trusted US banking services. Our premium Wells Fargo accounts are fully verified, approved, and ready for immediate use. Perfect for businesses and individuals who need reliable banking with nationwide branch access. Start banking securely with our trusted accounts.",
  "buy-verified-paxful-accounts": "Purchase verified Paxful accounts for peer-to-peer cryptocurrency trading. Our premium Paxful accounts are fully KYC verified, approved, and ready for immediate trading. Perfect for crypto traders who need flexible payment methods and global trading access. Start buying and selling crypto instantly.",
  "buy-verified-alipay-accounts": "Get verified Alipay accounts for secure Chinese digital payments. Our premium Alipay accounts are fully verified and ready for immediate use. Perfect for businesses and individuals who need reliable payment access in China and Asia. Make secure transactions instantly with our trusted Alipay accounts.",
  "buy-verified-moonpay-accounts": "Purchase verified MoonPay accounts for instant cryptocurrency purchases. Our premium MoonPay accounts are fully verified, approved, and ready for immediate crypto buying. Perfect for investors who need fast and secure fiat-to-crypto conversion. Buy Bitcoin, Ethereum, and altcoins instantly.",
  "buy-verified-redotpay-accounts": "Get verified RedotPay accounts for crypto-to-fiat card services. Our premium RedotPay accounts are fully verified and ready for immediate use. Perfect for crypto holders who need seamless spending solutions. Convert and spend your cryptocurrency anywhere with our trusted RedotPay accounts.",
  "buy-verified-bittrex-account": "Purchase verified Bittrex accounts for secure cryptocurrency trading. Our premium Bittrex accounts are fully KYC verified, approved, and ready for immediate trading. Perfect for crypto traders who need reliable US-based exchange access. Trade hundreds of cryptocurrencies instantly with our trusted accounts.",
  "buy-verified-revolut-accounts": "Get verified Revolut accounts for modern digital banking and multi-currency support. Our premium Revolut accounts are fully verified and ready for immediate use. Perfect for international travelers, businesses, and individuals who need flexible banking. Access 150+ currencies with our trusted Revolut accounts.",
  "buy-verified-advcash-account": "Purchase verified AdvCash accounts for multi-currency e-wallet services. Our premium AdvCash accounts are fully verified, approved, and ready for immediate transactions. Perfect for businesses and individuals who need flexible payment solutions. Send, receive, and exchange money globally with our trusted accounts.",
  "buy-verified-2checkout-account": "Get verified 2Checkout (now Verifone) accounts for global payment processing. Our premium 2Checkout accounts are fully verified and ready for immediate merchant services. Perfect for online businesses and e-commerce who need reliable international payment solutions. Start accepting payments worldwide instantly.",
  "buy-verified-transferwise-account": "Purchase verified TransferWise (now Wise) accounts for low-cost international transfers. Our premium TransferWise accounts are fully verified and ready for global money transfers. Perfect for businesses and individuals who need reliable international payment solutions. Send money worldwide with minimal fees.",
  "buy-verified-perfect-money-account": "Get verified Perfect Money accounts for secure digital payments and currency exchange. Our premium Perfect Money accounts are fully verified and ready for immediate transactions. Perfect for online businesses, traders, and individuals who need flexible e-currency solutions. Make secure transactions instantly.",
  "buy-verified-webmoney-account": "Purchase verified WebMoney accounts for Russian and CIS digital payments. Our premium WebMoney accounts are fully verified and ready for immediate use. Perfect for businesses and individuals who need reliable payment access in Eastern Europe. Make secure transactions with our trusted WebMoney accounts.",
  "buy-google-reviews": "Get genuine Google reviews to boost your business reputation and local SEO rankings. Our premium Google review service provides real, verified reviews from authentic accounts. Perfect for businesses who want to build trust, attract customers, and improve their Google My Business profile. Instant delivery with natural review distribution.",
  "buy-google-business-reviews": "Purchase Google Business reviews to enhance your local business credibility. Our premium review service delivers authentic, high-quality reviews from real Google accounts. Perfect for local businesses, restaurants, and service providers who need positive reputation management. Boost your ratings and attract more customers.",
  "buy-google-5-star-reviews": "Get 5-star Google reviews to maximize your business reputation and customer trust. Our premium review service provides genuine positive reviews from verified Google users. Perfect for businesses who want to stand out with excellent ratings. Increase visibility, build credibility, and drive more sales with authentic 5-star reviews.",
};

// Get product by slug
export function getProductBySlug(slug: string): ProductData | null {
  return productsData[slug] || null;
}

// Get short description for a product
export function getProductShortDescription(slug: string): string | undefined {
  return productShortDescriptions[slug];
}

// Get all product slugs
export function getAllProductSlugs(): string[] {
  return Object.keys(productsData);
}
