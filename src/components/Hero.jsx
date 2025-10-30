import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const glowX = useTransform(mouseX, (x) => x - window.innerWidth / 2);
  const glowY = useTransform(mouseY, (y) => y - window.innerHeight / 2);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a192f] via-[#0f2742] to-[#102a43] overflow-hidden">
      
      {/* === Mouse Glow Effect (White Glow) === */}
      {isClient && (
        <motion.div
          className="pointer-events-none absolute w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl"
          style={{
            translateX: glowX,
            translateY: glowY,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        ></motion.div>
      )}

      {/* === Subtle Background Highlight === */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10">

        {/* === Left Column === */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-sky-400">Athul Krishna</span>
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Web Developer
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build responsive and efficient web applications using React,
            Node.js, and Firebase. Let’s create something innovative together.
          </motion.p>

          {/* === Buttons === */}
          <motion.div
            className="flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-sky-400 text-black font-semibold text-lg shadow-lg hover:bg-white hover:shadow-sky-400/50 hover:scale-105 transition-all duration-300"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gray-800 text-white font-semibold text-lg shadow-lg hover:bg-sky-400 hover:text-black hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* === Right Column: Floating Profile Image === */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_60px_-15px_rgba(56,189,248,0.6)] border-4 border-sky-400"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src="/profile.jpg"
              loading="lazy"
              alt="Athul Krishna - Full Stack Developer"
              className="w-full h-full object-cover"
              style={{ backgroundColor: "#1e293b" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

