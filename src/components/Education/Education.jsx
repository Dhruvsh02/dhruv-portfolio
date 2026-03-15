import RevealWrapper from '../UI/RevealWrapper'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import TimelineItem from './TimelineItem'
import education from '../../data/education'
import './Education.css'

export default function Education() {
  return (
    <section className="wrap" id="education">
      <RevealWrapper>
        <SectionLabel color="crimson">02 — Background</SectionLabel>
        <h2 className="sec-title">My <GradientText reverse>Education</GradientText></h2>
      </RevealWrapper>
      <RevealWrapper delay={100}>
        <div className="tline">
          {education.map(edu => <TimelineItem key={edu.id} edu={edu} />)}
        </div>
      </RevealWrapper>
    </section>
  )
}