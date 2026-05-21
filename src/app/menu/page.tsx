import type { Metadata } from 'next'
import MenuContent from './MenuContent'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore the Soleto menu, fresh seafood, handmade pasta, premium steaks and daily specials. Italian and Mediterranean dining in Southampton with gluten-free options available.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/menu/',
  },
  openGraph: {
    title: 'Menu | Soleto Trattoria Italiana',
    description:
      'Fresh seafood, handmade pasta, premium steaks and daily specials. Italian and Mediterranean dining in Southampton.',
    url: 'https://www.soleto.co.uk/menu/',
    images: [
      {
        url: '/images/og-menu.jpg',
        alt: 'Italian dishes at Soleto Southampton',
      },
    ],
  },
}

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Soleto Menu',
  description: 'Italian and Mediterranean menu featuring fresh seafood, handmade pasta and premium steaks',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Pane e Olive',
      description: 'Bread, olives and light bites to begin',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Bread and Butter', description: 'Balsamic vinegar and olive oil', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '6', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Mixed Olives', description: 'Marinated Italian olives', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Garlic Ciabatta', description: 'Toasted with garlic butter', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '6', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Bruschetta', description: 'Toasted ciabatta, fresh tomato, onions, basil and olive oil', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '8', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Baked Camembert', description: 'Celery, garlic, rosemary, chutney and ciabatta', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '19', priceCurrency: 'GBP' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Antipasti',
      description: 'Italian starters including cured meats, seafood and risotto',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Affettato Misto', description: 'Selection of fine Italian cured meats, olives, gherkins, Grana Padano and toasted ciabatta', offers: { '@type': 'Offer', price: '16', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Fresh Calamari', description: 'Deep fried squid rings with lemon-mustard mayo', offers: { '@type': 'Offer', price: '15', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Risotto Fungi', description: 'Risotto with cream and Parmesan', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '13', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Burrata', description: 'San Marzano tomatoes, basil, pesto, olive oil and toasted ciabatta', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '15', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Capesante', description: 'Seared scallops, guanciale and creamy whole-grain mustard', offers: { '@type': 'Offer', price: '16', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Gamberone Saganaki', description: 'King prawns gratin with feta, tomato, olive oil and ciabatta', offers: { '@type': 'Offer', price: '16', priceCurrency: 'GBP' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Mains',
      description: 'Premium steaks, fresh fish and Italian main courses',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Bistecca, Rib-Eye Steak', description: '10oz rib-eye, French fries, rocket salad and peppercorn sauce', offers: { '@type': 'Offer', price: '35', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Salmone', description: 'Pan-roasted fresh salmon, mashed potato, roasted vegetables with creamy wholegrain mustard and pink peppercorn sauce', offers: { '@type': 'Offer', price: '26', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Saltimbocca', description: 'Veal escalopes with Parma ham, sage, butter and white wine sauce, served with crushed potatoes and vegetables', offers: { '@type': 'Offer', price: '28', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Pollo Soleto', description: 'Pan-roasted chicken breast topped with Parma ham and Taleggio cheese, creamy whole-grain mustard sauce, served with sautée potatoes and vegetables', offers: { '@type': 'Offer', price: '25', priceCurrency: 'GBP' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Pasta e Risotto',
      description: 'Handmade pasta and risotto dishes',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Pappardelle Ragu', description: 'Classic Bolognese', offers: { '@type': 'Offer', price: '19', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Spaghetti Carbonara', description: 'Egg, guanciale, a touch of cream and Pecorino', offers: { '@type': 'Offer', price: '19', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Ravioli Fungi', description: 'Mushroom ravioli with creamy leek and pine-nut pesto sauce', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '19', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Rigatoni Chorizo', description: 'Chorizo, tomato, garlic and chilli', offers: { '@type': 'Offer', price: '19', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Risotto Porcini', description: 'Wild mushroom, shallots and cream, topped with rocket', suitableForDiet: 'https://schema.org/VegetarianDiet', offers: { '@type': 'Offer', price: '20', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Linguini Frutti di Mare', description: 'Salmon, prawns, mussels and calamari in tomato and garlic sauce', offers: { '@type': 'Offer', price: '28', priceCurrency: 'GBP' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Contorni',
      description: 'Side dishes',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Mashed Potato', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Sautée Potato', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'French Fries', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Mixed Salad', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Green Beans', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
        { '@type': 'MenuItem', name: 'Rocket and Parmesan', offers: { '@type': 'Offer', price: '5', priceCurrency: 'GBP' } },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <MenuContent />
    </>
  )
}
