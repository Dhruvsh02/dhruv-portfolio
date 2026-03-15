// Usage: <SectionLabel color="purple">01 — Profile</SectionLabel>
export default function SectionLabel({ children, color = 'crimson' }) {
  const c = color === 'purple' ? 'var(--purple)' : 'var(--crimson)'
  return (
    <div className="sec-tag" style={{ color: c }}>
      {children}
    </div>
  )
}