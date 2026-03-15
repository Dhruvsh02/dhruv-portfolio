import { useRef } from 'react'
import { useParticles } from '../../hooks/useParticles'
import PhotoFrame from './PhotoFrame'
import TypewriterRole from './TypewriterRole'
import RevealWrapper from '../UI/RevealWrapper'
import personal from '../../data/personal'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)
  useParticles(canvasRef)

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-glow-c" />
      <div className="hero-glow-p" />

      <div className="hero-inner">
        <RevealWrapper>
          <div className="fresher-badge">
            <span className="badge-dot" />
            Fresher &middot; Open to All Opportunities
          </div>

          <h1 className="hero-name">
            <span className="hero-hi">Hello, I&apos;m</span>
            <span className="hero-fullname" data-text={personal.name}>
              {personal.name}
            </span>
          </h1>

          <TypewriterRole roles={personal.roles} />

          <p className="hero-bio">{personal.bio}</p>

          <div className="hero-tags">
            {personal.tags.map((tag, i) => (
              <span key={i} className={`htag htag-${tag.style}`}>{tag.label}</span>
            ))}
          </div>

          <div className="hero-btns">
            <a href={personal.resume} download className="btn btn-primary">
              &#x2B07; Download Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View My Work &rarr;
            </a>
          </div>

          <div className="hero-soc">
            <div className="soc-line" />
            <a href={personal.github}   target="_blank" rel="noreferrer" className="sic s-gh" title="GitHub">GH</a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="sic s-li" title="LinkedIn">in</a>
            <a href={personal.leetcode} target="_blank" rel="noreferrer" className="sic s-lc" title="LeetCode">LC</a>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <PhotoFrame name={personal.name} />
        </RevealWrapper>
      </div>
    </section>
  )
}