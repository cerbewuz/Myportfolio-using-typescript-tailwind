import { motion } from "framer-motion";

type AboutProps = {
  id?: string;
};

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
        className="text-4xl md:text-5xl font-bold mb-6 text-blue-400"
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-10"
      >
        Hi! I’m <span className="text-blue-400 font-semibold">Renvic Emenido</span>,  
        a passionate web developer who loves building modern, responsive, and
        interactive applications. I enjoy turning complex problems into simple,
        elegant solutions with clean code and smooth user experiences.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {["React", "TypeScript", "TailwindCSS", "Framer Motion"].map(
          (skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-4 bg-gray-800 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
            >
              {skill}
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
}
