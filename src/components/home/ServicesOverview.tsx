'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_TILES = [
  { num: '01', title: 'Java Development', body: 'Robust, maintainable Java solutions tailored to your stack.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=85' },
  { num: '02', title: 'Software Architecture', body: 'Design and review of scalable, future-proof systems.', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=85' },
  { num: '03', title: 'Quality Assurance', body: 'Comprehensive testing strategies — ship with confidence.', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=85' },
  { num: '04', title: 'IT Training', body: 'Hands-on training that actually sticks. For your team.', img: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&q=85' },
  { num: '05', title: 'Project Management', body: 'Structured delivery with clear communication at every step.', img: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&q=85' },
  { num: '06', title: 'Architecture Review', body: 'An independent expert eye on your existing architecture.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=85' },
];

export default function ServicesOverview() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });

      gsap.from('.jag-svctile', {
        opacity: 0, y: 40, scale: 0.97, duration: 0.7, stagger: { each: 0.1, from: 'start' }, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-svctiles', start: 'top 80%' }
      });

      gsap.from('.svc-link', {
        opacity: 0, y: 20, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.svc-link', start: 'top 90%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-block jag-block--light">
      <div className="jag-shell">
        <div className="jag-secthead svc-head">
          <span className="jag-label-upper jag-secthead__kicker">Services</span>
          <h2 className="jag-secthead__title">Whatever stage your project is in, JAG can move it forward.</h2>
          <p className="jag-secthead__caption">A focused set of high-value services for mid-size technology teams. Hands-on. Senior-led. Outcome-oriented.</p>
        </div>

        <div className="jag-svctiles">
          {SERVICE_TILES.map(t => (
            <Link key={t.num} href="/services" className="jag-svctile">
              {t.img && (
                <div className="jag-svctile__img-wrap">
                  <img src={t.img} alt={t.title} loading="lazy" />
                </div>
              )}
              <span className="jag-svctile__num">{t.num} · Service</span>
              <h3 className="jag-svctile__title">{t.title}</h3>
              <p className="jag-svctile__body">{t.body}</p>
              <span className="jag-svctile__more">Read more →</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Link href="/services" className="jag-link svc-link">
            <span>View all services</span>
            <span className="jag-link__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
