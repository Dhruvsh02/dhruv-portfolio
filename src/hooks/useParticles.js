import { useEffect, useRef } from 'react'

/**
 * Draws and animates crimson + purple particles on a canvas.
 * Pass the canvas ref to this hook.
 */
export function useParticles(canvasRef) {
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W, H
    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 75 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.3 + 0.3,
      t: Math.random() < 0.5 ? 'c' : 'p',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.t === 'c'
          ? `rgba(232,0,45,${dark ? 0.5 : 0.3})`
          : `rgba(139,92,246,${dark ? 0.5 : 0.3})`
        ctx.fill()
      })
      // Connection lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            const a = 0.06 * (1 - d / 100)
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = pts[i].t === pts[j].t
              ? (pts[i].t === 'c' ? `rgba(232,0,45,${a})` : `rgba(139,92,246,${a})`)
              : `rgba(180,46,150,${a * 0.8})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [canvasRef])
}