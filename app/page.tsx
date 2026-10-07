import Link from 'next/link';
import type { Metadata } from 'next';
import InteractiveShaderBg from '@/components/InteractiveShaderBg';
import InteractiveConsole from '@/components/InteractiveConsole';
import ValuationSimulator from '@/components/ValuationSimulator';
import MarketTicker from '@/components/MarketTicker';

export const metadata: Metadata = {
  title: 'Tacit | Sovereign Exchange for Private Operational Telemetry',
  description:
    'Tacit brokers clean-title, de-identified private company work records (engineering incidents, financial ledgers, code reviews) directly to frontier AI labs. 80% to sellers, buyer veto, escrow backed.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Interactive WebGPU Shader */}
      <section className="hero-stage">
        <InteractiveShaderBg />

        <div className="hero-copy">
          <div className="hero-badge">
            <span className="live-pulse-dot" />
            <span>CLEAN-TITLE DATA CLEARINGHOUSE</span>
          </div>

          <h1 className="hero-title">
            The Sovereign Exchange for{' '}
            <span className="gradient-text">Private Operational Telemetry.</span>
          </h1>

          <p className="hero-description">
            Frontier AI models have consumed the public web. We license private, de-identified engineering postmortems, financial reconciliations, and decision trees directly to frontier labs under strict clean-title contracts.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/valuation" className="btn-primary">
              Model Your Data Valuation →
            </Link>
            <Link href="/buyers" className="btn-secondary">
              Explore Lab Catalogue
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="hero-stat-number">80%</span>
              <span className="hero-stat-label">Gross proceeds paid to data sellers</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Named buyer veto before any transfer</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">Zero</span>
              <span className="hero-stat-label">Third-party customer PII retained</span>
            </div>
          </div>
        </div>

        {/* Right Stage: Interactive Redaction & Telemetry Console */}
        <div>
          <InteractiveConsole />
        </div>
      </section>

      {/* Live Market Tranches Ticker */}
      <MarketTicker />

      {/* Interactive On-Page Valuation Simulator */}
      <section className="content-section" id="valuation-engine">
        <ValuationSimulator />
      </section>

      {/* The Clean Title Architecture & Security Pipeline */}
      <section className="content-section">
        <div className="section-head">
          <span className="section-badge">Security Architecture</span>
          <h2 className="section-title">
            Engineered for Zero Data Leakage and Unassailable Clean Title
          </h2>
          <p className="section-lede">
            Enterprise work records never leave your control until full entity anonymization, cryptographic hashing, and legal rights verification are complete.
          </p>
        </div>

        <div className="feature-grid-3">
          <div className="feature-card">
            <div className="card-icon">01</div>
            <h3 className="card-title">Air-Gapped Ingestion Audit</h3>
            <p className="card-desc">
              We extract only decision metadata and procedural work artifacts. Production databases, customer credit card records, and raw proprietary credentials are permanently blocked at source.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">02</div>
            <h3 className="card-title">Deterministic Anonymization</h3>
            <p className="card-desc">
              All personal names, internal server IPs, tokens, and corporate counter-parties are mapped to cryptographic hashes. Irreversible synthetic masking ensures zero re-identification risk.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">03</div>
            <h3 className="card-title">Pre-Training Only Licences</h3>
            <p className="card-desc">
              Data is licensed strictly for model weights training. Labs cannot publish raw records, redistribute files, or cite your company. You approve every purchasing lab by name.
            </p>
          </div>
        </div>
      </section>

      {/* Public Web vs Private Work Records Gap */}
      <section className="content-section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="section-head">
          <span className="section-badge">The Pre-Training Frontier</span>
          <h2 className="section-title">
            Why Frontier Labs Bid Aggressively for Internal Work Telemetry
          </h2>
          <p className="section-lede">
            General web scrapers have saturated public text. Complex multi-step reasoning models require high-entropy real-world human problem-solving traces.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          <div
            style={{
              background: 'rgba(239, 68, 68, 0.05)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              borderRadius: '16px',
              padding: '36px',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#EF4444', marginBottom: '12px', fontWeight: 600 }}>
              EXHAUSTED SOURCE
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--text-primary)', margin: '0 0 16px' }}>
              Public Web & Open Source
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
              Forums, documentation, and public Git repositories have been repeatedly scraped by every foundation model. Adding more public text yields severe diminishing returns and hallucination traps.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(0, 242, 254, 0.05)',
              border: '1px solid var(--border-glow)',
              borderRadius: '16px',
              padding: '36px',
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--cyan-primary)', marginBottom: '12px', fontWeight: 600 }}>
              UNTOUCHED ENTERPRISE VALUE
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--text-primary)', margin: '0 0 16px' }}>
              Private Company Work Traces
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
              Real incident postmortems, complex code refactoring discussions, Jira triage branches, and financial dispute settlements represent the rarest, highest-density training signal in existence.
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Call to Action */}
      <section className="content-section" style={{ textAlign: 'center', padding: '100px 0 60px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-badge">Direct Liquidity Access</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 700, margin: '14px 0 20px', color: 'var(--text-primary)' }}>
            Turn Locked Work Artifacts Into Verified Balance Sheet Revenue
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: '1.6', marginBottom: '36px' }}>
            Schedule an initial 20-minute valuation conversation. We conduct a preliminary rights scan and deliver an indicative price band under mutual NDA.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/valuation" className="btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Schedule Valuation Call →
            </Link>
            <Link href="/rights-check" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '16px' }}>
              Check Legal Rights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
