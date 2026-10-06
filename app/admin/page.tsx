import { getSubmissions } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentType = resolvedParams?.type || 'all';
  const submissions = getSubmissions(currentType === 'all' ? undefined : currentType);

  const filterOptions = [
    { label: 'All Submissions', value: 'all' },
    { label: 'Valuation Calls', value: 'valuation_call' },
    { label: 'Catalogue Requests', value: 'catalogue_request' },
    { label: 'Referrals', value: 'referral' },
    { label: 'Contact Messages', value: 'contact' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', minHeight: '80vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span className="eyebrow">Tacit Administration</span>
          <h1 style={{ fontSize: '32px', marginTop: '6px' }}>Form Submissions</h1>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a
            href={`/api/admin/export?type=${currentType}`}
            className="btn small"
            download
          >
            Export to CSV
          </a>
          <Link href="/" className="btn ghost small">
            View Live Site
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {filterOptions.map((opt) => (
          <Link
            key={opt.value}
            href={`/admin?type=${opt.value}`}
            style={{
              padding: '8px 14px',
              borderRadius: '6px',
              fontSize: '13px',
              fontFamily: 'var(--f-mono)',
              textDecoration: 'none',
              background: currentType === opt.value ? 'var(--ink)' : 'var(--sheet)',
              color: currentType === opt.value ? 'var(--paper)' : 'var(--ink)',
              border: '1.5px solid var(--rule)',
            }}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {/* Submissions List */}
      <div className="tbl">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date / Time</th>
              <th>Type</th>
              <th>Sender</th>
              <th>Company / Org</th>
              <th>Payload Details</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {submissions.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', padding: '40px', color: 'var(--ink-2)' }}>
                  No submissions recorded yet for this filter.
                </td>
              </tr>
            ) : (
              submissions.map((row) => {
                let parsed: Record<string, any> = {};
                try {
                  parsed = JSON.parse(row.data_payload);
                } catch {
                  parsed = { raw: row.data_payload };
                }

                return (
                  <tr key={row.id}>
                    <td className="mono" style={{ fontSize: '13px', fontWeight: 'bold' }}>#{row.id}</td>
                    <td className="mono" style={{ fontSize: '12px', whiteSpace: 'nowrap', color: 'var(--ink-2)' }}>
                      {row.created_at}
                    </td>
                    <td>
                      <span className="pill" style={{ textTransform: 'capitalize' }}>
                        {row.form_type.replace('_', ' ')}
                      </span>
                    </td>
                    <td>
                      <strong>{row.name || 'Anonymous'}</strong>
                      {row.email && (
                        <div className="mono" style={{ fontSize: '12px', color: 'var(--ink-2)' }}>
                          {row.email}
                        </div>
                      )}
                    </td>
                    <td>{row.company || '—'}</td>
                    <td>
                      <details style={{ padding: 0, border: 'none' }}>
                        <summary style={{ fontSize: '13px', cursor: 'pointer', color: 'var(--teal)' }}>
                          View details ({Object.keys(parsed).length} fields)
                        </summary>
                        <pre
                          style={{
                            margin: '8px 0 0',
                            padding: '10px',
                            background: 'var(--paper)',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontFamily: 'var(--f-mono)',
                            maxHeight: '220px',
                            overflow: 'auto',
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                          }}
                        >
                          {JSON.stringify(parsed, null, 2)}
                        </pre>
                      </details>
                    </td>
                    <td className="mono" style={{ fontSize: '12px', color: 'var(--ink-2)' }}>
                      {row.ip_address || '—'}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
