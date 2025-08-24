import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type HeroProps = {
  id?: string;
};

export default function Hero({ id = "home" }: HeroProps) {
  const words = ["Renvic Emenido", "A Coding Enthusiast", "A Passionate Web Developer"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[index];
    if (!isDeleting && displayedText.length < currentWord.length) {
      // typing
      timeout = setTimeout(
        () => setDisplayedText(currentWord.slice(0, displayedText.length + 1)),
        100
      );
    } else if (isDeleting && displayedText.length > 0) {
      // deleting
      timeout = setTimeout(
        () => setDisplayedText(currentWord.slice(0, displayedText.length - 1)),
        60
      );
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      // pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      // move to next word
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, words]);

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white text-center px-6"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m{" "}
        <span className="text-blue-500 relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 max-w-xl mb-8"
      >
        I build modern, responsive, and interactive{" "}
        <span className="text-blue-400">web applications</span> with React,
        TypeScript, and TailwindCSS.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition cursor-pointer"
      >
        View My Work
      </motion.a>
    </section>
  );
}
