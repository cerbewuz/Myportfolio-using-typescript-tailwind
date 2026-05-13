import { useState, useEffect } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Education from "./Components/Portfolio-Contents/Education"
import Certifications from "./Components/Portfolio-Contents/Certifications"
import About from "./Components/Portfolio-Contents/About"
import Projects from "./Components/Portfolio-Contents/Projects"
import Footer from "./Components/Portfolio-Contents/Footer"
import BackToTop from "./Components/BackToTop"

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "system"
    }
    return "system"
  })

  useEffect(() => {
    const root = window.document.documentElement

    const applyTheme = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

      if (isDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }

    applyTheme()
    localStorage.setItem("theme", theme)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") applyTheme()
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const toggleDarkMode = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  const [showContactHelper, setShowContactHelper] = useState(false)

  // Derived state for components that expect a boolean
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero id="home" onGetInTouch={() => setShowContactHelper(true)} />
        <About id="about" />
        <Education id="education" />
        <Certifications id="certifications" />
        <Projects id="projects" />
        <Footer id="footer" showHelper={showContactHelper} onHideHelper={() => setShowContactHelper(false)} onShowHelper={() => setShowContactHelper(true)} />
      </main>
      <BackToTop />
    </div>
  )
}
