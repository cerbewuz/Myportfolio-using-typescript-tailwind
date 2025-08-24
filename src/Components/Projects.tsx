import { motion } from "framer-motion"
// Import images from src/images
import lingapdvoImg from "../images/lingapdvo.png"
import telsysImg from "../images/telsys.png"

type ProjectsProps = {
  id?: string
}

export default function Projects({ id = "projects" }: ProjectsProps) {
  const projectList = [
    {
      title: "LingapDvo",
      description:
        "A web application designed to simplify the application process for medical financial assistance in Davao City using OCR and automated workflows.",
      tech: ["C#", ".NET", "SQL Server"],
      image: lingapdvoImg,
      link: "https://lingapdvo.runasp.net/",
    },
    {
      title: "Telsys Dev Team Website",
      description:
        "A modern website for Telsys Dev Team showcasing services, portfolio, and team information.",
      tech: ["Typescript", "TailwindCSS"],
      image: telsysImg,
      link: "https://portfolio-lime-delta-95.vercel.app/",
    },
    {
      title: "Student Voting System",
      description:
        "An online voting platform for students with secure authentication, vote counting, and real-time results.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      link: "#",
    },
  ]

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-blue-400"
      >
        Projects
      </motion.h2>
      <h3 className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-10">
        Here are some of my projects built with modern web and desktop technologies.
      </h3>
      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl w-full">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2 text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href={project.link}
              className="mt-auto text-blue-400 hover:text-blue-300 font-medium transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
