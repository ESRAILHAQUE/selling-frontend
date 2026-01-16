// Auto-generated index for product descriptions
// Each product description is in a separate file for optimal code splitting

// Import all descriptions statically
import * as buyGmailAccounts from "./descriptions/buy-gmail-accounts";
import * as buyOldGmailAccounts from "./descriptions/buy-old-gmail-accounts";
import * as buyOldYahooAccount from "./descriptions/buy-old-yahoo-account";
import * as buyOutlookAccount from "./descriptions/buy-outlook-account";
import * as buyFacebookAdsAccounts from "./descriptions/buy-facebook-ads-accounts";
import * as buyUsaFacebookAccounts from "./descriptions/buy-usa-facebook-accounts";
import * as buyFacebookAccountWith5000Friends from "./descriptions/buy-facebook-account-with-5000-friends";
import * as buyLinkedinAccount from "./descriptions/buy-linkedin-account";
import * as buyTwitterAccounts from "./descriptions/buy-twitter-accounts";
import * as buyInstagramAccounts from "./descriptions/buy-instagram-accounts";
import * as buySendgridAccounts from "./descriptions/buy-sendgrid-accounts";
import * as buyVerifiedPaypalAccounts from "./descriptions/buy-verified-paypal-accounts";
import * as buyVerifiedPayoneerAccounts from "./descriptions/buy-verified-payoneer-accounts";
import * as buyVerifiedCashAppAccount from "./descriptions/buy-verified-cash-app-account";
import * as buyChimeBankAccounts from "./descriptions/buy-chime-bank-accounts";
import * as buyVerifiedOnlyfansAccounts from "./descriptions/buy-verified-onlyfans-accounts";
import * as buyVerifiedSkrillAccounts from "./descriptions/buy-verified-skrill-accounts";
import * as buyVerifiedBluebirdAccounts from "./descriptions/buy-verified-bluebird-accounts";
import * as buyVerifiedLunoAccount from "./descriptions/buy-verified-luno-account";
import * as buyVerifiedBankOfAmerica from "./descriptions/buy-verified-bank-of-america";
import * as buyVerifiedWellsFargoAccount from "./descriptions/buy-verified-wells-fargo-account";
import * as buyVerifiedChaseBankAccount from "./descriptions/buy-verified-chase-bank-account";
import * as buyVerifiedPaxfulAccounts from "./descriptions/buy-verified-paxful-accounts";
import * as buyVerifiedApplePayAccounts from "./descriptions/buy-verified-apple-pay-accounts";
import * as buyVerifiedAlipayAccounts from "./descriptions/buy-verified-alipay-accounts";
import * as buyVerifiedMoonpayAccounts from "./descriptions/buy-verified-moonpay-accounts";
import * as buyVerifiedRedotpayAccounts from "./descriptions/buy-verified-redotpay-accounts";
import * as buyVerifiedBittrexAccount from "./descriptions/buy-verified-bittrex-account";
import * as buyVerifiedRevolutAccounts from "./descriptions/buy-verified-revolut-accounts";
import * as buyVerifiedAdvcashAccount from "./descriptions/buy-verified-advcash-account";
import * as buyVerified2checkoutAccount from "./descriptions/buy-verified-2checkout-account";
import * as buyVerifiedTransferwiseAccount from "./descriptions/buy-verified-transferwise-account";
import * as buyVerifiedPerfectMoneyAccount from "./descriptions/buy-verified-perfect-money-account";
import * as buyVerifiedWebmoneyAccount from "./descriptions/buy-verified-webmoney-account";
import * as buyGoogleVoiceAccounts from "./descriptions/buy-google-voice-accounts";
import * as buyGoogleAdsAccount from "./descriptions/buy-google-ads-account";
import * as buyVerifiedCoinbaseAccounts from "./descriptions/buy-verified-coinbase-accounts";
import * as buyVerifiedBinanceAccounts from "./descriptions/buy-verified-binance-accounts";
import * as buyGoogleReviews from "./descriptions/buy-google-reviews";
import * as buyGoogleBusinessReviews from "./descriptions/buy-google-business-reviews";
import * as buyGoogle5StarReviews from "./descriptions/buy-google-5-star-reviews";
import * as buySoundcloudAccounts from "./descriptions/buy-soundcloud-accounts";
import * as buyNaverAccount from "./descriptions/buy-naver-account";

