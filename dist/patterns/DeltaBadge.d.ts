import { default as React } from 'react';
import { StatusBadgeSize } from '../primitives/StatusBadge';
export interface DeltaBadgeProps {
    value: number | null | undefined;
    precision?: number;
    prefix?: string;
    suffix?: string;
    positiveIsGood?: boolean;
    showZero?: boolean;
    size?: StatusBadgeSize;
    className?: string;
}
/**
 * Signed numeric change badge composing StatusBadge with directional trend icons.
 */
export declare const DeltaBadge: React.FC<DeltaBadgeProps>;
