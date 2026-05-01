'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    index: '01 · Expertise',
    title: 'Deep technical expertise.',
    body: 'Senior-level skills across Java, software architecture and QA — built on twenty years of real-world projects in finance, insurance and the public sector. No bench. No juniors on contract.',
  },
  {
    index: '02 · Coverage',
    title: 'End‑to‑end coverage.',
    body: 'From writing code to reviewing architecture, ensuring quality and training your team. JAG covers the full lifecycle — and the handovers in between, where most projects quietly fail.',
  },
  {
    index: '03 · Delivery',
    title: 'Fast and reliable delivery.',
    body: 'Commitments are kept. Deadlines are met. No surprises on scope, timeline or cost — and no decline in code quality on the last day of the project.',
  },
];

export default function Pillars() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section head slide in
      gsap.from('.pillars-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });

      // Each pillar staggers in from below
      gsap.from('.jag-pillar', {
        opacity: 0, y: 60, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-pillars', start: 'top 80%' }
      });

      // Red rules animate width on scroll
      gsap.from('.jag-pillar__rule', {
        width: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.jag-pillars', start: 'top 70%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-block jag-block--dark" style={{ padding: 0 }}>
      <div className="jag-shell" style={{ padding: '80px 40px 0' }}>
        <div className="jag-secthead jag-secthead--dark pillars-head">
          <span className="jag-label-upper jag-secthead__kicker">The Practice</span>
          <h2 className="jag-secthead__title">Three commitments. Made plainly.</h2>
          <p className="jag-secthead__caption">Every project is measured against them.</p>
        </div>
      </div>
      <div className="jag-pillars">
        {PILLARS.map(p => (
          <article key={p.index} className="jag-pillar">
            <span className="jag-pillar__index">{p.index}</span>
            <h3 className="jag-pillar__title">{p.title}</h3>
            <div className="jag-pillar__rule" />
            <p className="jag-pillar__body">{p.body}</p>
          </article>
        ))}
      </div>
      <div style={{ height: 80 }} />
    </section>
  );
}
