import React from 'react';
import { RefreshCw } from 'lucide-react';

export interface HeaderTabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface AppHeaderProps {
  brandInitial: string;
  brandColor?: string;
  title: string;
  subtitle?: string;
  tabs?: HeaderTabItem[];
  activeTab?: string;
  onChangeTab?: (id: string) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  actions?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  brandInitial,
  brandColor = 'bg-amber-500 text-slate-950',
  title,
  subtitle,
  tabs,
  activeTab,
  onChangeTab,
  onRefresh,
  isRefreshing = false,
  actions,
}) => {
  return (
    <header className="border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-xl ${brandColor} flex items-center justify-center font-black text-sm shadow-md`}>
            {brandInitial}
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-100 tracking-wide uppercase leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Desktop Tabs */}
        {tabs && tabs.length > 0 && (
          <nav className="hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChangeTab?.(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Actions & Subtle Refresh */}
        <div className="flex items-center space-x-2">
          {actions}

          {onRefresh && (
            <button
              onClick={onRefresh}
              className="p-2 rounded-xl bg-background/80 hover:bg-background border border-border text-slate-400 hover:text-slate-200 active:scale-95 transition-all"
              title="Refresh data"
              aria-label="Refresh data"
              data-testid="refresh-button"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
