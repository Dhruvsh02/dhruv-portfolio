import { useState, useEffect, useRef } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words
 * @param {{ typeSpeed, deleteSpeed, pauseMs }} options
 */
export function useTypewriter(words, options = {}) {
  const { typeSpeed = 85, deleteSpeed = 42, pauseMs = 1800 } = options
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = words[wordIndex]
    if (!deleting) {
      if (text.length < current.length) {
        timeout.current = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
      } else {
        timeout.current = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (text.length > 0) {
        timeout.current = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
      } else {
        setDeleting(false)
        setWordIndex(i => (i + 1) % words.length)
      }
    }
    return () => clearTimeout(timeout.current)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return text
}