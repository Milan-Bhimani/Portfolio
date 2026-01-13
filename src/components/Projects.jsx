import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Server, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "ShopEase",
      category: "E-Commerce Infrastructure",
      description: "A high-performance backend platform featuring clean architecture, achieving 99.9% uptime and sub-100ms response times.",
      tech: ["FastAPI", "Firebase", "Docker", "Redis"],
      stats: ["99.9% Uptime", "<100ms Latency"],
      githubLink: "https://github.com/Milan-Bhimani/ShopEase",
      liveLink: "#",
      icon: <Server size={24} className="text-white" />
    },
    {
      title: "Univents",
      category: "Location-Based API",
      description: "Hyperlocal event discovery API handling 1k+ concurrent requests. Features geospatial indexing and advanced aggregation pipelines.",
      tech: ["Node.js", "MongoDB", "Express", "GeoJSON"],
      stats: ["1k+ RPS", "85% Coverage"],
      githubLink: "https://github.com/Milan-Bhimani/Univents",
      liveLink: "#",
      icon: <Database size={24} className="text-white" />
    },
    {
      title: "DSA Visualizer",
      category: "Educational Platform",
      description: "Interactive algorithm learning platform visualizing sorting & searching algorithms with real-time execution control.",
      tech: ["Flask", "JavaScript", "Canvas API"],
      stats: ["500+ Students", "Interactive UI"],
      githubLink: "https://github.com/Milan-Bhimani/DSA-Visualizer",
      liveLink: "https://dsa-visualizer-git-main-milans-projects-22ba0caf.vercel.app/",
      icon: <Code2 size={24} className="text-white" />
    }
  ];

  return (
    <section id="projects" className="section-padding position-relative">
      <Container>
        <div className="mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold mb-3">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-secondary lead">Architecting systems that matter.</p>
          </motion.div>
        </div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index}>
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
    <div className="glass-card p-4 h-100 d-flex flex-column position-relative overflow-hidden group">
      {/* Hover Gradient Effect */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="d-flex justify-content-between align-items-start mb-4 position-relative z-1">
        <div className="p-3 rounded-circle bg-white bg-opacity-10 backdrop-blur-sm">
          {project.icon}
        </div>
        <div className="d-flex gap-2">
          <a href={project.githubLink} className="text-secondary hover-text-white transition-colors">
            <Github size={20} />
          </a>
          {project.liveLink !== "#" && (
            <a href={project.liveLink} className="text-secondary hover-text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="mb-4 position-relative z-1 flex-grow-1">
        <span className="text-accent-primary font-mono small fw-bold mb-2 d-block">
          {project.category}
        </span>
        <h3 className="h4 fw-bold mb-3">{project.title}</h3>
        <p className="text-secondary small mb-4">
          {project.description}
        </p>
        
        <div className="d-flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span key={i} className="badge-modern text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="d-flex gap-3 pt-3 border-top border-white border-opacity-10 position-relative z-1">
        {project.stats.map((stat, i) => (
          <div key={i}>
            <p className="font-mono text-xs text-secondary mb-0">{stat}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Projects;