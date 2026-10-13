import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Questions & Answers | Tacit',
  description:
    'Straightforward answers to the questions business owners ask most: payouts, privacy, costs, data ownership, and timelines.',
};

export default function FAQPage() {
  const faqs = [
    {
      q: 'Is this real money, or a sales pitch?',
      a: 'It is real money. Accounting firms, freight brokers, and engineering firms with 50 to 100 people have received payouts between $350,000 and $650,000. Google paid $10 million for Spirit Airlines’ records in federal bankruptcy court. Your offer comes in a binding written agreement with guaranteed funds before you commit to anything.',
    },
    {
      q: 'What does this cost me?',
      a: 'Zero, at every stage. You pay nothing upfront, nothing for valuation, and nothing for de-identification. If no deal is made, or if you decide not to accept the offer, you owe nothing.',
    },
    {
      q: 'Do I lose my data or ownership?',
      a: 'No. You are licensing an agreed, de-identified copy. You retain 100% ownership of your original files, your business keeps operating normally, and nothing is deleted or taken away from your systems.',
    },
    {
      q: 'Will my clients or employees be exposed?',
      a: 'Never. Names, phone numbers, email addresses, credit cards, bank accounts, and credentials are completely removed or replaced with generic placeholders before delivery. You inspect and approve a sample of the scrubbed data before signing.',
    },
    {
      q: 'Who will use the data, and for what?',
      a: 'Authorized AI research labs, strictly for training and evaluating AI models. They are legally forbidden from publishing your raw files, sharing records, or naming your company.',
    },
    {
      q: 'How much of my team’s time does it take?',
      a: 'About one hour of yours total. If an export is needed, we coordinate it with your IT person or service provider. Nobody on your team has to write new documents, label files, or clean anything up.',
    },
    {
      q: 'What if I don’t know what data we have?',
      a: 'Most owners don’t. Just tell us which tools you’ve used over the years (email, shared drives, accounting, ticketing) and we’ll work out what’s there together on a short 30-minute call.',
    },
    {
      q: 'Why act now?',
      a: 'AI companies are buying right now, with over $1 billion committed to purchasing real-world operating records over the next 12 months. Value also lives in history: when software subscriptions lapse or companies close, archives get deleted and that value is lost forever.',
    },
    {
      q: 'Can I sell the same data to more than one lab?',
      a: 'Yes. Unless a buyer pays a premium for exclusive rights, data licenses are non-exclusive. That means you can license the same scrubbed historical records to multiple non-competing AI builders over time.',
    },
    {
      q: 'What data is NEVER sold under any circumstances?',
      a: 'We strictly reject: un-redacted personal identities, passwords or credentials, credit card and banking details, protected health records (HIPAA), and government-classified or defense-restricted technical data.',
    },
    {
      q: 'How do you guarantee the market never finds out we sold data?',
      a: 'Discretion is fundamental to our business. We operate under strict mutual NDA. Tacit never publishes your company name, logos, or identifying case studies without explicit permission.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Questions &amp; Answers</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          Before you ask: What owners ask first
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          Straightforward answers to the most common questions about pricing, privacy, time commitment, and data ownership.
        </p>
      </div>

      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gap: '12px' }}>
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              style={{
                background: 'var(--sheet)',
                border: '1px solid var(--rule)',
                borderRadius: '10px',
                padding: '20px 24px',
              }}
            >
              <summary
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  color: 'var(--ink)',
                }}
              >
                {faq.q}
              </summary>
              <p
                style={{
                  color: 'var(--ink-2)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  marginTop: '12px',
                  marginBottom: 0,
                }}
              >
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div
        style={{
          background: 'var(--sheet)',
          border: '1px solid var(--rule)',
          borderRadius: '12px',
          padding: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <div>
          <h3 style={{ fontSize: '22px', margin: '0 0 6px' }}>Still have a question?</h3>
          <p style={{ color: 'var(--ink-2)', fontSize: '15px', margin: 0 }}>
            Ask it on a short confidential call, or request your payout estimate in two minutes.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/valuation" className="btn">
            Get an Offer →
          </Link>
          <Link href="/contact" className="btn ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
