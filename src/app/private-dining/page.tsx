import type { Metadata } from 'next'
import PrivateDiningContent from './PrivateDiningContent'

export const metadata: Metadata = {
  title: 'Private Dining & Catering',
  description:
    'Private dining room for up to 14 guests at Soleto Southampton, opposite the Mayflower Theatre. Private catering for 30+ guests across Hampshire by chef George Jiojioras: weddings, corporate events, milestone celebrations with bespoke Italian and Mediterranean menus.',
  keywords: [
    'private dining Southampton',
    'private catering Southampton',
    'wedding catering Hampshire',
    'corporate catering Southampton',
    'private dining room Southampton',
    'event catering Hampshire',
    'private chef Southampton',
    'wedding caterers Hampshire',
    'private dining Mayflower Theatre',
    'George Jiojioras catering',
  ],
  alternates: {
    canonical: 'https://www.soleto.co.uk/private-dining/',
  },
  openGraph: {
    title: 'Private Dining & Catering | Soleto Trattoria Italiana, Southampton',
    description:
      'Private dining room for up to 14 in Southampton. Off-site catering for 30+ across Hampshire by chef George Jiojioras. Bespoke Italian and Mediterranean menus for weddings, corporate dinners and family celebrations.',
    url: 'https://www.soleto.co.uk/private-dining/',
    images: [
      {
        url: '/images/og-private.jpg',
        alt: 'Soleto private dining room with crystal chandelier, Southampton',
      },
    ],
  },
}

const cateringServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.soleto.co.uk/private-dining/#catering-service',
  name: 'Private Catering by Soleto',
  serviceType: 'Private catering',
  description:
    'Bespoke private catering for weddings, corporate events, anniversaries, milestone birthdays and family celebrations across Southampton, Hampshire and surrounding areas. Italian and Mediterranean menus designed by chef patron George Jiojioras for groups of 30 or more.',
  provider: { '@id': 'https://www.soleto.co.uk/#restaurant' },
  areaServed: [
    { '@type': 'City', name: 'Southampton' },
    { '@type': 'AdministrativeArea', name: 'Hampshire' },
    { '@type': 'AdministrativeArea', name: 'South Hampshire' },
  ],
  offers: {
    '@type': 'Offer',
    description:
      'Bespoke quotation per event. Menu and pricing agreed in conversation with the chef.',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Event types catered',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding catering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate event catering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anniversary catering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Milestone birthday catering' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private family celebration catering' } },
    ],
  },
}

const privateDiningServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.soleto.co.uk/private-dining/#private-dining-service',
  name: 'Private Dining Room at Soleto',
  serviceType: 'Private dining',
  description:
    'A dedicated private dining room at Soleto in Southampton, opposite the Mayflower Theatre. Seats up to 14 guests for birthdays, anniversaries, corporate dinners and intimate celebrations. Bespoke menu by chef patron George Jiojioras.',
  provider: { '@id': 'https://www.soleto.co.uk/#restaurant' },
  areaServed: { '@type': 'City', name: 'Southampton' },
  offers: {
    '@type': 'Offer',
    description: 'Available by arrangement. Menu agreed in advance with the chef.',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.soleto.co.uk/private-dining/#faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What kind of events does Soleto cater for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weddings, corporate dinners, anniversaries, milestone birthdays, family gatherings and private celebrations. Soleto caters both in its private dining room in Southampton and at the venue of your choice across Hampshire.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can the private dining room seat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Up to 14 guests seated, in a dedicated room separated from the main restaurant. For groups larger than 14, Soleto offers off-site private catering with no upper limit by arrangement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Soleto offer off-site private catering in Southampton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. George Jiojioras and the kitchen team cater off-site for groups of 30 or more across Southampton, Hampshire and the surrounding areas. Menu, service and timing are shaped around your event.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who designs the catering menu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Head chef and chef patron George Jiojioras designs every bespoke menu in conversation with you. Italian and Mediterranean by default, with fresh seafood and hand-rolled pasta as house signatures, plus full dietary flexibility (vegetarian, gluten-free and others on request).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I enquire about private dining or catering at Soleto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call 023 8023 4044 or email info@soleto.co.uk. Please share guest numbers, the date, any dietary needs, and whether you would like to dine in the private room at Soleto or have the team cater at your own venue.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privateDiningServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PrivateDiningContent />
    </>
  )
}
