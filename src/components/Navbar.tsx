'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from '@/lib/gsap';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Entrance — fires after preloader
    const handler = () => {
      gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, ease: 'power3.out' });
    };
    window.addEventListener('preloaderDone', handler);

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('preloaderDone', handler);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      >
        <Link href="/" className="nav-logo">Milan Bhimani</Link>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="/resume/Milan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span /><span />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>
        <nav className="mobile-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="/resume/Milan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </>
  );
}