import LegalBanner from '@/components/LegalBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restrictive Model Training Licence Terms (Draft) | Tacit',
  description: 'Standard train-only, anti-reidentification licence terms for AI laboratories.',
};

export default function LicenceTermsPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', display: 'grid', gap: '32px' }}>
      <LegalBanner />

      <div>
        <span className="eyebrow">Licensing Framework Draft</span>
        <h1 style={{ marginTop: '8px', marginBottom: '12px' }}>Model Training Licence Terms</h1>
        <p className="mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          Standard AI Buyer Framework Draft · Inception2c LLC d/b/a Tacit
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>1. Grant of Restrictive Licence</h2>
          <p>
            Subject to receipt of full escrow payment, the Licensor grants to the Licensee (the &quot;Buyer&quot;) a perpetual, non-exclusive, non-transferable, worldwide licence to ingest, process, fine-tune, distill, and evaluate the de-identified operational dataset solely for the internal training and evaluation of artificial intelligence models, algorithms, and neural networks.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>2. Absolute Prohibitions and Covenants</h2>
          <p>
            The Licensee expressly covenants and agrees that it shall NOT under any circumstances:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>No Redisclosure or Resale:</strong> Resell, sublicense, lease, redistribute, publish, or publicly disclose raw records, unmasked traces, or substantive excerpts thereof to any third party.</li>
            <li><strong>Strict Ban on Re-Identification:</strong> Attempt, directly or indirectly, to re-identify, de-anonymize, trace, contact, or uncover the identity of any natural person, employee, customer, or corporate counterparty referenced or omitted within the dataset.</li>
            <li><strong>No Benchmarking Without Authorization:</strong> Publish named commercial benchmarking studies identifying the source enterprise without written consent.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>3. Residual PII Remedy Protocol</h2>
          <p>
            While datasets are cleansed to an audited residual PII threshold of &lt;0.1%, if Licensee discovers any un-redacted personal identifier during model ingestion, Licensee agrees to immediately redact the identified token and notify Tacit within five (5) business days for retroactive remediation.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>4. Breach and Invalidation</h2>
          <p>
            Any intentional breach of Section 2 (Ban on Re-Identification and Resale) shall constitute an incurable material breach resulting in immediate licence revocation, permanent injunctive relief, and liquidated contractual damages.
          </p>
        </section>
      </div>
    </div>
  );
}
