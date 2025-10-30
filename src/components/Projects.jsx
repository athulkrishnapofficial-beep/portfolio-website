import React from 'react';
import ProjectCard from './ProjectCard';

const myProjects = [
  {
    id: 1,
    title: 'EPIC Properties',
    description: 'A full-stack real estate website with user authentication and property listings, built with Firebase and React.',
    imageUrl: 'ssepi.webp',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://epic-ten-xi.vercel.app/',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-bborder-sky-700/20 via-sky-950/30 to-gray-950 text-white overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* Section Heading */}
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-5xl font-extrabold text-sky-300 tracking-wide drop-shadow-[0_0_20px_rgba(56,189,248,0.5)] animate-pulse">
          My Projects
        </h2>
        <p className="text-sky-200/80 mt-4 max-w-2xl">
          A collection of my favorite creations — built with love, logic, and a touch of caffeine ☕
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-sky-500/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Projects;
