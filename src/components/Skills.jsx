import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient-accent">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My expertise spans across the entire full-stack spectrum, from designing robust backend architectures to crafting intuitive user interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-sm bg-background border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
