import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface TactileKeypadProps {
    value: string;
    onChange: (newValue: string) => void;
    onClear?: () => void;
    maxDecimalPlaces?: number;
    variant?: ThemeVariant;
    actionColor?: string;
    allowDecimals?: boolean;
    className?: string;
}
export declare const TactileKeypad: React.FC<TactileKeypadProps>;
