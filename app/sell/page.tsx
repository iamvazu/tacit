import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Operational Data | Data Sellers Guide',
  description:
    'Turn your company’s historical tickets, ledgers, code reviews, and domain systems into recurring licence revenue. 80% payout to sellers with full buyer veto.',
};

export default function SellPage() {
  const verticals = [
    { title: 'Accountants & Auditors', tasks: 'Year-end closes, reconciliations, audit trails, dispute accruals' },
    { title: 'Chemists & Lab Teams', tasks: 'Protocols, titration runs, assay logs, QC failure reviews' },
    { title: 'Chip Designers & EDA', tasks: 'RTL verification, timing closure, tape-out checklists, yield analysis' },
    { title: 'Lawyers & Legal Ops', tasks: 'Due diligence trails, contract markups, regulatory filings, dispute memos' },
    { title: 'Software Engineers', tasks: 'Code reviews, incident post-mortems, legacy migrations, refactoring threads' },
    { title: 'Insurance Adjusters', tasks: 'Complex claim assessments, fraud investigations, policy interpretation notes' },
    { title: 'Financial Analysts', tasks: 'Valuation models, risk memos, capital allocation arguments, cash flow forecasts' },
    { title: 'Support & Escalation Leads', tasks: 'Tier-3 engineering escalations, bug workarounds, SLA remediation steps' },
    { title: 'Operations & Supply Chain', tasks: 'Vendor dispute logs, logistics routing changes, inventory variance notes' },
    { title: 'Manufacturing Engineers', tasks: 'Root cause analyses, engineering change orders (ECOs), tolerance adjustments' },
    { title: 'Civil & Construction Engineers', tasks: 'Structural bid memos, change orders, site safety incident mitigations' },
    { title: 'Talent & HR Leadership', tasks: 'Structured interview scorecards, compensation benchmarking calibrations' },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      {/* Intro */}
      <div>
        <span className="eyebrow">For Corporate Data Sellers</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Monetize your company&apos;s expert decision history.
        </h1>
        <p className="lede">
          Frontier AI labs have exhausted the open web. Today, the most valuable training asset in existence is human expertise applied to hard, multi-step business problems. Tacit provides a secure, lawyer-approved pathway to license your operational exhaust while preserving complete confidentiality.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          <Link href="/valuation" className="btn">
            Calculate Estimated Payout
          </Link>
          <Link href="/rights-check" className="btn ghost">
            Check Legal Rights
          </Link>
        </div>
      </div>

      {/* 6 Data Sources */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Data categories</span>
          <h2>The data sources AI labs buy</h2>
          <p className="lede">
            We extract the chain of thought: the initial symptom, the data collected, the internal debates, and the verified resolution.
          </p>
        </div>

        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th>Source Category</th>
                <th>What Labs Extract</th>
                <th>Common Software Connectors</th>
                <th>Primary Value Multiplier</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Messages & Threads</td>
                <td>Team problem-solving conversations, consensus formation, peer review of decisions, and operational coordination.</td>
                <td><span className="tools">Slack · Microsoft Teams · Google Chat · Email</span></td>
                <td><span className="pill">Long deliberation threads</span></td>
              </tr>
              <tr>
                <td>Source Code & Reviews</td>
                <td>Repositories with full Git commit histories, detailed PR reviews, incident fixes, and architectural notes.</td>
                <td><span className="tools">GitHub · GitLab · Bitbucket · Jira</span></td>
                <td><span className="pill">Substantive code review comments</span></td>
              </tr>
              <tr>
                <td>Documents & SOPs</td>
                <td>Internal playbooks, policy memos, incident writeups, engineering specs, and revision deltas.</td>
                <td><span className="tools">Google Drive · SharePoint · Notion · Confluence</span></td>
                <td><span className="pill">Multi-author revision history</span></td>
              </tr>
              <tr>
                <td>Operational Records</td>
                <td>Enterprise resource ledgers, CRM pipelines, accounting records, and ERP inventory adjustments.</td>
                <td><span className="tools">Salesforce · HubSpot · Xero · QuickBooks · SAP · NetSuite</span></td>
                <td><span className="pill">Exception handling & remediation</span></td>
              </tr>
              <tr>
                <td>Tickets & Support Logs</td>
                <td>End-to-end task histories from customer/internal tickets: problem brief, diagnostic steps, resolution notes.</td>
                <td><span className="tools">Zendesk · Freshdesk · ServiceNow · Linear · Asana</span></td>
                <td><span className="pill">Resolved tickets with debug notes</span></td>
              </tr>
              <tr>
                <td>Domain & Specialized Systems</td>
                <td>Proprietary lab notebooks, CAD/EDA schematics, quality management records, and manufacturing execution logs.</td>
                <td><span className="tools">LIMS · Benchling · Altium · Cadence · Veeva · MES</span></td>
                <td><span className="pill">Highest value per single trace</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seller Terms */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Contractual Protections</span>
          <h2>Seller terms: You retain total authority</h2>
          <p className="lede">
            Our brokerage agreement is structured so that you never surrender ownership, risk confidential trade secrets, or face surprise terms.
          </p>
        </div>

        <div className="terms">
          <div>
            <span className="k num">80%</span>
            <h3>Of Every Licence to You</h3>
            <p>You receive 80% of gross licensing revenue. Tacit takes a 20% success fee only upon closed transactions. No onboarding or listing charges.</p>
          </div>
          <div>
            <span className="k">Buyer Veto</span>
            <h3>Named Buyer Approval</h3>
            <p>You receive the buyer&apos;s name and intended training model before data release. If you veto a buyer for any reason, nothing leaves your custody.</p>
          </div>
          <div>
            <span className="k">Train-Only</span>
            <h3>Strict Usage Licence</h3>
            <p>Licences are strictly bounded to model training and evaluation. Buyers are contractually banned from redistributing, reselling, or attempting re-identification.</p>
          </div>
          <div>
            <span className="k">Escrow</span>
            <h3>Guaranteed Payment</h3>
            <p>Buyers fund a licensed third-party escrow account prior to delivery. Funds disburse immediately upon buyer validation, eliminating payment default risk.</p>
          </div>
          <div>
            <span className="k">Non-Excl.</span>
            <h3>Sell Multiple Times</h3>
            <p>Non-exclusive by default, meaning you can license the same de-identified dataset to multiple non-competing AI builders for compounding returns.</p>
          </div>
          <div>
            <span className="k">Delete</span>
            <h3>Certificate of Deletion</h3>
            <p>Once delivery and client verification are complete, Tacit purges its intermediate processing replicas and issues a signed Deletion Certificate.</p>
          </div>
        </div>
      </section>

      {/* Target Verticals */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">In-Demand Domains</span>
          <h2>Who we work with across industries</h2>
          <p className="lede">
            We specialize in capturing domain workflows where unstructured institutional memory resides in company software.
          </p>
        </div>

        <div className="vert">
          {verticals.map((vert, idx) => (
            <div key={idx}>
              <b>{vert.title}</b>
              <span>{vert.tasks}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Next Step CTA */}
      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h3>Ready to discover what your archives are worth?</h3>
          <p style={{ color: 'var(--ink-2)', marginTop: '4px' }}>
            Book a confidential 20-minute scoping call. We sign a mutual NDA upfront.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link href="/valuation" className="btn">
            Open Valuation Calculator
          </Link>
          <Link href="/contact" className="btn ghost">
            Talk to Our Principals
          </Link>
        </div>
      </div>
    </div>
  );
}
