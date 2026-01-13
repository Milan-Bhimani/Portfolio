import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="bg-glow-top" />
      
      <Container className="position-relative z-1">
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-modern mb-4 d-inline-block">
                Available for New Opportunities
              </span>
              
              <h1 className="display-1 fw-bold mb-4 tracking-tight">
                Building <span className="text-accent-gradient">Scalable</span> <br />
                Digital Solutions
              </h1>
              
              <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                I'm <strong className="text-white">Milan Bhimani</strong>, a Backend Engineer specializing in Python, Node.js, and Cloud Architectures. I build robust APIs and data-driven systems that perform.
              </p>

              <div className="d-flex justify-content-center gap-3">
                <motion.a 
                  href="#projects" 
                  className="btn-modern btn-primary-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work <ArrowRight size={18} />
                </motion.a>
                
                <div className="d-flex gap-2">
                  <SocialLink href="https://github.com/Milan-Bhimani" icon={<Github size={20} />} />
                  <SocialLink href="https://linkedin.com/in/bhimani-milan-h" icon={<Linkedin size={20} />} />
                  <SocialLink href="mailto:milanhbhimani@gmail.com" icon={<Mail size={20} />} />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-modern px-3"
    whileHover={{ y: -3, color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}
  >
    {icon}
  </motion.a>
);

export default Hero;