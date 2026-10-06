import type { Metadata } from 'next';
import Estimator from '@/components/Estimator';
import ValuationForm from '@/components/Forms/ValuationForm';

export const metadata: Metadata = {
  title: 'Data Valuation Calculator & Valuation Call',
  description:
    'Estimate the market value of your private enterprise work records. 80% net payout to sellers. Book a 20-minute confidential scoping call.',
};

export default function ValuationPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Valuation Benchmark</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          What is your company&apos;s work history worth?
        </h1>
        <p className="lede">
          Model builders price operational traces according to reasoning depth, domain scarcity, and cleanliness of title. Adjust the inputs below to estimate your gross and net licence proceeds.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <Estimator ctaTargetId="valuation-form" />
      </section>

      <section id="valuation-form-section">
        <ValuationForm />
      </section>

      <section style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px' }}>
        <h3 style={{ marginBottom: '12px' }}>Valuation Methodology & Pricing Signals</h3>
        <p style={{ color: 'var(--ink-2)', lineHeight: '1.6', marginBottom: '16px' }}>
          Our benchmark algorithm draws upon closed and active transaction benchmarks for enterprise AI training licences. The formula balances five core factors:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div>
            <strong>1. Domain Multiplier:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px' }}>
              Specialized industries (EDA chip design, pharmaceuticals, complex legal drafting) command premium rates over commodity consumer data.
            </p>
          </div>
          <div>
            <strong>2. History Depth:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px' }}>
              Workspaces with 5–15+ years of continuous decision archives provide critical longitudinal reasoning signals across economic and technological shifts.
            </p>
          </div>
          <div>
            <strong>3. Multi-Source Correlation:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px' }}>
              Correlating communication threads (Slack/Teams) with code check-ins (GitHub) or financial adjustments (Xero/SAP) increases value 2–3x.
            </p>
          </div>
          <div>
            <strong>4. Expert Decision Notes:</strong>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', marginTop: '4px' }}>
              Providing internal expert commentary on ambiguous edge cases unlocks additional consulting bonuses (+20–40%).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
