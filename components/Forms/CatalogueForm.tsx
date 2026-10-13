'use client';

import { useState } from 'react';

export default function CatalogueForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [otherInterests, setOtherInterests] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const interestOptions = [
    'Accounting & Month-End Closes',
    'Software Architecture & Code Reviews',
    'Legal Diligence & Drafting',
    'Customer Support & Escalations',
    'Semiconductor & Hardware Design',
    'Biochemistry & Lab Protocols',
    'Insurance Adjusting & Claims',
    'Custom Expert Trace Collection',
  ];

  const handleInterestToggle = (opt: string) => {
    setInterests((prev) =>
      prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'catalogue_request',
          name,
          email,
          organization,
          data_interests: interests,
          notes: otherInterests,
          website_url_hp: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit request.');
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="form-card" id="catalogue-form">
        <div className="form-success">
          <h3 style={{ marginBottom: '8px' }}>Catalogue Request Received</h3>
          <p>
            Thank you, {name}! We have received your request on behalf of <strong>{organization}</strong>.
            One of our team members will reach out to <strong>{email}</strong> within <strong>24 hours</strong> with the current anonymized listings catalogue, sample datasheets, and licensing frameworks.
          </p>
          <div style={{ marginTop: '16px' }}>
            <a
              href="tel:+14086576116"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#141011',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '13.5px',
                fontFamily: 'var(--font-mono)',
                background: '#ffffff',
                padding: '6px 14px',
                border: '1.5px solid #141011',
                borderRadius: '4px',
                boxShadow: '2px 2px 0px #141011',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Buyer Desk: (408) 657-6116</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="catalogue-form" onSubmit={handleSubmit}>
      <div>
        <span className="eyebrow">For AI Labs & Model Builders</span>
        <h3 style={{ fontSize: '24px', marginTop: '6px' }}>Request the Data Catalogue</h3>
        <p className="lede" style={{ fontSize: '15px', marginTop: '6px' }}>
          Access comprehensive datasheets, sampling methodology, and pricing terms for clean-title operational work datasets.
        </p>
      </div>

      {/* Quick Phone Desk Banner */}
      <div style={{
        background: '#faf9f6',
        border: '1.5px solid #141011',
        borderRadius: '4px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        boxShadow: '2px 2px 0px #141011',
        margin: '12px 0 20px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span style={{ fontSize: '13.5px', color: '#141011', fontWeight: 600 }}>
            Lab procurement questions? Speak directly with our data desk:
          </span>
        </div>
        <a
          href="tel:+14086576116"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#141011',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '13px',
            fontFamily: 'var(--font-mono)',
            background: '#fef08a',
            border: '1px solid #141011',
            padding: '4px 10px',
            borderRadius: '3px',
          }}
          title="Call (408) 657-6116"
        >
          📞 Call (408) 657-6116
        </a>
      </div>

      {errorMsg && <div className="form-error">{errorMsg}</div>}

      <div style={{ display: 'none' }} aria-hidden="true">
        <input
          type="text"
          name="website_url_hp"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="cat-name">Full name *</label>
          <input
            id="cat-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dr. Alex Rivera"
          />
        </div>

        <div className="field">
          <label htmlFor="cat-email">Work email (corporate / lab domain) *</label>
          <input
            id="cat-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alex@ailab.org"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cat-org">Organisation / AI Lab name *</label>
        <input
          id="cat-org"
          type="text"
          required
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Frontier AI Systems Inc."
        />
      </div>

      <div className="field">
        <span className="legend">Target verticals of interest</span>
        <div className="chips">
          {interestOptions.map((opt) => (
            <label key={opt} className="chip">
              <input
                type="checkbox"
                checked={interests.includes(opt)}
                onChange={() => handleInterestToggle(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="cat-notes">Specific dataset requirements or custom collections</label>
        <textarea
          id="cat-notes"
          value={otherInterests}
          onChange={(e) => setOtherInterests(e.target.value)}
          placeholder="Mention token formats, languages, reasoning step granularity, or custom collection benchmarks needed."
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
        <div style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          All listings feature verified title and standard escrow delivery.
        </div>
        <button type="submit" className="btn accent" disabled={loading}>
          {loading ? 'Sending...' : 'Request Catalogue & Datasheets'}
        </button>
      </div>
    </form>
  );
}
