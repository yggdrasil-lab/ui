/**
 * Error thrown when an Authentik forward-auth session expiry or redirect is detected.
 */
export class SessionExpiredError extends Error {
  readonly status?: number;
  readonly contentType?: string;
  readonly url?: string;

  constructor(
    message = 'Authentik session expired',
    options?: { status?: number; contentType?: string; url?: string }
  ) {
    super(message);
    this.name = 'SessionExpiredError';
    this.status = options?.status;
    this.contentType = options?.contentType;
    this.url = options?.url;

    // Maintain proper prototype chain across transpilation targets
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Type guard to check if an unknown error is a SessionExpiredError.
 */
export function isSessionExpiredError(error: unknown): error is SessionExpiredError {
  return (
    error instanceof SessionExpiredError ||
    (error instanceof Error && error.name === 'SessionExpiredError')
  );
}

/**
 * Inspects a Fetch API Response to determine if an Authentik forward-auth session
 * has expired or been intercepted.
 *
 * Traefik forward-auth behavior when session expires:
 * 1. HTTP 401 Unauthorized or 403 Forbidden
 * 2. HTTP 3xx Redirection to Authentik login/outpost
 * 3. Browser follow-redirect resulting in response.redirected === true
 * 4. Content-Type returning text/html for an API endpoint that expected application/json
 * 5. URL containing Authentik flow or outpost paths
 */
export function isSessionExpiredResponse(response: Response): boolean {
  const status = response.status;
  const contentType = (response.headers.get('content-type') || '').toLowerCase();
  const url = response.url || '';

  // Direct auth failure status codes
  if (status === 401 || status === 403) {
    return true;
  }

  // Forward auth redirect status codes (e.g. manual redirect mode)
  if (status >= 300 && status < 400) {
    return true;
  }

  // Browser followed redirect to Authentik login portal
  if (response.redirected) {
    return true;
  }

  // HTML response returned (Traefik intercepted API and returned Authentik login page)
  if (contentType.includes('text/html')) {
    return true;
  }

  // Authentik outpost or flow URL pattern
  if (url.includes('/outpost.goauthentik.io/') || url.includes('/flows/executor/')) {
    return true;
  }

  return false;
}

/**
 * Asserts that a Response is not an expired Authentik session.
 * Throws SessionExpiredError if expired.
 */
export function assertSessionNotExpired(response: Response): void {
  if (isSessionExpiredResponse(response)) {
    const contentType = response.headers.get('content-type') || '';
    throw new SessionExpiredError(
      `Authentik session expired (status: ${response.status}, content-type: ${contentType})`,
      {
        status: response.status,
        contentType,
        url: response.url,
      }
    );
  }
}

export interface AuthFetchOptions extends RequestInit {
  /**
   * If true, throws SessionExpiredError on detected session expiry.
   * Default: true
   */
  checkSessionExpiry?: boolean;
}

/**
 * Drop-in fetch wrapper that enforces cache: 'no-store' (preventing iOS Safari PWA caching)
 * and detects Authentik forward-auth session expiration.
 */
export async function authFetch(
  input: RequestInfo | URL,
  init?: AuthFetchOptions
): Promise<Response> {
  const { checkSessionExpiry = true, ...fetchInit } = init || {};

  const response = await fetch(input, {
    // Default to 'no-store' to ensure WebKit/iOS Safari standalone PWAs never serve stale cache
    cache: 'no-store',
    ...fetchInit,
  });

  if (checkSessionExpiry) {
    assertSessionNotExpired(response);
  }

  return response;
}
