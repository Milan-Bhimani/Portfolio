'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume.jsx';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container-wide grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Column: Image Only */}
        <div>
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
        </div>

        {/* Right Column: Summary, Experience & Education */}
        <div className="flex flex-col gap-20">
            {/* Summary */}
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
            </motion.div>

            {/* Experience and Details */}
            <div>
                <h3 className="text-xs font-mono uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                    Experience and Details
                </h3>
                
                {resumeData.experience.map((exp, index) => (
                    <div key={index} className="mb-8">
                        <h4 className="font-serif text-xl mb-2 text-white">{exp.role}</h4>
                        <p className="text-foreground-muted text-sm mb-1">{exp.company}</p>
                        <p className="text-foreground-muted text-sm mb-1">{exp.location} | {exp.period}</p>
                        <p className="text-foreground-muted">{exp.description}</p>
                    </div>
                ))}
                
                <p className="mt-6">
                    I believe that code is more than just instructions for a machine; it's the structure of modern human interaction. My approach combines rigorous backend architecture with a sensitivity to user experience.
                </p>
            </div>

            {/* Academic Background */}
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