import type { Metadata } from 'next';
import Estimator from '@/components/Estimator';
import ValuationForm from '@/components/Forms/ValuationForm';

export const metadata: Metadata = {
  title: 'Estimate Your Payout | Data Licensing Valuation',
  description:
    'Find out what AI labs will pay for your firm’s records. Two minutes online. No files uploaded. Zero cost to you.',
};

export default function ValuationPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Payout Estimator</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          Find out what your firm’s records are worth
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          AI labs are actively paying established firms to license de-identified copies of records they already keep. Answer a few questions below to estimate your payout.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <Estimator ctaTargetId="valuation-form" />
      </section>

      <section id="valuation-form-section">
        <ValuationForm />
      </section>

      <section style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '32px' }}>
        <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>How We Value Your Firm’s Records</h3>
        <p style={{ color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: '20px', fontSize: '15px' }}>
          Our estimates are based on actual closed licensing transactions for established US firms. Four main factors determine the offer:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div>
            <strong>1. Your Industry:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px', lineHeight: 1.5 }}>
              Specialized industries (accounting, logistics, engineering, healthcare, trade contracting) command the highest offers because real-world procedural knowledge is scarce.
            </p>
          </div>
          <div>
            <strong>2. Years in Business:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px', lineHeight: 1.5 }}>
              Firms with 3 to 15+ years of archived emails, projects, and workpapers provide deep historical context that cannot be recreated today.
            </p>
          </div>
          <div>
            <strong>3. Number of Employees:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px', lineHeight: 1.5 }}>
              More team members mean more everyday workflows, tickets, and problem-solving threads captured across your software systems.
            </p>
          </div>
          <div>
            <strong>4. Connected Systems:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px', lineHeight: 1.5 }}>
              Records that show how decisions were made from start to finish (e.g. email threads combined with accounting invoices or job tickets) are worth the most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
