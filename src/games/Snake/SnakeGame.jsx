import { useEffect, useRef, useState } from 'react'

const SZ=20, COLS=16, ROWS=16

function rndFood() { return { x: Math.floor(Math.random()*COLS), y: Math.floor(Math.random()*ROWS) } }

export default function SnakeGame() {
  const canvasRef = useRef(null)
  const state = useRef({ snake:[{x:8,y:8}], dir:{x:1,y:0}, ndir:{x:1,y:0}, food:rndFood(), score:0, dead:false })
  const [score, setScore] = useState(0)
  const [hi, setHi] = useState(0)
  const loop = useRef(null)

  useEffect(() => {
    const onKey = e => {
      const s = state.current
      if (s.dead && e.key.toLowerCase()==='r') { Object.assign(s,{snake:[{x:8,y:8}],dir:{x:1,y:0},ndir:{x:1,y:0},food:rndFood(),score:0,dead:false}); setScore(0); return }
      if (e.key==='ArrowUp'   ||e.key==='w') { if(s.dir.y!==1) s.ndir={x:0,y:-1} }
      if (e.key==='ArrowDown' ||e.key==='s') { if(s.dir.y!==-1)s.ndir={x:0,y:1}  }
      if (e.key==='ArrowLeft' ||e.key==='a') { if(s.dir.x!==1) s.ndir={x:-1,y:0} }
      if (e.key==='ArrowRight'||e.key==='d') { if(s.dir.x!==-1)s.ndir={x:1,y:0}  }
    }
    document.addEventListener('keydown', onKey)

    const c = canvasRef.current; const ctx = c.getContext('2d')
    loop.current = setInterval(() => {
      const s = state.current
      if (s.dead) return
      s.dir = s.ndir
      const head = { x: s.snake[0].x+s.dir.x, y: s.snake[0].y+s.dir.y }
      if (head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS||s.snake.some(p=>p.x===head.x&&p.y===head.y)) {
        s.dead = true
        ctx.fillStyle='rgba(232,0,45,0.18)'; ctx.fillRect(0,0,320,320)
        ctx.fillStyle='#EDEDED'; ctx.font='bold 16px Syne,sans-serif'; ctx.textAlign='center'
        ctx.fillText('Game Over — Press R to restart',160,160); return
      }
      s.snake.unshift(head)
      if (head.x===s.food.x&&head.y===s.food.y) {
        s.score++; s.food=rndFood(); setScore(s.score)
        setHi(h => Math.max(h,s.score))
      } else { s.snake.pop() }

      ctx.fillStyle='#0A0A0A'; ctx.fillRect(0,0,320,320)
      ctx.fillStyle='#E8002D'; ctx.beginPath(); ctx.arc(s.food.x*SZ+SZ/2,s.food.y*SZ+SZ/2,SZ/2-2,0,Math.PI*2); ctx.fill()
      s.snake.forEach((p,i) => {
        const f=i/s.snake.length
        ctx.fillStyle=`rgb(${Math.round(232*(1-f)+139*f)},${Math.round(0*(1-f)+92*f)},${Math.round(45*(1-f)+246*f)})`
        ctx.fillRect(p.x*SZ+1,p.y*SZ+1,SZ-2,SZ-2)
      })
    }, 130)

    return () => { clearInterval(loop.current); document.removeEventListener('keydown',onKey) }
  }, [])

  return (
    <div>
      <div style={{fontFamily:'var(--fm)',fontSize:'0.8rem',color:'var(--txt2)',textAlign:'center',marginBottom:8}}>
        Score: {score} | High: {hi}
      </div>
      <canvas ref={canvasRef} width={320} height={320} style={{display:'block',margin:'0 auto',borderRadius:8,border:'1px solid var(--bdr)'}}/>
      <div style={{fontFamily:'var(--fm)',fontSize:'0.72rem',color:'var(--txt3)',textAlign:'center',marginTop:8}}>Arrow keys / WASD to move · R to restart</div>
    </div>
  )
}