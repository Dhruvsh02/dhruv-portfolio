import personal from '../../data/personal'

export default function VisionCard() {
  return (
    <div className="vision">
      <div className="vt">🚀 Future Vision</div>
      <p>I aspire to grow into a <strong style={{color:'var(--crimson)'}}>Full Stack Engineer</strong> at an innovative tech company, building products that serve millions. I'm especially drawn to the intersection of <strong style={{color:'var(--purple)'}}>AI and web development</strong>.</p>
      <div style={{height:1,background:'var(--bdr)',margin:'18px 0'}}/>
      <div className="look-t">Currently Open For</div>
      <div className="look-tags">
        {personal.lookingFor.map((item, i) => (
          <span key={i} className={`lt-${item.style}`}>{item.label}</span>
        ))}
      </div>
    </div>
  )
}