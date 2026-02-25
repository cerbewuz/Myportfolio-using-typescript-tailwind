import { motion } from "framer-motion"
import lingapdvoImg from "../images/lingapdvo.png"
import telsysImg from "../images/telsys.png"

type ProjectsProps = {
  id?: string
}

const projectList = [
  {
    title: "LingapDvo",
    description: "Web application designed to streamline the medical financial assistance process using OCR and automated workflows.",
    tech: ["C#", ".NET", "SQL Server", "OCR"],
    image: lingapdvoImg,
    link: "https://lingap.online/",
  },
  {
    title: "Telsys Dev Team",
    description: "A modern, high-performance website for a development team showcasing services, their portfolio, and team information.",
    tech: ["TypeScript", "TailwindCSS", "React"],
    image: telsysImg,
    link: "https://portfolio-lime-delta-95.vercel.app/",
  },
  {
    title: "Student Voting System",
    description: "A secure online platform for student voting with real-time results and robust authentication.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
]

export default function Projects({ id = "projects" }: ProjectsProps) {
  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight mb-16 text-center md:text-left"
      >
        Projects
      </motion.h2>

      <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group block"
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">No preview available</div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-semibold tracking-wider px-2 py-1 bg-gray-100 dark:bg-[#111] text-gray-500 dark:text-gray-400 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <div className="pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  >
                    View Project <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
