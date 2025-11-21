import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-black text-white">
      <Navbar expand="lg" className="border-bottom-grid py-3" variant="dark">
        <Container fluid className="px-4">
          <Navbar.Brand href="#" className="fw-black fs-4 tracking-tighter font-monospace text-uppercase">
            Milan Bhimani
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 rounded-0" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Nav.Link key={item} href={`#${item.toLowerCase()}`} className="text-uppercase fw-bold small letter-spacing-wide">
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="flex-grow-1">
        {children}
      </main>

      <footer className="border-top-grid py-5">
        <Container fluid className="px-4">
          <div className="d-flex justify-content-center align-items-center">
            <p className="font-monospace small mb-0 text-secondary text-center">
              © 2025 MILAN BHIMANI. ALL RIGHTS RESERVED.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
