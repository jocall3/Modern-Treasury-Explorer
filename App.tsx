
import React, { useState } from 'react';
import { ViewType } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AccountsView from './components/AccountsView';
import CounterpartiesView from './components/CounterpartiesView';
import PaymentsView from './components/PaymentsView';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard': return <Dashboard />;
      case 'accounts': return <AccountsView />;
      case 'counterparties': return <CounterpartiesView />;
      case 'payments': return <PaymentsView />;
      case 'ai-assistant': return <AIAssistant />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <main className="flex-1 overflow-y-auto relative p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 capitalize">
              {activeView.replace('-', ' ')}
            </h1>
            <p className="text-slate-500">Modern Treasury API Explorer</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <i className="fas fa-bell"></i>
            </button>
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              MT
            </div>
          </div>
        </header>
        
        <div className="animate-fadeIn">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
