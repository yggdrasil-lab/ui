import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '../inputs/Button';

export interface ConfirmActionBoxProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  variant?: 'danger' | 'warning';
  className?: string;
}

const boxStyles: Record<
  'danger' | 'warning',
  { container: string; title: string; icon: string; confirmVariant: 'rose' | 'amber' }
> = {
  danger: {
    container: 'bg-rose-500/10 border-rose-500/30',
    title: 'text-rose-200',
    icon: 'text-rose-400',
    confirmVariant: 'rose',
  },
  warning: {
    container: 'bg-amber-500/10 border-amber-500/30',
    title: 'text-amber-200',
    icon: 'text-amber-400',
    confirmVariant: 'amber',
  },
};

export const ConfirmActionBox: React.FC<ConfirmActionBoxProps> = ({
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  loading = false,
  variant = 'danger',
  className = '',
}) => {
  const style = boxStyles[variant] || boxStyles.danger;

  return (
    <div
      role="alertdialog"
      className={`p-3.5 rounded-xl border space-y-2.5 ${style.container} ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <AlertTriangle className={`w-4 h-4 shrink-0 mt-0.5 ${style.icon}`} />
        <div className="flex-1 min-w-0">
          <div className={`text-xs font-semibold ${style.title}`}>{title}</div>
          {description && (
            <div className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
              {description}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button
          variant="secondary"
          size="xs"
          onClick={onCancel}
          disabled={loading}
        >
          {cancelLabel}
        </Button>
        <Button
          variant={style.confirmVariant}
          size="xs"
          loading={loading}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
};
