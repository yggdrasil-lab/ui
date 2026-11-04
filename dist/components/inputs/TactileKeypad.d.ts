import { default as React } from 'react';
export interface TactileKeypadProps {
    value: string;
    onChange: (newValue: string) => void;
    onClear?: () => void;
    maxDecimalPlaces?: number;
    className?: string;
}
export declare const TactileKeypad: React.FC<TactileKeypadProps>;
