import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Process | From Estimate to Payment in Four Steps',
  description:
    'How Tacit runs your data licensing deal from the initial two-minute estimate to payment. Zero cost to you, zero files to start, and you keep your original records.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      step: '1',
      title: 'Request Your Estimate',
      timeline: 'Today · 2 minutes',
      duration: '2 minutes online',
      summary: 'You share your approximate headcount, years in business, and what software tools you use. Nothing is uploaded, and no passwords or files are requested.',
      whatYouDo: 'Answer 5 basic questions about your business.',
      whatTacitDoes: 'We run your numbers against current buyer demand and schedule your confidential call.',
    },
    {
      step: '2',
      title: 'Confidential 30-Minute Call',
      timeline: 'Within 1 business day',
      duration: '30 minutes',
      summary: 'We get on a short, confidential call at a time you choose. We confirm what records you have across your tools and give you a realistic dollar range.',
      whatYouDo: 'Tell us roughly what records you have in email, accounting, or ticketing.',
      whatTacitDoes: 'We answer your questions and give you an indicative pricing range under mutual NDA.',
    },
    {
      step: '3',
      title: 'Clear Written Offer',
      timeline: 'Within 5–7 business days',
      duration: 'Review at your pace',
      summary: 'You receive a straightforward, plain-English written agreement: purchase price, permitted AI training use, and payment schedule. You can read it in an evening.',
      whatYouDo: 'Review the written terms with your partners or counsel and approve them.',
      whatTacitDoes: 'We negotiate the highest price with authorized AI research labs and secure escrow funding.',
    },
    {
      step: '4',
      title: 'De-Identify, Deliver, and Get Paid',
      timeline: 'On delivery',
      duration: 'Payment wired directly',
      summary: 'We coordinate the export with your IT person. Every identifying detail (names, emails, phones, account numbers) is scrubbed. Payment arrives in your bank before files transfer.',
      whatYouDo: 'Approve the de-identified sample and provide your wiring details.',
      whatTacitDoes: 'We verify complete privacy protection, release funds to your bank, and remain your ongoing contact.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">The Process</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          From estimate to payment in four steps
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          You take one call and approve the terms. We handle valuation, pricing, privacy de-identification, and closing. You risk nothing by asking.
        </p>
      </div>

      {/* 4 Steps */}
      <div style={{ display: 'grid', gap: '24px' }}>
        {steps.map((s) => (
          <div
            key={s.step}
            style={{
              background: 'var(--sheet)',
              border: '1px solid var(--rule)',
              borderRadius: '12px',
              padding: '32px',
              display: 'grid',
              gap: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="pill" style={{ marginBottom: '8px' }}>Step {s.step} · {s.timeline}</span>
                <h2 style={{ fontSize: '24px', margin: '4px 0 0' }}>{s.title}</h2>
              </div>
              <span className="mono" style={{ fontSize: '13px', color: 'var(--teal)', background: 'var(--teal-soft)', padding: '6px 12px', borderRadius: '4px' }}>
                Time: {s.duration}
              </span>
            </div>

            <p style={{ color: 'var(--ink)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              {s.summary}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', borderTop: '1px solid var(--rule)', paddingTop: '20px' }}>
              <div style={{ background: 'var(--paper)', padding: '16px', borderRadius: '8px' }}>
                <span style={{ font: '600 13px var(--f-mono)', color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
                  WHAT YOU DO:
                </span>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>{s.whatYouDo}</p>
              </div>
              <div style={{ background: 'var(--paper)', padding: '16px', borderRadius: '8px' }}>
                <span style={{ font: '600 13px var(--f-mono)', color: 'var(--teal)', display: 'block', marginBottom: '4px' }}>
                  WHAT TACIT HANDLES:
                </span>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>{s.whatTacitDoes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Reassurance */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '36px', display: 'grid', gap: '20px' }}>
          <span className="eyebrow">Privacy &amp; Safety</span>
          <h2 style={{ fontSize: '26px', margin: 0 }}>What actually leaves your building?</h2>
          <p style={{ color: 'var(--ink-2)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
            Your clients and employees are never named. Every identifying detail—names, contact information, account numbers, and passwords—is completely removed or replaced with generic placeholders before delivery. The real-world work survives, and the people disappear.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/valuation" className="btn">
              Get an Offer for Your Firm →
            </Link>
            <Link href="/security" className="btn ghost">
              Read Full Privacy Standards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
