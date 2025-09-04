import fs from 'fs';
import path from 'path';

const baseUrl = 'https://transx.dev';
const currentDate = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/#oversight', priority: '0.9', changefreq: 'monthly' },
  { path: '/#transx', priority: '0.9', changefreq: 'monthly' },
  { path: '/#warex', priority: '0.9', changefreq: 'monthly' },
  { path: '/#farmx', priority: '0.9', changefreq: 'monthly' },
  { path: '/#products', priority: '0.8', changefreq: 'monthly' },
  { path: '/#platform', priority: '0.8', changefreq: 'monthly' },
  { path: '/#solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/#company', priority: '0.7', changefreq: 'monthly' },
  { path: '/#about', priority: '0.6', changefreq: 'monthly' },
  { path: '/#contact', priority: '0.6', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}

</urlset>`;

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write sitemap to public directory
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
};

generateSitemap();