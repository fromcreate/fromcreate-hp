'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/works' },
  { label: 'STUDIO', href: '/studio' },
  { label: 'CONTACT', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo - top center */}
      <div style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        textAlign: 'center',
      }}>
        <Link href="/">
          <span style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 'clamp(18px, 3vw, 28px)',
            color: '#fff',
            letterSpacing: '4px',
            textShadow: '2px 2px 0 rgba(0,0,0,0.5), 0 0 20px rgba(123,92,255,0.3)',
            display: 'block',
            lineHeight: 1.3,
          }}>
            FROM CREATE
          </span>
          <span style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '8px',
            color: 'rgba(200,220,255,0.6)',
            letterSpacing: '3px',
            display: 'block',
            marginTop: '4px',
          }}>
            COSMIC CREATIVITY UNLEASHED
          </span>
        </Link>
      </div>

      {/* Constellation Navigation */}
      <nav style={{
        position: 'fixed',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 150,
        width: '90%',
        maxWidth: '900px',
      }}>
        {/* SVG constellation lines */}
        <svg
          viewBox="0 0 900 80"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '80px', pointerEvents: 'none' }}
        >
          {/* Lines connecting nav items in constellation pattern */}
          <line x1="90" y1="40" x2="250" y2="55" className="constellation-line" />
          <line x1="250" y1="55" x2="450" y2="35" className="constellation-line" />
          <line x1="450" y1="35" x2="650" y2="55" className="constellation-line" />
          <line x1="650" y1="55" x2="810" y2="40" className="constellation-line" />
          {/* Star dots at each node */}
          {[90, 250, 450, 650, 810].map((x, i) => (
            <circle
              key={i}
              cx={x}
              cy={[40, 55, 35, 55, 40][i]}
              r="3"
              fill="#fff"
              style={{ filter: 'drop-shadow(0 0 6px rgba(200,220,255,0.8))' }}
            />
          ))}
        </svg>

        {/* Nav links positioned along constellation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          height: '80px',
          position: 'relative',
        }}>
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '10px',
                color: 'rgba(200,220,255,0.8)',
                letterSpacing: '2px',
                textDecoration: 'none',
                textShadow: '0 0 10px rgba(100,200,255,0.3)',
                paddingTop: [50, 65, 45, 65, 50][i] + 'px',
                transition: 'color 0.3s, text-shadow 0.3s',
                textAlign: 'center',
                minWidth: '80px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.textShadow = '0 0 15px rgba(123,92,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(200,220,255,0.8)';
                e.currentTarget.style.textShadow = '0 0 10px rgba(100,200,255,0.3)';
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          position: 'fixed',
          top: '24px',
          right: '24px',
          zIndex: 300,
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </>
  );
}
