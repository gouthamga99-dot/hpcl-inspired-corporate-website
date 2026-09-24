import type { MetadataRoute } from 'next';
import { routes } from '@/lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path }) => ({ url: `https://northstar-energy-demo.vercel.app${path}`, lastModified: new Date('2026-09-24'), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.7 }));
}
