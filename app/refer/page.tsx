'use client';

import { useState } from 'react';
import ReferralForm from '@/components/Forms/ReferralForm';

export default function ReferPage() {
  const [dealSize, setDealSize] = useState(600000);
  const commission = Math.min(dealSize * 0.1, 100000);

  const formatK = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(val % 1000000 === 0 ? 0 : 2)}M`;
    }
    return `$${Math.round(val / 1000)}K`;
  };

  const partnerFaqs = [
    {
      q: 'How much can I earn?',
      a: 'You earn 10% of what the business is paid for its data license, up to $100,000 per business. For example, if a company you introduce is paid $650,000, your partner commission is $65,000. Commission is paid once per business.',
    },
    {
      q: 'When am I paid?',
      a: 'Within 30 days after the business has been paid and funds have cleared. We keep you updated by email at each stage so you always know where things stand.',
    },
    {
      q: 'How do I get credit for an introduction?',
      a: 'Simply submit their details through the form below with the owner’s name. The first partner to register a business gets the credit, and it stays reserved for you for 12 months.',
    },
    {
      q: 'Do I need the owner’s permission?',
      a: 'Yes. Only introduce owners who have agreed to hear from us. We contact them with complete discretion, and we never add them to marketing lists or spam them.',
    },
    {
      q: 'Does it cost me or the business anything?',
      a: 'Zero. There is no fee to you or the business at any stage. The business keeps all of its original records, approves every term in writing, and pays nothing.',
    },
    {
      q: 'What if the deal doesn’t close?',
      a: 'Then nothing is owed, and nothing is lost. The introduction remains registered to you for 12 months in case they decide to proceed later.',
    },
    {
      q: 'Is there a partner agreement?',
      a: 'Yes, a simple standard referral agreement confirming your 10% fee. You will simply need to provide a standard W-9 or invoice before your payout is wired.',
    },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      {/* Hero Section */}
      <div>
        <span className="eyebrow">Tacit Partner Program</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 54px)', lineHeight: 1.15 }}>
          Introduce business owners. Earn 10% of what they&apos;re paid.
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          Established firms are being paid six and seven figures to license de-identified copies of their records to AI labs. If you advise business owners, you can make the introduction. We run the entire sale, and you earn <strong>10% of the payment to the business, up to $100,000</strong> per firm.
        </p>
      </div>

      {/* Interactive Commission Calculator */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: 'clamp(24px, 4vw, 36px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Commission Calculator</span>
            <h2 style={{ fontSize: '26px', margin: '8px 0 12px' }}>Estimate Your Partner Payout</h2>
            <p style={{ color: 'var(--ink-2)', fontSize: '15px', lineHeight: 1.5, margin: 0 }}>
              Adjust the slider to see what you would earn based on what the business receives.
            </p>

            <div style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
                <span>If the business is paid:</span>
                <span className="mono" style={{ color: 'var(--teal)', fontSize: '18px' }}>{formatK(dealSize)}</span>
              </div>
              <input
                type="range"
                min={100000}
                max={2000000}
                step={25000}
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                style={{ width: '100%', height: '8px', cursor: 'pointer', accentColor: 'var(--teal)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--ink-2)', marginTop: '4px' }}>
                <span>$100K</span>
                <span>$2M+</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--f-mono)', color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              YOU EARN (10%)
            </span>
            <div style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, fontFamily: 'var(--f-display)', color: 'var(--teal)', margin: '8px 0' }}>
              ${Math.round(commission).toLocaleString('en-US')}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--ink-2)', margin: 0 }}>
              {commission >= 100000
                ? 'Capped at $100,000 per business. Paid once, after the business is paid.'
                : 'Paid once per business, after the business is paid. Capped at $100,000 per business.'}
            </p>
          </div>
        </div>
      </section>

      {/* Proof / Recent Payments */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Market Proof</span>
          <h2>The conversations are worth having</h2>
          <p className="lede">
            Recent published transactions from 2026. At 10%, each would have earned the introducing partner the amount shown:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <span style={{ fontSize: '12px', color: 'var(--ink-2)', display: 'block', marginBottom: '6px' }}>Freight Broker · 100 people</span>
            <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'var(--f-display)' }}>$650K</div>
            <div style={{ fontSize: '14px', color: 'var(--teal)', fontWeight: 600, marginTop: '6px' }}>Partner commission: $65,000</div>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <span style={{ fontSize: '12px', color: 'var(--ink-2)', display: 'block', marginBottom: '6px' }}>Engineering Firm · 70 people</span>
            <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'var(--f-display)' }}>$450K</div>
            <div style={{ fontSize: '14px', color: 'var(--teal)', fontWeight: 600, marginTop: '6px' }}>Partner commission: $45,000</div>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <span style={{ fontSize: '12px', color: 'var(--ink-2)', display: 'block', marginBottom: '6px' }}>Accounting Firm · 60 people</span>
            <div style={{ fontSize: '32px', fontWeight: 800, fontFamily: 'var(--f-display)' }}>$350K</div>
            <div style={{ fontSize: '14px', color: 'var(--teal)', fontWeight: 600, marginTop: '6px' }}>Partner commission: $35,000</div>
          </div>
        </div>
      </section>

      {/* Who Partners & Who Qualifies */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <div>
            <div className="sec-head" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">Who Partners With Us</span>
              <h2 style={{ fontSize: '26px' }}>People owners already trust</h2>
            </div>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>CPAs and Accountants</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>You know which clients have years of clean, detailed books and financial records.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Business Brokers &amp; M&amp;A Advisors</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>A licensing payment can sweeten a sale or provide unexpected cash during an exit or wind-down.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Bankers, Lenders &amp; Wealth Advisors</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>Non-dilutive cash for owners who don’t want to borrow debt or sell equity.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Attorneys, Consultants &amp; IT Providers</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>You already work closely with the operating tools where the records live.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="sec-head" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">Who to Introduce</span>
              <h2 style={{ fontSize: '26px' }}>Most established firms qualify</h2>
            </div>
            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>20+ People</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>Full-time staff, now or at their historical peak.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>3+ Years of Records</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>Email, shared files, and software operating records still on hand.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>US-Based or English Records</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>Operating primarily in English across standard business software.</p>
              </div>
              <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '18px' }}>
                <strong style={{ display: 'block', marginBottom: '4px' }}>Any Status</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)' }}>Operating normally, downsizing, winding down, or closed — as long as the records exist.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in 4 Steps */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">How It Works</span>
          <h2>You make the introduction. We do the rest.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>1. Apply</div>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>Two minutes to register. Your referral is credited to your name.</p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>2. Introduce</div>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>Submit the business name and owner’s contact with their permission.</p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>3. We Run the Deal</div>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>Valuation, offer, terms, de-identification, and payment. We email you as it moves forward.</p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <div className="mono" style={{ color: 'var(--ok)', fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>4. Get Paid</div>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: 0, lineHeight: 1.5 }}>10% of what the business receives, up to $100,000, wired once the deal closes.</p>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section id="referral-form-section" style={{ borderTop: 'none', paddingBlock: 0 }}>
        <ReferralForm />
      </section>

      {/* Partner FAQs */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Questions</span>
          <h2>What partners ask first</h2>
        </div>
        <div style={{ display: 'grid', gap: '10px', maxWidth: '820px' }}>
          {partnerFaqs.map((faq, idx) => (
            <details key={idx} style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '16px 20px' }}>
              <summary style={{ fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}>{faq.q}</summary>
              <p style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, marginTop: '10px', marginBottom: 0 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
