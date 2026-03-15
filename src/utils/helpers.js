/**
 * Smooth scroll to a section by ID.
 * @param {string} id - Section ID (without #)
 */
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Animate a number from 0 to target.
 * @param {Function} setter - React state setter
 * @param {number} target
 * @param {number} duration - ms
 */
export function animateCount(setter, target, duration = 1400) {
  let start = null
  const step = (timestamp) => {
    if (!start) start = timestamp
    const progress = Math.min((timestamp - start) / duration, 1)
    setter(Math.floor(progress * target))
    if (progress < 1) requestAnimationFrame(step)
    else setter(target)
  }
  requestAnimationFrame(step)
}