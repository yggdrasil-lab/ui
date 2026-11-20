export interface UseCopyFeedbackResult {
    copiedKey: string | null;
    copyText: (text: string, key?: string) => Promise<boolean>;
}
/**
 * Tracks temporary copied confirmation state for single or multi-row copy buttons.
 */
export declare function useCopyFeedback(resetDelayMs?: number): UseCopyFeedbackResult;
