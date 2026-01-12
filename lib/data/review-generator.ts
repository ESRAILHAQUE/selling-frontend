// Realistic USA names pool (150 unique names)
export const usaNames = [
  // Male names
  "Michael Johnson", "Christopher Smith", "Matthew Williams", "Joshua Brown", "Daniel Jones",
  "Andrew Davis", "Joseph Miller", "Ryan Wilson", "Brandon Moore", "Nicholas Taylor",
  "Tyler Anderson", "Justin Thomas", "Kevin Jackson", "Robert White", "David Harris",
  "James Martin", "John Thompson", "William Garcia", "Richard Martinez", "Thomas Robinson",
  "Mark Clark", "Donald Rodriguez", "Steven Lewis", "Paul Lee", "Kenneth Walker",
  "Brian Hall", "George Allen", "Edward Young", "Jason Hernandez", "Ronald King",
  "Anthony Wright", "Kevin Lopez", "Jeffrey Hill", "Gary Scott", "Timothy Green",
  "Larry Adams", "Frank Baker", "Scott Nelson", "Eric Carter", "Stephen Mitchell",
  "Raymond Perez", "Gregory Roberts", "Patrick Turner", "Jack Phillips", "Dennis Campbell",
  
  // Female names
  "Jennifer Anderson", "Jessica Martinez", "Sarah Thompson", "Emily Johnson", "Amanda Williams",
  "Melissa Brown", "Michelle Davis", "Ashley Miller", "Stephanie Wilson", "Nicole Moore",
  "Elizabeth Taylor", "Rebecca Garcia", "Laura Rodriguez", "Kimberly White", "Lisa Martinez",
  "Mary Jackson", "Karen Thomas", "Nancy Harris", "Betty Martin", "Margaret Clark",
  "Patricia Lewis", "Sandra Lee", "Donna Walker", "Carol Hall", "Ruth Allen",
  "Sharon Young", "Angela King", "Deborah Wright", "Cynthia Lopez", "Kathleen Hill",
  "Amy Scott", "Shirley Green", "Anna Adams", "Brenda Baker", "Pamela Nelson",
  "Catherine Carter", "Virginia Mitchell", "Janet Perez", "Carolyn Roberts", "Rachel Turner",
  "Maria Phillips", "Heather Campbell", "Diane Parker", "Julie Evans", "Joyce Edwards",
  
  // More diverse names
  "Emma Richardson", "Olivia Cooper", "Sophia Reed", "Isabella Bailey", "Mia Howard",
  "Charlotte Ward", "Amelia Torres", "Harper Peterson", "Evelyn Gray", "Abigail Ramirez",
  "Emily James", "Ella Watson", "Avery Brooks", "Sofia Kelly", "Camila Sanders",
  "Aria Price", "Scarlett Bennett", "Victoria Wood", "Madison Barnes", "Luna Ross",
  "Grace Henderson", "Chloe Coleman", "Penelope Jenkins", "Riley Perry", "Layla Powell",
  "Zoey Long", "Nora Patterson", "Lily Hughes", "Eleanor Flores", "Hannah Washington",
  "Lillian Butler", "Addison Simmons", "Aubrey Foster", "Ellie Gonzales", "Stella Bryant",
  
  "Liam Murphy", "Noah Rivera", "Oliver Cooper", "Ethan Reed", "Lucas Bailey",
  "Mason Howard", "Logan Ward", "Alexander Torres", "Jackson Peterson", "Sebastian Gray",
  "Jack Ramirez", "Owen James", "Benjamin Watson", "Henry Brooks", "Theodore Kelly",
  "Samuel Sanders", "Leo Price", "Wyatt Bennett", "Isaac Wood", "Nathan Barnes",
  "Caleb Ross", "Ryan Henderson", "Christian Coleman", "Hunter Jenkins", "Elijah Perry",
  "Thomas Powell", "Aaron Long", "Charles Patterson", "Julian Hughes", "Isaiah Flores",
  "Landon Washington", "Gabriel Butler", "Anthony Simmons", "Dylan Foster", "Luke Gonzales",
  
  "Victoria Sanders", "Natalie Price", "Samantha Bennett", "Katherine Wood", "Alexis Barnes",
  "Brooklyn Ross", "Claire Henderson", "Audrey Coleman", "Savannah Jenkins", "Bella Perry",
  "Skylar Powell", "Genesis Long", "Naomi Patterson", "Elena Hughes", "Caroline Flores",
  "Violet Washington", "Kennedy Butler", "Ivy Simmons", "Autumn Foster", "Piper Gonzales",
  "Ruby Bryant", "Serenity Alexander", "Willow Griffin", "Everly Hayes", "Madelyn Myers"
];

// Email domains for realistic emails
const emailDomains = [
  "gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "aol.com",
  "icloud.com", "protonmail.com", "mail.com", "zoho.com", "gmx.com"
];

