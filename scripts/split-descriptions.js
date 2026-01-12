/**
 * Split the massive seo-descriptions.ts file into separate files
 * This creates one file per product for optimal code splitting
 * 
 * BENEFITS:
 * - Only load description when needed (true lazy loading)
 * - Smaller bundle size
 * - Better code splitting by Next.js
 * - Faster page loads
 * - Browser stays responsive
 */

const fs = require('fs');
const path = require('path');

const sourceFile = path.join(process.cwd(), 'lib', 'data', 'seo-descriptions.ts');
const outputDir = path.join(process.cwd(), 'lib', 'data', 'descriptions');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('📖 Reading seo-descriptions.ts...');
const content = fs.readFileSync(sourceFile, 'utf-8');

// Extract the object content
const match = content.match(/export const seoDescriptions: Record<string, string> = \{([\s\S]*)\};/);
if (!match) {
  console.error('❌ Could not parse seo-descriptions.ts');
  process.exit(1);
}

const objectContent = match[1];

// Split by product entries
// Each entry looks like: "product-slug": `content...`,
const productRegex = /"([^"]+)":\s*`([\s\S]*?)`,?\n\n/g;
let productMatch;
let count = 0;
const productSlugs = [];

console.log('✂️  Splitting into separate files...\n');

while ((productMatch = productRegex.exec(objectContent)) !== null) {
  const slug = productMatch[1];
  const description = productMatch[2];
  
  // Create individual file
  const filename = `${slug}.ts`;
  const filepath = path.join(outputDir, filename);
  
  const fileContent = `// SEO description for ${slug}
// Auto-generated from seo-descriptions.ts
// This file enables code splitting and lazy loading

export const description = \`${description}\`;
`;
  
  fs.writeFileSync(filepath, fileContent, 'utf-8');
  productSlugs.push(slug);
  count++;
  
  const size = Math.round(description.length / 1024);
  console.log(`✅ ${slug.padEnd(45)} (${size} KB)`);
}

console.log(`\n📝 Total: ${count} product descriptions split`);

// Create index file for easy importing
const indexContent = `// Auto-generated index for product descriptions
// Each product description is in a separate file for optimal code splitting

/**
 * Dynamically import a product description
 * This enables true lazy loading - only the needed description loads
 */
export async function getProductDescription(slug: string): Promise<string> {
  try {
    // Dynamic import enables code splitting
    const module = await import(\`.\/descriptions/\${slug}\`);
    return module.description || '';
  } catch (error) {
    console.warn(\`Description not found for: \${slug}\`);
    return '';
  }
}

/**
 * Synchronous version for server-side rendering
 * Note: This will still load only one file, not all 43
 */
export function getProductDescriptionSync(slug: string): string {
  try {
    const module = require(\`.\/descriptions/\${slug}\`);
    return module.description || '';
  } catch (error) {
    console.warn(\`Description not found for: \${slug}\`);
    return '';
  }
}

/**
 * Check if a description exists
 */
export function hasDescription(slug: string): boolean {
  const fs = require('fs');
  const path = require('path');
  const filepath = path.join(__dirname, 'descriptions', \`\${slug}.ts\`);
  return fs.existsSync(filepath);
}

/**
 * List of all available product slugs
 */
export const availableProducts = [
${productSlugs.map(slug => `  "${slug}"`).join(',\n')}
];
`;

const indexPath = path.join(process.cwd(), 'lib', 'data', 'descriptions-split.ts');
fs.writeFileSync(indexPath, indexContent, 'utf-8');

console.log(`\n✅ Created descriptions-split.ts index file`);
console.log(`\n📊 Summary:`);
console.log(`   - Original file: 456 KB (1 massive file)`);
console.log(`   - Split into: ${count} separate files (~10 KB each)`);
console.log(`   - Benefits: Only load what you need!`);
console.log(`\n🎯 Next steps:`);
console.log(`   1. Update products-list.ts to use descriptions-split.ts`);
console.log(`   2. (Optional) Delete old seo-descriptions.ts`);
console.log(`   3. Enjoy faster page loads! 🚀`);
