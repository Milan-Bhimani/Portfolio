'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const ClientLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on client
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background relative">
      {/* Noise Texture */}
      <div className="noise-bg"></div>

      {/* Custom Cursor (Hidden on Touch Devices) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: 12, translateY: 12 }}
      />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container-wide flex justify-between items-center">
          <a href="#" className="relative group z-50">
            <span className="font-serif text-2xl tracking-wider group-hover:text-primary transition-colors duration-300">
              Milan<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="/resume/Milan_Resume.pdf" 
              target="_blank"
              className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-serif text-4xl hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume/Milan_Resume.pdf" 
                target="_blank"
                className="mt-8 px-8 py-3 border border-white/20 rounded-full uppercase tracking-widest"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground-muted text-sm tracking-wide">
            © {new Date().getFullYear()} Milan Bhimani. Crafted with precision.
          </p>
          <div className="flex gap-6">
            <FooterLink href="#" text="Github" />
            <FooterLink href="#" text="LinkedIn" />
            <FooterLink href="#" text="Email" />
          </div>
        </div>
      </footer>
    </div>
  );
};

const FooterLink = ({ href, text }) => (
  <a href={href} className="text-sm text-foreground-muted hover:text-primary transition-colors uppercase tracking-wider">
    {text}
  </a>
);

export default ClientLayout;