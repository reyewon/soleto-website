import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.soleto.co.uk'),
  title: {
    default: 'Soleto | Italian Restaurant Southampton | Opposite Mayflower Theatre',
    template: '%s | Soleto Southampton',
  },
  description:
    'Family-run Italian restaurant in Southampton, opposite the Mayflower Theatre. Head chef George Jiojioras serves fresh seafood, handmade pasta and premium steaks with Mediterranean passion. Tue–Sat 12–22, Sun 12–20.',
  keywords: [
    'Italian restaurant Southampton',
    'Soleto Southampton',
    'best Italian Southampton',
    'seafood restaurant Southampton',
    'restaurant near Mayflower Theatre',
    'Commercial Road restaurant Southampton',
    'Italian bistro Southampton',
    'Mediterranean restaurant Southampton',
    'lobster Southampton',
    'oysters Southampton',
    'private dining Southampton',
    'pre-theatre dining Southampton',
    'handmade pasta Southampton',
    'family restaurant Southampton',
    'best restaurant Commercial Road',
  ],
  authors: [{ name: 'Soleto Bistro Trattoria Italiana' }],
  openGraph: {
    title: 'Soleto | Bistro Trattoria Italiana | Southampton',
    description:
      'Family-run Italian restaurant opposite the Mayflower Theatre. Fresh seafood, handmade pasta and premium steaks by head chef George Jiojioras.',
    url: 'https://www.soleto.co.uk',
    siteName: 'Soleto',
    locale: 'en_GB',
    images: [
      {
        url: '/images/hero-lobster.jpg',
        width: 2000,
        height: 1333,
        alt: 'Fresh lobster dish at Soleto Italian Restaurant Southampton',
      },
      {
        url: '/images/hero-interior.jpg',
        width: 2000,
        height: 1333,
        alt: 'Soleto restaurant interior, teal walls, gold frames and white linen',
      },
      {
        url: '/images/chef/george-cooking.jpg',
        width: 2000,
        height: 1333,
        alt: 'Head chef George Jiojioras preparing dishes at Soleto Southampton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soleto | Italian Restaurant Southampton',
    description:
      'Family-run Italian restaurant opposite the Mayflower Theatre. Fresh seafood, handmade pasta and premium steaks.',
    images: ['/images/hero-lobster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.soleto.co.uk',
    languages: {
      'en-GB': 'https://www.soleto.co.uk',
      'x-default': 'https://www.soleto.co.uk',
    },
  },
  other: {
    'geo.region': 'GB-HAM',
    'geo.placename': 'Southampton',
    'geo.position': '50.909036;-1.409485',
    'ICBM': '50.909036, -1.409485',
  },
}

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'LocalBusiness'],
  '@id': 'https://www.soleto.co.uk/#restaurant',
  name: 'Soleto | Bistro Trattoria Italiana, Southampton',
  alternateName: 'Soleto Southampton',
  description:
    'Family-run Italian restaurant in Southampton, opposite the Mayflower Theatre. Head chef George Jiojioras serves fresh seafood, handmade pasta and premium steaks with Mediterranean passion.',
  url: 'https://www.soleto.co.uk',
  telephone: '+442380234044',
  email: 'info@soleto.co.uk',
  image: [
    'https://www.soleto.co.uk/images/hero-lobster.jpg',
    'https://www.soleto.co.uk/images/hero-interior.jpg',
    'https://www.soleto.co.uk/images/chef/george-cooking.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Commercial Road',
    addressLocality: 'Southampton',
    addressRegion: 'Hampshire',
    postalCode: 'SO15 1GF',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.909036,
    longitude: -1.409485,
  },
  hasMap: 'https://maps.google.com/?q=Soleto+Bistro+Trattoria+Italiana,+11+Commercial+Road,+Southampton+SO15+1GF',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '12:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '12:00',
      closes: '20:00',
    },
  ],
  servesCuisine: ['Italian', 'Mediterranean', 'Seafood'],
  priceRange: '££',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'GBP',
  acceptsReservations: 'True',
  menu: 'https://www.soleto.co.uk/menu',
  hasMenu: 'https://www.soleto.co.uk/menu',
  sameAs: [
    'https://www.instagram.com/soletoitalian/',
    'https://www.facebook.com/SoletoItalianHampshire',
    'https://www.tripadvisor.com/Restaurant_Review-g186299-d8337696-Reviews-Soleto-Southampton_Hampshire_England.html',
    'https://www.visitsouthampton.co.uk/listing/soleto/258112101/',
  ],
  founder: [
    { '@type': 'Person', name: 'George Jiojioras' },
    { '@type': 'Person', name: 'Dominika Jiojioras' },
  ],
  foundingDate: '2015',
  award: [
    '#1 Best Restaurants in Southampton, The Tour Guy, 2025',
    'Top 5 Italian Restaurants in Southampton, Southampton Times',
    "TripAdvisor Travellers' Choice 2024",
    "TripAdvisor Travellers' Choice 2025",
    'Food Hygiene Rating 5/5, Southampton City Council',
    'Readers\' Choice: Most Deserving of Michelin Guide, Daily Echo, 2026',
    'Readers\' Choice: Best Seafood in Southampton, Daily Echo, 2025',
    'Readers\' Choice: Best Places for Dinner in Southampton, Daily Echo, 2024',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    bestRating: '5',
    ratingCount: '570',
    reviewCount: '570',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant',
    },
    result: {
      '@type': 'Reservation',
      name: 'Book a Table at Soleto',
    },
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.soleto.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://www.soleto.co.uk/menu/' },
    { '@type': 'ListItem', position: 3, name: 'Our Story', item: 'https://www.soleto.co.uk/our-story/' },
    { '@type': 'ListItem', position: 4, name: 'Gallery', item: 'https://www.soleto.co.uk/gallery/' },
    { '@type': 'ListItem', position: 5, name: 'Private Dining', item: 'https://www.soleto.co.uk/private-dining/' },
    { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://www.soleto.co.uk/contact/' },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Soleto | Bistro Trattoria Italiana, Southampton',
  url: 'https://www.soleto.co.uk',
  description:
    'Family-run Italian restaurant in Southampton, opposite the Mayflower Theatre. Fresh seafood, handmade pasta and premium steaks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f3ece0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..700,0..100,0..1;1,9..144,300..700,0..100,0..1&family=Inter+Tight:ital,wght@0,200..700;1,200..700&display=swap" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Restaurant-specific OG address properties */}
        <meta property="og:type" content="restaurant" />
        <meta property="restaurant:contact_info:street_address" content="11 Commercial Road" />
        <meta property="restaurant:contact_info:locality" content="Southampton" />
        <meta property="restaurant:contact_info:region" content="Hampshire" />
        <meta property="restaurant:contact_info:postal_code" content="SO15 1GF" />
        <meta property="restaurant:contact_info:country_name" content="United Kingdom" />
        <meta property="restaurant:contact_info:phone_number" content="+442380234044" />
        <meta property="place:location:latitude" content="50.909036" />
        <meta property="place:location:longitude" content="-1.409485" />

        {/* LLM-optimised content link */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM-optimised site summary" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans">
        <SmoothScroll />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
