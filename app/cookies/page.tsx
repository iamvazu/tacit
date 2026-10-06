import LegalBanner from '@/components/LegalBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Tacit',
  description: 'How Tacit utilizes cookies, local storage, and browser preferences.',
};

export default function CookiesPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '40px auto', display: 'grid', gap: '32px' }}>
      <LegalBanner />

      <div>
        <span className="eyebrow">Technical Notice</span>
        <h1 style={{ marginTop: '8px', marginBottom: '12px' }}>Cookie &amp; Storage Policy</h1>
        <p className="mono" style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
          Last revised: October 2026 · Inception2c LLC d/b/a Tacit
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px', lineHeight: '1.7', color: 'var(--ink-2)' }}>
        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>1. Zero Third-Party Advertising Cookies</h2>
          <p>
            Tacit maintains an ad-free, privacy-first web property. We do NOT deploy third-party advertising trackers, retargeting pixels, social media widgets, or behavioural profiling cookies across our website.
          </p>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>2. Essential Storage and Browser Preferences</h2>
          <p>
            We use localized browser storage mechanisms strictly for functional and security purposes:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
            <li><strong>Theme Preference:</strong> The key <code className="mono">tacit_theme</code> is stored in your browser&apos;s <code className="mono">localStorage</code> to remember whether you prefer light or dark mode.</li>
            <li><strong>Security and Rate Limiting:</strong> Standard server-side session headers and temporary IP-level rate-limiting keys are maintained in volatile server memory to prevent automated spam and denial-of-service abuse.</li>
            <li><strong>Client-Side Estimators:</strong> Calculator and Rights Check states run purely client-side in browser memory and are not persisted to persistent cookies or synchronized to external trackers without your form submission.</li>
          </ul>
        </section>

        <section style={{ borderTop: 'none', paddingBlock: 0 }}>
          <h2 style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '8px' }}>3. How to Manage Local Storage</h2>
          <p>
            You can clear or disable cookies and local storage at any time through your browser settings. Doing so will reset your theme preference to match your operating system&apos;s system default.
          </p>
        </section>
      </div>
    </div>
  );
}
