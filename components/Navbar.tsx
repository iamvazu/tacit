'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/sell', label: 'What Sells' },
    { href: '/valuation', label: 'Valuation' },
    { href: '/rights-check', label: 'Rights Check' },
    { href: '/how-it-works', label: 'Pipeline' },
    { href: '/security', label: 'Security' },
    { href: '/buyers', label: 'AI Labs' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      <div className="top-status-ticker">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="live-pulse-dot" />
          <span style={{ color: '#E2E8F0', fontWeight: 600 }}>
            TACIT PROTOCOL ACTIVE · 18.4M TOKENS CLEARED UNDER CLEAN TITLE
          </span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ color: '#10B981', fontWeight: 600 }}>80% DIRECT SELLER SHARE</span>
          <span style={{ color: '#94A3B8' }}>TRAIN-ONLY LICENCES</span>
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
                    color: pathname === link.href ? '#FFFFFF' : '#CBD5E1',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    transition: 'color 0.2s',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="nav-cta-cluster">
              <Link href="/valuation" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                Value My Data
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'none',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
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
