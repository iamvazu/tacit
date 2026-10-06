import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparent Broker Pricing & Fee Structure',
  description:
    'Our transparent fee structure: 20% success fee on closed deals, 0% upfront costs, expert annotation consulting rates, and 10% referral payouts.',
};

export default function PricingPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Fair &amp; Transparent Economics</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Zero upfront costs. We earn when your licence closes.
        </h1>
        <p className="lede">
          Tacit operates as an aligned broker. We never bill for data audits, legal scoping, technical connectors, or packaging. Our compensation is strictly tied to successful commercial execution.
        </p>
      </div>

      {/* Pricing Cards */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Sellers card */}
          <div style={{ background: 'var(--sheet)', border: '2px solid var(--ink)', borderRadius: '10px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="pill" style={{ justifySelf: 'start' }}>Core Brokerage</span>
            <div style={{ font: '800 48px/1 var(--f-display)', letterSpacing: '-0.03em' }}>
              80% <span style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink-2)' }}>to seller</span>
            </div>
            <h3 style={{ fontSize: '20px' }}>20% Broker Success Fee</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: '1.5' }}>
              On every closed transaction, 80% of gross licensing revenue goes directly to the data seller. Tacit retains a 20% fee to cover legal review, two-pass de-identification, packaging, and escrow handling.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', fontSize: '14px', display: 'grid', gap: '8px' }}>
              <li><strong>$0 setup or onboarding fees</strong></li>
              <li><strong>$0 scoping or rights audit fees</strong></li>
              <li><strong>$0 charge if your data doesn&apos;t license</strong></li>
              <li><strong>Funds secured in escrow before delivery</strong></li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Link href="/valuation" className="btn" style={{ width: '100%' }}>
                Estimate Your Net Payout
              </Link>
            </div>
          </div>

          {/* Expert annotation card */}
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="pill" style={{ justifySelf: 'start' }}>Optional Consulting</span>
            <div style={{ font: '800 48px/1 var(--f-display)', letterSpacing: '-0.03em' }}>
              $150–$350<span style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink-2)' }}>/hour</span>
            </div>
            <h3 style={{ fontSize: '20px' }}>Expert Annotation Rate</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: '1.5' }}>
              When buyers request domain expert commentary to clarify complex edge cases or verify ground truth, seller employees can provide structured annotations for an hourly consulting stipend.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', fontSize: '14px', display: 'grid', gap: '8px' }}>
              <li><strong>100% of annotation rate paid to seller/experts</strong></li>
              <li><strong>Typically increases total deal value by 20–40%</strong></li>
              <li><strong>Flexible asynchronous scheduling for internal staff</strong></li>
              <li><strong>Fully optional at the seller&apos;s discretion</strong></li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Link href="/contact" className="btn ghost" style={{ width: '100%' }}>
                Inquire About Annotation Programs
              </Link>
            </div>
          </div>

          {/* Referral card */}
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="pill" style={{ justifySelf: 'start' }}>Partner Network</span>
            <div style={{ font: '800 48px/1 var(--f-display)', letterSpacing: '-0.03em' }}>
              10% <span style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink-2)' }}>of our fee</span>
            </div>
            <h3 style={{ fontSize: '20px' }}>Referral Payout</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: '1.5' }}>
              Introduce an organization with valuable historical archives. If that company licenses a dataset through Tacit, you earn 10% of our success fee upon transaction closing.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', fontSize: '14px', display: 'grid', gap: '8px' }}>
              <li><strong>Typical referral payment: $2,000 to $15,000+</strong></li>
              <li><strong>Disbursed via bank transfer on closing</strong></li>
              <li><strong>Zero administrative overhead for referrers</strong></li>
              <li><strong>Discreet and professional introduction process</strong></li>
            </ul>
            <div style={{ marginTop: '12px' }}>
              <Link href="/refer" className="btn ghost" style={{ width: '100%' }}>
                Submit a Referral
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Escrow & Payment Flow */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Payment Guarantees</span>
          <h2>How money moves: Escrow-backed security</h2>
          <p className="lede">
            You never take collection risk or chase accounts receivable across borders.
          </p>
        </div>

        <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '14px' }}>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.6' }}>
            Upon agreement of terms, the purchasing AI lab deposits 100% of the agreed licensing funds with an independent licensed escrow agent. Tacit initiates delivery of the scrubbed dataset only after confirmation of escrow deposit. Once the buyer completes technical acceptance testing (typically 5–10 business days), escrow funds release automatically: 80% directly to your corporate account and 20% to Tacit.
          </p>
        </div>
      </section>
    </div>
  );
}
