import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Games from './components/Games/Games'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/UI/ScrollToTop'
import SectionDivider from './components/UI/SectionDivider'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Games />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App