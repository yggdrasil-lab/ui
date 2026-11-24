import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
  hoverGlow = false,
}) => {
  const isClickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      className={`glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 shadow-lg ${
        hoverGlow
          ? 'hover:border-border transition-all duration-200 hover:shadow-xl'
          : ''
      } ${
        isClickable
          ? 'cursor-pointer active:scale-[0.99] transition-transform select-none'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
