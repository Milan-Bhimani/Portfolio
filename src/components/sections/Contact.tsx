'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

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
      gsap.from('.contact-info > *', {
        scrollTrigger: { trigger: '.contact-grid', start: 'top 82%' },
        y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
      });
      gsap.from('.form-field', {
        scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
        y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    // Replace with your actual form endpoint (Formspree, Resend, etc.)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST', body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setStatus('done'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <section ref={ref} id="contact">
      <div className="section-inner">
        <p className="section-label">/ 05</p>
        <h2 className="section-title">Let&apos;s Start<br /><em>a Project</em></h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">Interested in working together? I&apos;d love to hear about your project or opportunity. I&apos;ll buy the coffee.</p>

            <div className="contact-rows">
              {[
                { label: 'Location', val: 'Ahmedabad, Gujarat, India', href: '' },
                { label: 'Email',    val: 'milanhbhimani@gmail.com', href: 'mailto:milanhbhimani@gmail.com' },
                { label: 'Phone',    val: '+91 79844 54901', href: 'tel:+917984454901' },
                { label: 'Schedule', val: 'Book a Meeting ↗', href: 'https://cal.com/milan-nmvatl/' },
              ].map(c => (
                <div key={c.label} className="contact-row">
                  <span className="contact-label">{c.label}</span>
                  {c.href
                    ? <a href={c.href} className="contact-val contact-link" target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{c.val}</a>
                    : <span className="contact-val">{c.val}</span>
                  }
                </div>
              ))}
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Milan-Bhimani" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/bhimani-milan-h" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required autoComplete="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required autoComplete="email" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Tell me about your project</label>
              <textarea id="message" name="message" rows={5} placeholder="What are you building?" required />
            </div>
            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              <span>{status === 'sending' ? 'Sending…' : status === 'done' ? 'Sent ✓' : 'Send Message'}</span>
              {status === 'idle' && <span className="submit-arrow">→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}