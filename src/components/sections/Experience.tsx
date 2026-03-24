'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const experiences = [
  {
    year: '2026',
    role: 'Software Development Engineer-1 Intern',
    company: 'Accrete Infosolutions — Vadodara, Gujarat',
    period: 'Jan 2026 – Apr 2026',
    desc: 'Built RESTful APIs for a live e-commerce platform (Shop Sphere) using Node.js and Express.js with MVC architecture and JWT authentication. Designed MySQL schema from scratch; delivered React.js frontend features including Admin Dashboard, payment page, and profile page under senior mentor review.',
    tags: ['Node.js', 'Express.js', 'MySQL', 'React.js', 'JWT', 'MVC', 'Tailwind CSS'],
  },
  {
    year: '2022–26',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'Parul University',
    period: '2022 – 2026 · CGPA: 8.43 / 10',
    desc: '',
    tags: [],
  },
];

export default function Experience() {
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
      gsap.from('.timeline-item', {
        scrollTrigger: { trigger: '.timeline', start: 'top 82%' },
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="experience">
      <div className="section-inner" style={{ paddingTop: 0 }}>
        <p className="section-label">/ 02</p>
        <h2 className="section-title">Work<br /><em>Experience</em></h2>

        <div className="timeline">
          {experiences.map((exp) => (
            <article key={exp.role} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-period">{exp.period}</p>
                {exp.desc && <p className="timeline-desc">{exp.desc}</p>}
                {exp.tags.length > 0 && (
                  <div className="timeline-tags">
                    {exp.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}