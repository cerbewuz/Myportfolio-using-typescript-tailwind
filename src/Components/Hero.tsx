import { motion } from "framer-motion"
import { smoothScrollTo } from "../utils/smoothScroll"

type HeroProps = {
  id?: string
  onGetInTouch?: () => void
};

export default function Hero({ id = "home", onGetInTouch }: HeroProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        // Native browser scroll is more reliable on smartphones
        target.scrollIntoView({ behavior: "smooth" })
      } else {
        // Custom premium glide for desktop
        const offset = 80
        const targetPosition = target.getBoundingClientRect().top + window.scrollY
        smoothScrollTo(targetPosition - offset)
      }
      
      if (targetId === "footer" && onGetInTouch) {
        onGetInTouch()
      }
    }
  }

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl pt-24 flex flex-col items-center text-center md:items-start md:text-left mx-auto md:mx-0"
      >
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter mb-6 md:mb-8 leading-[1.1] text-balance">
          Renvic Emenido. <br />
          <span className="text-gray-400 dark:text-gray-500">Web Developer.</span>
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-10 md:mb-12 leading-relaxed max-w-2xl text-pretty">
          I build clean, accessible, and highly functional digital experiences. Specialized in React, TypeScript, and crafting modern user interfaces.
        </p>

        <div className="flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full md:w-auto">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="flex-1 sm:flex-none text-center px-5 py-2.5 sm:px-6 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm sm:text-base font-medium transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#footer"
            onClick={(e) => handleScroll(e, "footer")}
            className="flex-1 sm:flex-none text-center px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-100 dark:bg-[#111] text-black dark:text-white rounded-lg text-sm sm:text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
