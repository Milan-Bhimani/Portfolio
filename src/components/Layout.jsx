import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion, useScroll, useTransform } from 'framer-motion';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-vh-100 position-relative">
      <Navbar 
        fixed="top" 
        expand="lg" 
        variant="dark"
        className={`transition-all duration-300 ${scrolled ? 'py-3' : 'py-4'}`}
        style={{
          background: scrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none'
        }}
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold font-mono text-white">
            MB<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="gap-4 align-items-center">
              {['About', 'Projects', 'Contact'].map((item) => (
                <Nav.Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="small text-uppercase tracking-wider"
                >
                  {item}
                </Nav.Link>
              ))}
              <motion.a 
                href="/resume/Milan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern px-4 py-2 small"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="position-relative z-1">
        {children}
      </main>

      <footer className="py-5 text-center text-secondary border-top border-dark mt-5">
        <Container>
          <p className="small mb-0 font-mono">
            &copy; {new Date().getFullYear()} Milan Bhimani. Built with React & Passion.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;