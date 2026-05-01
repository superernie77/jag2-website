import Link from 'next/link';

const FOOTER_COLS = [
  { title: 'Services', items: [
    { label: 'Java Development', href: '/services' },
    { label: 'Software Architecture', href: '/services' },
    { label: 'Quality Assurance', href: '/services' },
    { label: 'Project Management', href: '/services' },
    { label: 'Architecture Review', href: '/services' },
  ]},
  { title: 'Training', items: [
    { label: 'Workshops', href: '/training' },
    { label: 'Multi-day programmes', href: '/training' },
    { label: 'Custom topics', href: '/training' },
  ]},
  { title: 'Studio', items: [
    { label: 'About JAG', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]},
  { title: 'Legal', items: [
    { label: 'Impressum', href: '/contact' },
    { label: 'Datenschutz', href: '/contact' },
  ]},
];

export default function Footer() {
  return (
    <footer className="jag-footer">
      <div className="jag-footer__inner">
        <div className="jag-footer__top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <svg width="32" height="32" viewBox="0 0 40 40">
                <rect width="40" height="40" fill="#fff"/>
                <text x="20" y="27" textAnchor="middle" fontFamily="Inter Tight" fontSize="18" fontWeight="700" fill="#000">JAG</text>
                <rect x="6" y="32" width="28" height="2" fill="#DA291C"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: 2.4, color: '#fff' }}>JAG</span>
                <span style={{ fontSize: 9, letterSpacing: 1.6, textTransform: 'uppercase', color: '#8F8F8F', fontFamily: 'Archivo' }}>
                  Java · Architecture · QA
                </span>
              </div>
            </div>
            <p className="jag-footer__brand-line">
              A senior IT consultancy for mid-size firms in finance, insurance and beyond. Engineering excellence, delivered.
            </p>
          </div>

          <div className="jag-footer__cols">
            {FOOTER_COLS.map(col => (
              <div key={col.title} className="jag-footer__col">
                <h4>{col.title}</h4>
                <ul>
                  {col.items.map(item => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="jag-footer__sub">
          <span>© MMXXVI · JAG · Java · Architecture · QA · Freilassing, Germany</span>
          <div className="jag-footer__legal">
            <Link href="/contact">Impressum</Link>
            <Link href="/contact">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
