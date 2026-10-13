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
            One of our team members will reach out to you within <strong>24 hours</strong> at <strong>{referrerEmail}</strong>. When this introduction leads to a closed data licence, you will receive 10% of Tacit&apos;s broker fee directly to your designated account.
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
              <span>Partner Desk: (408) 657-6116</span>
            </a>
          </div>
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
            Prefer to discuss an introduction over the phone?
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
