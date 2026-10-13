import type { Metadata } from 'next';
import ContactForm from '@/components/Forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Inception2c LLC d/b/a Tacit',
  description:
    'Direct contact desk for corporate data sellers, AI research buyers, and referral partners. Reach our principals via message or direct email.',
};

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_EMAIL || 'hello@tacit.exchange';

  return (
    <div style={{ display: 'grid', gap: '48px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Get In Touch</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Talk to our team
        </h1>
        <p className="lede">
          Whether you&apos;re a business owner curious about what your records are worth, or an advisor looking to introduce a client, we&apos;re here to answer your questions. We respond within one business day.
        </p>
      </div>

      {/* Direct Contact Options */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        <div className="tactical-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '4px', background: '#141011', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Direct Phone Desk</span>
            </div>
            <h3 style={{ fontSize: '20px', margin: '4px 0 6px', color: '#141011' }}>
              (408) 657-6116
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Available 9:00 AM – 6:00 PM PT. Click below to initiate a phone call with our principals.
            </p>
          </div>
          <div style={{ marginTop: '16px' }}>
            <a
              href="tel:+14086576116"
              className="btn-primary"
              style={{ padding: '8px 18px', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call Now · (408) 657-6116</span>
            </a>
          </div>
        </div>

        <div className="tactical-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '4px', background: '#141011', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                ✉
              </div>
              <span className="eyebrow" style={{ margin: 0 }}>Direct Email Desk</span>
            </div>
            <h3 style={{ fontSize: '20px', margin: '4px 0 6px', color: '#141011' }}>
              {contactEmail}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Responses within 24 hours. Confidential and encrypted transmissions.
            </p>
          </div>
          <div style={{ marginTop: '16px' }}>
            <a
              href={`mailto:${contactEmail}`}
              className="btn-secondary"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <ContactForm emailAddress={contactEmail} />
      </section>

      <section style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '32px' }}>
        <h3 style={{ marginBottom: '12px' }}>Corporate Entity</h3>
        <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: '1.6' }}>
          <strong>Inception2c LLC d/b/a Tacit</strong><br />
          Enterprise operational data brokerage and AI model training asset licensing.<br />
          Phone: <a href="tel:+14086576116" style={{ color: '#141011', fontWeight: 700 }}>(408) 657-6116</a><br />
          Email: <code className="mono">{contactEmail}</code>
        </p>
        <p style={{ color: 'var(--ink-2)', fontSize: '13px', marginTop: '12px' }}>
          For formal legal notices, subpoena response, or compliance audits, please address communications directly to our compliance desk with subject prefix: <span className="mono">[LEGAL/COMPLIANCE]</span>.
        </p>
      </section>
    </div>
  );
}
