'use client';

import React from 'react';
import Link from 'next/link';

interface TrancheItem {
  id: string;
  domain: string;
  description: string;
  tokens: string;
  bidRange: string;
  status: 'PAID' | 'VERIFIED' | 'COMPLETED';
}

const TRANCHES: TrancheItem[] = [
  {
    id: 'DEAL-LOGISTICS',
    domain: 'Freight Broker · 100 people',
    description: 'Rate quotes, shipment documents, dispatch records, delivery exceptions, and freight claims.',
    tokens: 'Paid to business',
    bidRange: '$650,000',
    status: 'PAID',
  },
  {
    id: 'DEAL-ENGINEERING',
    domain: 'Engineering Firm · 70 people',
    description: 'CAD drawings, structural calculations, technical reports, revisions, and project specifications.',
    tokens: 'Paid to business',
    bidRange: '$450,000',
    status: 'PAID',
  },
  {
    id: 'DEAL-ACCOUNTING',
    domain: 'Accounting Firm · 60 people',
    description: 'Five years of workpapers, account reconciliations, financial models, and tax-preparation files.',
    tokens: 'Paid to business',
    bidRange: '$350,000',
    status: 'PAID',
  },
  {
    id: 'DEAL-DISTRIBUTION',
    domain: 'Industrial Distribution',
    description: 'Operating communications, product knowledge, order history, and supplier correspondence.',
    tokens: 'Paid to business',
    bidRange: '$1,200,000',
    status: 'PAID',
  },
];

export default function MarketTicker() {
  return (
    <div className="market-ticker-section" id="deals">
      <div className="market-ticker-header">
        <div>
          <span className="section-badge">Recent Market Proof</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', margin: '4px 0 0', color: 'var(--text-primary)' }}>
            Recent Licensing Payments to Firms Like Yours
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
            Published across the data licensing market in 2026. Real companies paid six and seven figures for everyday records.
          </p>
        </div>
        <Link href="/valuation" style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', textDecoration: 'none' }}>
          Estimate What Yours Are Worth →
        </Link>
      </div>

      <div className="market-ticker-grid">
        {TRANCHES.map((tranche) => (
          <div key={tranche.id} className="tranche-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tranche-tag">{tranche.id}</span>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background:
                    tranche.status === 'PAID'
                      ? 'rgba(16, 185, 129, 0.15)'
                      : tranche.status === 'VERIFIED'
                      ? 'rgba(245, 158, 11, 0.15)'
                      : 'rgba(59, 130, 246, 0.15)',
                  color:
                    tranche.status === 'PAID'
                      ? 'var(--green-verified)'
                      : tranche.status === 'VERIFIED'
                      ? 'var(--amber-warn)'
                      : 'var(--blue-accent)',
                  border: '1px solid currentColor',
                }}
              >
                {tranche.status}
              </span>
            </div>

            <h4 className="tranche-title">{tranche.domain}</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
              {tranche.description}
            </p>

            <div className="tranche-meta">
              <span>{tranche.tokens}</span>
              <span className="tranche-bid">{tranche.bidRange}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
