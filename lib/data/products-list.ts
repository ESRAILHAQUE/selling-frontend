// Product data for all dropdown menu items
// This will be replaced with real data later
import { seoDescriptions } from "./seo-descriptions";

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
    description:
      seoDescriptions[slug] ||
      `${title}\nIf you're looking to ${title.toLowerCase()}, you've come to the right place. With our team of experts, we can help you get the most out of your account. We understand that managing accounts requires expertise and reliability. That's why we provide comprehensive services and support. With our help, you can rest assured that your account will be effective and reliable. ${title}.\n\nWhat is ${title}?\n${title} is a service that enables you to access and manage your account effectively. It is a powerful tool that allows you to easily manage your needs and track performance. With the help of ${title}, you can reach your goals with tailored solutions and track the results. This helps you understand which strategies work best and optimize accordingly.\n\nWhy choose us?\nWe provide reliable, verified accounts with full support. Our accounts are tested and ready to use. We offer 24/7 customer support and guarantee satisfaction. All our accounts come with replacement guarantee and are fully verified.`,
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
    description: `Buy Gmail Accounts - Premium Quality PVA Gmail Accounts for Sale

Are you looking to buy Gmail accounts for your business, marketing campaigns, or personal use? You've come to the right place! At USA Markets SMM, we offer premium quality, verified Gmail accounts at the most competitive prices in the market. Whether you need bulk Gmail accounts for marketing, multiple Gmail accounts for business operations, or aged Gmail accounts for better credibility, we have the perfect solution for you.

Why Buy Gmail Accounts from USA Markets SMM?

When you buy Gmail accounts from us, you're getting more than just email addresses. You're investing in high-quality, verified accounts that come with numerous benefits. Our Gmail accounts are phone verified (PVA), fully functional, and ready to use immediately upon delivery. We understand the importance of reliable email accounts for your business success, which is why we ensure every account meets the highest quality standards.

Our Gmail accounts are perfect for various purposes including email marketing, social media account creation, business communications, SEO campaigns, YouTube channel management, Google Ads campaigns, and much more. Each account is created with unique IP addresses, ensuring maximum security and reducing the risk of getting flagged or banned.

What Makes Our Gmail Accounts Special?

100% Phone Verified Accounts (PVA): Every Gmail account we sell is phone verified, which means it has passed Google's verification process. This ensures higher trust and better deliverability rates for your emails.

Aged Gmail Accounts Available: We offer both new and aged Gmail accounts. Aged accounts (2-12 years old) come with better credibility and are less likely to be flagged by Google's security systems.

USA, UK, and Canada Accounts: Our Gmail accounts are created using phone numbers from major English-speaking countries including the United States, United Kingdom, and Canada, providing better legitimacy for your business operations.

Replacement Guarantee: We stand behind the quality of our products. If any account faces issues within 30 days of purchase, we provide free replacement - no questions asked.

Instant Delivery: Once your payment is confirmed, we deliver your Gmail accounts within 24 hours. For smaller orders, delivery is often immediate.

Secure and Private: All our Gmail accounts are created using secure methods with unique recovery information. Your privacy and security are our top priorities.

24/7 Customer Support: Our dedicated support team is available round the clock via email, Telegram, and WhatsApp to assist you with any questions or concerns.

Benefits of Using Multiple Gmail Accounts

Multiple Gmail accounts offer numerous advantages for businesses and individuals alike. Here are some key benefits:

Email Marketing: Send targeted email campaigns without worrying about daily sending limits. Multiple accounts allow you to scale your email marketing efforts effectively.

Social Media Management: Create and manage multiple social media accounts across platforms like Facebook, Instagram, Twitter, LinkedIn, and more. Each platform requires a unique email for registration.

YouTube Channel Creation: Build your YouTube empire by creating and managing multiple channels. Each channel needs its own Gmail account for proper management.

SEO and Link Building: Gmail accounts are essential for blog commenting, forum posting, guest posting, and other white-hat SEO activities that require email verification.

Business Operations: Separate your business communications by department, project, or client. This helps maintain organization and professionalism.

Online Privacy: Use different Gmail accounts for different online activities to maintain better privacy and security of your personal information.

Google Services Access: Gmail accounts give you access to all Google services including Google Drive, Google Docs, Google Sheets, Google Ads, Google My Business, and more.

How to Use Gmail Accounts Effectively?

When you buy Gmail accounts from us, it's important to use them properly to ensure longevity and avoid any issues. Here are some best practices:

Warm Up New Accounts: If you're using accounts for email marketing, start with low sending volumes and gradually increase to avoid triggering spam filters.

Use Proxy or VPN: When managing multiple accounts, use different IP addresses to prevent Google from linking them together.

Enable Two-Factor Authentication: Add an extra layer of security to your accounts by enabling 2FA.

Regular Activity: Keep your accounts active by logging in regularly and performing normal activities like sending emails, using Google Drive, etc.

Avoid Spam Activities: Never use Gmail accounts for sending unsolicited emails or spam. This can result in account suspension.

Maintain Unique Content: When using accounts for marketing, ensure each account sends unique, valuable content rather than duplicate messages.

Our Gmail Account Packages

We offer flexible packages to suit different needs and budgets:

05 Gmail Accounts - $15: Perfect for individuals or small businesses just starting out. Get 5 high-quality Gmail accounts to test our service and quality.

20 Gmail Accounts - $50: Ideal for small to medium businesses and marketers who need multiple accounts for various campaigns and operations.

50 Gmail Accounts - $100: Our most popular package for serious marketers and businesses. Scale your operations with 50 verified Gmail accounts.

100 Gmail Accounts - $180: Designed for agencies and large businesses that need bulk Gmail accounts for extensive marketing campaigns and operations.

200 Gmail Accounts - $250: Our premium bulk package for enterprises and power users. Get the best value with 200 high-quality Gmail accounts.

All packages come with the same high-quality standards and our 30-day replacement guarantee.

What's Included with Each Gmail Account?

When you purchase Gmail accounts from USA Markets SMM, each account includes:

- Email address and password
- Recovery email (if requested)
- Phone verified status
- Account creation date
- Complete login credentials
- Access to all Google services
- Detailed account information document
- Setup instructions and best practices guide

Industries That Benefit from Multiple Gmail Accounts

Our Gmail accounts are used by professionals across various industries:

Digital Marketing Agencies: Manage multiple client campaigns, social media accounts, and email marketing operations efficiently.

E-commerce Businesses: Create multiple buyer accounts for testing, manage customer service operations, and handle multiple store locations.

SEO Professionals: Build high-quality backlinks, manage blog comments, forum profiles, and other SEO activities that require email verification.

Social Media Managers: Create and manage multiple social media profiles for clients across different platforms.

Content Creators: Manage multiple YouTube channels, blogs, and content platforms with separate Gmail accounts for better organization.

Developers and Testers: Test applications, websites, and software that require multiple email accounts for registration and testing purposes.

Online Marketers: Run multiple advertising campaigns, create landing pages, and manage affiliate marketing operations.

Researchers: Conduct market research, competitive analysis, and data collection activities that require multiple email accounts.

Frequently Asked Questions (FAQ)

Q: Are these Gmail accounts safe to use?
A: Yes, absolutely! All our Gmail accounts are created following Google's terms of service using legitimate methods. They are phone verified and fully functional.

Q: How quickly will I receive my accounts?
A: For most orders, delivery is within 1-24 hours after payment confirmation. Larger orders may take up to 48 hours.

Q: What if an account stops working?
A: We provide a 30-day replacement guarantee. If any account faces issues within this period, contact us and we'll replace it immediately.

Q: Can I use these accounts for email marketing?
A: Yes, you can use them for legitimate email marketing. However, we recommend warming up the accounts first and always following email marketing best practices to avoid spam complaints.

Q: Do you provide recovery information?
A: Yes, we provide complete login credentials including recovery information when available.

Q: Are the accounts phone verified?
A: Yes, all our Gmail accounts are phone verified (PVA), which ensures better trust and deliverability.

Q: Can I change the password and recovery information?
A: Absolutely! Once you receive the accounts, you have full control to change passwords, add recovery emails, and enable two-factor authentication.

Q: Do you offer refunds?
A: We offer a 30-day replacement guarantee rather than refunds. This ensures you get working accounts rather than just your money back.

Why Choose USA Markets SMM?

With years of experience in the digital services industry, USA Markets SMM has become a trusted name for buying Gmail accounts and other digital services. Here's why thousands of customers choose us:

Proven Track Record: We've served thousands of satisfied customers across the globe with our high-quality Gmail accounts.

Quality Assurance: Every account goes through multiple quality checks before delivery to ensure it meets our strict standards.

Competitive Pricing: We offer the best prices in the market without compromising on quality. Our bulk packages provide excellent value for money.

Secure Transactions: We accept multiple payment methods including cryptocurrency for enhanced privacy and security.

No Hidden Fees: The price you see is the price you pay. No hidden charges or surprise fees.

Continuous Support: Our relationship doesn't end after the sale. We provide ongoing support to ensure your success with our accounts.

Regular Updates: We stay updated with the latest changes in Google's policies and adjust our methods accordingly to ensure account quality.

Ethical Business Practices: We operate with complete transparency and honesty. Your satisfaction and success are our top priorities.

How to Order Gmail Accounts?

Ordering Gmail accounts from USA Markets SMM is simple and straightforward:

1. Select Your Package: Choose the package that best fits your needs from our options above.
2. Add to Cart: Click the "Add to Cart" button and proceed to checkout.
3. Provide Details: Fill in your contact information and any specific requirements you may have.
4. Complete Payment: Choose your preferred payment method and complete the transaction securely.
5. Receive Accounts: Check your email for delivery within 24 hours. We'll send you a detailed document with all account information.
6. Start Using: Log in to your new Gmail accounts and start using them for your business or personal needs.

Contact Us for Custom Orders

Need more than 200 Gmail accounts? Have specific requirements like aged accounts, accounts from specific countries, or accounts with certain features? Contact us directly and we'll create a custom package just for you.

Our team is available 24/7 to assist you:
- Email: hello@usamarketsmm.com
- Telegram: @Usamarketsmm
- WhatsApp: +1(712)298-2593
- Website: https://usamarketsmm.com

Security and Privacy

We take your security and privacy seriously. All transactions are processed securely, and we never share your information with third parties. Your Gmail accounts are delivered via secure channels, and we maintain strict confidentiality regarding your purchases.

Start Growing Your Business Today

Don't let the lack of email accounts hold back your business growth. Whether you're running email marketing campaigns, managing multiple social media accounts, or need Gmail accounts for any other legitimate purpose, USA Markets SMM has you covered.

Our premium Gmail accounts provide the foundation you need to scale your operations, reach more customers, and grow your business effectively. With our competitive prices, quality guarantee, and excellent customer support, you're making a risk-free investment in your business success.

Buy Gmail accounts today and experience the difference that quality makes. Join thousands of satisfied customers who trust USA Markets SMM for their Gmail account needs.

Conclusion

In today's digital world, having multiple Gmail accounts is no longer a luxury—it's a necessity for business growth and success. Whether you're a solo entrepreneur, small business owner, digital marketing agency, or large enterprise, our Gmail accounts provide the reliability, security, and functionality you need to achieve your goals.

With our 100% phone verified accounts, 30-day replacement guarantee, instant delivery, and 24/7 customer support, buying Gmail accounts has never been easier or more secure. We've streamlined the entire process to ensure you get high-quality accounts quickly and hassle-free.

Take your business to the next level with premium Gmail accounts from USA Markets SMM. Order now and experience the difference that quality and reliability make in your digital operations.

Remember, we're not just selling Gmail accounts—we're providing you with the tools and support you need for long-term success. Contact us today to get started!`,
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
