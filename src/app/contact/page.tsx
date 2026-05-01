'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import PageHead from '@/components/PageHead';

export default function ContactPage() {
  const formRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }));

  const valid = form.name && form.company && form.email && form.message;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form', {
        opacity: 0, x: -50, duration: 0.9, ease: 'power3.out', delay: 0.2
      });
      gsap.from('.contact-side', {
        opacity: 0, x: 50, duration: 0.9, ease: 'power3.out', delay: 0.3
      });
      gsap.from('.jag-field', {
        opacity: 0, y: 20, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.4
      });
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    gsap.to('.contact-form', { opacity: 0, y: -20, duration: 0.4, ease: 'power2.in', onComplete: () => setSent(true) });
  };

  return (
    <>
      <PageHead
        kicker="Contact"
        title="Let's talk about your project."
        caption="Whether you have a clear brief or just an idea of what you need — reach out and JAG will respond within 24 hours on business days."
      />

      <section ref={formRef} className="jag-block jag-block--light">
        <div className="jag-shell">
          <div className="jag-contact">
            {!sent ? (
              <form className="jag-form contact-form" onSubmit={handleSubmit}>
                <div className="jag-field">
                  <label>Name *</label>
                  <input className="jag-input" required value={form.name} onChange={set('name')} placeholder="Andrea Bauer" />
                </div>
                <div className="jag-field">
                  <label>Company *</label>
                  <input className="jag-input" required value={form.company} onChange={set('company')} placeholder="Firma GmbH" />
                </div>
                <div className="jag-field">
                  <label>Email *</label>
                  <input className="jag-input" type="email" required value={form.email} onChange={set('email')} placeholder="a.bauer@firma.de" />
                </div>
                <div className="jag-field">
                  <label>Phone (optional)</label>
                  <input className="jag-input" value={form.phone} onChange={set('phone')} placeholder="+49 ..." />
                </div>
                <div className="jag-field jag-field--full">
                  <label>Service of interest</label>
                  <select className="jag-select" value={form.service} onChange={set('service')}>
                    <option value="">Select a service —</option>
                    <option>Java Development</option>
                    <option>Software Architecture</option>
                    <option>Quality Assurance</option>
                    <option>IT Training</option>
                    <option>Project Management</option>
                    <option>Architecture Review</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="jag-field jag-field--full">
                  <label>Message · Project description *</label>
                  <textarea className="jag-textarea" required rows={6} value={form.message} onChange={set('message')}
                    placeholder="Three lines on the system, the deadline, and the question." />
                </div>
                <div className="jag-field--full" style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <button type="submit" className="jag-btn jag-btn--primary-red" disabled={!valid} style={{ opacity: valid ? 1 : 0.5 }}>
                    <span>Send message</span>
                    <span className="jag-btn__arrow">→</span>
                  </button>
                  <span className="jag-label-upper" style={{ color: '#8F8F8F' }}>Reply within 24h · Mon–Fri</span>
                </div>
              </form>
            ) : (
              <SuccessMessage name={form.name} />
            )}

            <aside className="jag-contact__side contact-side">
              <span className="jag-label-upper" style={{ color: '#8F8F8F', marginBottom: 6 }}>Direct</span>
              <h3 style={{ fontFamily: 'Inter Tight', fontSize: 24, fontWeight: 500, margin: '6px 0 22px', color: '#fff' }}>
                A short letter is enough.
              </h3>
              <dl style={{ margin: 0 }}>
                <dt>Email</dt>
                <dd>—</dd>
                <dt>Phone</dt>
                <dd>—</dd>
                <dt>Available for</dt>
                <dd>Remote &amp; on-site engagements across Germany, Austria &amp; Europe</dd>
                <dt>Response time</dt>
                <dd>Within 24 hours on business days</dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function SuccessMessage({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' });
  }, []);

  return (
    <div ref={ref} className="jag-success">
      <span className="jag-label-upper" style={{ color: '#8F8F8F' }}>Received</span>
      <h2 style={{ fontSize: 32, fontWeight: 500, margin: '8px 0 8px', color: '#fff' }}>
        <strong>Thank you, {name.split(' ')[0] || 'there'}.</strong>
      </h2>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: '#D2D2D2', margin: 0 }}>
        Your brief is in JAG&apos;s inbox. A reply will land within 24 hours on business days. If it is urgent, the phone number on the right is the fastest path.
      </p>
    </div>
  );
}
