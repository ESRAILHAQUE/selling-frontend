const fs = require('fs');
const path = require('path');

// Mapping of product slugs to image filenames
const productImageMap = {
  // Email Accounts
  'buy-gmail-accounts': 'Gmail Account.jpg',
  'buy-old-gmail-accounts': 'Old Gmail Account.jpg',
  'buy-social-security-number': 'Social Sequrity Number.jpg',
  
  // Social Accounts
  'buy-facebook-ads-accounts': 'Facebook Ads Account.jpg',
  'buy-usa-facebook-accounts': 'USA Facebook Account.jpg',
  'buy-facebook-account-with-5000-friends': 'Facebook Account With 5000 Friend.jpg',
  'buy-linkedin-account': 'LinkedIn Account.jpg',
  'buy-twitter-accounts': 'Twitter Account.jpg',
  'buy-instagram-accounts': 'Instagram Account.jpg',
  'buy-sendgrid-accounts': 'SendGrid Account.jpg',
  'buy-soundcloud-accounts': 'Sound Cloud Account.jpg',
  'buy-naver-account': 'Naver Account.jpg',
  
  // Bank Accounts
  'buy-verified-paypal-accounts': 'Verified PayPal Accounts.jpg',
  'buy-verified-payoneer-accounts': 'Verified Payoneer Accounts.jpg',
  'buy-verified-cash-app-account': 'Verified Cash App Account.jpg',
  'buy-chime-bank-accounts': 'Chime Bank Accounts.jpg',
  'buy-verified-onlyfans-accounts': 'Verified OnlyFans Accounts.jpg',
  'buy-verified-skrill-accounts': 'Verified Skrill Accounts.jpg',
  'buy-verified-bluebird-accounts': 'Verified Bluebird Accounts.jpg',
  'buy-verified-luno-account': 'Verified Luno Account.jpg',
  'buy-verified-bank-of-america': 'Verified Bank of America.jpg',
  'buy-verified-wells-fargo-account': 'Verified Wells Fargo Account.jpg',
  'buy-verified-chase-bank-account': 'Verified Chase Bank Account.jpg',
  
  // Premium Banking
  'buy-verified-paxful-accounts': 'Verified Paxful Accounts.jpg',
  'buy-verified-apple-pay-accounts': 'Verified Apple Pay Accounts.jpg',
  'buy-verified-alipay-accounts': 'Verified Alipay Accounts.jpg',
  'buy-verified-moonpay-accounts': 'Verified Moonpay Accounts.jpg',
  'buy-verified-redotpay-accounts': 'Verified RedotPay Accounts.jpg',
  'buy-verified-bittrex-account': 'Verified Bittrex Account.jpg',
  'buy-verified-revolut-accounts': 'Verified TransferWise Account.jpg', // Use TransferWise as similar
  'buy-verified-advcash-account': 'Verified Advcash Account.jpg',
  'buy-verified-2checkout-account': 'Verified 2CheckOut Account.jpg',
  'buy-verified-transferwise-account': 'Verified TransferWise Account.jpg',
  'buy-verified-perfect-money-account': 'Verified Perfect Money Account.jpg',
  'buy-verified-webmoney-account': 'Verified Webmoney Account.jpg',
  
  // Google
  'buy-google-voice-accounts': 'Gmail Account.jpg', // Use Gmail as fallback
  'buy-google-ads-account': 'Google Ads Account.jpg',
  'buy-verified-coinbase-accounts': 'Verified Coinbase Accounts.jpg',
  'buy-verified-binance-accounts': 'Verified Binance Accounts.jpg',
  
  // Reviews
  'buy-google-reviews': 'Google Reviews.jpg',
  'buy-google-business-reviews': 'Google Business Reviews.jpg',
  'buy-google-5-star-reviews': 'Google 5 Star Reviews.jpg',
  'buy-trustpilot-reviews': 'TrustPilot Reviews.jpg',
};

const photosDir = path.join(__dirname, '../../Photos');
const productsDir = path.join(__dirname, '../public/images/products');

// Ensure products directory exists
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Get all available image files
const availableImages = fs.readdirSync(photosDir).filter(f => f.endsWith('.jpg'));

console.log('Available images:', availableImages.length);
console.log('Products to map:', Object.keys(productImageMap).length);

// Copy and rename images
let copied = 0;
let notFound = 0;

for (const [slug, imageName] of Object.entries(productImageMap)) {
  const sourcePath = path.join(photosDir, imageName);
  const destPath = path.join(productsDir, `${slug}.jpg`);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied: ${imageName} -> ${slug}.jpg`);
    copied++;
  } else {
    // Try to find a similar image
    const similarImage = availableImages.find(img => 
      img.toLowerCase().includes(imageName.toLowerCase().split(' ')[0]) ||
      imageName.toLowerCase().includes(img.toLowerCase().split(' ')[0])
    );
    
    if (similarImage) {
      const similarPath = path.join(photosDir, similarImage);
      fs.copyFileSync(similarPath, destPath);
      console.log(`⚠ Used similar: ${similarImage} -> ${slug}.jpg (wanted: ${imageName})`);
      copied++;
    } else {
      console.log(`✗ Not found: ${imageName} (slug: ${slug})`);
      notFound++;
    }
  }
}

console.log(`\nSummary: ${copied} copied, ${notFound} not found`);

