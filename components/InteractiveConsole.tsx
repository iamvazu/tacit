'use client';

import React, { useState } from 'react';

interface TraceStep {
  time: string;
  category: string;
  rawText: string;
  redactedText: string;
  redactedEntities: string[];
}

interface DatasetTrace {
  title: string;
  category: string;
  totalTime: string;
  entitiesMasked: number;
  complianceHash: string;
  steps: TraceStep[];
}

const TRACES: DatasetTrace[] = [
  {
    title: 'Freight Dispatch & Exception (Logistics)',
    category: 'Trucking & 3PL Records',
    totalTime: 'Real-world problem solving',
    entitiesMasked: 4,
    complianceHash: 'Protected',
    steps: [
      {
        time: '03:40 AM',
        category: 'Urgent Alert',
        rawText: 'Reefer temperature alarm on Load #48213 from shipper Ortega Produce.',
        redactedText: 'Reefer temperature alarm on Load [LOAD_#0291] from shipper [SHIPPER_#31].',
        redactedEntities: ['Ortega Produce', '#48213'],
      },
      {
        time: '04:12 AM',
        category: 'Driver Reroute',
        rawText: 'Driver Luis Paredes (417-555-0182) near Joplin, MO rerouted to Springfield Cold Storage.',
        redactedText: 'Driver [DRIVER_#19] ([PHONE]) near [CITY_#44] rerouted to [FACILITY_#08].',
        redactedEntities: ['Luis Paredes', '417-555-0182', 'Joplin, MO', 'Springfield Cold Storage'],
      },
      {
        time: '05:00 AM',
        category: 'Carrier Claim',
        rawText: 'Broker rep Dana Whitfield filed claim with carrier MC 774512; product held for inspection.',
        redactedText: 'Broker rep [STAFF_#07] filed claim with carrier [CARRIER_#82]; product held for inspection.',
        redactedEntities: ['Dana Whitfield', 'MC 774512'],
      },
    ],
  },
  {
    title: 'Month-End Accounting Reconciliation',
    category: 'Bookkeeping & Workpapers',
    totalTime: 'Financial problem solving',
    entitiesMasked: 4,
    complianceHash: 'Protected',
    steps: [
      {
        time: '09:14 AM',
        category: 'Discrepancy Found',
        rawText: 'Variance flagged on supplier Hollis Packaging Ltd: invoice £18,400 vs approved PO £16,900.',
        redactedText: 'Variance flagged on supplier [SUPPLIER_#884]: invoice £18,400 vs approved PO £16,900.',
        redactedEntities: ['Hollis Packaging Ltd'],
      },
      {
        time: '09:42 AM',
        category: 'Audit Evidence',
        rawText: 'Audited 3 prior cycles. Found unapproved freight surcharge added in Q2 by account rep Marcus Vance.',
        redactedText: 'Audited 3 prior cycles. Found unapproved freight surcharge added in Q2 by [STAFF_ID_#092].',
        redactedEntities: ['Marcus Vance'],
      },
      {
        time: '10:15 AM',
        category: 'Judgment Call',
        rawText: 'Decided to accrue PO value £16,900 and hold £1,500 balance in dispute rather than full booking.',
        redactedText: 'Decided to accrue PO value £16,900 and hold £1,500 balance in dispute rather than full booking.',
        redactedEntities: [],
      },
      {
        time: '11:45 AM',
        category: 'Owner Approval',
        rawText: 'Controller Sarah Jenkins approved partial accrual under Dispute Policy 4.2.',
        redactedText: 'Controller [STAFF_#01] approved partial accrual under Dispute Policy 4.2.',
        redactedEntities: ['Sarah Jenkins'],
      },
    ],
  },
];

export default function InteractiveConsole() {
  const [selectedTraceIdx, setSelectedTraceIdx] = useState(0);
  const [showRedacted, setShowRedacted] = useState(true);
  const currentTrace = TRACES[selectedTraceIdx];

  return (
    <div className="telemetry-console-card">
      <div className="console-header">
        <div className="console-title">
          <span className="live-pulse-dot" />
          <span>YOUR CLIENTS & STAFF ARE NEVER NAMED</span>
        </div>
        <div className="console-window-dots">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
            {currentTrace.title}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {currentTrace.category} · {currentTrace.totalTime}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setShowRedacted(!showRedacted)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border-glow)',
              background: showRedacted ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              color: showRedacted ? 'var(--cyan-primary)' : 'var(--text-secondary)',
            }}
          >
            {showRedacted ? '✓ De-Identified Copy' : 'Original (Stays With You)'}
          </button>

          <button
            type="button"
            onClick={() => setSelectedTraceIdx((prev) => (prev + 1) % TRACES.length)}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border-subtle)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--text-secondary)',
            }}
          >
            Next Example ↻
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentTrace.steps.map((step, idx) => (
          <div key={idx} className="trace-item active-step">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>{step.time}</span>
              <span style={{ color: 'var(--cyan-primary)' }}>{step.category}</span>
            </div>
            <div style={{ color: 'var(--text-primary)', lineHeight: '1.5' }}>
              {showRedacted ? (
                <span>
                  {step.redactedText.split(/(\[[^\]]+\])/g).map((part, i) =>
                    part.startsWith('[') && part.endsWith(']') ? (
                      <span key={i} className="redaction-tag">
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </span>
              ) : (
                <span style={{ color: '#FCA5A5' }}>{step.rawText}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '16px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green-verified)' }} />
          You keep your originals · Real identities scrubbed
        </span>
        <span style={{ color: 'var(--green-verified)' }}>
          100% Confidential
        </span>
      </div>
    </div>
  );
}
