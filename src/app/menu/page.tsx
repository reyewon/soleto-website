'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

interface MenuItem {
  name: string
  description: string
  price: string
  tag?: string
}

interface MenuSection {
  title: string
  subtitle?: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'Pane e Olive',
    subtitle: 'To Begin',
    items: [
      { name: 'Bread and Butter', description: 'Balsamic vinegar and olive oil', price: '6', tag: 'V' },
      { name: 'Mixed Olives', description: 'Marinated Italian olives', price: '5', tag: 'V' },
      { name: 'Garlic Ciabatta', description: 'Toasted with garlic butter', price: '6', tag: 'V' },
      { name: 'Bruschetta', description: 'Toasted ciabatta, fresh tomato, onions, basil and olive oil', price: '8', tag: 'V' },
      { name: 'Baked Camembert', description: 'Celery, garlic, rosemary, chutney and ciabatta', price: '19', tag: 'V' },
    ],
  },
  {
    title: 'Antipasti',
    subtitle: 'To Start',
    items: [
      { name: 'Affettato Misto', description: 'Selection of fine Italian cured meats, olives, gherkins, Grana Padano and toasted ciabatta', price: '16 / 22' },
      { name: 'Fresh Calamari', description: 'Deep fried squid rings with lemon-mustard mayo', price: '15 / 28' },
      { name: 'Risotto Fungi', description: 'Risotto with cream and Parmesan', price: '13', tag: 'V' },
      { name: 'Burrata', description: 'San Marzano tomatoes, basil, pesto, olive oil and toasted ciabatta', price: '15', tag: 'V' },
      { name: 'Capesante', description: 'Seared scallops, guanciale and creamy whole-grain mustard', price: '16' },
      { name: 'Gamberone Saganaki', description: 'King prawns gratin with feta, tomato, olive oil and ciabatta', price: '16' },
    ],
  },
  {
    title: 'Mains',
    subtitle: 'Il Secondo',
    items: [
      { name: 'Bistecca — Rib-Eye Steak', description: '10oz rib-eye, French fries, rocket salad and peppercorn sauce', price: '35 / 42' },
      { name: 'Salmone', description: 'Pan-roasted fresh salmon, mashed potato, roasted vegetables with creamy wholegrain mustard and pink peppercorn sauce', price: '26' },
      { name: 'Saltimbocca', description: 'Veal escalopes with Parma ham, sage, butter and white wine sauce — served with crushed potatoes and vegetables', price: '28' },
      { name: 'Pollo Soleto', description: 'Pan-roasted chicken breast topped with Parma ham and Taleggio cheese, creamy whole-grain mustard sauce — served with sautée potatoes and vegetables', price: '25 / 32' },
    ],
  },
  {
    title: 'Pasta e Risotto',
    subtitle: 'Handmade with Love',
    items: [
      { name: 'Pappardelle Ragu', description: 'Classic Bolognese', price: '19' },
      { name: 'Spaghetti Carbonara', description: 'Egg, guanciale, a touch of cream and Pecorino', price: '19' },
      { name: 'Ravioli Fungi', description: 'Mushroom ravioli with creamy leek and pine-nut pesto sauce', price: '19', tag: 'V' },
      { name: 'Rigatoni Chorizo', description: 'Chorizo, tomato, garlic and chilli', price: '19' },
      { name: 'Risotto Porcini', description: 'Wild mushroom, shallots and cream, topped with rocket', price: '20', tag: 'V' },
      { name: 'Linguini Frutti di Mare', description: 'Salmon, prawns, mussels and calamari in tomato and garlic sauce', price: '28' },
    ],
  },
  {
    title: 'Contorni',
    subtitle: 'Sides',
    items: [
      { name: 'Mashed Potato', description: '', price: '5' },
      { name: 'Sautée Potato', description: '', price: '5' },
      { name: 'French Fries', description: '', price: '5' },
      { name: 'Mixed Salad', description: '', price: '5' },
      { name: 'Green Beans', description: '', price: '5' },
      { name: 'Rocket and Parmesan', description: '', price: '5' },
    ],
  },
]

const dailySpecials = [
  'Oysters', 'Mussels', 'Lobster', 'Crab', 'Dover Sole', 'Hake',
  'Monkfish', 'Seabass', 'Tomahawk Steak', 'Fillet Steak',
  'Rack of Lamb', 'Veal T-Bone', 'Clams', 'Polpette',
]

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/food/oct-1.jpg"
          alt="Beautifully plated fish dish at Soleto"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-tagline text-gold-500">Soleto</p>
          <h1 className="font-serif text-h1 text-white mt-2">The Menu</h1>
        </div>
      </section>

      {/* Menu Intro */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              Our menu celebrates the finest Italian traditions with the freshest seasonal
              ingredients. Gluten free pasta is available for all pasta dishes.
              Please inform us of any dietary requirements or allergies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Sections */}
      {menuSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className="py-16 md:py-20 border-t"
          style={{
            backgroundColor: sectionIndex % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-tertiary)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="text-center mb-12">
                {section.subtitle && (
                  <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                    {section.subtitle}
                  </p>
                )}
                <h2 className="font-serif text-h2 mt-1" style={{ color: 'var(--text-primary)' }}>
                  {section.title}
                </h2>
                <div className="divider-gold" />
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 0.05}>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-xl md:text-[22px] font-medium"
                            style={{ color: 'var(--text-primary)' }}>
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[10px] tracking-[0.15em] uppercase font-semibold px-2 py-0.5 border"
                                style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.description}
                        </p>
                      )}
                    </div>
                    <p className="font-serif text-xl font-medium whitespace-nowrap"
                       style={{ color: 'var(--accent)' }}>
                      {item.price}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Daily Specials */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blackboard.jpg"
            alt="Daily specials blackboard"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline text-gold-500">
              From the Blackboard
            </p>
            <h2 className="font-serif text-h2 text-white mt-3 mb-4">
              Daily Specials
            </h2>
            <p className="text-white/70 mb-10 text-[17px] leading-[1.8]">
              Each day, George selects the finest seasonal and market-fresh ingredients
              for our specials board. Here are some of the dishes you might find:
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {dailySpecials.map((item) => (
                <span key={item} className="font-serif italic text-lg text-white/90">
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-white/50 text-sm mt-10 italic">
              Please note that specials may vary based on seasonal availability.
              Prices are displayed on the blackboard daily.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h2" style={{ color: 'var(--text-primary)' }}>
              Ready to Dine?
            </h2>
            <p className="mt-4 text-[17px]" style={{ color: 'var(--text-secondary)' }}>
              A discretionary 12.5% service charge will be added to the total bill.
            </p>
            <div className="mt-8">
              <a
                href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
