import { useTypewriter } from '../../hooks/useTypewriter'

export default function TypewriterRole({ roles }) {
  const text = useTypewriter(roles)
  return (
    <div className="hero-role">
      <span className="role-prefix">//</span>
      <span>{text}</span>
      <span className="cursor" />
    </div>
  )
}