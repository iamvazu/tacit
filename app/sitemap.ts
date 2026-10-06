import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacit.exchange';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sell',
    '/valuation',
    '/rights-check',
    '/how-it-works',
    '/security',
    '/buyers',
    '/pricing',
    '/refer',
    '/faq',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/seller-agreement',
    '/licence-terms',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/sell' || route === '/buyers' || route === '/valuation' ? 0.9 : 0.7,
  }));
}
