import { default as React } from 'react';
import { ThemeVariant } from '../../theme/variants';
export interface LoadingStateProps {
    label?: string;
    variant?: ThemeVariant;
    className?: string;
}
export declare const LoadingState: React.FC<LoadingStateProps>;
