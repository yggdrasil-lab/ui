import React from 'react';

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

export const BottomNav: React.FC<BottomNavProps> = ({
  tabs,
  activeTab,
  onChangeTab,
  className = '',
}) => {
  return (
    <nav
      className={`block lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t border-border shadow-2xl pb-safe transform-gpu will-change-transform ${className}`}
      style={{
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
              className={`bottom-nav-item py-2 px-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${
                isActive
                  ? 'text-amber-400 bg-amber-500/10 font-semibold active'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={tab.ariaLabel || tab.label}
            >
              <div className="relative flex items-center justify-center">
                {tab.icon}
                {tab.badgeDot && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>
              <span className="text-[10px] truncate max-w-full">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
