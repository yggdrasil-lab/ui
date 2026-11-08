import React from 'react';
import type { ThemeVariant } from './AppHeader';

export interface BottomNavTabItem {
  id: string;
  label: string;
  ariaLabel?: string;
  icon: React.ReactNode;
  badgeDot?: boolean;
}

const bottomNavVariants: Record<ThemeVariant, string> = {
  amber: 'text-amber-400 bg-amber-500/10 font-semibold active',
  blue: 'text-blue-400 bg-blue-500/10 font-semibold active',
  emerald: 'text-emerald-400 bg-emerald-500/10 font-semibold active',
  purple: 'text-purple-400 bg-purple-500/10 font-semibold active',
  slate: 'text-slate-100 bg-slate-700/50 font-semibold active',
};

export interface BottomNavProps {
  tabs: BottomNavTabItem[];
  activeTab: string;
  onChangeTab: (id: string) => void;
  variant?: ThemeVariant;
  activeTabClass?: string;
  hideOnDesktop?: boolean;
  className?: string;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  variant = 'blue',
  activeTabClass,
  hideOnDesktop = false,
  className = '',
}) => {
  const desktopVisibility = hideOnDesktop ? 'block lg:hidden' : 'block';
  const activeStyle = activeTabClass || bottomNavVariants[variant] || bottomNavVariants.blue;

  return (
    <nav
      className={`${desktopVisibility} fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${className}`}
      style={{
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom, 0px))',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
      }}
      aria-label="Main Mobile Navigation"
    >
      <div
        className="max-w-lg mx-auto grid gap-1 p-2"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`bottom-nav-item py-2 px-1.5 sm:px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${
                isActive ? activeStyle : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={tab.ariaLabel || tab.label}
            >
              <div className="relative flex items-center justify-center">
                {tab.icon}
                {tab.badgeDot && (
                  <span
                    className="active-workout-dot absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                    title="Workout in progress"
                  />
                )}
              </div>
              <span className="text-[10px] truncate max-w-full tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
