import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_REST_SECONDS = 90;
const TICK_INTERVAL_MS = 250;

type WindowWithWebkitAudio = Window & {
  webkitAudioContext?: typeof AudioContext;
};

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
export function formatRestTime(seconds: number): string {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function normalizePositiveSeconds(seconds: number, fallback = DEFAULT_REST_SECONDS): number {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return fallback;
  }
  return Math.max(1, Math.round(seconds));
}

function computeRemainingSeconds(endTimeMs: number, nowMs: number = Date.now()): number {
  return Math.max(0, Math.ceil((endTimeMs - nowMs) / 1000));
}

function triggerRestVibration(): void {
  try {
    if (typeof navigator !== 'undefined') {
      navigator.vibrate?.([200, 100, 200]);
    }
  } catch {
    // Ignore environments where navigator.vibrate is blocked or unavailable
  }
}

function playRestCompletionBeep(): void {
  try {
    if (typeof window === 'undefined') return;
    const AudioCtx =
      window.AudioContext || (window as WindowWithWebkitAudio).webkitAudioContext;
    if (!AudioCtx) return;

    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.onended = () => {
      void ctx.close().catch(() => {});
    };

    osc.start(now);
    osc.stop(now + 0.36);
  } catch {
    // Ignore autoplay/headless AudioContext restrictions
  }
}

function notifyRestComplete(): void {
  triggerRestVibration();
  playRestCompletionBeep();
}

/**
 * Wall-clock countdown hook for gym rest timers. Tracks target end timestamp
 * via ref so screen locks and background tab throttling never cause drift.
 */
export function useRestTimer(defaultSeconds: number = DEFAULT_REST_SECONDS): UseRestTimerResult {
  const initialPreset = normalizePositiveSeconds(defaultSeconds);

  const [activePresetSeconds, setActivePresetSeconds] = useState<number>(initialPreset);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const endTimeMsRef = useRef<number | null>(null);
  const pausedRemainingRef = useRef<number>(0);
  const activePresetRef = useRef<number>(initialPreset);
  const isRunningRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const isCompleteRef = useRef<boolean>(false);
  const hasNotifiedRef = useRef<boolean>(false);

  const markComplete = useCallback((shouldNotify: boolean) => {
    endTimeMsRef.current = null;
    pausedRemainingRef.current = 0;
    isRunningRef.current = false;
    isPausedRef.current = false;
    isCompleteRef.current = true;

    setRemainingSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
    setIsComplete(true);

    if (shouldNotify && !hasNotifiedRef.current) {
      hasNotifiedRef.current = true;
      notifyRestComplete();
    }
  }, []);

  const syncFromClock = useCallback(() => {
    const endMs = endTimeMsRef.current;
    if (endMs === null || !isRunningRef.current) {
      return;
    }

    const nextRemaining = computeRemainingSeconds(endMs);
    if (nextRemaining <= 0) {
      markComplete(true);
    } else {
      setRemainingSeconds(nextRemaining);
    }
  }, [markComplete]);

  useEffect(() => {
    if (!isRunning || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    syncFromClock();
    const intervalId = window.setInterval(syncFromClock, TICK_INTERVAL_MS);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        syncFromClock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isRunning, syncFromClock]);

  const startTimer = useCallback((seconds?: number) => {
    const duration =
      seconds !== undefined
        ? normalizePositiveSeconds(seconds, activePresetRef.current)
        : activePresetRef.current;

    if (seconds !== undefined) {
      activePresetRef.current = duration;
      setActivePresetSeconds(duration);
    }

    endTimeMsRef.current = Date.now() + duration * 1000;
    pausedRemainingRef.current = duration;
    isRunningRef.current = true;
    isPausedRef.current = false;
    isCompleteRef.current = false;
    hasNotifiedRef.current = false;

    setTotalSeconds(duration);
    setRemainingSeconds(duration);
    setIsRunning(true);
    setIsPaused(false);
    setIsComplete(false);
  }, []);

  const pauseTimer = useCallback(() => {
    if (!isRunningRef.current || endTimeMsRef.current === null) {
      return;
    }

    const nextRemaining = computeRemainingSeconds(endTimeMsRef.current);
    if (nextRemaining <= 0) {
      markComplete(true);
      return;
    }

    endTimeMsRef.current = null;
    pausedRemainingRef.current = nextRemaining;
    isRunningRef.current = false;
    isPausedRef.current = true;
    isCompleteRef.current = false;

    setRemainingSeconds(nextRemaining);
    setIsRunning(false);
    setIsPaused(true);
    setIsComplete(false);
  }, [markComplete]);

  const resumeTimer = useCallback(() => {
    if (!isPausedRef.current || isRunningRef.current) {
      return;
    }

    const remaining = pausedRemainingRef.current;
    if (remaining <= 0) {
      markComplete(true);
      return;
    }

    endTimeMsRef.current = Date.now() + remaining * 1000;
    isRunningRef.current = true;
    isPausedRef.current = false;
    isCompleteRef.current = false;

    setRemainingSeconds(remaining);
    setIsRunning(true);
    setIsPaused(false);
    setIsComplete(false);
  }, [markComplete]);

  const adjustTimer = useCallback(
    (deltaSeconds: number) => {
      if (!Number.isFinite(deltaSeconds) || deltaSeconds === 0) {
        return;
      }

      if (isRunningRef.current && endTimeMsRef.current !== null) {
        const nextEndMs = endTimeMsRef.current + deltaSeconds * 1000;
        const nextRemaining = computeRemainingSeconds(nextEndMs);
        if (nextRemaining <= 0) {
          markComplete(true);
          return;
        }
        endTimeMsRef.current = nextEndMs;
        pausedRemainingRef.current = nextRemaining;
        setRemainingSeconds(nextRemaining);
        setTotalSeconds((prev) => Math.max(prev, nextRemaining));
        return;
      }

      if (isPausedRef.current) {
        const nextRemaining = Math.max(0, pausedRemainingRef.current + Math.round(deltaSeconds));
        if (nextRemaining <= 0) {
          markComplete(true);
          return;
        }
        pausedRemainingRef.current = nextRemaining;
        setRemainingSeconds(nextRemaining);
        setTotalSeconds((prev) => Math.max(prev, nextRemaining));
        return;
      }

      if (isCompleteRef.current && deltaSeconds > 0) {
        const added = Math.max(1, Math.round(deltaSeconds));
        endTimeMsRef.current = Date.now() + added * 1000;
        pausedRemainingRef.current = added;
        isRunningRef.current = true;
        isPausedRef.current = false;
        isCompleteRef.current = false;
        hasNotifiedRef.current = false;

        setRemainingSeconds(added);
        setTotalSeconds((prev) => Math.max(prev, added));
        setIsRunning(true);
        setIsPaused(false);
        setIsComplete(false);
      }
    },
    [markComplete]
  );

  const dismissTimer = useCallback(() => {
    endTimeMsRef.current = null;
    pausedRemainingRef.current = 0;
    isRunningRef.current = false;
    isPausedRef.current = false;
    isCompleteRef.current = false;
    hasNotifiedRef.current = false;

    setRemainingSeconds(0);
    setTotalSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
    setIsComplete(false);
  }, []);

  return {
    remainingSeconds,
    totalSeconds,
    isRunning,
    isPaused,
    isComplete,
    activePresetSeconds,
    startTimer,
    pauseTimer,
    resumeTimer,
    adjustTimer,
    dismissTimer,
  };
}
