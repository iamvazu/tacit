import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tacit | Licensed Operational Data for AI Training',
  description:
    'Tacit licenses the record of your company’s expert work — tickets, ledgers, code reviews, decision threads — to frontier AI labs. 80% to seller, buyer veto, escrow backed.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div>
          <span className="eyebrow">Licensed operational data for AI training</span>
          <h1>
            The AI labs already read the internet. They haven&apos;t read{' '}
            <span className="mark">how your team works.</span>
          </h1>
          <p className="lede">
            Tacit licenses the record of your company&apos;s expert work — tickets, ledgers, code reviews, lab notes, decision threads — to frontier AI labs. We check your rights, strip every identity, package it to a buyer&apos;s spec, and pay you when the licence is signed.
          </p>
          <div className="actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '30px' }}>
            <Link className="btn" href="/valuation">
              Estimate my payout in 60 seconds
            </Link>
            <Link className="btn ghost" href="/rights-check">
              Can I legally sell this?
            </Link>
          </div>
          <p className="fine" style={{ marginTop: '18px', fontSize: '13px', color: 'var(--ink-2)' }}>
            No upfront fees. Nothing leaves your systems until you approve a named buyer.
          </p>
        </div>

        <figure className="trace" aria-label="Example of a de-identified work trace">
          <header>
            <span>trace · month-end close · accounting</span>
            <span>de-identified ✓</span>
          </header>
          <ol>
            <li>
              <span className="t">09:14</span>
              <span>
                Variance flagged on supplier <span className="redact">Hollis Packaging Ltd</span>: invoice £18,400 vs PO £16,900.
                <span className="why">Trigger</span>
              </span>
            </li>
            <li>
              <span className="t">09:31</span>
              <span>
                Pulled 3 prior invoices. Found freight surcharge added since Q2 without contract amendment.
                <span className="why">Evidence gathered</span>
              </span>
            </li>
            <li>
              <span className="t">10:02</span>
              <span>
                <span className="mark">Decided to accrue PO value only and hold £1,500 in dispute</span> rather than book in full.
                <span className="why">Judgment call</span>
              </span>
            </li>
            <li>
              <span className="t">10:20</span>
              <span>
                Emailed <span className="redact">j.okafor@hollis</span> requesting amended terms; set 14-day review.
                <span className="why">Action</span>
              </span>
            </li>
            <li>
              <span className="t">11:45</span>
              <span>
                Controller <span className="redact">R. Menon</span> approved the partial accrual.
                <span className="why">Sign-off</span>
              </span>
            </li>
          </ol>
          <footer>
            <span>5 steps · 2 hrs 31 min</span>
            <span>identities removed: 3 (Illustrative trace)</span>
          </footer>
        </figure>
      </div>

      {/* Public vs Private Gap */}
      <section>
        <div className="gap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', border: '1px solid var(--rule)', borderRadius: '10px', overflow: 'hidden', background: 'var(--sheet)' }}>
          <div style={{ padding: '36px', display: 'grid', gap: '14px', alignContent: 'start' }}>
            <span className="eyebrow">Public data</span>
            <p style={{ font: '800 clamp(36px, 5vw, 44px)/1 var(--f-display)', letterSpacing: '-.03em' }}>
              Used up
            </p>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              Web pages, forums, and open source repositories have been scraped and trained on repeatedly. Adding more generic public text produces diminishing returns for complex reasoning models.
            </p>
          </div>
          <div style={{ padding: '36px', display: 'grid', gap: '14px', alignContent: 'start', borderLeft: '1px solid var(--rule)' }}>
            <span className="eyebrow">Your private work record</span>
            <p style={{ font: '800 clamp(36px, 5vw, 44px)/1 var(--f-display)', letterSpacing: '-.03em' }}>
              Unscraped
            </p>
            <p style={{ color: 'var(--ink-2)', lineHeight: '1.6' }}>
              What frontier labs critically need is the granular reasoning path human practitioners take from an ambiguous problem to a validated resolution:
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--ink-2)', display: 'grid', gap: '6px' }}>
              <li>The chronological sequence of operational steps taken</li>
              <li>The trade-offs weighed and judgment rationale</li>
              <li>The verification checks before any change was signed off</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Sources Preview */}
      <section id="sources">
        <div className="sec-head">
          <span className="eyebrow">What sells</span>
          <h2>Six categories of operational data</h2>
          <p className="lede">
            We connect read-only. The value is in history and decisions, so older workspaces with long threads are usually worth more than large ones with thin activity.
          </p>
        </div>
        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>What labs want from it</th>
                <th>Typical systems</th>
                <th>Value signal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Messages</td>
                <td>Coordination threads where a decision was reached and the reasoning was written down.</td>
                <td><span className="tools">Slack · Teams · Gmail · Outlook</span></td>
                <td><span className="pill">long decision threads</span></td>
              </tr>
              <tr>
                <td>Code</td>
                <td>Repositories with full history: commits, reviews, incident fixes, migration notes.</td>
                <td><span className="tools">GitHub · GitLab · Bitbucket · Jira</span></td>
                <td><span className="pill">review comments</span></td>
              </tr>
              <tr>
                <td>Documents</td>
                <td>SOPs, reports, memos, specs, contract drafts with revisions.</td>
                <td><span className="tools">Drive · SharePoint · Notion · Confluence</span></td>
                <td><span className="pill">version history</span></td>
              </tr>
              <tr>
                <td>Records</td>
                <td>Ledgers, pipelines, orders and invoices tied to the actions taken on them.</td>
                <td><span className="tools">Salesforce · HubSpot · Xero · QuickBooks · Tally · SAP</span></td>
                <td><span className="pill">exceptions + fixes</span></td>
              </tr>
              <tr>
                <td>Tasks</td>
                <td>Tickets captured end to end: brief, steps, back-and-forth, resolution.</td>
                <td><span className="tools">Zendesk · Freshdesk · ServiceNow · Asana</span></td>
                <td><span className="pill">resolved with notes</span></td>
              </tr>
              <tr>
                <td>Domain systems</td>
                <td>The specialist record only your industry keeps: lab notebooks, test runs, design files, QC logs.</td>
                <td><span className="tools">LIMS · ELN · EDA/CAD · MES · QMS</span></td>
                <td><span className="pill">highest per-record value</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <Link href="/sell" className="btn ghost small">
            Explore all seller categories & verticals →
          </Link>
        </div>
      </section>

      {/* Valuation Preview */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <span className="eyebrow">Valuation estimator</span>
            <h2>How much could your data generate?</h2>
            <p className="lede">
              Valuations vary based on company domain, depth of historical threads, and human reasoning density. Use our transparent estimator to project your dataset&apos;s licence range.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <Link href="/valuation" className="btn">
                Open Valuation Calculator
              </Link>
              <Link href="/pricing" className="btn ghost">
                Fee Structure
              </Link>
            </div>
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: '10px', padding: '32px', display: 'grid', gap: '16px' }}>
            <span className="eyebrow" style={{ color: 'var(--mark)' }}>Illustrative deal range</span>
            <div style={{ font: '800 42px/1 var(--f-display)', letterSpacing: '-0.02em', color: 'var(--paper)' }}>
              $50K – $350K+
            </div>
            <p style={{ fontSize: '14px', opacity: 0.85, lineHeight: '1.5' }}>
              Mid-market companies with 5+ years of operational logs frequently realize six-figure licences. Sellers keep 80% net.
            </p>
            <div style={{ fontSize: '12px', opacity: 0.65 }}>
              *Illustrative benchmark based on transaction averages. Subject to buyer demand and de-identification verification.
            </div>
          </div>
        </div>
      </section>

      {/* Security Summary & Process */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Rigorous Standards</span>
          <h2>Built for privacy lawyers and compliance heads</h2>
          <p className="lede">
            We operate read-only connectors, two-pass automated and human de-identification, per-client isolated processing, and strict train-only licences.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3>Read-only Scoped Access</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              Zero write permissions. You specify exact channels, repos, or date ranges. Revocable in one click.
            </p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3>Two-Pass De-Identification</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              Automated NER and heuristic masking for PII/PHI combined with human sampling review on every batch.
            </p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3>Seller Buyer Veto</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              You review the buyer&apos;s identity and model training scope before any data is delivered.
            </p>
          </div>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '8px' }}>
            <h3>Escrow-Backed Payout</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)' }}>
              Buyers fund an escrow account upon licence execution, releasing funds directly upon acceptance.
            </p>
          </div>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Link href="/security" className="btn ghost small">Read our complete Security Architecture →</Link>
          <Link href="/how-it-works" className="btn ghost small">View 5-Step Process & Timelines →</Link>
          <Link href="/rights-check" className="btn ghost small">Run Legal Rights Checklist →</Link>
        </div>
      </section>

      {/* For Buyers Teaser */}
      <section>
        <div className="buyers" style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: '14px', padding: 'clamp(28px, 5vw, 56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ display: 'grid', gap: '18px', alignContent: 'start' }}>
            <span className="eyebrow" style={{ color: 'var(--mark)' }}>For AI Labs & Model Builders</span>
            <h2>Specialist operational data with clean title</h2>
            <p style={{ opacity: 0.85 }}>
              Frontier models require authentic decision chains, not synthesized approximations. Every Tacit listing ships with a comprehensive datasheet, seller title attestation, and audit reports.
            </p>
            <div>
              <Link href="/buyers" className="btn accent">
                Explore Buyer Catalogue
              </Link>
            </div>
          </div>
          <div style={{ background: 'var(--sheet)', color: 'var(--ink)', borderRadius: '8px', padding: '24px', display: 'grid', gap: '12px' }}>
            <div style={{ font: '600 13px var(--f-mono)', color: 'var(--teal)', textTransform: 'uppercase' }}>
              Standard Licensing Terms
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', color: 'var(--ink-2)', display: 'grid', gap: '8px' }}>
              <li><strong>Train & Evaluate Only:</strong> Strictly bounded model training; no raw redisclosure or resale.</li>
              <li><strong>Anti-Re-identification:</strong> Strict covenant prohibiting re-identification attempts.</li>
              <li><strong>Audited Residual PII:</strong> Stringent error threshold (&lt;0.1% on sampling audits).</li>
              <li><strong>Custom Task Extraction:</strong> Specialized sampling tailored to specific reasoning benchmarks.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
