import TransactionHistoryTable from '@/components/financial/dashboard/transaction-history-table';
import FinancialStats from '@/components/financial/dashboard/transaction-states';
import Investment from '@/components/financial/dashboard/investment/investment';
import TotalStatistics from '@/components/financial/dashboard/total-statistics';
import IncomeStatement from '@/components/financial/dashboard/income-statement';
import ExpenseHistory from '@/components/financial/dashboard/expense-history';
import BudgetStatus from '@/components/financial/dashboard/budget-status';
import CashInBank from '@/components/financial/dashboard/cash-in-bank';
import CashFlow from '@/components/financial/dashboard/cash-flow';
import Spending from '@/components/financial/dashboard/spending';
import Exchange from '@/components/financial/dashboard/exchange';
import Burn from '@/components/financial/dashboard/burn';

export default function FinancialDashboard() {
  return (
    <div className="grid grid-cols-6 gap-6 @container">
      <FinancialStats className="col-span-full" />
      <TotalStatistics className="col-span-full @[90rem]:col-span-4" />
      <BudgetStatus className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <CashFlow className="col-span-full" />
      <CashInBank className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Burn className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <ExpenseHistory className="col-span-full @[59rem]:col-span-3 @[59rem]:col-start-4 @[59rem]:row-start-3 @[90rem]:col-span-2 @[90rem]:col-start-auto @[90rem]:row-start-auto" />
      <IncomeStatement className="col-span-full" />
      <TransactionHistoryTable className="col-span-full" />
      <Spending className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Exchange className="col-span-full  @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Investment className="col-span-full  @[59rem]:col-span-3 @[90rem]:col-span-2" />
    </div>
  );
}
