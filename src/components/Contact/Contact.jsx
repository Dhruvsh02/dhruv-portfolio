import RevealWrapper from '../UI/RevealWrapper'
import SectionLabel from '../UI/SectionLabel'
import GradientText from '../UI/GradientText'
import SocialLinks from './SocialLinks'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <section className="wrap" id="contact">
      <RevealWrapper>
        <SectionLabel color="crimson">06 — Connect</SectionLabel>
        <h2 className="sec-title">Get In <GradientText reverse>Touch</GradientText></h2>
        <p className="sec-sub">Open to internships, jobs, freelance, or just a good chat!</p>
      </RevealWrapper>
      <div className="clayout">
        <RevealWrapper>
          <p className="cinfo-p">Whether you have an opportunity, a project idea, or just want to say hi — my inbox is always open. I&apos;ll respond as soon as I can!</p>
          <SocialLinks />
        </RevealWrapper>
        <RevealWrapper delay={150}>
          <ContactForm />
        </RevealWrapper>
      </div>
    </section>
  )
}