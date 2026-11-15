import React from 'react';
import { Modal } from '../feedback/Modal';
import { AlertBanner } from '../feedback/AlertBanner';
import { NumberInputDisplay } from './NumberInputDisplay';
import { TactileKeypad } from './TactileKeypad';
import { Button } from './Button';
import { THEME_BUTTON_VARIANT, type ThemeVariant } from '../../theme/variants';

export interface NumericKeypadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: React.ReactNode;
  displayLabel: string;
  value: string;
  displayValue?: string;
  unit?: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  submitLabel?: string;
  loading?: boolean;
  loadingText?: string;
  submitDisabled?: boolean;
  allowDecimals?: boolean;
  maxDecimalPlaces?: number;
  variant?: ThemeVariant;
  error?: string | null;
  children?: React.ReactNode;
}

export const NumericKeypadModal: React.FC<NumericKeypadModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  displayLabel,
  value,
  displayValue,
  unit,
  onChange,
  onSubmit,
  submitLabel = 'Apply',
  loading = false,
  loadingText = 'Saving...',
  submitDisabled = false,
  allowDecimals = true,
  maxDecimalPlaces = 2,
  variant = 'blue',
  error,
  children,
}) => {
  const buttonVariant = THEME_BUTTON_VARIANT[variant] || THEME_BUTTON_VARIANT.blue;
  const shownValue = displayValue !== undefined ? displayValue : value || '0';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      disableClose={loading}
    >
      <div className="space-y-4">
        {error && (
          <AlertBanner variant="error" icon="⚠️">
            {error}
          </AlertBanner>
        )}

        <NumberInputDisplay
          label={displayLabel}
          value={shownValue}
          unit={unit}
          variant={variant}
        />

        {children}

        <TactileKeypad
          value={value}
          onChange={onChange}
          allowDecimals={allowDecimals}
          maxDecimalPlaces={maxDecimalPlaces}
          variant={variant}
        />

        <Button
          variant={buttonVariant}
          size="lg"
          fullWidth
          loading={loading}
          loadingText={loadingText}
          disabled={submitDisabled}
          onClick={onSubmit}
        >
          {submitLabel}
        </Button>
      </div>
    </Modal>
  );
};
