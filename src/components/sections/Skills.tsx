'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const skillGroups = [
  { label: '01. Languages', skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3'] },
  { label: '02. Backend',   skills: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Express.js', 'REST API Design'] },
  { label: '03. Database',  skills: ['MySQL', 'MongoDB', 'Firebase'] },
  { label: '04. Frontend',  skills: ['React.js', 'Tailwind CSS', 'PrimeReact'] },
  { label: '05. Security',  skills: ['JWT', 'RBAC', 'Input Validation', 'Rate Limiting', 'OWASP Top 10'] },
  { label: '06. Tools',     skills: ['Git & GitHub', 'Postman', 'VS Code', 'Linux', 'Docker (basic)'] },
];

export default function Skills() {
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
      gsap.from('.skill-group', {
        scrollTrigger: { trigger: '.skills-grid', start: 'top 82%' },
        scale: 0.94, opacity: 0, duration: 0.6,
        stagger: { amount: 0.5, from: 'start' }, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="skills">
      <div className="section-inner">
        <p className="section-label">/ 04</p>
        <h2 className="section-title">Technical<br /><em>Arsenal</em></h2>

        <div className="skills-grid">
          {skillGroups.map(g => (
            <div key={g.label} className="skill-group">
              <h4 className="skill-group-label">{g.label}</h4>
              <ul>
                {g.skills.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}