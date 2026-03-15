import { useState } from 'react'
import quizData from '../../data/quizData'

export default function QuizGame() {
  const [qi, setQi] = useState(0)
  const [score, setScore] = useState(0)
  const [chosen, setChosen] = useState(null)
  const [done, setDone] = useState(false)

  const pick = (i) => {
    if (chosen !== null) return
    setChosen(i)
    if (i === quizData[qi].a) setScore(s=>s+1)
    setTimeout(() => {
      if (qi+1 >= quizData.length) setDone(true)
      else { setQi(q=>q+1); setChosen(null) }
    }, 1000)
  }

  const restart = () => { setQi(0); setScore(0); setChosen(null); setDone(false) }

  if (done) return (
    <div style={{textAlign:'center',padding:20}}>
      <div style={{fontSize:'2.5rem',marginBottom:12}}>🏆</div>
      <div style={{fontFamily:'var(--fd)',fontSize:'1.3rem',fontWeight:700,marginBottom:8}}>Score: {score} / {quizData.length}</div>
      <p style={{color:'var(--txt2)',fontSize:'0.9rem'}}>
        {score>=6?'Excellent! 🚀':score>=4?'Good job! 💪':'Keep practising! 🌱'}
      </p>
      <button className="btn btn-primary" style={{marginTop:16}} onClick={restart}>Play Again</button>
    </div>
  )

  const q = quizData[qi]
  return (
    <div>
      <div style={{fontFamily:'var(--fm)',fontSize:'0.78rem',color:'var(--txt3)',marginBottom:12}}>Q {qi+1}/{quizData.length} · Score: {score}</div>
      <div style={{fontSize:'0.95rem',color:'var(--txt)',lineHeight:1.7,marginBottom:16,fontWeight:500}}>{q.q}</div>
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        {q.opts.map((opt,i)=>(
          <button key={i} onClick={()=>pick(i)} style={{
            background: chosen===null?'var(--bg3)':i===q.a?'rgba(34,197,94,0.1)':chosen===i?'rgba(232,0,45,0.08)':'var(--bg3)',
            border: `1px solid ${chosen===null?'var(--bdr)':i===q.a?'#22c55e':chosen===i?'var(--crimson)':'var(--bdr)'}`,
            borderRadius:9,padding:'11px 14px',fontSize:'0.87rem',
            color: chosen===null?'var(--txt2)':i===q.a?'#22c55e':chosen===i?'var(--crimson)':'var(--txt2)',
            cursor:'pointer',transition:'all 0.2s',textAlign:'left'
          }}>{opt}</button>
        ))}
      </div>
    </div>
  )
}