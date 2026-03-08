'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'WORKS', href: '/works' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '24px 80px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'rgba(10, 10, 26, 0.8)',
      backdropFilter: 'blur(12px)',
    }}>
      <Link href="/" style={{
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '2px',
        color: '#fff',
      }}>
        FR0M CREATE
      </Link>

      <nav style={{ display: 'flex', gap: '32px' }}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              fontSize: '13px',
              letterSpacing: '1.5px',
              color: 'rgba(255,255,255,0.7)',
              transition: 'color 0.3s',
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
