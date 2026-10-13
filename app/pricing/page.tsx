import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Economics | Zero Cost to You',
  description:
    'No upfront fees, no evaluation fees, and no technical costs. Tacit only earns when your data licensing deal closes and payment lands in your bank.',
};

export default function PricingPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Fair &amp; Transparent</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          Zero cost to you. We only earn when you get paid.
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          There is no fee to the business owner at any stage. We do not charge for valuations, legal review, or de-identification. If you don’t accept an offer, you walk away owing nothing.
        </p>
      </div>

      {/* Pricing Cards */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Sellers card */}
          <div style={{ background: 'var(--sheet)', border: '2px solid var(--ink)', borderRadius: '12px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="pill" style={{ justifySelf: 'start' }}>For Business Owners</span>
            <div style={{ font: '800 48px/1 var(--f-display)', letterSpacing: '-0.03em' }}>
              $0 <span style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink-2)' }}>cost to you</span>
            </div>
            <h3 style={{ fontSize: '20px', margin: 0 }}>You Keep the Net Proceeds</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>
              Your written offer states the exact dollar amount your firm will receive. We cover all legal review, de-identification, packaging, and escrow fees out of the transaction.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', fontSize: '14px', display: 'grid', gap: '8px' }}>
              <li><strong>$0 upfront or setup fees</strong></li>
              <li><strong>$0 evaluation or estimate fees</strong></li>
              <li><strong>$0 fee if you decline the offer</strong></li>
              <li><strong>Payment wired before final transfer</strong></li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Link href="/valuation" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                Get an Offer for Your Firm →
              </Link>
            </div>
          </div>

          {/* Referral card */}
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="pill" style={{ justifySelf: 'start' }}>For Referral Partners</span>
            <div style={{ font: '800 48px/1 var(--f-display)', letterSpacing: '-0.03em', color: 'var(--teal)' }}>
              10% <span style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink-2)' }}>of what the firm is paid</span>
            </div>
            <h3 style={{ fontSize: '20px', margin: 0 }}>Earn Up to $100,000 per Introduction</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>
              If you advise business owners (CPAs, brokers, attorneys, bankers, consultants), introduce them to Tacit. When their deal closes, you earn 10% of their payment, up to $100,000.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', fontSize: '14px', display: 'grid', gap: '8px' }}>
              <li><strong>$35,000 to $65,000+ typical commission</strong></li>
              <li><strong>Paid once per business directly via wire</strong></li>
              <li><strong>Zero cost to you or the introduced owner</strong></li>
              <li><strong>Discreet and professional introduction process</strong></li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Link href="/refer" className="btn ghost" style={{ width: '100%', textAlign: 'center' }}>
                Join the Partner Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Promise */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '12px', padding: '32px' }}>
          <h3 style={{ fontSize: '22px', margin: '0 0 10px', color: 'var(--ink)' }}>Our Promise: No Offer, No Cost</h3>
          <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.6, margin: 0, maxWidth: '70ch' }}>
            You approve every term in writing before a single record is exported. If we don’t bring an offer you like, nothing has left your systems, and you owe nothing.
          </p>
        </div>
      </section>
    </div>
  );
}
