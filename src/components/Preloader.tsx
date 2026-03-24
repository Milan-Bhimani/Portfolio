'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = preloaderRef.current!;
    const bar = barRef.current!;
    const letters = lettersRef.current!.children;

    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete() {
        gsap.to(el, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power3.inOut',
          onComplete: () => {
            el.remove();
            document.body.style.overflow = '';
            // Dispatch event so Hero can start its animation
            window.dispatchEvent(new Event('preloaderDone'));
          },
        });
      },
    });

    tl.to(bar, { width: '100%', duration: 1.2, ease: 'power2.inOut' })
      .to(letters, {
        y: -20, opacity: 0, stagger: 0.06, duration: 0.4, ease: 'power2.in',
      }, '-=0.3');
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={barRef} className="preloader-bar" />
      <div ref={lettersRef} className="preloader-letters">
        {'MILAN'.split('').map((l, i) => <span key={i}>{l}</span>)}
      </div>
    </div>
  );
}