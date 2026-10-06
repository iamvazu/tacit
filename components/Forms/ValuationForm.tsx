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
            A Tacit principal will review your tools profile and reach out via <strong>{email}</strong> within one business day with calendar options and a standard mutual NDA.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" id="valuation-form" onSubmit={handleSubmit}>
      <div>
        <span className="eyebrow">Direct scheduling</span>
        <h3 style={{ fontSize: '24px', marginTop: '6px' }}>Book a 20-minute valuation call</h3>
        <p className="lede" style={{ fontSize: '15px', marginTop: '6px' }}>
          We review your workspace tools, verify rights constraints, and provide a concrete valuation range in writing.
        </p>
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
          <label htmlFor="val-industry">Industry sector</label>
          <input
            id="val-industry"
            type="text"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g. Accounting, Software, Lab sciences"
          />
        </div>
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
          Mutual NDA signed on the call. No upfront fees.
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Request Valuation Call'}
        </button>
      </div>
    </form>
  );
}
