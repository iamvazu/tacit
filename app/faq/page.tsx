import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Tacit',
  description:
    'Answers to all seller and buyer questions: security, de-identification, payment timing, taxes, international sellers, access revocation, and confidentiality.',
};

export default function FAQPage() {
  const faqs = [
    // Original 7 FAQs from index.html
    {
      q: 'Will my customers\' or employees\' data end up in an AI model?',
      a: 'Not in identifiable form. We remove names, contact details, IDs, phone numbers, and account numbers before anything leaves our processing enclave. In addition, you review and sign off on a redacted preview before any sale is executed. Where local laws require formal notice to employees or customers, we provide vetted templates and wait until your notice period has concluded.',
    },
    {
      q: 'How fast do I get paid?',
      a: 'Most deals take between four to eight weeks from the initial scoping call to cash in your bank account. This duration depends on the speed of the rights review, the volume of data being cleansed, and the buyer\'s 5–10 day acceptance testing window. Funds are held in a secure third-party escrow account starting at contract signing, so payment is released immediately upon buyer acceptance.',
    },
    {
      q: 'Who are the buyers?',
      a: 'Frontier AI research labs, enterprise foundation model builders, and well-funded specialized vertical AI companies training models on domain tasks. We disclose the buyer\'s corporate identity and intended model training scope before you approve any release. We strictly refuse to broker data to brokers, aggregators, or unauthorized data resellers.',
    },
    {
      q: 'What if my data turns out not to be sellable?',
      a: 'Then you pay exactly $0. Our broker compensation is 100% contingent upon closed licensing transactions. If our rights review reveals legal title impediments or if prospective buyers lack interest in the specific schema, we immediately terminate the engagement without charging for our legal audit or technical time.',
    },
    {
      q: 'Does this expose trade secrets?',
      a: 'You retain sovereign authority over ingestion boundaries. Pricing matrices, unreleased product roadmaps, source code repositories, specific confidential clients, or designated folders can be blacklisted and excluded entirely from ingestion. Furthermore, our sanitization pipeline redacts named clients, internal project codenames, and trademarks upon request.',
    },
    {
      q: 'Can I sell the same data to more than one lab?',
      a: 'Yes. By default, Tacit brokered licences are non-exclusive. This allows you to license the identical scrubbed dataset to multiple non-competing AI builders over time, generating multiple rounds of licensing revenue from the same underlying work archive.',
    },
    {
      q: 'Do my employees get anything?',
      a: 'If your domain experts participate in annotating complex decisions or explaining ambiguous edge cases, they are paid a dedicated consulting stipend per hour ($150–$350/hr) on top of the base licensing fee. In addition, many forward-thinking sellers allocate a discretionary bonus pool from net licensing proceeds to reward long-tenured contributors.',
    },

    // 8+ Additional required FAQs
    {
      q: 'Payment timing: What is the exact escrow and release sequence?',
      a: 'Once both parties sign the licence agreement, the buyer funds 100% of the purchase price into a third-party escrow account within 3 business days. Delivery of the de-identified dataset is triggered only after escrow confirms receipt of funds. The buyer then has an inspection window (typically 5 business days) to verify that the dataset matches the agreed schema and error thresholds. Upon buyer confirmation (or expiration of the inspection window without dispute), the escrow agent releases 80% directly to your bank account via SWIFT/Fedwire.',
    },
    {
      q: 'Taxes and invoicing: How are cross-border licensing fees taxed and invoiced?',
      a: 'Transactions are invoiced as an intangible intellectual property licence. For international sellers outside the United States (such as in India, the UK, or the EU), transactions typically utilize standard W-8BEN-E treaty certifications to minimize or eliminate US withholding taxes under applicable bilateral double-taxation treaties. We coordinate with your accounting team to issue clean commercial invoices with corresponding GST, VAT, or local tax withholding treatment.',
    },
    {
      q: 'International sellers: Can companies based outside the United States license data?',
      a: 'Absolutely. A substantial portion of high-value operational records originates in India, the UK, the European Union, Canada, and Australia. We adapt our legal frameworks and data processing agreements to local statutes, including India\'s Digital Personal Data Protection (DPDP) Act 2023, the EU/UK GDPR, and respective national cross-border transfer requirements.',
    },
    {
      q: 'What data is NEVER brokered or sold under any circumstances?',
      a: 'We strictly reject: (1) un-redacted personal identifiers or consumer credit profiles; (2) credentials, passwords, private keys, or API tokens; (3) protected health records lacking explicit HIPAA authorization or expert determination; (4) data originating from minors or sensitive protected classes; and (5) government classified or defense-restricted technical data (ITAR/EAR).',
    },
    {
      q: 'How do we revoke access to our systems?',
      a: 'You maintain administrative control over integrations at all times. If you connect via OAuth or an API token, you can revoke access with a single click from your Slack, GitHub, Jira, or Google Workspace admin console. Tacit\'s ingestion immediately ceases. Upon contract completion or termination, we purge intermediate working copies and issue a formal Deletion Certificate.',
    },
    {
      q: 'Exclusivity: What is the financial difference between exclusive and non-exclusive deals?',
      a: 'A non-exclusive licence provides recurring monetization potential across multiple AI builders. However, if a buyer requires category exclusivity (guaranteeing that no competing lab receives the dataset for a designated period, e.g., 12 to 24 months), the buyer pays a substantial exclusivity premium—typically 2.5x to 4x the non-exclusive benchmark price.',
    },
    {
      q: 'Data quality rejections: What happens if a buyer disputes data quality during inspection?',
      a: 'The licence contract defines objective quality metrics: trace schema completeness, token volume, and a maximum allowable residual PII error rate (&lt;0.1%). If a buyer identifies genuine technical anomalies during the inspection window, Tacit undertakes a remediation pass at our own cost. If the dataset cannot be remediated to meet agreed contractual specifications, escrowed funds return to the buyer, and you incur zero penalty or fees.',
    },
    {
      q: 'Confidentiality: How do you guarantee the market never finds out we sold data?',
      a: 'Confidentiality is fundamental to our broker business. Our mutual NDA and brokerage agreement mandate absolute confidentiality. Tacit never publishes customer logos, case studies, or press releases naming our data sellers. Even prospective buyers only evaluate anonymized metadata and de-identified sample traces until you approve disclosing company identity under mutual NDA.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Comprehensive Knowledgebase</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Frequently Asked Questions
        </h1>
        <p className="lede">
          Detailed answers on operational security, de-identification standards, cross-border tax treatments, and commercial terms for enterprise data sellers and AI buyers.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gap: '8px' }}>
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3>Have a question not addressed here?</h3>
          <p style={{ color: 'var(--ink-2)', marginTop: '4px' }}>
            Our principals are available for direct, confidential discussions.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Contact Our Desk
        </Link>
      </div>
    </div>
  );
}
