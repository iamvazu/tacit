import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0C141B',
          color: '#E7ECEA',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '36px',
              height: '16px',
              backgroundColor: '#4FC1B6',
              borderRadius: '3px',
            }}
          />
          <span style={{ fontSize: '38px', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Tacit
          </span>
          <span
            style={{
              marginLeft: '16px',
              padding: '6px 14px',
              borderRadius: '99px',
              backgroundColor: '#13302E',
              color: '#4FC1B6',
              fontSize: '18px',
              fontWeight: 600,
            }}
          >
            Inception2c LLC
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            Licensed Operational Data for AI Training
          </h1>
          <p
            style={{
              fontSize: '24px',
              color: '#A3B0B8',
              lineHeight: 1.4,
              maxWidth: '900px',
              margin: 0,
            }}
          >
            We broker clean-title, de-identified company work records — tickets, ledgers, code reviews, and domain traces — to frontier AI labs.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #26343F',
            paddingTop: '30px',
            fontSize: '20px',
            color: '#4FC1B6',
          }}
        >
          <span>80% to sellers · Escrow backed · Train-only licence</span>
          <span style={{ color: '#A3B0B8' }}>tacit.exchange</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
