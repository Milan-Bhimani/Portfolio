import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { resumeData } from '../data/resume.jsx';

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-surface relative">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-4">Selected Works</h2>
            <p className="text-foreground-muted max-w-sm">Engineering solutions that solve complex problems with elegance.</p>
          </div>
          <div className="w-full md:w-auto h-[1px] bg-white/10 flex-grow ml-8 mb-4 hidden md:block"></div>
          <span className="font-serif text-6xl text-white/5 font-bold absolute right-0 -top-10 md:static md:text-8xl md:opacity-100 md:text-white/5 z-0 select-none">
            2023-26
          </span>
        </motion.div>

        <div className="flex flex-col gap-32">
          {resumeData.projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
    >
      {/* Project Visual/Card */}
      <div className="w-full lg:w-3/5 aspect-video bg-surface-light border border-white/5 rounded-sm overflow-hidden relative cursor-pointer group-hover:border-white/20 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        {project.image ? (
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
        ) : (
            /* Mockup / Representation Fallback */
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-4xl text-white/10 group-hover:text-white/20 transition-colors duration-500 uppercase tracking-widest">
                    {project.title}
                </h3>
            </div>
        )}
        
        {/* Hover Action */}
        <a 
           href={project.link !== "#" ? project.link : project.github}
           target="_blank"
           rel="noreferrer"
           className="absolute inset-0 z-20"
        >
          <span className="sr-only">View Project</span>
        </a>
      </div>

      {/* Project Details */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-6">
            <span className="text-primary text-xs font-mono uppercase tracking-widest px-3 py-1 border border-primary/20 rounded-full">
                {project.category}
            </span>
            <div className="h-[1px] bg-white/10 flex-grow" />
        </div>
        
        <h3 className="font-serif text-4xl md:text-5xl mb-6 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-foreground-muted text-lg leading-relaxed mb-8">
          {project.desc}
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm text-foreground-muted font-mono">
            {project.tech.map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {t}
                </li>
            ))}
        </ul>

        <div className="flex items-center gap-6">
            <a 
              href={project.link !== "#" ? project.link : project.github}
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300"
            >
              Explore Project <ArrowUpRight className="w-4 h-4" />
            </a>
            
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground-muted hover:text-white transition-colors duration-300"
            >
              View Code <Github className="w-4 h-4" />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;