/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://medogram.ir'
module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  outDir: 'out',
}

