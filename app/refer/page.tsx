import type { Metadata } from 'next';
import ReferralForm from '@/components/Forms/ReferralForm';

export const metadata: Metadata = {
  title: 'Referral Program | Earn 10% of Tacit’s Broker Fee',
  description:
    'Introduce companies with valuable operational work archives to Tacit. Earn 10% of our broker success fee on every closed data licence.',
};

export default function ReferPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Partner &amp; Referral Program</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Introduce valuable datasets. Earn 10% of our broker fee.
        </h1>
        <p className="lede">
          Many of the richest operational archives sit inside mid-market companies who don&apos;t yet know their daily exhaust is valuable to frontier AI labs. If you know a founder, CTO, or VP Operations sitting on years of expert decision records, make an introduction.
        </p>
      </div>

      {/* Program Mechanics */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <span className="pill">1. Identify</span>
            <h3 style={{ fontSize: '18px' }}>High-Quality Archives</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              Look for organizations with 50+ staff and 5+ years of history in systems like Slack, Jira, GitHub, Xero, Zendesk, or specialized CAD/LIMS platforms.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <span className="pill">2. Introduce</span>
            <h3 style={{ fontSize: '18px' }}>Professional Outreach</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              Submit their details using the form below, or introduce us directly via email. We approach every contact with discretion and mutual NDA protection.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <span className="pill">3. Earn</span>
            <h3 style={{ fontSize: '18px' }}>Direct Wire Payout</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              When a licence agreement closes and funds clear escrow, we wire 10% of Tacit&apos;s 20% broker fee directly to your bank account ($2,000 to $15,000+ typical per transaction).
            </p>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section id="referral-form-section">
        <ReferralForm />
      </section>
    </div>
  );
}
