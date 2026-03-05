import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Soleto | Italian Restaurant Southampton | Opposite Mayflower Theatre',
    template: '%s | Soleto Southampton',
  },
  description:
    'Authentic Italian dining in Southampton. Family-run bistro trattoria specialising in fresh seafood, handmade pasta & premium steaks. Steps from the Mayflower Theatre on Commercial Road. Book your table today.',
  keywords: [
    'Italian restaurant Southampton',
    'Soleto Southampton',
    'best Italian Southampton',
    'seafood restaurant Southampton',
    'restaurant near Mayflower Theatre',
    'Commercial Road restaurant',
    'Italian bistro Southampton',
    'fine dining Southampton',
    'lobster Southampton',
    'oysters Southampton',
    'private dining Southampton',
    'pre-theatre dining Southampton',
  ],
  openGraph: {
    title: 'Soleto | Bistro Trattoria Italiana | Southampton',
    description:
      'Authentic Italian dining in Southampton. Family-run bistro trattoria specialising in fresh seafood, handmade pasta & premium steaks.',
    url: 'https://www.soleto.co.uk',
    siteName: 'Soleto',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/hero-lobster.jpg',
        width: 2000,
        height: 1333,
        alt: 'Soleto Italian Restaurant - Fresh Lobster',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soleto | Italian Restaurant Southampton',
    description: 'Authentic Italian dining steps from the Mayflower Theatre',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.soleto.co.uk',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Soleto Bistro Trattoria Italiana',
  image: 'https://www.soleto.co.uk/images/hero-lobster.jpg',
  url: 'https://www.soleto.co.uk',
  telephone: '+442380234044',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 Commercial Road',
    addressLocality: 'Southampton',
    postalCode: 'SO15 1GF',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.9097,
    longitude: -1.4044,
  },
  servesCuisine: ['Italian', 'Mediterranean', 'Seafood'],
  priceRange: '$$-$$$',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '570',
    bestRating: '5',
  },
  hasMenu: 'https://www.soleto.co.uk/menu',
  acceptsReservations: 'True',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