// Map slugs to description modules
const descriptionModules: Record<string, { description: string }> = {
  "buy-gmail-accounts": buyGmailAccounts,
  "buy-old-gmail-accounts": buyOldGmailAccounts,
  "buy-old-yahoo-account": buyOldYahooAccount,
  "buy-outlook-account": buyOutlookAccount,
  "buy-facebook-ads-accounts": buyFacebookAdsAccounts,
  "buy-usa-facebook-accounts": buyUsaFacebookAccounts,
  "buy-facebook-account-with-5000-friends": buyFacebookAccountWith5000Friends,
  "buy-linkedin-account": buyLinkedinAccount,
  "buy-twitter-accounts": buyTwitterAccounts,
  "buy-instagram-accounts": buyInstagramAccounts,
  "buy-sendgrid-accounts": buySendgridAccounts,
  "buy-verified-paypal-accounts": buyVerifiedPaypalAccounts,
  "buy-verified-payoneer-accounts": buyVerifiedPayoneerAccounts,
  "buy-verified-cash-app-account": buyVerifiedCashAppAccount,
  "buy-chime-bank-accounts": buyChimeBankAccounts,
  "buy-verified-onlyfans-accounts": buyVerifiedOnlyfansAccounts,
  "buy-verified-skrill-accounts": buyVerifiedSkrillAccounts,
  "buy-verified-bluebird-accounts": buyVerifiedBluebirdAccounts,
  "buy-verified-luno-account": buyVerifiedLunoAccount,
  "buy-verified-bank-of-america": buyVerifiedBankOfAmerica,
  "buy-verified-wells-fargo-account": buyVerifiedWellsFargoAccount,
  "buy-verified-chase-bank-account": buyVerifiedChaseBankAccount,
  "buy-verified-paxful-accounts": buyVerifiedPaxfulAccounts,
  "buy-verified-apple-pay-accounts": buyVerifiedApplePayAccounts,
  "buy-verified-alipay-accounts": buyVerifiedAlipayAccounts,
  "buy-verified-moonpay-accounts": buyVerifiedMoonpayAccounts,
  "buy-verified-redotpay-accounts": buyVerifiedRedotpayAccounts,
  "buy-verified-bittrex-account": buyVerifiedBittrexAccount,
  "buy-verified-revolut-accounts": buyVerifiedRevolutAccounts,
  "buy-verified-advcash-account": buyVerifiedAdvcashAccount,
  "buy-verified-2checkout-account": buyVerified2checkoutAccount,
  "buy-verified-transferwise-account": buyVerifiedTransferwiseAccount,
  "buy-verified-perfect-money-account": buyVerifiedPerfectMoneyAccount,
  "buy-verified-webmoney-account": buyVerifiedWebmoneyAccount,
  "buy-google-voice-accounts": buyGoogleVoiceAccounts,
  "buy-google-ads-account": buyGoogleAdsAccount,
  "buy-verified-coinbase-accounts": buyVerifiedCoinbaseAccounts,
  "buy-verified-binance-accounts": buyVerifiedBinanceAccounts,
  "buy-google-reviews": buyGoogleReviews,
  "buy-google-business-reviews": buyGoogleBusinessReviews,
  "buy-google-5-star-reviews": buyGoogle5StarReviews,
  "buy-soundcloud-accounts": buySoundcloudAccounts,
  "buy-naver-account": buyNaverAccount,
};

/**
 * Get a product description synchronously
 * All descriptions are now imported statically for better performance
 */
export async function getProductDescription(slug: string): Promise<string> {
  try {
    const module = descriptionModules[slug];
    if (!module) {
      console.warn(`Description not found for: ${slug}`);
      return "";
    }
    return module.description || "";
  } catch (error) {
    console.error(`Failed to load description for: ${slug}`, error);
    return "";
  }
}

/**
 * Synchronous version - now returns the actual description
 */
export function getProductDescriptionSync(slug: string): string {
  try {
    const module = descriptionModules[slug];
    if (!module) {
      return "";
    }
    return module.description || "";
  } catch (error) {
    console.error(`Failed to load description for: ${slug}`, error);
    return "";
  }
}

/**
 * Check if a description exists
 */
export function hasDescription(slug: string): boolean {
  return slug in descriptionModules;
}

/**
 * List of all available product slugs
 */
export const availableProducts = [
  "buy-gmail-accounts",
  "buy-old-gmail-accounts",
  "buy-old-yahoo-account",
  "buy-outlook-account",
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
  "buy-soundcloud-accounts",
  "buy-naver-account",
  "buy-verified-bybit-account",
  "buy-verified-crypto-com-account",
  "buy-verified-wise-accounts",
  "buy-verified-stripe-accounts",
  "buy-verified-go2bank-accounts",
  "buy-verified-venmo-accounts",
  "buy-walmart-seller-account",
];
