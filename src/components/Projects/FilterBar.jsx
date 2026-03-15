export default function FilterBar({ categories, active, onChange }) {
  return (
    <div className="pfilt">
      {categories.map(cat => (
        <button key={cat} className={`fbt2${active === cat ? ' act' : ''}`} onClick={() => onChange(cat)}>{cat}</button>
      ))}
    </div>
  )
}