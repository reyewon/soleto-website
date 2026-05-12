'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxBgProps {
  children: React.ReactNode
  /** 'hero' starts at top of page; 'banner' scrolls into view */
  mode?: 'hero' | 'banner'
}

export default function ParallaxBg({ children, mode = 'hero' }: ParallaxBgProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: mode === 'hero' ? ['start start', 'end start'] : ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    mode === 'hero' ? ['0%', '20%'] : ['-8%', '8%'],
  )

  return (
    <motion.div ref={ref} className="absolute inset-[-15%]" style={{ y }}>
      {children}
    </motion.div>
  )
}
