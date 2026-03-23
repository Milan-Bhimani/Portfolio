'use client';

import ClientLayout from '../components/ClientLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </ClientLayout>
  );
}