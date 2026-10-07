'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

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
          <span>TACIT PROTOCOL ACTIVE · 18.4M TOKENS CLEARED UNDER CLEAN TITLE</span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ color: 'var(--green-verified)' }}>80% DIRECT SELLER SHARE</span>
          <span style={{ opacity: 0.6 }}>TRAIN-ONLY NON-DISTRIBUTIVE</span>
        </div>
      </div>

      <header className="site-nav" aria-label="Main Navigation">
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
                className={pathname === link.href ? 'active' : ''}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta-cluster">
            <ThemeToggle />
            <Link href="/valuation" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
              Value Data
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '6px 10px',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              className="mobile-nav-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
