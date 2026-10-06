import type { Metadata } from 'next';
import RightsCheck from '@/components/RightsCheck';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Rights & Clean Title Checklist',
  description:
    'Evaluate your company’s legal authority to license internal operational work records. Assess ownership, employment notices, and contract clauses.',
};

export default function RightsCheckPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Legal Due Diligence</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Can you legally license your operational data?
        </h1>
        <p className="lede">
          In AI licensing, clean title is non-negotiable. The most frequent reason a high-value data transaction aborts is an unexpected rights barrier uncovered late in review. Answer the six diagnostic questions below to evaluate your company&apos;s legal readiness.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <RightsCheck />
      </section>

      <section style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px' }}>
        <h3 style={{ marginBottom: '16px' }}>How Tacit Resolves Common Rights Issues</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '6px' }}>Employee Notice Playbooks</h4>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              We furnish standard employer transparency notices aligned with India&apos;s DPDP Act 2023, GDPR Article 13/14, and relevant local labor codes, ensuring your team is informed properly before connectors are provisioned.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '6px' }}>Customer Contract Scrubbing</h4>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              If certain client MSAs prohibit derivative data processing, our extraction filters automatically partition or exclude client-specific Slack channels, Jira boards, and document folders entirely.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '6px' }}>Trade Secret Blacklisting</h4>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              You maintain sovereign control over regex rules and channel exclusion lists. Strategic roadmaps, confidential M&amp;A files, unreleased patents, and pricing spreadsheets are excluded prior to ingestion.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '28px', borderTop: '1px solid var(--rule)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
            Have questions about a specific customer contract or employment jurisdiction?
          </span>
          <Link href="/contact" className="btn small">
            Schedule a Confidential Legal Review
          </Link>
        </div>
      </section>
    </div>
  );
}
