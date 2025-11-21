import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="border-bottom-grid">
      <Container fluid className="px-0">
        <Row className="g-0 justify-content-center">
          <Col md={10} lg={8} className="p-5 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-2 fw-black text-uppercase mb-5">Let's<br />Connect</h2>
              
              <p className="lead font-monospace mb-5 text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                // CURRENTLY AVAILABLE FOR FREELANCE PROJECTS AND OPEN SOURCE COLLABORATIONS.
              </p>

              <div className="d-flex flex-column align-items-center gap-4 mb-5">
                <a href="mailto:milanhbhimani@gmail.com" className="d-flex align-items-center gap-3 text-decoration-none text-white group hover-scale">
                  <Mail size={32} />
                  <span className="h3 font-monospace mb-0">milanhbhimani@gmail.com</span>
                </a>
                
                <a href="tel:7984454901" className="d-flex align-items-center gap-3 text-decoration-none text-white group hover-scale">
                  <Phone size={32} />
                  <span className="h3 font-monospace mb-0">+91 7984454901</span>
                </a>

                <div className="d-flex align-items-center gap-3 text-white">
                  <MapPin size={32} />
                  <span className="h3 font-monospace mb-0">Vadodara, India</span>
                </div>
              </div>

              <div className="d-flex justify-content-center gap-5">
                <a href="https://github.com/Milan-Bhimani" target="_blank" rel="noopener noreferrer" className="text-white hover-scale">
                  <Github size={48} />
                </a>
                <a href="https://www.linkedin.com/in/bhimani-milan-h/" target="_blank" rel="noopener noreferrer" className="text-white hover-scale">
                  <Linkedin size={48} />
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
