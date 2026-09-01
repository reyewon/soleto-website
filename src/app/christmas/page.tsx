import type { Metadata } from 'next'
import ChristmasContent from './ChristmasContent'

export const metadata: Metadata = {
  title: 'Christmas Menu 2026',
  description:
    'Christmas 2026 at Soleto, Southampton: set menu with four choices per course, lunch from £38 and dinner £50 for three courses. Parties of six or more, pre-order only, £10 deposit per person. Opposite the Mayflower Theatre.',
  keywords: [
    'Christmas menu Southampton',
    'Christmas dinner Southampton',
    'Christmas party Southampton restaurant',
    'Italian Christmas menu Southampton',
    'festive menu Southampton',
    'Christmas lunch Southampton',
    'Christmas meal near Mayflower Theatre',
    'Soleto Christmas menu 2026',
  ],
  alternates: {
    canonical: 'https://www.soleto.co.uk/christmas/',
  },
  openGraph: {
    title: 'Christmas Menu 2026 | Soleto Trattoria Italiana',
    description:
      'Set Christmas menu at Soleto, Southampton. Lunch from £38, dinner £50 for three courses. Parties of six or more, pre-order only.',
    url: 'https://www.soleto.co.uk/christmas/',
    images: [
      {
        url: '/images/og-christmas.jpg',
        alt: 'Christmas at Soleto, Southampton',
      },
    ],
  },
}

const christmasMenuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': 'https://www.soleto.co.uk/christmas/#menu',
  name: 'Soleto Christmas Menu 2026',
  url: 'https://www.soleto.co.uk/christmas/',
  inLanguage: 'en-GB',
  description:
    'Set Christmas menu with four choices at each of three courses. Lunch £38 for two courses or £45 for three; dinner £50 for three courses. Parties of six or more, pre-order only, £10 deposit per person, 10% service charge.',
  provider: { '@id': 'https://www.soleto.co.uk/#restaurant' },
  offers: [
    { '@type': 'Offer', name: 'Christmas lunch, two courses', price: '38', priceCurrency: 'GBP', eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 6, unitText: 'guests' } },
    { '@type': 'Offer', name: 'Christmas lunch, three courses', price: '45', priceCurrency: 'GBP', eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 6, unitText: 'guests' } },
    { '@type': 'Offer', name: 'Christmas dinner, three courses', price: '50', priceCurrency: 'GBP', eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 6, unitText: 'guests' } },
  ],
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Starters',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Roasted Butternut Squash Soup', description: 'Spiced cinnamon, ciabatta crostini', suitableForDiet: ['https://schema.org/VegetarianDiet', 'https://schema.org/VeganDiet'] },
        { '@type': 'MenuItem', name: 'Italian Charcuterie', description: 'Grana Padano, rocket, pine nuts, balsamic and crostini' },
        { '@type': 'MenuItem', name: 'Classic Prawn and Crab Cocktail', description: 'Toasted ciabatta and butter' },
        { '@type': 'MenuItem', name: 'Whipped Feta and Ricotta', description: 'Pickled courgette shavings, toasted chickpeas', suitableForDiet: 'https://schema.org/VegetarianDiet' },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Mains',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Roast Turkey Paupiette', description: 'Sage and onion stuffing, pig in blanket, sauté potatoes, mixed veg and turkey jus' },
        { '@type': 'MenuItem', name: 'Classic Beef Bourguignon al Barolo', description: 'Creamy mash, mixed veg' },
        { '@type': 'MenuItem', name: 'Fish and Shellfish Medley', description: 'Bouillabaisse style' },
        { '@type': 'MenuItem', name: 'Roast Cauliflower', description: 'Saffron risotto', suitableForDiet: ['https://schema.org/VegetarianDiet', 'https://schema.org/VeganDiet'] },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Desserts',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Classic Tiramisu' },
        { '@type': 'MenuItem', name: 'Salted Caramel and Chocolate Tart', description: 'Vanilla ice cream' },
        { '@type': 'MenuItem', name: 'Panettone Pudding', description: 'Cinnamon custard' },
        { '@type': 'MenuItem', name: 'Basque Vanilla Cheesecake', description: 'Red fruit coulis' },
      ],
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to pre-order the Christmas menu at Soleto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Christmas menu is pre-order only. Everyone in the party chooses their courses before the day; Soleto sends the menu round once the table is booked.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a minimum party size for the Christmas menu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Christmas menu is for parties of six or more. Smaller tables are welcome and can order from the regular menu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a deposit for Christmas bookings at Soleto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A £10 deposit per person holds the table, taken when you book. A 10% service charge is added to the total bill on the day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Soleto Christmas menu have vegetarian or vegan dishes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The roasted butternut squash soup and the roast cauliflower with saffron risotto are both vegetarian and vegan. Allergies and other dietary needs can be discussed when booking.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(christmasMenuJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ChristmasContent />
    </>
  )
}
