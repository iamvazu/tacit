import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Records Sells | Plain Guide for Business Owners',
  description:
    'What records are AI labs paying six figures for? Everyday emails, workpapers, dispatch logs, tickets, and spreadsheets you already have on hand.',
};

export default function SellPage() {
  const verticals = [
    { title: 'Freight & Logistics', tasks: 'Rate quotes, dispatch logs, delivery exceptions, carrier claims, and shipment updates' },
    { title: 'Accounting & Bookkeeping', tasks: 'Workpapers, year-end reconciliations, dispute notes, tax files, and financial models' },
    { title: 'Engineering & Construction', tasks: 'CAD drawings, bid estimates, change orders, specifications, and site incident logs' },
    { title: 'Wholesale & Distribution', tasks: 'Order histories, catalog questions, supplier communications, and shipping records' },
    { title: 'Trades (Roofing, HVAC)', tasks: 'Service calls, customer estimates, warranty claims, and work orders' },
    { title: 'Software & Technology', tasks: 'Code reviews, ticket discussions, incident post-mortems, and architecture specs' },
    { title: 'Professional Services', tasks: 'Client proposals, project milestones, strategy memos, and deliverables' },
    { title: 'Healthcare & Clinical Operations', tasks: 'Practice management workflows, scheduling exceptions, and non-PHI operational logs' },
  ];

  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      {/* Intro */}
      <div>
        <span className="eyebrow">What Sells</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15 }}>
          What records do AI labs actually pay for?
        </h1>
        <p className="lede" style={{ fontSize: '18px', maxWidth: '72ch', lineHeight: 1.6 }}>
          AI models have already read the open web. What they need now is to learn how real businesses run day to day: how quotes get priced, how customer problems get solved, and how projects get delivered. That knowledge sits in the everyday tools you already use.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
          <Link href="/valuation" className="btn">
            Estimate What Yours Are Worth →
          </Link>
          <Link href="/#process" className="btn ghost">
            How the Sale Works
          </Link>
        </div>
      </div>

      {/* 5 Main Data Sources */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">Everyday Systems</span>
          <h2>The 5 kinds of data in highest demand</h2>
          <p className="lede">
            The value is in records you already have. Older accounts with years of decision history are usually worth the most.
          </p>
        </div>

        <div className="tbl">
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>What Labs Learn From It</th>
                <th>Where It Lives</th>
                <th>What Drives Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email &amp; Team Chat</td>
                <td>How quotes get negotiated, how teams collaborate, and how decisions were explained.</td>
                <td><span className="tools">Outlook · Gmail · Slack · Microsoft Teams</span></td>
                <td><span className="pill">Long back-and-forth threads</span></td>
              </tr>
              <tr>
                <td>Accounting &amp; Invoices</td>
                <td>How reconciliations get completed, variances get resolved, and financial models are structured.</td>
                <td><span className="tools">QuickBooks · Xero · NetSuite · SAP</span></td>
                <td><span className="pill">Exceptions &amp; adjustments</span></td>
              </tr>
              <tr>
                <td>Customer Tickets &amp; Jobs</td>
                <td>How customer issues were triaged, investigated, and successfully resolved.</td>
                <td><span className="tools">Zendesk · Freshdesk · HubSpot · ServiceTitan</span></td>
                <td><span className="pill">Resolved issues with notes</span></td>
              </tr>
              <tr>
                <td>Documents &amp; Memos</td>
                <td>Standard operating procedures, contract drafts with revisions, technical reports, and proposals.</td>
                <td><span className="tools">Google Drive · SharePoint · Notion · Box</span></td>
                <td><span className="pill">Multi-year revision history</span></td>
              </tr>
              <tr>
                <td>Specialist Industry Files</td>
                <td>Blueprints, CAD files, dispatch logs, routing records, and lab notes unique to your field.</td>
                <td><span className="tools">AutoCAD · TMS · LIMS · Custom ERP</span></td>
                <td><span className="pill">Highest price per record</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Industry breakdown */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="sec-head">
          <span className="eyebrow">By Industry</span>
          <h2>Examples across different sectors</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {verticals.map((v, i) => (
            <div key={i} style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 8px' }}>{v.title}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>{v.tasks}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '12px', padding: '36px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '24px', margin: '0 0 10px' }}>Curious what your records would fetch?</h3>
        <p style={{ color: 'var(--ink-2)', fontSize: '15px', maxWidth: '60ch', margin: '0 auto 24px' }}>
          Answer a few quick questions about your team size and tools. No files uploaded, zero cost, and zero obligation.
        </p>
        <Link href="/valuation" className="btn">
          Get an Offer for Your Firm →
        </Link>
      </div>
    </div>
  );
}
