import type { Customer, LoanApplication, CreditProduct, Trigger } from '../types';

export const mockCustomer: Customer = {
  id: 'CUST001',
  name: 'Rohan Mehta',
  phone: '+91 98004 XX789',
  email: 'rohan.mehta@enterprises.com',
  tier: 'Gold',
  since: 'Nov 2022',
  cltv: 8.4,
  cltvScore: 84,
  monthlyIncome: 120000,
  foir: 42.5,
  creditScore: 765,
  segment: 'MSME Promoter'
};

// Extended customer data
export const customerExtended = {
  kyc: {
    status: 'Verified',
    cif: 'CIF890321456',
    lastUpdated: 'Feb 2026'
  },
  riskProfile: {
    category: 'Low Risk',
    paymentHistory: '100% on-time',
    defaultHistory: 'None',
    bureauScore: 765
  },
  interactions: {
    ccCalls: 4,
    lastCall: '6 days ago',
    emails: 3,
    chats: 11,
    complaints: 0,
    lastAppLogin: '45 mins ago',
    appUsageFrequency: 'Daily (Business Portal)'
  },
  preferences: {
    contactChannel: 'WhatsApp',
    contactTime: '10 AM - 1 PM',
    language: 'English',
    digitalPreference: 'High'
  },
  linkedAccounts: {
    coBorrowers: ['Kiran Mehta (Business Partner)'],
    deposits: ['9.0% High-Yield FD: ₹12,50,000', 'Current Account: ₹3,18,400'],
    otherLoans: ['Secured Business Loan: ₹15,00,000']
  },
  alerts: {
    bureauTriggers: 0,
    dpd: 0,
    ewsFlags: []
  },
  persona: 'MSME Entrepreneur - Wholesale Trade'
};

export const mockLoanApplication: LoanApplication = {
  id: 'LOAN001',
  customerId: 'CUST001',
  amount: 500000,
  tenure: 24,
  interestRate: 14.5,
  apr: 15.2,
  monthlyEMI: 24126,
  processingFee: 4999,
  totalInterest: 79024,
  totalAmount: 579024,
  prepaymentPenalty: 'Nil after 3 months',
  penalCharges: '2% p.a. on overdue amount',
  status: 'processing',
  type: 'Unsecured Business Growth Loan'
};

export const mockCreditProducts: CreditProduct[] = [
  {
    type: 'Secured MSME Business Loan',
    amount: 1500000,
    outstanding: 1140000,
    emi: 42000,
    tenure: '28/48 mo',
    status: 'active'
  },
  {
    type: 'Commercial Vehicle Loan',
    amount: 850000,
    outstanding: 0,
    emi: 0,
    tenure: 'Closed Dec 2025',
    status: 'closed'
  },
  {
    type: 'Business Overdraft Limit',
    amount: 300000,
    outstanding: 45000,
    emi: 1800,
    tenure: 'Renewable Annually',
    status: 'active'
  }
];

export const mockTriggers: Trigger[] = [
  {
    id: 'T1',
    name: 'MSME Expansion Need Identified',
    type: 'AI Engine',
    urgency: 'high',
    timestamp: new Date(),
    description: 'Customer checked Business Overdraft expansion terms twice in 48 hours. Inflows on Current Account up 22% YoY.'
  },
  {
    id: 'T2',
    name: 'Pre-Approved Offer Re-engagement',
    type: 'Campaign',
    urgency: 'medium',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    description: 'WhatsApp pitch for ₹5L Unsecured Business Growth Loan sent. Message read, CTA clicked.'
  },
  {
    id: 'T3',
    name: 'High-Yield FD Maturity',
    type: 'Event',
    urgency: 'high',
    timestamp: new Date(),
    description: '₹12.5L FD maturing in 15 days. High retention priority. Cross-sell double-yield reinvestment or overdraft against FD.'
  },
  {
    id: 'T4',
    name: 'Clean Credit History',
    type: 'Data',
    urgency: 'low',
    timestamp: new Date(),
    description: 'CIBIL 765. Zero DPD in last 24 months. Fully verified KYC. Safe underwriter rating.'
  }
];

export const spendingCategories = [
  { name: 'Inventory & Raw Materials', percentage: 45, color: '#2A3649' },
  { name: 'Business Rent & Utilities', percentage: 20, color: '#4A5B75' },
  { name: 'Logistics & Supply Chain', percentage: 20, color: '#F5BE18' },
  { name: 'Employee Payroll', percentage: 15, color: '#D49D07' }
];

export const unityCorporateHighlights = {
  deposits: '11,952',
  depositsGrowth: '84%',
  advances: '10,985',
  advancesGrowth: '38%',
  netProfit: '482',
  crar: '29%',
  msmeShare: '47%',
  microfinanceShare: '31%',
  supplyChainShare: '13%'
};
