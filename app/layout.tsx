import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacit.exchange';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tacit | Licensed Operational Data for AI Training',
    template: '%s | Tacit',
  },
  description:
    'Tacit brokers clean-title, de-identified private company work records (tickets, ledgers, code reviews, domain systems) to frontier AI labs. 80% to sellers, buyer veto, train-only licence.',
  keywords: [
    'AI training data',
    'operational data broker',
    'de-identified work records',
    'enterprise data monetization',
    'frontier AI datasets',
    'decision traces',
    'Inception2c LLC',
  ],
  authors: [{ name: 'Inception2c LLC d/b/a Tacit' }],
  creator: 'Inception2c LLC',
  publisher: 'Inception2c LLC',
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
    title: 'Tacit | Licensed Operational Data for AI Training',
    description:
      'The AI labs already read the internet. They haven’t read how your team works. We check rights, strip identities, and pay you when licensed.',
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: 'Tacit - Licensed Operational Data for AI Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tacit | Licensed Operational Data for AI Training',
    description:
      'We turn private company work records into de-identified training datasets with clean title.',
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
