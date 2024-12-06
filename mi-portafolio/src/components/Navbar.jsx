import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Inicio",
    "Sobre Mí",
    "Experiencia",
    "Proyectos",
    "Skills",
    "Contacto",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div
        className={`mx-auto max-w-6xl backdrop-blur-md rounded-xl border-gray-100 border transition-all duration-300 px-6 py-4 
        ${
          scrolled
            ? "bg-white/10 shadow-md shadow-black/5 border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Martin Camer
            </h1>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.div key={item} className="relative">
                <a
                  className="text-gray-600 px-4 py-2 cursor-pointer relative z-10 
                  after:content-[''] after:absolute after:left-0 after:right-0 
                  after:bottom-0 after:h-[2px] after:bg-primary 
                  after:scale-x-0 hover:after:scale-x-100 
                  after:transition-transform after:duration-300 after:origin-center"
                >
                  {item}
                </a>
              </motion.div>
            ))}

            {/* Language Toggle Button */}
            <motion.button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-xl bg-primary/10 text-gray-600 hover:bg-primary/20 transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "es" ? "EN" : "ES"}
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Toggle for Mobile */}
            <motion.button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-lg bg-primary/10 text-gray-600"
              whileTap={{ scale: 0.95 }}
            >
              {language === "es" ? "EN" : "ES"}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg relative z-50 bg-primary/10"
            >
              {/* Hamburger icon spans */}
              <div className="w-6 h-5 relative flex items-center justify-center">
                <span
                  className={`w-full h-0.5 bg-primary block transition-all duration-300 absolute ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-primary block transition-all duration-300 absolute ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-primary block transition-all duration-300 absolute ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-4 right-4 backdrop-blur-lg bg-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-4 gap-4">
                {menuItems.map((item) => (
                  <motion.span
                    key={item}
                    className="text-gray-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-primary/10 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
