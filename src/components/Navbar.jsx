import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleNavToggle = () => setNavIsOpen(!navIsOpen);
  const closeNav = () => setNavIsOpen(false);

  const navLinks = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#skills", title: "Skills" },
    { href: "#certificates", title: "Certificates" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-[#0a192f]/70 border-b border-sky-500/20 z-50 shadow-[0_0_15px_-5px_rgba(56,189,248,0.3)]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* === Logo / Brand === */}
        <motion.a
          href="#home"
          className="text-2xl font-extrabold text-sky-400 tracking-wide hover:text-white transition-colors"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Athul<span className="text-white">Krishna</span>
        </motion.a>

        {/* === Desktop Nav Links === */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="relative text-gray-200 hover:text-sky-400 font-medium transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {link.title}
              {/* Hover underline animation */}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          onClick={handleNavToggle}
          className="md:hidden text-sky-400 hover:text-white transition-colors"
          aria-label="Toggle navigation"
        >
          {navIsOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* === Mobile Menu (Animated) === */}
      <AnimatePresence>
        {navIsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a192f]/95 backdrop-blur-md shadow-xl border-t border-sky-500/20"
          >
            <div className="flex flex-col items-center py-6 space-y-5">
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={closeNav}
                  className="text-gray-200 text-lg font-medium hover:text-sky-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
