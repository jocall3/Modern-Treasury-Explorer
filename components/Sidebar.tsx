
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fa-chart-pie', label: 'Dashboard' },
    { id: 'accounts', icon: 'fa-university', label: 'Accounts' },
    { id: 'counterparties', icon: 'fa-users', label: 'Counterparties' },
    { id: 'payments', icon: 'fa-exchange-alt', label: 'Payments' },
    { id: 'ai-assistant', icon: 'fa-robot', label: 'AI Assistant' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-10">
          <div className="bg-blue-600 h-8 w-8 rounded-lg flex items-center justify-center">
            <i className="fas fa-gem text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">Treasury AI</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeView === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              <i className={`fas ${item.icon} w-5`}></i>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100">
        <div className="bg-slate-900 rounded-2xl p-4 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white text-sm font-semibold mb-1">Scale your treasury</p>
            <p className="text-slate-400 text-xs mb-3">Upgrade to Pro for API key automation.</p>
            <button className="w-full bg-blue-600 text-white text-xs py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Upgrade Now
            </button>
          </div>
          <div className="absolute top-0 right-0 -mr-4 -mt-4 h-24 w-24 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
