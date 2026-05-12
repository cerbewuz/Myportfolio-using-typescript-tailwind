import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, X, Phone } from "lucide-react"

type ContactProps = {
  id?: string
};

export default function Contact({ id = "contact" }: ContactProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer
      id={id}
      className="py-12 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 dark:text-gray-400 font-medium order-2 md:order-1"
        >
          © {new Date().getFullYear()} Renvic Emenido. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 order-1 md:order-2"
        >
          <a href="https://github.com/cerbewuz" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border border-gray-200/50 dark:border-gray-800/50 transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://ph.linkedin.com/in/renvic-emenido03" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border border-gray-200/50 dark:border-gray-800/50 transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 text-sm font-bold tracking-tight rounded-lg bg-gray-100 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 border border-gray-200/50 dark:border-gray-800/50 transition-all active:scale-95"
          >
            
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-sm p-8 rounded-[2rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 shadow-2xl z-[70]"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold tracking-tight">Reach me</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800/50 group transition-colors hover:border-gray-300 dark:hover:border-gray-700">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1">Email</p>
                    <a href="mailto:r.emenido03@gmail.com" className="font-semibold text-sm hover:underline underline-offset-4">r.emenido03@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800/50 group transition-colors hover:border-gray-300 dark:hover:border-gray-700">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-1">Contact Number</p>
                    <p className="font-semibold text-sm">+63 963 604 9542 (TNT)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  )
}
