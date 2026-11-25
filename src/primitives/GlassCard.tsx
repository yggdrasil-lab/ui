import React from 'react';
import { twMerge } from 'tailwind-merge';

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
  as = 'div',
  className,
  onClick,
  padding = 'lg',
  tone = 'glass',
  hoverGlow = false,
  ...rest
}) => {
  const isClickable = Boolean(onClick);
  const Component = as;

  return (
    <Component
      onClick={onClick}
      className={twMerge(
        'rounded-ui-card shadow-ui-card',
        TONE_CLASSES[tone],
        PADDING_CLASSES[padding],
        hoverGlow && 'hover:border-border transition-all duration-200 hover:shadow-xl',
        isClickable && 'cursor-pointer active:scale-[0.99] transition-transform select-none',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
