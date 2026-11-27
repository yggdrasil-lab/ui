import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface SearchInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    variant?: ThemeVariant;
    rightSlot?: React.ReactNode;
    className?: string;
    'data-testid'?: string;
}
export declare const SearchInput: React.FC<SearchInputProps>;
