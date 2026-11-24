import { default as React } from 'react';
export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg';
export type GlassCardTone = 'glass' | 'solid';
export type GlassCardElement = 'div' | 'nav' | 'section';
export interface GlassCardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: GlassCardElement;
    padding?: GlassCardPadding;
    tone?: GlassCardTone;
    hoverGlow?: boolean;
}
export declare const GlassCard: React.FC<GlassCardProps>;
