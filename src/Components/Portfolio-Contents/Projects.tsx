import { motion } from "framer-motion"
import lingapdvoImg from "../../images/lingapdvo.png"
import telsysImg from "../../images/telsys.png"
import doctrackImg from "../../images/doctrack.png"

type ProjectsProps = {
  id?: string
}

const projectList = [
  {
    title: "LingapDvo",
    description: "Web application designed to streamline the medical financial assistance process using OCR and automated workflows.",
    tech: ["C#", ".NET", "MSSQL", "OCR"],
    image: lingapdvoImg,
    link: "https://lingap.online/",
  },
  {
    title: "Infosoft Internship DTR",
    description: "An automated attendance and task management system for interns, featuring facial recognition, geolocation verification, and digital signature workflows for official reporting.",
    tech: ["React", "TailwindCSS", "Laravel", "PostgreSQL", "Framer Motion", "Supabase"],
    link: "#",
  },
  {
    title: "DocTrack",
    description: "A professional document workflow management system designed to streamline document tracking, routing, and task management with real-time status updates and role-based access control.",
    tech: ["React", "TailwindCSS", "PostgreSQL", "Material UI"],
    image: doctrackImg,
    link: "https://www.doctrack.site/",
  },
  {
    title: "Telsys Dev Team",
    description: "A modern, high-performance website for a development team showcasing services, their portfolio, and team information.",
    tech: ["TypeScript", "TailwindCSS", "React"],
    image: telsysImg,
    link: "https://telsys-portfolio.vercel.app/",
  },
]

export default function Projects({ id = "projects" }: ProjectsProps) {
  return (
    <section id={id} className="min-h-screen md:min-h-0 flex flex-col justify-center py-16 md:py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight mb-16 text-center md:text-left"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-12 md:gap-y-16">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group block"
          >
            <div className="aspect-video mb-4 md:mb-6 overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200/50 dark:border-gray-800/50">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-[10px] sm:text-sm font-medium text-center px-2">No preview available</div>
              )}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-300">
                {project.title}
              </h3>

              <p className="text-[10px] sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-pretty">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[9px] sm:text-xs font-semibold tracking-wider px-2 py-1 bg-gray-100 dark:bg-[#111] text-gray-500 dark:text-gray-400 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-[#1a1a1a]">
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
                    className="inline-flex items-center text-[11px] sm:text-sm font-semibold tracking-tight text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
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
