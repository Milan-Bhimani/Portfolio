'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Abstract Background Element */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surface-light/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block text-primary tracking-[0.2em] text-sm uppercase mb-6 pl-1 font-medium">
              Software Engineer & Architect
            </span>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-balance">
              Building <br />
              <span className="text-foreground-muted italic pr-4">Digital</span>
              Realities
            </h1>
            
            <p className="text-foreground-muted text-lg md:text-xl max-w-xl leading-relaxed mb-12 pl-1 border-l border-primary/30 pl-6">
              I craft scalable, high-performance digital ecosystems. Merging technical depth with aesthetic precision to create software that feels human.
            </p>

            <div className="flex flex-wrap gap-8 items-center pl-1">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center gap-3 text-lg font-medium tracking-wide overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">View Selected Work</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground origin-right transform scale-x-100 transition-transform duration-300 group-hover:scale-x-0"></span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
              </a>
              
              <a 
                href="#contact" 
                className="text-foreground-muted hover:text-foreground transition-colors text-sm uppercase tracking-widest"
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative / Image Area */}
        <div className="lg:col-span-4 relative hidden lg:block">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="relative aspect-[3/4] border border-white/10 rounded-full overflow-hidden"
           >
             {/* Abstract Geometric Representation */}
             <div className="absolute inset-0 bg-gradient-to-b from-surface-light to-background opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-[0.5px] border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[80%] h-[80%] border-[0.5px] border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
