'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  caption: string;
  primaryLabel?: string;
  href?: string;
}

export default function CTABand({ title, caption, primaryLabel = 'Brief JAG', href = '/contact' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-title', {
        opacity: 0, x: -40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      });
      gsap.from('.cta-caption', {
        opacity: 0, x: -30, duration: 0.7, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      });
      gsap.from('.cta-action', {
        opacity: 0, x: 40, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-ctaband">
      <div className="jag-ctaband__inner">
        <div>
          <h2 className="jag-ctaband__title cta-title">{title}</h2>
          <p className="jag-ctaband__caption cta-caption">{caption}</p>
        </div>
        <div className="jag-ctaband__actions cta-action">
          <Link href={href} className="jag-btn jag-btn--ghost-light">
            <span>{primaryLabel}</span>
            <span className="jag-btn__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
