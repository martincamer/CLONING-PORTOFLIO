import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "SOBRE MÍ",
      name: "Martin Camer",
      currentWork:
        "Actualmente me encuentro trabajando como desarrollador Full Stack (React & Express & PostgreSQL || MongoDB) en Tecnohouse Viviendas.",
      education:
        "Cuento con el título de Técnico Superior en Programación de la Universidad Tecnológica Nacional.",
      degree: "Técnico Superior en Desarollo de Software",
      university:
        "Graduado de la Tecnicatura Universitaria en Desarollo de Software del Instituto de educación Superior N°7, Venado Tuerto, Santa Fe.",
      graduationDate: "26 de febrero de 2022",
    },
    en: {
      title: "ABOUT ME",
      name: "Martin Camer",
      currentWork:
        "I'm currently working as a Full Stack Developer (React & Express & PostgreSQL || MongoDB) at Tecnohouse Viviendas.",
      education:
        "I hold a Higher Technical Degree in Programming from the National Technological University.",
      degree: "Higher Technical Degree in Software Development",
      university:
        "Graduated from the University Technical Program in Software Development at the Higher Education Institute N°7, Venado Tuerto, Santa Fe.",
      graduationDate: "February 26, 2022",
    },
  };

  return (
    <motion.section className="min-h-screen flex items-center justify-center relative">
      <motion.div
        className="max-w-4xl w-full px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-6xl max-md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {content[language].title}
          </h3>
          <h2 className="text-4xl font-semibold text-gray-800">
            {content[language].name}
          </h2>
        </motion.header>

        <div className="about space-y-12">
          <motion.div
            className="space-y-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg">{content[language].currentWork}</p>
            <p className="text-lg">{content[language].education}</p>
          </motion.div>

          <motion.div
            className="studies-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="study-card bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-secondary/20 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {content[language].degree}
              </h3>
              <p className="text-gray-600 mb-4">
                {content[language].university}
              </p>
              <p className="text-sm text-secondary font-medium">
                {content[language].graduationDate}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
