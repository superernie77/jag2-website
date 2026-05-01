'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROOF = [
  { num: 20, suffix: '+', label: 'Years in Java & architecture' },
  { num: 450, suffix: '+', label: 'Microservices under automated test' },
  { num: 8, suffix: '', label: 'Hospitals · BC payroll platform' },
  { num: 11, suffix: '', label: 'Years · Wüstenrot Datenservice' },
];

export default function ProofBand() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proof-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });

      // Counter animations
      const cells = gsap.utils.toArray<HTMLElement>('.proof-num-val');
      cells.forEach((el, i) => {
        const target = PROOF[i].num;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          snap: { val: 1 },
          onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
          scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true }
        });
      });

      // Cells stagger in
      gsap.from('.jag-proof__cell', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-proof', start: 'top 80%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-block jag-block--dark" style={{ padding: 0 }}>
      <div className="jag-shell" style={{ padding: '80px 40px 40px' }}>
        <div className="jag-secthead jag-secthead--dark proof-head">
          <span className="jag-label-upper jag-secthead__kicker">Counted, not claimed</span>
          <h2 className="jag-secthead__title">Twenty years. Three disciplines. Counted.</h2>
        </div>
      </div>
      <div className="jag-shell" style={{ padding: '0 40px 80px' }}>
        <div className="jag-proof">
          {PROOF.map((p, i) => (
            <div key={i} className="jag-proof__cell">
              <span className="jag-proof__num">
                <span className="proof-num-val">0</span>
                {p.suffix && <small>{p.suffix}</small>}
              </span>
              <span className="jag-proof__label">{p.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
