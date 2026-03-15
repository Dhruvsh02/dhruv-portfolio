import { useEffect, useRef } from 'react'

/**
 * Returns a ref. Once the element enters the viewport,
 * the 'visible' class is added for CSS reveal animations.
 */
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}