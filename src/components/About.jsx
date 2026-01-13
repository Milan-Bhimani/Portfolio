import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { resumeData } from '../data/resume';

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">
              About <span className="text-gradient-accent">Me</span>
            </h2>
            <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed">
              <p className="mb-6">
                {resumeData.summary}
              </p>
              <p>
                My journey involves architecting scalable RESTful APIs, optimizing database schemas, and exploring the intersection of AI and software engineering. I focus on writing clean, maintainable code that solves real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="glass p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                      <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-1">{edu.degree}</p>
                    <p className="text-sm text-gray-500 font-mono">{edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-primary" /> Certifications
              </h3>
              <div className="glass p-6 rounded-xl border border-white/5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                    Computer Networks and Internet Protocol - NPTEL
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                    Java Programming and Python Fundamentals - Infosys Springboard
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
