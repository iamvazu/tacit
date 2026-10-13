import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacit.exchange';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tacit | Your Old Records Are Worth Six Figures to AI Labs',
    template: '%s | Tacit',
  },
  description:
    'AI labs are paying established firms six and seven figures to license de-identified copies of their emails, files, and records. Tacit handles the entire sale.',
  keywords: [
    'AI training data licensing',
    'data licensing for business owners',
    'de-identified business records',
    'monetize company records',
    'Pewter data',
    'Tacit',
  ],
  authors: [{ name: 'Tacit' }],
  creator: 'Tacit',
  publisher: 'Tacit',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Tacit',
    title: 'Tacit | Your Old Records Are Worth Six Figures to AI Labs',
    description:
      'Established firms are being paid $350K to $1M+ to license de-identified copies of their everyday records. We handle the entire sale.',
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Tacit - Turn Your Firm’s Records Into Six Figures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacit | Your Old Records Are Worth Six Figures to AI Labs',
    description:
      'Established firms are being paid six figures to license de-identified copies of their records. We run the entire sale.',
    images: [`${siteUrl}/api/og`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tacit',
    legalName: 'Inception2c LLC',
    alternateName: 'Tacit Exchange',
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      'A broker that licenses de-identified company work data (tickets, ledgers, code history, documents, domain-system records) to AI labs for model training.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: process.env.CONTACT_EMAIL || 'YOUR_EMAIL',
      contactType: 'customer support and data licensing',
    },
    sameAs: ['https://github.com/iamvazu/tacit'],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="wrap" style={{ flex: 1, paddingBottom: '40px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
