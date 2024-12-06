import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export function Skills() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Habilidades",
    },
    en: {
      title: "Skills",
    },
  };

  const skills = [
    { icon: FaReact, name: "React" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3, name: "CSS3" },
  ];

  return (
    <section className="py-20 bg-dark/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-12">
          {content[language].title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((Skill, index) => (
            <motion.div
              key={Skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <Skill.icon className="w-16 h-16 text-secondary mb-4" />
              <span className="text-gray-800">{Skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
