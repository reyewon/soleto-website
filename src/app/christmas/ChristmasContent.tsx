'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'
import { SITE } from '@/lib/siteData'

/* Christmas 2026 set menu. Source of truth is the PDF Simone sent on
   1 Sep 2026 (public/docs/soleto-christmas-menu-2026.pdf). Keep the two in
   lockstep: if the kitchen changes a dish, change it here AND swap the PDF. */

type Dish = { name: string; description?: string; tag?: string }
type Course = { title: string; dishes: Dish[] }

const courses: Course[] = [
  {
    title: 'Starters',
    dishes: [
      { name: 'Roasted Butternut Squash Soup', description: 'Spiced cinnamon, ciabatta crostini', tag: 'v / vg' },
      { name: 'Italian Charcuterie', description: 'Grana Padano, rocket, pine nuts, balsamic and crostini' },
      { name: 'Classic Prawn and Crab Cocktail', description: 'Toasted ciabatta and butter' },
      { name: 'Whipped Feta and Ricotta', description: 'Pickled courgette shavings, toasted chickpeas' },
    ],
  },
  {
    title: 'Mains',
    dishes: [
      {
        name: 'Roast Turkey Paupiette',
        description: 'Sage and onion stuffing, pig in blanket, sauté potatoes, mixed veg and turkey jus',
      },
      { name: 'Classic Beef Bourguignon al Barolo', description: 'Creamy mash, mixed veg' },
      { name: 'Fish and Shellfish Medley', description: 'Bouillabaisse style' },
      { name: 'Roast Cauliflower', description: 'Saffron risotto', tag: 'v / vg' },
    ],
  },
  {
    title: 'Desserts',
    dishes: [
      { name: 'Classic Tiramisu' },
      { name: 'Salted Caramel and Chocolate Tart', description: 'Vanilla ice cream' },
      { name: 'Panettone Pudding', description: 'Cinnamon custard' },
      { name: 'Basque Vanilla Cheesecake', description: 'Red fruit coulis' },
    ],
  },
]

const prices = [
  { sitting: 'Lunch', courses: 'Two courses', price: '£38' },
  { sitting: 'Lunch', courses: 'Three courses', price: '£45' },
  { sitting: 'Dinner', courses: 'Three courses', price: '£50' },
]

const faqs = [
  {
    q: 'Do I need to pre-order?',
    a: 'Yes. The Christmas menu is pre-order only, so we ask for everyone in your party to choose their courses before the day. We will send you the menu to pass round once the table is booked.',
  },
  {
    q: 'Is there a minimum party size?',
    a: 'The Christmas menu is for parties of six or more. Smaller tables are very welcome as usual and can order from the regular menu.',
  },
  {
    q: 'Is there a deposit?',
    a: 'A £10 deposit per person holds the table, taken when you book. A 10% service charge is added to the total bill on the day.',
  },
  {
    q: 'Are there vegetarian or vegan dishes?',
    a: 'Yes. The roasted butternut squash soup and the roast cauliflower with saffron risotto are both vegetarian and vegan. Tell us about any allergies or other dietary needs when you book and we will work around them.',
  },
]

const PDF_URL = '/docs/soleto-christmas-menu-2026.pdf'
const MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Christmas booking')}`

