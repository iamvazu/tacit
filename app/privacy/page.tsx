import LegalBanner from '@/components/LegalBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tacit',
  description: 'Tacit privacy policy and personal data processing practices.',
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', display: 'grid', gap: '32px' }}>
      <LegalBanner />

      <div>
        <span className="eyebrow">Legal Notice</span>
        <h1 style={{ marginTop: '8px', marginBottom: '12px' }}>Privacy Policy</h1>
        <p className="mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          Last revised: October 2026 · Inception2c LLC d/b/a Tacit
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>1. Overview and Scope</h2>
          <p>
            Inception2c LLC, doing business as Tacit (&quot;Tacit&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), provides data brokerage and de-identification services connecting corporate data owners (&quot;Sellers&quot;) with artificial intelligence research laboratories and model developers (&quot;Buyers&quot;). This Privacy Policy explains how we collect, process, and safeguard information submitted through our public website, assessment tools, and client intake forms.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>2. Website Visitors and Intake Forms</h2>
          <p>
            When you interact with our website (tacit.exchange) or submit assessment inquiries, valuation requests, catalogue applications, referrals, or direct messages, we collect:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>Contact Identifiers:</strong> Name, professional work email address, phone number, and corporate job title.</li>
            <li><strong>Organizational Details:</strong> Company legal name, industry sector, approximate team size, and historical software systems.</li>
            <li><strong>Technical Telemetry:</strong> IP address, browser type, referral URLs, and standard HTTP header metadata gathered for rate limiting and fraud prevention.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>3. Brokered Operational Data</h2>
          <p>
            Operational data provided by Sellers under an executed Master Brokerage Agreement (e.g., ticket resolutions, code check-ins, accounting ledgers) is processed solely under strict Data Processing Agreements (DPAs) and mutual non-disclosure covenants:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>De-Identification Standard:</strong> Operational data is subjected to two-pass de-identification before any third-party disclosure. All direct personal identifiers (PII/PHI) are permanently scrubbed or transformed with consistent synthetic tokens.</li>
            <li><strong>Sovereign Enclaves:</strong> Raw customer records are held in encrypted, tenant-isolated processing enclaves and are never aggregated or shared across accounts.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>4. Data Subject Rights (GDPR, CCPA/CPRA, DPDP)</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your personal data. To exercise any statutory data subject rights regarding information submitted to our website, please contact our privacy compliance desk at <code className="mono">YOUR_EMAIL</code>.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>5. Retention and Security</h2>
          <p>
            Website contact inquiries and valuation logs are retained for as long as necessary to facilitate commercial discussions. Intermediate files generated during de-identification procedures are securely destroyed upon delivery, followed by the issuance of a formal Certificate of Deletion.
          </p>
        </section>
      </div>
    </div>
  );
}
