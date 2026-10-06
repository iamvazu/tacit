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
            Our data partnerships desk will send the current anonymized listings catalogue, sample datasheets, and licensing frameworks to <strong>{email}</strong> shortly.
          </p>
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
