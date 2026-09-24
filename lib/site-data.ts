export type RouteInfo = { path: string; title: string; description: string; eyebrow?: string };

const groups: Record<string, string[]> = {
  About: ['who-we-are', 'vision-mission', 'heritage', 'leadership', 'board', 'projects', 'jv-subsidiaries', 'corporate-governance', 'rti', 'vigilance', 'awards'],
  Operations: ['refineries', 'pipelines', 'retail', 'lpg', 'aviation', 'supply-distribution', 'projects'],
  Business: ['refineries', 'retail', 'lpg', 'lubricants', 'aviation', 'direct-sales', 'projects-pipelines', 'pipeline-projects', 'engineering-projects', 'supplies-distribution', 'international-trade', 'natural-gas-renewables', 'petrochemicals', 'research-development'],
  Sustainability: ['health', 'safety', 'environment'],
  Investors: ['shareholders', 'reports', 'annual-reports', 'shareholder-profile', 'share-price', 'crude-oil-price', 'dividend', 'postal-ballot', 'agm', 'institutional-meets', 'investors-guide', 'buyback', 'policies', 'stock-exchange'],
  Careers: ['jobs', 'life-at-company', 'contact'],
  Media: ['press-releases', 'announcements', 'gallery', 'videos'],
};

const nice = (s: string) => s.split('-').map(x => x[0]?.toUpperCase() + x.slice(1)).join(' & ');
export const routes: RouteInfo[] = [
  ...Object.entries(groups).flatMap(([group, slugs]) => [
    { path: `/${group.toLowerCase()}`, title: group === 'Business' ? 'Our Businesses' : group, description: `Explore ${group.toLowerCase()} at Northstar Energy.`, eyebrow: group },
    ...slugs.map(slug => ({ path: `/${group.toLowerCase()}/${slug}`, title: nice(slug), description: `Learn about ${nice(slug).toLowerCase()} across our energy network.`, eyebrow: group })),
  ]),
  { path: '/operations', title: 'Our Operations', description: 'An integrated network built to keep essential energy moving.', eyebrow: 'Operations' },
  { path: '/csr', title: 'Community & Impact', description: 'Working alongside communities for shared, lasting progress.', eyebrow: 'Our impact' },
  { path: '/media', title: 'Media centre', description: 'Stories, updates and perspectives from Northstar Energy.', eyebrow: 'Media' },
  { path: '/newsroom', title: 'Newsroom', description: 'The latest stories and updates from our teams.', eyebrow: 'Media' },
  { path: '/quick-links', title: 'Quick links', description: 'Find common services and information in one place.', eyebrow: 'Useful links' },
  { path: '/contact', title: 'Contact us', description: 'Connect with the right team at Northstar Energy.', eyebrow: 'Get in touch' },
  { path: '/complaints-feedback', title: 'Complaints & feedback', description: 'Share feedback with our independent demo company.', eyebrow: 'Get in touch' },
  { path: '/search', title: 'Search', description: 'Search this demonstration website.', eyebrow: 'Explore' },
];

export const businesses = [
  ['Refining', 'Turning a diverse energy mix into the materials and fuels that modern life depends on.'],
  ['Retail', 'Thoughtful service experiences for people and businesses on the move.'],
  ['LPG', 'Reliable gas solutions designed around homes, hospitality and industry.'],
  ['Lubricants', 'Protection and performance for equipment across demanding environments.'],
  ['Aviation', 'Supporting the movement of people and goods through dependable services.'],
  ['Direct sales', 'Flexible supply relationships built around the needs of enterprise customers.'],
  ['Projects & pipelines', 'Connecting assets through considered engineering and delivery.'],
  ['Engineering', 'Practical expertise for complex energy infrastructure.'],
  ['Natural gas & renewables', 'Exploring a broader, lower-carbon energy portfolio.'],
  ['Petrochemicals', 'Creating versatile building blocks for essential industries.'],
  ['Research & development', 'Curiosity and collaboration applied to real-world energy challenges.'],
  ['International trade', 'Connecting global supply with regional demand.'],
];

export const updates = [
  { type: 'Perspective', date: '18 September 2026', title: 'Designing energy systems around the communities they serve' },
  { type: 'Company update', date: '10 September 2026', title: 'Northstar publishes its first transition pathways discussion paper' },
  { type: 'People', date: '02 September 2026', title: 'A new generation of engineers brings fresh ideas to the field' },
];

export const pathTitle = (path: string) => routes.find(x => x.path === path);
