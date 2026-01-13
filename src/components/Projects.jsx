import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { resumeData } from '../data/resume.jsx';

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="text-gradient-accent">Work</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A selection of projects that showcase my passion for building scalable, user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative h-full"
  >
    <div className="h-full glass rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-3">
          <a 
            href={project.github} 
            target="_blank"
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
          >
            <Github size={18} />
          </a>
          {project.link !== "#" && (
            <a 
              href={project.link} 
              target="_blank"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
        {project.desc}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span 
              key={i} 
              className="px-3 py-1 text-xs font-medium font-mono rounded-md bg-white/5 text-gray-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default Projects;
