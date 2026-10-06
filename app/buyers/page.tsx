import type { Metadata } from 'next';
import CatalogueForm from '@/components/Forms/CatalogueForm';

export const metadata: Metadata = {
  title: 'For AI Labs & Model Builders | Data Catalogue',
  description:
    'Access verified, de-identified operational reasoning datasets for frontier AI model training. Clean title, audited residual PII, and custom task collections.',
};

export default function BuyersPage() {
  return (
    <div style={{ display: 'grid', gap: '64px', paddingBlock: '40px 60px' }}>
      <div>
        <span className="eyebrow">For AI Labs &amp; Model Builders</span>
        <h1 style={{ marginTop: '12px', marginBottom: '16px' }}>
          Real operational reasoning from enterprise teams.
        </h1>
        <p className="lede">
          Frontier AI models are limited by synthetic data drift and exhausted web crawls. Tacit provides licensed, clean-title operational reasoning traces from verified corporate environments across finance, engineering, legal, and science domains.
        </p>
      </div>

      {/* Value prop & Datasheet example */}
      <section style={{ borderTop: 'none', paddingBlock: 0 }}>
        <div className="buyers" style={{ background: 'var(--ink)', color: 'var(--paper)', borderRadius: '14px', padding: 'clamp(28px, 5vw, 56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          <div style={{ display: 'grid', gap: '18px', alignContent: 'start' }}>
            <span className="eyebrow" style={{ color: 'var(--mark)' }}>Datasheet &amp; Title Verification</span>
            <h2>Authentic problem-solving with clean title</h2>
            <p style={{ opacity: 0.85 }}>
              Every Tacit dataset ships with a comprehensive machine-readable Datasheet detailing ingestion methodology, temporal bounds, and de-identification audit metrics.
            </p>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '10px', opacity: 0.9 }}>
              <li><strong>Redacted sample previews</strong> available prior to licence execution.</li>
              <li><strong>Rigorous title covenants</strong> backed by seller executive attestations.</li>
              <li><strong>Audited residual PII</strong> below 0.1% on independent sampling audits.</li>
              <li><strong>Standardized train-only licences</strong> backed by third-party escrow.</li>
            </ul>
          </div>

          <div className="sheetcard" aria-label="Illustrative Example Datasheet">
            <div style={{ fontWeight: 600, marginBottom: '10px', color: 'var(--ink)' }}>
              DATASHEET · illustrative listing example
            </div>
            <div className="row">
              <span>Vertical</span>
              <span>accounting · corporate mid-market</span>
            </div>
            <div className="row">
              <span>Source Systems</span>
              <span>Xero, Zendesk tickets, Slack decision threads</span>
            </div>
            <div className="row">
              <span>Temporal Span</span>
              <span>2019 – 2026</span>
            </div>
            <div className="row">
              <span>Total Reasoning Traces</span>
              <span className="num">41,200 traces</span>
            </div>
            <div className="row">
              <span>Avg. Steps Per Trace</span>
              <span className="num">7.4 verified steps</span>
            </div>
            <div className="row">
              <span>Language Distribution</span>
              <span>en-US (62%), en-GB (24%), en-IN (14%)</span>
            </div>
            <div className="row">
              <span>De-Identification Method</span>
              <span>Automated NER + 5% Human Audit</span>
            </div>
            <div className="row">
              <span>Residual PII Audit Rate</span>
              <span className="num">&lt; 0.1% on verification</span>
            </div>
            <div className="row">
              <span>Licence Type</span>
              <span>Non-exclusive · Train &amp; Eval Only</span>
            </div>
            <div className="row">
              <span>Title Validation</span>
              <span>Seller executive attestation &amp; rights review</span>
            </div>
            <div style={{ marginTop: '12px', fontSize: '12px', color: 'var(--ink-2)' }}>
              *Illustrative example. Specific listings and metrics vary according to domain and partner scope.
            </div>
          </div>
        </div>
      </section>

      {/* Custom Collection & Licensing */}
      <section>
        <div className="sec-head">
          <span className="eyebrow">Capabilities &amp; Terms</span>
          <h2>Custom collection and licensing specifications</h2>
          <p className="lede">
            Beyond our existing catalogue, we engineer custom collection campaigns tailored to your research objectives.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <h3 style={{ fontSize: '18px' }}>Custom Task Ingestion</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              Specify the target reasoning patterns you need: multi-agent debugging sessions, complex tax reconciliations, or circuit timing closure. We source and onboard companies with matching archives.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <h3 style={{ fontSize: '18px' }}>Domain Expert Annotation</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              The practitioners who generated the data can be contracted on an hourly basis to provide step-by-step explanatory annotations, rationales, and counter-factual considerations for complex edge cases.
            </p>
          </div>

          <div style={{ background: 'var(--sheet)', border: '1px solid var(--rule)', borderRadius: '10px', padding: '28px', display: 'grid', gap: '10px' }}>
            <h3 style={{ fontSize: '18px' }}>Licensing Framework</h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: '1.5' }}>
              All licences grant perpetual, worldwide rights to train, fine-tune, distill, and evaluate machine learning models. The licence strictly forbids public distribution of raw records or attempts to re-identify individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue Request Form */}
      <section id="request">
        <CatalogueForm />
      </section>
    </div>
  );
}
