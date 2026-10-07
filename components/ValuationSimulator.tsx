'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ValuationSimulator() {
  const [teamSize, setTeamSize] = useState<number>(85);
  const [years, setYears] = useState<number>(3);
  const [hasEng, setHasEng] = useState<boolean>(true);
  const [hasOps, setHasOps] = useState<boolean>(true);
  const [hasFin, setHasFin] = useState<boolean>(true);

  // Dynamic formula based on verified operational value coefficients
  const artifactMultiplier = (hasEng ? 1.0 : 0) + (hasOps ? 0.7 : 0) + (hasFin ? 0.8 : 0);
  const baseGross = Math.round(teamSize * years * 680 * (artifactMultiplier || 0.5));
  const minGross = Math.round(baseGross * 0.75);
  const maxGross = Math.round(baseGross * 1.6);
  const minNet = Math.round(minGross * 0.8);
  const maxNet = Math.round(maxGross * 0.8);

  const formatCurrency = (val: number) => {
    return '$' + val.toLocaleString('en-US');
  };

  return (
    <div className="valuation-simulator-container">
      <div>
        <span className="section-badge">Live Valuation Engine</span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', margin: '0 0 16px', color: 'var(--text-primary)' }}>
          Model Your Company’s Data Asset Value
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '28px' }}>
          Adjust your organization size and historical repository depth to project total licence revenue from frontier pre-training buyers.
        </p>

        <div className="slider-group">
          <div className="slider-label-row">
            <span style={{ color: 'var(--text-primary)' }}>Engineering & Operations Headcount</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>{teamSize} team members</span>
          </div>
          <input
            type="range"
            min={10}
            max={500}
            step={5}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="range-slider"
          />
        </div>

        <div className="slider-group">
          <div className="slider-label-row">
            <span style={{ color: 'var(--text-primary)' }}>Historical Data Depth</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>{years} {years === 1 ? 'year' : 'years'} of operational logs</span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="range-slider"
          />
        </div>

        <div style={{ marginTop: '24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '12px' }}>
            SELECT ACTIVE REPOSITORIES:
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setHasEng(!hasEng)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: hasEng ? 'var(--cyan-primary)' : 'var(--border-subtle)',
                background: hasEng ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                color: hasEng ? 'var(--cyan-primary)' : 'var(--text-muted)',
              }}
            >
              {hasEng ? '✓' : '+'} Engineering (GitHub / Jira)
            </button>
            <button
              type="button"
              onClick={() => setHasOps(!hasOps)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: hasOps ? 'var(--cyan-primary)' : 'var(--border-subtle)',
                background: hasOps ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                color: hasOps ? 'var(--cyan-primary)' : 'var(--text-muted)',
              }}
            >
              {hasOps ? '✓' : '+'} Operations & Support Logs
            </button>
            <button
              type="button"
              onClick={() => setHasFin(!hasFin)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                border: '1px solid',
                borderColor: hasFin ? 'var(--cyan-primary)' : 'var(--border-subtle)',
                background: hasFin ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255,255,255,0.03)',
                color: hasFin ? 'var(--cyan-primary)' : 'var(--text-muted)',
              }}
            >
              {hasFin ? '✓' : '+'} Financial Ledgers & ERP
            </button>
          </div>
        </div>
      </div>

      <div className="sim-output-box">
        <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          PROJECTED 80% SELLER PAYOUT
        </div>
        <div className="sim-amount-display">
          {formatCurrency(minNet)} – {formatCurrency(maxNet)}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Total gross licence value: {formatCurrency(minGross)} – {formatCurrency(maxGross)}.<br />
          Tacit retains only 20% on executed delivery.
        </div>

        <Link
          href={`/valuation?team_size=${teamSize}&years=${years}`}
          className="btn-primary"
          style={{ width: '100%' }}
        >
          Book 20-Minute Valuation Call
        </Link>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px', display: 'block' }}>
          NDA signed before inspecting sample metadata. Zero commitment.
        </span>
      </div>
    </div>
  );
}
