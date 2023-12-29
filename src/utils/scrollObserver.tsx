'use client'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type Scroll = {
  scrollY: number
}

export const scrollCtx = createContext<Scroll>({ scrollY: 0 })

const ScrollObserver: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [scroll, setScroll] = useState<Scroll>({ scrollY: 0 })

  const handleScroll = useCallback(() => {
    setScroll((prev) => ({ ...prev, scrollY: window.scrollY }))
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return <scrollCtx.Provider value={scroll}>{children}</scrollCtx.Provider>
}

export default ScrollObserver
