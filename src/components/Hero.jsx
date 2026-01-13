import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <span className="text-primary font-mono text-sm tracking-wider">AVAILABLE FOR HIRE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Building the <br />
            <span className="text-gradient-accent">Digital Future</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm <span className="text-white font-semibold">{resumeData.personal.name}</span>. 
            {resumeData.personal.tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </a>
            
            <div className="flex items-center gap-4 px-6 py-3.5 glass rounded-full">
              <SocialLink href={resumeData.personal.social.github} icon={<Github size={20} />} />
              <SocialLink href={resumeData.personal.social.linkedin} icon={<Linkedin size={20} />} />
              <SocialLink href={`mailto:${resumeData.personal.email}`} icon={<Mail size={20} />} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Hero;
