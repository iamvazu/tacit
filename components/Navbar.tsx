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
            </nav>

            <div className="nav-cta-cluster">
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
