import { motion } from "framer-motion"

type HeroProps = {
  id?: string
};

export default function Hero({ id = "home" }: HeroProps) {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById("projects")
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
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
        className="max-w-3xl pt-24"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
          Renvic Emenido. <br />
          <span className="text-gray-400 dark:text-gray-500">Web Developer.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium mb-12 leading-relaxed max-w-2xl text-pretty">
          I build clean, accessible, and highly functional digital experiences. Specialized in React, TypeScript, and crafting modern user interfaces.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium transition-transform hover:-translate-y-0.5"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-gray-100 dark:bg-[#111] text-black dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
