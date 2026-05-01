'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHead from '@/components/PageHead';
import CTABand from '@/components/CTABand';

gsap.registerPlugin(ScrollTrigger);

const SERVICE_DETAIL = [
  {
    n: '01', title: 'Java Development',
    img: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=1200&q=85',
    body: 'JAG delivers clean, well-documented Java code that your team can maintain and extend. Whether you need a new feature, a complete module or support on a complex backend system — JAG integrates smoothly with your existing codebase and team.',
    list: ['Backend Java and Spring Boot development', 'Code review and refactoring', 'API design and integration', 'Legacy system modernisation'],
  },
  {
    n: '02', title: 'Software Architecture · Design & Review',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=85',
    body: 'Good architecture is invisible when it works — and costly when it doesn\'t. JAG helps mid-size firms design systems that are scalable, maintainable and aligned with business goals. Already have an architecture in place? JAG offers independent reviews with concrete, actionable feedback.',
    list: ['System and service architecture design', 'Architecture documentation', 'Independent architecture review and critique', 'Technology selection guidance'],
  },
  {
    n: '03', title: 'Quality Assurance',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85',
    body: 'Shipping fast should never mean shipping broken. JAG brings structured QA practices to your development process — from test strategy through to execution — so your team can release with confidence.',
    list: ['QA strategy and planning', 'Manual and automated test design', 'Test coverage analysis', 'Defect management and reporting'],
  },
  {
    n: '04', title: 'IT Training',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85',
    body: 'JAG\'s training engagements are built for real development teams, not lecture halls. Sessions are practical, example-driven, and tailored to your stack and skill level. The goal: your team leaves able to apply what they learned immediately.',
    list: ['Java fundamentals to advanced', 'Software architecture principles', 'QA and testing best practices', 'Clean code and refactoring', 'Custom topics on request'],
  },
  {
    n: '05', title: 'Project Management',
    img: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2b9?w=1200&q=85',
    body: 'Beyond the technical work, JAG can take on the coordination layer — tracking progress, managing stakeholders, and keeping deliverables on time. Useful for companies without a dedicated PM or for augmenting an existing team.',
    list: ['Sprint planning and backlog management', 'Stakeholder reporting', 'Risk identification and mitigation', 'Delivery coordination across teams'],
  },
  {
    n: '06', title: 'Architecture Review',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85',
    body: 'An independent expert eye on your existing architecture. JAG reviews your system design, identifies structural risks, and delivers concrete, actionable recommendations — written clearly enough to hand to both the tech lead and the decision-maker.',
    list: ['Independent architecture audit', 'Risk and bottleneck identification', 'Written report with prioritised actions', 'Optional follow-up Q&A session'],
  },
];

function ServiceRow({ s, index }: { s: typeof SERVICE_DETAIL[0]; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-row-head', {
        opacity: 0, x: -40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%' }
      });
      gsap.from('.svc-row-body', {
        opacity: 0, x: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%' }
      });
      gsap.from('.svc-row-li', {
        opacity: 0, x: 20, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 70%' }
      });
    }, rowRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rowRef} className="jag-svcrow">
      <div className="jag-svcrow__head svc-row-head">
        <span className="jag-svcrow__num">{s.n} · Practice</span>
        <h2 className="jag-svcrow__title">{s.title}</h2>
      </div>
      <div className="jag-svcrow__body svc-row-body">
        <p>{s.body}</p>
        {s.img && (
          <figure className="jag-svcrow__img-wrap">
            <img src={s.img} alt={s.title} loading="lazy" className="jag-svcrow__img" />
          </figure>
        )}
        <ul className="jag-svcrow__list">
          {s.list.map((li, i) => (
            <li key={li} className="svc-row-li">
              <span className="jag-svcrow__list-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{li}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref}>
      <PageHead
        kicker="Services"
        title="Six engagements. One studio."
        caption="JAG offers a focused set of high-value services for mid-size technology teams. Every engagement is hands-on, senior-led and outcome-oriented."
      />
      <figure className="jag-svc-imgstrip" style={{ margin: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=85"
          alt="Code on screens"
          style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </figure>
      <section className="jag-block jag-block--light">
        <div className="jag-shell">
          {SERVICE_DETAIL.map((s, i) => (
            <ServiceRow key={s.n} s={s} index={i} />
          ))}
        </div>
      </section>
      <CTABand
        title="A specific need? Let's talk."
        caption="A short letter is enough. JAG replies within 24 hours on business days."
        primaryLabel="Contact JAG"
        href="/contact"
      />
    </div>
  );
}
