import { motion } from "framer-motion";

type ContactProps = {
  id?: string;
};

export default function Contact({ id = "contact" }: ContactProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 text-blue-400"
      >
        Contact
      </motion.h2>

      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-lg transition"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
