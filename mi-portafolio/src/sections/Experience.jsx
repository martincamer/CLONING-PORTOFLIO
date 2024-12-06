import React from "react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Experience() {
  const { language } = useContext(LanguageContext);
  const currentMonth = new Intl.DateTimeFormat(
    language === "es" ? "es-ES" : "en-US",
    {
      month: "long",
    }
  ).format(new Date());

  const content = {
    es: {
      title: "EXPERIENCIA",
      company: "Tecnohouse Viviendas, Empresa de viviendas industrializadas.",
      role: "Desarrollador Full Stack & Gerente de Desarrollo",
      description:
        "Desarrolle un sistema integral de gestión empresarial (ERP) full stack, que abarca módulos de facturación, caja y bancos, gestión de viviendas, logística y asuntos legales. El sistema optimiza los procesos internos y mejora la eficiencia operativa. Tecnologías principales: React, Node.js, Express y PostgreSQL/MongoDB. En constante evolución, implementando nuevos módulos y funcionalidades para expandir las capacidades del sistema según las necesidades de la empresa.",
      date: `${currentMonth} de 2024 - Actualidad`,
    },
    en: {
      title: "EXPERIENCE",
      company: "Tecnohouse Homes, Industrialized Housing Company",
      role: "Full Stack Developer & Development Manager",
      description:
        "Developed a comprehensive full-stack enterprise resource planning (ERP) system, encompassing modules for billing, cash and banking, housing management, logistics, and legal affairs. The system optimizes internal processes and improves operational efficiency. Main technologies: React, Node.js, Express, and PostgreSQL/MongoDB. Continuously evolving, implementing new modules and functionalities to expand system capabilities according to company needs.",
      date: `${currentMonth} 2024 - Present`,
    },
  };

  const text = content[language];

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-white relative"
      id="experience"
    >
      <div className="experience-container max-w-4xl w-full px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-6xl max-md:text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {text.title}
          </h3>
        </motion.header>

        <motion.div
          className="experience"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-secondary"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {text.company}
          </motion.h2>
          <motion.div
            className="experience-card bg-gray-50 rounded-lg p-6 shadow-lg"
            whileHover={{
              scale: 1.01,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3 text-primary">
              {text.role}
            </h3>
            <p className="text-gray-600 mb-4">{text.description}</p>
            <p className="text-sm text-gray-500">{text.date}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
