import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { getColumns } from '@/components/executive/recent-customers/columns';
import { recentCustomers } from '@/data/recent-customers-data';

export default function RecentCustomers({ className }: { className?: string }) {
  return (
    <BasicTableWidget
      title="Recent Customers"
      data={recentCustomers}
      //@ts-ignore
      getColumns={getColumns}
      className={className}
      enablePagination
      noGutter
      searchPlaceholder="Search for customer..."
      variant="modern"
    />
  );
}
