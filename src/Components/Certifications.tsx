import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink } from "lucide-react"

type CertificationsProps = {
  id?: string
}

const certificationList = [
  {
    title: "IT Specialist - Cybersecurity",
    issuer: "Certiport, a Pearson VUE business",
    date: "10/13/2025",
    expiry: "10/14/2030",
    id: "2d759bbe-4289-4b2f-bf90-49bdff234c9a",
    badge: "/Certifications/Badges/it-specialist-cybersecurity.webp",
    transcript: "/Certifications/Transcripts/Cybersecurity.webp",
  },
  {
    title: "IT Specialist - Network Security",
    issuer: "Certiport, a Pearson VUE business",
    date: "07/13/2025",
    expiry: "07/14/2030",
    id: "29b6d34f-3914-493b-866e-e41461e648c4",
    badge: "/Certifications/Badges/it-specialist-network-security.webp",
    transcript: "/Certifications/Transcripts/Network-security.webp",
  },
  {
    title: "IT Specialist - Networking",
    issuer: "Certiport, a Pearson VUE business",
    date: "12/20/2024",
    id: "7b8d4637-39fd-4afc-9461-cccd01f66383",
    badge: "/Certifications/Badges/it-specialist-networking.webp",
    transcript: "/Certifications/Transcripts/Networking.webp",
  },
  {
    title: "IT Specialist - HTML and CSS",
    issuer: "Certiport, a Pearson VUE business",
    date: "05/23/2024",
    id: "3ae3fa2a-49a6-43c7-a842-73f03d47f57f",
    badge: "/Certifications/Badges/it-specialist-html-and-css.webp",
    transcript: "/Certifications/Transcripts/HTML-and-CSS.webp",
  },
  {
    title: "IT Specialist - Databases",
    issuer: "Certiport, a Pearson VUE business",
    date: "03/09/2024",
    id: "cf28e824-2e39-4b29-b18f-5ed1656a6211",
    badge: "/Certifications/Badges/it-specialist-databases.webp",
    transcript: "/Certifications/Transcripts/Databases.webp",
  },
  {
    title: "IT Specialist - Java",
    issuer: "Certiport, a Pearson VUE business",
    date: "12/12/2022",
    id: "f5c71fef-abb1-4e71-838b-95897b79e7fe",
    badge: "/Certifications/Badges/it-specialist-java.webp",
    transcript: "/Certifications/Transcripts/Java.webp",
  },
]

export default function Certifications({ id = "certifications" }: CertificationsProps) {
  const [selectedTranscript, setSelectedTranscript] = useState<string | null>(null);

  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-200 dark:border-gray-800/50">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-2xl font-bold tracking-tight mb-16 text-center md:text-left"
      >
        Certifications
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificationList.map((cert, i) => (
          <motion.div
            key={i}
            onClick={() => setSelectedTranscript(cert.transcript)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Badge Container */}
            <div className="w-24 h-24 mb-6 relative flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-110">
              <img 
                src={cert.badge} 
                alt={`${cert.title} badge`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="space-y-2 flex-grow">
              <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors px-2">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {cert.issuer}
              </p>
              
              <div className="pt-4 space-y-1 mt-auto">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase">
                  Issued: {cert.date}
                  {cert.expiry && ` • Expires: ${cert.expiry}`}
                </p>
                <p className="text-[10px] font-mono text-gray-400/70 truncate max-w-[180px] mx-auto" title={`ID: ${cert.id}`}>
                  ID: {cert.id}
                </p>
              </div>
            </div>
            
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400">View Transcript</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Universal Transcript Modal */}
      <AnimatePresence>
        {selectedTranscript && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedTranscript(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full bg-white dark:bg-[#111] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <a 
                  href={selectedTranscript} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} />
                </a>
                <button
                  onClick={() => setSelectedTranscript(null)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[85vh] overflow-y-auto p-4 md:p-8 flex items-center justify-center">
                <img
                  src={selectedTranscript}
                  alt="Certification Transcript"
                  className="max-w-full h-auto rounded-lg shadow-lg select-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
