import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface ActionTileProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    variant?: ThemeVariant;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    'data-testid'?: string;
}
/**
 * Hub navigation and action tile composing SelectableCard with a tinted icon badge,
 * optional status badge, and disabled interaction state.
 */
export declare const ActionTile: React.FC<ActionTileProps>;
