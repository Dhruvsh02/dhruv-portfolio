// Usage: <GradientText>My Skills</GradientText>
export default function GradientText({ children, reverse = false }) {
  const grad = reverse
    ? 'linear-gradient(90deg, var(--purple), var(--crimson))'
    : 'linear-gradient(90deg, var(--crimson), var(--purple))'
  return (
    <span style={{
      background: grad,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {children}
    </span>
  )
}