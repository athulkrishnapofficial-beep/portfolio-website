import React from "react";
import { motion } from "framer-motion";

// icons
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaUserSecret,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiPython,
  SiBootstrap,
  SiAdobexd,
} from "react-icons/si";

const skillsList = [
  { title: "React", icon: <FaReact /> },
  { title: "JavaScript", icon: <SiJavascript /> },
  { title: "Node.js", icon: <FaNodeJs /> },
  { title: "Express.js", icon: <SiExpress /> },
  { title: "Firebase", icon: <SiFirebase /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "Vite", icon: <SiVite /> },
  { title: "HTML5", icon: <FaHtml5 /> },
  { title: "CSS3", icon: <FaCss3Alt /> },
  { title: "Git", icon: <FaGitAlt /> },
  { title: "GitHub", icon: <FaGithub /> },
  { title: "Python", icon: <SiPython /> },
  { title: "Bootstrap", icon: <SiBootstrap /> },
  { title: "Adobe XD", icon: <SiAdobexd /> },
  { title: "Vulnerability analysis", icon: <FaUserSecret /> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

const SkillCard = ({ icon, title }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-sky-500/10 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center transform transition-transform"
      aria-label={title}
      title={title}
      role="listitem"
    >
      <div className="text-5xl md:text-6xl text-sky-400 mb-4 drop-shadow-[0_6px_18px_rgba(56,189,248,0.12)]">
        {icon}
      </div>
      <h4 className="text-lg md:text-xl font-semibold text-white text-center">{title}</h4>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-16 bg-gradient-to-b border-sky-700/20 via-[#082938] border-sky-700/20 text-gray-100 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-10 text-sky-300 drop-shadow-[0_6px_20px_rgba(56,189,248,0.12)]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        role="list"
        aria-label="List of skills"
      >
        {skillsList.map((skill) => (
          <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
        ))}
      </motion.div>

      {/* optional short footnote */}
      <motion.p
        className="mt-10 text-center text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        These are the main tools and technologies I work with — I enjoy combining elegant frontend
        experiences with robust backend services to ship real products.
      </motion.p>
    </section>
  );
};

export default Skills;
