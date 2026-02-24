import { motion } from "framer-motion"

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

      <div className="space-y-16">
        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 group"
          >
            <div className="md:w-1/3 mt-1">
              <span className="text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
                {item.period}
              </span>
            </div>
            
            <div className="md:w-2/3 space-y-2">
              <h3 className="text-xl font-semibold tracking-tight">{item.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{item.institution}</p>
              
              <p className="pt-2 text-gray-500 dark:text-gray-400 leading-relaxed text-pretty">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
