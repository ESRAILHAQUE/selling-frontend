#!/usr/bin/env node
/**
 * Check SEO description word counts in lib/data/seo-descriptions.ts
 *
 * Usage:
 *   node scripts/check-seo-content.js
 *   node scripts/check-seo-content.js --min 2000
 *   node scripts/check-seo-content.js --min 2000 --json
 */
const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const args = { min: null, json: false };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--json") args.json = true;
    else if (a === "--min") {
      const v = argv[i + 1];
      if (!v || Number.isNaN(Number(v))) {
        throw new Error("Invalid --min value. Example: --min 2000");
      }
      args.min = Number(v);
      i++;
    } else {
      throw new Error(`Unknown argument: ${a}`);
    }
  }
  return args;
}

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Naive parser for object entries of the form:
 *   "slug": `...`
 * Assumes backticks are not nested inside the template literal body.
 */
function extractTemplateEntries(fileText) {
  const re = /"([^"]+)"\s*:\s*`([\s\S]*?)`\s*,?/g;
  const entries = [];
  let m;
  while ((m = re.exec(fileText))) {
    entries.push({ slug: m[1], text: m[2] });
  }
  return entries;
}

function main() {
  const args = parseArgs(process.argv);
  const target = path.join(process.cwd(), "lib", "data", "seo-descriptions.ts");
  const fileText = fs.readFileSync(target, "utf8");
  const entries = extractTemplateEntries(fileText);

  const results = entries
    .map((e) => ({ slug: e.slug, words: wordCount(e.text) }))
    .sort((a, b) => a.words - b.words || a.slug.localeCompare(b.slug));

  if (args.json) {
    process.stdout.write(JSON.stringify({ total: results.length, results }, null, 2));
  } else {
    console.log(`SEO descriptions found: ${results.length}`);
    if (args.min != null) console.log(`Minimum required words: ${args.min}`);
    console.log("");
    console.log("Words\tSlug");
    console.log("-----\t----");
    for (const r of results) {
      const flag = args.min != null && r.words < args.min ? "  ❌" : "";
      console.log(`${r.words}\t${r.slug}${flag}`);
    }
  }

  if (args.min != null) {
    const failing = results.filter((r) => r.words < args.min);
    if (failing.length) {
      console.error(
        `\nFAIL: ${failing.length} description(s) are under ${args.min} words.`
      );
      process.exit(1);
    }
  }
}

try {
  main();
} catch (err) {
  console.error(String(err && err.message ? err.message : err));
  process.exit(1);
}

