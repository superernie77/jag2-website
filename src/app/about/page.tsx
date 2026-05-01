'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHead from '@/components/PageHead';
import CTABand from '@/components/CTABand';

gsap.registerPlugin(ScrollTrigger);

const VALUES = [
  { num: 'I.', title: 'Expertise over volume', body: 'JAG does not take every project. It takes the right ones, and delivers them well.' },
  { num: 'II.', title: 'Transparency', body: 'Clear communication from day one. No surprises on scope, timeline or cost.' },
  { num: 'III.', title: 'Knowledge transfer', body: 'Every engagement leaves your team more capable than before.' },
];

const TIMELINE = [
  { yr: '2023 — present', role: 'Founder · JAG', org: 'Independent practice — Java, Architecture and QA for finance & insurance.', loc: 'Freilassing · DE' },
  { yr: '2012 — 2023', role: 'Senior Java Developer · Software Architect', org: 'Wüstenrot Datenservice — microservices, internal sales platform, Java EE training.', loc: 'Salzburg · AT' },
  { yr: '2009 — 2012', role: 'Senior Developer · HCM platform', org: 'Provincial Health Services Authority of BC — payroll & scheduling for 8 hospitals.', loc: 'Vancouver · CA' },
  { yr: '2001 — 2009', role: 'Researcher · Lecturer', org: 'University of Dortmund — process modelling, e-learning framework, programming lectures.', loc: 'Dortmund · DE' },
];

export default function AboutPage() {
  const bioRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About grid
      gsap.from('.about-card', {
        opacity: 0, x: -50, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: bioRef.current, start: 'top 75%' }
      });
      gsap.from('.about-bio', {
        opacity: 0, x: 50, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: bioRef.current, start: 'top 75%' }
      });
      gsap.from('.bio-para', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.jag-bio', start: 'top 80%' }
      });

      // Values
      gsap.from('.jag-value', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: valuesRef.current, start: 'top 80%' }
      });

      // Timeline rows
      gsap.from('.jag-tlrow', {
        opacity: 0, x: -30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHead
        kicker="About"
        title="The person behind JAG."
        caption="Twenty years of Java, software architecture and QA. One studio. Currently engaged with finance and insurance firms across Germany and Austria."
      />

      <section ref={bioRef} className="jag-block jag-block--light">
        <div className="jag-shell">
          <div className="jag-aboutgrid">
            <aside className="jag-aboutcard about-card">
              <div className="jag-aboutcard__photo" />
              <dl className="jag-aboutcard__facts">
                <dt>Based in</dt><dd>Freilassing · Germany (near Salzburg)</dd>
                <dt>Experience</dt><dd>20+ years · Java, Architecture &amp; QA</dd>
                <dt>Industry focus</dt><dd>Finance &amp; insurance</dd>
                <dt>Languages</dt><dd>German, English</dd>
                <dt>Available for</dt><dd>Remote &amp; on-site engagements across Germany, Austria and Europe</dd>
                <dt>Response time</dt><dd>Within 24 hours on business days</dd>
              </dl>
            </aside>

            <div className="jag-bio about-bio">
              <span className="jag-label-upper" style={{ color: '#8F8F8F' }}>Bio · First person</span>
              <h2 className="jag-bio__title">Senior Java engineer, software architect, and QA practitioner — since 2001.</h2>
              <p className="bio-para">I have been writing software since 2001 — and the problems I find most interesting have not changed much since then. How do you design systems that hold up under real pressure? How do you build teams that stay capable long after the project ends? How do you ship something complex without it falling apart at the seams?</p>
              <p className="bio-para">My career started in academia. At the University of Dortmund I developed software for modelling and optimising industrial processes, built an e-learning framework, and lectured in programming. That background taught me to think rigorously — and to explain complex ideas clearly. Both still matter every day.</p>
              <p className="bio-para">From there I moved to Vancouver, where I spent three years implementing a Human Capital Management system for the Provincial Health Services Authority of British Columbia — a payroll and scheduling platform used across eight hospitals. Delivering critical infrastructure for a public healthcare organisation, on time and correctly, is a different kind of pressure. The kind that shapes how you work.</p>
              <p className="bio-para">I then joined Wüstenrot Datenservice in Salzburg, where I stayed for nearly eleven years as a Senior Java Developer and Software Architect. I designed and built microservices for a large-scale e-commerce platform, led the development of an internal sales system, and ran training courses in Java EE for internal teams. It was there I realised that long-term technical partnerships — where you understand the history, the trade-offs, and the people — produce fundamentally better software than short engagements ever can.</p>
              <p className="bio-para">Since 2023 I have been working independently under JAG, focussed on what I do best: software architecture and technical leadership for companies in finance and insurance. Recent projects include a car insurance sales platform built on Java 21, Spring Boot and Kubernetes; an automated API testing solution rolled out across 450+ microservices; and an ongoing modernisation of a large Austrian bank and insurance provider&apos;s front-end landscape.</p>
              <p className="bio-para">JAG stands for <strong>Java, Architecture and QA</strong> — the three things that, in my experience, decide whether a software project succeeds or quietly fails. I work with mid-size companies who need a senior expert they can rely on: someone who understands the full picture, communicates without jargon, and still cares about code quality on the last day of the project as much as the first.</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="jag-block jag-block--ash jag-block--tight">
        <div className="jag-shell">
          <div className="jag-secthead">
            <span className="jag-label-upper jag-secthead__kicker">Values</span>
            <h2 className="jag-secthead__title">Three statements. Made plainly.</h2>
          </div>
          <div className="jag-values">
            {VALUES.map(v => (
              <article key={v.num} className="jag-value">
                <span className="jag-value__num">{v.num}</span>
                <h3 className="jag-value__title">{v.title}</h3>
                <p className="jag-value__body">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={timelineRef} className="jag-block jag-block--light jag-block--tight">
        <div className="jag-shell">
          <div className="jag-secthead">
            <span className="jag-label-upper jag-secthead__kicker">Career</span>
            <h2 className="jag-secthead__title">Four chapters. Written in code.</h2>
          </div>
          <div className="jag-timeline">
            {TIMELINE.map(t => (
              <div key={t.yr} className="jag-tlrow">
                <span className="jag-tlrow__yr">{t.yr}</span>
                <div>
                  <h3 className="jag-tlrow__role">{t.role}</h3>
                  <p className="jag-tlrow__org">{t.org}</p>
                </div>
                <span className="jag-tlrow__loc">{t.loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Brief JAG."
        caption="Tell us about your project. A reply within 24 hours on business days."
        primaryLabel="Contact JAG"
        href="/contact"
      />
    </>
  );
}
