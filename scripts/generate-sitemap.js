// scripts/generate-sitemap.js
// Run with: node scripts/generate-sitemap.js
// Regenerates public/sitemap.xml from all static routes + content files.
// Run this locally before committing whenever you add new Insights or News articles.

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.anacruses.co.uk';
const TODAY = new Date().toISOString().split('T')[0];

// Static routes — update this list if you add new pages
const STATIC_ROUTES = [
  { path: '/',                  priority: '1.0', changefreq: 'weekly'  },
  { path: '/about/',            priority: '0.8', changefreq: 'monthly' },
  { path: '/contact/',          priority: '0.8', changefreq: 'monthly' },
  { path: '/sectors/',          priority: '0.7', changefreq: 'monthly' },
  { path: '/training/',         priority: '0.7', changefreq: 'monthly' },
  { path: '/resources/',        priority: '0.7', changefreq: 'monthly' },
  { path: '/insights/',         priority: '0.9', changefreq: 'weekly'  },
  { path: '/news/',             priority: '0.7', changefreq: 'weekly'  },
  { path: '/services/iso-9001/',        priority: '0.9', changefreq: 'monthly' },
  { path: '/services/iso-14001/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/services/iso-27001/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/services/iso-45001/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/services/iso-42001/',       priority: '0.9', changefreq: 'monthly' },
  { path: '/services/ukas-laboratory/', priority: '0.8', changefreq: 'monthly' },
];

// Dynamically read content directories
function getSlugsFromDir(dir) {
  const fullPath = path.join(__dirname, '..', 'content', dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''));
}

const insightsSlugs = getSlugsFromDir('insights');
const newsSlugs     = getSlugsFromDir('news');

const insightsRoutes = insightsSlugs.map(slug => ({
  path: `/insights/${slug}/`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const newsRoutes = newsSlugs.map(slug => ({
  path: `/news/${slug}/`,
  priority: '0.6',
  changefreq: 'monthly',
}));

const allRoutes = [...STATIC_ROUTES, ...insightsRoutes, ...newsRoutes];

const urls = allRoutes.map(r => `
  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`✅ sitemap.xml written to public/ — ${allRoutes.length} URLs`);
console.log(`   Static pages : ${STATIC_ROUTES.length}`);
console.log(`   Insights     : ${insightsRoutes.length}`);
console.log(`   News         : ${newsRoutes.length}`);
