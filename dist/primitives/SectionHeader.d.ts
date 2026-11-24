import { default as React } from 'react';
import { AccentVariant } from '../theme/variants';
export interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    variant?: AccentVariant;
    actions?: React.ReactNode;
    titleAs?: 'h2' | 'h3' | 'h4';
    uppercaseTitle?: boolean;
    size?: 'sm' | 'md';
    className?: string;
}
/**
 * Reusable card/panel section header with themed icon badge, title, subtitle,
 * and responsive right-hand actions slot.
 */
export declare const SectionHeader: React.FC<SectionHeaderProps>;
