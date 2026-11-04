import { default as React } from 'react';
import { ThemeVariant } from './AppHeader';
export interface BottomNavTabItem {
    id: string;
    label: string;
    ariaLabel?: string;
    icon: React.ReactNode;
    badgeDot?: boolean;
}
export interface BottomNavProps {
    tabs: BottomNavTabItem[];
    activeTab: string;
    onChangeTab: (id: string) => void;
    variant?: ThemeVariant;
    activeTabClass?: string;
    hideOnDesktop?: boolean;
    className?: string;
}
export declare const BottomNav: React.FC<BottomNavProps>;
