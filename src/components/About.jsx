import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume.jsx';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container-wide grid lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Column: Sticky Title & Bio */}
        <div className="lg:sticky lg:top-32">
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-serif text-5xl md:text-6xl mb-12"
            >
                The Engineer <br />
                <span className="text-foreground-muted italic">& The Craftsman</span>
            </motion.h2>

            {/* Profile Image with Premium Hover */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-[4/5] mb-12 overflow-hidden rounded-sm group border border-white/5"
            >
                <img 
                    src="/images/profile.jpg" 
                    alt="Milan Bhimani" 
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-lg text-foreground-muted leading-relaxed"
            >
                <p className="mb-6">
                    {resumeData.summary}
                </p>
                <p>
                    I believe that code is more than just instructions for a machine; it's the structure of modern human interaction. My approach combines rigorous backend architecture with a sensitivity to user experience.
                </p>
            </motion.div>

            {/* Signature / Decorative */}
            <div className="mt-12 opacity-50 font-serif italic text-2xl text-primary">
                Milan Bhimani
            </div>
        </div>

        {/* Right Column: Timeline & Stats */}
        <div className="flex flex-col gap-20">
            {/* Skills Grid */}
            <div>
                <h3 className="text-xs font-mono uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Technical Arsenal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {resumeData.skills.map((skillGroup, index) => (
                        <div key={index}>
                            <h4 className="font-serif text-xl mb-4 text-white">{skillGroup.category}</h4>
                            <ul className="space-y-2">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="text-foreground-muted text-sm border-l border-white/10 pl-4 hover:border-primary transition-colors duration-300">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Timeline */}
            <div>
                <h3 className="text-xs font-mono uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Academic Background</h3>
                <div className="space-y-12 border-l border-white/5 ml-2 pl-8 relative">
                    {resumeData.education.map((edu, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[37px] top-2 w-3 h-3 bg-surface border border-primary rounded-full" />
                            <span className="text-primary font-mono text-xs mb-2 block">{edu.year}</span>
                            <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                            <p className="text-foreground-muted text-sm mb-2">{edu.degree}</p>
                            <p className="text-white/40 text-xs font-mono">{edu.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
