'use client';

import { useState } from 'react';

export default function ReferralForm() {
  const [referrerName, setReferrerName] = useState('');
  const [referrerEmail, setReferrerEmail] = useState('');
  const [targetCompany, setTargetCompany] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: 'referral',
          name: referrerName,
          email: referrerEmail,
          company: targetCompany,
          candidate_contact_name: contactName,
          candidate_contact_email: contactEmail,
          notes,
          website_url_hp: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit referral.');
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
      <div className="form-card" id="referral-form">
        <div className="form-success">
          <h3 style={{ marginBottom: '8px' }}>Referral Registered</h3>
          <p>
            Thank you, {referrerName}! We have recorded your introduction for <strong>{targetCompany}</strong>.
            We will reach out with care and discretion. When this introduction leads to a closed data licence, you will receive 10% of Tacit&apos;s broker fee directly to your designated account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="referral-form" onSubmit={handleSubmit}>
      <div>
        <span className="eyebrow">Partner & Referral Network</span>
        <h3 style={{ fontSize: '24px', marginTop: '6px' }}>Submit a Company Referral</h3>
        <p className="lede" style={{ fontSize: '15px', marginTop: '6px' }}>
          Know an organization with years of deep, domain-specific ticket, ledger, or code review data? Introduce them and receive 10% of Tacit&apos;s success fee upon deal close.
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
          <label htmlFor="ref-myname">Your name *</label>
          <input
            id="ref-myname"
            type="text"
            required
            value={referrerName}
            onChange={(e) => setReferrerName(e.target.value)}
            placeholder="Your full name"
          />
        </div>

        <div className="field">
          <label htmlFor="ref-myemail">Your email (for referral payout updates) *</label>
          <input
            id="ref-myemail"
            type="email"
            required
            value={referrerEmail}
            onChange={(e) => setReferrerEmail(e.target.value)}
            placeholder="you@domain.com"
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="ref-targetcompany">Company you are introducing *</label>
          <input
            id="ref-targetcompany"
            type="text"
            required
            value={targetCompany}
            onChange={(e) => setTargetCompany(e.target.value)}
            placeholder="Target Company Name"
          />
        </div>

        <div className="field">
          <label htmlFor="ref-contactname">Decision maker / Contact name</label>
          <input
            id="ref-contactname"
            type="text"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="VP Operations / CTO / Managing Partner"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="ref-contactemail">Contact email (if you have permission to share)</label>
        <input
          id="ref-contactemail"
          type="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          placeholder="contact@targetcompany.com"
        />
      </div>

      <div className="field">
        <label htmlFor="ref-notes">Context / Why is this data valuable?</label>
        <textarea
          id="ref-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g. 10 years of semiconductor design reviews, 40-person accounting firm with 200k closed client reconciliation threads, etc."
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
        <div style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          We never spam referrals. All outreach is professional and vetted.
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Register Referral'}
        </button>
      </div>
    </form>
  );
}
