import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.avivaageless.rs';
  return {
    rules: {
      userAgent: '*',
      disallow: ['/anti-aging', '/usluge/anti-aging'],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

