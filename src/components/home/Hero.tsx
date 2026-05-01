'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const emblemRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered text entrance
      tl.from('.hero-kicker', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-title', { opacity: 0, y: 40, duration: 0.9 }, '-=0.3')
        .from('.hero-caption', { opacity: 0, y: 24, duration: 0.7 }, '-=0.5')
        .from('.hero-cta-btn', { opacity: 0, y: 16, duration: 0.5, stagger: 0.12 }, '-=0.4')
        .from('.hero-plate', { opacity: 0, scale: 0.95, duration: 1.0 }, '-=0.8')
        .from('.hero-crosshair', { opacity: 0, scale: 1.04, duration: 0.7 }, '-=0.5')
        .from('.hero-meta', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3');

      // Emblem continuous float
      gsap.to(emblemRef.current, {
        y: -10,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Subtle red glow pulse on the plate
      gsap.to('.hero-plate', {
        filter: 'brightness(1.05)',
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Grid line scanning animation
      gsap.fromTo('.hero-crosshair',
        { borderColor: 'rgba(255,255,255,0.04)' },
        { borderColor: 'rgba(255,255,255,0.14)', duration: 2, ease: 'sine.inOut', yoyo: true, repeat: -1 }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-hero">
      <div className="jag-hero__inner">
        <div className="jag-hero__text">
          <span className="jag-label-upper jag-hero__kicker hero-kicker">
            JAG · Consulting since 2023 · Freilassing
          </span>
          <h1 className="jag-hero__title hero-title">
            Engineering excellence for mid&#8209;size companies.
          </h1>
          <p className="jag-hero__caption hero-caption">
            JAG delivers senior-level Java development, software architecture, quality assurance
            and IT training — from one trusted partner. Twenty years in the field. One discipline.
          </p>
          <div className="jag-hero__ctas">
            <Link href="/services" className="jag-btn jag-btn--primary-red hero-cta-btn">
              <span>See our services</span>
              <span className="jag-btn__arrow">→</span>
            </Link>
            <Link href="/contact" className="jag-btn jag-btn--ghost-light hero-cta-btn">
              <span>Get in touch</span>
            </Link>
          </div>
        </div>

        <div className="jag-hero__visual">
          <div className="jag-hero__plate hero-plate">
            <div className="jag-hero__crosshair hero-crosshair" />
            <div className="jag-hero__emblem-frame">
              <svg ref={emblemRef} width="220" height="220" viewBox="0 0 220 220" aria-hidden="true">
                <rect x="18" y="18" width="184" height="184" fill="none" stroke="#fff" strokeOpacity=".12" strokeWidth="1"/>
                <rect x="40" y="40" width="140" height="140" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1"/>
                <text x="110" y="124" textAnchor="middle" fontFamily="Inter Tight" fontSize="58" fontWeight="500" fill="#fff" letterSpacing="-1">JAG</text>
                <rect x="76" y="138" width="68" height="2" fill="#DA291C"/>
                <text x="110" y="166" textAnchor="middle" fontFamily="Archivo" fontSize="9" letterSpacing="2" fill="#8F8F8F">JAVA · ARCHITECTURE · QA</text>
              </svg>
            </div>
            <div className="jag-hero__meta hero-meta">
              <div>
                <div style={{ marginBottom: 6 }}>Practice</div>
                <div className="jag-hero__meta-large">III</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ marginBottom: 6 }}>Years</div>
                <div className="jag-hero__meta-large">20+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
