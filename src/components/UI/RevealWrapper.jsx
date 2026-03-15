import { useScrollReveal } from '../../hooks/useScrollReveal'

// Wraps children with scroll reveal animation
export default function RevealWrapper({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : {}}
    >
      {children}
    </div>
  )
}