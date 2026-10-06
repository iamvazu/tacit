'use client';

import { useState, useId } from 'react';

export interface EstimateState {
  industry: string;
  industryLabel: string;
  heads: number;
  years: number;
  sources: string[];
  region: string;
  experts: boolean;
  rangeStr: string;
  netStr: string;
}

interface EstimatorProps {
  onEstimateChange?: (estimate: EstimateState) => void;
  ctaTargetId?: string;
}

export default function Estimator({ onEstimateChange, ctaTargetId = 'valuation-form' }: EstimatorProps) {
  const formId = useId();

  const [industryVal, setIndustryVal] = useState<number>(1.20);
  const [industryName, setIndustryName] = useState<string>('Software');
  const [heads, setHeads] = useState<number>(120);
  const [years, setYears] = useState<number>(6);
  const [selectedSources, setSelectedSources] = useState<string[]>(['Messages', 'Documents', 'Records']);
  const [region, setRegion] = useState<string>('United States');
  const [experts, setExperts] = useState<boolean>(false);

  const industries = [
    { label: 'Accounting & bookkeeping', val: 1.30 },
    { label: 'Legal', val: 1.50 },
    { label: 'Chemistry & lab sciences', val: 1.75 },
    { label: 'Semiconductors & electronics', val: 1.85 },
    { label: 'Healthcare & clinical (extra review)', val: 1.60 },
    { label: 'Financial services', val: 1.45 },
    { label: 'Insurance', val: 1.40 },
    { label: 'Software', val: 1.20 },
    { label: 'Manufacturing', val: 1.15 },
    { label: 'Logistics & packaging', val: 1.00 },
    { label: 'Customer support / BPO', val: 0.95 },
    { label: 'Construction & engineering', val: 1.05 },
    { label: 'Other', val: 1.00 },
  ];

  const sourceWeights: Record<string, number> = {
    'Messages': 0.25,
    'Code': 0.30,
    'Documents': 0.20,
    'Records': 0.22,
    'Tasks': 0.25,
    'Domain systems': 0.45,
  };

  const fmt = (n: number) => {
    if (n >= 1e6) {
      return '$' + (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + 'M';
    }
    return '$' + Math.round(n / 1e3) + 'K';
  };

  const base = 6500 * Math.pow(heads, 0.6) * industryVal * (1 + Math.min(years, 20) * 0.045);
  const parts = selectedSources.map((name) => ({
    name,
    v: base * (sourceWeights[name] || 0.2),
  }));

  let mid = parts.reduce((acc, p) => acc + p.v, 0);
  if (experts) {
    mid *= 1.3;
  }

  const hasSources = selectedSources.length > 0;
  const lo = hasSources ? Math.max(10000, mid * 0.5) : 0;
  const hi = hasSources ? Math.max(25000, mid * 1.4) : 0;
  const maxVal = parts.length > 0 ? Math.max(...parts.map((p) => p.v), 1) : 1;

  const rangeStr = hasSources ? `${fmt(lo)} – ${fmt(hi)}` : 'Pick a source';
  const netStr = hasSources ? `You keep ${fmt(lo * 0.8)} – ${fmt(hi * 0.8)} after our 20% fee` : '';

  const handleSourceToggle = (src: string) => {
    const updated = selectedSources.includes(src)
      ? selectedSources.filter((s) => s !== src)
      : [...selectedSources, src];
    setSelectedSources(updated);
  };

  const scrollToForm = () => {
    const el = document.getElementById(ctaTargetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="est">
      <form className="panel" id={`est-${formId}`} onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor={`industry-${formId}`}>Industry</label>
          <select
            id={`industry-${formId}`}
            value={industryVal}
            onChange={(e) => {
              const val = parseFloat(e.target.value);
              const found = industries.find((i) => i.val === val);
              setIndustryVal(val);
              if (found) setIndustryName(found.label);
            }}
          >
            {industries.map((ind) => (
              <option key={ind.label} value={ind.val}>
                {ind.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor={`heads-${formId}`}>Team size</label>
          <div className="range-row">
            <input
              type="range"
              id={`heads-${formId}`}
              min="5"
              max="5000"
              step="5"
              value={heads}
              onChange={(e) => setHeads(parseInt(e.target.value, 10))}
            />
            <output className="num">{heads.toLocaleString()}</output>
          </div>
        </div>

        <div className="field">
          <label htmlFor={`years-${formId}`}>Years of history in your tools</label>
          <div className="range-row">
            <input
              type="range"
              id={`years-${formId}`}
              min="1"
              max="25"
              value={years}
              onChange={(e) => setYears(parseInt(e.target.value, 10))}
            />
            <output className="num">{years} yrs</output>
          </div>
        </div>

        <div className="field">
          <span className="legend">Sources you could connect</span>
          <div className="chips">
            {Object.keys(sourceWeights).map((src) => {
              const checked = selectedSources.includes(src);
              return (
                <label key={src} className="chip">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleSourceToggle(src)}
                  />
                  <span>{src}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="field">
          <label htmlFor={`region-${formId}`}>Where most of your data subjects are</label>
          <select
            id={`region-${formId}`}
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="India (DPDP Act)">India (DPDP Act)</option>
            <option value="EU / UK (GDPR)">EU / UK (GDPR)</option>
            <option value="United States">United States</option>
            <option value="Elsewhere">Elsewhere</option>
          </select>
          <span className="hint">Doesn&apos;t change the price. It decides which consent and de-identification rules we apply.</span>
        </div>

        <label className="toggle">
          <input
            type="checkbox"
            checked={experts}
            onChange={(e) => setExperts(e.target.checked)}
          />
          <span>
            Our experts could annotate samples (explain decisions) for a consulting fee.{' '}
            <span className="hint">Usually adds 20–40%.</span>
          </span>
        </label>
      </form>

      <aside className="result" aria-live="polite">
        <span className="lbl">Estimated licence value</span>
        <div className="range num">{rangeStr}</div>
        <div className="net num">{netStr}</div>

        <div className="bars">
          {parts
            .sort((a, b) => b.v - a.v)
            .map((p) => (
              <div key={p.name} className="bar">
                <span>{p.name}</span>
                <div className="track">
                  <div
                    className="fill"
                    style={{ width: `${Math.round((p.v / maxVal) * 100)}%` }}
                  />
                </div>
                <span className="v">{fmt(p.v)}</span>
              </div>
            ))}
        </div>

        <p className="disc">
          Illustrative calculation: A rough range from public deal benchmarks, not an offer. Final price depends on volume after de-identification, data quality, exclusivity and buyer demand. Some datasets don&apos;t sell.
        </p>

        <button type="button" className="btn accent" onClick={scrollToForm}>
          Book a 20-minute valuation call
        </button>
      </aside>
    </div>
  );
}
