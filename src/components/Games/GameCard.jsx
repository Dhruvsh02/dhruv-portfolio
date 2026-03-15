export default function GameCard({ game: g, onPlay }) {
  return (
    <div className={`gcard gcard-${g.btn}`}>
      <span className="gi">{g.icon}</span>
      <div className="gn">{g.name}</div>
      <div className="gd">{g.desc}</div>
      <button className={`gbtn-${g.btn}`} onClick={onPlay}>▶ Play Now</button>
    </div>
  )
}