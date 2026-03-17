import { useState } from 'react'
import GameCard from './GameCard'
import GameModal from './GameModal'
import SnakeGame from '../../games/Snake/SnakeGame'
import MemoryGame from '../../games/Memory/MemoryGame'
import QuizGame from '../../games/Quiz/QuizGame'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import RevealWrapper from '../UI/RevealWrapper'
import './Games.css'

const GAMES = [
  { id: 'snake',  icon: '🐍', name: 'Snake Game',   desc: "Classic arcade snake — eat food, grow longer, don't crash!", btn: 'crimson' },
  { id: 'memory', icon: '🃏', name: 'Memory Cards', desc: 'Flip cards and find all matching pairs. Train that memory!', btn: 'purple'  },
  { id: 'quiz',   icon: '💡', name: 'Dev Quiz',      desc: 'CS & programming trivia — how sharp is your knowledge?',   btn: 'crimson' },
]

export default function Games() {
  const [open, setOpen] = useState(null)

  const renderGame = () => {
    if (open === 'snake')  return <SnakeGame />
    if (open === 'memory') return <MemoryGame />
    if (open === 'quiz')   return <QuizGame />
    return null
  }

  return (
    <>
      <section className="wrap" id="games">
        <RevealWrapper>
          <SectionLabel color="purple">05 — Fun Zone</SectionLabel>
          <h2 className="sec-title">Play <GradientText>Games</GradientText></h2>
          <p className="sec-sub">Take a break — three mini-games built right into the portfolio!</p>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="games-grid">
            {GAMES.map(g => (
              <GameCard key={g.id} game={g} onPlay={() => setOpen(g.id)} />
            ))}
          </div>
        </RevealWrapper>
      </section>

      {/* Modal rendered OUTSIDE section, at root level */}
      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(null) }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{
            background: 'var(--bg2)',
            border: '1px solid var(--bdr)',
            borderRadius: 16,
            padding: 28,
            maxWidth: 500,
            width: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}>
            {/* Close button */}
            <button
              onClick={() => setOpen(null)}
              style={{
                position: 'absolute', top: 14, right: 14,
                background: 'var(--bg3)', border: '1px solid var(--bdr)',
                borderRadius: 7, width: 30, height: 30,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', fontSize: '1rem', color: 'var(--txt2)',
              }}
            >
              ✕
            </button>

            {/* Title */}
            <div style={{
              fontFamily: 'var(--fd)', fontSize: '1.15rem',
              fontWeight: 700, marginBottom: 16, color: 'var(--txt)',
            }}>
              {GAMES.find(g => g.id === open)?.name}
            </div>

            {/* Game component */}
            {renderGame()}
          </div>
        </div>
      )}
    </>
  )
}