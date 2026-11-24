import React from 'react';
import { twMerge } from 'tailwind-merge';

export type GlassCardPadding = 'none' | 'sm' | 'md' | 'lg';

export type GlassCardTone = 'glass' | 'solid';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: GlassCardPadding;
  tone?: GlassCardTone;
  hoverGlow?: boolean;
}

const PADDING_CLASSES: Record<GlassCardPadding, string> = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-5',
};

const TONE_CLASSES: Record<GlassCardTone, string> = {
  glass: 'glass-panel bg-card/70 backdrop-blur-md border border-border/80',
  solid: 'bg-card border border-border',
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  onClick,
  padding = 'lg',
  tone = 'glass',
  hoverGlow = false,
  ...rest
}) => {
  const isClickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      className={twMerge(
        'rounded-2xl shadow-lg',
        TONE_CLASSES[tone],
        PADDING_CLASSES[padding],
        hoverGlow && 'hover:border-border transition-all duration-200 hover:shadow-xl',
        isClickable && 'cursor-pointer active:scale-[0.99] transition-transform select-none',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
