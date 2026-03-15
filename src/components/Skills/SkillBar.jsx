import { useEffect, useRef } from 'react'

export default function SkillBar({ item, accent }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.style.width = item.pct + '%'
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [item.pct])

  return (
    <div className="skill">
      <div className="skill-row">
        <span>{item.name}</span>
        <span className={`sp-${accent === 'crimson' ? 'c' : 'p'}`}>{item.pct}%</span>
      </div>
      <div className="sbar">
        <div ref={fillRef} className={accent === 'crimson' ? 'sf-c' : 'sf-p'} />
      </div>
    </div>
  )
}