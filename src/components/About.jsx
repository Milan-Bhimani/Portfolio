import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-5 fw-bold mb-4">
                Engineering with <span className="text-gradient">Precision</span>
              </h2>
              <p className="lead text-secondary mb-4">
                I am a final-year Computer Science student at Parul University with a strong foundation in backend systems and data science.
              </p>
              <p className="text-secondary mb-4">
                My journey involves architecting scalable RESTful APIs, optimizing database schemas, and exploring the intersection of AI and software engineering. I focus on writing clean, maintainable code that solves real-world problems.
              </p>
              
              <div className="d-flex gap-4 mt-5">
                <div>
                  <h3 className="h2 fw-bold text-white mb-0">8.38</h3>
                  <p className="text-secondary small text-uppercase tracking-wider">CGPA</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h3 className="h2 fw-bold text-white mb-0">10+</h3>
                  <p className="text-secondary small text-uppercase tracking-wider">Projects</p>
                </div>
                <div className="vr bg-secondary opacity-25"></div>
                <div>
                  <h3 className="h2 fw-bold text-white mb-0">2026</h3>
                  <p className="text-secondary small text-uppercase tracking-wider">Graduation</p>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <div className="d-flex flex-column gap-4">
              <EducationCard 
                icon={<GraduationCap size={24} />}
                title="B.Tech in Computer Science"
                subtitle="Parul University"
                date="2022 - 2026"
                grade="CGPA: 8.38/10.0"
              />
              
              <EducationCard 
                icon={<BookOpen size={24} />}
                title="Higher Secondary (Class XII)"
                subtitle="R.A.K.V.B School"
                date="2022"
                grade="75.84%"
              />

              <div className="glass-card p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-accent-glow text-accent-primary">
                    <Award size={24} />
                  </div>
                  <h4 className="h6 fw-bold mb-0">Certifications</h4>
                </div>
                <ul className="list-unstyled mb-0 text-secondary small d-flex flex-column gap-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="w-1 h-1 rounded-circle bg-accent-primary"></span>
                    Computer Networks and Internet Protocol - NPTEL
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="w-1 h-1 rounded-circle bg-accent-primary"></span>
                    Java & Python Fundamentals - Infosys Springboard
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const EducationCard = ({ icon, title, subtitle, date, grade }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-4"
  >
    <div className="d-flex justify-content-between align-items-start mb-2">
      <div className="d-flex align-items-center gap-3">
        <div className="p-2 rounded bg-white bg-opacity-5 text-white">
          {icon}
        </div>
        <div>
          <h4 className="h6 fw-bold mb-1">{title}</h4>
          <p className="text-secondary small mb-0">{subtitle}</p>
        </div>
      </div>
      <span className="badge-modern text-xs">{date}</span>
    </div>
    <div className="mt-3 ps-5 ms-2">
      <p className="font-mono text-xs text-accent-primary mb-0">{grade}</p>
    </div>
  </motion.div>
);

export default About;