import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tacit.exchange';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#f8f7f4',
  colorScheme: 'light',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tacit | Your Old Records Are Worth Six Figures to AI Labs',
    template: '%s | Tacit',
  },
  description:
    'AI labs are paying established firms $350K to $1M+ to license de-identified copies of their emails, files, and everyday records. Tacit handles the entire sale. Zero cost to you.',
  keywords: [
    'AI training data licensing',
    'data licensing for business owners',
    'de-identified business records',
    'monetize company records',
    'enterprise data broker',
    'sell company email data to AI',
    'Pewter data',
    'Tacit',
    'Tacit Exchange',
    'AI dataset monetization',
  ],
  authors: [{ name: 'Tacit', url: siteUrl }],
  creator: 'Tacit',
  publisher: 'Inception2c LLC',
  category: 'Business & Finance',
  classification: 'AI Data Licensing Brokerage',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
    creator: '@tacitexchange',
    site: '@tacitexchange',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.svg',
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    /* GEO Meta Tags */
    'geo.region': 'US-DE',
    'geo.placename': 'Delaware, United States',
    'geo.position': '39.1582;-75.5244',
    'ICBM': '39.1582, -75.5244',

    /* Mobile, Apple & Browser Experience */
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Tacit',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Tacit',

    /* AEO / Answer Engine Directives */
    'audience': 'Business Owners, Founders, Managing Partners, Controllers',
    'distribution': 'global',
    'rating': 'general',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Tacit',
        legalName: 'Inception2c LLC',
        alternateName: 'Tacit Exchange',
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        description:
          'An independent data broker licensing clean-title, de-identified enterprise operational records to AI labs for model training.',
        contactPoint: {
          '@type': 'ContactPoint',
          email: process.env.CONTACT_EMAIL || 'deals@tacit.exchange',
          contactType: 'customer support and data licensing',
          areaServed: 'US',
          availableLanguage: ['English'],
        },
        sameAs: ['https://github.com/iamvazu/tacit'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Tacit',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
        description:
          'AI labs are paying established firms six and seven figures to license de-identified copies of everyday work records.',
      },
      {
        '@type': 'FinancialService',
        '@id': `${siteUrl}/#service`,
        name: 'Data Licensing Brokerage',
        serviceType: 'Enterprise Operational Data Valuation & Licensing',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        description:
          'Brokering de-identified operational email, dispatch, and workpaper archives to frontier AI research labs with zero upfront cost to business owners.',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          description: 'Zero cost valuation and negotiation to data owners.',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this real money, or a sales pitch?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It is real money. Accounting firms, freight brokers, and engineering firms with 50 to 100 people have already received payments of $350,000 to $650,000. Google paid $10 million for Spirit Airlines’ records in federal court. Your offer comes in a binding written agreement before you commit to anything.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does this cost me?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nothing at any stage. You pay zero upfront, zero for valuation, and zero for de-identification. If no deal is made, or if you decline the offer, you owe nothing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I lose my data or ownership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. You license a de-identified copy. You keep 100% ownership of your original files, your business keeps operating normally, and nothing is deleted or taken away from your systems.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will my clients or employees be exposed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Never. Names, phone numbers, email addresses, credit cards, bank accounts, and passwords are removed or replaced with generic placeholders before delivery. You inspect a sample of the scrubbed data before signing.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
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
