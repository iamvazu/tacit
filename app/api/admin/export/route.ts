import { NextRequest } from 'next/server';
import { getSubmissions } from '@/lib/db';
import { verifyBasicAuth, unauthorizedResponse } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const isAuthed = await verifyBasicAuth();
  if (!isAuthed) {
    return unauthorizedResponse();
  }

  const { searchParams } = new URL(req.url);
  const formType = searchParams.get('type') || undefined;

  const rows = getSubmissions(formType);

  // Build CSV
  const headers = ['ID', 'Type', 'Name', 'Email', 'Company', 'IP Address', 'Created At', 'Details'];
  const csvRows = [headers.join(',')];

  for (const r of rows) {
    let payloadStr = '';
    try {
      payloadStr = JSON.stringify(JSON.parse(r.data_payload));
    } catch {
      payloadStr = r.data_payload || '';
    }

    const escape = (val: any) => `"${String(val || '').replace(/"/g, '""')}"`;

    csvRows.push([
      r.id,
      escape(r.form_type),
      escape(r.name),
      escape(r.email),
      escape(r.company),
      escape(r.ip_address),
      escape(r.created_at),
      escape(payloadStr),
    ].join(','));
  }

  const csvContent = csvRows.join('\r\n');
  const filename = `tacit_submissions_${formType || 'all'}_${new Date().toISOString().slice(0, 10)}.csv`;

  return new Response(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
}
