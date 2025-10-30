import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-slate-900 via-sky-900/30 to-slate-900 text-gray-100"
    >
      {/* Title with animation */}
      <motion.h2
        className="text-5xl font-extrabold mb-10 text-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Description Section */}
      <motion.div
        className="max-w-3xl text-lg text-gray-300 leading-relaxed space-y-8 text-center backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.2)] border border-sky-700/20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>
          Hello! I'm <span className="text-sky-300 font-semibold">Athul</span>, a passionate{' '}
          <span className="text-sky-400 font-semibold hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)] transition-all">
            Full-Stack Developer
          </span>{' '}
          with a love for building clean, responsive, and user-friendly web
          applications. My journey started with curiosity — how websites work —
          which quickly grew into a lifelong passion for coding.
        </p>

        <p>
          I specialize in the{' '}
          <span className="font-semibold text-sky-400 hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all">
            MERN stack (MongoDB, Express, React, Node.js)
          </span>{' '}
          and work extensively with modern front-end tools like{' '}
          <span className="font-semibold text-sky-300 hover:text-sky-200 transition-all">
            React, Vite, and Tailwind CSS
          </span>. On the backend, I leverage{' '}
          <span className="font-semibold text-sky-300 hover:text-sky-200 transition-all">
            Firebase and Node.js
          </span>{' '}
          to build scalable APIs and manage real-time databases efficiently.
        </p>

        <p>
          As the founder of{' '}
          <span className="font-semibold text-white hover:text-sky-200 transition-all">
            Axumics
          </span>, my web development brand, I strive to transform creative ideas
          into digital experiences that solve real-world problems. When I'm not
          coding, I’m usually exploring new technologies or creating passion
          projects just for fun.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
