import Link from 'next/link';

const footerLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'WORKS', href: '/works' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '48px 80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    }}>
      <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ fontSize: '12px', letterSpacing: '1px', color: 'rgba(255,255,255,0.5)' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
        &copy; {new Date().getFullYear()} FR0M CREATE Inc. All rights reserved.
      </p>
    </footer>
  );
}
