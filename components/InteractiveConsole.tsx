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
    title: 'Financial Month-End Reconciliation',
    category: 'Enterprise ERP & Accounts',
    totalTime: '2h 31m resolution',
    entitiesMasked: 4,
    complianceHash: '0x8F9B...7E21',
    steps: [
      {
        time: '09:14',
        category: 'Discrepancy Trigger',
        rawText: 'Variance flagged on supplier Hollis Packaging Ltd: invoice £18,400 vs approved PO £16,900.',
        redactedText: 'Variance flagged on supplier [SUPPLIER_#884]: invoice £18,400 vs approved PO £16,900.',
        redactedEntities: ['Hollis Packaging Ltd'],
      },
      {
        time: '09:42',
        category: 'Audit Evidence',
        rawText: 'Audited 3 prior cycles. Found unapproved freight surcharge added in Q2 by account rep Marcus Vance.',
        redactedText: 'Audited 3 prior cycles. Found unapproved freight surcharge added in Q2 by [STAFF_ID_#092].',
        redactedEntities: ['Marcus Vance'],
      },
      {
        time: '10:15',
        category: 'Judgment Call',
        rawText: 'Decided to accrue PO value £16,900 and hold £1,500 balance in dispute rather than full booking.',
        redactedText: 'Decided to accrue PO value £16,900 and hold £1,500 balance in dispute rather than full booking.',
        redactedEntities: [],
      },
      {
        time: '11:45',
        category: 'Executive Sign-off',
        rawText: 'VP Financial Operations Sarah Jenkins approved partial accrual under Dispute Policy 4.2.',
        redactedText: '[EXEC_ROLE_#01] approved partial accrual under Dispute Policy 4.2.',
        redactedEntities: ['Sarah Jenkins'],
      },
    ],
  },
  {
    title: 'Distributed System Incident Resolution',
    category: 'Cloud Infrastructure / SRE',
    totalTime: '1h 14m resolution',
    entitiesMasked: 5,
    complianceHash: '0x3C14...A9D4',
    steps: [
      {
        time: '14:02',
        category: 'PagerDuty Alert',
        rawText: 'P1 incident: Database latency spike on cluster prod-db-primary-us-east at Acme Financial Systems.',
        redactedText: 'P1 incident: Database latency spike on cluster [CLUSTER_HASH_#7A] at [CLIENT_ORG_#019].',
        redactedEntities: ['prod-db-primary-us-east', 'Acme Financial Systems'],
      },
      {
        time: '14:18',
        category: 'Root Cause Isolation',
        rawText: 'Staff SRE Elena Rostova identified leaked connection pool in microservice billing-gateway deployed by PR #4120.',
        redactedText: 'Senior SRE [ENGINEER_#41] identified leaked connection pool in microservice [SERVICE_#03] deployed by PR #4120.',
        redactedEntities: ['Elena Rostova', 'billing-gateway'],
      },
      {
        time: '14:45',
        category: 'Rollback & Failover',
        rawText: 'Initiated traffic drain to warm standby replica; pinned connection limit to max 450.',
        redactedText: 'Initiated traffic drain to warm standby replica; pinned connection limit to max 450.',
        redactedEntities: [],
      },
      {
        time: '15:16',
        category: 'Postmortem Ratification',
        rawText: 'Latency normalised to 4.2ms. Incident postmortem authored with zero data loss.',
        redactedText: 'Latency normalised to 4.2ms. Incident postmortem authored with zero data loss.',
        redactedEntities: [],
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
          <span>OPERATIONAL TRACE PIPELINE</span>
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
            {showRedacted ? '✓ Sanitized Mode' : '⚠ Raw Inspection'}
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
            Switch Example ↻
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {currentTrace.steps.map((step, idx) => (
          <div key={idx} className="trace-item active-step">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span>{step.time} UTC</span>
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
          TITLE CLEARED · HASH: {currentTrace.complianceHash}
        </span>
        <span style={{ color: 'var(--green-verified)' }}>
          {currentTrace.entitiesMasked} Identities Neutralized
        </span>
      </div>
    </div>
  );
}
