import { default as React } from 'react';
export interface GoalProgressCardProps {
    eyebrow: string;
    currentValueLabel: string;
    deltaLabel?: string;
    deltaPositive?: boolean;
    milestoneLabel?: string;
    milestoneValue?: string;
    progressPercent: number;
    startLabel: string;
    centerLabel?: string;
    targetLabel: string;
    variant?: 'blue' | 'amber' | 'emerald' | 'purple';
    className?: string;
}
export declare const GoalProgressCard: React.FC<GoalProgressCardProps>;
