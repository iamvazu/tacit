import LegalBanner from '@/components/LegalBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Seller Agreement (Draft) | Tacit',
  description: 'Standard master seller agreement terms, protections, and 80/20 commercial split.',
};

export default function SellerAgreementPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', display: 'grid', gap: '32px' }}>
      <LegalBanner />

      <div>
        <span className="eyebrow">Legal Framework Draft</span>
        <h1 style={{ marginTop: '8px', marginBottom: '12px' }}>Master Seller Agreement</h1>
        <p className="mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          Standard Terms Draft · Inception2c LLC d/b/a Tacit
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>1. Appointment and Broker Scope</h2>
          <p>
            The Seller appoints Inception2c LLC (&quot;Tacit&quot;) as its non-exclusive authorized broker to identify, market to, negotiate with, and license de-identified operational datasets to verified AI research institutions and foundation model builders (&quot;Buyers&quot;).
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>2. Revenue Share and Escrow Mechanics</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Seller Payout (80%):</strong> Seller receives eighty percent (80%) of all gross licensing fees received from each approved Buyer.</li>
            <li><strong>Broker Fee (20%):</strong> Tacit retains twenty percent (20%) as its full success fee. Seller incurs no upfront setup, ingestion, or audit costs.</li>
            <li><strong>Third-Party Escrow:</strong> 100% of licensing fees must be deposited by the Buyer into a licensed third-party escrow account prior to dataset delivery. Escrow funds disburse automatically upon completion of the buyer verification window.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>3. Absolute Seller Veto and Buyer Approval</h2>
          <p>
            Tacit shall disclose to the Seller the identity of each prospective Buyer, the intended artificial intelligence model training use case, and proposed pricing terms prior to sharing any dataset or sample traces. Seller reserves the absolute right to approve or veto any Buyer or transaction for any reason or no reason.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>4. De-Identification and Clean Title Representations</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Scrubbing Protocol:</strong> Tacit shall apply its two-pass de-identification procedure to scrub direct personal identifiers, employee contact details, customer identities, and trade secrets identified on Seller&apos;s exclusion list.</li>
            <li><strong>Title Attestation:</strong> Seller represents and warrants that it holds legitimate title or controller authority over its internal systems and has complied with applicable employee notification requirements.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>5. Deletion Certificate</h2>
          <p>
            Within thirty (30) days following delivery to an approved Buyer and completion of the audit window, Tacit shall purge all intermediate operational copies held in its processing enclaves and deliver a formal written Certificate of Deletion to Seller.
          </p>
        </section>
      </div>
    </div>
  );
}
