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
export declare function reportClientError(error: unknown, context?: Record<string, unknown>, options?: TelemetryOptions): Promise<void>;
export declare function initGlobalErrorReporter(options?: TelemetryOptions): void;
