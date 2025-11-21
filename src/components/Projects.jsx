import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Game AI",
      description: "AI-driven game recommendation platform using MERN stack and Gemini AI API. Features intelligent user preference analysis and personalized discovery.",
      tags: ["MERN Stack", "Gemini AI", "React", "Node.js"],
      githubLink: "https://github.com/Milan-Bhimani/GameAi",
      liveLink: "https://game-ai-pink.vercel.app/"
    },
    {
      title: "Shutter Stories",
      description: "Photography portfolio platform with secure APIs using Node.js, Express.js, and JWT. Designed MongoDB schema and integrated RESTful APIs.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/Milan-Bhimani/Photography-Portfolio",
      liveLink: "https://shutterstoriesofficial.vercel.app/"
    },
    {
      title: "Birthday Wisher",
      description: "Responsive web app for dynamic message customization and real-time message generation. Optimized for mobile experience.",
      tags: ["React", "Bootstrap", "Frontend"],
      githubLink: "https://github.com/Milan-Bhimani/BirthdayWisher",
      liveLink: "https://birthday-wisher-beta.vercel.app/"
    },
    {
      title: "DSA Visualizer",
      description: "Full-stack app using Python Flask to visualize data structures and algorithms. Interactive UI for step-by-step algorithm understanding.",
      tags: ["Python", "Flask", "JavaScript", "Algorithms"],
      githubLink: "https://github.com/Milan-Bhimani/DSA-Visualizer",
      liveLink: "https://dsa-visualizer-git-main-milans-projects-22ba0caf.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="border-bottom-grid">
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} className="p-5 border-bottom-grid">
             <h2 className="display-3 fw-black text-uppercase mb-0">Selected<br />Works</h2>
          </Col>

          {projects.map((project, index) => (
            <Col md={6} key={index} className="border-end-grid border-bottom-grid">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ backgroundColor: '#111' }}
                className="h-100 p-5 position-relative group cursor-pointer"
              >
                <div className="d-flex justify-content-between align-items-start mb-5">
                  <h3 className="display-6 fw-bold text-uppercase mb-0">{project.title}</h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight size={32} className="text-secondary" />
                  </motion.div>
                </div>
                
                <p className="lead text-secondary mb-5" style={{ fontSize: '1.1rem' }}>
                  {project.description}
                </p>

                <div className="d-flex flex-wrap gap-3 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-monospace text-uppercase small border border-secondary px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="d-flex gap-4">
                  <a href={project.githubLink} className="text-white text-uppercase fw-bold text-decoration-none border-bottom border-white pb-1">
                    Github
                  </a>
                  <a href={project.liveLink} className="text-white text-uppercase fw-bold text-decoration-none border-bottom border-white pb-1">
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
