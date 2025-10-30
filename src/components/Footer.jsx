import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = {
    github: "https://github.com/athulkrishnapofficial-beep/",
    linkedin: "https://www.linkedin.com/in/athulkrishnap/",
    instagram: "https://www.instagram.com/athul_krishnap27/",
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-sky-950/30 to-gray-950 text-sky-200 py-10 overflow-hidden">
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_70%)] -z-10" />

      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        
        {/* === Copyright === */}
        <p className="text-sm text-sky-300/80 text-center sm:text-left">
          © {currentYear} <span className="font-semibold text-sky-400">Athul Krishna</span>.  
          All rights reserved.
        </p>

        {/* === Social Links === */}
        <div className="flex items-center space-x-6 text-2xl">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-sky-400 transition-all hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            <FaGithub />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sky-400 transition-all hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            <FaLinkedin />
          </a>

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-sky-400 transition-all hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400/60 to-transparent animate-pulse" />
    </footer>
  );
};

export default Footer;
