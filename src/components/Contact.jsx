import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="glass-card overflow-hidden">
              <Row className="g-0">
                <Col md={5} className="bg-gradient-to-br from-indigo-900 to-slate-900 p-5 d-flex flex-column justify-content-between position-relative">
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-noise opacity-10"></div>
                  
                  <div>
                    <h3 className="h3 fw-bold mb-4">Let's Build Something<br />Amazing Together</h3>
                    <p className="text-white text-opacity-75 mb-5">
                      I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                  </div>

                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded bg-white bg-opacity-10">
                        <Mail size={20} />
                      </div>
                      <span className="small">milanhbhimani@gmail.com</span>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="p-2 rounded bg-white bg-opacity-10">
                        <MapPin size={20} />
                      </div>
                      <span className="small">Vadodara, Gujarat, India</span>
                    </div>
                  </div>
                </Col>

                <Col md={7} className="p-5">
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <Form.Label className="small text-secondary fw-bold text-uppercase">Your Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        className="bg-dark border-secondary text-white py-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <Form.Label className="small text-secondary fw-bold text-uppercase">Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        className="bg-dark border-secondary text-white py-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="mb-4">
                      <Form.Label className="small text-secondary fw-bold text-uppercase">Message</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        className="bg-dark border-secondary text-white py-2"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-modern btn-primary-glow w-100 justify-content-center"
                      type="submit"
                    >
                      Send Message <Send size={16} />
                    </motion.button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;