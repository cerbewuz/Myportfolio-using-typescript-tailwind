import { motion } from "framer-motion"
import { FaReact } from "react-icons/fa"
import { SiTypescript, SiTailwindcss, SiFramer, SiLaravel, SiSharp, SiDotnet, SiPython } from "react-icons/si"

type AboutProps = {
  id?: string
}

export default function About({ id = "about" }: AboutProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-12 text-blue-400"
      >
        About Me
      </motion.h2>

      {/* Layout: Image + Bio */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-4xl">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <img
              src="/profile-photo.jpg"
              alt="Renvic Emenido"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Bio + Skills */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
          >
            Hi! I’m{" "}
            <span className="text-blue-400 font-semibold">Renvic Emenido</span>,  
            a passionate web developer who loves building modern, responsive, and
            interactive applications. I enjoy turning complex problems into simple,
            elegant solutions with clean code and smooth user experiences.
          </motion.p>

          {/* Skills (Icons Only) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center"
          >
            {[
              { icon: <FaReact size={40} className="text-blue-400" />, name: "React" },
              { icon: <SiTypescript size={40} className="text-blue-500" />, name: "TypeScript" },
              { icon: <SiTailwindcss size={40} className="text-cyan-400" />, name: "TailwindCSS" },
              { icon: <SiFramer size={40} className="text-pink-400" />, name: "Framer Motion" },
              { icon: <SiLaravel size={40} className="text-red-500" />, name: "Laravel" },
              { icon: <SiSharp size={40} className="text-purple-500" />, name: "C#" },
              { icon: <SiDotnet size={40} className="text-indigo-400" />, name: ".NET" },
              { icon: <SiPython size={40} className="text-yellow-400" />, name: "Python" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="flex flex-col items-center justify-center px-6 py-4 bg-gray-800 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
              >
                {skill.icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
