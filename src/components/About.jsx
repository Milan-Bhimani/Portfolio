import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Brain, Rocket } from 'lucide-react';

const About = () => {
  const facts = [
    {
      icon: <GraduationCap size={32} />,
      text: "CS Student @ Parul University"
    },
    {
      icon: <Code size={32} />,
      text: "Full Stack Developer"
    },
    {
      icon: <Brain size={32} />,
      text: "Problem Solver"
    },
    {
      icon: <Rocket size={32} />,
      text: "Innovation Enthusiast"
    }
  ];

  return (
    <section id="about" className="border-bottom-grid bg-grid-pattern" style={{ backgroundSize: '20px 20px', opacity: 0.95 }}>
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} md={4} className="border-end-grid p-5 d-flex align-items-center">
            <h2 className="display-2 fw-black text-uppercase mb-0" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              About Me
            </h2>
          </Col>
          
          <Col xs={12} md={8}>
            <div className="p-5 border-bottom-grid">
              <p className="lead font-monospace mb-4 text-uppercase">
                // Who I Am
              </p>
              <p className="display-6 fw-bold mb-4" style={{ lineHeight: 1.2 }}>
                I'M MILAN BHIMANI. A COMPUTER SCIENCE STUDENT SPECIALIZING IN SOFTWARE DEVELOPMENT, PYTHON, AND DATA SCIENCE.
              </p>
              <p className="font-monospace text-secondary">
                DRIVEN BY CURIOSITY, I ENJOY SOLVING COMPLEX PROBLEMS AND CREATING MEANINGFUL DIGITAL SOLUTIONS. FROM FULL-STACK WEB APPS TO DATA ANALYSIS, I LOVE BRINGING IDEAS TO LIFE.
              </p>
            </div>

            <Row className="g-0">
              {facts.map((fact, index) => (
                <Col xs={6} key={index} className={`p-4 border-bottom-grid ${index % 2 === 0 ? 'border-end-grid' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="mb-3">
                      {fact.icon}
                    </div>
                    <h3 className="h6 font-monospace text-uppercase mb-0">{fact.text}</h3>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
