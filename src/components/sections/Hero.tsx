'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  // Live IST clock
  useEffect(() => {
    const clockEl = document.getElementById('hero-clock');
    if (!clockEl) return;
    const tick = () => {
      clockEl.textContent = new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Animations — fires after preloader
  useEffect(() => {
    const runAnimation = () => {
      const tl = gsap.timeline();

      tl.from('.hero-label', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from('.name-line', {
          y: '115%', rotateX: -90, opacity: 0,
          duration: 1.1, stagger: 0.18, ease: 'power4.out',
          transformOrigin: 'top center', transformPerspective: 900,
        }, '-=0.2')
        .from('.hero-role-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
        .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
        .from('.hero-meta', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-photo-inner',
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.out' },
        '-=1.2')
        .from('.hero-badge', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
        .from('.scroll-indicator', { opacity: 0, duration: 0.4 }, '-=0.2');
    };

    window.addEventListener('preloaderDone', runAnimation, { once: true });
    return () => window.removeEventListener('preloaderDone', runAnimation);
  }, []);

  // 3D photo tilt on mouse move
  useEffect(() => {
    const section = sectionRef.current!;
    const photo = photoRef.current!;

    const onMove = (e: MouseEvent) => {
      const r = photo.getBoundingClientRect();
      const rx = -((e.clientY - r.top - r.height / 2) / r.height) * 12;
      const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 12;
      gsap.to(photo, {
        rotateX: rx, rotateY: ry,
        transformPerspective: 900, duration: 0.6, ease: 'power2.out',
      });
    };
    const onLeave = () => {
      gsap.to(photo, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'power3.out' });
    };

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero">
      <div className="hero-inner">

        {/* Left: text */}
        <div className="hero-text">
          <p className="hero-label">/ Software Development Engineer Intern</p>

          <h1 className="hero-name">
            <span className="name-line">MILAN</span>
            <span className="hero-role-badge">Backend Developer &amp; Full-Stack Engineer</span>
            <span className="name-line">BHIMANI</span>
          </h1>

          <p className="hero-tagline">
            Building secure, scalable digital<br />ecosystems that feel human.
          </p>

          <div className="hero-meta">
            <span>Ahmedabad, Gujarat —</span>
            <span id="hero-clock">00:00</span>
            <span>IST (GMT+5:30)</span>
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="cta-primary">
              View Selected Work <span className="cta-arrow">→</span>
            </a>
            <a href="#contact" className="cta-ghost">Start a Conversation</a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="hero-photo-wrap">
          <div ref={photoRef} className="hero-photo-inner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/profile.jpg" alt="Milan Bhimani" className="hero-photo" />
            <div className="hero-photo-overlay" />
          </div>
          <div className="hero-badge">
            <span className="badge-sub">Available for</span>
            <span className="badge-main">Full-time Roles</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"><div className="scroll-dot" /></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}