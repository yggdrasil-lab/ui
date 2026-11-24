import { default as React } from 'react';
export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg';
export type GlassCardTone = 'glass' | 'solid';
export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    padding?: GlassCardPadding;
    tone?: GlassCardTone;
    hoverGlow?: boolean;
}
export declare const GlassCard: React.FC<GlassCardProps>;
