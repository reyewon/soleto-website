'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { isDaytime } from '@/lib/sunrise'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isAutoMode: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  isAutoMode: true,
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [isAutoMode, setIsAutoMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  const getAutoTheme = useCallback((): Theme => {
    return isDaytime() ? 'light' : 'dark'
  }, [])

  useEffect(() => {
    setMounted(true)
    const savedMode = localStorage.getItem('soleto-theme-mode')
    const savedTheme = localStorage.getItem('soleto-theme') as Theme | null

    if (savedMode === 'manual' && savedTheme) {
      setIsAutoMode(false)
      setTheme(savedTheme)
    } else {
      setTheme(getAutoTheme())
    }
  }, [getAutoTheme])

  // Update auto theme every minute
  useEffect(() => {
    if (!isAutoMode) return
    const interval = setInterval(() => {
      setTheme(getAutoTheme())
    }, 60000)
    return () => clearInterval(interval)
  }, [isAutoMode, getAutoTheme])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setIsAutoMode(false)
    localStorage.setItem('soleto-theme-mode', 'manual')
    localStorage.setItem('soleto-theme', newTheme)
  }

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isAutoMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
