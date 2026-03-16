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
            <div className="fbt">🌱 Fresh Graduate — Graduating Soon</div>
            <p>Strong fundamentals in software engineering and problem solving. I focus on building real-world applications, writing clean backend systems, and continously improving projects and hands-on develpoment.</p>
          </div>
          <p className="about-p">I&apos;m <span className="hc">Dhruv Sharma</span>, a Computer Science student based in Delhi, graduating in a few months. I started coding out of curiosity and it quickly turned into a strong passion for building systems and solving problems through software.</p>

          <p className="about-p">
            I&apos;m <span className="hp">Passionate about Software Development across the full spectrum</span> — 
            from designing robust backend systems and scalable APIs, to building end-to-end full stack 
            applications, data pipelines, and AI/ML models. I work primarily in Python and JavaScript, 
            and I strongly believe that a great engineer is defined not by a single skill, 
            but by the ability to pick up what the problem demands.          
            </p>

          <p className="about-p">
            I&apos;ve been <span className="hc">consistently sharpening my DSA skills</span> on LeetCode, 
            shipping real projects on GitHub, ranging from computer vision tools to — and exploring areas like <span className="hp">Data Engineering, Microservice Architecture, 
            Software Testing, and AI-powered application development</span>. Every project 
            I build is a deliberate step toward becoming a well-rounded software engineer.
          </p>
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