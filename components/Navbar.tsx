'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/#deals', label: 'Deals' },
    { href: '/#process', label: 'Process' },
    { href: '/sell', label: 'What Sells' },
    { href: '/#questions', label: 'Questions' },
    { href: '/refer', label: 'Partners' },
  ];

  return (
    <>
      <div className="top-status-ticker">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="live-pulse-dot" />
          <span style={{ color: '#141011', fontWeight: 700 }}>
            AI labs are paying established firms six figures for their old records
          </span>
        </div>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <a
            href="tel:+14086576116"
            style={{
              color: '#141011',
              textDecoration: 'none',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '11.5px',
              fontFamily: 'var(--font-mono)',
              padding: '2px 8px',
              background: '#ffffff',
              border: '1px solid #141011',
              borderRadius: '3px',
            }}
            title="Call Tacit: (408) 657-6116"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>(408) 657-6116</span>
          </a>
          <span className="ticker-badge-free">Zero Cost to You</span>
          <span className="ticker-badge-trust">You Keep Your Originals</span>
        </div>
      </div>

      <header className="site-nav" aria-label="Main Navigation">
        <div className="wrap">
          <div className="nav-inner">
            <Link href="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
              <div className="brand-icon-mark">T</div>
              <span>Tacit</span>
            </Link>

            <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: pathname === link.href ? '#141011' : '#4a4646',
                    textDecoration: 'none',
                    fontWeight: pathname === link.href ? 700 : 600,
                    fontSize: '14px',
                    transition: 'color 0.15s ease',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+14086576116"
                className="mobile-phone-link"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#141011',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '14px',
                  padding: '8px 0',
                }}
                onClick={() => setMobileOpen(false)}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call: (408) 657-6116</span>
              </a>
            </nav>

            <div className="nav-cta-cluster">
              <a
                href="tel:+14086576116"
                className="desktop-phone-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#141011',
                  background: '#faf9f6',
                  border: '1.5px solid #141011',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxShadow: '2px 2px 0px #141011',
                  transition: 'all 0.15s ease',
                  fontFamily: 'var(--font-mono)',
                }}
                title="Call Tacit: (408) 657-6116"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(408) 657-6116</span>
              </a>
              <Link href="/valuation" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                Get an Offer
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'none',
                  background: '#ffffff',
                  border: '1.5px solid #141011',
                  color: '#141011',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
                className="mobile-nav-btn"
                aria-label="Toggle menu"
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
