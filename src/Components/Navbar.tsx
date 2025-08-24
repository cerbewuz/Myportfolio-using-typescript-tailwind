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
    setIsOpen(false); // close menu after click
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold text-blue-400">MyPortfolio</h1>

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
          className="md:hidden text-gray-300 hover:text-white transition relative z-50"
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
            className="md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 shadow-lg z-40"
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
