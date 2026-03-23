'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume.jsx';

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-4">Technical Arsenal</h2>
            <p className="text-foreground-muted max-w-sm">A curated collection of the tools, technologies, and methodologies that I work with on a daily basis.</p>
          </div>
          <div className="w-full md:w-auto h-[1px] bg-white/10 flex-grow ml-8 mb-4 hidden md:block"></div>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-6xl text-white/5 font-bold absolute right-0 -top-10 md:static md:text-8xl md:opacity-100 md:text-white/5 z-0 select-none"
          >
            2023-26
          </motion.span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background-secondary/50 border border-white/10 rounded-lg p-6 group hover:border-primary hover:bg-background-secondary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(skillGroup.icon, { size: 28 })}
                </div>
                <h3 className="font-serif text-xl text-white">{skillGroup.category}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-foreground-muted text-sm flex items-center gap-2">
                    <span className="text-primary/50 group-hover:text-primary transition-colors duration-300">&bull;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
