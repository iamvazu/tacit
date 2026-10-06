interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of ipMap.entries()) {
      if (entry.resetAt <= now) {
        ipMap.delete(ip);
      }
    }
  }, 5 * 60 * 1000).unref();
}

/**
 * Basic in-memory rate limiter per IP address
 * @param ip Client IP
 * @param limit Max allowed requests within window
 * @param windowMs Time window in milliseconds (default 60 seconds)
 * @returns boolean true if allowed, false if rate limited
 */
export function checkRateLimit(ip: string, limit = 10, windowMs = 60 * 1000): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || entry.resetAt <= now) {
    ipMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  return true;
}
