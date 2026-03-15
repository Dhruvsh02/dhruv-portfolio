import { useState, useEffect } from 'react'

const EMOJIS = ['⚛️','🐍','🔧','💡','🎮','🚀','🌐','🎯']

export default function MemoryGame() {
  const [cards, setCards] = useState(() =>
    [...EMOJIS,...EMOJIS].sort(()=>Math.random()-0.5).map((e,i)=>({id:i,emoji:e,flipped:false,matched:false}))
  )
  const [sel, setSel] = useState([])
  const [lock, setLock] = useState(false)
  const matched = cards.filter(c=>c.matched).length/2

  useEffect(() => {
    if (sel.length === 2) {
      setLock(true)
      const [a,b] = sel
      if (cards[a].emoji === cards[b].emoji) {
        setCards(prev=>prev.map(c=>sel.includes(c.id)?{...c,matched:true}:c))
        setSel([]); setLock(false)
      } else {
        setTimeout(()=>{ setCards(prev=>prev.map(c=>sel.includes(c.id)?{...c,flipped:false}:c)); setSel([]); setLock(false) },800)
      }
    }
  }, [sel])

  const flip = (id) => {
    if (lock||cards[id].flipped||cards[id].matched||sel.length===2) return
    setCards(prev=>prev.map(c=>c.id===id?{...c,flipped:true}:c))
    setSel(prev=>[...prev,id])
  }

  return (
    <div>
      <div style={{fontFamily:'var(--fm)',fontSize:'0.8rem',color:'var(--txt2)',marginBottom:10}}>Pairs found: {matched} / 8</div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
        {cards.map(c=>(
          <div key={c.id} onClick={()=>flip(c.id)} style={{
            aspectRatio:'1',background:c.matched?'rgba(139,92,246,0.15)':c.flipped?'rgba(232,0,45,0.12)':'var(--bg3)',
            border:`1px solid ${c.flipped||c.matched?'var(--purple)':'var(--bdr)'}`,
            borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',
            fontSize:'1.6rem',cursor:'pointer',transition:'all 0.3s',userSelect:'none',
            opacity:c.matched?0.7:1
          }}>
            {(c.flipped||c.matched) ? c.emoji : ''}
          </div>
        ))}
      </div>
      {matched===8 && <div style={{fontFamily:'var(--fm)',fontSize:'0.85rem',color:'var(--purple)',textAlign:'center',marginTop:12}}>🎉 You won!</div>}
      <div style={{fontFamily:'var(--fm)',fontSize:'0.72rem',color:'var(--txt3)',textAlign:'center',marginTop:8}}>Find all 8 matching pairs!</div>
    </div>
  )
}