interface RateLimitEntry {
  count: number;
  resetTime: number;
  lastAttempt: number;
}

interface RateLimitStore {
  [key: string]: RateLimitEntry;
}

class RateLimiter {
  private store: RateLimitStore = {};
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up expired entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 5 * 60 * 1000);
  }

  private cleanup() {
    const now = Date.now();
    Object.keys(this.store).forEach((key) => {
      if (this.store[key].resetTime < now) {
        delete this.store[key];
      }
    });
  }

  checkLimit(
    identifier: string,
    maxRequests: number,
    windowMs: number,
    cooldownMs?: number
  ): {
    allowed: boolean;
    remainingRequests: number;
    resetTime: number;
    waitTime?: number;
  } {
    const now = Date.now();
    const entry = this.store[identifier];

    if (!entry) {
      // First request
      this.store[identifier] = {
        count: 1,
        resetTime: now + windowMs,
        lastAttempt: now,
      };
      return {
        allowed: true,
        remainingRequests: maxRequests - 1,
        resetTime: now + windowMs,
      };
    }

    // Check if window has expired
    if (now >= entry.resetTime) {
      // Reset the window
      this.store[identifier] = {
        count: 1,
        resetTime: now + windowMs,
        lastAttempt: now,
      };
      return {
        allowed: true,
        remainingRequests: maxRequests - 1,
        resetTime: now + windowMs,
      };
    }

    // Check cooldown period if specified
    if (cooldownMs && now - entry.lastAttempt < cooldownMs) {
      const waitTime = cooldownMs - (now - entry.lastAttempt);
      return {
        allowed: false,
        remainingRequests: Math.max(0, maxRequests - entry.count),
        resetTime: entry.resetTime,
        waitTime,
      };
    }

    // Check if limit exceeded
    if (entry.count >= maxRequests) {
      return {
        allowed: false,
        remainingRequests: 0,
        resetTime: entry.resetTime,
      };
    }

    // Increment count
    entry.count++;
    entry.lastAttempt = now;

    return {
      allowed: true,
      remainingRequests: maxRequests - entry.count,
      resetTime: entry.resetTime,
    };
  }

  destroy() {
    clearInterval(this.cleanupInterval);
  }
}

// Global instance
const rateLimiter = new RateLimiter();

export default rateLimiter;
