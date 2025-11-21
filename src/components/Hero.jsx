import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center pt-5 border-bottom-grid position-relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-grid-pattern" style={{ opacity: 0.1, zIndex: -1 }} />
      
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} className="border-bottom-grid px-4 py-2">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-monospace mb-0 text-uppercase small"
            >
              // Portfolio 2025
            </motion.p>
          </Col>
          
          <Col xs={12} className="px-4 pt-5 pb-4">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <h1 className="display-1 fw-black mb-0" style={{ fontSize: 'clamp(4rem, 18vw, 14rem)', lineHeight: 0.8 }}>
                MILAN<br />
                <span className="text-outline">BHIMANI</span>
              </h1>
            </motion.div>
          </Col>

          <Col xs={12} md={8} className="px-4 py-5 border-top-grid border-end-grid">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="h3 font-monospace mb-4 text-uppercase">
                Software Developer &<br />Data Science Enthusiast
              </h2>
              <p className="lead mb-5" style={{ maxWidth: '600px' }}>
                BUILDING SCALABLE WEB APPLICATIONS AND DATA-DRIVEN SOLUTIONS. 
                SPECIALIZED IN MERN STACK AND PYTHON ARCHITECTURES.
              </p>
              
              <div className="d-flex gap-4">
                <a href="#projects" className="btn-brutal">
                  View Work
                </a>
                <a 
                  href="https://drive.google.com/file/d/1JLy1lUvhY_G4nXzkGaz6l_erVyEOP1cY/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-brutal"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </Col>

          <Col xs={12} md={4} className="border-top-grid d-flex align-items-end justify-content-end p-4">
            <ArrowDownRight size={64} strokeWidth={1} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
