'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const projects = [
  {
    num: '01', name: 'ShopEase', cat: 'Backend · 2023–26',
    desc: 'Production-grade REST API using FastAPI with clean architecture covering complete e-commerce flows — product management, cart, orders, and user lifecycle. JWT auth + RBAC + Firebase + OWASP fundamentals.',
    stack: ['FastAPI', 'Firebase', 'Python'],
    img: '/images/projects/shopease.png',
    href: 'https://github.com/Milan-Bhimani/ShopEase',
  },
  {
    num: '02', name: 'Univents', cat: 'API · 2023–26',
    desc: 'Scalable REST API with geospatial queries, multi-field filtering, pagination, and full-text search via MongoDB aggregation pipelines. Secured with helmet.js, express-rate-limit, and NoSQL injection prevention.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'GeoJSON'],
    img: '/images/projects/univents.png',
    href: 'https://github.com/Milan-Bhimani/Univents',
  },
  {
    num: '03', name: 'DSA Visualizer', cat: 'EdTech · 2023–26',
    desc: 'Interactive web app visualizing 10+ sorting and searching algorithms with real-time step-by-step animations via HTML5 Canvas. Flask REST backend with async AJAX and responsive speed controls.',
    stack: ['Python', 'Flask', 'JavaScript', 'Canvas API'],
    img: '/images/projects/dsa.png',
    href: 'https://github.com/Milan-Bhimani/DSA-Visualizer',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-label', {
        scrollTrigger: { trigger: '.section-label', start: 'top 85%' },
        x: -24, opacity: 0, duration: 0.6, ease: 'power3.out',
      });
      gsap.from('.section-title', {
        scrollTrigger: { trigger: '.section-title', start: 'top 82%' },
        y: 60, rotateX: -12, opacity: 0,
        transformPerspective: 700, duration: 1, ease: 'power3.out',
      });
      gsap.from('.projects-sub', {
        scrollTrigger: { trigger: '.projects-sub', start: 'top 82%' },
        y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
      });
      gsap.from('.project-item', {
        scrollTrigger: { trigger: '.projects-list', start: 'top 85%' },
        y: 60, opacity: 0, rotateX: -6, transformPerspective: 800,
        duration: 0.8, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects">
      <div className="section-inner">
        <p className="section-label">/ 03</p>
        <div className="projects-header">
          <h2 className="section-title">Selected<br /><em>Works</em></h2>
          <p className="projects-sub">Engineering solutions that solve complex problems with elegance.</p>
        </div>

        <div className="projects-list">
          {projects.map(p => (
            <article key={p.num} className="project-item">
              <div className="project-number">{p.num}</div>
              <div className="project-info">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-meta">
                  <span className="project-cat">{p.cat}</span>
                  <div className="project-stack">
                    {p.stack.map(s => <span key={s}>{s}</span>)}
                  </div>
                </div>
              </div>
              <div className="project-img-col">
                <div className="project-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} />
                  <div className="project-img-overlay">
                    <a href={p.href} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}