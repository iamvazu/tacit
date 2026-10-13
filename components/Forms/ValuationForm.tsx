'use client';

import { useState } from 'react';

interface ValuationFormProps {
  initialIndustry?: string;
  initialRange?: string;
  initialNet?: string;
}

export default function ValuationForm({
  initialIndustry = 'Software',
  initialRange = '$65K – $182K',
  initialNet = 'You keep $52K – $146K after our 20% fee',
}: ValuationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState(initialIndustry);
  const [teamSize, setTeamSize] = useState('120');
  const [tools, setTools] = useState('');
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
          form_type: 'valuation_call',
          name,
          email,
          phone,
          company,
          industry,
          team_size: teamSize,
          tools_summary: tools,
          estimated_range: initialRange,
          estimated_net: initialNet,
          notes,
          website_url_hp: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit form.');
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
      <div className="form-card" id="valuation-form">
        <div className="form-success">
          <h3 style={{ marginBottom: '8px' }}>Valuation Call Scheduled</h3>
          <p>
            Thank you, {name || 'there'}! We have received your preliminary dataset profile and valuation details ({initialRange}).
            One of our team members will reach out to you at <strong>{email}</strong> within <strong>24 hours</strong> with calendar options and a mutual NDA.
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
              <span>Need immediate answers? Call (408) 657-6116</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="valuation-form" onSubmit={handleSubmit}>
      <div>
        <span className="eyebrow">Request Your Offer</span>
        <h3 style={{ fontSize: '24px', marginTop: '6px' }}>Find out what your records are worth</h3>
        <p className="lede" style={{ fontSize: '15px', marginTop: '6px' }}>
          Tell us about your firm. We call within 24 hours with your payout range. No files uploaded and zero cost to you.
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
            Prefer to speak directly with an advisor?
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

      {/* Honeypot field (hidden from real users) */}
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
          <label htmlFor="val-name">Your name *</label>
          <input
            id="val-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
          />
        </div>

        <div className="field">
          <label htmlFor="val-email">Work email *</label>
          <input
            id="val-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="val-company">Company name *</label>
          <input
            id="val-company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Operations Ltd"
          />
        </div>

        <div className="field">
          <label htmlFor="val-phone">Direct phone (optional)</label>
          <input
            id="val-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(408) 000-0000"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="val-industry">Industry sector</label>
        <input
          id="val-industry"
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder="e.g. Accounting, Software, Lab sciences, Logistics"
        />
      </div>

      <div className="field">
        <label htmlFor="val-tools">Primary tools & data sources</label>
        <input
          id="val-tools"
          type="text"
          value={tools}
          onChange={(e) => setTools(e.target.value)}
          placeholder="e.g. Slack, GitHub, Jira, Salesforce, Notion, Xero"
        />
        <span className="hint">Mention the core systems holding decision history and resolved tickets.</span>
      </div>

      <div className="field">
        <label htmlFor="val-notes">Questions or notes for the call</label>
        <textarea
          id="val-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Specific questions regarding employee notices, customer confidentiality, or timeline."
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
        <div style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          Held in strict confidence · No files uploaded · Zero cost to you
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Get My Offer →'}
        </button>
      </div>
    </form>
  );
}
