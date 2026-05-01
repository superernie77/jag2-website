'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOGOS = [
  'Tier-1 Bank · Austria',
  'Insurance · DACH',
  'Building Society',
  'Provincial Health · BC',
  'University · NRW',
];

const QUOTES = [
  {
    body: 'Ernesto delivered the kind of architecture review you can hand to the auditor and the team lead on the same day. Concrete. Binding. Right.',
    name: 'Engagement lead',
    role: 'Tier-1 Bank · Austria — placeholder',
  },
  {
    body: 'We retained JAG for one quarter and kept the engagement for three years. The team writes Java the way you wish your own team would.',
    name: 'Head of Engineering',
    role: 'Insurance · DACH — placeholder',
  },
];

export default function SocialProof() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.sp-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });

      // Logos stagger
      gsap.from('.jag-logos__cell', {
        opacity: 0, y: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-logos', start: 'top 85%' }
      });

      // Quote cards slide up
      gsap.from('.jag-quote', {
        opacity: 0, y: 50, duration: 0.9, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-quotes', start: 'top 80%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-block jag-block--light">
      <div className="jag-shell">
        <div className="jag-secthead sp-head">
          <span className="jag-label-upper jag-secthead__kicker">Selected industries</span>
          <h2 className="jag-secthead__title">Trusted by finance, insurance and the public sector.</h2>
          <p className="jag-secthead__caption">A short list. Real engagements. Logos available on request — names withheld where confidentiality applies.</p>
        </div>

        <div className="jag-logos">
          {LOGOS.map(t => (
            <div key={t} className="jag-logos__cell">{t}</div>
          ))}
        </div>

        <div style={{ height: 60 }} />

        <div className="jag-quotes">
          {QUOTES.map((q, i) => (
            <article key={i} className="jag-quote">
              <span className="jag-quote__mark">&ldquo;</span>
              <p className="jag-quote__body">{q.body}</p>
              <div className="jag-quote__attr">
                <span className="jag-quote__name">{q.name}</span>
                <span className="jag-quote__role">{q.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
