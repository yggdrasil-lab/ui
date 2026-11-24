import { default as React } from 'react';
export type RangeSliderVariant = 'amber' | 'sky' | 'blue' | 'emerald' | 'purple';
export interface RangeSliderProps {
    label: string;
    valueDisplay: React.ReactNode;
    valueClassName?: string;
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    minLabel?: string;
    midLabel?: string;
    maxLabel?: string;
    variant?: RangeSliderVariant;
    className?: string;
}
export declare const RangeSlider: React.FC<RangeSliderProps>;
