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
              We help business owners license de-identified copies of their everyday work records to AI labs. You keep your originals, approve every term, and pay zero fees.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontFamily: 'var(--font-mono)', color: '#15803d', fontWeight: 700 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '1px', background: '#16a34a' }} />
              ZERO COST TO SELLERS · 100% CONFIDENTIAL
            </div>
          </div>

          <div>
            <div className="footer-col-title">For Business Owners</div>
            <ul className="footer-links">
              <li><Link href="/#deals">Recent Deals</Link></li>
              <li><Link href="/valuation">Payout Estimator</Link></li>
              <li><Link href="/sell">What Records Sell</Link></li>
              <li><Link href="/#process">How It Works</Link></li>
              <li><Link href="/#questions">Questions &amp; Answers</Link></li>
              <li><Link href="/security">Privacy &amp; Safety</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Partner Program</div>
            <ul className="footer-links">
              <li><Link href="/refer">Become a Partner</Link></li>
              <li><Link href="/refer#referral-form-section">Introduce a Business (10%)</Link></li>
              <li><Link href="/pricing">Partner Economics</Link></li>
              <li><Link href="/contact">Talk to Our Team</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Legal &amp; Privacy</div>
            <ul className="footer-links">
              <li><Link href="/privacy">Privacy Notice</Link></li>
              <li><Link href="/seller-agreement">Seller Agreement</Link></li>
              <li><Link href="/licence-terms">License Terms</Link></li>
              <li><Link href="/terms">Terms of Platform</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '32px', paddingTop: '20px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          <p style={{ margin: '0 0 10px' }}>
            <strong>Disclosure:</strong> Tacit facilitates data-licensing transactions between business owners and authorized AI research labs. Business owners pay zero fees at any stage. Payout estimates are illustrations based on recent market transactions and are not guarantees of any specific offer. Company names and identifying records are scrubbed prior to any data transfer.
          </p>
        </div>

        <div className="footer-bottom" style={{ marginTop: '16px' }}>
          <div>
            Operated by Inception2c LLC d/b/a Tacit · Registered in the United States.
          </div>
          <div>
            © {new Date().getFullYear()} Tacit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
