import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo / Brand */}
        <a href="#home" onClick={(e) => handleClick(e, "#home")} className="flex items-center">
  {/* Landscape frame (slightly bigger) */}
  <div className="h-16 w-36 md:h-20 md:w-44 flex items-center justify-center">
    <img
      src="src/images/portfolio-icon-header.png"
      alt="Portfolio Logo"
      className="max-h-full max-w-full object-contain"
    />
  </div>
</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 text-lg font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#fff" }}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition relative z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
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
                  whileHover={{ scale: 1.05, color: "#fff" }}
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
  );
}
