import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function Hero() {
  const { language } = useLanguage();

  const content = {
    es: {
      downloadCV: "Descargar CV",
      role: "Full Stack Developer",
      stack: "React & Express",
    },
    en: {
      downloadCV: "Download CV",
      role: "Full Stack Developer",
      stack: "React & Express",
    },
  };

  return (
    <motion.section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <header className="header-container max-w-4xl w-full p-8 z-10">
        <motion.a
          href="/assets/CV-MARTÍN-2024.pdf"
          download
          className="download inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-lg transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          <span className="font-medium text-primary">
            {content[language].downloadCV}
          </span>
        </motion.a>

        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-7xl max-md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {content[language].role}
          </h1>
          <h2 className="text-4xl font-semibold text-primary max-md:text-2xl">
            Martin Camer
          </h2>
          <h3 className="text-xl text-secondary max-md:text-lg">
            {content[language].stack}
          </h3>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a
            href="https://www.linkedin.com/in/martin-camer-115651201"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Linkedin
          </a>
          <a
            href="https://github.com/martincamer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Github
          </a>
        </motion.div>

        <motion.footer
          className="mt-12 flex flex-wrap gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[
            { src: "react", delay: 0 },
            { src: "typescript", delay: 0.1 },
            { src: "express", delay: 0.2 },
            { src: "mongodb", delay: 0.3 },
            { src: "javascript", delay: 0.4 },
            { src: "html5", delay: 0.5 },
            { src: "css3", delay: 0.6 },
            { src: "git", delay: 0.7 },
          ].map(({ src, delay }) => (
            <motion.img
              key={src}
              src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${src}/${src}-original.svg`}
              alt={src}
              className="w-10 h-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.footer>
      </header>
    </motion.section>
  );
}
