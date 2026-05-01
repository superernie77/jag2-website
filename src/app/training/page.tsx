'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHead from '@/components/PageHead';
import CTABand from '@/components/CTABand';

gsap.registerPlugin(ScrollTrigger);

const FORMATS = [
  { num: '01', title: 'Half-day workshops', body: 'Focused, fast — ideal for single topics and a tight team brief.' },
  { num: '02', title: 'Full-day workshops', body: 'Deep dives with structured exercises, walk-throughs and Q&A.' },
  { num: '03', title: 'Multi-day programmes', body: 'A structured curriculum across two to five days, paced to your team.' },
  { num: '04', title: 'On-demand · async', body: 'Materials & async support, on request. For teams already in motion.' },
];

const TOPICS = [
  ['Java Fundamentals', 'Beginner — Intermediate', 'Workshop'],
  ['Advanced Java · Streams, Concurrency, Generics', 'Advanced', 'Workshop'],
  ['Spring Boot in Practice', 'Intermediate — Advanced', 'Workshop'],
  ['Software Architecture Principles', 'Intermediate', 'Workshop'],
  ['Clean Code & Refactoring', 'All levels', 'Workshop'],
  ['QA Strategy & Test Design', 'All levels', 'Workshop'],
  ['Test Automation Basics', 'Intermediate', 'Workshop'],
  ['Custom topic', 'On request', 'Flexible'],
];

const STEPS = [
  { num: '01', title: 'Discovery call', body: 'A short call to understand your team\'s current level, stack and goals.' },
  { num: '02', title: 'Custom curriculum', body: 'JAG designs a session tailored to your team — exercises included.' },
  { num: '03', title: 'Delivery', body: 'On-site or remote, paced to your team. Real code, real problems.' },
  { num: '04', title: 'Follow-up', body: 'Materials provided · optional Q&A session a fortnight after.' },
];

export default function TrainingPage() {
  const formatsRef = useRef<HTMLElement>(null);
  const topicsRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Formats stagger
      gsap.from('.jag-format', {
        opacity: 0, y: 40, scale: 0.96, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: formatsRef.current, start: 'top 80%' }
      });

      // Topics table rows
      gsap.from('.topic-row', {
        opacity: 0, x: -20, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: topicsRef.current, start: 'top 80%' }
      });

      // Steps with red border animation
      gsap.from('.jag-step', {
        opacity: 0, y: 30, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' }
      });

      gsap.from('.jag-step__num', {
        textContent: '00', duration: 1.2, ease: 'power2.out', stagger: 0.15,
        scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHead
        kicker="Training"
        title="IT training that actually works."
        caption="Practical, hands-on training for development teams — tailored to your stack, delivered by a senior practitioner. Not slide decks read aloud."
      />

      <figure style={{ margin: 0, position: 'relative', lineHeight: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85"
          alt="Professional group training session"
          style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
      </figure>

      <section ref={formatsRef} className="jag-block jag-block--light">
        <div className="jag-shell">
          <div className="jag-secthead">
            <span className="jag-label-upper jag-secthead__kicker">The format</span>
            <h2 className="jag-secthead__title">Built for real teams. Not lecture halls.</h2>
            <p className="jag-secthead__caption">JAG training sessions are structured workshops built around real code, real problems and real outcomes. Whether you want to level up your Java team, introduce proper QA practices, or help developers think architecturally — JAG designs and delivers training that sticks.</p>
          </div>
          <div className="jag-formats">
            {FORMATS.map(f => (
              <article key={f.num} className="jag-format">
                <span className="jag-format__num">{f.num} · Format</span>
                <h3 className="jag-format__title">{f.title}</h3>
                <p className="jag-format__body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={topicsRef} className="jag-block jag-block--ash">
        <div className="jag-shell">
          <div className="jag-secthead">
            <span className="jag-label-upper jag-secthead__kicker">Topics</span>
            <h2 className="jag-secthead__title">A working catalogue.</h2>
            <p className="jag-secthead__caption">Eight topics on the standing list. Custom curricula on request — JAG designs sessions to your stack and skill level.</p>
          </div>
          <div className="jag-topics-wrap"><table className="jag-topics">
            <thead>
              <tr>
                <th style={{ width: '50%' }}>Topic</th>
                <th>Level</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              {TOPICS.map(([t, l, f]) => (
                <tr key={t} className="topic-row">
                  <td className="jag-topics__topic">{t}</td>
                  <td className="jag-topics__level"><span className="jag-pill">{l}</span></td>
                  <td className="jag-topics__format"><span className="jag-pill">{f}</span></td>
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </section>

      <section ref={stepsRef} className="jag-block jag-block--light">
        <div className="jag-shell">
          <div className="jag-secthead">
            <span className="jag-label-upper jag-secthead__kicker">How it works</span>
            <h2 className="jag-secthead__title">Four steps. Discovery to follow-up.</h2>
          </div>
          <div className="jag-process">
            {STEPS.map(s => (
              <div key={s.num} className="jag-step">
                <span className="jag-step__num">{s.num}</span>
                <h3 className="jag-step__title">{s.title}</h3>
                <p className="jag-step__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Request a training."
        caption="Tell us about the team, the stack and the goal. JAG replies within 24 hours."
        primaryLabel="Request a training"
        href="/contact"
      />
    </>
  );
}
