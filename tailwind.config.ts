import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcfb',
          100: '#fbf8f6',
          200: '#f5f0eb',
          300: '#e8e3de',
          400: '#d4cfc9',
        },
        navy: {
          800: '#0d1b2e',
          900: '#0a1628',
          950: '#071020',
        },
        gold: {
          400: '#b3a784',
          500: '#9a8e6a',
          600: '#847958',
          700: '#6b6247',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['General Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 2rem + 4vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
        'h1': ['clamp(2.5rem, 1.5rem + 3.5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'h2': ['clamp(2rem, 1.2rem + 2.5vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.005em' }],
        'h3': ['clamp(1.5rem, 1rem + 1.5vw, 2rem)', { lineHeight: '1.2' }],
        'tagline': ['clamp(1.25rem, 0.9rem + 1vw, 1.75rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        'tight': 'clamp(2.5rem, 1.5rem + 3vw, 4rem)',
        'section': 'clamp(5rem, 3rem + 6vw, 8rem)',
        'expansive': 'clamp(7rem, 4rem + 9vw, 12rem)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '800': '800ms',
        '1200': '1200ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'scale-in': 'scale-in 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
