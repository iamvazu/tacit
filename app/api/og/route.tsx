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
          padding: '60px 70px',
          backgroundColor: '#F8F7F4',
          color: '#141011',
          fontFamily: 'sans-serif',
          border: '16px solid #141011',
          boxSizing: 'border-box',
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#141011',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '24px',
                boxShadow: '4px 4px 0px #F59E0B',
              }}
            >
              T
            </div>
            <span style={{ fontSize: '36px', fontWeight: 900, letterSpacing: '-0.03em', color: '#141011' }}>
              Tacit
            </span>
            <span
              style={{
                marginLeft: '12px',
                padding: '6px 14px',
                borderRadius: '4px',
                backgroundColor: '#FEF3C7',
                border: '1.5px solid #FDE047',
                color: '#92400E',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Inception2c LLC
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '4px',
              backgroundColor: '#DCFCE7',
              border: '1.5px solid #86EFAC',
              color: '#15803D',
              fontSize: '15px',
              fontWeight: 800,
            }}
          >
            <span>■</span>
            <span>$350K – $1M+ LIVE MARKET DEALS</span>
          </div>
        </div>

        {/* Central Core Pitch */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '10px' }}>
          <div
            style={{
              fontSize: '54px',
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: '-0.035em',
              color: '#141011',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            Your old records are worth{' '}
            <span
              style={{
                backgroundColor: '#FEF3C7',
                color: '#B45309',
                padding: '0 12px',
                borderRadius: '6px',
                border: '2px solid #FDE047',
                marginLeft: '10px',
                marginRight: '10px',
              }}
            >
              six figures
            </span>{' '}
            to AI labs.
          </div>

          <p
            style={{
              fontSize: '22px',
              color: '#4A4646',
              lineHeight: 1.45,
              maxWidth: '960px',
              margin: 0,
              fontWeight: 500,
            }}
          >
            AI labs are paying established firms six and seven figures to license de-identified copies of everyday work records. Tacit handles the entire sale.
          </p>
        </div>

        {/* Trust Badges & Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #E4E0D7',
            paddingTop: '24px',
            fontSize: '18px',
            fontWeight: 700,
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#15803D' }}>
            <span>✓ Zero Cost to You</span>
            <span>✓ 100% Confidential</span>
            <span>✓ You Keep Your Originals</span>
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '20px',
              fontWeight: 800,
              color: '#141011',
              backgroundColor: '#FFFFFF',
              padding: '6px 14px',
              border: '2px solid #141011',
              borderRadius: '4px',
              boxShadow: '3px 3px 0px #141011',
            }}
          >
            tacit.exchange
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
