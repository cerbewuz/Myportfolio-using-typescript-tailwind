import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "home" },
  { label: "About Me", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const target = document.getElementById(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <div className="group fixed top-0 left-0 right-0 z-50">
      {/* Navbar container */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          bg-gray-900/80 backdrop-blur-md shadow-md
          transition-all duration-500
          opacity-0 group-hover:opacity-100
          py-1 group-hover:py-3
        "
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-full">
          {/* Logo */}
          <a
            href="home"
            onClick={(e) => handleClick(e, "home")}
            className="flex items-center"
          >
            <div className="h-8 w-24 md:h-10 md:w-28 flex items-center justify-center transition-all group-hover:h-12 group-hover:w-32">
              <img
                src="/portfolio-icon-header.png"
                alt="Portfolio Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 text-blue-300 text-sm font-medium transition-all group-hover:gap-8 group-hover:text-base">
            {navItems.map((item, i) => (
          <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-white transition-colors"
            > 
          <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="block"
            >
            {item.label}
          </a>
          </motion.li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 shadow-lg z-[55] relative"
            >
              <ul className="flex flex-col gap-4 text-gray-300 text-lg font-medium">
                {navItems.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ scale: 1.05, color: "#0c58cbff" }}
                    className="cursor-pointer hover:text-white transition-colors"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="block w-full py-2"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
