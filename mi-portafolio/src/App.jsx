import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = ((e.clientX - centerX) / centerX) * 20;
      const moveY = ((e.clientY - centerY) / centerY) * 20;
      setMousePosition({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <LanguageProvider>
      <main className="relative">
        {/* Fondo con puntos */}
        <div className="fixed inset-0 z-[1000] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div
            className="absolute inset-0"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundImage: `radial-gradient(circle at 1px 1px, ${hexToRgba(
                "#3371cd",
                0.15
              )} 2px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Navbar fijo */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        <Home />
      </main>
    </LanguageProvider>
  );
}

export default App;
