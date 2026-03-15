import { useState } from 'react'
import RevealWrapper from '../UI/RevealWrapper'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import FilterBar from './FilterBar'
import ProjectCard from './ProjectCard'
import projects, { filterCategories } from '../../data/projects'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section className="wrap" id="projects">
      <RevealWrapper>
        <SectionLabel color="purple">03 — Work</SectionLabel>
        <h2 className="sec-title">My <GradientText>Projects</GradientText></h2>
        <p className="sec-sub">Projects I&apos;ve built to learn and grow. Linked directly to my GitHub.</p>
      </RevealWrapper>

      <RevealWrapper>
        <div className="fnote">
          <span className="fnote-i">💡</span>
          <span>These are <strong style={{color:'var(--purple)'}}>personal &amp; academic projects</strong> — each one pushed me to learn something new. A banking application is currently in progress and will be added once complete.</span>
        </div>
      </RevealWrapper>

      <RevealWrapper>
        <FilterBar categories={filterCategories} active={active} onChange={setActive} />
      </RevealWrapper>

      <RevealWrapper delay={100}>
        <div className="pgrid">
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </RevealWrapper>

      <p className="gh-note">
        &#x26A1; More at <a href="https://github.com/Dhruvsh02" target="_blank" rel="noreferrer">github.com/Dhruvsh02</a>
      </p>
    </section>
  )
}