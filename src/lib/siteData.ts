// Centralised site data, single source of truth for SEO, structured data, and content
export const SITE = {
  name: 'Soleto Trattoria Italiana',
  shortName: 'Soleto',
  tagline: 'Trattoria Italiana',
  description:
    'Family-run Italian restaurant in Southampton, opposite the Mayflower Theatre. Head chef George Jiojioras serves fresh seafood, handmade pasta and premium steaks with Mediterranean passion. Summer evenings: Tuesday to Saturday, 17:00 to 22:00.',
  url: 'https://www.soleto.co.uk',
  email: 'info@soleto.co.uk',
  telephone: '+442380234044',
  telephoneDisplay: '023 8023 4044',
  bookingUrl:
    'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant',
} as const

export const ADDRESS = {
  streetAddress: '11 Commercial Road',
  addressLocality: 'Southampton',
  addressRegion: 'Hampshire',
  postalCode: 'SO15 1GF',
  addressCountry: 'GB',
  countryName: 'United Kingdom',
} as const

export const GEO = {
  latitude: 50.909036,
  longitude: -1.409485,
  region: 'GB-HAM',
  placename: 'Southampton',
} as const

export const HOURS = {
  display: [
    { days: 'Tue to Sat', hours: '17 to 22' },
    { days: 'Sun & Mon', hours: 'Closed' },
  ],
  // Summer pattern: evenings only, Tue-Sat. Closed Sun + Mon.
  // Lunches return in September.
  schema: [
    {
      '@type': 'OpeningHoursSpecification' as const,
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '17:00',
      closes: '22:00',
    },
  ],
  note: 'Special hours may apply on theatre nights and bank holidays; please call to confirm.',
} as const

export const SOCIAL = {
  instagram: 'https://www.instagram.com/soletoitalian/',
  facebook: 'https://www.facebook.com/SoletoItalianHampshire',
  tripadvisor:
    'https://www.tripadvisor.com/Restaurant_Review-g186299-d8337696-Reviews-Soleto-Southampton_Hampshire_England.html',
} as const

export const RATINGS = {
  google: { value: '4.7', count: '570', best: '5' },
  tripadvisor: { value: '4.5', count: '990', best: '5' },
} as const

export const AWARDS = [
  '#1 Best Restaurants in Southampton, The Tour Guy, 2025',
  'Top 5 Italian Restaurants in Southampton, Southampton Times',
  "TripAdvisor Travellers' Choice 2024",
  "TripAdvisor Travellers' Choice 2025",
  'Food Hygiene Rating 5/5, Southampton City Council',
  "Readers' Choice: Most Deserving of Michelin Guide, Daily Echo, 2026",
  "Readers' Choice: Best Seafood in Southampton, Daily Echo, 2025",
  "Readers' Choice: Best Places for Dinner in Southampton, Daily Echo, 2024",
] as const

export const CUISINE = ['Italian', 'Mediterranean', 'Seafood'] as const

export const FOUNDERS = [
  { name: 'George Jiojioras', role: 'Head Chef' },
  { name: 'Dominika Jiojioras', role: 'Front of House' },
] as const

export const BRAND = {
  themeColor: '#847958',
  bgColor: '#fbf8f6',
  priceRange: '££',
  foundingYear: '2017',
} as const

export const IMAGES = {
  hero: '/images/hero-spread.jpg',
  lobster: '/images/hero-lobster.jpg',
  interior: '/images/hero-interior.jpg',
  chef: '/images/chef/george-cooking.jpg',
} as const

// Pages for sitemap, breadcrumbs, and navigation
export const PAGES = [
  { path: '/', label: 'Home', priority: '1.0', changefreq: 'daily' },
  { path: '/menu/', label: 'Menu', priority: '0.9', changefreq: 'weekly' },
  { path: '/our-story/', label: 'Our Story', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery/', label: 'Gallery', priority: '0.7', changefreq: 'monthly' },
  { path: '/private-dining/', label: 'Private Dining & Catering', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact/', label: 'Contact', priority: '0.8', changefreq: 'monthly' },
] as const
