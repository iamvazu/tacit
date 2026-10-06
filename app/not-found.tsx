import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
};

export default function NotFound() {
  return (
    <div style={{ paddingBlock: '100px 80px', textAlign: 'center', display: 'grid', gap: '20px', placeItems: 'center' }}>
      <span className="eyebrow">Error 404 · Missing Record</span>
      <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}>
        This trace could not be located.
      </h1>
      <p className="lede" style={{ textAlign: 'center' }}>
        The page you are looking for has been relocated, de-identified, or does not exist in our index.
      </p>
      <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn">
          Return to Overview
        </Link>
        <Link href="/valuation" className="btn ghost">
          Valuation Estimator
        </Link>
      </div>
    </div>
  );
}
