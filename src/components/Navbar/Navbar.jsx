import { useTheme } from '../../context/ThemeContext'
import { useActiveSection } from '../../hooks/useActiveSection'
import { NAV_LINKS } from '../../utils/constants'
import './Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection()

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Dhruv</span>
        <span className="logo-dot">.</span>
        <span className="logo-last">dev</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      {/* Links */}
      <ul className="nav-links">
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href.slice(1) ? 'active' : ''}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle */}
      <button className="theme-tog" onClick={toggleTheme} aria-label="Toggle theme">
        <div className="tog-track">
          <div className="tog-thumb" />
        </div>
        <span className="tog-lbl">{theme === 'dark' ? 'DARK' : 'LIGHT'}</span>
      </button>
    </nav>
  )
}