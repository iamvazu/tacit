import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site wrap" aria-label="Site Footer">
      <div style={{ display: 'grid', gap: '10px', maxWidth: '320px' }}>
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>
          <i aria-hidden="true" />
          <b>Tacit</b>
        </Link>
        <p style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
          Licensed operational data for AI training. We turn private company work records into de-identified training datasets with clean title.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ink-2)' }}>
          Operated by Inception2c LLC d/b/a Tacit.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--ink-2)' }}>
          © {new Date().getFullYear()} Inception2c LLC. All rights reserved.
        </p>
      </div>

      <div className="cols">
        <div className="footer-col">
          <b>Sellers</b>
          <Link href="/sell">What sells</Link>
          <Link href="/valuation">Valuation estimator</Link>
          <Link href="/rights-check">Rights check</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pricing">Pricing & terms</Link>
        </div>

        <div className="footer-col">
          <b>AI Labs & Buyers</b>
          <Link href="/buyers">Catalogue overview</Link>
          <Link href="/security">Security & pipeline</Link>
          <Link href="/buyers#request">Request catalogue</Link>
          <Link href="/contact">Custom collection</Link>
        </div>

        <div className="footer-col">
          <b>Company</b>
          <Link href="/about">About Inception2c LLC</Link>
          <Link href="/refer">Referral program</Link>
          <Link href="/faq">Frequently asked questions</Link>
          <Link href="/contact">Contact us</Link>
        </div>

        <div className="footer-col">
          <b>Legal</b>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="/seller-agreement">Seller agreement</Link>
          <Link href="/licence-terms">Licence terms</Link>
          <Link href="/cookies">Cookie policy</Link>
        </div>
      </div>
    </footer>
  );
}
