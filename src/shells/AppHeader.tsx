import React from 'react';
import { RefreshCw } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import {
  THEME_ACTIVE_TAB,
  THEME_BRAND_BADGE,
  THEME_TEXT_COLORS,
  type ThemeVariant,
} from '../theme/variants';
import { clearBrowserCaches } from '../utils/cacheReset';

export type { ThemeVariant };

export interface HeaderTabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

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

interface HeaderBrandProps {
  brandInitial?: string;
  brandIcon?: React.ReactNode;
  brandBg: string;
  title: string;
  subtitle?: string;
}

const HeaderBrand: React.FC<HeaderBrandProps> = ({
  brandInitial,
  brandIcon,
  brandBg,
  title,
  subtitle,
}) => (
  <div className="flex items-center space-x-3">
    {(brandInitial || brandIcon) && (
      <div className={`w-8 h-8 rounded-ui-control ${brandBg} flex items-center justify-center font-black text-sm shadow-md`}>
        {brandIcon || brandInitial}
      </div>
    )}
    <div>
      <h1 className="text-sm font-bold font-display text-foreground tracking-wide uppercase leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[10px] text-muted font-medium tracking-wider uppercase">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

interface HeaderDesktopTabsProps {
  tabs: HeaderTabItem[];
  activeTab?: string;
  tabActiveStyle: string;
  onChangeTab?: (id: string) => void;
}

const HeaderDesktopTabs: React.FC<HeaderDesktopTabsProps> = ({
  tabs,
  activeTab,
  tabActiveStyle,
  onChangeTab,
}) => (
  <nav className="hidden lg:flex items-center space-x-1 bg-background/80 p-1 rounded-ui-control border border-border/80">
    {tabs.map((tab) => {
      const isActive = activeTab === tab.id;
      return (
        <button
          key={tab.id}
          onClick={() => onChangeTab?.(tab.id)}
          className={`px-3.5 py-1.5 rounded-ui-control text-xs font-semibold flex items-center space-x-1.5 transition-all ${
            isActive ? tabActiveStyle : 'text-muted hover:text-foreground'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      );
    })}
  </nav>
);

const HeaderRefreshButton: React.FC<{
  onRefresh: () => void;
  isRefreshing: boolean;
  spinnerColor: string;
}> = ({ onRefresh, isRefreshing, spinnerColor }) => (
  <button
    onClick={() => {
      void clearBrowserCaches();
      onRefresh();
    }}
    className="p-2 rounded-ui-control bg-background/80 hover:bg-background border border-border text-muted hover:text-foreground active:scale-95 transition-all"
    title="Refresh data"
    aria-label="Refresh data"
    data-testid="refresh-button"
  >
    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? `animate-spin ${spinnerColor}` : ''}`} />
  </button>
);

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { variant = 'blue', tabs, activeTab, activeTabClass, onChangeTab, onRefresh } = props;
  const { isRefreshing = false, actions, className = '' } = props;
  const brandBg = props.brandColor || THEME_BRAND_BADGE[variant] || THEME_BRAND_BADGE.blue;
  const tabActiveStyle = activeTabClass || THEME_ACTIVE_TAB[variant] || THEME_ACTIVE_TAB.blue;
  const spinnerColor = THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;

  return (
    <header
      className={twMerge(
        'border-b border-border/60 bg-[var(--ui-header-bg)] backdrop-blur-md sticky top-0 z-40 w-full pt-safe',
        className
      )}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <HeaderBrand
          brandInitial={props.brandInitial}
          brandIcon={props.brandIcon}
          brandBg={brandBg}
          title={props.title}
          subtitle={props.subtitle}
        />
        {tabs && tabs.length > 0 && (
          <HeaderDesktopTabs
            tabs={tabs}
            activeTab={activeTab}
            tabActiveStyle={tabActiveStyle}
            onChangeTab={onChangeTab}
          />
        )}
        <div className="flex items-center space-x-2">
          {actions}
          {onRefresh && (
            <HeaderRefreshButton
              onRefresh={onRefresh}
              isRefreshing={isRefreshing}
              spinnerColor={spinnerColor}
            />
          )}
        </div>
      </div>
    </header>
  );
};
