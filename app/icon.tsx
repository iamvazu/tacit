import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#141011',
          borderRadius: '4px',
          border: '1.5px solid #F59E0B',
          color: '#FFFFFF',
          fontWeight: 900,
          fontSize: '20px',
          fontFamily: 'sans-serif',
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
