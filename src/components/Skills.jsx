import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Engineering",
      icon: <Code2 size={20} />,
      skills: ["Python", "FastAPI", "Node.js", "Express.js", "Django", "REST APIs"]
    },
    {
      title: "Database & Cloud",
      icon: <Database size={20} />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "AWS", "Docker"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={20} />,
      skills: ["React", "JavaScript (ES6+)", "Tailwind", "HTML5/CSS3"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={20} />,
      skills: ["Git/GitHub", "CI/CD", "Linux", "Nginx", "Jest", "Pytest"]
    }
  ];

  return (
    <section className="section-padding bg-dark bg-opacity-50">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-secondary lead">Tools I use to build production-grade software.</p>
        </div>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 h-100"
              >
                <div className="d-flex align-items-center gap-2 mb-4 text-accent-primary">
                  {category.icon}
                  <h3 className="h6 fw-bold mb-0 text-white">{category.title}</h3>
                </div>
                
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 rounded bg-white bg-opacity-5 text-secondary small border border-white border-opacity-5 hover-white transition-colors"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {skill}
                    </span>
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