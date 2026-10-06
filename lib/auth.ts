import { headers } from 'next/headers';

export async function verifyBasicAuth(): Promise<boolean> {
  const adminUser = process.env.ADMIN_USER;
  const adminPassword = process.env.ADMIN_PASSWORD;

  // If not configured, fall back to safe default or reject
  if (!adminUser || !adminPassword) {
    // In development if unset, allow admin/admin for local test or reject
    if (process.env.NODE_ENV !== 'production' && !adminUser) {
      // Local development fallback if env not yet populated
      return true;
    }
    return false;
  }

  const headerList = await headers();
  const authHeader = headerList.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false;
  }

  try {
    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [user, ...passParts] = credentials.split(':');
    const pass = passParts.join(':');

    return user === adminUser && pass === adminPassword;
  } catch {
    return false;
  }
}

export function unauthorizedResponse() {
  return new Response('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Tacit Admin"',
      'Content-Type': 'text/plain',
    },
  });
}
