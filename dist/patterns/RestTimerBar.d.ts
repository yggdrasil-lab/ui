import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export declare const DEFAULT_REST_TIMER_PRESETS: number[];
export interface RestTimerBarProps {
    remainingSeconds: number;
    totalSeconds: number;
    isRunning: boolean;
    isPaused: boolean;
    isComplete: boolean;
    presets?: number[];
    onStart: (seconds: number) => void;
    onPause: () => void;
    onResume: () => void;
    onAdjust: (deltaSeconds: number) => void;
    onDismiss: () => void;
    variant?: ThemeVariant;
    className?: string;
}
export declare const RestTimerBar: React.FC<RestTimerBarProps>;
