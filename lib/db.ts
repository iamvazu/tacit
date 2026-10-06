import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let dbInstance: Database.Database | null = null;

export function getDb(): Database.Database {
  if (dbInstance) {
    return dbInstance;
  }

  // Determine path: priority to DATABASE_PATH env, then /app/data in docker prod, then ./data locally
  let dbPath = process.env.DATABASE_PATH;
  if (!dbPath) {
    if (process.env.NODE_ENV === 'production' && fs.existsSync('/app/data')) {
      dbPath = '/app/data/tacit.db';
    } else {
      dbPath = path.join(process.cwd(), 'data', 'tacit.db');
    }
  }

  const dbDir = path.dirname(dbPath);
  if (!fs.existsSync(dbDir)) {
    try {
      fs.mkdirSync(dbDir, { recursive: true });
    } catch {
      // ignore if exists or permission handling
    }
  }

  dbInstance = new Database(dbPath);
  dbInstance.pragma('journal_mode = WAL');

  // Initialize schema
  dbInstance.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      form_type TEXT NOT NULL,
      name TEXT,
      email TEXT,
      company TEXT,
      data_payload TEXT NOT NULL,
      ip_address TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(form_type);
    CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at);
  `);

  return dbInstance;
}

export interface SubmissionInput {
  form_type: 'valuation_call' | 'catalogue_request' | 'referral' | 'contact';
  name?: string;
  email?: string;
  company?: string;
  data_payload: Record<string, any>;
  ip_address?: string;
}

export function saveSubmission(input: SubmissionInput) {
  const db = getDb();
  const stmt = db.prepare(`
    INSERT INTO submissions (form_type, name, email, company, data_payload, ip_address, created_at)
    VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
  `);

  const result = stmt.run(
    input.form_type,
    input.name || null,
    input.email || null,
    input.company || null,
    JSON.stringify(input.data_payload),
    input.ip_address || null
  );

  return result.lastInsertRowid;
}

export function getSubmissions(formType?: string) {
  const db = getDb();
  if (formType && formType !== 'all') {
    const stmt = db.prepare(`
      SELECT id, form_type, name, email, company, data_payload, ip_address, created_at
      FROM submissions
      WHERE form_type = ?
      ORDER BY id DESC
    `);
    return stmt.all(formType) as any[];
  }

  const stmt = db.prepare(`
    SELECT id, form_type, name, email, company, data_payload, ip_address, created_at
    FROM submissions
    ORDER BY id DESC
  `);
  return stmt.all() as any[];
}
