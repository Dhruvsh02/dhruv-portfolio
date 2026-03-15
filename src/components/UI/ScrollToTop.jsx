import { useState, useEffect } from 'react'
import './../../styles/index.css'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 24, right: 24,
        width: 38, height: 38,
        background: 'linear-gradient(135deg, var(--crimson), var(--purple))',
        borderRadius: 9, border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: '1rem',
        boxShadow: '0 4px 18px rgba(139,92,246,0.32)',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'all' : 'none',
        transform: show ? 'none' : 'translateY(14px)',
        transition: 'all 0.3s',
        zIndex: 100,
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}