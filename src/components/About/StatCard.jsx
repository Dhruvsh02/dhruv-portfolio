import { useEffect, useRef, useState } from 'react'
import { animateCount } from '../../utils/helpers'

export default function StatCard({ stat }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        animateCount(setVal, stat.count)
      }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [stat.count])

  return (
    <div ref={ref} className={`stat stat-${stat.style}`}>
      <div className={`stat-num num-${stat.style}`}>{val}+</div>
      <div className="stat-lbl">{stat.label}</div>
    </div>
  )
}