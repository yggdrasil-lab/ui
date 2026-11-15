import { default as React } from 'react';
import { ThemeVariant } from '../../theme/variants';
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
    variant?: ThemeVariant;
    className?: string;
}
export declare const GoalProgressCard: React.FC<GoalProgressCardProps>;
