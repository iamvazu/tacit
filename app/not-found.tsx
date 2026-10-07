import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      <span className="section-badge">Error 404 · Unindexed Record</span>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)', color: 'var(--text-primary)', margin: 0 }}>
        This Trace Could Not Be Located
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '520px', margin: 0 }}>
        The requested endpoint has been relocated, de-identified, or does not exist in our institutional index.
      </p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn-primary">
          Return to Overview
        </Link>
        <Link href="/valuation" className="btn-secondary">
          Valuation Engine
        </Link>
      </div>
    </div>
  );
}
