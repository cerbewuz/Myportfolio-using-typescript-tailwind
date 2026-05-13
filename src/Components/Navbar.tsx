import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { smoothScrollTo } from "../utils/smoothScroll"

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Education", href: "education" },
  { label: "Certifications", href: "certifications" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "footer" },
]

interface NavbarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Body scroll locking when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Active section tracking with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on top-ish middle of viewport
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.getElementById(href)
    if (target) {
      // Unified 80px offset for all devices to perfectly clear the fixed header
      const offset = 80
      const targetPosition = target.getBoundingClientRect().top + window.scrollY
      smoothScrollTo(targetPosition - offset)
    }
    setIsOpen(false)
  }

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <nav 
        className={`
          pointer-events-auto w-full max-w-2xl flex items-center justify-between px-6 h-14 rounded-full
          transition-all duration-300 backdrop-blur-md
          ${scrolled 
            ? "bg-white/70 dark:bg-[#0a0a0a]/70 border border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5" 
            : "bg-transparent border border-transparent"}
        `}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="text-base md:text-lg font-bold tracking-tighter hover:opacity-70 transition-opacity p-2 -m-2"
        >
          RE.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-[13px] md:text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={`#${item.href}`}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`transition-all duration-300 ${
                    activeSection === item.href 
                      ? "text-black dark:text-white font-bold scale-105" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="w-[1px] h-4 bg-gray-300 dark:bg-gray-700" />

          <button
            onClick={toggleDarkMode}
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 -m-2"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={16} className="md:w-[18px] md:h-[18px]" /> : <Moon size={16} className="md:w-[18px] md:h-[18px]" />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400 p-2 -m-2"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="text-gray-500 dark:text-gray-400 p-2 -m-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-6 right-6 p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-xl pointer-events-auto md:hidden z-[100]"
          >
            <ul className="flex flex-col gap-6 text-base font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.href}`}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block transition-all duration-300 active:scale-95 ${
                      activeSection === item.href 
                        ? "text-black dark:text-white font-bold translate-x-2" 
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
