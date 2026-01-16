// Short meta descriptions for SEO (160 characters max)
// These are loaded immediately and don't block page rendering

export const metaDescriptions: Record<string, string> = {
  "buy-gmail-accounts":
    "Buy verified Gmail accounts for your business. PVA accounts with instant delivery, 24/7 support, and 100% satisfaction guarantee.",
  "buy-old-gmail-accounts":
    "Purchase aged Gmail accounts for enhanced credibility. Verified, active accounts with full replacement guarantee and secure delivery.",
  "buy-old-yahoo-account":
    "Buy old Yahoo accounts with established history. Aged accounts with verified status, full access, and instant delivery for business use.",
  "buy-outlook-account":
    "Purchase Outlook accounts for professional email communication. Verified Microsoft Outlook accounts with instant delivery and full access.",
  "buy-facebook-ads-accounts":
    "Buy Facebook Ads accounts with spending limits. Pre-verified, ready to use, with full replacement guarantee and instant delivery.",
  "buy-usa-facebook-accounts":
    "Purchase USA Facebook accounts with real profiles. Phone verified, aged accounts with complete security and instant access.",
  "buy-facebook-account-with-5000-friends":
    "Buy Facebook accounts with 5000+ friends. Real, active profiles with full verification and guaranteed authenticity.",
  "buy-linkedin-account":
    "Get verified LinkedIn accounts for professional networking. Aged profiles with connections, full access, and instant delivery.",
  "buy-twitter-accounts":
    "Buy Twitter accounts with followers. Verified, aged profiles with activity history and full replacement guarantee.",
  "buy-instagram-accounts":
    "Purchase Instagram accounts with followers. Active, verified profiles with engagement history and secure delivery.",
  "buy-sendgrid-accounts":
    "Buy SendGrid accounts for email marketing. Verified, ready to use with API access and full customer support.",
  "buy-verified-paypal-accounts":
    "Get verified PayPal accounts for secure payments. Fully verified with bank linkage, instant access and money-back guarantee.",
  "buy-verified-payoneer-accounts":
    "Buy verified Payoneer accounts for global payments. Ready to use with full verification and 24/7 support.",
  "buy-verified-cash-app-account":
    "Purchase verified Cash App accounts. Fully functional with bank linkage, instant delivery and replacement guarantee.",
  "buy-chime-bank-accounts":
    "Buy Chime bank accounts for online banking. Verified accounts with debit cards and full access to all features.",
  "buy-verified-onlyfans-accounts":
    "Get verified OnlyFans accounts for content creation. Ready to monetize with full verification and instant access.",
  "buy-verified-skrill-accounts":
    "Buy verified Skrill accounts for online payments. Fully verified with document approval and instant delivery.",
  "buy-verified-bluebird-accounts":
    "Purchase verified Bluebird accounts by American Express. Ready to use with card delivery and full support.",
  "buy-verified-luno-account":
    "Get verified Luno accounts for crypto trading. Fully KYC verified with instant access and secure delivery.",
  "buy-verified-bank-of-america":
    "Buy Bank of America accounts for secure banking. Verified accounts with full online access and 24/7 support.",
  "buy-verified-wells-fargo-account":
    "Purchase Wells Fargo accounts for trusted banking. Verified with online banking access and instant delivery.",
  "buy-verified-chase-bank-account":
    "Get Chase Bank accounts for premium banking. Verified accounts with debit cards and full online access.",
  "buy-verified-paxful-accounts":
    "Buy verified Paxful accounts for Bitcoin trading. Fully verified with ID approval and instant access.",
  "buy-verified-apple-pay-accounts":
    "Purchase verified Apple Pay accounts. Ready to use with card linkage and secure contactless payments.",
  "buy-verified-alipay-accounts":
    "Get verified Alipay accounts for Chinese market. Fully verified with bank linkage and instant delivery.",
  "buy-verified-moonpay-accounts":
    "Buy verified MoonPay accounts for crypto purchases. KYC verified with instant access and secure delivery.",
  "buy-verified-redotpay-accounts":
    "Purchase verified RedotPay accounts for crypto payments. Fully verified with card access and 24/7 support.",
  "buy-verified-bittrex-account":
    "Get verified Bittrex accounts for crypto trading. Fully KYC approved with instant access and secure delivery.",
  "buy-verified-revolut-accounts":
    "Buy verified Revolut accounts for modern banking. Fully verified with card delivery and instant access.",
  "buy-verified-advcash-account":
    "Purchase verified AdvCash accounts for online payments. Fully verified with multi-currency support.",
  "buy-verified-2checkout-account":
    "Get verified 2Checkout accounts for merchant services. Approved for payment processing with instant setup.",
  "buy-verified-transferwise-account":
    "Buy verified Wise (TransferWise) accounts for global transfers. Fully verified with low fees and instant access.",
  "buy-verified-perfect-money-account":
    "Purchase verified Perfect Money accounts. Fully verified with instant transfers and 24/7 support.",
  "buy-verified-webmoney-account":
    "Get verified WebMoney accounts for online payments. Fully verified with multi-currency wallet access.",
  "buy-google-voice-accounts":
    "Buy Google Voice accounts with US phone numbers. Verified accounts with call/SMS features and instant delivery.",
  "buy-google-ads-account":
    "Purchase Google Ads accounts with credit balance. Pre-verified, ready for advertising campaigns with instant access.",
  "buy-verified-coinbase-accounts":
    "Get verified Coinbase accounts for crypto trading. Fully KYC verified with bank linkage and instant access.",
  "buy-verified-binance-accounts":
    "Buy verified Binance accounts for global crypto trading. Fully verified with high limits and secure delivery.",
  "buy-google-reviews":
    "Purchase authentic Google reviews for your business. Real reviewers with verified accounts and natural delivery.",
  "buy-google-business-reviews":
    "Get Google Business Profile reviews to boost visibility. Genuine reviews from verified accounts with safe delivery.",
  "buy-google-5-star-reviews":
    "Buy 5-star Google reviews to improve your rating. Authentic reviews from real users with guaranteed retention.",
  "buy-soundcloud-accounts":
    "Get SoundCloud accounts for music promotion. Aged accounts with followers, plays, and full access for instant use.",
  "buy-naver-account":
    "Buy Naver accounts for Korean market access. Verified accounts with full features and instant delivery.",
};

// Get meta description for a product (with fallback)
export function getMetaDescription(slug: string, title: string): string {
  return (
    metaDescriptions[slug] ||
    `Buy ${title} with instant delivery. Verified accounts with 24/7 support, replacement guarantee, and secure payment options.`
  );
}
