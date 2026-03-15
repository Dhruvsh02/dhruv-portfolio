import personal from '../../data/personal'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="fc">
        &copy; 2025{' '}
        <span className="fn">{personal.name}</span>. Built with ❤️ &amp; ☕
      </div>
      <div className="flinks">
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a href={personal.resume} download>Resume</a>
      </div>
    </footer>
  )
}