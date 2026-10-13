import Link from 'next/link';
import type { Metadata } from 'next';
import InteractiveShaderBg from '@/components/InteractiveShaderBg';
import InteractiveConsole from '@/components/InteractiveConsole';
import ValuationSimulator from '@/components/ValuationSimulator';
import MarketTicker from '@/components/MarketTicker';

export const metadata: Metadata = {
  title: 'Tacit | Your Old Records Are Worth Six Figures to AI Labs',
  description:
    'AI labs are paying established firms six and seven figures to license de-identified copies of their emails and files. We handle the entire sale.',
};

export default function HomePage() {
  const deals = [
    {
      sector: 'Industrial Distribution',
      payout: '$1,200,000',
      description: 'Communications, product knowledge, order history, supplier records, and operational documents.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Freight Brokerage · 100 people',
      payout: '$650,000',
      description: 'Rate quotes, shipment documents, dispatch records, delivery exceptions, and customer claims.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Third-Party Logistics (3PL)',
      payout: '$500,000',
      description: 'Dispatch messages, SOPs, logistics workflows, and customer service operating records.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Engineering Firm · 70 people',
      payout: '$450,000',
      description: 'CAD drawings, calculations, technical reports, revisions, and project specifications.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Roofing Contractor',
      payout: '$450,000',
      description: 'Operational work orders, job notes, and customer project records, anonymized before delivery.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Accounting Firm · 60 people',
      payout: '$350,000',
      description: 'Five years of workpapers, reconciliations, financial models, and tax-preparation files.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'General Contractor',
      payout: '$300,000',
      description: 'Operational bids, subcontractor agreements, change orders, and site logs.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Solar & Energy Installer',
      payout: '$275,000',
      description: 'Project installations, engineering checklists, permits, and customer service logs.',
      reported: 'Published transaction · Oct 2026',
    },
    {
      sector: 'Software & Tech Firm',
      payout: 'Six Figures',
      description: 'Thirteen years of Slack, Jira, email, and Google Drive records (as reported by Forbes).',
      reported: 'Forbes · Apr 2026',
    },
  ];

  const questions = [
    {
      q: 'Is this real money, or a sales pitch?',
      a: 'It is real money. Accounting firms, freight brokers, and engineering firms with 50 to 100 people have already received payments of $350,000 to $650,000. Google paid $10 million for Spirit Airlines’ records in federal court. Your offer comes in a binding written agreement before you commit to anything.',
    },
    {
      q: 'What does this cost me?',
      a: 'Nothing at any stage. You pay zero upfront, zero for valuation, and zero for de-identification. If no deal is made, or if you decline the offer, you owe nothing.',
    },
    {
      q: 'Do I lose my data or ownership?',
      a: 'No. You license a de-identified copy. You keep 100% ownership of your original files, your business keeps operating normally, and nothing is deleted or taken away from your systems.',
    },
    {
      q: 'Will my clients or employees be exposed?',
      a: 'Never. Names, phone numbers, email addresses, credit cards, bank accounts, and passwords are removed or replaced with generic placeholders before delivery. You inspect a sample of the scrubbed data before signing.',
    },
    {
      q: 'Who will use the data, and for what?',
      a: 'Authorized AI research labs, strictly for training and evaluating AI models. They are contractually forbidden from publishing your raw files, sharing records, or naming your company.',
    },
    {
      q: 'How much of my team’s time does this take?',
      a: 'About one hour of yours total. If an export is needed, we coordinate it with your IT person or service provider. Nobody on your team has to write new documents, label files, or clean anything up.',
    },
    {
      q: 'What if I don’t know what data we have?',
      a: 'Most owners don’t. Just tell us which tools you’ve used over the years (email, shared drives, accounting, ticketing) and we work out what’s there on a short 30-minute call.',
    },
    {
      q: 'Why act now?',
      a: 'AI companies are actively buying right now, with over $1 billion committed to purchasing real-world operating records over the next 12 months. Value also lives in history: when software subscriptions lapse or companies close, archives get deleted and that value is lost forever.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-stage">
        <InteractiveShaderBg />

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="live-pulse-dot" />
            <span>FOR OWNERS OF FIRMS WITH 20+ EMPLOYEES</span>
          </div>

          <h1 className="hero-title">
            Your old email and files are worth{' '}
            <span className="hero-highlight">six figures to AI labs.</span> We handle the entire sale.
          </h1>

          <p className="hero-description">
            AI labs are paying established firms to license de-identified copies of records they already keep. A 60-person accounting firm was paid $350,000. A 100-person freight broker, $650,000. Tacit runs your deal from valuation to payment. You take one call and approve the terms.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/valuation" className="btn-primary">
              Get an Offer →
            </Link>
            <a href="#estimate" className="btn-secondary">
              Estimate My Payout
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="hero-stat-number">No files</span>
              <span className="hero-stat-label">To start your estimate</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">$0 cost</span>
              <span className="hero-stat-label">At every stage of the process</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100% yours</span>
              <span className="hero-stat-label">You keep your original files</span>
            </div>
          </div>
        </div>

        {/* Right Stage: Interactive Redaction & Privacy Console */}
        <div>
          <InteractiveConsole />
        </div>
      </section>

      {/* Live Market Proof / Ticker */}
      <MarketTicker />

      {/* Recent Published Deals Grid */}
      <section className="content-section" id="deals">
        <div className="section-head">
          <span className="section-badge">Market Proof</span>
          <h2 className="section-title">
            Firms Paid Across the Market in 2026
          </h2>
          <p className="section-lede">
            Published by data licensing firms and financial press. Business owners are kept anonymous.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '20px' }}>
          {deals.map((deal, idx) => (
            <div
              key={idx}
              className="tactical-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#b45309', fontWeight: 700, marginBottom: '6px' }}>
                  {deal.sector}
                </div>
                <div style={{ fontSize: '32px', fontFamily: 'var(--font-display)', color: '#141011', fontWeight: 800, marginBottom: '10px' }}>
                  {deal.payout}
                </div>
                <p style={{ color: '#4a4646', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {deal.description}
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e4e0d7', paddingTop: '12px', fontSize: '12px', color: '#78716c' }}>
                {deal.reported}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <Link href="/valuation" className="btn-primary" style={{ padding: '12px 28px' }}>
            Find Out What Your Firm Would Be Paid →
          </Link>
        </div>
      </section>

      {/* The Story: Why This Is Real */}
      <section className="content-section" id="why">
        <div className="tactical-card" style={{ padding: 'clamp(28px, 5vw, 48px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="section-badge">Why Now</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#141011', margin: '12px 0 16px', lineHeight: 1.2, fontWeight: 800 }}>
                The labs have read the internet. They have never seen how your business runs.
              </h2>
              <p style={{ color: '#4a4646', fontSize: '16px', lineHeight: '1.6', marginBottom: '14px' }}>
                AI models learned to write from public websites. What they cannot learn from the web is how an estimate gets priced, how a dispute gets settled, or how a delayed shipment gets resolved.
              </p>
              <p style={{ color: '#4a4646', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                That real-world knowledge sits in your email, your spreadsheets, and your daily files — and nowhere else. So the labs started paying for it.
              </p>
            </div>

            <div style={{ background: '#faf9f6', border: '1.5px solid #e4e0d7', borderRadius: '6px', padding: '24px', display: 'grid', gap: '16px', boxShadow: '2px 2px 0px #dedad2' }}>
              <div style={{ borderBottom: '1px solid #e4e0d7', paddingBottom: '14px' }}>
                <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: '#b45309', fontWeight: 800 }}>
                  $1 Billion+
                </div>
                <div style={{ fontSize: '13px', color: '#4a4646', marginTop: '4px' }}>
                  Committed by AI data companies to purchase enterprise operating records over the next 12 months.
                </div>
              </div>
              <div style={{ borderBottom: '1px solid #e4e0d7', paddingBottom: '14px' }}>
                <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: '#141011', fontWeight: 800 }}>
                  $10 Million
                </div>
                <div style={{ fontSize: '13px', color: '#4a4646', marginTop: '4px' }}>
                  Winning bid by Google for Spirit Airlines’ customer chats and emails in federal bankruptcy court.
                </div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontFamily: 'var(--font-display)', color: '#15803d', fontWeight: 800 }}>
                  $350K – $650K
                </div>
                <div style={{ fontSize: '13px', color: '#4a4646', marginTop: '4px' }}>
                  Typical payments to everyday accounting, freight, and engineering firms with 50–100 employees.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive On-Page Valuation Simulator */}
      <section className="content-section" id="valuation-engine">
        <ValuationSimulator />
      </section>

      {/* What You Do vs What We Do */}
      <section className="content-section" id="what-we-do">
        <div className="section-head">
          <span className="section-badge">Effortless for You</span>
          <h2 className="section-title">
            You take one call. We handle everything else.
          </h2>
          <p className="section-lede">
            Tacit is your single point of contact from valuation to payout. No shopping your data around, no technical burden on your staff, and no hassle.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* What You Do */}
          <div className="tactical-card" style={{ padding: '32px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#b45309', fontWeight: 700 }}>
              WHAT YOU DO
            </span>
            <div style={{ fontSize: '32px', fontFamily: 'var(--font-display)', color: '#141011', margin: '8px 0 20px', fontWeight: 800 }}>
              About 1 Hour Total
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#b45309', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>Answer a few questions</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>Two minutes online. No files uploaded and no passwords needed.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#b45309', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>Take one confidential call</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>About 30 minutes at a time you choose to confirm what records you have.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#b45309', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>Approve the offer</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>Read the clear written terms and sign only if you like the numbers.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* What We Handle */}
          <div className="tactical-card" style={{ padding: '32px', border: '1.5px solid #141011', boxShadow: '3px 3px 0px #141011' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#15803d', fontWeight: 700 }}>
              WHAT WE HANDLE
            </span>
            <div style={{ fontSize: '32px', fontFamily: 'var(--font-display)', color: '#141011', margin: '8px 0 20px', fontWeight: 800 }}>
              The Entire Sale
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>Valuation</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>We estimate what your records are worth based on current buyer demand.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>The Offer & Negotiation</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>We prepare your written offer: price, permitted AI use, and payment schedule.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>De-identification & Privacy</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>All names, emails, phone numbers, and account details are scrubbed before transfer.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
                <div>
                  <strong style={{ color: '#141011', display: 'block' }}>Closing & Wire Payment</strong>
                  <span style={{ color: '#4a4646', fontSize: '14px' }}>Funds land directly in your bank account before files are released.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div style={{ marginTop: '24px', background: '#f0fdf4', border: '1.5px solid #16a34a', boxShadow: '2.5px 2.5px 0px #bbf7d0', borderRadius: '6px', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <strong style={{ color: '#141011', fontSize: '16px', display: 'block' }}>
              No offer, no cost. You risk nothing by asking.
            </strong>
            <span style={{ color: '#4a4646', fontSize: '14px' }}>
              There is zero fee to the owner. If no offer is made, or if you don’t like the terms, you walk away and nothing has left your systems.
            </span>
          </div>
          <Link href="/valuation" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
            Get Started →
          </Link>
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="content-section" id="process">
        <div className="section-head">
          <span className="section-badge">Simple 4 Steps</span>
          <h2 className="section-title">
            From Estimate to Payment in Four Steps
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div className="tactical-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', color: '#b45309', fontWeight: 700, marginBottom: '8px' }}>
              1. TODAY · 2 MIN
            </div>
            <h3 style={{ fontSize: '18px', color: '#141011', margin: '0 0 10px', fontWeight: 700 }}>
              Request Your Estimate
            </h3>
            <p style={{ color: '#4a4646', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Tell us your approximate headcount, years in business, and where your records live. Nothing uploaded.
            </p>
          </div>

          <div className="tactical-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', color: '#b45309', fontWeight: 700, marginBottom: '8px' }}>
              2. DAY 1 · 30 MIN
            </div>
            <h3 style={{ fontSize: '18px', color: '#141011', margin: '0 0 10px', fontWeight: 700 }}>
              Confidential Call
            </h3>
            <p style={{ color: '#4a4646', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              We confirm what software tools you have and give you a realistic payout range before any review.
            </p>
          </div>

          <div className="tactical-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', color: '#b45309', fontWeight: 700, marginBottom: '8px' }}>
              3. WRITTEN OFFER
            </div>
            <h3 style={{ fontSize: '18px', color: '#141011', margin: '0 0 10px', fontWeight: 700 }}>
              Review the Agreement
            </h3>
            <p style={{ color: '#4a4646', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              Clear price, scope, permitted AI training use, and payment schedule, in one plain-English agreement.
            </p>
          </div>

          <div className="tactical-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', color: '#15803d', fontWeight: 700, marginBottom: '8px' }}>
              4. GET PAID
            </div>
            <h3 style={{ fontSize: '18px', color: '#141011', margin: '0 0 10px', fontWeight: 700 }}>
              De-Identify & Wire
            </h3>
            <p style={{ color: '#4a4646', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
              All identities are scrubbed. The agreed wire transfer lands in your bank. You keep your original files.
            </p>
          </div>
        </div>
      </section>

      {/* Is Your Firm a Fit? */}
      <section className="content-section" id="fit">
        <div className="tactical-card" style={{ padding: 'clamp(28px, 5vw, 44px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div>
              <span className="section-badge">Eligibility</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#141011', margin: '10px 0 16px', fontWeight: 800 }}>
                Most Established Firms Qualify
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '10px', color: '#141011', fontSize: '15px' }}>
                  <span style={{ color: '#15803d', fontWeight: 700 }}>✔</span>
                  <span><strong>20+ people:</strong> Full-time staff, now or at your peak.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#141011', fontSize: '15px' }}>
                  <span style={{ color: '#15803d', fontWeight: 700 }}>✔</span>
                  <span><strong>3+ years in business:</strong> Of email, shared files, and records still on hand.</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', color: '#141011', fontSize: '15px' }}>
                  <span style={{ color: '#15803d', fontWeight: 700 }}>✔</span>
                  <span><strong>Any status:</strong> Operating normally, downsizing, winding down, or closed.</span>
                </li>
              </ul>
            </div>

            <div>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#78716c', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px', fontWeight: 700 }}>
                INDUSTRIES IN HIGHEST DEMAND
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Freight & Logistics',
                  'Accounting & Tax',
                  'Engineering & Construction',
                  'Wholesale & Distribution',
                  'Manufacturing',
                  'Trades (Roofing, HVAC)',
                  'Consulting & Professional Services',
                  'Software & IT',
                  'Law Firms',
                ].map((ind) => (
                  <Link
                    key={ind}
                    href="/valuation"
                    style={{
                      background: '#faf9f6',
                      border: '1.5px solid #e4e0d7',
                      borderRadius: '4px',
                      padding: '8px 14px',
                      fontSize: '13px',
                      color: '#141011',
                      textDecoration: 'none',
                      fontWeight: 600,
                      boxShadow: '1.5px 1.5px 0px #dedad2',
                    }}
                  >
                    {ind} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="content-section" id="questions">
        <div className="section-head">
          <span className="section-badge">Before You Ask</span>
          <h2 className="section-title">
            What Owners Ask on the First Call
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '12px', maxWidth: '840px', margin: '0 auto' }}>
          {questions.map((q, idx) => (
            <details
              key={idx}
              className="tactical-card"
              style={{
                padding: '18px 24px',
              }}
            >
              <summary
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  color: '#141011',
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                {q.q}
              </summary>
              <p style={{ color: '#4a4646', fontSize: '15px', lineHeight: '1.6', marginTop: '12px', marginBottom: 0 }}>
                {q.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="content-section" style={{ textAlign: 'center', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span className="section-badge">Get Your Written Offer</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.5vw, 48px)', fontWeight: 800, margin: '14px 0 20px', color: '#141011' }}>
            Your records are already sitting there. Find out what they’re worth.
          </h2>
          <p style={{ color: '#4a4646', fontSize: '17px', lineHeight: '1.6', marginBottom: '32px' }}>
            Two minutes online. No files uploaded. Zero cost to you. We call within one business day with your firm’s valuation range.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/valuation" className="btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Get My Offer →
            </Link>
            <Link href="/refer" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '16px' }}>
              Refer a Business (Earn 10%)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
