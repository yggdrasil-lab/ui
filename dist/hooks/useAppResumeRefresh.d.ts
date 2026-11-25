export interface UseAppResumeRefreshOptions {
    enabled?: boolean;
    minIntervalMs?: number;
}
/**
 * Invokes `onResume` when the PWA returns to foreground visibility or
 * regains network connectivity, throttled by `minIntervalMs` (default 1000ms).
 */
export declare function useAppResumeRefresh(onResume: () => void, options?: UseAppResumeRefreshOptions): void;
