import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | From Initial Call to Payout',
  description:
    'Detailed 5-step data licensing workflow, timelines, and seller deliverables. Zero upfront cost, 80% payout, and complete seller veto.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: '1',
      title: 'Scoping & Valuation Call',
      timeline: 'Day 1',
      duration: '20 minutes',
      summary: 'We evaluate your software stack, estimate historical thread density, and calculate expected licence ranges.',
      sellerProvides: 'High-level inventory of workplace tools (e.g., Slack, GitHub, Jira, ERP), approximate employee count, and years of active record history.',
      tacitDelivers: 'Executed mutual non-disclosure agreement (NDA) and an initial written valuation range.',
    },
    {
      step: '2',
      title: 'Rights & Title Review',
      timeline: 'Days 2–7',
      duration: '3–5 business days',
      summary: 'Rigorous legal check of customer contract terms, employment transparency requirements, and sector confidentiality regulations.',
      sellerProvides: 'Sample customer MSA terms (confidentiality & IP clauses), confirmation of employee notice procedures, and director-level sign-off.',
      tacitDelivers: 'Clear Title Assessment Report, tailored employee notice templates, and a specific exclusion checklist. (If licensing is not legally viable, we stop immediately with $0 cost).',
    },
    {
      step: '3',
      title: 'Scoped Read-Only Connection',
      timeline: 'Days 5–10',
      duration: '1–2 hours of IT time',
      summary: 'Secure connection via read-only API connectors or encrypted dump files directly into an isolated client enclave.',
      sellerProvides: 'Scoped read-only integration credentials or approved archive exports limited strictly to opted-in channels, boards, and folders.',
      tacitDelivers: 'Cryptographic receipt, connection audit log, and verification that data has landed in an isolated, encrypted processing enclave.',
    },
    {
      step: '4',
      title: 'De-Identification & Packaging',
      timeline: 'Weeks 2–4',
      duration: '10–15 business days',
      summary: 'Automated entity redaction, entity replacement with consistent synthetic handles, quality scoring, and human audit sampling.',
      sellerProvides: 'Review and formal approval of the de-identified preview dataset to verify no trade secrets or residual identifiers remain.',
      tacitDelivers: 'Two-pass scrubbed training dataset, rigorous residual PII audit certificate (&lt;0.1% threshold), and a standardized AI Lab Datasheet.',
    },
    {
      step: '5',
      title: 'Buyer Approval & Escrow Payout',
      timeline: 'Weeks 4–8',
      duration: 'Release upon acceptance',
      summary: 'You inspect the buyer’s identity and model scope. The buyer funds escrow upfront, and funds disburse directly to your bank.',
      sellerProvides: 'Formal approval or veto of the named AI lab and intended training scope. Bank wiring details for payout.',
      tacitDelivers: 'Escrow verification, train-only restrictive licence agreement, 80% net wire transfer to your account, and a written Deletion Certificate for intermediate processing copies.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Operating Protocol</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          From initial scoping to wire payout: Step by step.
        </h1>
        <p className="lede">
          We operate with complete institutional transparency. Below is exactly what occurs during each phase of the engagement, the elapsed timelines, and what is required from your engineering and legal teams.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '32px' }}>
        {steps.map((s) => (
          <div
            key={s.step}
            style={{
              background: 'var(--sheet)',
              border: '1px solid var(--rule)',
              borderRadius: '10px',
              padding: '32px',
              display: 'grid',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="pill" style={{ marginBottom: '8px' }}>Step {s.step} · {s.timeline}</span>
                <h2 style={{ fontSize: '26px' }}>{s.title}</h2>
              </div>
              <span className="mono" style={{ fontSize: '13px', color: 'var(--teal)', background: 'var(--teal-soft)', padding: '6px 12px', borderRadius: '4px' }}>
                Est. time: {s.duration}
              </span>
            </div>

            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: '1.6' }}>
              {s.summary}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
              <div style={{ background: 'var(--paper)', padding: '18px', borderRadius: '8px' }}>
                <span style={{ font: '600 13px var(--f-mono)', color: 'var(--ink)', display: 'block', marginBottom: '6px' }}>
                  What the Seller Provides:
                </span>
                <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
                  {s.sellerProvides}
                </p>
              </div>

              <div style={{ background: 'var(--paper)', padding: '18px', borderRadius: '8px' }}>
                <span style={{ font: '600 13px var(--f-mono)', color: 'var(--teal)', display: 'block', marginBottom: '6px' }}>
                  What Tacit Delivers:
                </span>
                <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
                  {s.tacitDelivers}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', textAlign: 'center', display: 'grid', gap: '16px', placeItems: 'center' }}>
        <h3>Ready to start Step 1?</h3>
        <p className="lede" style={{ textAlign: 'center', maxWidth: '60ch' }}>
          Schedule an initial 20-minute scoping discussion. No sales pressure, no upfront fees, and guaranteed mutual NDA protection.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/valuation#valuation-form" className="btn">
            Book Scoping Call
          </Link>
          <Link href="/sell" className="btn ghost">
            Review Seller Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
