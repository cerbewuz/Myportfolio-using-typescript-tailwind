import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

type ExperienceProps = {
  id?: string
}

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Mindanao",
    period: "2022 — Present",
    description: "Specializing in Web Development and Software Engineering. Focused on building scalable applications and mastering modern tech stacks."
  },
  {
    degree: "Senior High School - STEM Strand",
    institution: "Pablo Lorenzo National High School",
    period: "2020 — 2022",
    description: "Concentrated on Science, Technology, Engineering, and Mathematics, building a strong analytical and technical foundation."
  },
  {
    degree: "Junior High School",
    institution: "Pablo Lorenzo National High School",
    period: "2016 — 2020",
    description: "Developed early interest in technology and computer science fundamentals."
  }
]

export default function Experience({ id = "experience" }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight mb-16 text-center md:text-left"
      >
        Education
      </motion.h2>

      <div ref={containerRef} className="relative space-y-16">
        {/* Static Background Line */}
        <div className="absolute left-[7px] md:left-[calc(33.333%-24px)] top-2 bottom-2 w-[2px] bg-gray-100 dark:bg-gray-800" />
        
        {/* Interactive Scroll Progress Line */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-[7px] md:left-[calc(33.333%-24px)] top-2 bottom-2 w-[2px] bg-gray-600 dark:bg-gray-400 origin-top z-10"
        />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0 flex flex-col md:flex-row md:justify-between md:items-start gap-4 group cursor-default"
          >
            {/* Interactive Timeline Dot */}
            <motion.div 
              initial={{ backgroundColor: "var(--dot-bg)", borderColor: "var(--dot-border)" }}
              whileInView={{ 
                backgroundColor: "var(--dot-active-bg)", 
                borderColor: "var(--dot-active-border)",
                scale: [1, 1.2, 1] 
              }}
              viewport={{ margin: "0px 0px -50% 0px" }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.5 }}
              className="absolute left-[-1px] md:left-[calc(33.333%-32px)] top-[6px] w-4 h-4 rounded-full border-2 z-20 
                [--dot-bg:white] dark:[--dot-bg:#0a0a0a] 
                [--dot-border:#9ca3af] dark:[--dot-border:#4b5563]
                [--dot-active-bg:#111827] dark:[--dot-active-bg:#f3f4f6]
                [--dot-active-border:#111827] dark:[--dot-active-border:#f3f4f6]
                group-hover:border-gray-900 dark:group-hover:border-gray-100 transition-colors" 
            />

            <div className="md:w-1/3 mt-1">
              <span className="text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-200">
                {item.period}
              </span>
            </div>
            
            <div className="md:w-2/3 space-y-2">
              <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-100">{item.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
              
              <p className="pt-2 text-gray-500 dark:text-gray-400 leading-relaxed text-pretty group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
