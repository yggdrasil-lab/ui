import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface MetricHeroBadge {
    label: string;
    variant?: 'amber' | 'emerald' | 'sky' | 'rose' | 'blue';
    icon?: React.ReactNode;
}
export interface MetricHeroProps {
    title: string;
    primaryValue: string | number;
    primaryUnit: string;
    secondaryValue?: string | number;
    secondaryUnit?: string;
    toggleHint?: string;
    badge?: MetricHeroBadge;
    variant?: ThemeVariant;
    unitColor?: string;
    glowColor?: string;
    children?: React.ReactNode;
    className?: string;
}
export declare const MetricHero: React.FC<MetricHeroProps>;
