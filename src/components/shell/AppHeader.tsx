import React from 'react';
import { RefreshCw } from 'lucide-react';

export interface HeaderTabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export type ThemeVariant = 'amber' | 'blue' | 'emerald' | 'purple' | 'slate';

const variantClasses: Record<ThemeVariant, { brand: string; activeTab: string; spinner: string }> = {
  amber: {
    brand: 'bg-amber-500 text-slate-950',
    activeTab: 'bg-amber-500 text-slate-950 shadow',
    spinner: 'text-amber-400',
  },
  blue: {
    brand: 'bg-blue-600 text-white',
    activeTab: 'bg-blue-600 text-white shadow',
    spinner: 'text-blue-400',
  },
  emerald: {
    brand: 'bg-emerald-500 text-slate-950',
    activeTab: 'bg-emerald-500 text-slate-950 shadow',
    spinner: 'text-emerald-400',
  },
  purple: {
    brand: 'bg-purple-600 text-white',
    activeTab: 'bg-purple-600 text-white shadow',
    spinner: 'text-purple-400',
  },
  slate: {
    brand: 'bg-slate-700 text-white',
    activeTab: 'bg-slate-200 text-slate-950 shadow',
    spinner: 'text-slate-300',
  },
};

export interface AppHeaderProps {
  brandInitial?: string;
  brandIcon?: React.ReactNode;
  brandColor?: string;
  variant?: ThemeVariant;
  title: string;
  subtitle?: string;
  tabs?: HeaderTabItem[];
  activeTab?: string;
  activeTabClass?: string;
  onChangeTab?: (id: string) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  actions?: React.ReactNode;
  className?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  brandInitial,
  brandIcon,
  brandColor,
  variant = 'blue',
  title,
  subtitle,
  tabs,
  activeTab,
  activeTabClass,
  onChangeTab,
  onRefresh,
  isRefreshing = false,
  actions,
  className = '',
}) => {
  const v = variantClasses[variant] || variantClasses.blue;
  const brandBg = brandColor || v.brand;
  const tabActiveStyle = activeTabClass || v.activeTab;

  return (
    <header className={`border-b border-border/60 bg-card/60 backdrop-blur sticky top-0 z-40 w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          {(brandInitial || brandIcon) && (
            <div className={`w-8 h-8 rounded-xl ${brandBg} flex items-center justify-center font-black text-sm shadow-md`}>
              {brandIcon || brandInitial}
            </div>
          )}
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

        {/* Desktop Navigation Tabs */}
        {tabs && tabs.length > 0 && (
          <nav className="hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-xl border border-border/80">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onChangeTab?.(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    isActive ? tabActiveStyle : 'text-slate-400 hover:text-slate-200'
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
                className={`w-3.5 h-3.5 ${isRefreshing ? `animate-spin ${v.spinner}` : ''}`}
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
