import RevealWrapper from '../UI/RevealWrapper'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import StatCard from './StatCard'
import VisionCard from './VisionCard'
import personal from '../../data/personal'
import './About.css'

export default function About() {
  return (
    <section className="wrap" id="about">
      <RevealWrapper>
        <SectionLabel color="purple">01 — Profile</SectionLabel>
        <h2 className="sec-title">About <GradientText>Me</GradientText></h2>
      </RevealWrapper>

      <div className="about-grid">
        <RevealWrapper>
          <div className="fresh-box">
            <div className="fbt">🌱 Fresh Graduate — Graduating in 4 Months</div>
            <p>Strong fundamentals, real projects, and the drive to learn fast. I don&apos;t just study technology — I build with it.</p>
          </div>
          <p className="about-p">I&apos;m <span className="hc">Dhruv Sharma</span>, a Computer Science student based in Delhi, graduating in a few months. I started coding out of curiosity and it turned into a full-blown obsession with building things from scratch.</p>
          <p className="about-p">I&apos;m <span className="hp">open to any role</span> — backend, frontend, full stack, data science, or AI/ML. I work primarily in Python and JavaScript, and I genuinely believe the best developers are the ones who adapt fast and keep learning.</p>
          <p className="about-p">I&apos;ve been solving <span className="hc">DSA problems consistently</span> on LeetCode, building and shipping personal projects on GitHub, and currently working on a <span className="hp">banking application</span> (full stack) which I&apos;ll be adding soon.</p>
          <div className="stats-grid">
            {personal.stats.map((s, i) => <StatCard key={i} stat={s} />)}
          </div>
        </RevealWrapper>

        <RevealWrapper delay={150}>
          <VisionCard />
        </RevealWrapper>
      </div>
    </section>
  )
}