import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, Database, Code2, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ShopEase",
      category: "Backend Architecture",
      description: "Enterprise-ready e-commerce backend handling 500+ users. Features clean architecture, role-based auth (RBAC), and automated CI/CD pipelines.",
      stack: ["FastAPI", "Firebase", "Docker", "GitHub Actions"],
      stats: { label: "Performance", value: "<100ms Latency" },
      links: {
        github: "https://github.com/Milan-Bhimani/ShopEase",
        live: "#"
      },
      featured: true
    },
    {
      title: "Univents",
      category: "API Development",
      description: "Hyperlocal event discovery API with geospatial search. Optimized for 1000+ concurrent requests using MongoDB aggregation pipelines.",
      stack: ["Node.js", "Express", "MongoDB", "GeoJSON"],
      stats: { label: "Scale", value: "1k+ RPS" },
      links: {
        github: "https://github.com/Milan-Bhimani/Univents",
        live: "#"
      },
      featured: false
    },
    {
      title: "DSA Visualizer",
      category: "Interactive EdTech",
      description: "Algorithm learning platform with real-time visualization of sorting & searching algorithms. Built with Flask and custom canvas rendering.",
      stack: ["Python Flask", "JavaScript", "Canvas API"],
      stats: { label: "Users", value: "500+ Students" },
      links: {
        github: "https://github.com/Milan-Bhimani/DSA-Visualizer",
        live: "https://dsa-visualizer-git-main-milans-projects-22ba0caf.vercel.app/"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding position-relative">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5">
          <div>
            <h2 className="display-5 fw-bold mb-2">Selected <span className="text-gradient-accent">Work</span></h2>
            <p className="text-secondary mb-0">Showcasing technical depth and product thinking.</p>
          </div>
          <a href="https://github.com/Milan-Bhimani" target="_blank" className="btn-link text-decoration-none text-white d-flex align-items-center gap-2 mt-3 mt-md-0 group">
            View Github <ArrowRight size={18} className="transition-transform group-hover-translate-x" />
          </a>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={project.featured ? 12 : 6} key={index}>
              <ProjectCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="h-100"
  >
    <div className="glass-panel p-4 p-md-5 h-100 d-flex flex-column position-relative overflow-hidden group">
      
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <span className="font-mono text-xs text-accent-primary tracking-wider text-uppercase mb-2 d-block">
            {project.category}
          </span>
          <h3 className={`fw-bold mb-0 ${project.featured ? 'display-6' : 'h3'}`}>
            {project.title}
          </h3>
        </div>
        
        <div className="d-flex gap-3">
          <a href={project.links.github} className="p-2 rounded-circle bg-white bg-opacity-5 hover-bg-opacity-10 text-white transition-colors" title="View Code">
            <Github size={20} />
          </a>
          {project.links.live !== "#" && (
            <a href={project.links.live} className="p-2 rounded-circle bg-white bg-opacity-5 hover-bg-opacity-10 text-white transition-colors" title="Live Demo">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <p className="text-secondary mb-4" style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
        {project.description}
      </p>

      <div className="mt-auto">
        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span key={i} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-4 border-top border-white border-opacity-10 d-flex align-items-center gap-3">
          <div className="d-flex flex-column">
            <span className="text-xs text-secondary font-mono text-uppercase">{project.stats.label}</span>
            <span className="text-white fw-bold">{project.stats.value}</span>
          </div>
        </div>
      </div>
      
    </div>
  </motion.div>
);

// Helper for hover arrow effect in the header link
const ArrowRight = ({ className }) => (
  <svg 
    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Projects;
