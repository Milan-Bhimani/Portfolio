import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "VS Code", "Postman", "Vercel", "REST APIs", "Agile"]
    }
  ];

  return (
    <section id="skills" className="border-bottom-grid">
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} className="p-5 border-bottom-grid">
             <h2 className="display-3 fw-black text-uppercase mb-0">Skills &<br />Expertise</h2>
          </Col>
          
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} key={index} className="border-end-grid border-bottom-grid">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-100 p-4"
              >
                <h3 className="h5 font-monospace text-uppercase mb-4 border-bottom border-secondary pb-2">
                  // {category.title}
                </h3>
                <div className="d-flex flex-column gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div 
                      key={idx} 
                      className="d-flex align-items-center"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                    >
                      <span className="text-secondary me-2">0{idx + 1}</span>
                      <span className="fw-bold text-uppercase">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
