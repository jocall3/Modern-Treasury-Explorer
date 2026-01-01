
import React from 'react';

const mockCounterparties = [
  { id: 'cp_1', name: 'Stripe, Inc.', email: 'billing@stripe.com', created: '2023-10-12' },
  { id: 'cp_2', name: 'Google Cloud', email: 'payments@google.com', created: '2023-11-05' },
  { id: 'cp_3', name: 'Amazon Web Services', email: 'finance@amazon.com', created: '2023-12-01' },
];

const CounterpartiesView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800">Active Entities</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
          <i className="fas fa-plus mr-2"></i> Add Counterparty
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCounterparties.map((cp) => (
          <div key={cp.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group hover:border-blue-300 transition-colors cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{cp.name}</h3>
                <p className="text-xs text-slate-500">ID: {cp.id}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Email</span>
                <span className="text-slate-900">{cp.email}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Member Since</span>
                <span className="text-slate-900">{cp.created}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterpartiesView;
