'use client';

import React from 'react';
import Link from 'next/link';

interface TrancheItem {
  id: string;
  domain: string;
  description: string;
  tokens: string;
  bidRange: string;
  status: 'CLEARED' | 'IN AUDIT' | 'LICENSED';
}

const TRANCHES: TrancheItem[] = [
  {
    id: 'TRANCHE-K8S-902',
    domain: 'Infrastructure & SRE',
    description: '1,420 de-identified Kubernetes & distributed outage resolution trees with terminal replays',
    tokens: '4.8M Tokens',
    bidRange: '$180,000 – $240,000',
    status: 'CLEARED',
  },
  {
    id: 'TRANCHE-FIN-412',
    domain: 'Enterprise ERP',
    description: 'Multi-entity corporate ledger discrepancy investigations & accounting audit trails',
    tokens: '7.2M Tokens',
    bidRange: '$310,000 – $420,000',
    status: 'IN AUDIT',
  },
  {
    id: 'TRANCHE-SWE-705',
    domain: 'Software Architecture',
    description: 'Staff-level code review discussion threads, refactoring rationale & security patches',
    tokens: '11.5M Tokens',
    bidRange: '$490,000 – $650,000',
    status: 'CLEARED',
  },
  {
    id: 'TRANCHE-OPS-330',
    domain: 'Customer Logistics',
    description: 'High-tier supply chain exception escalation resolution workflows & vendor negotiations',
    tokens: '3.1M Tokens',
    bidRange: '$130,000 – $175,000',
    status: 'LICENSED',
  },
];

export default function MarketTicker() {
  return (
    <div className="market-ticker-section">
      <div className="market-ticker-header">
        <div>
          <span className="section-badge">Active Market Tranches</span>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', margin: '4px 0 0', color: 'var(--text-primary)' }}>
            Cleared Operational Datasets in High Demand
          </h3>
        </div>
        <Link href="/buyers" style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', textDecoration: 'none' }}>
          Explore Full Lab Catalogue →
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
                    tranche.status === 'CLEARED'
                      ? 'rgba(16, 185, 129, 0.15)'
                      : tranche.status === 'IN AUDIT'
                      ? 'rgba(245, 158, 11, 0.15)'
                      : 'rgba(59, 130, 246, 0.15)',
                  color:
                    tranche.status === 'CLEARED'
                      ? 'var(--green-verified)'
                      : tranche.status === 'IN AUDIT'
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
