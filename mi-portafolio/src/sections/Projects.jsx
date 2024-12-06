import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Projects() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Proyectos",
      // Aquí puedes agregar más traducciones para los proyectos
    },
    en: {
      title: "Projects",
      // Here you can add more translations for projects
    },
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-primary mb-12">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí irán las tarjetas de proyectos */}
        </div>
      </motion.div>
    </section>
  );
}
