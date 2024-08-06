import CustomerWithMostTickets from '@/components/support/dashboard/customer-with-most-tickets';
import EmployeesActivity from '@/components/support/dashboard/employees-activity';
import SatisfactionRate from '@/components/support/dashboard/satisfaction-rate';
import CustomerTimezone from '@/components/support/dashboard/customer-timezone';
import TicketActivity from '@/components/support/dashboard/ticket-activity';
import ProblemTypes from '@/components/support/dashboard/problem-types';
import ResponseRate from '@/components/support/dashboard/response-rate';
import CustomerType from '@/components/support/dashboard/customer-type';
import StatCards from '@/components/support/dashboard/stat-cards';
import TicketsTable from '@/components/support/dashboard/tickets';

export default function SupportDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <StatCards className="col-span-full @2xl:grid-cols-2 @6xl:grid-cols-4" />

        <TicketActivity className="col-span-full" />

        <ProblemTypes className="col-span-full @4xl:col-span-6 @6xl:col-span-7 @7xl:col-span-8" />
        <SatisfactionRate className="col-span-full @4xl:col-span-6 @6xl:col-span-5 @7xl:col-span-4" />

        <CustomerWithMostTickets className="col-span-full" />

        <ResponseRate className="col-span-full @4xl:col-span-6 @6xl:col-span-7" />
        <CustomerType className="col-span-full @4xl:col-span-6 @6xl:col-span-5" />

        <TicketsTable className="col-span-full" />

        <EmployeesActivity className="col-span-full @4xl:col-span-6 @5xl:col-span-7" />
        <CustomerTimezone className="col-span-full @4xl:col-span-6 @5xl:col-span-5" />
      </div>
    </div>
  );
}
