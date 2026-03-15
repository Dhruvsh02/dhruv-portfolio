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
  { id: 'quiz',   icon: '💡', name: 'Dev Quiz',      desc: 'CS & programming trivia — how sharp is your knowledge?',    btn: 'crimson' },
]

const GAME_COMPONENTS = {
  snake:  <SnakeGame />,
  memory: <MemoryGame />,
  quiz:   <QuizGame />,
}

export default function Games() {
  const [open, setOpen] = useState(null)

  return (
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

      {open && (
        <GameModal title={GAMES.find(g => g.id === open)?.name} onClose={() => setOpen(null)}>
          {GAME_COMPONENTS[open]}
        </GameModal>
      )}
    </section>
  )
}