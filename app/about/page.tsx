import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Inception2c LLC d/b/a Tacit',
  description:
    'Tacit is operated by Inception2c LLC. We are an independent data broker creating clean-title, de-identified training datasets from enterprise operational archives.',
};

export default function AboutPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Corporate Profile &amp; Mission</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Unlocking the world&apos;s tacit operational knowledge.
        </h1>
        <p className="lede">
          Operated by Inception2c LLC (d/b/a Tacit), we bridge the gap between companies operating complex workflows and frontier AI research institutions developing next-generation autonomous models.
        </p>
      </div>

      {/* Story & Background */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="eyebrow">The Origin</span>
            <h2 style={{ fontSize: '24px' }}>The Shift from Public Web to Private Exhaust</h2>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              The first generation of large language models learned from public web pages, digital encyclopedias, open source software repos, and online discussions. That open data well has run dry.
            </p>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              True professional mastery — how an experienced accountant discovers an anomalous ledger accrual, how an EDA engineer solves a timing closure fault, or how a tier-3 support lead debugs a distributed systems deadlock — is never written in blog posts. It lives in internal tickets, PR comments, Slack deliberations, and domain ledgers.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'grid', gap: '16px' }}>
            <span className="eyebrow">Our Mission</span>
            <h2 style={{ fontSize: '24px' }}>Clean Title, Zero Leakage, Equitable Compensation</h2>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              Until now, companies had no safe, legal mechanism to commercialize this operational exhaust without compromising customer confidentiality or employee trust.
            </p>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              Tacit was founded to provide that rigorous bridge: combining automated NER de-identification, human audit sampling, verifiable clean title due diligence, and transparent 80/20 commercial payouts.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Our Commitments</span>
          <h2>Operating Principles</h2>
          <p className="lede">
            Our brokerage is governed by five non-negotiable operational commitments.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3 style={{ fontSize: '18px' }}>1. Sovereign Seller Control</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              Data sellers hold absolute veto over every purchasing lab and intended model training scope. Nothing moves without affirmative written consent.
            </p>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3 style={{ fontSize: '18px' }}>2. Verified Clean Title</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              We do not broker scraped, contested, or ambiguous data. Every listing is backed by legal ownership validation and executive attestations.
            </p>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3 style={{ fontSize: '18px' }}>3. Complete Discretion</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              We maintain strict commercial non-disclosure. We never publish customer identities or market press releases that compromise seller positioning.
            </p>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3 style={{ fontSize: '18px' }}>4. Aligned Economics</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              We charge zero setup fees. Sellers receive 80% net. If data does not close, our fee is $0.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info & Contact */}
      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <span className="eyebrow">Legal Entity Details</span>
          <h3 style={{ marginTop: '6px' }}>Inception2c LLC d/b/a Tacit</h3>
          <p style={{ color: 'var(--ink-2)', fontSize: '14px', marginTop: '4px' }}>
            Operating globally with commercial partners across the United States, Europe, and India.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/contact" className="btn">
            Contact Company Principals
          </Link>
          <Link href="/valuation" className="btn ghost">
            Estimate Payout
          </Link>
        </div>
      </div>
    </div>
  );
}
