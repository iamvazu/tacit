import Link from 'next/link';
import type { Metadata } from 'next';
import InteractiveShaderBg from '@/components/InteractiveShaderBg';
import InteractiveConsole from '@/components/InteractiveConsole';
import ValuationSimulator from '@/components/ValuationSimulator';
import MarketTicker from '@/components/MarketTicker';

export const metadata: Metadata = {
  title: 'Tacit | Sovereign Exchange for Private Operational Telemetry',
  description:
    'Tacit brokers clean-title, de-identified private company work records directly to frontier AI labs. 80% to sellers, buyer veto, escrow backed.',
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
            <span>OPERATIONAL DATA BROKERAGE</span>
          </div>

          <h1 className="hero-title">
            The Sovereign Exchange for{' '}
            <span style={{ color: '#00F2FE' }}>Private Operational Telemetry.</span>
          </h1>

          <p className="hero-description">
            Frontier AI models have consumed the public web. We license private, de-identified engineering postmortems, financial reconciliations, and decision trees directly to frontier labs under strict clean-title contracts.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/valuation" className="btn-primary">
              Model Data Valuation →
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

      {/* The Clean Title Architecture & Pipeline Flow */}
      <section className="content-section">
        <div className="section-head">
          <span className="section-badge">Security Architecture</span>
          <h2 className="section-title">
            Air-Gapped Ingestion and Cryptographic Anonymization
          </h2>
          <p className="section-lede">
            Enterprise work records never leave your control until full entity anonymization, cryptographic hashing, and legal rights verification are complete.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#0B0F19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#00F2FE', marginBottom: '14px', fontWeight: 700 }}>
              STAGE I · EXTRACTION
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#FFFFFF', margin: '0 0 12px' }}>
              Air-Gapped Metadata Extraction
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              We extract only decision metadata and procedural work artifacts. Production customer databases, credit card records, and raw proprietary credentials are permanently blocked at source.
            </p>
          </div>

          <div style={{ background: '#0B0F19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#00F2FE', marginBottom: '14px', fontWeight: 700 }}>
              STAGE II · SANITIZATION
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#FFFFFF', margin: '0 0 12px' }}>
              Deterministic Entity Masking
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              All personal names, internal server IPs, tokens, and corporate counter-parties are mapped to cryptographic hashes. Irreversible synthetic substitution guarantees zero re-identification risk.
            </p>
          </div>

          <div style={{ background: '#0B0F19', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '32px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#00F2FE', marginBottom: '14px', fontWeight: 700 }}>
              STAGE III · CLEARING
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#FFFFFF', margin: '0 0 12px' }}>
              Train-Only Model Weights Licencing
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
              Data is licensed strictly for model weights training. Labs cannot publish raw records, redistribute files, or cite your company. You approve every purchasing lab by name.
            </p>
          </div>
        </div>
      </section>

      {/* Immediate Call to Action */}
      <section className="content-section" style={{ textAlign: 'center', padding: '80px 0 60px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="section-badge">Direct Liquidity Access</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 800, margin: '14px 0 20px', color: '#FFFFFF' }}>
            Monetize Operational Telemetry Under Clean Title
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', lineHeight: '1.6', marginBottom: '36px' }}>
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
