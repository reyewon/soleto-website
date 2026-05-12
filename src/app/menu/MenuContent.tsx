'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

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
      { name: 'Bistecca, Rib-Eye Steak', description: '10oz rib-eye, French fries, rocket salad and peppercorn sauce', price: '35 / 42' },
      { name: 'Salmone', description: 'Pan-roasted fresh salmon, mashed potato, roasted vegetables with creamy wholegrain mustard and pink peppercorn sauce', price: '26' },
      { name: 'Saltimbocca', description: 'Veal escalopes with Parma ham, sage, butter and white wine sauce, served with crushed potatoes and vegetables', price: '28' },
      { name: 'Pollo Soleto', description: 'Pan-roasted chicken breast topped with Parma ham and Taleggio cheese, creamy whole-grain mustard sauce, served with sautée potatoes and vegetables', price: '25 / 32' },
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

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

export default function MenuContent() {
  return (
    <>
      {/* Hero, minimal */}
      <section data-nav-transparent className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <ParallaxBg>
          <Image
            src="/images/food/oct-1.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </ParallaxBg>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-h1" style={{ color: '#f3ece0' }}>
            The Menu
          </h1>
        </div>
      </section>

      {/* Menu intro, restrained body */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3.5rem, 12vh, 8rem)',
          paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        }}
      >
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p
              style={{
                fontSize: 'var(--step-body)',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
              }}
            >
              Daily specials are on the board inside. Gluten-free pasta available across every
              pasta dish. Let us know of any allergies or dietary needs when you book.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu sections */}
      {menuSections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className="border-t"
          style={{
            backgroundColor:
              sectionIndex % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
            borderColor: 'var(--border)',
            paddingTop: 'clamp(3.5rem, 10vh, 6rem)',
            paddingBottom: 'clamp(3.5rem, 10vh, 6rem)',
          }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2
                className="font-serif mb-12"
                style={{
                  fontSize: 'clamp(1.85rem, 3vw, 2.5rem)',
                  color: 'var(--text-primary)',
                }}
              >
                {section.title}
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 0.05}>
                  <div className="flex justify-between items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <h3
                          className="font-serif"
                          style={{
                            fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            lineHeight: 1.2,
                          }}
                        >
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span
                            style={{
                              fontFamily: 'Inter Tight, system-ui, sans-serif',
                              fontSize: '10px',
                              letterSpacing: '0.27em',
                              textTransform: 'uppercase',
                              fontWeight: 500,
                              color: 'var(--text-muted)',
                            }}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p
                          className="mt-1.5"
                          style={{
                            fontSize: 'var(--step-body)',
                            lineHeight: 1.55,
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                    <p
                      className="font-serif tabular whitespace-nowrap"
                      style={{
                        fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.price}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Daily Specials, italic over dark image */}
      <section
        data-nav-transparent
        className="relative overflow-hidden"
        style={{
          paddingTop: 'clamp(4.5rem, 16vh, 13rem)',
          paddingBottom: 'clamp(4.5rem, 16vh, 13rem)',
        }}
      >
        <ParallaxBg mode="banner">
          <Image
            src="/images/blackboard.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </ParallaxBg>
        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2
              className="font-serif italic"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                color: '#f3ece0',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                maxWidth: '22ch',
                textWrap: 'balance',
              }}
            >
              George writes the specials board each morning. A short list of what just came in.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 max-w-3xl">
              {dailySpecials.map((item) => (
                <span
                  key={item}
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(15px, 1.1vw, 18px)',
                    color: '#f3ece0',
                    fontWeight: 420,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p
              className="mt-10"
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 400,
                color: '#f3ece0',
                opacity: 0.7,
              }}
            >
              Specials change daily, by season and availability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing: quiet reserve line */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 14vh, 10rem)',
          paddingBottom: 'clamp(4rem, 14vh, 10rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  maxWidth: '36ch',
                }}
              >
                A discretionary 12.5% service charge is added to the total bill.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  textDecoration: 'underline',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '0.18em',
                  alignSelf: 'flex-end',
                }}
              >
                Reserve a table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
