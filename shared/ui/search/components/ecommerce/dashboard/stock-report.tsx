import { getColumns } from '@/components/ecommerce/product/product-list/columns';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { productsData } from '@/data/products-data';

export default function StockReport({ className }: { className?: string }) {
  return (
    <BasicTableWidget
      title={'Stock Report'}
      data={productsData}
      // @ts-ignore
      getColumns={getColumns}
      pageSize={6}
      enablePagination
      noGutter
      paginatorClassName="pe-0 lg:pe-2"
      searchPlaceholder="Search product..."
      variant="modern"
      className={className}
    />
  );
}
