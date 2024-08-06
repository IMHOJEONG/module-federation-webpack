import MonthlySalesGrowth from "@/components/executive/monthly-sales-growth";
import OperatingCashFlow from "@/components/executive/operating-cash-flow";
import TotalProfitLoss from "@/components/executive/total-profit-loss";
import SalesByCategory from "@/components/executive/sales-by-category";
import SocialFollowers from "@/components/executive/social-followers";
import RecentCustomers from "@/components/executive/recent-customers";
import RevenueExpense from "@/components/executive/revenue-expense";
import WebAnalytics from "@/components/executive/web-analytics";
import ArrBySignUp from "@/components/executive/arr-by-signup";
import ActiveUsers from "@/components/executive/active-users";
import BiggestDeal from "@/components/executive/biggest-deal";
import StatsCards from "@/components/executive/stats-cards";
import MRRReport from "@/components/executive/mrr-report";
import Forecast from "@/components/executive/forecast";
import cn from "@utils/class-names";

interface IndexProps {
  className?: string;
}

export default function ExecutiveDashboard({ className }: IndexProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 @container 2xl:gap-x-6 2xl:gap-y-7",
        className
      )}
    >
      <StatsCards />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <RevenueExpense />
        <Forecast />
      </div>
      <TotalProfitLoss />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 @7xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-7">
        <MRRReport />
        <SocialFollowers />
        <WebAnalytics />
        <BiggestDeal />
      </div>
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <SalesByCategory />
        <MonthlySalesGrowth />
      </div>
      <OperatingCashFlow />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <ArrBySignUp />
        <ActiveUsers />
      </div>
      <RecentCustomers />
    </div>
  );
}
