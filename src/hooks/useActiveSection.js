import { useState, useEffect } from 'react'
import { SECTIONS } from '../utils/constants'

/**
 * Tracks which section the user is currently viewing.
 * Returns the active section ID string.
 */
export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero'
      SECTIONS.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return active
}