// Review templates with variations
const reviewTemplates = [
  {
    rating: 5,
    templates: [
      "Excellent service! {product} are working perfectly. Fast delivery and great customer support. Highly recommended!",
      "Very satisfied with my purchase. All {product_plural} are verified and active. The replacement guarantee gives me peace of mind. Will definitely order again!",
      "Outstanding quality! These {product_plural} exceeded my expectations. Customer service was very helpful throughout the process.",
      "Perfect {product}! Everything works exactly as described. Quick delivery and the accounts are in great condition. Very happy with this purchase.",
      "Amazing experience from start to finish. The {product_plural} are high quality and the support team was incredibly responsive. 5 stars!",
      "Couldn't be happier! The {product_plural} I bought are exactly what I needed. Professional service and fast delivery. Highly recommend!",
      "Best purchase I've made in a while! {product} work flawlessly. Great communication and super fast delivery. Will buy again!",
      "Fantastic service! The {product_plural} are top quality and delivered quickly. Customer support answered all my questions. Very satisfied!",
      "Extremely pleased with the quality. {product} arrived quickly and everything is working perfectly. Great value for money!",
      "Top-notch service! The {product_plural} are exactly as advertised. Fast delivery, great support, and excellent quality. Highly recommended!"
    ]
  },
  {
    rating: 5,
    templates: [
      "I've been using these {product_plural} for my business and they're fantastic. Reliable, verified, and great customer service. Worth every penny!",
      "Super impressed! {product} work great for my marketing campaigns. The team was professional and delivery was instant. Will order more soon!",
      "These {product_plural} are game-changers for my projects. Quality is excellent and support is available 24/7. Can't recommend enough!",
      "Genuine {product_plural} at competitive prices. Everything works smoothly and the replacement guarantee is reassuring. Very professional service!",
      "Ordered multiple times now and always satisfied. {product} are reliable and customer service is outstanding. My go-to provider!",
      "Excellent {product_plural}! Been using them for weeks without any issues. Fast delivery and helpful support team. Five stars!",
      "Best quality {product_plural} I've found online. Verified, reliable, and backed by great customer service. Very happy customer!",
      "These {product_plural} work perfectly for my needs. Professional service, quick delivery, and responsive support. Highly satisfied!",
      "Premium quality {product}! Everything is as described. The team is helpful and delivery was faster than expected. Recommended!",
      "Great experience overall! {product} are authentic and work perfectly. Customer support is friendly and professional. Will buy again!"
    ]
  },
  {
    rating: 4,
    templates: [
      "Good quality {product_plural} at reasonable prices. Delivery was quick and the accounts are working as expected. Minor issue with one account but it was replaced quickly.",
      "Solid service. The {product} I received work well. Had a small question and support responded promptly. Would purchase again.",
      "Very good {product_plural}. Everything works fine. Delivery took a bit longer than expected but quality makes up for it. Satisfied overall.",
      "Quality {product} at fair prices. One account needed replacement but customer service handled it professionally. Happy with the purchase.",
      "Good experience. {product_plural} are working well for my projects. Support was helpful when I had questions. Recommended!",
      "Reliable {product_plural}. Had a minor technical question and the support team helped me out quickly. Good value for money.",
      "The {product} work as advertised. Delivery was reasonably fast and quality is good. Would recommend to others.",
      "Satisfied with my order. {product_plural} are functioning properly. Customer service was responsive. Good overall experience.",
      "These {product_plural} meet my expectations. Quality is solid and support is helpful. Will consider ordering again in the future.",
      "Good quality {product}. Setup was straightforward and everything works. Support team is knowledgeable. Pleased with the purchase."
    ]
  }
];

// Generate a realistic email from a name
function generateEmail(name: string): string {
  const nameParts = name.toLowerCase().split(' ');
  const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  
  const patterns = [
    `${nameParts[0]}.${nameParts[1]}@${domain}`,
    `${nameParts[0]}${nameParts[1].charAt(0)}@${domain}`,
    `${nameParts[0].charAt(0)}${nameParts[1]}@${domain}`,
    `${nameParts[0]}${Math.floor(Math.random() * 999)}@${domain}`,
  ];
  
  return patterns[Math.floor(Math.random() * patterns.length)];
}

// Generate review text based on product
function generateReviewText(productTitle: string, templateGroup: typeof reviewTemplates[0]): string {
  const template = templateGroup.templates[Math.floor(Math.random() * templateGroup.templates.length)];
  
  // Extract product name for singular/plural forms
  const productName = productTitle.replace(/^Buy\s+/i, '').trim();
  const productPlural = productName.endsWith('s') ? productName : productName + 's';
  
  return template
    .replace('{product}', productName)
    .replace('{product_plural}', productPlural);
}

// Generate random date within last 90 days
function generateRandomDate(): string {
  const now = Date.now();
  const ninetyDaysAgo = now - (90 * 24 * 60 * 60 * 1000);
  const randomTime = ninetyDaysAgo + Math.random() * (now - ninetyDaysAgo);
  return new Date(randomTime).toISOString();
}

// Seeded random number generator for consistency
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash) / 2147483647;
}

// Generate unique reviews for a product
export function generateProductReviews(productSlug: string, productTitle: string, count: number = 3): Array<{
  id: string;
  rating: number;
  review: string;
  name: string;
  email: string;
  date: string;
}> {
  const reviews = [];
  const usedNames = new Set<string>();
  
  // Use product slug as seed for consistency
  const baseSeed = productSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  for (let i = 0; i < count; i++) {
    // Get a unique name for this review
    let nameIndex;
    let name;
    do {
      nameIndex = Math.floor(seededRandom(productSlug + i + reviews.length) * usaNames.length);
      name = usaNames[nameIndex];
    } while (usedNames.has(name) && usedNames.size < usaNames.length);
    
    usedNames.add(name);
    
    // Determine rating (70% chance of 5 stars, 30% chance of 4 stars)
    const ratingRandom = seededRandom(productSlug + name + i);
    const rating = ratingRandom > 0.3 ? 5 : 4;
    
    // Get appropriate template group
    const templateGroup = reviewTemplates.find(t => t.rating === rating) || reviewTemplates[0];
    
    // Generate review
    const review = generateReviewText(productTitle, templateGroup);
    const email = generateEmail(name);
    const date = generateRandomDate();
    
    reviews.push({
      id: `review-${productSlug}-${i}`,
      rating,
      review,
      name,
      email,
      date
    });
  }
  
  // Sort by date (newest first)
  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
