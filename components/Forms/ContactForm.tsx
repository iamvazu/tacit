'use client';

import { useState } from 'react';

interface ContactFormProps {
  emailAddress?: string;
}

export default function ContactForm({ emailAddress = 'hello@tacit.exchange' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('General inquiry');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Copied ✓');
      setTimeout(() => setCopyStatus('Copy'), 3000);
    } catch {
      setCopyStatus('Select text');
    }
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
          form_type: 'contact',
          name,
          email,
          phone,
          company,
          subject,
          message,
          website_url_hp: honeypot,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Submission error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper" style={{ display: 'grid', gap: '36px' }}>
      <div className="copybox" style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '220px' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '4px' }}>Direct Email Desk</span>
          <code style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)' }}>{emailAddress}</code>
        </div>
        <button
          type="button"
          onClick={copyEmail}
          className="btn ghost small"
          style={{ border: '1.5px solid var(--ink)', cursor: 'pointer' }}
        >
          {copyStatus}
        </button>
      </div>

      {success ? (
        <div className="form-card">
          <div className="form-success">
            <h3 style={{ marginBottom: '8px' }}>Message Sent</h3>
            <p>
              Thank you, {name}! Your note has been received by our principals at Inception2c LLC d/b/a Tacit.
              We will respond to <strong>{email}</strong> within one business day.
            </p>
          </div>
        </div>
      ) : (
        <form className="form-card" onSubmit={handleSubmit}>
          <div>
            <span className="eyebrow">Direct message</span>
            <h3 style={{ fontSize: '24px', marginTop: '6px' }}>Send us a message</h3>
            <p className="lede" style={{ fontSize: '15px', marginTop: '6px' }}>
              Whether you are an operational team looking to monetize records, or an AI research team seeking specialized training data, our principals respond directly.
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

          {/* Quick Call Desk Banner */}
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
                Prefer to speak with our principals directly?
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

          <div className="form-grid">
            <div className="field">
              <label htmlFor="ct-name">Your name *</label>
              <input
                id="ct-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>

            <div className="field">
              <label htmlFor="ct-email">Your email *</label>
              <input
                id="ct-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@organization.com"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label htmlFor="ct-phone">Your phone (optional)</label>
              <input
                id="ct-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(408) 000-0000"
              />
            </div>

            <div className="field">
              <label htmlFor="ct-company">Organization / Company</label>
              <input
                id="ct-company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Organization name"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="ct-subject">Inquiry type</label>
            <select
              id="ct-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="Data Seller / Valuation">Data Seller / Valuation</option>
              <option value="AI Lab / Buyer Inquiries">AI Lab / Buyer Inquiries</option>
              <option value="Referral Partnership">Referral Partnership</option>
              <option value="Legal & Privacy Rights">Legal & Privacy Rights</option>
              <option value="General inquiry">General inquiry</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="ct-message">Your message *</label>
            <textarea
              id="ct-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your team's tools, specific questions, or dataset interests."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Sending message...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
