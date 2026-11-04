/**
 * Error thrown when an Authentik forward-auth session expiry or redirect is detected.
 */
export declare class SessionExpiredError extends Error {
    readonly status?: number;
    readonly contentType?: string;
    readonly url?: string;
    constructor(message?: string, options?: {
        status?: number;
        contentType?: string;
        url?: string;
    });
}
/**
 * Type guard to check if an unknown error is a SessionExpiredError.
 */
export declare function isSessionExpiredError(error: unknown): error is SessionExpiredError;
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
export declare function isSessionExpiredResponse(response: Response): boolean;
/**
 * Asserts that a Response is not an expired Authentik session.
 * Throws SessionExpiredError if expired.
 */
export declare function assertSessionNotExpired(response: Response): void;
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
export declare function authFetch(input: RequestInfo | URL, init?: AuthFetchOptions): Promise<Response>;
