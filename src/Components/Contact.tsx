import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

type ContactProps = {
  id?: string;
};

export default function Contact({ id = "contact" }: ContactProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-16"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 text-blue-400"
      >
        Contact Me
      </motion.h2>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex gap-6 mb-10"
      >
        <a
          href="https://github.com/cerbewuz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-100 transition"
        >
          <Github size={60} />
        </a>
        <a
          href="https://ph.linkedin.com/in/renvic-emenido03"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-100 transition"
        >
          <Linkedin size={60} />
        </a>
      </motion.div>

      {/* Contact Form */}
      <form
        action="mailto:r.emenido03@gmail.com"
        method="POST"
        encType="text/plain"
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          type="submit"
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
