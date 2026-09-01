'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

export default function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* Hero: full-bleed video, wordmark + single descriptor. The double
          oxblood rule closes the band into the cream page. */}
      <section
        ref={heroRef}
        data-nav-transparent
        className="relative h-screen overflow-hidden seam-btm"
      >
        <motion.div
          className="absolute inset-[-12%]"
          style={{ scale: heroScale, y: heroY }}
        >
          <Image
            src="/images/hero-spread.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-spread.jpg"
            className="absolute inset-0 w-full h-full object-cover z-[1] hidden lg:block"
          >
            <source src="/video/hero-landscape.webm" type="video/webm" />
            <source src="/video/hero-landscape.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-spread.jpg"
            className="absolute inset-0 w-full h-full object-cover z-[1] lg:hidden"
          >
            <source src="/video/hero-portrait.webm" type="video/webm" />
            <source src="/video/hero-portrait.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[2] bg-black/35" />
        </motion.div>

        {/* Foreground: wordmark + place line, aligned to wordmark right edge */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-[92vw] md:w-[86vw] lg:w-[82vw] max-w-[1700px]">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4, delay: 0, ease: 'linear' }}
            >
              <Image
                src="/images/branding/logo-light.png"
                alt="Soleto"
                width={2000}
                height={357}
                priority
                className="block w-full h-auto"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.75, delay: 0.75, ease: 'linear' }}
              className="font-serif italic mt-6 md:mt-8 text-right"
              style={{
                color: '#f3ece0',
                fontSize: 'clamp(14px, 1.1vw, 18px)',
                letterSpacing: '0.04em',
              }}
            >
              Southampton, since 2017
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Welcome: book page. Chapterline, Cardo heading, two-column prose
          with an oxblood drop cap. */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4.5rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4.5rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[880px] mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <div className="chapterline mb-7">
              <span className="smallcaps">
                Italian and Mediterranean
              </span>
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: 'var(--step-h1)',
                color: 'var(--text-primary)',
              }}
            >
              A family table since 2017
            </h2>
            <div className="prose-cols mt-10">
              <p className="dropcap">
                We opened Soleto in 2017 and it still runs the way a family
                kitchen should: George cooks and Dominika keeps the room. The
                fish is bought the same morning it is served, the pasta never
                meets a machine, and what the market has decides what the
                blackboard says.
              </p>
              <p>
                You will probably meet one of us at the door. That is not a
                policy; it is just what happens when the owners are in the
                building every night it is open. Bring the family, order the
                specials, and stay for as long as the evening deserves.
              </p>
            </div>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sc inline-block mt-10"
            >
              Reserve a table
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Three dishes: the live asymmetric grid, retyped */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(3.5rem, 12vh, 11rem)',
          paddingBottom: 'clamp(3.5rem, 12vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <Link href="/menu/" className="img-hover-zoom img-editorial block">
                <div className="aspect-[4/5] lg:aspect-[3/4] relative">
                  <Image
                    src="/images/hero-lobster.jpg"
                    alt="Whole lobster, garlic butter"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 65%' }}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </Link>
              <div className="mt-6 max-w-md">
                <h3
                  className="font-serif"
                  style={{
                    fontSize: 'var(--step-h3)',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.005em',
                  }}
                >
                  Whole lobster
                </h3>
                <p
                  className="mt-1 italic"
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.55,
                  }}
                >
                  garlic butter, lemon, seasonal vegetables
                </p>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <ScrollReveal direction="right" delay={0.1}>
                <Link href="/menu/" className="img-hover-zoom img-editorial block">
                  <div className="aspect-[16/10] lg:aspect-[4/3] relative">
                    <Image
                      src="/images/food/jan-30.jpg"
                      alt="Seared scallops with guanciale"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </Link>
                <div className="mt-5 max-w-sm">
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'calc(var(--step-h3) * 0.88)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Seared scallops
                  </h3>
                  <p
                    className="mt-1 italic"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.55,
                    }}
                  >
                    crisp guanciale, pea pur&eacute;e
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <Link href="/menu/" className="img-hover-zoom img-editorial block">
                  <div className="aspect-[16/10] lg:aspect-[4/3] relative">
                    <Image
                      src="/images/food/oct-20.jpg"
                      alt="Pappardelle al ragù"
                      fill
                      className="object-cover"
                      style={{ objectPosition: '35% center' }}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                </Link>
                <div className="mt-5 max-w-sm">
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'calc(var(--step-h3) * 0.88)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Pappardelle al rag&ugrave;
                  </h3>
                  <p
                    className="mt-1 italic"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.55,
                    }}
                  >
                    slow-cooked beef, hand-rolled ribbons
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 md:mt-20 flex justify-end">
              <Link href="/menu/" className="link-sc">
                View the menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The chef: live layout, Cardo heading, new copy */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3.5rem, 12vh, 11rem)',
          paddingBottom: 'clamp(3.5rem, 12vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left" className="lg:col-span-7">
              <div className="img-editorial img-hover-zoom">
                <div className="aspect-[4/5] lg:aspect-[3/4] relative">
                  <Image
                    src="/images/chef/george-cooking.jpg"
                    alt="George Jiojioras at the pass"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </div>
              <p className="smallcaps mt-4" style={{ color: 'var(--text-muted)' }}>
                George Jiojioras &middot; chef <span className="amp">&amp;</span> co-owner
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5 lg:pt-12">
              <h2
                className="font-serif"
                style={{
                  fontSize: 'var(--step-h2)',
                  color: 'var(--text-primary)',
                  textWrap: 'balance',
                }}
              >
                The kitchen
              </h2>
              <p
                className="mt-7"
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.66,
                  color: 'var(--text-secondary)',
                  maxWidth: '38ch',
                }}
              >
                George grew up in Greek kitchens and trained in Italian ones,
                and the menu carries both without apologising for either.
                Lobster, scallops and hand-rolled pasta, cooked the way we
                would cook them for our own Sunday table.
              </p>
              <div className="mt-9">
                <Link href="/our-story/" className="link-sc">
                  Read the letter
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before the curtain: ticket-stub panel over the dining room,
          framed by double oxblood rules */}
      <section
        data-nav-transparent
        className="relative seam-top seam-btm"
        style={{
          paddingTop: 'clamp(5rem, 15vh, 11rem)',
          paddingBottom: 'clamp(5rem, 15vh, 11rem)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxBg mode="banner">
            <Image
              src="/images/hero-interior.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/25" />
          </ParallaxBg>
        </div>

        <div className="relative z-10 max-w-[640px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="ticket text-center"
              style={{ padding: 'clamp(2.2rem, 5vw, 3.4rem) clamp(1.6rem, 4vw, 3rem)' }}
            >
              <div className="ticket-keyline" />
              <span className="smallcaps smallcaps-oxblood block mb-4">
                Directly opposite the Mayflower Theatre
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'var(--step-h2)',
                  color: 'var(--text-primary)',
                }}
              >
                Before the curtain
              </h2>
              <p
                className="mx-auto mt-5"
                style={{
                  maxWidth: '30em',
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                Tell us your curtain time when you book and we will pace dinner
                around it. Pre-theatre tables are seated from five o&rsquo;clock,
                forty steps from the foyer.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oxblood mt-8"
              >
                Reserve a pre-theatre table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rooms: the gallery mosaic, unchanged imagery */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3.5rem, 12vh, 11rem)',
          paddingBottom: 'clamp(3.5rem, 12vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ScrollReveal delay={0.05} className="col-span-12 md:col-span-8">
              <Link href="/gallery/" className="img-hover-zoom img-editorial block">
                <div className="aspect-[16/9] md:aspect-[16/10] relative">
                  <Image
                    src="/images/interior/table-lamp.jpg"
                    alt="Warm table set with lamps and wine glasses"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="col-span-6 md:col-span-4">
              <Link href="/gallery/" className="img-hover-zoom img-editorial block">
                <div className="aspect-[3/4] md:aspect-auto md:h-full relative">
                  <Image
                    src="/images/drinks/wine-bottles.jpg"
                    alt="Italian reds in a wooden Charmes de Kirwan crate"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="col-span-6 md:col-span-5">
              <Link href="/gallery/" className="img-hover-zoom img-editorial block">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/interior/painting.jpg"
                    alt="A gold-framed painting under picture light"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '70% center' }}
                    sizes="(max-width: 768px) 50vw, 42vw"
                  />
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.25} className="col-span-12 md:col-span-7">
              <Link href="/gallery/" className="img-hover-zoom img-editorial block">
                <div className="aspect-[16/9] md:aspect-[4/3] relative">
                  <Image
                    src="/images/drinks/champagne-detail.jpg"
                    alt="Prosecco bottles chilling in a copper bucket"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex justify-end">
              <Link href="/gallery/" className="link-sc">
                Full gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notices: featured review as a declaration, three smaller quotes in
          columns, closed by the ratings line */}
      <section
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          paddingTop: 'clamp(4.5rem, 15vh, 13rem)',
          paddingBottom: 'clamp(4.5rem, 15vh, 13rem)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <blockquote>
              <span
                aria-hidden="true"
                className="font-serif block"
                style={{
                  fontSize: 'clamp(70px, 8vw, 104px)',
                  lineHeight: 1,
                  height: '0.48em',
                  color: 'var(--gold)',
                }}
              >
                &ldquo;
              </span>
              <p
                className="font-serif mx-auto"
                style={{
                  fontSize: 'clamp(1.7rem, 3.4vw, 2.55rem)',
                  lineHeight: 1.26,
                  letterSpacing: '-0.005em',
                  maxWidth: '36ch',
                  color: 'var(--text-primary)',
                }}
              >
                Every dish here is a masterpiece. Soleto instantly transports
                you with its charming and vintage decor.
              </p>
              <footer className="chapterline mt-8">
                <span className="smallcaps">Ella &middot; Google review</span>
              </footer>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-11 text-left">
              {[
                {
                  quote:
                    'A gorgeous spot for a pre-theatre meal. Amazing atmosphere, attentive service and the best Italian food I have ever had.',
                  name: 'Milly',
                  source: 'Google',
                },
                {
                  quote:
                    'At the end of our meal George spoke to us so friendly, not knowing he was the owner. Thanks to you all for a very special evening.',
                  name: 'Rastarambo',
                  source: 'TripAdvisor',
                },
                {
                  quote:
                    'Heavenly soft ciabatta with pesto, sauce in seafood pasta was delicious, and one of the best tiramisu we have had in the UK.',
                  name: 'Julia',
                  source: 'Google',
                },
              ].map((r) => (
                <div key={r.name}>
                  <p
                    className="italic"
                    style={{
                      fontSize: '1.02rem',
                      lineHeight: 1.6,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <p className="smallcaps mt-3" style={{ fontSize: '11.5px' }}>
                    {r.name} {String.fromCharCode(183)} {r.source}
                  </p>
                </div>
              ))}
            </div>
            <p className="smallcaps mt-14">
              4.7 on Google <span className="amp">&middot;</span> 4.5 on
              TripAdvisor <span className="amp">&middot;</span> 1,500 reviews
              and counting
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing: address as architecture */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4.5rem, 16vh, 14rem)',
          paddingBottom: 'clamp(4.5rem, 16vh, 14rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2
              className="font-serif"
              style={{
                fontSize: 'var(--step-display)',
                color: 'var(--text-primary)',
                lineHeight: 1.02,
                textWrap: 'balance',
              }}
            >
              11 Commercial Road, Southampton
            </h2>

            <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
              <div>
                <p className="smallcaps smallcaps-muted mb-3">Hours</p>
                <p
                  className="tabular"
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Tuesday to Saturday, five until ten
                  <br />
                  Sunday and Monday, closed
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: 'var(--text-muted)',
                  }}
                >
                  Summer evenings only; lunches return in September.
                </p>
              </div>

              <div>
                <p className="smallcaps smallcaps-muted mb-3">
                  Telephone <span className="amp">&amp;</span> correspondence
                </p>
                <p style={{ fontSize: 'var(--step-lead)', lineHeight: 1.8 }}>
                  <a
                    href="tel:02380234044"
                    className="tabular"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--gold)',
                    }}
                  >
                    023 8023 4044
                  </a>
                  <br />
                  <a
                    href="mailto:info@soleto.co.uk"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--gold)',
                    }}
                  >
                    info@soleto.co.uk
                  </a>
                </p>
              </div>

              <div className="md:text-right">
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
                    color: 'var(--accent)',
                    letterSpacing: '-0.005em',
                    lineHeight: 1,
                    textDecoration: 'underline',
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '0.18em',
                  }}
                >
                  Reserve a table
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
