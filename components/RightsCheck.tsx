'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  q: string;
  s: string;
  explainer: string;
  fix: string;
  hard?: boolean;
  invert?: boolean;
}

const QUESTIONS: Question[] = [
  {
    q: 'Does your company own the systems and the data in them?',
    s: 'Not a client\'s or a parent company\'s data held on their behalf.',
    explainer: 'Data brokers cannot license records where legal title or controller status belongs to a third party. If you are an agency, outsourcing firm, or processor holding client data, licensing requires explicit permission from that client.',
    fix: 'Confirm ownership; client-held data needs client consent.',
    hard: true,
  },
  {
    q: 'Do your customer contracts allow internal data to be used beyond the service?',
    s: 'Look for confidentiality and "use of data" clauses.',
    explainer: 'Many master service agreements (MSAs) or vendor contracts contain broad confidentiality clauses forbidding any disclosure or transfer of operational records generated during customer engagements.',
    fix: 'Exclude data covered by restrictive customer contracts.',
  },
  {
    q: 'Have employees been told their work records may be licensed?',
    s: 'Required or advisable under DPDP, GDPR and many employment laws.',
    explainer: 'Even after de-identification, labor and data privacy regulations across India, the EU, the UK, and California require companies to provide clear transparency notices regarding secondary processing of employee communications and telemetry.',
    fix: 'Send an employee notice before access (we provide a template).',
  },
  {
    q: 'Is any of it health, biometric or children\'s data?',
    s: 'Answer "Yes" if any of it is.',
    explainer: 'Protected health information (HIPAA in the US), biometric identifiers, and data relating to minors carry special statutory restrictions and strict non-commercial barriers requiring rigorous legal clearance.',
    fix: 'Sensitive categories need specialist review or exclusion.',
    invert: true,
  },
  {
    q: 'Is your board or leadership aware and on side?',
    s: 'Deals stall when this comes up late.',
    explainer: 'Corporate governance requires that licensing company assets—even de-identified operational traces—has authorization from legal counsel and key executive stakeholders before data processing begins.',
    fix: 'Get written sign-off from a director.',
  },
  {
    q: 'Can you exclude trade secrets you don\'t want shared?',
    s: 'Pricing, roadmaps, specific clients, source code.',
    explainer: 'Data licensing is focused on task execution and professional reasoning, not proprietary patent filings, unreleased roadmaps, or customer pricing matrices. You must have the ability to filter sensitive channels.',
    fix: 'List exclusions before connection.',
  },
];

export default function RightsCheck() {
  const [answers, setAnswers] = useState<Record<number, 'y' | 'n'>>({});
  const [activeExplain, setActiveExplain] = useState<number | null>(null);

  const handleAnswer = (index: number, answer: 'y' | 'n') => {
    setAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const answeredCount = Object.keys(answers).length;
  const problems = QUESTIONS.map((x, i) => ({ x, i })).filter(
    ({ x, i }) => answers[i] && ((x.invert && answers[i] === 'y') || (!x.invert && answers[i] === 'n'))
  );

  const hasHardStop = problems.some((p) => p.x.hard);

  let stateClass = 'state';
  let stateText = `${answeredCount} of ${QUESTIONS.length} answered`;
  let headerText = 'Your readiness';

  if (answeredCount === 0) {
    stateText = 'Answer the questions';
  } else if (hasHardStop) {
    stateClass = 'state stop';
    stateText = 'Stop: ownership unclear';
    headerText = 'Sort out ownership first';
  } else if (problems.length > 0) {
    stateClass = 'state fix';
    stateText = `${problems.length} to fix`;
    headerText = 'Fixable before a sale';
  } else if (answeredCount === QUESTIONS.length) {
    stateClass = 'state ready';
    stateText = 'Ready to list';
    headerText = 'Good to book a call';
  }

  return (
    <div className="check">
      <div className="qlist">
        {QUESTIONS.map((item, idx) => (
          <div key={idx} className="q" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', padding: '20px 24px', borderBottom: '1px solid var(--rule)' }}>
            <div>
              <p style={{ fontWeight: 600 }}>{item.q}</p>
              <small style={{ color: 'var(--ink-2)', marginTop: '4px', display: 'block' }}>{item.s}</small>
              <button
                type="button"
                onClick={() => setActiveExplain(activeExplain === idx ? null : idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--teal)',
                  font: '500 12px var(--f-mono)',
                  cursor: 'pointer',
                  padding: 0,
                  marginTop: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {activeExplain === idx ? '▾ Hide legal explainer' : '▸ Why does this matter?'}
              </button>
              {activeExplain === idx && (
                <div
                  style={{
                    marginTop: '10px',
                    padding: '12px 14px',
                    background: 'var(--paper)',
                    borderRadius: '6px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    color: 'var(--ink)',
                  }}
                >
                  {item.explainer}
                </div>
              )}
            </div>

            <div className="yn" role="group" aria-label={`Answer for question ${idx + 1}`}>
              <button
                type="button"
                className={`y ${answers[idx] === 'y' ? 'active' : ''}`}
                aria-pressed={answers[idx] === 'y'}
                onClick={() => handleAnswer(idx, 'y')}
              >
                Yes
              </button>
              <button
                type="button"
                className={`n ${answers[idx] === 'n' ? 'active' : ''}`}
                aria-pressed={answers[idx] === 'n'}
                onClick={() => handleAnswer(idx, 'n')}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className="verdict" aria-live="polite">
        <span className={stateClass}>{stateText}</span>
        <h3 id="vHead">{headerText}</h3>

        <ul>
          {problems.map((p) => (
            <li key={p.i}>{p.x.fix}</li>
          ))}
          {answeredCount === QUESTIONS.length && problems.length === 0 && (
            <li>Bring this checklist to your valuation call. All baseline requirements satisfied.</li>
          )}
          {answeredCount === 0 && (
            <li style={{ listStyle: 'none' }}>Answer the six questions to generate your data readiness analysis.</li>
          )}
        </ul>

        {answeredCount === QUESTIONS.length && problems.length === 0 && (
          <Link href="/valuation#valuation-form" className="btn" style={{ marginTop: '12px' }}>
            Book valuation call
          </Link>
        )}
      </aside>
    </div>
  );
}
