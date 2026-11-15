export interface UseRestTimerResult {
    remainingSeconds: number;
    totalSeconds: number;
    isRunning: boolean;
    isPaused: boolean;
    isComplete: boolean;
    activePresetSeconds: number;
    startTimer: (seconds?: number) => void;
    pauseTimer: () => void;
    resumeTimer: () => void;
    adjustTimer: (deltaSeconds: number) => void;
    dismissTimer: () => void;
}
/**
 * Formats a non-negative duration in seconds as M:SS or MM:SS (e.g. "1:30", "0:45").
 */
export declare function formatRestTime(seconds: number): string;
/**
 * Wall-clock countdown hook for gym rest timers. Tracks target end timestamp
 * via ref so screen locks and background tab throttling never cause drift.
 */
export declare function useRestTimer(defaultSeconds?: number): UseRestTimerResult;
