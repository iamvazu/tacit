import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Safety | Your Clients and Staff Are Never Named',
  description:
    'How Tacit protects your privacy: all names, emails, phone numbers, and account numbers are completely scrubbed before anything is delivered. You keep your original files.',
};

export default function SecurityPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">Privacy &amp; Protection</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          Your clients and staff are never named
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          Every identifying detail is removed or replaced with a generic placeholder before delivery, so the real-world work survives and the people disappear.
        </p>
      </div>

      {/* 4 Privacy Commitments */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Our Four Privacy Guarantees</span>
          <h2>How your company stays completely protected</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '28px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              1. Full Identity Removal
            </div>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>Names, Emails &amp; Phones Scrubbed</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              All customer names, employee names, email addresses, phone numbers, and physical addresses are detected and replaced with generic markers (e.g. [Contact_112], [Driver_19]).
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '28px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              2. Credentials Never Touched
            </div>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>Account Numbers &amp; Passwords Blocked</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              Credit card numbers, bank account details, system credentials, and confidential customer identifiers are permanently deleted at source.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '28px' }}>
            <div className="mono" style={{ color: 'var(--teal)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              3. You Inspect Before Signing
            </div>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>Review a Scrubbed Sample</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              You and your team inspect a de-identified sample of your records before you sign the agreement. If you see anything you want excluded, we take it out.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '28px' }}>
            <div className="mono" style={{ color: 'var(--ok)', fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
              4. Strict Training-Only License
            </div>
            <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>Labs Cannot Publish Raw Files</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
              The license permits AI model training only. AI builders are legally prohibited from publishing your files, redistributing raw data, or mentioning your firm by name.
            </p>
          </div>
        </div>
      </section>

      {/* Before and After Specimen */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Real Example</span>
          <h2>See what leaves your building</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--f-mono)', color: 'var(--ink-2)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              ORIGINAL (STAYS WITH YOU)
            </span>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '13px', lineHeight: 1.7, color: 'var(--ink)' }}>
              From: Dana Whitfield &lt;dana@harborlinefreight.com&gt;<br />
              To: Mike Ortega, Ortega Produce<br />
              Re: Load #48213, reefer alarm<br /><br />
              Temp alarm at 3:40 AM near Joplin, MO. Driver Luis Paredes (417-555-0182) rerouted to Springfield Cold Storage. Claim filed with carrier MC 774512; product held for inspection.
            </div>
          </div>

          <div style={{ background: 'var(--sheet)', border: '2px solid var(--teal)', borderRadius: '10px', padding: '24px' }}>
            <span style={{ fontSize: '12px', fontFamily: 'var(--f-mono)', color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
              DE-IDENTIFIED COPY (LICENSED)
            </span>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: '13px', lineHeight: 1.7, color: 'var(--ink)' }}>
              From: <span className="pill">[Broker_Rep_07]</span> &lt;<span className="pill">[EMAIL]</span>&gt;<br />
              To: <span className="pill">[Contact_112]</span>, <span className="pill">[Shipper_31]</span><br />
              Re: Load <span className="pill">[LOAD_0291]</span>, reefer alarm<br /><br />
              Temp alarm at 3:40 AM near <span className="pill">[City_44]</span>. Driver <span className="pill">[Driver_19]</span> (<span className="pill">[PHONE]</span>) rerouted to <span className="pill">[Facility_08]</span>. Claim filed with carrier <span className="pill">[CARRIER_ID]</span>; product held for inspection.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '36px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', margin: '0 0 10px' }}>Your clients stay anonymous. Your payout doesn’t.</h3>
        <p style={{ color: 'var(--ink-2)', fontSize: '15px', maxWidth: '60ch', margin: '0 auto 24px' }}>
          See what a de-identified copy of your firm&apos;s records is worth. Takes two minutes. Zero files uploaded.
        </p>
        <Link href="/valuation" className="btn">
          Get an Offer for Your Firm →
        </Link>
      </div>
    </div>
  );
}
