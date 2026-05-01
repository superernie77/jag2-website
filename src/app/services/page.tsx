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
    body: 'JAG delivers clean, well-documented Java code that your team can maintain and extend. Whether you need a new feature, a complete module or support on a complex backend system — JAG integrates smoothly with your existing codebase and team.',
    list: ['Backend Java and Spring Boot development', 'Code review and refactoring', 'API design and integration', 'Legacy system modernisation'],
  },
  {
    n: '02', title: 'Software Architecture · Design & Review',
    body: 'Good architecture is invisible when it works — and costly when it doesn\'t. JAG helps mid-size firms design systems that are scalable, maintainable and aligned with business goals. Already have an architecture in place? JAG offers independent reviews with concrete, actionable feedback.',
    list: ['System and service architecture design', 'Architecture documentation', 'Independent architecture review and critique', 'Technology selection guidance'],
  },
  {
    n: '03', title: 'Quality Assurance',
    body: 'Shipping fast should never mean shipping broken. JAG brings structured QA practices to your development process — from test strategy through to execution — so your team can release with confidence.',
    list: ['QA strategy and planning', 'Manual and automated test design', 'Test coverage analysis', 'Defect management and reporting'],
  },
  {
    n: '04', title: 'IT Training',
    body: 'JAG\'s training engagements are built for real development teams, not lecture halls. Sessions are practical, example-driven, and tailored to your stack and skill level. The goal: your team leaves able to apply what they learned immediately.',
    list: ['Java fundamentals to advanced', 'Software architecture principles', 'QA and testing best practices', 'Clean code and refactoring', 'Custom topics on request'],
  },
  {
    n: '05', title: 'Project Management',
    body: 'Beyond the technical work, JAG can take on the coordination layer — tracking progress, managing stakeholders, and keeping deliverables on time. Useful for companies without a dedicated PM or for augmenting an existing team.',
    list: ['Sprint planning and backlog management', 'Stakeholder reporting', 'Risk identification and mitigation', 'Delivery coordination across teams'],
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
        title="Five engagements. One studio."
        caption="JAG offers a focused set of high-value services for mid-size technology teams. Every engagement is hands-on, senior-led and outcome-oriented."
      />
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
