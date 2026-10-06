import type { Metadata } from 'next';
import ContactForm from '@/components/Forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Inception2c LLC d/b/a Tacit',
  description:
    'Direct contact desk for corporate data sellers, AI research buyers, and referral partners. Reach our principals via message or direct email.',
};

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_EMAIL || 'YOUR_EMAIL';

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Direct Principal Desk</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Get in touch with Tacit.
        </h1>
        <p className="lede">
          We work with senior leadership, corporate legal counsel, and AI research directors. All inquiries are treated with strict confidentiality under standard mutual non-disclosure frameworks.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <ContactForm emailAddress={contactEmail} />
      </section>

      <section style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px' }}>
        <h3 style={{ marginBottom: '12px' }}>Corporate Entity</h3>
        <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: '1.6' }}>
          <strong>Inception2c LLC d/b/a Tacit</strong><br />
          Enterprise operational data brokerage and AI model training asset licensing.<br />
          Email: <code className="mono">{contactEmail}</code>
        </p>
        <p style={{ color: 'var(--ink-2)', fontSize: '13px', marginTop: '12px' }}>
          For formal legal notices, subpoena response, or compliance audits, please address communications directly to our compliance desk with subject prefix: <span className="mono">[LEGAL/COMPLIANCE]</span>.
        </p>
      </section>
    </div>
  );
}
