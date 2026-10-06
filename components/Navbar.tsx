'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/sell', label: 'What sells' },
    { href: '/valuation', label: 'Valuation' },
    { href: '/rights-check', label: 'Rights check' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/security', label: 'Security' },
    { href: '/buyers', label: 'For AI labs' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className="site-nav" aria-label="Main Navigation">
      <div className="wrap">
        <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
          <i aria-hidden="true" />
          <span><b>Tacit</b></span>
        </Link>

        <div className={`navlinks ${mobileOpen ? 'open' : ''}`}>
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
          <Link
            href="/contact"
            className={pathname === '/contact' ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className="nav-actions" style={{ marginLeft: 'auto' }}>
          <ThemeToggle />
          <Link href="/valuation" className="btn small" style={{ display: 'none', minWidth: 'auto' }}>
            Value data
          </Link>
          <Link href="/valuation" className="btn small">
            Value my data
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? '✕ Close' : '☰ Menu'}
          </button>
        </div>
      </div>
    </nav>
  );
}
