import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 30px rgba(56,189,248,0.25)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-sky-500/20 rounded-2xl overflow-hidden shadow-lg hover:border-sky-400/50 transition-all"
    >
      {/* === Certificate Image (16:9 Aspect Ratio) === */}
      <div className="relative aspect-video w-full overflow-hidden">
        <motion.img
          src={cert.imageUrl}
          alt={cert.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          whileHover={{ scale: 1.08 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* === Certificate Info === */}
      <div className="p-6">
        <h4
          className="text-xl font-bold text-white mb-2 truncate"
          title={cert.title}
        >
          {cert.title}
        </h4>
        <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

        {/* === View Credential Link === */}
        <motion.a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium text-sm transition-colors"
        >
          View Credential <FaExternalLinkAlt size={12} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
