import RevealWrapper from '../UI/RevealWrapper'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import SkillGroup from './SkillGroup'
import TechCloud from './TechCloud'
import skills, { techPills } from '../../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section className="wrap" id="skills">
      <RevealWrapper>
        <SectionLabel color="crimson">04 — Expertise</SectionLabel>
        <h2 className="sec-title">My <GradientText reverse>Skills</GradientText></h2>
        <p className="sec-sub">Technologies I&apos;ve learned, practised, and built real projects with.</p>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <div className="sgrid">
          {skills.map((g, i) => <SkillGroup key={i} group={g} />)}
        </div>
      </RevealWrapper>
      <RevealWrapper delay={200}>
        <TechCloud pills={techPills} />
      </RevealWrapper>
    </section>
  )
}