import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security, Privacy & Technical Architecture',
  description:
    'Our technical and legal data protection framework: read-only scoped access, two-pass de-identification, isolated processing enclaves, and regulatory compliance.',
};

export default function SecurityPage() {
  const complianceLaws = [
    {
      title: 'India DPDP Act 2023',
      summary: 'Digital Personal Data Protection Act compliance. Transparent employee notices, consent management protocols, and comprehensive removal of personal identifiers.',
    },
    {
      title: 'GDPR / UK GDPR',
      summary: 'Articles 6, 13, and 14 alignment. Rigorous pseudonymization and anonymization safeguards ensuring high-barrier irreversibility prior to external model training.',
    },
    {
      title: 'CCPA / CPRA (California)',
      summary: 'Explicit adherence to "sale of data" exemptions for legitimately de-identified consumer and employee records with contractual anti-reidentification covenants.',
    },
    {
      title: 'HIPAA Extra Review',
      summary: 'For clinical or health-adjacent workflows, data undergoes enhanced Safe Harbor (18 identifier types) or Expert Determination review; otherwise healthcare data is excluded.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Enterprise Data Protection</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Engineered so your chief legal officer and CISO can sign off.
        </h1>
        <p className="lede">
          Commercializing operational records requires zero-trust processing boundaries. Tacit decouples enterprise workflows from personal identities and commercial secrets through isolated data pipelines and legally binding covenants.
        </p>
      </div>

      {/* Core Architectural Pillars */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Technical Architecture</span>
          <h2>Four pillars of zero-trust data protection</h2>
        </div>

        <div className="sec">
          <article>
            <h3>1. Read-Only, Scoped &amp; Revocable Access</h3>
            <p>
              We request strictly read-only OAuth scopes or pre-exported encrypted bundles. Tacit never requests write permissions, admin takeover, or deletion access. Access is strictly confined to user-designated public/private channels or repository branches and can be revoked instantly from your management console.
            </p>
          </article>

          <article>
            <h3>2. Two-Pass De-Identification</h3>
            <p>
              Every ingested record passes through two distinct cleansing layers: (1) automated deep learning Named Entity Recognition (NER) and regex masks covering names, emails, phone numbers, IP addresses, financial accounts, and unique UUIDs; and (2) manual human QA audit sampling on every batch to verify that context reads coherently with consistent surrogate pseudonyms.
            </p>
          </article>

          <article>
            <h3>3. Isolated Processing Enclaves</h3>
            <p>
              Raw client records are partitioned into encrypted, single-tenant processing workspaces. Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Intermediate raw copies are isolated by cryptographic keys and strictly audited. Raw enterprise records are never shared with or accessible by prospective buyers.
            </p>
          </article>

          <article>
            <h3>4. Ironclad Legal Contracts</h3>
            <p>
              Technical scrubbing is accompanied by enforceable legal liabilities: mutual non-disclosure agreements, data processing agreements (DPAs), and strict Train-Only licences. Buyers commit under heavy contractual penalties never to attempt re-identification, never to republish raw samples, and never to sublicense to third parties.
            </p>
          </article>
        </div>
      </section>

      {/* Pipeline Diagram */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Ingestion to Delivery</span>
          <h2>The End-to-End Processing Pipeline</h2>
          <p className="lede">
            How data moves from your operational systems to the AI lab&apos;s training environment without exposing identity.
          </p>
        </div>

        <div className="pipeline">
          <div className="pipe" role="img" aria-label="End to end data processing pipeline diagram">
            <div>
              <b>1. Your Systems</b>
              Read-only connector or encrypted export bundle
            </div>
            <div className="arrow">→</div>
            <div>
              <b>2. Isolated Workspace</b>
              Encrypted, per-client workspace with tamper-evident audit logging
            </div>
            <div className="arrow">→</div>
            <div>
              <b>3. Two-Pass Scrubbing</b>
              Automated NER masking + human QA audit sampling
            </div>
            <div className="arrow">→</div>
            <div>
              <b>4. Seller Approval</b>
              You review and approve the redacted preview batch
            </div>
            <div className="arrow">→</div>
            <div>
              <b>5. Buyer Delivery</b>
              Escrow-backed delivery under train-only restrictive licence
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Regulatory Alignment */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Statutory Compliance</span>
          <h2>Regulatory and Data Privacy Alignment</h2>
          <p className="lede">
            We adapt our consent workflows and scrubbing rules to match the regulatory framework governing your employees and data subjects.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {complianceLaws.map((law, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--sheet)',
                border: '1px solid var(--rule)',
                borderRadius: '8px',
                padding: '24px',
                display: 'grid',
                gap: '8px',
              }}
            >
              <h3 style={{ fontSize: '18px' }}>{law.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
                {law.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3>Have technical or compliance questions?</h3>
          <p style={{ color: 'var(--ink-2)', marginTop: '4px' }}>
            We provide full data flow architecture documentation and sample DPA agreements upon request.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Request Security Documentation
        </Link>
      </div>
    </div>
  );
}
