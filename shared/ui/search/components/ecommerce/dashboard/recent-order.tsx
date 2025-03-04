import { getWidgetColumns } from '@/components/ecommerce/order/order-list/columns';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { orderData } from '@/data/order-data';

export default function RecentOrder({ className }: { className?: string }) {
  return (
    <BasicTableWidget
      title={'Recent Order'}
      data={orderData}
      // @ts-ignore
      getColumns={getWidgetColumns}
      className={className}
      enablePagination
      noGutter
      searchPlaceholder="Search order..."
      variant="modern"
    />
  );
}
