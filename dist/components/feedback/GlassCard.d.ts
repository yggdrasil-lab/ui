import { default as React } from 'react';
export interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverGlow?: boolean;
}
export declare const GlassCard: React.FC<GlassCardProps>;
