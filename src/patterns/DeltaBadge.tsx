import React from 'react';
import { Minus, TrendingDown, TrendingUp } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { StatusBadge, type StatusBadgeSize, type StatusBadgeVariant } from '../primitives/StatusBadge';

export interface DeltaBadgeProps {
  value: number | null | undefined;
  precision?: number;
  prefix?: string;
  suffix?: string;
  positiveIsGood?: boolean;
  showZero?: boolean;
  size?: StatusBadgeSize;
  className?: string;
}

type DeltaDirection = 'up' | 'down' | 'flat';

function resolveDeltaMeta(
  value: number,
  positiveIsGood: boolean,
  iconSizeClass: string
): { variant: StatusBadgeVariant; sign: string; icon: React.ReactNode } {
  const direction: DeltaDirection = value > 0 ? 'up' : value < 0 ? 'down' : 'flat';
  if (direction === 'flat') {
    return {
      variant: 'idle',
      sign: '',
      icon: <Minus className={iconSizeClass} />,
    };
  }
  if (direction === 'up') {
    return {
      variant: positiveIsGood ? 'success' : 'error',
      sign: '+',
      icon: <TrendingUp className={iconSizeClass} />,
    };
  }
  return {
    variant: positiveIsGood ? 'error' : 'success',
    sign: '-',
    icon: <TrendingDown className={iconSizeClass} />,
  };
}

/**
 * Signed numeric change badge composing StatusBadge with directional trend icons.
 */
export const DeltaBadge: React.FC<DeltaBadgeProps> = ({
  value,
  precision = 2,
  prefix = '',
  suffix = '',
  positiveIsGood = true,
  showZero = false,
  size = 'xs',
  className = '',
}) => {
  if (value == null || !Number.isFinite(value) || (!showZero && value === 0)) {
    return null;
  }

  const iconSizeClass = size === 'xs' ? 'w-2.5 h-2.5' : 'w-3 h-3';
  const meta = resolveDeltaMeta(value, positiveIsGood, iconSizeClass);
  const formatted = Math.abs(value).toFixed(precision);
  const label = `${meta.sign}${prefix}${formatted}${suffix}`;

  return (
    <StatusBadge
      variant={meta.variant}
      size={size}
      showDot={false}
      icon={meta.icon}
      label={label}
      className={twMerge('font-mono font-semibold', className)}
    />
  );
};
