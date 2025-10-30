import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-sky-900/40 backdrop-blur-md border border-sky-400/30 
                 rounded-2xl shadow-lg overflow-hidden flex flex-col 
                 transform transition duration-300 hover:scale-105 
                 hover:shadow-sky-400/40 hover:border-sky-400/60"
    >
      {/* Project Image (16:9 ratio) */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={project.imageUrl}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-2 text-sky-300">{project.title}</h3>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-sky-500/20 text-sky-200 border border-sky-400/30 
                         text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sky-100/80 mb-6 flex-grow">{project.description}</p>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-600/80 
                       hover:bg-sky-500 text-white px-4 py-2 rounded-md 
                       font-medium transition-colors duration-300"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-800/70 
                       hover:bg-sky-700 text-white px-4 py-2 rounded-md 
                       font-medium transition-colors duration-300"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
