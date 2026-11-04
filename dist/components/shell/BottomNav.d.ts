import { default as React } from 'react';
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
    className?: string;
}
export declare const BottomNav: React.FC<BottomNavProps>;
