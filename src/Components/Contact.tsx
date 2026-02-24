import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

type ContactProps = {
  id?: string
};

export default function Contact({ id = "contact" }: ContactProps) {
  return (
    <section
      id={id}
      className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50"
    >
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Contact</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed text-pretty font-medium">
              I'm always open to new opportunities and collaborations. Reach out via the form or my social channels.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/cerbewuz" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200/50 dark:border-gray-800/50 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://ph.linkedin.com/in/renvic-emenido03" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200/50 dark:border-gray-800/50 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:r.emenido03@gmail.com" className="p-3 rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-200/50 dark:border-gray-800/50 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          action="mailto:r.emenido03@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 dark:border-gray-800/80 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 dark:border-gray-800/80 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 dark:border-gray-800/80 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </motion.form>
      </div>
      
      <footer className="mt-32 pt-8 text-center border-t border-gray-200 dark:border-gray-800/50">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">© {new Date().getFullYear()} Renvic Emenido. All rights reserved.</p>
      </footer>
    </section>
  )
}
