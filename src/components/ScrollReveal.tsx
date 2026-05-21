'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  // Accepted for backwards compatibility but no longer used: the reveal is
  // now a pure opacity fade with no directional translation.
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 1.1,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
