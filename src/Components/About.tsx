import { motion } from "framer-motion"

type AboutProps = {
  id?: string
}

const skills = [
  "React", "TypeScript", "TailwindCSS", "Framer Motion", 
  "Laravel", "C#", ".NET", "Python"
]

export default function About({ id = "about" }: AboutProps) {
  return (
    <section
      id={id}
      className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold tracking-tight mb-8">About</h2>
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#111] border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
            <img
              src="/profile-photo.jpg"
              alt="Renvic Emenido"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12 mt-1 md:mt-16"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed text-pretty font-medium">
            I’m Renvic Emenido, a developer focused on creating smooth and intuitive user interfaces. 
            I enjoy the process of turning complex requirements into simple, elegant designs that work seamlessly across all devices.
          </p>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium tracking-wide bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/50 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
