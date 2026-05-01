'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const NAV_ITEMS = [
  { href: '/services', label: 'Services' },
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.jag-nav__brand', { opacity: 0, x: -20, duration: 0.7, ease: 'power3.out', delay: 0.2 });
      gsap.from('.jag-nav__link', { opacity: 0, y: -10, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.3 });
      gsap.from('.jag-nav__cta', { opacity: 0, x: 20, duration: 0.7, ease: 'power3.out', delay: 0.4 });
    }, navRef);
    return () => ctx.revert();
  }, []);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile drawer animation
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    if (menuOpen) {
      gsap.set(drawer, { display: 'flex' });
      gsap.fromTo(drawer,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
      gsap.fromTo('.mob-nav-item',
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      gsap.to(drawer, {
        opacity: 0, y: -10, duration: 0.25, ease: 'power2.in',
        onComplete: () => gsap.set(drawer, { display: 'none' })
      });
    }
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header ref={navRef} className={`jag-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="jag-nav__inner">
          <Link href="/" className="jag-nav__brand">
            <svg className="jag-nav__brand-mark" viewBox="0 0 40 40" aria-hidden="true">
              <rect x="0" y="0" width="40" height="40" fill="#fff"/>
              <text x="20" y="27" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5" fill="#000">JAG</text>
              <rect x="6" y="32" width="28" height="2" fill="#DA291C"/>
            </svg>
            <div className="jag-nav__brand-text">
              <span className="jag-nav__brand-name">JAG</span>
              <span className="jag-nav__brand-desc">Java · Architecture · QA</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="jag-nav__links">
            {NAV_ITEMS.map(it => (
              <Link
                key={it.href}
                href={it.href}
                className={`jag-nav__link${pathname === it.href ? ' is-active' : ''}`}
              >
                {it.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="jag-nav__cta">
            <Link href="/contact" className="jag-btn jag-btn--ghost-light jag-nav__brief-btn">
              <span>Brief JAG</span>
              <span className="jag-btn__arrow">→</span>
            </Link>
            {/* Hamburger — mobile only */}
            <button
              className="jag-hamburger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className={`jag-hamburger__bar${menuOpen ? ' open' : ''}`} />
              <span className={`jag-hamburger__bar${menuOpen ? ' open' : ''}`} />
              <span className={`jag-hamburger__bar${menuOpen ? ' open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div ref={drawerRef} className="jag-mob-drawer" style={{ display: 'none' }}>
        <nav className="jag-mob-drawer__nav">
          {NAV_ITEMS.map(it => (
            <Link
              key={it.href}
              href={it.href}
              className={`jag-mob-drawer__link mob-nav-item${pathname === it.href ? ' is-active' : ''}`}
            >
              {it.label}
            </Link>
          ))}
          <Link href="/contact" className="jag-btn jag-btn--primary-red mob-nav-item" style={{ marginTop: 8, alignSelf: 'flex-start' }}>
            <span>Brief JAG</span>
            <span className="jag-btn__arrow">→</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
