'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animateRing);
    };

    const onDown = () => { dot.style.transform = 'translate(-50%,-50%) scale(0.6)'; };
    const onUp = () => { dot.style.transform = 'translate(-50%,-50%) scale(1)'; };

    const onEnter = () => {
      ring.style.width = '44px';
      ring.style.height = '44px';
      ring.style.background = 'rgba(184,150,106,0.06)';
    };
    const onLeave = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.background = 'transparent';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const interactives = document.querySelectorAll('a, button, input, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
