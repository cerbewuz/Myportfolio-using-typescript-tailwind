import { motion } from "framer-motion"

type SectionProps = {
  id?: string
  title: string
  children: React.ReactNode
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}
    </motion.section>
  )
}

export default Section
