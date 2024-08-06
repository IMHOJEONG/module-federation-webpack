import { getColumns } from "@/components/logistics/dashboard/top-customer/columns";
import BasicTableWidget from "@/components/controlled-table/basic-table-widget";
import { topCustomers } from "@/data/top-customer";
import { useMedia } from "@hooks/use-media";
import cn from "@utils/class-names";

interface IndexProps {
  className?: string;
}

export default function TopCustomer({ className }: IndexProps) {
  const isBigScreen = useMedia("(min-width: 2100px)", false);
  return (
    <BasicTableWidget
      title="Top Customer"
      className={cn(className)}
      data={topCustomers}
      // @ts-ignore
      getColumns={getColumns}
      pageSize={isBigScreen ? 6 : 5}
      enablePagination
      noGutter
      scroll={{
        x: 900,
      }}
      searchPlaceholder="Search customer"
      paginatorClassName="pe-0 lg:pe-2"
    />
  );
}
