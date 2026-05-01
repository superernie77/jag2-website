'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyJAG() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // LHS sticky reveal
      gsap.from('.why-lhs', {
        opacity: 0, x: -50, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' }
      });

      // RHS paragraphs stagger
      gsap.from('.why-para', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-essay__rhs', start: 'top 80%' }
      });

      // Pull quote slide in
      gsap.from('.jag-essay__pull', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-essay__pull', start: 'top 85%' }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="jag-block jag-block--ash">
      <div className="jag-shell">
        <div className="jag-essay">
          <div className="jag-essay__lhs why-lhs">
            <span className="jag-label-upper jag-essay__lhs-kicker">Why JAG</span>
            <h2 className="jag-essay__lhs-title">One partner. The full picture.</h2>
          </div>
          <div className="jag-essay__rhs">
            <p className="why-para">
              <strong>Most companies work with multiple vendors</strong> for development, testing and training — losing time and context at every handover. JAG brings all of this under one roof, with a senior expert who understands how every piece connects.
            </p>
            <blockquote className="jag-essay__pull">
              Mid-size firms trust JAG because results are predictable, communication is direct, and knowledge transfer is built into every engagement.
            </blockquote>
            <p className="why-para">
              JAG stands for <strong>Java, Architecture and QA</strong> — the three things that, in our experience, decide whether a software project succeeds or quietly fails. Twenty years across finance, insurance and the public sector tell us where systems break, and how to keep them from breaking again.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
