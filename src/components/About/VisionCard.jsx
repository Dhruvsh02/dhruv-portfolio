import personal from '../../data/personal'

export default function VisionCard() {
  return (
    <div className="vision">
      <div className="vt">🚀 Future Vision</div>
      <p>
      I aim to grow into a <strong style={{color:'var(--crimson)'}}>Backend Engineer </strong> 
      focused on building scalable APIs, reliable systems, and high-performance 
      web applications. While backend development is my core strength, I also 
      work with <strong style={{color:'var(--purple)'}}>Full Stack Technologies </strong> 
      to build complete products from frontend to deployment.

      I am particularly interested in the intersection of 
      <strong style={{color:'var(--crimson)'}}> Software Development and Data</strong>, 
      exploring areas like <strong style={{color:'var(--purple)'}}>Data Engineering, Data Science and AL/ML </strong> to build data-driven applications and scalable 
      systems that solve real-world problems.
      </p>
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