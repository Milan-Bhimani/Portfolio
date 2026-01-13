import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
      {/* Dynamic Background Elements */}
      <div className="position-absolute top-0 start-50 translate-middle-x w-100 h-100" style={{ maxWidth: '1200px', pointerEvents: 'none' }}>
        <div className="position-absolute top-20 start-10 w-25 h-25 bg-primary opacity-10 blur-3xl rounded-circle animate-float" />
        <div className="position-absolute bottom-20 end-10 w-25 h-25 bg-purple opacity-10 blur-3xl rounded-circle animate-float delay-1" />
      </div>

      <Container className="position-relative z-1">
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill border border-secondary border-opacity-25 bg-white bg-opacity-5 mb-4">
                <span className="w-2 h-2 rounded-circle bg-success"></span>
                <span className="small font-mono text-secondary">Open to Work</span>
              </div>

              <h1 className="display-1 fw-bold mb-4 tracking-tight text-white" style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)' }}>
                Building the <br />
                <span className="text-gradient-accent">Backbone</span> of Web.
              </h1>

              <p className="lead text-secondary mb-5 mx-auto lh-lg" style={{ maxWidth: '650px', fontSize: '1.2rem' }}>
                Hi, I'm <strong className="text-white">Milan Bhimani</strong>. 
                I engineer robust <span className="text-white">backend systems</span>, 
                scalable APIs, and data-driven solutions using Python & Node.js.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <motion.a 
                  href="#projects"
                  className="btn-premium btn-glow text-decoration-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Featured Work <ArrowRight size={18} />
                </motion.a>
                
                <motion.a 
                  href="/resume/Milan_Resume.pdf"
                  target="_blank"
                  className="btn-premium text-decoration-none"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV <Download size={18} />
                </motion.a>
              </div>

              <div className="mt-5 pt-4 border-top border-secondary border-opacity-10 d-flex justify-content-center gap-4 opacity-75">
                <SocialLink href="https://github.com/Milan-Bhimani" icon={<Github size={22} />} />
                <SocialLink href="https://linkedin.com/in/bhimani-milan-h" icon={<Linkedin size={22} />} />
                <SocialLink href="mailto:milanhbhimani@gmail.com" icon={<Mail size={22} />} />
              </div>

            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-secondary hover-text-white transition-colors p-2"
    style={{ transition: 'color 0.2s' }}
  >
    {icon}
  </a>
);

export default Hero;