export default function ChristmasContent() {
  return (
    <>
      {/* Hero: image band, double oxblood rule beneath */}
      <section
        data-nav-transparent
        className="relative h-[52vh] min-h-[360px] overflow-hidden seam-btm"
      >
        <ParallaxBg>
          <Image
            src="/images/drinks/champagne-bucket.jpg"
            alt="Prosecco bottles chilling in a copper bucket at Soleto"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </ParallaxBg>
      </section>

      {/* Title opener */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3.5rem, 9vh, 6.5rem)',
          paddingBottom: 'clamp(1rem, 3vh, 2rem)',
        }}
      >
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div className="chapterline mb-6">
            <span className="smallcaps">Christmas 2026</span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'var(--step-h1)', color: 'var(--text-primary)' }}
          >
            Christmas at Soleto
          </h1>
        </div>
      </section>

      {/* The offer, in book-page columns */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3rem, 9vh, 6rem)',
          paddingBottom: 'clamp(4rem, 12vh, 8rem)',
        }}
      >
        <div className="max-w-[880px] mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <div className="prose-cols">
              <p className="dropcap">
                George&rsquo;s Christmas menu for 2026 is a set menu with four choices at
                each course. Lunch is &pound;38 for two courses or &pound;45 for three, and
                dinner is &pound;50 for three courses. It&rsquo;s cooked by George and the
                kitchen team, same as the rest of the year.
              </p>
              <p>
                It&rsquo;s for parties of six or more and is pre-order only, so we ask for
                everyone&rsquo;s choices ahead of the day and a &pound;10 deposit per person
                when you book. A 10% service charge is added to the bill.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <a href="#book" className="link-sc">
                Book a Christmas table
              </a>
              <a href={PDF_URL} className="link-sc" download="Soleto Christmas Menu 2026.pdf">
                Download the menu (PDF)
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Prices: a small framed card */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(3.5rem, 10vh, 6rem)',
          paddingBottom: 'clamp(3.5rem, 10vh, 6rem)',
        }}
      >
        <div className="max-w-[560px] mx-auto px-6">
          <ScrollReveal>
            <h2
              className="font-serif text-center"
              style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
            >
              Prices
            </h2>
            <div
              className="mt-10"
              style={{ border: '1px solid var(--rule)', padding: '6px' }}
            >
              <div style={{ border: '1px solid var(--gold)', padding: 'clamp(1.4rem, 4vw, 2.2rem) clamp(1.2rem, 4vw, 2.4rem)' }}>
                <dl>
                  {prices.map((row, i) => (
                    <div
                      key={row.sitting + row.courses}
                      className="flex items-baseline justify-between gap-6"
                      style={{
                        paddingTop: i === 0 ? 0 : '0.9rem',
                        paddingBottom: i === prices.length - 1 ? 0 : '0.9rem',
                        borderBottom: i === prices.length - 1 ? 0 : '1px solid var(--rule)',
                      }}
                    >
                      <dt className="flex items-baseline gap-3">
                        <span
                          className="font-serif"
                          style={{
                            fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {row.sitting}
                        </span>
                        <span
                          style={{
                            fontSize: 'var(--step-body)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                          }}
                        >
                          {row.courses}
                        </span>
                      </dt>
                      <dd
                        className="font-serif tabular whitespace-nowrap"
                        style={{
                          fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {row.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <p
              className="mt-6 text-center"
              style={{
                fontSize: 'var(--step-body)',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
              }}
            >
              Per person. &pound;10 deposit per person, 10% service charge added to the bill.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The menu, one course per section */}
      {courses.map((course, ci) => (
        <section
          key={course.title}
          className="border-t"
          style={{
            backgroundColor: ci % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)',
            borderColor: 'var(--border)',
            paddingTop: 'clamp(3.5rem, 10vh, 6rem)',
            paddingBottom: 'clamp(3.5rem, 10vh, 6rem)',
          }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2
                className="font-serif mb-10"
                style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
              >
                {course.title}
              </h2>
            </ScrollReveal>
            <div className="space-y-7">
              {course.dishes.map((dish, i) => (
                <ScrollReveal key={dish.name} delay={i * 0.05}>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3
                        className="font-serif"
                        style={{
                          fontSize: 'var(--step-h3)',
                          fontWeight: 500,
                          color: 'var(--text-primary)',
                          lineHeight: 1.2,
                        }}
                      >
                        {dish.name}
                      </h3>
                      {dish.tag && (
                        <span
                          style={{
                            fontFamily: 'Newsreader, Georgia, serif',
                            fontSize: 'var(--step-label)',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            color: 'var(--text-muted)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {dish.tag}
                        </span>
                      )}
                    </div>
                    {dish.description && (
                      <p
                        className="mt-1.5"
                        style={{
                          fontSize: 'var(--step-body)',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {dish.description}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Book: ticket panel over the dining room */}
      <section
        id="book"
        data-nav-transparent
        className="relative seam-top seam-btm scroll-mt-20"
        style={{
          paddingTop: 'clamp(5rem, 14vh, 10rem)',
          paddingBottom: 'clamp(5rem, 14vh, 10rem)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/interior/dining-room.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="ticket text-center"
              style={{ padding: 'clamp(2.2rem, 5vw, 3.4rem) clamp(1.6rem, 4vw, 3rem)' }}
            >
              <div className="ticket-keyline" />
              <span className="smallcaps smallcaps-oxblood block mb-4">
                Parties of six or more
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
              >
                Book your Christmas table
              </h2>
              <p
                className="mx-auto mt-5"
                style={{
                  maxWidth: '32em',
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                Call or email us with your date, party size and whether you&rsquo;d like
                lunch or dinner. We&rsquo;ll send the menu round for everyone to choose from
                and take the &pound;10 per person deposit to hold the table.
              </p>
              <div className="mt-8 flex flex-col items-center gap-5">
                <a href={`tel:${SITE.telephone}`} className="btn-oxblood">
                  Call {SITE.telephoneDisplay}
                </a>
                <a href={MAILTO} className="link-sc">
                  Email your booking
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Questions */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 12vh, 8rem)',
          paddingBottom: 'clamp(4rem, 12vh, 8rem)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2
              className="font-serif"
              style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
            >
              Questions
            </h2>
          </ScrollReveal>
          <div className="mt-10 space-y-9">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.05}>
                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'var(--step-h3)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                    }}
                  >
                    {f.q}
                  </h3>
                  <p
                    className="mt-2.5"
                    style={{
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.62,
                      color: 'var(--text-secondary)',
                      maxWidth: '62ch',
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-14">
              <a href={PDF_URL} className="link-sc" download="Soleto Christmas Menu 2026.pdf">
                Download the menu (PDF)
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
