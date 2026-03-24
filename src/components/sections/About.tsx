'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-label', {
        scrollTrigger: { trigger: '.section-label', start: 'top 85%' },
        x: -24, opacity: 0, duration: 0.6, ease: 'power3.out',
      });
      gsap.from('.section-title', {
        scrollTrigger: { trigger: '.section-title', start: 'top 82%' },
        y: 60, rotateX: -12, opacity: 0, transformPerspective: 700,
        duration: 1, ease: 'power3.out',
      });
      gsap.from('.about-bio p', {
        scrollTrigger: { trigger: '.about-bio', start: 'top 82%' },
        y: 28, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
      });
      gsap.from('.detail-row', {
        scrollTrigger: { trigger: '.about-details', start: 'top 82%' },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about">
      <div className="section-inner">
        <p className="section-label">/ 01</p>
        <h2 className="section-title">The Engineer<br /><em>&amp; The Craftsman</em></h2>

        <div className="about-grid">
          <div className="about-bio">
            <p>Final-year Computer Science undergraduate and Software Development Engineer Intern with demonstrated experience designing and shipping production-grade RESTful APIs using Python (FastAPI, Flask, Django) and JavaScript (Node.js, Express.js).</p>
            <p>Adept at building secure, maintainable backend systems with JWT authentication, RBAC, and OWASP-aligned security practices. Proven contributor in collaborative, mentor-reviewed engineering environments.</p>
            <div className="about-ctas">
              <a href="/resume/Milan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-primary">
                Download Resume ↗
              </a>
              <a href="https://cal.com/milan-nmvatl/" target="_blank" rel="noopener noreferrer" className="cta-ghost">
                Book a Meeting
              </a>
            </div>
          </div>

          <div className="about-details">
            {[
              { label: 'Education', value: 'B.Tech CSE — Parul University', sub: '2022–2026 · CGPA 8.43 / 10' },
              { label: 'Current Role', value: 'SDE-1 Intern — Accrete Infosolutions', sub: 'Jan 2026 – Apr 2026 · Vadodara' },
              { label: 'Location', value: 'Ahmedabad, Gujarat, India', sub: '' },
              { label: 'Status', value: 'Open to Full-time Roles', sub: '', accent: true },
            ].map(d => (
              <div key={d.label} className="detail-row">
                <span className="detail-label">{d.label}</span>
                <div>
                  <div className={`detail-value ${d.accent ? 'detail-accent' : ''}`}>{d.value}</div>
                  {d.sub && <div className="detail-sub">{d.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}