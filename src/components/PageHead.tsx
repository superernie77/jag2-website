'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props {
  kicker: string;
  title: string;
  caption?: string;
}

export default function PageHead({ kicker, title, caption }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.ph-kicker', { opacity: 0, y: 20, duration: 0.6 })
        .from('.ph-title', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
        .from('.ph-caption', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
    }, ref);
    return () => ctx.revert();
  }, [title]);

  return (
    <section ref={ref} className="jag-pagehead">
      <div className="jag-pagehead__inner">
        <span className="jag-label-upper jag-pagehead__kicker ph-kicker">{kicker}</span>
        <h1 className="jag-pagehead__title ph-title">{title}</h1>
        {caption && <p className="jag-pagehead__caption ph-caption">{caption}</p>}
      </div>
    </section>
  );
}
