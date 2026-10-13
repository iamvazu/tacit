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
            <div style={{ marginTop: '12px' }}>
              <a
                href="tel:+14086576116"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '13px',
                  fontFamily: 'var(--font-mono)',
                  background: '#faf9f6',
                  padding: '6px 12px',
                  border: '1.5px solid #141011',
                  borderRadius: '4px',
                  boxShadow: '1.5px 1.5px 0px #141011',
                }}
                title="Call Tacit: (408) 657-6116"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call: (408) 657-6116</span>
              </a>
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
              <li><a href="tel:+14086576116">Direct: (408) 657-6116</a></li>
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
