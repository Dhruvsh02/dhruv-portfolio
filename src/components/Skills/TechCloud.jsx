export default function TechCloud({ pills }) {
  return (
    <div className="tcloud">
      {pills.map((p, i) => <span key={i} className="tp">{p}</span>)}
    </div>
  )
}