import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center"
        style={{ opacity, scale }}
      >
        <motion.div
          className="max-w-4xl w-full p-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Hero />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          className="max-w-4xl w-full p-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <About />
        </motion.div>
      </motion.section>
      <motion.section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          className="max-w-4xl w-full p-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <Experience />
        </motion.div>
      </motion.section>

      {/* Experience Section */}
    </div>
  );
};

export default Home;
