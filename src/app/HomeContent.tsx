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
      {/* Hero: full-bleed, wordmark + single descriptor, no chrome */}
      <section
        ref={heroRef}
        data-nav-transparent
        className="relative h-screen overflow-hidden"
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

        {/* Foreground: wordmark + single italic place line, aligned to wordmark right edge */}
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
                fontWeight: 420,
              }}
            >
              Southampton, since 2017
            </motion.p>
          </div>
        </motion.div>

        {/* Vertical edge label, lower-right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute bottom-8 right-8 md:bottom-10 md:right-10 z-10 hidden md:block"
        >
          <p
            className="edge-label tabular"
            style={{
              fontFamily: 'Inter Tight, system-ui, sans-serif',
              color: '#f3ece0',
              fontSize: '10px',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              fontWeight: 400,
            }}
          >
            11 Commercial Road
          </p>
        </motion.div>
      </section>

      {/* Introduction, asymmetric 7/5, single eyebrow */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4.5rem, 16vh, 14rem)',
          paddingBottom: 'clamp(4.5rem, 16vh, 14rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <ScrollReveal direction="left" className="md:col-span-7">
              <h2
                className="font-serif text-balance"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 4rem)',
                  fontWeight: 340,
                  fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 0",
                  letterSpacing: '-0.01em',
                  lineHeight: 1.08,
                  color: 'var(--text-primary)',
                }}
              >
                A Mediterranean Soul in the Heart of Southampton
              </h2>
            </ScrollReveal>
            <div className="md:col-span-5 md:pt-8">
              <p
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                Family-run, opposite the Mayflower Theatre since 2017. George cooks Italian
                with a Greek soul: seafood chosen that morning, pasta pulled by hand, specials
                on the board by the time you sit down.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block mt-8"
                style={{
                  fontFamily: 'Inter Tight, system-ui, sans-serif',
                  fontSize: 'var(--step-eyebrow)',
                  letterSpacing: '0.27em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                Reserve
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Three dishes, asymmetric 7/5, no section header, no Roman numerals */}
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
                    fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                    fontWeight: 380,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.1,
                  }}
                >
                  Whole lobster
                </h3>
                <p
                  className="mt-2"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.55,
                  }}
                >
                  Garlic butter, lemon, seasonal vegetables.
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
                      fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                      fontWeight: 380,
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                    }}
                  >
                    Seared scallops
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.55,
                    }}
                  >
                    Crisp guanciale, pea purée.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <Link href="/menu/" className="img-hover-zoom img-editorial block">
                  <div className="aspect-[16/10] lg:aspect-[4/3] relative">
                    <Image
                      src="/images/food/oct-20.jpg"
                      alt="Pappardelle ragu"
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
                      fontSize: 'clamp(1.25rem, 1.6vw, 1.5rem)',
                      fontWeight: 380,
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                    }}
                  >
                    Pappardelle al ragù
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.55,
                    }}
                  >
                    Slow-cooked beef, hand-rolled ribbons.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 md:mt-20 flex justify-end">
              <Link
                href="/menu/"
                className="link-underline"
                style={{
                  fontFamily: 'Inter Tight, system-ui, sans-serif',
                  fontSize: 'var(--step-eyebrow)',
                  letterSpacing: '0.27em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                View the menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Chef, asymmetric 7/5, italic headline carries identity */}
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
              <p
                className="mt-4"
                style={{
                  fontFamily: 'Inter Tight, system-ui, sans-serif',
                  fontSize: 'var(--step-eyebrow)',
                  letterSpacing: '0.27em',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  color: 'var(--text-muted)',
                }}
              >
                George Jiojioras, Chef &amp; Co-Owner
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-5 lg:pt-12">
              <h2
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                  fontWeight: 350,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.12,
                  textWrap: 'balance',
                }}
              >
                Where Greek heritage meets Italian craft.
              </h2>
              <p
                className="mt-8"
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  maxWidth: '36ch',
                }}
              >
                George and Dominika opened Soleto in 2017. We&apos;ve been a family table ever
                since, with George at the stove and Dom on the floor. Lobster, scallops and
                pasta we&apos;d cook for our own family on a Sunday afternoon.
              </p>
              <div className="mt-10">
                <Link href="/our-story/" className="btn-reserve">
                  Read the letter
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mayflower banner, italic quote alone over the image */}
      <section
        data-nav-transparent
        className="relative"
        style={{
          paddingTop: 'clamp(4rem, 16vh, 13rem)',
          paddingBottom: 'clamp(4rem, 16vh, 13rem)',
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
            <div className="absolute inset-0 bg-black/55" />
          </ParallaxBg>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2
              className="font-serif italic"
              style={{
                fontSize: 'clamp(2rem, 4.4vw, 4rem)',
                fontWeight: 350,
                color: '#f3ece0',
                lineHeight: 1.15,
                letterSpacing: '-0.012em',
                maxWidth: '22ch',
                textWrap: 'balance',
              }}
            >
              A stone&rsquo;s throw from the Mayflower. A long evening, taken slowly, before the lights
              go down.
            </h2>
            <div className="mt-12 flex items-center gap-8">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve btn-reserve-light"
              >
                Reserve
              </a>
              <a
                href="tel:02380234044"
                className="link-underline tabular"
                style={{
                  fontFamily: 'Inter Tight, system-ui, sans-serif',
                  fontSize: 'var(--step-eyebrow)',
                  letterSpacing: '0.27em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: '#f3ece0',
                }}
              >
                023 8023 4044
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rooms, gallery without an eyebrow */}
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
              <Link
                href="/gallery/"
                className="link-underline"
                style={{
                  fontFamily: 'Inter Tight, system-ui, sans-serif',
                  fontSize: 'var(--step-eyebrow)',
                  letterSpacing: '0.27em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                Full gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pull-quote review */}
      <section
        style={{
          backgroundColor: 'var(--bg-tertiary)',
          paddingTop: 'clamp(4.5rem, 16vh, 16rem)',
          paddingBottom: 'clamp(4.5rem, 16vh, 16rem)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <blockquote>
              <p
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(1.85rem, 4.4vw, 4rem)',
                  fontWeight: 350,
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.012em',
                  textWrap: 'balance',
                  maxWidth: '24ch',
                }}
              >
                Every dish here is a masterpiece. Soleto instantly transports you with its
                charming and vintage decor.
              </p>
              <footer className="mt-10 flex items-baseline gap-4">
                <span
                  className="rule-hairline"
                  style={{ width: '32px', display: 'inline-block' }}
                />
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                  }}
                >
                  Ella, Google
                </p>
              </footer>
            </blockquote>
          </ScrollReveal>

          {/* Quiet sub-grid of three more reviews */}
          <ScrollReveal delay={0.2}>
            <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
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
                    className="font-serif italic"
                    style={{
                      fontSize: '17px',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      fontWeight: 380,
                    }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <p
                    className="mt-6"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {r.name} {String.fromCharCode(183)} {r.source}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing: address as architecture, no eyebrow */}
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
                fontSize: 'clamp(2.25rem, 6vw, 5.5rem)',
                fontWeight: 320,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                textWrap: 'balance',
              }}
            >
              11 Commercial Road, Southampton.
            </h2>

            <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-start">
              <div>
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Hours
                </p>
                <p
                  className="tabular"
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Tuesday &ndash; Saturday <br />
                  17:00 &ndash; 22:00
                  <br />
                  <br />
                  Sunday &amp; Monday <br />
                  Closed
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontSize: '12px',
                    lineHeight: 1.5,
                    color: 'var(--text-muted)',
                  }}
                >
                  Summer evenings only &mdash; lunches return in September.
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Telephone
                </p>
                <a
                  href="tel:02380234044"
                  className="tabular link-underline"
                  style={{
                    fontSize: 'var(--step-lead)',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                  }}
                >
                  023 8023 4044
                </a>
                <p
                  className="mt-6"
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 400,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                  }}
                >
                  Correspondence
                </p>
                <a
                  href="mailto:info@soleto.co.uk"
                  className="link-underline"
                  style={{
                    fontSize: 'var(--step-lead)',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                  }}
                >
                  info@soleto.co.uk
                </a>
              </div>

              <div className="md:text-right">
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 350,
                    color: 'var(--accent)',
                    letterSpacing: '-0.01em',
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
