
export interface Account {
  id: string;
  accountNumber: string;
  accountType: string;
  balance: number;
  currency: string;
  status: 'active' | 'inactive';
}

export interface Counterparty {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface PaymentOrder {
  id: string;
  amount: number;
  direction: 'credit' | 'debit';
  type: string;
  status: 'pending' | 'completed' | 'failed';
  effectiveDate: string;
}

export type ViewType = 'dashboard' | 'accounts' | 'counterparties' | 'payments' | 'ai-assistant';
