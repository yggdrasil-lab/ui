import { default as React } from 'react';
export interface MetricHeroBadge {
    label: string;
    variant?: 'amber' | 'emerald' | 'sky' | 'rose';
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
    glowColor?: string;
    children?: React.ReactNode;
}
export declare const MetricHero: React.FC<MetricHeroProps>;
