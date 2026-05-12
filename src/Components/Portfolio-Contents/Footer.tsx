import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, X, Phone } from "lucide-react"

type FooterProps = {
  id?: string
  showHelper?: boolean
  onHideHelper?: () => void
};

export default function Footer({ id = "footer", showHelper, onHideHelper }: FooterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false)

  // Auto-hide helper after 5 seconds
  useEffect(() => {
    if (showHelper && onHideHelper) {
      const timer = setTimeout(() => {
        onHideHelper();
      }, 3100);
      return () => clearTimeout(timer);
    }
  }, [showHelper, onHideHelper])

  // Auto-hide helper when modal opens
  useEffect(() => {
    if (isModalOpen && showHelper && onHideHelper) {
      onHideHelper()
    }
  }, [isModalOpen, showHelper, onHideHelper])

  return (
    <motion.footer
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => {
        if (!hasAutoTriggered && !showHelper && !isModalOpen) {
          // Trigger the helper if it's not already showing and modal is closed
          // We use a small timeout to let the scroll settle
          setTimeout(() => {
            const getInTouchBtn = document.querySelector('a[href="#footer"]');
            if (getInTouchBtn) {
              (getInTouchBtn as HTMLElement).click();
            }
          }, 500);
          setHasAutoTriggered(true);
        }
      }}
      viewport={{ once: true, amount: 0.8 }}
      className="py-10 md:py-12 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] md:text-sm text-gray-500 dark:text-gray-400 font-medium order-2 md:order-1"
        >
          © 2026 Renvic Emenido. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 order-1 md:order-2"
        >
          <a
            href="https://github.com/cerbewuz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200/80 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110 active:scale-95 border border-gray-300/50 dark:border-gray-800"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/work/renvic-emenido-467b5b293"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-200/80 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-110 active:scale-95 border border-gray-300/50 dark:border-gray-800"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <div className="relative">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/80 dark:bg-[#111] text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all hover:scale-105 active:scale-95 border border-gray-300/50 dark:border-gray-800 font-medium text-xs md:text-sm"
            >
              Contact Details Here!
            </button>

            {/* Helper Bubble */}
            <AnimatePresence>
              {showHelper && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 rounded-lg bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md text-gray-900 dark:text-gray-100 text-[11px] font-bold text-center shadow-2xl z-10 pointer-events-auto border border-gray-200 dark:border-gray-800"
                >
                  <div className="relative">
                    Press here for my contact details!
                    {/* Speech Bubble Arrow */}
                    <div className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-200 dark:border-t-gray-800" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white dark:bg-[#0a0a0a] w-full max-w-sm rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg md:text-xl font-bold tracking-tight">Contact Details</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-[#111] text-gray-600 dark:text-gray-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                    <a href="mailto:renvic.emenido01@gmail.com" className="text-sm md:text-base font-medium hover:underline">renvic.emenido01@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-gray-50 dark:bg-[#111] text-gray-600 dark:text-gray-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Contact Number</p>
                    <p className="text-sm md:text-base font-medium">+63 963 604 9542 (TNT)</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full mt-10 py-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold tracking-wide hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  )
}
