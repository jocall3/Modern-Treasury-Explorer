
import React from 'react';

const mockAccounts = [
  { id: 'acc_123', name: 'Primary Operating', type: 'Checking', balance: 1240500.50, currency: 'USD', status: 'active' },
  { id: 'acc_456', name: 'Payroll Reserve', type: 'Checking', balance: 500000.00, currency: 'USD', status: 'active' },
  { id: 'acc_789', name: 'Investment House', type: 'Savings', balance: 710000.25, currency: 'USD', status: 'active' },
];

const AccountsView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Account Name</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Balance</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {mockAccounts.map((acc) => (
            <tr key={acc.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-medium text-slate-900">{acc.name}</div>
                <div className="text-xs text-slate-500">{acc.id}</div>
              </td>
              <td className="px-6 py-4 text-slate-600">{acc.type}</td>
              <td className="px-6 py-4 font-mono text-slate-900">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: acc.currency }).format(acc.balance)}
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  {acc.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsView;
