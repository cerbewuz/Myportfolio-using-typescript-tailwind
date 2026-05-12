import { motion } from "framer-motion"

type AboutProps = {
  id?: string
}

const skills = [
  {
    name: "React", icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 21.9c4.9 0 9-4 9-9s-4.1-9-9-9-9 4-9 9 4.1 9 9 9z" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    )
  },
  {
    name: "TypeScript", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.246 3.774 3.774 0 0 0-.714-.113c-.429 0-.739.106-.931.319s-.287.511-.287.896v1.168H21.5v2.4h-2.59v7.134h-2.91V17.08h-1.636v-2.4h1.636v-1.146c0-1.12.28-1.996.839-2.628.56-.632 1.341-.948 2.343-.948zm-11.838 0c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.246 3.774 3.774 0 0 0-.714-.113c-.429 0-.739.106-.931.319s-.287.511-.287.896v1.168H8.5v2.4H5.91v7.134H3V17.08h-1.636v-2.4h1.636v-1.146c0-1.12.28-1.996.839-2.628.56-.632 1.341-.948 2.343-.948z" />
      </svg>
    )
  },
  {
    name: "Tailwind", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    )
  },
  {
    name: "Laravel", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M5.47 11.606L9.317 15.454l1.921-1.922-3.847-3.847zm11.532-1.921l3.847 3.847L17.003 17.38l-3.847-3.847zM5.47 15.454l1.921-1.921 1.922 1.921-1.922 1.922zm11.532-5.763l1.921 1.921-1.922 1.922-1.921-1.922zm-5.766 5.763l1.922-1.921 1.921 1.921-1.921 1.922zm5.766-5.763l1.921-1.921-1.922-1.922-1.921 1.921zm1.921-1.921l1.922 1.921-1.922 1.922-1.921-1.922zM3.548 11.606l1.922-1.921 3.847 3.847-1.921 1.922zm5.769 5.764l1.921-1.922 1.922 1.922-1.922 1.921zM1.626 9.685l1.922-1.921 1.921 1.921-1.921 1.922zm5.769 5.764l1.921-1.922 1.922 1.922-1.922 1.921zm13.456-11.528l1.922 1.921-1.922 1.922-1.921-1.922zM15.084 5.842l1.922-1.921 1.921 1.921-1.921 1.922zm1.922-1.921l1.921-1.922 1.922 1.922-1.922 1.921z" />
      </svg>
    )
  },
  {
    name: "C#", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 16.5h-1.5v-2.25h-1v2.25h-1.5v-2.25h-2v-1.5h2v-1h-2v-1.5h2v-2.25h1.5v2.25h1v-2.25h1.5v2.25h2v1.5h-2v1h2v1.5h-2v2.25zM12.25 12.75h-1v-1h1v1z" />
      </svg>
    )
  },
  {
    name: ".NET", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.953 4.57a10 10 0 1 0 0 14.86L12 12l11.953-7.43zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    )
  },
  {
    name: "Framer Motion", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M0 0l12 12L24 0v24L12 12 0 24V0z" />
      </svg>
    )
  }
]

export default function About({ id = "about" }: AboutProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight mb-6 md:mb-8 text-center md:text-left">About Me</h2>
          <div className="w-40 h-40 sm:w-64 sm:h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#111] border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
            <img
              src="Profile-photo/My-Photo.png"
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
          className="space-y-10 md:space-y-12 mt-1 md:mt-16 text-center md:text-left"
        >
          <p className="text-base md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed text-pretty font-medium">
            I’m Renvic Emenido, a developer focused on creating smooth and intuitive user interfaces.
            I enjoy the process of turning complex requirements into simple, elegant designs that work seamlessly across all devices.
          </p>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-4 sm:mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-wide bg-gray-50 dark:bg-[#0c0c0c] text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/50 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all cursor-default"
                >
                  <span className="opacity-70 group-hover:opacity-100">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
