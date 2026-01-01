
import React from 'react';

const mockPayments = [
  { id: 'po_1', amount: 5400.00, direction: 'debit', type: 'ACH', status: 'completed', date: '2024-03-24' },
  { id: 'po_2', amount: 120.50, direction: 'credit', type: 'RTP', status: 'pending', date: '2024-03-25' },
  { id: 'po_3', amount: 15000.00, direction: 'debit', type: 'Wire', status: 'failed', date: '2024-03-25' },
];

const PaymentsView: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {mockPayments.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-slate-600 text-sm">{p.date}</td>
              <td className="px-6 py-4 font-medium text-slate-900">{p.id}</td>
              <td className={`px-6 py-4 font-mono font-bold ${p.direction === 'credit' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {p.direction === 'credit' ? '+' : '-'}${p.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-slate-600 text-sm">{p.type}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  p.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                  p.status === 'pending' ? 'bg-amber-100 text-amber-800' :
                  'bg-rose-100 text-rose-800'
                }`}>
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsView;
