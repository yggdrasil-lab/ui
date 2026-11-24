import React from 'react';

export interface AppShellProps {
  header?: React.ReactNode;
  bottomNav?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AppShell: React.FC<AppShellProps> = ({
  header,
  bottomNav,
  children,
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-background text-slate-100 flex flex-col justify-between w-full selection:bg-amber-500 selection:text-black ${className}`}>
      {header}

      {/* Main Content Area with mobile safe padding clearance above bottom nav */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 pb-24 lg:pb-8 flex-1">
        {children}
      </main>

      {bottomNav}
    </div>
  );
};
