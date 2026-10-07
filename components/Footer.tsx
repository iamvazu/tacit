import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="brand-icon-mark" style={{ width: '28px', height: '28px', fontSize: '14px' }}>T</div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>Tacit</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '320px' }}>
              The sovereign exchange for private operational telemetry. We broker clean-title, de-identified enterprise work records directly to frontier AI research labs.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--green-verified)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green-verified)' }} />
              OPERATIONAL · ESCROW COMPLIANT
            </div>
          </div>

          <div>
            <div className="footer-col-title">Data Sellers</div>
            <ul className="footer-links">
              <li><Link href="/sell">What Sells</Link></li>
              <li><Link href="/valuation">Valuation Simulator</Link></li>
              <li><Link href="/rights-check">Rights Verification</Link></li>
              <li><Link href="/how-it-works">De-Identification Pipeline</Link></li>
              <li><Link href="/pricing">Pricing & 80% Payout</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Frontier AI Labs</div>
            <ul className="footer-links">
              <li><Link href="/buyers">Catalogue Overview</Link></li>
              <li><Link href="/security">Air-Gap Security Standards</Link></li>
              <li><Link href="/buyers#request">Request Lab Access</Link></li>
              <li><Link href="/contact">Bespoke Collection</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Governance & Legal</div>
            <ul className="footer-links">
              <li><Link href="/about">About Inception2c LLC</Link></li>
              <li><Link href="/seller-agreement">Master Seller Agreement</Link></li>
              <li><Link href="/licence-terms">Train-Only Licence Terms</Link></li>
              <li><Link href="/privacy">Privacy Notice</Link></li>
              <li><Link href="/terms">Terms of Platform</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            Operated by Inception2c LLC d/b/a Tacit · Registered in the United States.
          </div>
          <div>
            © {new Date().getFullYear()} Inception2c LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
