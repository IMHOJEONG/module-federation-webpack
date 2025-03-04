import TopShipmentCountries from '@/components/logistics/dashboard/top-shipment-countries';
import DispatchPlanning from '@/components/logistics/dashboard/dispatch-planning';
import { DeliveryStatus } from '@/components/logistics/dashboard/delivery-status';
import ShipmentTableWidget from '@/components/logistics/dashboard/shipment-table';
import AvgDeliveryTime from '@/components/logistics/dashboard/avg-delivery-time';
import ComplaintReason from '@/components/logistics/dashboard/complaint-reason';
import LoadingWorkflow from '@/components/logistics/dashboard/loading-workflow';
import OpenSalesOrder from '@/components/logistics/dashboard/open-sales-order';
import ComplaintRate from '@/components/logistics/dashboard/complaint-rate';
import FleetStatus from '@/components/logistics/dashboard/fleet-status';
import TopCustomer from '@/components/logistics/dashboard/top-customer';
import StatCards from '@/components/logistics/dashboard/stat-cards';
import ProfitChart from '@/components/logistics/dashboard/profit';
import dayjs from 'dayjs';

const thisMonth = dayjs(new Date()).format('MMMM YYYY');

export default function LogisticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <StatCards className="col-span-full" />

        <OpenSalesOrder className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <DispatchPlanning className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <LoadingWorkflow className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />

        <FleetStatus className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <ProfitChart className="col-span-full @3xl:col-span-full @[1429px]:col-span-8" />

        <ShipmentTableWidget
          title="Pending Shipments"
          description={`Summary of pending shipments of ${thisMonth}`}
          className="col-span-full"
        />

        <DeliveryStatus className="col-span-full" />

        <AvgDeliveryTime className="col-span-full @4xl:col-span-6 @7xl:col-span-4" />
        <ComplaintRate className="col-span-full @4xl:col-span-6 @7xl:col-span-4" />
        <ComplaintReason className="col-span-full @4xl:col-span-6 @7xl:col-span-4 @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full" />
        <TopShipmentCountries className="col-span-full @4xl:col-span-6 @7xl:col-span-4  @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full" />

        <TopCustomer className="col-span-full @3xl:col-span-full @5xl:col-span-full @7xl:col-span-8" />

        <ShipmentTableWidget
          title="Recent Shipments"
          description={`Summary of recent shipments of ${thisMonth}`}
          className="col-span-full"
        />
      </div>
    </div>
  );
}
