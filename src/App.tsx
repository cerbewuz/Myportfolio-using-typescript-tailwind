import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Experience from "./Components/Experience"
import Certifications from "./Components/Certifications"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme")
      return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    }
    return false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="scroll-smooth">
        <Hero id="home" />
        <Experience id="experience" />
        <Certifications id="certifications" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
    </div>
  )
}
