export interface ClientErrorPayload {
  message: string;
  error_type?: string;
  source?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  url?: string;
  user_agent?: string;
  timestamp?: string;
  extra?: Record<string, unknown>;
}

export interface TelemetryOptions {
  endpoint?: string;
  maxRecentErrors?: number;
}

const DEFAULT_ENDPOINT = '/api/client-errors';
const DEFAULT_MAX_RECENT = 25;
const recentErrorKeys = new Set<string>();
let globalEndpoint = DEFAULT_ENDPOINT;
let isInitialized = false;

export async function reportClientError(
  error: unknown,
  context?: Record<string, unknown>,
  options?: TelemetryOptions
): Promise<void> {
  try {
    let message = 'Unknown error';
    let stack: string | undefined;
    let errorType = 'Error';

    if (error instanceof Error) {
      message = error.message || error.name;
      stack = error.stack;
      errorType = error.name || 'Error';
    } else if (typeof error === 'string') {
      message = error;
    } else if (error && typeof error === 'object') {
      const candidate = error as { message?: string; name?: string; stack?: string };
      message = candidate.message || JSON.stringify(error);
      stack = candidate.stack;
      errorType = candidate.name || 'Object';
    }

    const source = (context?.source as string) || undefined;
    const lineno = typeof context?.lineno === 'number' ? context.lineno : undefined;
    const colno = typeof context?.colno === 'number' ? context.colno : undefined;
    const resolvedType = (context?.error_type as string) || errorType;

    const dedupeKey = `${message}:${source || ''}:${lineno || 0}:${resolvedType}`;
    if (recentErrorKeys.has(dedupeKey)) {
      return;
    }
    recentErrorKeys.add(dedupeKey);
    const maxRecent = options?.maxRecentErrors ?? DEFAULT_MAX_RECENT;
    if (recentErrorKeys.size > maxRecent) {
      const first = recentErrorKeys.values().next().value;
      if (first) recentErrorKeys.delete(first);
    }

    const payload: ClientErrorPayload = {
      message,
      error_type: resolvedType,
      source,
      lineno,
      colno,
      stack,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      timestamp: new Date().toISOString(),
      extra: context || {},
    };

    const endpoint = options?.endpoint || globalEndpoint;
    if (typeof fetch !== 'undefined') {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Do not throw or loop if telemetry endpoint is unreachable
      });
    }
  } catch {
    // Guard against any failure in error reporter itself
  }
}

export function initGlobalErrorReporter(options?: TelemetryOptions): void {
  if (options?.endpoint) {
    globalEndpoint = options.endpoint;
  }
  if (isInitialized || typeof window === 'undefined') return;
  isInitialized = true;

  window.addEventListener('error', (event: ErrorEvent) => {
    void reportClientError(
      event.error || event.message,
      {
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error_type: 'WindowError',
      },
      options
    );
  });

  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    void reportClientError(
      event.reason,
      {
        error_type: 'UnhandledRejection',
      },
      options
    );
  });
}
