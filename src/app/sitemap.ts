import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.avivaageless.rs';
  const routes = [
    '/',
    '/about',
    '/nase-usluge',
    '/blog',
    '/contact',
    '/cenovnik',
    '/nas-tim',
    '/portfolio',
    '/portfolio-details',
    '/blog-details',
    '/usluge/hijaluronski-fileri',
    '/usluge/botox',
    '/usluge/skinboosteri',
    '/usluge/prp',
    '/usluge/lipoliza',
    '/usluge/mezoterapija',
    '/usluge/savetovanja',
    '/prp',
    '/skinboosteri',
    '/botox',
    '/mezoterapija',
    '/lipoliza',
    '/savetovanja',
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}

